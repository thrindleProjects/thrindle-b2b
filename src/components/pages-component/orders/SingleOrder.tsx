import React from 'react';

import { useOrderStatusHook } from '@/hooks';

import { orderStatus } from '@/@types/appTypes';

const SingleOrder = ({
  _id,
  createdAt,
  quantity,
  status,
  activeOrder,
  changeOrder,
}: {
  _id: string;
  createdAt: string;
  quantity: number;
  status: string;
  activeOrder: string | null;
  changeOrder: () => void;
}) => {
  const { orderStyle } = useOrderStatusHook({
    orderStatus: status as orderStatus,
  });

  return (
    <div
      onClick={changeOrder}
      role='button'
      className={
        activeOrder && activeOrder === _id
          ? 'border-primary-blue relative mb-5 h-[150px] w-full rounded-md border  transition-all duration-500 ease-in-out'
          : 'relative mb-5 h-[150px] w-full rounded-md border border-gray-200 transition-all duration-500 ease-in-out'
      }
    >
      {/* Active border */}
      {activeOrder && activeOrder === _id && (
        <div className='absolute  left-0 top-[10%] h-[80%] w-[5px] rounded-lg bg-[#065DA7] transition-all duration-500 ease-in-out' />
      )}
      <div className='flex w-full flex-row items-center justify-between px-5 py-5'>
        <div>
          <h6 className='font-clash-grotesk text-base font-semibold text-gray-900'>
            Order {_id}
          </h6>
          <p className='font-clash-grotesk pt-1 text-xs font-normal text-gray-400'>
            {createdAt}
          </p>
          <div
            className={`mt-5 flex flex-row items-center justify-center rounded-sm px-3 py-2 ${orderStyle.bgColor}`}
          >
            <p
              className={`font-clash-grotesk text-xs font-medium ${orderStyle.textColor}`}
            >
              {orderStyle?.text}
            </p>
          </div>
        </div>
        <div>
          <p className='font-clash-grotesk text-sm font-semibold text-gray-800'>
            {quantity} {quantity > 1 ? 'Items' : 'Item'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleOrder;