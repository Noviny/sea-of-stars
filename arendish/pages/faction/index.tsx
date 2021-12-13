import React from "react";
import { gql } from "@ts-gql/tag";
import { useQuery } from "@ts-gql/apollo";
import { NextPage } from "next";
import Link from "next/link";

const query = gql`
  query FactionsHome {
    factions {
      name
      slug
      id
    }
  }
` as import("../../__generated__/ts-gql/FactionsHome").type;

const Page: NextPage = () => {
  const { data } = useQuery(query);

  const factions = data?.factions;

  return (
    <div>
      <h1>Factions Page</h1>
      <ul>
        {factions?.map(({ name, slug, id }) => (
          <li key={id}>
            <Link href={`/factions/${slug}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
