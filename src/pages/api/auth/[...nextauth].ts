import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import { Session } from "next-auth";

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
      name: "credentials",
      id: "credentials",
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        if (email !== "cyprusakanni@gmail.com" || password !== "Ibiayo@1205"){
          throw new Error("invalid credentials")
        }
        return { id: '1234', name: "cy baby", email: 'jsjj@gmail.com'}
      
      //   try {
        
      //   const response = await axios.post(baseUrl + "customer/login", {
      //     emailAddress: email,
      //     password,
      //   });

      //   const { data, status } = response;

      //   if (status === 200) {
      //     return {
      //       ...data,
      //       jwtToken: data.token,
      //     };
      //   } else {
      //     console.log("Unexpected status error: ", status);
      //     return null
      //   }
      // } catch (error) {
      //   console.error("Request error: ", error);
      //   return null
      // }
      
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


