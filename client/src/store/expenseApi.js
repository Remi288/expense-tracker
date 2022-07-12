import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURL = "http://localhost:8080";
export const expenseApi = createApi({
    // reducerPath: "expenseApi",
    baseQuery: fetchBaseQuery({baseUrl: baseURL }),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => 'api/categories',
            providesTags: ["categories"],
        }),

        // get labels
        getLabels: builder.query({
            query: () => 'api/labels',
            providesTags: ["transaction"],
        }),

        // add Transaction
        addTransaction: builder.mutation({
            query: (transaction) => ({
                method: "POST",
                url: "api/transactions",
                body: transaction,
            }),
            invalidatesTags: ["transaction"],
            
        }),

        // delete transaction
        deleteTransaction: builder.mutation({
            query: (recordid) => ({
                method: "DELETE",
                url: 'api/transactions',
                body: recordid,
            }),
            invalidatesTags: ["transaction"],
        }),
    })
})

export default expenseApi;
export const { useGetCategoriesQuery, useGetLabelsQuery, useAddTransactionMutation, useDeleteTransactionMutation } = expenseApi;