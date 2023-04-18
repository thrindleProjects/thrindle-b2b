import React from 'react';

import { useOrderStatusHook } from '@/hooks';

import { orderStatus } from '@/@types/appTypes';

const OrderStatusContainer = ({
  status,
  className,
}: {
  status: orderStatus;
  className?: string;
}) => {
  const { orderStyle } = useOrderStatusHook({
    orderStatus: status as orderStatus,
  });
  return (
    <div
      className={` flex flex-row items-center justify-center rounded-sm px-3 py-2 ${orderStyle.bgColor} ${className}`}
    >
      <p
        className={`font-clash-grotesk text-xs font-medium ${orderStyle.textColor}`}
      >
        {orderStyle?.text}
      </p>
    </div>
  );
};

export default OrderStatusContainer;
