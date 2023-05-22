import React from 'react';

import SingleOrderTab from '@/components/pages-component/orders/SingleOrderTab';

import { orderStatus } from '@/@types/appTypes';
import { orderStatues } from '@/utils/productionData';

const OrderStatusTab = ({
  className,
  activeTab,
  changeTab,
}: {
  className?: string;
  activeTab: orderStatus;
  changeTab: (val: orderStatus) => void;
}) => {
  return (
    <div
      className={`h-[50px] rounded-md bg-blue-50 ${className} flex flex-row items-center justify-between px-5`}
    >
      {orderStatues.map((item, index) => (
        <SingleOrderTab
          key={index}
          {...item}
          activeTab={activeTab}
          changeTab={() => changeTab(item.slug as orderStatus)}
        />
      ))}
    </div>
  );
};

export default OrderStatusTab;
