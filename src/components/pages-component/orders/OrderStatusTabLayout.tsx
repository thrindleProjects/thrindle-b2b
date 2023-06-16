import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { SpinnerLoader } from '@/components/common/loader';
import EmptyOrder from '@/components/pages-component/orders/EmptyOrder';
import OrderStatusTab from '@/components/pages-component/orders/OrderStatusTab';
import SingleOrder from '@/components/pages-component/orders/SingleOrder';
import BorderContainer from '@/components/shared/borderContainer/BorderContainer';
import MainError from '@/components/shared/error/MainError';

import { orderStatus } from '@/@types/appTypes';
import { useGetOrdersQuery } from '@/api/order/orderServices';
import { REFETCH_TIME } from '@/constant/constants';
import { getErrorMessage } from '@/utils/networkHandler';

const OrderStatusTabLayout = () => {
  const { query, push } = useRouter();
  const [activeTab, setActiveTab] = useState<orderStatus>('all');
  const { data, isError, isLoading, isFetching, refetch, error } =
    useGetOrdersQuery(activeTab, {
      pollingInterval: REFETCH_TIME,
      refetchOnReconnect: true,
      refetchOnMountOrArgChange: true,
    });
  const [activeOrder, setActiveOrder] = useState<string | null>(
    query?.orderId as string
  );

  useEffect(() => {
    if (query && query?.status) {
      setActiveTab(query?.status as orderStatus);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query?.status]);

  useEffect(() => {
    if (data && data?.data) {
      if (data?.data[0]) {
        push({
          pathname: '/app/orders',
          query: { status: activeTab, orderId: data?.data[0]?.id },
        });
        setActiveOrder(data?.data[0]?.id);
      } else {
        push({
          pathname: '/app/orders',
          query: { status: activeTab },
        });
        setActiveOrder(null);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab, isFetching]);

  const changeTab = (val: orderStatus) => {
    setActiveTab(val);
    if (data && data?.data.length) {
      push({
        pathname: '/app/orders',
        query: { status: `${val}`, orderId: data?.data[0]?.id },
      });
      setActiveOrder(data?.data[0]?.id);
    } else {
      push({
        pathname: '/app/orders',
        query: { status: `${val}` },
      });
    }
  };

  return (
    <BorderContainer className='h-[530px] w-full overflow-y-scroll p-5'>
      <OrderStatusTab
        className='md:w-[95%] lg:w-full xl:w-[95%]'
        activeTab={activeTab}
        changeTab={changeTab}
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
      {isError && !isLoading && (
        <MainError
          className='mt-16'
          retry={refetch}
          message={getErrorMessage(error)}
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
