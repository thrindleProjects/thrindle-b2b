import { EditProfileFormValues } from '@/containers/EditProfileForm/validation';

import { UpdateCompanyResponse } from '@/api/company/types';
import { globalApi } from '@/api/globalApi';
import { UPDATE_COMPANY_API } from '@/constant/constants';
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
  }),
});

export const { useUpdateCompanyDetailsMutation } = CompanyApi;
