import api from "../../../app/api/api";
import { ApiResponse } from "../../../app/utils/constant";
import { ProfileTypes } from "../types/profileTypes";

const profileEndpoint = api.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query<ApiResponse<ProfileTypes>, void>({
      query: () => ({
        url: "/member/profile",
      }),
      providesTags: [{ type: "Profile", id: 1 }],
    }),
  }),
});

export const { useGetProfileQuery } = profileEndpoint;
