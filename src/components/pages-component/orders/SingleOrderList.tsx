import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';

import Button from '@/components/buttons/Button';

const SingleOrderList = ({
  quantity,
  price,
  name,
  is_available,
  toggleOptionsModal,
}: {
  quantity: number;
  price: number;
  name: string;
  date: string;
  is_available: boolean;
  toggleOptionsModal: () => void;
}) => {
  return (
    <div className='mb-5 flex w-full flex-row items-center justify-between border-b border-b-gray-100 pb-4'>
      <div className='flex w-[70%] flex-row '>
        <div className='relative h-[40px] w-[40px]'>
          <Image
            fill={true}
            src='/images/dev-order.png'
            alt='order'
            className=' rounded object-contain'
          />
        </div>

        <div className='ml-4'>
          <p className=' truncate... text-xs font-medium text-gray-700 xl:text-sm'>
            {name}
          </p>

          {is_available ? (
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
          {' '}
          ₦{price.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default SingleOrderList;
