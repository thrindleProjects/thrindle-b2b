import { useFormik } from 'formik';
import React from 'react';
import { toast } from 'react-hot-toast';
import * as Yup from 'yup';

import Button from '@/components/buttons/Button';
import Select from '@/components/shared/Select/Select';

import { useCreateRecurrentOrderMutation } from '@/api/recurrent';
import { ISingleRecurrentItem } from '@/api/recurrent/types';

import { useGenerateNumber } from '../../../hooks/useGenerateNumbers';

interface IProps {
  ids: string[] | undefined;
  handleCloseModal: () => void;
  data: ISingleRecurrentItem[] | undefined;
}

const RecurrentOrderList: React.FC<IProps> = ({
  ids,
  handleCloseModal,
  data,
}) => {
  const [createOrder, { isLoading }] = useCreateRecurrentOrderMutation();

  const formik = useFormik({
    initialValues: { day: '' },
    validationSchema: Yup.object({
      day: Yup.string().required('Day is required'),
    }),
    onSubmit: (values) => {
      createOrder({
        list: ids,
        monthlyDeliveryDay: Number(values.day),
      })
        .unwrap()
        .then((res) => {
          toast.success(`${res.message}`);
          handleCloseModal();
        });
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mappedDay = useGenerateNumber(1, 30).map((state: any) => {
    return {
      label: state,
      value: state,
    };
  });
  return (
    <div className='mt-6'>
      <p className='text-primary-blue text-[24px] font-[600]'>Schedule Order</p>
      <p className='mt-10 text-[16px]'>
        Enter a particular day of the month you will like to place order for
        this items
      </p>
      <p className='mt-10 text-[14px] font-[500]'>Recurrent Order Day</p>
      <div className='mt-3'>
        <Select
          label='Day'
          id='day'
          name='day'
          onChangeValue={formik.setFieldValue}
          value={formik.values.day}
          onBlurEvent={formik.setFieldTouched}
          error={formik.errors['day'] && formik.touched['day']}
          errorText={formik.errors.day}
          required={true}
          options={mappedDay}
        />
      </div>

      <div className='mt-10'>
        <p className='text-[16px] font-[600]'>Item Summary</p>
        {data &&
          data.map((item, index) => (
            <div key={index} className='mt-2 flex items-center justify-between'>
              <p>{item.name}</p>
              <p>
                <span className='font-[500] '>{item.quantity} </span>Pieces
              </p>
            </div>
          ))}
      </div>
      <hr className='my-4' />
      <Button
        type='submit'
        leftIconClassName='text-white text-xl'
        className='mt-8 h-[52px] w-full'
        variant='primary'
        isLoading={isLoading}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        onClick={formik.handleSubmit}
      >
        Confirm Scheduled Order
      </Button>
    </div>
  );
};

export default RecurrentOrderList;
