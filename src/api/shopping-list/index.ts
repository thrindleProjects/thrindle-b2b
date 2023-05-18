import { globalApi } from '@/api/globalApi';
import { CreateShoppingItemResponse } from '@/api/shopping-list/types';
import {
  DELETE_METHOD,
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
        url: '/order/item/create',
        method: POST_METHOD,
        data: data,
      }),
      invalidatesTags: ['ShoppingItems'],
    }),
    deleteShoppingItem: build.mutation<INetworkSuccessResponse<null>, string>({
      query: (data) => ({ url: `/order/item/${data}`, method: DELETE_METHOD }),
      invalidatesTags: ['ShoppingItems'],
    }),
    editShoppingItem: build.mutation<
      INetworkSuccessResponse<CreateShoppingItemResponse>,
      { id: string; payload: FormData }
    >({
      query: ({ id, payload }) => ({
        url: `/order/item/${id}`,
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
        url: '/order/item/getAllItems',
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
        url: '/order/create',
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
  }),
});

export const {
  useCreateShoppingItemMutation,
  useDeleteShoppingItemMutation,
  useGetShoppingItemsQuery,
  useEditShoppingItemMutation,
  useCreateOrderMutation,
  useResendOrderMutation,
} = ShoppingListApi;
