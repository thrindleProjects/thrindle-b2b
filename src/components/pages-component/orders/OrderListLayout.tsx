import { useRouter } from 'next/router';
import { useState } from 'react';

import styles from './OrderListLayout.module.scss';

import Button from '@/components/buttons/Button';
import {
  OrderPaymentModal,
  OrderSuggestedOptions,
} from '@/components/pages-component/orders';
import SingleOrderList from '@/components/pages-component/orders/SingleOrderList';
import GenModal from '@/components/shared/modal/Modal';
import OrderStatusContainer from '@/components/shared/orderStatus/OrderStatusContainer';
import ResponseStatusModal from '@/components/shared/responseStatusModal/ResponseStatusModal';

import { recentPurchasesData } from '@/utils/devData';

const OrderListLayout = () => {
  const { query } = useRouter();
  const [paymentModal, setPaymentModal] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [optionsModal, setOptionsModal] = useState(false);

  return (
    <div className={`h-full w-full ${styles.order_list_wrapper}`}>
      {/* <div className=' flex-1 overflow-y-auto'> */}
      {/* Header */}
      <div className='row-span-1 row-start-1 h-full overflow-y-auto px-5'>
        <div className='flex w-full flex-row items-center justify-between'>
          <div>
            <h6 className='font-clash-grotesk text-base font-semibold text-gray-900'>
              Order {query?.orderId}
            </h6>
            <p className='font-clash-grotesk pt-1 text-xs font-normal text-gray-400'>
              Order Created 21st March 2023
            </p>
          </div>
          <div>
            <OrderStatusContainer status='completed' />
          </div>
        </div>
        {/* Content */}
        <div className='mt-10 w-full'>
          {recentPurchasesData.map((item, index) => (
            <SingleOrderList
              key={index}
              {...item}
              toggleOptionsModal={() => setOptionsModal(!optionsModal)}
            />
          ))}
        </div>
      </div>
      {/* Order Payment Btn */}
      {/* <div className='row-span-1 row-start-2 py-2'>
        <Button onClick={() => setPaymentModal(true)} className='w-full'>
          Proceed To Payment
        </Button>
        <Button variant='light' className='mt-4 w-full'>
          Add More Items
        </Button>
      </div> */}

      {/* Paid order waiting for delivery */}
      {/* <div className='row-span-1 row-start-2 flex flex-col items-center py-2'>
        <p className='font-clash-grotesk w-[80%] pb-3 text-center text-lg font-normal text-gray-500'>
          Payment made successfully, we are waiting for order delivery
          confirmation
        </p>
        <Button onClick={() => setPaymentModal(true)} className='w-full'>
          Confirm Delivery
        </Button>
      </div> */}
      {/* Buy order again */}
      <div className='row-span-1 row-start-2 px-5 py-2'>
        <Button onClick={() => setPaymentModal(true)} className='w-full'>
          Buy Again
        </Button>
      </div>

      <GenModal
        isOpen={paymentModal}
        handleCloseModal={() => setPaymentModal(false)}
      >
        <OrderPaymentModal
          handleCompleteOrder={() => {
            setPaymentModal(false);
            setPaymentSuccess(true);
          }}
        />
      </GenModal>
      <GenModal
        isOpen={paymentSuccess}
        handleCloseModal={() => setPaymentSuccess(false)}
        hideCloseIcon
      >
        <ResponseStatusModal
          title='Proceed To Orders'
          msg='Your payment of #231,000 has been made successfully and charged from your wallet, our representatives will contact you to give you delivery information'
          btnText='Proceed To orders'
          onClick={() => setPaymentSuccess(false)}
          icon_src='order-success'
        />
      </GenModal>
      {/* Suggested Options Modal */}
      <GenModal
        isOpen={optionsModal}
        handleCloseModal={() => setOptionsModal(false)}
      >
        <OrderSuggestedOptions />
      </GenModal>
    </div>
  );
};

export default OrderListLayout;
