import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';

import Button from '@/components/buttons/Button';
import AddItemForm from '@/components/lib/addItemForm/AddItemForm';
import List from '@/components/pages-component/recurrent/List';
import AuthenticatedLayoutHeader from '@/components/shared/AuthenticatedLayoutHeader/AuthenticatedLayoutHeader';
import MainContentWrapper from '@/components/shared/MainContentWrapper/MainContentWrapper';
import GenModal from '@/components/shared/modal/Modal';

import { useGetSingleRecurrentOrderQuery } from '@/api/recurrent';

const SingleRecurrentOrder = () => {
  const router = useRouter();
  const { data } = useGetSingleRecurrentOrderQuery(router.query.id as string);
  const [addItemModal, setAddItemModal] = useState(false);
  const toggleModal = () => {
    setAddItemModal((prev) => !prev);
  };
  return (
    <MainContentWrapper>
      <AuthenticatedLayoutHeader
        headerText='Order Details'
        before
        component={
          <Icon
            icon='material-symbols:arrow-back-rounded'
            className='mb-2 cursor-pointer text-3xl font-normal'
            onClick={() => router.back()}
          />
        }
        after
        afterComponent={
          <div className='z-50 flex gap-2'>
            <Button
              leftIcon={MdAdd}
              leftIconClassName='text-2xl'
              className='h-[56px] w-[229px] '
              onClick={toggleModal}
            >
              Add New item
            </Button>
          </div>
        }
      />
      <List data={data?.data} />
      <GenModal handleCloseModal={toggleModal} isOpen={addItemModal}>
        <AddItemForm
          asModal
          id={data?.data.id}
          handleCloseModal={toggleModal}
        />
      </GenModal>
    </MainContentWrapper>
  );
};

export default SingleRecurrentOrder;
