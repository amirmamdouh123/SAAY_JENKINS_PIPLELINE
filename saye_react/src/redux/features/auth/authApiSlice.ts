import { apiSlice } from "@/redux/app/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (credentials) => ({
        url: "/auth/register",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    sendLogout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
    sendResetEmail: builder.mutation({
      query: (email) => ({
        url: "/auth/reset-password",
        method: "POST",
        body: { email },
      }),
    }),
  }),
});
export const { useRegisterMutation, useLoginMutation, useSendLogoutMutation, useSendResetEmailMutation } =
  authApiSlice;
