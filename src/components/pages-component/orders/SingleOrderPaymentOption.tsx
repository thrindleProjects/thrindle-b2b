import React from 'react';

import { orderPaymentOptions } from '@/@types/appTypes';

const SingleOrderPaymentOption = ({
  name,
  paymentOption,
  changePayment,
  slug,
}: {
  name: string;
  paymentOption: orderPaymentOptions;
  changePayment: () => void;
  slug: string;
}) => {
  return (
    <div
      onClick={changePayment}
      role='button'
      tabIndex={1}
      className={`mb-4 flex w-full flex-row items-center justify-between rounded-md border border-gray-200 px-4 py-3 ${
        paymentOption === slug && 'border-primary-blue'
      }`}
    >
      <p
        className={`text-base font-medium text-gray-400 ${
          paymentOption === slug && 'text-primary-blue'
        }`}
      >
        {name}
      </p>
      <div
        className={`flex h-[15px] w-[15px] flex-row items-center justify-center rounded-full border border-gray-200 ${
          paymentOption === slug && 'border-primary-blue'
        }`}
      >
        {paymentOption === slug && (
          <div className='bg-primary-blue h-[10px] w-[10px] rounded-full' />
        )}
      </div>
    </div>
  );
};

export default SingleOrderPaymentOption;
