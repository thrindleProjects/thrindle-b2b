import React from 'react';

import WalletWhiteBgCard from '@/components/pages-component/wallet/WalletWhiteBgCard';

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
    </div>
  );
};

export default List;
