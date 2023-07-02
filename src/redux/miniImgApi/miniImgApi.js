import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const miniImgApi = createApi({
  reducerPath: 'miniImg',
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
  tagTypes: ['MiniImg'],
  endpoints: (builder) => ({
    getMiniImg: builder.query({
      query: () => '/miniImages',
      providesTags: ['MiniImg'],
    }),
  }),
});

export const { useGetMiniImgQuery } = miniImgApi;
