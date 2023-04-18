import { Icon } from '@iconify/react';
import React from 'react';

import { CounterProps } from '@/components/lib/counter/types';
import BorderContainer from '@/components/shared/borderContainer/BorderContainer';
import InputLabel from '@/components/shared/InputLabel/InputLabel';

const Counter: React.FC<CounterProps> = ({ counter, add, subtract }) => {
  return (
    <div className='mt-2'>
      <InputLabel id='quantity' label='Quantity' />
      <div className='mt-2 flex items-center gap-4'>
        <button
          type='button'
          onClick={add}
          className='border-primary-blue flex h-[40px] w-[40px] items-center justify-center rounded-[4px] border'
        >
          <Icon icon='bi:dash-lg' className='text-primary-blue text-2xl' />
        </button>
        <BorderContainer className='flex h-[40px] w-[40px] items-center justify-center'>
          <p>{counter}</p>
        </BorderContainer>
        <button
          type='button'
          onClick={subtract}
          className='bg-primary-blue flex h-[40px] w-[40px] items-center justify-center rounded-[4px] border'
        >
          <Icon icon='material-symbols:add' className='text-2xl text-white' />
        </button>
      </div>
    </div>
  );
};

export default Counter;
