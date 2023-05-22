import React from 'react';

import {
  OrderStatusLayout,
  OrderStatusTabLayout,
} from '@/components/pages-component/orders';
import AuthenticatedLayoutHeader from '@/components/shared/AuthenticatedLayoutHeader/AuthenticatedLayoutHeader';
import MainContentWrapper from '@/components/shared/MainContentWrapper/MainContentWrapper';

const Orders = () => {
  return (
    <MainContentWrapper>
      <AuthenticatedLayoutHeader headerText='Orders' />
      <section className='grid w-full gap-5 lg:grid-cols-2'>
        <OrderStatusTabLayout />
        <OrderStatusLayout />
      </section>
    </MainContentWrapper>
  );
};

export default Orders;
