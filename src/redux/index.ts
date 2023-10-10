import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { getSession } from "next-auth/react";

export const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const noAuthFetchBase = fetchBaseQuery({
  baseUrl,
});

export const authFetchBase = fetchBaseQuery({
  baseUrl,
  prepareHeaders: async (headers) => {
    const session = await getSession();
    //@ts-ignore
    const token = session?.user?.jwtToken;

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
      headers.set("Content-Type", "application/json-patch+json");
    }
    return headers;
  },
});
