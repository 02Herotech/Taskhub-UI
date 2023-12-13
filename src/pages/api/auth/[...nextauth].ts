
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { useState } from "react"; 
import { Session } from "next-auth";
import axios from "axios";
import { baseUrl } from "@/redux";
import { useSession } from "next-auth/react";



export default NextAuth({
  session: {
    strategy: "jwt",
    // maxAge: 60 * 24 * 60 * 60, // 60 days in seconds
  },
  pages: {
    signIn: "/auth/login",
  },
  providers: [
    CredentialsProvider({ 
      name: "Credentials",
      id: "credentials",
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        try {
        
        const response = await axios.post("https://service-rppp.onrender.com/api/v1/auth/login", {
          emailAddress: email,
          password,
        });
        
        const { data, status } = response;
        console.log(response)

        if (status === 200) {
          return {
            ...data,
            // jwtToken: data.token,
            jwtt: data.token,

          };
        } else {
          // throw new Error(`Unexpected status error:, ${status}`);
          console.log("Unexpected status error: ", status);
          return null
        }
      } catch (error) {
        console.error("Request error: ", error);
        return null
      }
      
      },
    }),
  ],
  
    secret: process.env.JWT_SECRET,

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


