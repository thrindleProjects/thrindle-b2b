import Image from 'next/image';
import React from 'react';

const EmptyStateWithBag = ({
  className,
  text,
}: {
  className: string;
  text: string;
}) => {
  return (
    <div
      className={`mt-40 flex h-full w-full flex-col items-center justify-center ${className}`}
    >
      <Image
        width={176}
        height={157}
        alt=''
        src='/assets/svg/emptyShoppingBag.svg'
      />
      <p className='text-primary-blue my-4 text-[18px] font-[500]'>{text}</p>
    </div>
  );
};

export default EmptyStateWithBag;
