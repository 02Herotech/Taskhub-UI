import { noAuthFetchBase } from "@/redux";
import { getRequest } from "@/redux/request-types";
import { createApi } from "@reduxjs/toolkit/query/react";

export const customerApi = createApi({
    reducerPath: "customerApi",
    baseQuery: noAuthFetchBase,
    endpoints: (builder) => ({
        getPeculiarTasks: builder.query({
            query: () => getRequest("/service-provider/peculiar-tasks"),
        }),
    }),
});

export const { useGetPeculiarTasksQuery } = customerApi;
