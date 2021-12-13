import React from "react";
import { gql } from "@ts-gql/tag";
import { useQuery } from "@ts-gql/apollo";
import { NextPage } from "next";
import Link from "next/link";
import {
  DocumentRenderer,
  DocumentRendererProps,
} from "@keystone-6/document-renderer";
import { useRouter } from "next/router";

const renderers: DocumentRendererProps["renderers"] = {
  inline: {
    relationship({ relationship, data }) {
      // mention is a type, and there it is
      if (relationship === "mention") {
        console.log(data);

        if (data === null || data.data === undefined) {
          return <span>[unknown author]</span>;
        } else {
          return (
            <Link href={`/character/${data.data.slug}`}>{data.data.name}</Link>
          );
        }
      }
      return null;
    },
  },
};

const query = gql`
  query FactionView($slug: String) {
    faction(where: { slug: $slug }) {
      name
      id
      description {
        document(hydrateRelationships: true)
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
      <DocumentRenderer
        renderers={renderers}
        document={faction.description?.document}
      />
    </div>
  );
};

export default Page;
