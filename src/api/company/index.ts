import { EditProfileFormValues } from '@/containers/EditProfileForm/validation';

import { CompanyMember, UpdateCompanyResponse } from '@/api/company/types';
import { globalApi } from '@/api/globalApi';
import {
  GET_ALL_COMPANY_USERS_PATH,
  GET_METHOD,
  UPDATE_COMPANY_API,
} from '@/constant/constants';
import { PUT_METHOD } from '@/constant/constants';
import { INetworkSuccessResponse } from '@/utils/appTypes';

const CompanyApi = globalApi.injectEndpoints({
  endpoints: (build) => ({
    updateCompanyDetails: build.mutation<
      INetworkSuccessResponse<UpdateCompanyResponse>,
      EditProfileFormValues
    >({
      query: (data) => ({
        url: UPDATE_COMPANY_API,
        method: PUT_METHOD,
        data: data,
      }),
    }),

    getAllCompanyUsers: build.query<
      INetworkSuccessResponse<CompanyMember[]>,
      string
    >({
      query: (data) => ({
        url: GET_ALL_COMPANY_USERS_PATH,
        method: GET_METHOD,
        data: data,
      }),
    }),
  }),
});

export const { useUpdateCompanyDetailsMutation, useGetAllCompanyUsersQuery } =
  CompanyApi;
