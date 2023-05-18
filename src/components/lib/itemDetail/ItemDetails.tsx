import Image from 'next/image';
import React from 'react';

import EmptyStateWithBag from '@/components/lib/emptyStateWithBag/EmptyStateWithBag';

import { useGetSingleItemQuery } from '@/api/recurrent';

import { IMAGE_URL } from '../../../constant/constants';

interface IItemDetailsProps {
  active: string | undefined;
}

const ItemDetails: React.FC<IItemDetailsProps> = ({ active }) => {
  const { data } = useGetSingleItemQuery(active);

  if (!data) {
    return <EmptyStateWithBag className='mt-0' text='' />;
  }
  return (
    <div className='mt-6'>
      <div className='grid grid-cols-4 gap-6'>
        {[1, 2, 3, 4].map((_, index) => (
          <Image
            src={`${IMAGE_URL}/${data?.data.image}`}
            alt=''
            key={index}
            width={127}
            height={127}
          />
        ))}
      </div>
      <div className='my-6'>
        <p className='text-[18px] font-[600]'>{data?.data.name}</p>
        <p className='text-thrindle-text-grey w-[50%] text-[14px] font-[400] '>
          {data?.data.description}
        </p>
      </div>

      <div>
        <div className='flex items-center justify-between'>
          <p className='text-[16px] font-[600]'>{data?.data.quantity} Pieces</p>
          <p className='font-[500]'>Total Price</p>
        </div>

        {data?.data.price === null && (
          <div className='mt-6 flex items-center justify-between'>
            <p className='font-[500]'>N\A</p>
            <p className='text-[16px] font-[600]'>N/A</p>
          </div>
        )}
        {data?.data.price !== null && (
          <div className='mt-6 flex items-center justify-between'>
            <p className='font-[500]'>#{data?.data.price}/each</p>
            <p className='text-[16px] font-[600]'>
              {data?.data.price * data?.data.quantity}
            </p>
          </div>
        )}
      </div>

      {/* suggested options */}
      <div className='mt-6'>
        <p className='text-thrindle-text-grey pb-6 font-[500] text-[500]'>
          Suggested Options
        </p>
        <div className='grid grid-cols-4 gap-6'>
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index}>
              <Image
                src='/assets/svg/chair-img.svg'
                alt=''
                width={127}
                height={127}
              />
              <div className='my-4'>
                <p className='text-[18px] font-[400]'>Office Chairs</p>
                <p className='text-thrindle-text-grey  text-[14px] font-[400] '>
                  Lorem ipsum dolor sit amet consectetur. Viverra dictum
                  sagittis
                </p>
                <p className='mt-2 font-[500]'>#20,000/each</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
