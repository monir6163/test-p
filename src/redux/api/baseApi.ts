import { axiosBaseQuery } from '@/lib/axiosBaseQuery';
import { createApi } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BACKEND_API_URL as string,
  }),
  endpoints: () => ({}),
  tagTypes: ['users', 'user', 'cards', 'card'],
});

export const {} = baseApi;
