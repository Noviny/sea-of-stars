import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { gql } from "@ts-gql/tag";
import { useQuery } from "@ts-gql/apollo";
import { DocumentRenderer } from "@keystone-6/document-renderer";

const query = gql`
  query SomethingUnique {
    notes {
      id
      content {
        document(hydrateRelationships: true)
      }
    }
  }
` as import("../__generated__/ts-gql/SomethingUnique").type;

const Home: NextPage = () => {
  const { error, data } = useQuery(query);

  return (
    <div className={styles.container}>
      <h1>We need some places</h1>
      <ul>
        <li>
          <Link href="/faction">Factions</Link>
        </li>
        <li>
          <Link href="/character">Characters</Link>
        </li>
        <li>
          <Link href="/location">Locations</Link>
        </li>
        <li>
          <Link href="/clock">clocks</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
