import { AddTeamMemberFormValues } from '@/containers/AddTeamMemberForm/validation';
import { EditProfileFormValues } from '@/containers/EditProfileForm/validation';

import { CompanyMember, UpdateCompanyResponse } from '@/api/company/types';
import { globalApi } from '@/api/globalApi';
import {
  CREATE_TEAM_MEMBER_PATH,
  DELETE_METHOD,
  DELETE_TEAM_MEMBER_PATH,
  GET_ALL_COMPANY_USERS_PATH,
  GET_METHOD,
  POST_METHOD,
  UPDATE_COMPANY_API,
} from '@/constant/constants';
import { PUT_METHOD } from '@/constant/constants';
import { INetworkSuccessResponse } from '@/utils/appTypes';

const CompanyApi = globalApi.injectEndpoints({
  endpoints: (build) => ({
    updateCompanyDetails: build.mutation<
      INetworkSuccessResponse<UpdateCompanyResponse>,
      EditProfileFormValues & { id: string }
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
      providesTags: ['CompanyUsers'],
    }),

    addTeamMember: build.mutation<
      INetworkSuccessResponse<CompanyMember>,
      AddTeamMemberFormValues
    >({
      query: (data) => ({
        url: CREATE_TEAM_MEMBER_PATH,
        method: POST_METHOD,
        data,
      }),
      invalidatesTags: ['CompanyUsers'],
    }),

    deleteTeamMember: build.mutation<INetworkSuccessResponse<null>, string>({
      query: (id) => ({
        url: `${DELETE_TEAM_MEMBER_PATH}/${id}`,
        method: DELETE_METHOD,
      }),
      invalidatesTags: ['CompanyUsers'],
    }),
  }),
});

export const {
  useUpdateCompanyDetailsMutation,
  useGetAllCompanyUsersQuery,
  useAddTeamMemberMutation,
  useDeleteTeamMemberMutation,
} = CompanyApi;
