import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { SpinnerLoader } from '@/components/common/loader';
import EmptyOrder from '@/components/pages-component/orders/EmptyOrder';
import OrderStatusTab from '@/components/pages-component/orders/OrderStatusTab';
import SingleOrder from '@/components/pages-component/orders/SingleOrder';
import BorderContainer from '@/components/shared/borderContainer/BorderContainer';

import { orderStatus } from '@/@types/appTypes';
import { useGetOrdersQuery } from '@/api/order/orderServices';
import { REFETCH_TIME } from '@/constant/constants';

const OrderStatusTabLayout = () => {
  const { query, push } = useRouter();
  const [activeTab, setActiveTab] = useState<orderStatus>('all');
  const [activeOrder, setActiveOrder] = useState<string | null>(
    query?.orderId as string
  );

  const { data, isError, isLoading } = useGetOrdersQuery(activeTab, {
    pollingInterval: REFETCH_TIME,
    refetchOnReconnect: true,
  });

  useEffect(() => {
    if (query && query?.status) {
      setActiveTab(query?.status as orderStatus);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query?.status]);
  useEffect(() => {
    if (query && !query.orderId && data && data?.data?.length) {
      push({
        pathname: '/app/orders',
        query: { status: activeTab, orderId: data?.data[0]?.id },
      });
      setActiveOrder(data?.data[0]?.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query.orderId, data?.data]);

  return (
    <BorderContainer className='h-[530px] w-full overflow-y-scroll p-5'>
      <OrderStatusTab
        className='md:w-[80%] lg:w-full xl:w-[80%]'
        activeTab={activeTab}
        changeTab={(val: orderStatus) => {
          push({
            pathname: '/app/orders',
            query: { status: `${val}` },
          });
          setActiveTab(val);
        }}
      />
      {!isError && isLoading && <SpinnerLoader type='fullScreen' />}
      {!isLoading && !isError && data && data?.data?.length === 0 && (
        <EmptyOrder
          title='No Order has been placed yet.'
          // title={
          //   activeTab === ALL
          //     ? 'No Order has been placed yet.'
          //     : 'No Order matches your filter.'
          // }
        />
      )}
      {!isLoading && !isError && data && data?.data.length > 0 && (
        <section className='mt-5 w-full'>
          {data &&
            data.data.map((item, index) => (
              <SingleOrder
                key={index}
                {...item}
                activeOrder={activeOrder}
                changeOrder={() => {
                  push({
                    pathname: '/app/orders',
                    query: { status: `${activeTab}`, orderId: `${item.id}` },
                  });

                  setActiveOrder(item?.id);
                }}
              />
            ))}
        </section>
      )}
    </BorderContainer>
  );
};

export default OrderStatusTabLayout;
