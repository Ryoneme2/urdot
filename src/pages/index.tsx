import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import * as Layout from "../layouts";
import * as Component from "../components";

import { trpc } from "../utils/trpc";
import { useState } from "react";
import { Card, Loading, Text } from "@nextui-org/react";

const Home: NextPage = () => {
  const [url, setUrl] = useState<string>("");
  const urlMutation = trpc.executeUrl.newUrl.useMutation();

  const handlerSubmit = () => urlMutation.mutate({ url });
  const clickCopy = () => {
    navigator.clipboard.writeText(urlMutation.data?.url?.shorterUrl || "");
  };

  return (
    <>
      <Head>
        <title>urDot UrlShorter</title>
        <meta name="description" content="website that make your url shorter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.MainLayout>
        <div className="flex h-full w-full -translate-y-[30%] transform flex-col items-center justify-center gap-8">
          <Component.SliderText slides={["urDot", "UrlShorter"]} />
          <Component.Input
            value={url}
            onChange={(event) => {
              setUrl(event.target.value);
            }}
            placeholder="Place your url here..."
            righticon={{
              children: !urlMutation.isLoading ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 -translate-x-1 text-gray-400 transition-all duration-300 hover:translate-x-[0.5px] hover:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              ) : (
                <Loading color={"white"} type="points" />
              ),
              onClick: async () => {
                handlerSubmit();
                console.log("clicked");
              },
            }}
          />
          {urlMutation.error && (
            <p>Something went wrong! {urlMutation.error.message}</p>
          )}
          {urlMutation.isSuccess ? (
            <Card
              className="flex-grow-1 flex"
              css={{ px: "$6", mw: "400px" }}
              variant="bordered"
            >
              <Card.Body>
                <div
                  className="flex cursor-pointer items-center justify-between"
                  onClick={clickCopy}
                >
                  <Text>{urlMutation.data?.url?.shorterUrl}</Text>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-copy"
                      width={36}
                      height={36}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#eeeeee"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <rect x={8} y={8} width={12} height={12} rx={2} />
                      <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
                    </svg>
                  </div>
                </div>
              </Card.Body>
            </Card>
          ) : (
            <></>
          )}
        </div>
      </Layout.MainLayout>
    </>
  );
};

export default Home;

// const AuthShowcase: React.FC = () => {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined }
//   );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => signOut() : () => signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// };
