import { globalApi } from '@/api/globalApi';

const extendedApi = globalApi.injectEndpoints({
  endpoints: (build) => ({
    // the void would change to the response later
    signUp: build.query<void, { email: string; password: string }>({
      query: () => '/signup',
    }),
  }),
  overrideExisting: false,
});

export const { useSignUpQuery } = extendedApi;
