import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import * as Layout from "../layouts";
import * as Component from "../components";

import { trpc } from "../utils/trpc";
import { useState } from "react";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  const [url, setUrl] = useState<string>("");

  return (
    <>
      <Head>
        <title>urDot UrlShorter</title>
        <meta name="description" content="website that make your url shorter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout.MainLayout>
        <div className="flex h-full w-full -translate-y-[50%] transform flex-col items-center justify-center gap-8">
          <Component.SliderText slides={["urDot", "UrlShorter"]} />
          <Component.Input
            value={url}
            onChange={(event) => {
              setUrl(event.target.value);
            }}
            placeholder="Place your url here..."
          />
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
