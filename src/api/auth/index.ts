import { ChangePasswordPayload } from '@/containers/ChangePasswordForm/validation';

import { CreateCompanyPayload, ICreateNewCompanyData } from '@/api/auth/types';
import { globalApi } from '@/api/globalApi';
import {
  CREATE_NEW_COMPANY_API,
  POST_METHOD,
  PUT_METHOD,
  UPDATE_PASSWORD_ENDPOINT,
} from '@/constant/constants';
import { INetworkSuccessResponse } from '@/utils/appTypes';

const AuthApi = globalApi.injectEndpoints({
  endpoints: (build) => ({
    createCompany: build.mutation<
      INetworkSuccessResponse<ICreateNewCompanyData>,
      CreateCompanyPayload
    >({
      query: (data) => ({
        url: `${CREATE_NEW_COMPANY_API}`,
        method: POST_METHOD,
        data: data,
      }),
    }),

    changePassword: build.mutation<
      INetworkSuccessResponse<null>,
      ChangePasswordPayload
    >({
      query: (data) => ({
        url: UPDATE_PASSWORD_ENDPOINT,
        method: PUT_METHOD,
        data,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useCreateCompanyMutation, useChangePasswordMutation } = AuthApi;
