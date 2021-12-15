import React from "react";
import { gql } from "@ts-gql/tag";
import { useQuery } from "@ts-gql/apollo";
import { NextPage } from "next";
import Link from "next/link";
import { DocumentRenderer } from "../../components/document";

const query = gql`
  query FactionsHome {
    factions {
      name
      slug
      id
      status
      affiliations
      tier
      hold
      description {
        document
      }
      quiet_changes
      dyer_interactions
    }
  }
` as import("../../__generated__/ts-gql/FactionsHome").type;

const Page: NextPage = () => {
  const { data } = useQuery(query);

  const factions = data?.factions;

  return (
    <div>
      <h1>Factions Page</h1>
      <table>
        <thead>
          <tr>
            <th>Faction</th>
            <th>Status</th>
            <th>Affiliations</th>
            <th>Tier</th>
            <th>Hold</th>
            <th>Description</th>
            <th>Quiet Changes</th>
            <th>Dyer Interactions</th>
          </tr>
        </thead>
        <tbody>
          {factions?.map(
            ({
              name,
              slug,
              status,
              affiliations,
              tier,
              description,
              hold,
              quiet_changes,
              dyer_interactions,
              id,
            }) => (
              <tr key={slug}>
                <th>
                  <Link href={`/faction/${slug}`}>{name}</Link>
                </th>
                <th>{status}</th>
                <th>{affiliations}</th>
                <th>{tier}</th>
                <th>{hold}</th>
                {/* placeholder for description */}
                <th>
                  <DocumentRenderer document={description?.document} />
                </th>
                <th>{quiet_changes}</th>
                <th>{dyer_interactions}</th>
              </tr>
            )
          )}
        </tbody>
      </table>
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
