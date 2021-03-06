import React from "react";
import { gql } from "@ts-gql/tag";
import { useQuery } from "@ts-gql/apollo";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { DocumentRenderer } from "../../components/document";

const query = gql`
  query FactionView($slug: String) {
    faction(where: { slug: $slug }) {
      name
      id
      description {
        document(hydrateRelationships: true)
      }
      tags {
        name
        id
      }
      characters {
        name
        slug
        id
      }
    }
  }
` as import("../../__generated__/ts-gql/FactionView").type;

const Loading = () => <div>Loading . . .</div>;

const Error = () => (
  <div>We cannot find this page right now - is the URL right?</div>
);

const Page: NextPage = () => {
  const router = useRouter();
  const { name } = router.query;

  const { data, loading } = useQuery(query, {
    variables: { slug: name as string },
  });

  const faction = data?.faction;

  if (loading) {
    return <Loading />;
  }

  if (!faction) {
    return <Error />;
  }

  return (
    <div>
      <h1>{faction.name}</h1>
      <div>
        {faction.tags?.map(({ name }, i) => (
          <span
            style={{
              padding: "0px 8px",
              marginLeft: 8,
              backgroundColor: ["thistle", "plum"][i],
              borderRadius: 3,
            }}
            key={name}
          >
            {name}
          </span>
        ))}
      </div>
      <h2>Description</h2>
      <DocumentRenderer document={faction.description?.document} />
      <h2>Relations</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {faction.characters?.map(({ name, slug }) => (
          <div
            style={{
              width: 200,
              height: 60,
              backgroundColor: "thistle",
              textAlign: "center",
              margin: 8,
              paddingTop: 8,
              borderRadius: 3,
            }}
            key={slug}
          >
            <Link href={`/character/${slug}`}>{name}</Link>
          </div>
        ))}
      </div>
      <h3>Characters</h3>
      <h3>Projects</h3>
      <h3>Locations</h3>
    </div>
  );
};

export default Page;
