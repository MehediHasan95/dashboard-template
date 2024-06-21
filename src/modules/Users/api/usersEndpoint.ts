import api from "../../../app/api/api";
import { ApiResponse } from "../../../app/utils/constant";
import { UsersTypes } from "../types/UsersTypes";

const usersEndpoint = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<ApiResponse<UsersTypes[]>, void>({
      query: () => ({
        url: "/member/ingredients",
      }),
      providesTags: [{ type: "Users", id: "USERS_ID" }],
    }),
  }),
});

export const { useGetUsersQuery } = usersEndpoint;
