import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const helpApi = createApi({
  reducerPath: 'helpApi',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://task-pro-app-ext.onrender.com/api',
    baseUrl: 'http://localhost:5000/api',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    postComment: builder.mutation({
      query: ({ comment, email }) => ({
        url: '/help/',
        method: 'POST',
        body: { comment, email },
      }),
    }),
  }),
});

export const { usePostCommentMutation } = helpApi;
