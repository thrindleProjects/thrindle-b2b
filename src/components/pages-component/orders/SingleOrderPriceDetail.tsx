import React from 'react';

import Skeleton from '@/components/Skeleton';

const SingleOrderPriceDetail = ({
  title,
  value,
  isLoading,
}: {
  title: string;
  value: number;
  isLoading?: boolean;
}) => {
  return (
    <div className='mb-3 flex w-full flex-row items-center justify-between'>
      {!isLoading ? (
        <>
          {' '}
          <p className='font-clash-grotesk text-xs font-medium text-gray-600'>
            {title}
          </p>
          <p className='text-sm font-medium text-gray-800'>
            ₦{value.toLocaleString()}
          </p>
        </>
      ) : (
        <Skeleton className='h-7 w-full' />
      )}
    </div>
  );
};

export default SingleOrderPriceDetail;
