import { ChangePasswordPayload } from '@/containers/ChangePasswordForm/validation';

import {
  CreateCompanyPayload,
  ICreateNewCompanyData,
  VerifyCompanyPayload,
} from '@/api/auth/types';
import { globalApi } from '@/api/globalApi';
import {
  CREATE_NEW_COMPANY_API,
  POST_METHOD,
  PUT_METHOD,
  UPDATE_COMPANY_API,
  UPDATE_PASSWORD_ENDPOINT,
  VERIFY_COMPANY_API,
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
    verifyCompanyEmail: build.mutation<void, VerifyCompanyPayload>({
      query: (data) => ({
        url: `${VERIFY_COMPANY_API}`,
        method: PUT_METHOD,
        data: data,
      }),
    }),
    updateCompany: build.mutation<void, FormData>({
      query: (data) => ({
        url: `${UPDATE_COMPANY_API}`,
        method: PUT_METHOD,
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

export const {
  useCreateCompanyMutation,
  useVerifyCompanyEmailMutation,
  useUpdateCompanyMutation,
  useChangePasswordMutation,
} = AuthApi;
