import React from "react";
import { gql } from "@ts-gql/tag";
import { useQuery } from "@ts-gql/apollo";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { DocumentRenderer } from "../../components/document";

const query = gql`
  query CharacterView($slug: String) {
    character(where: { slug: $slug }) {
      name
      id
      description
      details {
        document(hydrateRelationships: true)
      }
      tags {
        name
        id
      }
      factions {
        name
        slug
        id
      }
    }
  }
` as import("../../__generated__/ts-gql/CharacterView").type;

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

  const character = data?.character;

  if (loading) {
    return <Loading />;
  }

  if (!character) {
    return <Error />;
  }

  return (
    <div>
      <h1>{character.name}</h1>
      <div>
        {character.tags?.map(({ name }, i) => (
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
      <div>{character.description}</div>
      <h2>Description</h2>
      <DocumentRenderer document={character.details?.document} />
      <h2>Relations</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {character.factions?.map(({ name, slug }) => (
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
            <Link href={`/factions/${slug}`}>{name}</Link>
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
