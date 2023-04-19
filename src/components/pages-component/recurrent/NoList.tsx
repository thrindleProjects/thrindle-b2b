import React, { useState } from 'react';

import AddItemForm from '@/components/lib/addItemForm/AddItemForm';
import EmptyStateWithBag from '@/components/lib/emptyStateWithBag/EmptyStateWithBag';
import BorderContainer from '@/components/shared/borderContainer/BorderContainer';
import GenModal from '@/components/shared/modal/Modal';

const NoList = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <div className='relative flex w-full gap-6'>
      <BorderContainer className='h-max w-[48%] p-10'>
        <AddItemForm />
      </BorderContainer>
      <BorderContainer className=' absolute -top-24 right-0 w-[48%] p-6'>
        <div>
          <p className='text-[18px] font-[500]'>My List</p>
          <hr className='mt-2' />
          {/* <ListCard data={listData} /> */}
          <EmptyStateWithBag className='h-[580px]' text='No item added yet' />
          {/* <Button
            onClick={toggleModal}
            type='button'
            leftIcon={BiTime}
            leftIconClassName='text-white text-xl'
            className='mt-8 h-[52px] w-full'
            variant='primary'
          >
            Schedule Order
          </Button> */}
        </div>
      </BorderContainer>
      <GenModal isOpen={showModal} handleCloseModal={toggleModal}></GenModal>
    </div>
  );
};

export default NoList;
