import { CreateCompanyPayload, ICreateNewCompanyData } from '@/api/auth/types';
import { globalApi } from '@/api/globalApi';
import { CREATE_NEW_COMPANY_API, POST_METHOD } from '@/constant/constants';
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
  }),
  overrideExisting: false,
});

export const { useCreateCompanyMutation } = AuthApi;
