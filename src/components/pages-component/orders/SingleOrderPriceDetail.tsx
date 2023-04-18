import React from 'react';

const SingleOrderPriceDetail = ({
  title,
  value,
}: {
  title: string;
  value: string;
}) => {
  return (
    <div className='mb-3 flex w-full flex-row items-center justify-between'>
      <p className='font-clash-grotesk text-xs font-medium text-gray-600'>
        {title}
      </p>
      <p className='text-sm font-medium text-gray-800'>{value}</p>
    </div>
  );
};

export default SingleOrderPriceDetail;
