import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  LoginResponse,
  LoginRequest,
  VerifyOTPResponse,
  RegisterRequest,
  VerifyOTPRequest,
} from "../types/auth.types";

export const api = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8001/api",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (data) => ({
        url: "auth/login",
        method: "POST",
        body: data,
      }),
    }),
    register: builder.mutation<LoginResponse, RegisterRequest>({
      query: (data) => ({
        url: "auth/register",
        method: "POST",
        body: data,
      }),
    }),
    verifyOtp: builder.mutation<VerifyOTPResponse, VerifyOTPRequest>({
      query: (data) => ({
        url: "auth/verify2Fa",
        method: "POST",
        body: data,
      }),
    }),
    checkAuth: builder.query<VerifyOTPResponse, void>({
      query: () => ({
        url: "auth/status",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useVerifyOtpMutation,
  useCheckAuthQuery,
} = api;
