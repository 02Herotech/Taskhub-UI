import { noAuthFetchBase } from "@/redux";
import { getRequest } from "@/redux/request-types";

import { createApi } from "@reduxjs/toolkit/query/react";

export const serviceProviderApi = createApi({
  reducerPath: "serviceProviderApi",
  baseQuery: noAuthFetchBase,
  endpoints: (builder) => ({
    getPeculiarTasks: builder.query({
      query: () => getRequest("/service-provider/peculiar-tasks"),
    }),
  }),
});

export const { useGetPeculiarTasksQuery } = serviceProviderApi;
