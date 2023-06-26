import React from 'react';

import { WalletWhiteCardProps } from '@/components/pages-component/wallet/type';
import BorderContainer from '@/components/shared/borderContainer/BorderContainer';

const WalletWhiteBgCard: React.FC<WalletWhiteCardProps> = ({
  amount,
  title,
  date,
  className,
  recurrent,
}) => {
  return (
    <BorderContainer className={`p-6 ${className}`}>
      {recurrent ? (
        <p className='text-[16px] font-[600] text-[#767778]'>{title}</p>
      ) : (
        <p
          className={`text-[16px] font-[400] text-[#767778] ${
            date === 'Due Date' ? 'text-red-600' : ''
          }`}
        >
          {title}
        </p>
      )}
      <p
        className={`my-8 text-[24px] font-[600] text-[#49494b] ${
          recurrent ? 'text-primary-blue' : ''
        }`}
      >
        Amount: {amount && amount === undefined ? 'N/A ' : `N${amount}.00`}
      </p>
      {recurrent ? (
        <p className='text-[16px] font-[600] text-[#767778]'>
          Request Day: {recurrent}th{' '}
        </p>
      ) : (
        <div className='flex items-center justify-between'>
          <p>{date}</p>
          {date === 'Due Date' ? '21 - 03 - 23' : <p>Hello</p>}
        </div>
      )}
    </BorderContainer>
  );
};

export default WalletWhiteBgCard;
