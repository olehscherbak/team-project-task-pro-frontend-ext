import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tasksApi = createApi({
  reducerPath: 'tasksApi',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://task-pro-app-ext.onrender.com/api/',
    baseUrl: 'http://localhost:5000/api/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Profile'],
  endpoints: (build) => ({
    // createTask: build.mutation({
    //   query: ({ values, boardId, columnId }) => ({
    //     url: `/tasks/${boardId}/${columnId}`,
    //     method: 'POST',
    //     body: values,
    //   }),
    //   invalidatesTags: ['Profile'],
    // }),
    updateTask: build.mutation({
      query: (formData, id) => ({
        url: `/tasks/${id}`,
        method: 'PATCH',
        body: formData,
      }),
      invalidatesTags: ['Profile'],
    }),
  }),
});

export const { useCreateTaskMutation, useUpdateTaskMutation } = tasksApi;
