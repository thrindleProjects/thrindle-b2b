import React from 'react';

import Layout from '@/components/layout/Layout';
import {
  OrderStatusLayout,
  OrderStatusTabLayout,
} from '@/components/pages-component/orders';

const Orders = () => {
  return (
    <Layout headerText='Orders'>
      <section className='grid w-full gap-5 lg:grid-cols-2'>
        <OrderStatusTabLayout />
        <OrderStatusLayout />
      </section>
    </Layout>
  );
};

export default Orders;
