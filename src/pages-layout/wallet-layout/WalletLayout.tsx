import { Carousel } from 'flowbite-react';
import React from 'react';

import WalletDough from '@/components/pages-component/wallet/WalletDough';
import WalletTable from '@/components/pages-component/wallet/WalletTable';
import WalletWhiteBgCard from '@/components/pages-component/wallet/WalletWhiteBgCard';
import BorderContainer from '@/components/shared/borderContainer/BorderContainer';
import WalletCard from '@/components/shared/walletCard/WalletCard';

import {
  useGetWalletDetailsQuery,
  useGetWalletOutstandingQuery,
} from '@/api/wallet';

const WalletLayout = () => {
  const { data } = useGetWalletDetailsQuery();
  const { data: outstanding } = useGetWalletOutstandingQuery();
  return (
    <>
      <div className='grid  grid-cols-2 gap-6 lg:grid-cols-3'>
        <WalletCard />
        <WalletWhiteBgCard
          amount={data && data.data?.totalDeposited}
          date='Jan - April'
          title='Total Funds added'
        />
        <div className=' '>
          <Carousel
            leftControl={<></>}
            rightControl={<></>}
            slideInterval={3000}
          >
            <WalletWhiteBgCard
              amount={data && data.data?.totalSpent}
              date='Jan - April'
              title='Total Funds Spent'
            />
            <WalletWhiteBgCard
              amount={outstanding && outstanding?.data}
              date='Due Date'
              title='Outstanding Payment'
            />
          </Carousel>
        </div>
      </div>

      <div className='mt-5 flex  gap-6'>
        <BorderContainer className='w-[68%] p-7 lg:p-10'>
          <WalletTable />
        </BorderContainer>
        <BorderContainer className=' w-[33.33%]  p-7 lg:p-10'>
          <WalletDough />
        </BorderContainer>
      </div>
    </>
  );
};

export default WalletLayout;
