import api from "../../../app/api/api";
import { ApiResponse } from "../../../app/utils/constant";
import { handleOnQueryStarted } from "../../../app/utils/onQueryStartedHandler";
import { FilterTypes } from "../page/Ingredient";
import { IngredientTypes } from "../types/IngredientTypes";

const ingredientEndpoint = api.injectEndpoints({
  endpoints: (builder) => ({
    getIngredient: builder.query<ApiResponse<IngredientTypes[]>, FilterTypes>({
      query: (params) => ({
        url: "/member/ingredients",
        params,
      }),
      providesTags: [{ type: "Ingredient", id: "INGREDIENT_ID" }],
    }),

    createIngredient: builder.mutation<
      ApiResponse<IngredientTypes>,
      IngredientTypes
    >({
      query: (data) => ({
        url: "/member/ingredients",
        method: "POST",
        body: data,
      }),

      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        await handleOnQueryStarted(queryFulfilled, dispatch);
      },

      invalidatesTags: [{ type: "Ingredient", id: "INGREDIENT_ID" }],
    }),
  }),
});

export const { useGetIngredientQuery, useCreateIngredientMutation } =
  ingredientEndpoint;
