import Image from 'next/image';
import { FC } from 'react';

import { useTimeFormatHook } from '@/hooks/useTimeFormakHook';

import { IOrderItem } from '@/@types/appTypes';
import { BASE_URL } from '@/api/globalApi';
import { IMAGE_URL_PATH } from '@/constant/constants';

interface ISingleRecentPurchasesProps extends IOrderItem {
  onPress?: () => void;
}

const SingleRecentPurchase: FC<ISingleRecentPurchasesProps> = ({
  name,
  createdAt,
  price,
  images,
}) => {
  const mainPrice = price ? price.toLocaleString() : 0.0;

  const { formattedDate } = useTimeFormatHook({
    date: createdAt,
    format: 'Do MMMM YYYY',
  });
  return (
    <div className='mb-4 flex w-full flex-row items-center justify-between px-4'>
      <div className='flex flex-row'>
        <Image
          // src='/assets/svg/critters.svg'
          src={`${BASE_URL}${IMAGE_URL_PATH}/${images[0]}`}
          alt='bell'
          width={40}
          height={40}
          className='rounded-full bg-gray-200 object-contain'
        />
        <div className='ml-3 w-[70%]'>
          <p className=' truncate... text-xs font-medium text-gray-700 xl:text-sm'>
            {name}
          </p>
          <p className='font-clash-grotesk text-[10px] font-normal text-gray-400 '>
            {formattedDate}
          </p>
        </div>
      </div>
      {/* Price */}
      <div>
        <p className='font-clash-grotesk text-xs font-semibold text-gray-600 xl:text-sm'>
          ₦{mainPrice}
        </p>
      </div>
    </div>
  );
};

export default SingleRecentPurchase;
