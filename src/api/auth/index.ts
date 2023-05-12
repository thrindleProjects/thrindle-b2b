import { ChangePasswordPayload } from '@/containers/ChangePasswordForm/validation';

import {
  CreateCompanyPayload,
  ICreateNewCompanyData,
  PasswordReset,
  PasswordResetRequest,
  VerifyCompanyPayload,
} from '@/api/auth/types';
import { globalApi } from '@/api/globalApi';
import {
  CREATE_NEW_COMPANY_API,
  PASSWORD_REQUEST,
  PASSWORD_RESET,
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

    passwordResetRequest: build.mutation<void, PasswordResetRequest>({
      query: (data) => ({
        url: `${PASSWORD_REQUEST}`,
        method: PUT_METHOD,
        data: data,
      }),
    }),

    passwordReset: build.mutation<void, PasswordReset>({
      query: (data) => ({
        url: `${PASSWORD_RESET}`,
        method: PUT_METHOD,
        data: data,
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
  usePasswordResetRequestMutation,
  usePasswordResetMutation,
} = AuthApi;
