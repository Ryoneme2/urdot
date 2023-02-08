import {
  GetServerSideProps,
  type NextPage,
  type GetServerSidePropsContext,
} from "next";
import Head from "next/head";

import * as Layout from "../layouts";
import * as Component from "../components";

import { trpc } from "../utils/trpc";
import { useState } from "react";
import { Card, Loading, Text } from "@nextui-org/react";
import { useSession } from "next-auth/react";

const MyLink: NextPage = () => {
  const { data: myLink } = trpc.URL.getAllUrls.useQuery();

  return (
    <>
      <Head>
        <title>urDot UrlShorter</title>
        <meta name="description" content="website that make your url shorter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.MainLayout centered={false}>
        <ul>
          {myLink?.urls &&
            myLink.urls.map((link) => (
              <li key={link.id}>
                <a href={link.url}>{link.shorterUrls?.shorterUrl}</a>
              </li>
            ))}
        </ul>
      </Layout.MainLayout>
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const cookies: string | null = JSON.parse(
    JSON.stringify(context.req.cookies)
  )["next-auth.session-token"];

  if (!cookies)
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
      props: {},
    };

  return {
    props: {},
  };
}

export default MyLink;
