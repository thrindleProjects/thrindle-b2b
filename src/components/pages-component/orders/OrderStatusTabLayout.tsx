import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import OrderStatusTab from '@/components/pages-component/orders/OrderStatusTab';
import SingleOrder from '@/components/pages-component/orders/SingleOrder';
import BorderContainer from '@/components/shared/borderContainer/BorderContainer';

import { orderStatus } from '@/@types/appTypes';
import { dummyOrders } from '@/utils/devData';

const OrderStatusTabLayout = () => {
  const [activeTab, setActiveTab] = useState<orderStatus>('all');
  const [activeOrder, setActiveOrder] = useState<string | null>(null);
  const { query, push } = useRouter();

  useEffect(() => {
    if (query && query?.status) {
      setActiveTab(query?.status as orderStatus);
    }
    setActiveOrder(dummyOrders[0]?._id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query?.status]);
  useEffect(() => {
    if (query && !query.orderId && dummyOrders?.length) {
      setActiveOrder(dummyOrders[0]?._id);
      push(`/app/orders?status=${activeTab}&orderId=${dummyOrders[0]?._id}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query.orderId, dummyOrders]);

  return (
    <BorderContainer className='h-[530px] w-full overflow-y-scroll p-5'>
      <OrderStatusTab
        className='md:w-[80%] lg:w-full xl:w-[80%]'
        activeTab={activeTab}
        changeTab={(val: orderStatus) => {
          push(`/app/orders?status=${val}`);
          setActiveTab(val);
        }}
      />
      <section className='mt-5 w-full'>
        {dummyOrders.map((item, index) => (
          <SingleOrder
            key={index}
            {...item}
            activeOrder={activeOrder}
            changeOrder={() => {
              push(`/app/orders?status=${activeTab}&orderId=${item?._id}`);
              setActiveOrder(item?._id);
            }}
          />
        ))}
      </section>
    </BorderContainer>
  );
};

export default OrderStatusTabLayout;
