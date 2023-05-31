import { globalApi } from '@/api/globalApi';
import { CreateShoppingItemResponse } from '@/api/shopping-list/types';
import {
  BASE_URL_SHOPPING_LIST_PATH,
  CREATE_ORDER_PATH,
  CREATE_SHOPPING_LIST_ITEM_PATH,
  DELETE_IMAGE_SHOPPING_LIST_ITEM_PATH,
  DELETE_METHOD,
  GET_ALL_SHOPPING_LIST_ITEMS_PATH,
  GET_METHOD,
  POST_METHOD,
  PUT_METHOD,
  RESEND_ORDER_PATH,
} from '@/constant/constants';
import { INetworkSuccessResponse } from '@/utils/appTypes';

const ShoppingListApi = globalApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (build) => ({
    createShoppingItem: build.mutation<
      INetworkSuccessResponse<CreateShoppingItemResponse>,
      FormData
    >({
      query: (data) => ({
        url: CREATE_SHOPPING_LIST_ITEM_PATH,
        method: POST_METHOD,
        data: data,
      }),
      invalidatesTags: ['ShoppingItems'],
    }),
    deleteShoppingItem: build.mutation<INetworkSuccessResponse<null>, string>({
      query: (data) => ({
        url: `${BASE_URL_SHOPPING_LIST_PATH}/${data}`,
        method: DELETE_METHOD,
      }),
      invalidatesTags: ['ShoppingItems'],
    }),
    editShoppingItem: build.mutation<
      INetworkSuccessResponse<CreateShoppingItemResponse>,
      { id: string; payload: FormData }
    >({
      query: ({ id, payload }) => ({
        url: `${BASE_URL_SHOPPING_LIST_PATH}/${id}`,
        method: PUT_METHOD,
        data: payload,
      }),
      invalidatesTags: ['ShoppingItems', 'OrderItem', 'Order'],
    }),

    getShoppingItems: build.query<
      INetworkSuccessResponse<CreateShoppingItemResponse[]>,
      string
    >({
      query: (params) => ({
        url: GET_ALL_SHOPPING_LIST_ITEMS_PATH,
        method: GET_METHOD,
        params: params,
      }),
      providesTags: ['ShoppingItems'],
    }),

    createOrder: build.mutation<
      INetworkSuccessResponse<unknown>,
      { list: string[] }
    >({
      query: (data) => ({
        url: CREATE_ORDER_PATH,
        method: POST_METHOD,
        data: data,
      }),
      invalidatesTags: ['ShoppingItems', 'Order', 'OrderItem'],
    }),
    resendOrder: build.mutation<
      INetworkSuccessResponse<unknown>,
      { list: string[] }
    >({
      query: (data) => ({
        url: `${RESEND_ORDER_PATH}`,
        method: POST_METHOD,
        data: data,
      }),
      invalidatesTags: ['ShoppingItems', 'Order', 'OrderItem'],
    }),

    deleteImageFromItem: build.mutation<
      INetworkSuccessResponse<unknown>,
      string
    >({
      query: (data) => ({
        url: `${DELETE_IMAGE_SHOPPING_LIST_ITEM_PATH}/${encodeURIComponent(
          data
        )}`,
        method: DELETE_METHOD,
      }),
      invalidatesTags: ['ShoppingItems'],
    }),
  }),
});

export const {
  useCreateShoppingItemMutation,
  useDeleteShoppingItemMutation,
  useGetShoppingItemsQuery,
  useEditShoppingItemMutation,
  useCreateOrderMutation,
  useResendOrderMutation,
  useDeleteImageFromItemMutation,
} = ShoppingListApi;
