import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

import Button from '@/components/buttons/Button';

const EmptyOrder = ({ title }: { title?: string }) => {
  const { push } = useRouter();
  return (
    <div className='flex h-full w-full flex-col items-center justify-center'>
      <Image
        src='/assets/svg/ShoppingCart.svg'
        alt='Shopping cart'
        width={100}
        height={100}
      />
      <div className=' flex w-full flex-col items-center pt-2'>
        <h6 className='text-primary-blue font-clash-grotesk text-center text-xl font-medium'>
          {title ? title : 'No Order has been placed yet.'}
        </h6>
        <p className='w-[60%] pt-2 text-center  text-xs font-medium text-gray-400'>
          Create a shopping list and send to us, and information about the order
          will be shown here
        </p>
        <Button
          onClick={() => push('/app/shopping-list')}
          variant='outline'
          className='mt-10'
        >
          Create Shopping List
        </Button>
      </div>
    </div>
  );
};

export default EmptyOrder;
