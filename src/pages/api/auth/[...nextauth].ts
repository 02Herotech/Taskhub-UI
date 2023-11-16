import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { useState } from "react"; 

// import { Session } from "next-auth";

import axios from "axios";
import { baseUrl } from "@/redux";


// const [postURL, setPostURl] = useState("customer/login")

export default NextAuth({


  session: {
    strategy: "jwt",
  },
  pages: {
    customerSignIn: "/auth/CustomerLogin",
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
        
          
        const response = await axios.post("https://service-rppp.onrender.com/api/v1/customer/login", {
          emailAddress: email,
          password,
        });

        const { data, status } = response;

        if (status === 200) {
          return {
            ...data,
            jwtToken: data.token,
          };
        } else {
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


