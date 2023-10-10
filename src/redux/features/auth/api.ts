import { noAuthFetchBase } from "@/redux";
import { POST } from "@/redux/request-types";

import { createApi } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: noAuthFetchBase,
  endpoints: (builder) => ({
    CustomerSignUp: builder.mutation({
      query: (body) => POST("customer/sign-up", body),
    }),
    ServiceProviderSignUp: builder.mutation({
      query: (body) => POST("service_provider/sign-up", body),
    }),
  }),
});

export const { useCustomerSignUpMutation, useServiceProviderSignUpMutation } = authApi;
