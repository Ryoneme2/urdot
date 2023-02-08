import NextAuth, { type NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import GoogleProvider from "next-auth/providers/google";
// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import { env } from "../../../env/server.mjs";
import { prisma } from "../../../server/db/client";

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
    async redirect(params) {
      const { url } = params

      // url is just a path, e.g.: /videos/pets
      if (!url.startsWith('http')) return url

      // If we have a callback use only its relative path
      const callbackUrl = new URL(url).searchParams.get('callbackUrl')
      if (!callbackUrl) return url

      return new URL(callbackUrl as string).pathname
    },
  },
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  secret: env.NEXTAUTH_SECRET,
  providers: [
    DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET
    })
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
