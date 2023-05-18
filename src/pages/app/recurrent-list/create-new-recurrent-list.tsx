import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';
import React from 'react';

import NoList from '@/components/pages-component/recurrent/NoList';
import AuthenticatedLayoutHeader from '@/components/shared/AuthenticatedLayoutHeader/AuthenticatedLayoutHeader';
import MainContentWrapper from '@/components/shared/MainContentWrapper/MainContentWrapper';

const CreateNewRecurrentList = () => {
  const router = useRouter();
  return (
    <MainContentWrapper>
      <AuthenticatedLayoutHeader
        headerText='Create new list'
        before
        component={
          <Icon
            icon='material-symbols:arrow-back-rounded'
            className='mb-2 cursor-pointer text-3xl font-normal'
            onClick={() => router.back()}
          />
        }
      />
      <NoList />
    </MainContentWrapper>
  );
};

export default CreateNewRecurrentList;
