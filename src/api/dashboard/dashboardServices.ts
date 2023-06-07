import { IOrderItem } from '@/@types/appTypes';
import { globalApi } from '@/api/globalApi';
import {
  GET,
  GET_DASHBOARD_DATA_PATH,
  GET_DASHBOARD_RECENT_PURCHASES_API_PATH,
  POST_METHOD,
  QUICK_BUY_API_PATH,
} from '@/constant/constants';
import { INetworkSuccessResponse } from '@/utils/appTypes';

interface IDashboard {
  totalAmountSpent: number;
  monthlySpendingData: { month: number; orderAmount: string }[] | [];
}

const dashboardApi = globalApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    getDashboardData: build.query<INetworkSuccessResponse<IDashboard>, null>({
      query: () => ({
        url: `${GET_DASHBOARD_DATA_PATH}`,
        method: GET,
      }),
    }),
    getDashboardRecentPurchases: build.query<
      INetworkSuccessResponse<IOrderItem[]>,
      null
    >({
      query: () => ({
        url: `${GET_DASHBOARD_RECENT_PURCHASES_API_PATH}`,
        method: GET,
      }),
    }),
    quickBuy: build.mutation<INetworkSuccessResponse<null>, { data: FormData }>(
      {
        query: (data) => ({
          url: `${QUICK_BUY_API_PATH}`,
          method: POST_METHOD,
          data: data.data,
        }),
        invalidatesTags: ['Order'],
      }
    ),
  }),
});

export const {
  useGetDashboardDataQuery,
  useQuickBuyMutation,
  useGetDashboardRecentPurchasesQuery,
} = dashboardApi;
