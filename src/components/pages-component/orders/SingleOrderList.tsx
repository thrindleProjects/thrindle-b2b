import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { toast } from 'react-hot-toast';
import { FaTimes } from 'react-icons/fa';

import Button from '@/components/buttons/Button';
import { SpinnerLoader } from '@/components/common/loader';

import { IOrderItem } from '@/@types/appTypes';
import { BASE_URL } from '@/api/globalApi';
import { useDeleteItemMutation } from '@/api/order/orderServices';
import { COMPLETED, IMAGE_URL_PATH, IN_PROGRESS } from '@/constant/constants';
import { mainErrorHandler } from '@/utils/networkHandler';

interface SingleOrderListProps extends IOrderItem {
  // toggleOptionsModal: () => void;
  chooseActiveItem: () => void;
  viewOptions: () => void;
}

const SingleOrderList: FC<SingleOrderListProps> = ({
  name,
  quantity,
  // substitutes,
  // toggleOptionsModal,
  price,
  isAvailable,
  chooseActiveItem,
  id,
  images,
  viewOptions,
}) => {
  const { query } = useRouter();
  const [deleteOrderItem, { isLoading }] = useDeleteItemMutation();

  const deleteItem = () => {
    deleteOrderItem(id)
      .unwrap()
      .then((res) => {
        toast.success(`${res?.message}`);
      })
      .catch((err) => {
        mainErrorHandler(err);
      });
  };
  return (
    <div className='mb-5 flex w-full flex-row items-center justify-between border-b border-b-gray-100 pb-4'>
      <div className='flex w-[70%] flex-row '>
        {images.length ? (
          <div className='relative h-[40px] w-[40px] bg-gray-100'>
            <Image
              fill={true}
              src={`${BASE_URL}${IMAGE_URL_PATH}/${images[0]}`}
              alt='order'
              className=' rounded object-contain'
              placeholder='blur'
              blurDataURL='/assets/images/placeholder-image.png'
            />
          </div>
        ) : (
          <div className='relative h-[40px] w-[40px] bg-gray-100'>
            <Image
              fill={true}
              src='/images/placeholder-image.png'
              alt='order'
              className=' h-full w-full rounded '
              placeholder='blur'
              blurDataURL='/assets/images/placeholder-image.png'
            />
          </div>
        )}

        <div className='ml-4'>
          <p className=' truncate... text-xs font-medium capitalize text-gray-700 xl:text-sm'>
            {name}
          </p>

          {isAvailable ? (
            <>
              <p className='font-clash-grotesk text-[10px] font-normal text-gray-400 '>
                {quantity} pieces
              </p>
              {query?.status !== COMPLETED && (
                <button
                  className='block pt-0'
                  onClick={() => {
                    chooseActiveItem();
                  }}
                >
                  <span className='text-primary-blue font-clash-grotesk text-[10px] font-medium'>
                    View Details
                  </span>
                </button>
              )}
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
                onClick={viewOptions}
              >
                View Options
              </Button>
            </>
          )}
        </div>
      </div>
      <div className='flex flex-col items-end'>
        {isLoading && id ? (
          <SpinnerLoader type='default' size='sm' />
        ) : (
          <>
            {query?.status === IN_PROGRESS && (
              <button onClick={deleteItem}>
                <FaTimes className='text-base text-red-500' />
              </button>
            )}
          </>
        )}

        <p className='font-clash-grotesk pt-5 text-xs font-semibold text-gray-800'>
          ₦{price ? price?.toLocaleString() : '0.0'} /each
        </p>
      </div>
    </div>
  );
};

export default SingleOrderList;
