import { IOrder, ISingleOrder } from '@/@types/appTypes';
import { globalApi } from '@/api/globalApi';
import {
  DELETE,
  DELETE_ORDER_ITEM_PATH,
  GET,
  GET_ALL_ORDERS_PATH,
  GET_SINGLE_ORDER_PATH,
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
      providesTags: ['Order'],
    }),
    getSingleOrder: build.query<INetworkSuccessResponse<ISingleOrder>, string>({
      query: (id) => ({
        url: `${GET_SINGLE_ORDER_PATH}/${id}`,
        method: GET,
      }),
      providesTags: ['OrderItem'],
    }),
    deleteItem: build.mutation<INetworkSuccessResponse<null>, string>({
      query: (id) => ({
        url: `${DELETE_ORDER_ITEM_PATH}/${id}`,
        method: DELETE,
      }),
      invalidatesTags: ['OrderItem', 'Order'],
    }),
  }),
});

export const {
  useGetOrdersQuery,
  useGetSingleOrderQuery,
  useDeleteItemMutation,
} = orderApi;
