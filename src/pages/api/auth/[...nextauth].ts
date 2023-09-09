import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import axios from "axios";
import { baseUrl } from "@/redux";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const response = await axios.post(baseUrl + "customer/login", {
          emailAddress: email,
          password,
        });

        const { data, status } = response;

        if (status === 200) {
          return {
            ...data,
            jwtToken: data.token,
          };
        }
        return null;
      },
    }),
  ],
  secret: process.env.SECRET,
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      // If there's any change to the session
      if (trigger === "update") {
        return { ...token, ...session.user };
      }
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    },
  },
});
