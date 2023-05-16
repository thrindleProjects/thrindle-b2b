import { useRouter } from 'next/router';
import React from 'react';
import { BsSend } from 'react-icons/bs';
import { MdAdd } from 'react-icons/md';

import styles from './OrderListLayout.module.scss';

import Button from '@/components/buttons/Button';
import BorderContainer from '@/components/shared/borderContainer/BorderContainer';

const BuyOrderAgainModal = () => {
  const { query } = useRouter();

  return (
    <div className={`mt-5 h-full w-full ${styles.buy_again_modal}`}>
      {/* Header */}
      <div className='flex w-full flex-row items-center justify-between'>
        <h6 className='font-clash-grotesk text-xl font-semibold '>
          Order #{String(query?.orderId)?.slice(0, 8)}
        </h6>
        <Button
          className='w-[30%]'
          leftIconClassName='text-xl mr-2'
          leftIcon={BsSend}
        >
          Send List
        </Button>
      </div>

      <BorderContainer
        className={`row-span-1 row-start-2 mt-10  w-full ${styles.order_list_wrapper}`}
      >
        <h1>Hello</h1>
        <div className='row-span-1 row-start-2 px-5 pb-5 '>
          <Button
            variant='outline'
            className='w-full'
            leftIcon={MdAdd}
            leftIconClassName='text-xl'
          >
            Add New Items
          </Button>
        </div>
      </BorderContainer>
    </div>
  );
};

export default BuyOrderAgainModal;
