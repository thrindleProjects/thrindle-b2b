import React from 'react';

import ListCard from '@/components/lib/listCard/ListCard';
import WalletWhiteBgCard from '@/components/pages-component/wallet/WalletWhiteBgCard';
import BorderContainer from '@/components/shared/borderContainer/BorderContainer';

const List = () => {
  return (
    <div>
      <WalletWhiteBgCard
        amount='#300,000'
        date='Jan - April'
        title=' Total Recurrent Payment Amount'
        className='w-[326px] rounded-[8px]'
        recurrent
      />
      <div className='mt-6 flex w-full gap-6'>
        <BorderContainer className='h-max w-[48%] p-10'>
          <div>
            <p className='text-[18px] font-[500]'>My Scheduled Order</p>
            <hr className='mt-2' />
            <ListCard />
          </div>
        </BorderContainer>
        <BorderContainer className=' w-[48%]  p-6'></BorderContainer>
      </div>
    </div>
  );
};

export default List;
