import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Beer } from 'interfaces/Beer.interface';

export const beersApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.punkapi.com/v2',
  }),
  tagTypes: ['Beers'],
  endpoints: (builder) => ({
    getBeers: builder.query<Beer[], number>({
      query: (page) => `/beers?per_page=20&page=${page}`,
      providesTags: ['Beers'],
    }),
    getBeersById: builder.query<Beer[], string[]>({
      query: (id) => `/beers?ids=${id.map((id) => `${id}|`)}`,
    }),
  }),
});

export const { useLazyGetBeersQuery, useGetBeersByIdQuery } = beersApi;
