import { FC, useState } from 'react';

import styles from './OrderListLayout.module.scss';

import { useTimeFormatHook } from '@/hooks/useTimeFormakHook';

import Button from '@/components/buttons/Button';
import {
  BuyAgainModal,
  OrderItemDetailModal,
  OrderPaymentModal,
  OrderSuggestedOptions,
} from '@/components/pages-component/orders';
import SingleOrderList from '@/components/pages-component/orders/SingleOrderList';
import GenModal from '@/components/shared/modal/Modal';
import OrderStatusContainer from '@/components/shared/orderStatus/OrderStatusContainer';
import ResponseStatusModal from '@/components/shared/responseStatusModal/ResponseStatusModal';

import { useAppDispatch, useAppSelector } from '@/store/store.hooks';

import { IOrderItem, ISingleOrder, orderStatus } from '@/@types/appTypes';
import { COMPLETED, IN_PROGRESS, PENDING } from '@/constant/constants';
import { togglePaymentModal } from '@/slices/appSlice';

interface OrderListLayoutProps {
  data: ISingleOrder;
}
// console.log('Downloading');

const OrderListLayout: FC<OrderListLayoutProps> = ({ data }) => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [buyAgainModal, setBuyAgainModal] = useState(false);
  const [optionsModal, setOptionsModal] = useState(false);
  const [orderDetailModal, setOrderDetailModal] = useState(false);
  const [activeItem, setActiveItem] = useState<IOrderItem | null>(null);
  const { isPaymentModalOpen } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  const { orderStatus, listItems, createdAt, orderRefCode } = data;

  const { formattedDate } = useTimeFormatHook({
    date: createdAt,
    format: 'Do MMMM YYYY',
  });

  return (
    <div className={`h-full w-full ${styles.order_list_wrapper}`}>
      {/* <div className=' flex-1 overflow-y-auto'> */}
      {/* Header */}
      <div className='row-span-1 row-start-1 h-full overflow-y-auto px-5'>
        <div className='flex w-full flex-row items-center justify-between'>
          <div>
            <h6 className='font-clash-grotesk text-base font-semibold text-gray-900'>
              Order #{orderRefCode}
            </h6>
            <p className='font-clash-grotesk pt-1 text-xs font-normal text-gray-400'>
              Order created: {formattedDate}
            </p>
          </div>
          <div>
            <OrderStatusContainer status={orderStatus as orderStatus} />
          </div>
        </div>
        {/* Content */}
        <div className='mt-10 w-full'>
          {listItems.map((item, index) => (
            <SingleOrderList
              key={index}
              {...item}
              // toggleOptionsModal={() => setOptionsModal(!optionsModal)}
              chooseActiveItem={() => {
                setOrderDetailModal(true);
                setActiveItem(item);
              }}
              viewOptions={() => {
                setOptionsModal(true);
                setActiveItem(item);
              }}
            />
          ))}
        </div>
      </div>
      {/* Order Payment Btn */}
      {orderStatus === IN_PROGRESS && (
        <div className='row-span-1 row-start-2 px-5 py-2'>
          <Button
            onClick={() => dispatch(togglePaymentModal())}
            className='w-full'
          >
            Proceed To Payment
          </Button>
          {/* <Button variant='light' className='mt-4 w-full'>
            Add More Items
          </Button> */}
        </div>
      )}

      {/* Paid order waiting for delivery */}
      {orderStatus === PENDING && (
        <div className='row-span-1 row-start-2 flex flex-col items-center px-5 py-2'>
          <p className='font-clash-grotesk w-[80%] pb-3 text-center text-lg font-normal text-gray-500'>
            Payment made successfully, we are waiting for order delivery
            confirmation
          </p>
          <Button
            onClick={() => dispatch(togglePaymentModal())}
            className='w-full'
          >
            Confirm Delivery
          </Button>
        </div>
      )}

      {/* Buy order again */}

      {orderStatus === COMPLETED && (
        <div className='row-span-1 row-start-2 px-5 py-2 '>
          <Button onClick={() => setBuyAgainModal(true)} className='w-full'>
            Buy Again
          </Button>
        </div>
      )}

      <GenModal
        isOpen={isPaymentModalOpen}
        handleCloseModal={() => dispatch(togglePaymentModal())}
      >
        <OrderPaymentModal
          handleCompleteOrder={() => {
            setPaymentSuccess(true);
          }}
          order={data}
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
          onClick={() => {
            dispatch(togglePaymentModal());
            setPaymentSuccess(false);
          }}
          icon_src='order-success'
        />
      </GenModal>
      {/* Suggested Options Modal */}
      <GenModal
        isOpen={optionsModal}
        handleCloseModal={() => setOptionsModal(false)}
        className='lg:w-[700px] xl:w-[650px]'
      >
        <OrderSuggestedOptions
          activeItem={activeItem}
          handleCloseModal={() => setOptionsModal(false)}
        />
      </GenModal>
      {/* Order detail modal */}
      <GenModal
        isOpen={orderDetailModal}
        handleCloseModal={() => setOrderDetailModal(false)}
        className='lg:w-[580px]'
      >
        <OrderItemDetailModal activeItem={activeItem} />
      </GenModal>
      {/* Buy again modal */}
      <GenModal
        isOpen={buyAgainModal}
        handleCloseModal={() => setBuyAgainModal(false)}
        className='lg:w-[580px]'
      >
        <BuyAgainModal listItems={listItems} />
      </GenModal>
    </div>
  );
};

export default OrderListLayout;
