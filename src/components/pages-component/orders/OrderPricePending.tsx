import Image from 'next/image';
import React from 'react';

const OrderPricePending = () => {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center'>
      <Image
        src='/assets/svg/pricelist.svg'
        alt='Price list'
        width={100}
        height={100}
      />
      <div className=' flex w-full flex-col items-center pt-2'>
        <h6 className='font-clash-grotesk text-center text-xl font-medium text-black'>
          We are working up a price list
        </h6>
        <p className='w-[60%] pt-2 text-center  text-xs font-medium text-gray-400'>
          Our representatives are working to get you a price list ASAP, you will
          be notified when we have one for you, check back soon.
        </p>
      </div>
    </div>
  );
};

export default OrderPricePending;
