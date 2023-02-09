import { type NextPage, type GetServerSidePropsContext } from "next";
import Head from "next/head";

import * as Layout from "../layouts";
import * as Component from "../components";

import { trpc } from "../utils/trpc";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Template: NextPage = () => {
  return (
    <>
      <Head>
        <title>urDot : URL Shorter</title>
        <meta
          name="description"
          content="Let's Make every line shorter and easy to send to your client."
        />
        <meta property="og:url" content="https://urdot.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="minrer" />
        <meta property="og:title" content={"rDot : URL Shorter"} />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:description"
          content="Let's Make every line shorter and easy to send to your client."
        />
        <meta property="og:image" content={"/1.png"} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.MainLayout centered={false}>{}</Layout.MainLayout>
    </>
  );
};

export default Template;

export async function getServerSideProps() {
  return {
    redirect: {
      permanent: false,
      destination: "/",
    },
    props: {},
  };
}
