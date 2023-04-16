import React from 'react';

import { WalletWhiteCardProps } from '@/components/pages-component/wallet/type';
import BorderContainer from '@/components/shared/borderContainer/BorderContainer';

const WalletWhiteBgCard: React.FC<WalletWhiteCardProps> = ({
  amount,
  title,
  date,
}) => {
  return (
    <BorderContainer className='p-6'>
      <p
        className={`text-[16px] font-[400] text-[#767778] ${
          date === 'Due Date' ? 'text-red-600' : ''
        }`}
      >
        {title}
      </p>
      <p className='my-8 text-[24px] font-[600] text-[#49494b]'>{amount}</p>
      <div className='flex items-center justify-between'>
        <p>{date}</p>
        {date === 'Due Date' ? '21 - 03 - 23' : <p>Hello</p>}
      </div>
    </BorderContainer>
  );
};

export default WalletWhiteBgCard;
