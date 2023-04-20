import React, { useState } from 'react';

import Button from '@/components/buttons/Button';
import AddItemForm from '@/components/lib/addItemForm/AddItemForm';
import EmptyStateWithBag from '@/components/lib/emptyStateWithBag/EmptyStateWithBag';
import BorderContainer from '@/components/shared/borderContainer/BorderContainer';
import GenModal from '@/components/shared/modal/Modal';

const NoList = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const OrderList = () => {
    return (
      <div className='mt-6'>
        <p className='text-primary-blue text-[24px] font-[600]'>
          Schedule Order
        </p>
        <p className='mt-10 text-[16px]'>
          Enter a particular day of the month you will like to place order for
          this items
        </p>
        <p className='mt-10 text-[14px] font-[500]'>Recurrent Order Day</p>
        <div className='mt-10'>
          <p className='text-[16px] font-[600]'>Item Summary</p>
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <div key={index} className='mt-2 flex items-center justify-between'>
              <p>Office Chairs</p>
              <p>500 Pieces</p>
            </div>
          ))}
        </div>
        <hr className='my-4' />
        <Button
          type='button'
          leftIconClassName='text-white text-xl'
          className='mt-8 h-[52px] w-full'
          variant='primary'
        >
          Confirm Scheduled Order
        </Button>
      </div>
    );
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
          <EmptyStateWithBag className='h-[575px]' text='No item added yet' />
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
      <GenModal isOpen={showModal} handleCloseModal={toggleModal}>
        <OrderList />
      </GenModal>
    </div>
  );
};

export default NoList;
