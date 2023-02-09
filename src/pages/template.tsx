import { type NextPage, type GetServerSidePropsContext } from "next";
import Head from "next/head";

import * as Layout from "../layouts";
import * as Component from "../components";

import { trpc } from "../utils/trpc";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Template: NextPage = () => {
  const { data: myLink } = trpc.URL.getAllUrls.useQuery();

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
        <link rel="icon" href="/250px.jpg" />
      </Head>
      <Layout.MainLayout centered={false}>
        <div className="mt-4 flex justify-center px-14">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {myLink?.urls
              ? myLink.urls.map((link) => (
                  <Component.BoxShowLink
                    key={link.id}
                    base={link.url}
                    clickedNum={link.clicks}
                    shorted={link.shorterUrls?.shorterUrl || "Link is expired"}
                  />
                ))
              : new Array(12)
                  .fill({})
                  .map((_, index) => <Component.BoxShowLoading key={index} />)}
          </div>
        </div>
      </Layout.MainLayout>
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const cookieName = `${
    process.env.NODE_ENV === "production" ? "__Secure-" : ""
  }next-auth.session-token`;

  const cookies: string | null = JSON.parse(
    JSON.stringify(context.req.cookies)
  )[cookieName];

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
