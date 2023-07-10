import React, { useState } from 'react';

import ItemDetails from '@/components/lib/itemDetail/ItemDetails';
import WalletWhiteBgCard from '@/components/pages-component/wallet/WalletWhiteBgCard';
import BorderContainer from '@/components/shared/borderContainer/BorderContainer';

import { IRecurrentOrderResponse } from '@/api/recurrent/types';

import ListCard from '../../lib/listCard/ListCard';

interface IListProps {
  data: IRecurrentOrderResponse | undefined;
}

const List: React.FC<IListProps> = ({ data }) => {
  const [active, setActive] = useState('');

  return (
    <div>
      <WalletWhiteBgCard
        amount={data?.recurringPaymentAmount}
        date='Jan - April'
        title=' Total Recurrent Payment Amount'
        className='w-[326px] rounded-[8px]'
        recurrent={data?.recurringDeliveryDay}
      />
      <div className='mt-6 flex w-full gap-6'>
        <BorderContainer className='h-[700px] w-[48%] overflow-y-auto p-10'>
          <div>
            <p className='text-[18px] font-[500]'>My Scheduled Order</p>
            <hr className='mt-2' />
            <ListCard
              data={data?.listItems}
              active={active}
              setActive={setActive}
            />
          </div>
        </BorderContainer>
        <BorderContainer className=' h-max w-[48%]  overflow-y-auto p-6'>
          <p className='text-primary-blue text-[18px]'>Your Order</p>
          <ItemDetails active={active} />
        </BorderContainer>
      </div>
    </div>
  );
};

export default List;
