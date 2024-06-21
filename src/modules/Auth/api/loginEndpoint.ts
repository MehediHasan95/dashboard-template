import api from "../../../app/api/api";
import { ApiResponse } from "../../../app/utils/constant";
import { LoginTypes } from "../types/authTypes";

const loginEndpoint = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<ApiResponse<LoginTypes>, LoginTypes>({
      query: (data) => ({
        url: "/auth/member/login",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation } = loginEndpoint;
