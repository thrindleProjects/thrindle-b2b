import {
  GET,
  GET_WALLET,
  GET_WALLET_BALLANCE,
  GET_WALLET_OUTSTANDING,
  GET_WALLET_TRANSACTION,
} from '@/constant/constants';
import { INetworkSuccessResponse } from '@/utils/appTypes';

import { IWalletDetails, IWalletTotal } from './payload';
import { globalApi } from '../globalApi';
const recurrentApi = globalApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    getWalletBalance: build.query<INetworkSuccessResponse<void>, void>({
      query: () => ({
        url: `${GET_WALLET_BALLANCE}`,
        method: GET,
      }),
      providesTags: ['Wallet'],
    }),
    getWalletDetails: build.query<
      INetworkSuccessResponse<IWalletDetails>,
      void
    >({
      query: () => ({
        url: `${GET_WALLET}`,
        method: GET,
      }),
      providesTags: ['Wallet'],
    }),
    getWalletTotalTransaction: build.query<
      INetworkSuccessResponse<IWalletTotal>,
      void
    >({
      query: () => ({
        url: `${GET_WALLET_TRANSACTION}`,
        method: GET,
      }),
      providesTags: ['Wallet'],
    }),
    getWalletOutstanding: build.query<INetworkSuccessResponse<void>, void>({
      query: () => ({
        url: `${GET_WALLET_OUTSTANDING}`,
        method: GET,
      }),
      providesTags: ['Wallet'],
    }),
  }),
});

export const {
  useGetWalletBalanceQuery,
  useGetWalletDetailsQuery,
  useGetWalletTotalTransactionQuery,
  useGetWalletOutstandingQuery,
} = recurrentApi;
