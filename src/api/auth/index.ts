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
        url: `${VERIFY_COMPANY_API}`,
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
} = AuthApi;
