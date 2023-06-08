import { FC } from 'react';
import { MdOutlineFileDownload } from 'react-icons/md';

import { useTimeFormatHook } from '@/hooks/useTimeFormakHook';

import OrderStatusContainer from '@/components/shared/orderStatus/OrderStatusContainer';

import { IOrder, orderStatus } from '@/@types/appTypes';

interface SingleOrderProps extends IOrder {
  activeOrder: string | null;
  changeOrder: () => void;
}

const SingleOrder: FC<SingleOrderProps> = ({
  changeOrder,
  activeOrder,
  id,
  listItems,
  orderStatus,
  createdAt,
}) => {
  const { formattedDate } = useTimeFormatHook({
    date: createdAt,
    format: 'Do MMMM YYYY',
  });
  return (
    <div
      onClick={changeOrder}
      role='button'
      tabIndex={1}
      className={
        activeOrder && activeOrder === id
          ? 'border-primary-blue relative mb-5 h-[150px] w-full rounded-md border  transition-all duration-500 ease-in-out'
          : 'relative mb-5 h-[150px] w-full rounded-md border border-gray-200 transition-all duration-500 ease-in-out'
      }
    >
      {/* Active border */}
      {activeOrder && activeOrder === id && (
        <div className='absolute  left-0 top-[10%] h-[80%] w-[5px] rounded-lg bg-[#065DA7] transition-all duration-500 ease-in-out' />
      )}
      <div className='flex w-full flex-row items-center justify-between  px-5 py-5'>
        <div>
          <h6 className='font-clash-grotesk  text-base font-semibold text-gray-900 '>
            Order #{id.slice(0, 8)}
          </h6>
          <p className='font-clash-grotesk pt-1 text-xs font-normal text-gray-400'>
            Order created: {formattedDate}
          </p>
          <OrderStatusContainer
            status={orderStatus as orderStatus}
            className='mt-5 max-w-[70%]'
          />
        </div>
        <div>
          <p className='font-clash-grotesk text-right text-sm font-semibold text-gray-800'>
            {listItems?.length} {listItems?.length > 1 ? 'Items' : 'Item'}
          </p>
          <div
            className='mt-10 flex flex-row items-center text-xs font-medium'
            role='button'
          >
            {orderStatus === 'in-progress' && (
              <p className='text-primary-blue pr-2'>Download Invoice</p>
            )}
            {orderStatus === 'completed' ||
              (orderStatus === 'pending' && (
                <p className='text-primary-blue pr-2'>Download Receipt</p>
              ))}

            {orderStatus === 'completed' ||
              orderStatus === 'in-progress' ||
              (orderStatus === 'pending' && (
                <MdOutlineFileDownload className='text-primary-blue' />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleOrder;
