import { baseApi } from './baseApi';

const cardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCard: builder.mutation({
      query: (cardData) => {
        return {
          url: '/cards',
          method: 'POST',
          data: cardData,
        };
      },
      invalidatesTags: ['cards'],
    }),
    getCards: builder.query({
      query: (query) => {
        return {
          url: `/cards?${query}`,
          method: 'GET',
        };
      },
      providesTags: ['cards'],
    }),
    getSingleCard: builder.query({
      query: (id) => {
        return {
          url: `/cards/${id}`,
          method: 'GET',
        };
      },
      providesTags: ['card'],
    }),
    deleteACard: builder.mutation({
      query: (id) => {
        return {
          url: `/cards/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['cards'],
    }),
  }),
});

export const {
  useCreateCardMutation,
  useGetCardsQuery,
  useGetSingleCardQuery,
  useDeleteACardMutation,
} = cardApi;
