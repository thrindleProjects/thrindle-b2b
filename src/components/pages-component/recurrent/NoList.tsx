import React from 'react';

import AddItemForm from '@/components/lib/AddItemForm';
import BorderContainer from '@/components/shared/borderContainer/BorderContainer';

const NoList = () => {
  return (
    <div className='flex w-full gap-6'>
      <BorderContainer className='h-max w-[48%] p-10'>
        <AddItemForm />
      </BorderContainer>
      <BorderContainer className='h-[400px] w-[48%]'></BorderContainer>
    </div>
  );
};

export default NoList;
