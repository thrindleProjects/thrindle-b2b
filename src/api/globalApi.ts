import { BaseQueryFn, createApi } from '@reduxjs/toolkit/query/react';
import axios, { AxiosRequestConfig } from 'axios';
import { getSession, signOut } from 'next-auth/react';
import { toast } from 'react-hot-toast';

import { AXIOS_TIMEOUT_TIME, TOKEN_EXPIRED_MSG } from '@/constant/constants';

// initialize an empty api service that we'll inject endpoints into later as needed
axios.defaults.timeout = AXIOS_TIMEOUT_TIME;
axios.defaults.timeoutErrorMessage = 'Request Timeout';

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' }
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      params?: AxiosRequestConfig['params'];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }) => {
    const session = await getSession();
    const token = session && session.token;
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers: {
          // Accept: 'application/json',
          // 'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        timeout: AXIOS_TIMEOUT_TIME,
        timeoutErrorMessage: 'Request Timeout',
      });

      return { data: result?.data ? result.data : null };
    } catch (axiosError) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const err = axiosError as any;

      toast.error(err.response?.data?.data?.error);
      if (
        err?.response?.status === 401 &&
        err?.response?.data?.message === TOKEN_EXPIRED_MSG
      ) {
        toast.error('Session expired. Please login again.');
        signOut();
      }
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
export const globalApi = createApi({
  baseQuery: axiosBaseQuery({
    baseUrl: String(process.env.NEXT_PUBLIC_DEV_URL),
  }),
  reducerPath: 'globalApi',

  endpoints: () => ({}),
});
