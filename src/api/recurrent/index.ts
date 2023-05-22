import {
  ICreateRecurrentOrderPayload,
  ICreateRecurrentOrderResponse,
  IRecurrentItems,
  IRecurrentOrderResponse,
  ISingleRecurrentItem,
} from '@/api/recurrent/types';
import {
  ADD_ITEM_TO_RECURRENT_ORDER,
  CREATE_RECURRENT_LIST,
  CREATE_RECURRENT_ORDER,
  DELETE_ITEM_FROM_RECURRENT_ORDER,
  DELETE_METHOD,
  GET,
  GET_COMPANY_RECURRENT_ORDERS,
  GET_ITEM_BY_ITEM,
  GET_RECURRENT_ITEMS,
  GET_SINGLE_RECURRENT_ORDER,
  POST_METHOD,
} from '@/constant/constants';
import { INetworkSuccessResponse } from '@/utils/appTypes';

import { globalApi } from '../globalApi';
const recurrentApi = globalApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    createRecurrentList: build.mutation<
      INetworkSuccessResponse<IRecurrentItems>,
      FormData
    >({
      query: (data) => ({
        url: `${CREATE_RECURRENT_LIST}`,
        method: POST_METHOD,
        data: data,
      }),
      invalidatesTags: ['Recurrent'],
    }),
    createRecurrentOrder: build.mutation<
      INetworkSuccessResponse<ICreateRecurrentOrderResponse>,
      ICreateRecurrentOrderPayload
    >({
      query: (data) => ({
        url: `${CREATE_RECURRENT_ORDER}`,
        method: POST_METHOD,
        data: data,
      }),
      invalidatesTags: ['Recurrent'],
    }),
    addItemToRecurrentOrder: build.mutation<
      INetworkSuccessResponse<null>,
      { data: FormData; id: string | undefined }
    >({
      query: (query) => ({
        url: `${ADD_ITEM_TO_RECURRENT_ORDER}/${query.id}`,
        method: POST_METHOD,
        data: query.data,
      }),
      invalidatesTags: ['Recurrent'],
    }),
    deleteItemFromRecurrentOrder: build.mutation<
      INetworkSuccessResponse<null>,
      string
    >({
      query: (id) => ({
        url: `${DELETE_ITEM_FROM_RECURRENT_ORDER}/${id}`,
        method: DELETE_METHOD,
      }),
      invalidatesTags: ['Recurrent'],
    }),
    getRecurrentItems: build.query<
      INetworkSuccessResponse<ISingleRecurrentItem[]>,
      void
    >({
      query: () => ({
        url: `${GET_RECURRENT_ITEMS}`,
        method: GET,
      }),
      providesTags: ['Recurrent'],
    }),

    getAllRecurrentOrders: build.query<
      INetworkSuccessResponse<IRecurrentOrderResponse[]>,
      string
    >({
      query: (status) => ({
        url: `${GET_COMPANY_RECURRENT_ORDERS}`,
        method: GET,
        params: { status },
      }),
      providesTags: ['Recurrent'],
    }),
    getSingleRecurrentOrder: build.query<
      INetworkSuccessResponse<IRecurrentOrderResponse>,
      string
    >({
      query: (id) => ({
        url: `${GET_SINGLE_RECURRENT_ORDER}/${id}`,
        method: GET,
      }),
      providesTags: ['Recurrent'],
    }),
    getSingleItem: build.query<
      INetworkSuccessResponse<ISingleRecurrentItem>,
      string | undefined
    >({
      query: (id) => ({
        url: `${GET_ITEM_BY_ITEM}/${id}`,
        method: GET,
      }),
      providesTags: ['Recurrent'],
    }),
  }),
});

export const {
  useCreateRecurrentListMutation,
  useCreateRecurrentOrderMutation,
  useAddItemToRecurrentOrderMutation,
  useDeleteItemFromRecurrentOrderMutation,
  useGetRecurrentItemsQuery,
  useGetAllRecurrentOrdersQuery,
  useGetSingleRecurrentOrderQuery,
  useGetSingleItemQuery,
} = recurrentApi;
