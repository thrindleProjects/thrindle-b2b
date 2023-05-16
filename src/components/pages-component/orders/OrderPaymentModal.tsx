import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';

import logger from '@/lib/logger';

import Button from '@/components/buttons/Button';
import SingleOrderPaymentOption from '@/components/pages-component/orders/SingleOrderPaymentOption';
import SingleOrderPriceDetail from '@/components/pages-component/orders/SingleOrderPriceDetail';
import Input from '@/components/shared/Input/Input';
import { ModalHeader } from '@/components/shared/modal';

import { orderPaymentOptions } from '@/@types/appTypes';
import { DATE, SCHEDULED_PAYMENT } from '@/constant/constants';
import { paymentOptionsData } from '@/utils/productionData';

const PaymentModal = ({
  handleCompleteOrder,
}: {
  handleCompleteOrder: () => void;
}) => {
  const [paymentOption, setPaymentOption] =
    useState<orderPaymentOptions>('now');

  const pay = (values: { date: string }) => {
    /* eslint-disable */
    logger(values);
  };

  const formik = useFormik({
    initialValues: { date: '' },
    validationSchema: Yup.object({
      date: Yup.string().required('Scheduled date is required'),
    }),
    onSubmit: (values) => {
      pay(values);
    },
  });

  return (
    <div className='mt-5 w-full'>
      <ModalHeader title='Payment' />
      <div className='mt-5 w-full'>
        <p className='font-clash-grotesk mb-2 text-sm text-gray-700'>
          Payment Options
        </p>
        {paymentOptionsData.map((item, index) => (
          <SingleOrderPaymentOption
            {...item}
            key={index}
            paymentOption={paymentOption}
            changePayment={() =>
              setPaymentOption(item.slug as orderPaymentOptions)
            }
          />
        ))}
        {paymentOption === SCHEDULED_PAYMENT && (
          <div className='mt-5 w-full'>
            <Input
              id='date'
              type={DATE}
              value={formik.values.date}
              placeholder='24 / 03 / 1999'
              label='Date of Birth'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.date && formik.touched.date}
              errorText={formik.errors.date}
              required={true}
            />
          </div>
        )}

        {/* Order Details */}
        <div className='mt-8 w-full'>
          <div className='w-full border-b border-b-gray-200 pb-2'>
            <SingleOrderPriceDetail title='Total Cost' value='₦200,000' />
            <SingleOrderPriceDetail title='Delivery Fee' value='₦10,000' />
            <SingleOrderPriceDetail title='Service Charge' value='₦5,000' />
          </div>
          <div className='mt-5 flex w-full flex-row items-center justify-between'>
            <p className='font-clash-grotesk text-base font-medium text-gray-800'>
              Total
            </p>
            <p className='text-xl font-semibold text-gray-900'>₦215,000</p>
          </div>
        </div>
        {paymentOption === SCHEDULED_PAYMENT ? (
          <Button variant='primary' className='mt-10 w-full'>
            Schedule Order
          </Button>
        ) : (
          <Button
            onClick={handleCompleteOrder}
            variant='primary'
            className='mt-10 w-full'
          >
            Pay ₦215,000
          </Button>
        )}
      </div>
    </div>
  );
};

export default PaymentModal;
