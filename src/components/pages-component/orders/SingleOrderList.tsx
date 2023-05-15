import Image from 'next/image';
import { FC } from 'react';
import { FaTimes } from 'react-icons/fa';

import Button from '@/components/buttons/Button';

import { IOrderItem } from '@/@types/appTypes';
import { IMAGE_URL_PATH } from '@/constant/constants';

interface SingleOrderListProps extends IOrderItem {
  toggleOptionsModal: () => void;
}

const SingleOrderList: FC<SingleOrderListProps> = ({
  name,
  quantity,
  // substitutes,
  toggleOptionsModal,
  price,
  image,
  isAvailable,
}) => {
  return (
    <div className='mb-5 flex w-full flex-row items-center justify-between border-b border-b-gray-100 pb-4'>
      <div className='flex w-[70%] flex-row '>
        <div className='relative h-[40px] w-[40px] bg-gray-100'>
          <Image
            fill={true}
            src={`${process.env.NEXT_PUBLIC_DEV_URL}${IMAGE_URL_PATH}/${image}`}
            alt='order'
            className=' rounded object-contain'
            placeholder='blur'
            blurDataURL='/assets/images/placeholder-image.png'
          />
        </div>

        <div className='ml-4'>
          <p className=' truncate... text-xs font-medium capitalize text-gray-700 xl:text-sm'>
            {name}
          </p>

          {isAvailable ? (
            <>
              <p className='font-clash-grotesk text-[10px] font-normal text-gray-400 '>
                {quantity} pieces
              </p>
              <button className='block pt-0'>
                <span className='text-primary-blue font-clash-grotesk text-[10px] font-medium'>
                  View Details
                </span>
              </button>
            </>
          ) : (
            <>
              <p className='font-clash-grotesk w-[60%] text-[10px] font-normal text-red-500 lg:w-[80%] xl:w-[60%]'>
                This order is not available at the moment, but you can check up
                for other suggested options
              </p>
              <Button
                variant='primary'
                className='mt-4 py-[8px] lg:w-[50%] xl:w-[30%]'
                onClick={toggleOptionsModal}
              >
                View Options
              </Button>
            </>
          )}
        </div>
      </div>
      <div className='flex flex-col items-end'>
        <button>
          <FaTimes className='text-base text-red-500' />
        </button>
        <p className='font-clash-grotesk pt-5 text-xs font-semibold text-gray-800'>
          ₦{price ? price?.toLocaleString() : '0.0'}
        </p>
      </div>
    </div>
  );
};

export default SingleOrderList;
