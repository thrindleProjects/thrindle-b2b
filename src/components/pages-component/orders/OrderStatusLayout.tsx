// import OrderProgressState from '@/components/pages-component/orders/OrderProgressState';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';

import { SpinnerLoader } from '@/components/common/loader';
import OrderListLayout from '@/components/pages-component/orders/OrderListLayout';
import OrderPricePending from '@/components/pages-component/orders/OrderPricePending';
import BorderContainer from '@/components/shared/borderContainer/BorderContainer';

import { useGetSingleOrderQuery } from '@/api/order/orderServices';

const OrderStatusLayout = () => {
  const { query } = useRouter();

  const { data, isError, isFetching } = useGetSingleOrderQuery(
    query?.orderId as string,
    { refetchOnMountOrArgChange: true }
  );

  return (
    <BorderContainer className='relative h-[530px] w-full overflow-y-auto py-5'>
      {isFetching && !isError && <SpinnerLoader type='fullScreen' />}
      {query &&
        query?.orderId &&
        !isFetching &&
        !isError &&
        data &&
        data?.data?.listItems.length > 0 &&
        data?.data?.priceUpdated && <OrderListLayout data={data?.data} />}
      {query &&
        query?.orderId &&
        !isFetching &&
        !isError &&
        data &&
        data?.data &&
        data.data.listItems.length > 0 &&
        !data?.data?.priceUpdated && <OrderPricePending />}

      {query && !query?.orderId && !isFetching && (
        <div className='border-primary-black/10 flex h-full flex-col items-center justify-center border pb-10'>
          <div className='aspect-square w-1/3'>
            <Icon
              icon='ph:basket-fill'
              className='text-primary-black/40 h-full w-full'
            />
          </div>
          <div className='text-primary-blue text-lg font-medium'>
            No item added yet
          </div>
        </div>
      )}
      {query &&
        query?.orderId &&
        !isFetching &&
        data &&
        data.data.listItems.length === 0 && (
          <div className='border-primary-black/10 flex h-full flex-col items-center justify-center border pb-10'>
            <div className='aspect-square w-1/3'>
              <Icon
                icon='ph:basket-fill'
                className='text-primary-black/40 h-full w-full'
              />
            </div>
            <div className='text-primary-blue text-lg font-medium'>
              No item added yet
            </div>
          </div>
        )}

      {/* <OrderProgressState /> */}
    </BorderContainer>
  );
};

export default OrderStatusLayout;
