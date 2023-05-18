import { useRouter } from 'next/router';
import React from 'react';
import { MdAdd } from 'react-icons/md';

import Button from '@/components/buttons/Button';
import AuthenticatedLayoutHeader from '@/components/shared/AuthenticatedLayoutHeader/AuthenticatedLayoutHeader';
import MainContentWrapper from '@/components/shared/MainContentWrapper/MainContentWrapper';

import RecurrentLayout from '@/pages-layout/recurrent-layout/RecurrentLayout';
const RecurrentList = () => {
  const router = useRouter();
  return (
    <MainContentWrapper>
      <AuthenticatedLayoutHeader
        headerText='Recurrent List'
        subText='Create a  list of recurring things you need at a particular time monthly
 so we can get them for you automatically'
        component={
          <div className='z-50 flex gap-2'>
            <Button
              leftIcon={MdAdd}
              leftIconClassName='text-2xl'
              className='h-[56px] w-[229px] '
              onClick={() =>
                router.push('/app/recurrent-list/create-new-recurrent-list')
              }
            >
              Create New List
            </Button>
          </div>
        }
      />

      <RecurrentLayout />
    </MainContentWrapper>
  );
};

export default RecurrentList;
