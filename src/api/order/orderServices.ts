import { IOrder, IOrderItemSubstitute } from '@/@types/appTypes';
import { globalApi } from '@/api/globalApi';
import {
  DELETE,
  DELETE_ORDER_ITEM_PATH,
  GET,
  GET_ALL_ORDERS_PATH,
  GET_SINGLE_ORDER_PATH,
  PUT_METHOD,
  REPLACE_UNAVAILABLE_ITEM_API_URL,
} from '@/constant/constants';
import { INetworkSuccessResponse } from '@/utils/appTypes';

const orderApi = globalApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    getOrders: build.query<INetworkSuccessResponse<IOrder[]>, string>({
      query: (status) => ({
        url: `${GET_ALL_ORDERS_PATH}`,
        method: GET,
        params: { status },
      }),
      providesTags: ['Order', 'ShoppingItems'],
    }),
    getSingleOrder: build.query<INetworkSuccessResponse<IOrder>, string>({
      query: (id) => ({
        url: `${GET_SINGLE_ORDER_PATH}/${id}`,
        method: GET,
      }),
      providesTags: ['OrderItem', 'ShoppingItems'],
    }),
    deleteItem: build.mutation<INetworkSuccessResponse<null>, string>({
      query: (id) => ({
        url: `${DELETE_ORDER_ITEM_PATH}/${id}`,
        method: DELETE,
      }),
      invalidatesTags: ['OrderItem', 'Order'],
    }),
    replaceUnavailableItem: build.mutation<
      INetworkSuccessResponse<IOrderItemSubstitute>,
      { itemId: string; subId: string }
    >({
      query: (data) => ({
        url: `${REPLACE_UNAVAILABLE_ITEM_API_URL}/${data.itemId}/${data.subId}`,
        method: PUT_METHOD,
      }),
      invalidatesTags: ['OrderItem', 'Order'],
    }),
  }),
});

export const {
  useGetOrdersQuery,
  useGetSingleOrderQuery,
  useDeleteItemMutation,
  useReplaceUnavailableItemMutation,
} = orderApi;
