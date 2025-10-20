import { baseApi } from './baseApi';

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (loginData) => {
        return {
          url: '/admin/auth/request-otp',
          method: 'POST',
          data: loginData,
        };
      },
      invalidatesTags: ['user'],
    }),
    verifyOtp: builder.mutation({
      query: (otpData) => {
        return {
          url: '/admin/auth/verify-otp',
          method: 'POST',
          data: otpData,
        };
      },
      invalidatesTags: ['user'],
    }),
    getProfile: builder.query({
      query: () => {
        return {
          url: `/admin/auth/me`,
          method: 'GET',
        };
      },
      providesTags: ['user'],
    }),
  }),
});

export const { useGetProfileQuery, useLoginMutation, useVerifyOtpMutation } =
  userApi;
