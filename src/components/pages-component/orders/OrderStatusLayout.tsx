// import OrderProgressState from '@/components/pages-component/orders/OrderProgressState';

import OrderListLayout from '@/components/pages-component/orders/OrderListLayout';
import BorderContainer from '@/components/shared/borderContainer/BorderContainer';

const OrderStatusLayout = () => {
  return (
    <BorderContainer className='relative h-[530px] w-full overflow-y-auto p-5'>
      <OrderListLayout />
      {/* <OrderProgressState /> */}
    </BorderContainer>
  );
};

export default OrderStatusLayout;
