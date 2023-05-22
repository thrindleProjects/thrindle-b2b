import React, { useState } from 'react';
import { BiTime } from 'react-icons/bi';

import Button from '@/components/buttons/Button';
import AddItemForm from '@/components/lib/addItemForm/AddItemForm';
import EmptyStateWithBag from '@/components/lib/emptyStateWithBag/EmptyStateWithBag';
import ListCard from '@/components/lib/listCard/ListCard';
import RecurrentOrderList from '@/components/pages-component/recurrent/RecurrentOrderList';
import BorderContainer from '@/components/shared/borderContainer/BorderContainer';
import GenModal from '@/components/shared/modal/Modal';

import { useGetRecurrentItemsQuery } from '@/api/recurrent';

const NoList = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const { data } = useGetRecurrentItemsQuery();

  const listIds = data?.data.map((item) => item.id);

  return (
    <div className='relative flex w-full gap-6'>
      <BorderContainer className='h-max w-[48%] p-10'>
        <AddItemForm />
      </BorderContainer>
      <BorderContainer className=' absolute -top-24 bottom-0  right-0 w-[48%] overflow-y-auto p-6'>
        <div>
          <p className='text-[18px] font-[500]'>My List</p>
          <hr className='mt-2' />
          {data && data.data.length > 0 ? (
            <>
              <ListCard data={data.data} />
              <Button
                onClick={toggleModal}
                type='button'
                leftIcon={BiTime}
                leftIconClassName='text-white text-xl'
                className='mt-8 h-[52px] w-full'
                variant='primary'
              >
                Schedule Order
              </Button>
            </>
          ) : (
            <EmptyStateWithBag className='' text='No item added yet' />
          )}
        </div>
      </BorderContainer>
      <GenModal isOpen={showModal} handleCloseModal={toggleModal}>
        <RecurrentOrderList
          ids={listIds}
          handleCloseModal={toggleModal}
          data={data?.data}
        />
      </GenModal>
    </div>
  );
};

export default NoList;
