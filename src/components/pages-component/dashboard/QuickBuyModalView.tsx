import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

import Button from '@/components/buttons/Button';
import {
  initialValues,
  validationSchema,
} from '@/components/lib/addItemForm/validation';
import CartCounter from '@/components/shared/CartCounter/CartCounter';
import Input from '@/components/shared/Input/Input';
import InputFile from '@/components/shared/InputFile/InputFile';
import { ModalHeader } from '@/components/shared/modal';
import GenModal from '@/components/shared/modal/Modal';
import MultiLineInput from '@/components/shared/multilineInput/MultiLineInput';
import ResponseStatusModal from '@/components/shared/responseStatusModal/ResponseStatusModal';

import { useQuickBuyMutation } from '@/api/dashboard/dashboardServices';
import * as CONSTANTS from '@/constant/constants';
import { mainErrorHandler } from '@/utils/networkHandler';

const QuickBuyModalView = () => {
  const [orderSuccessModal, setOrderSuccessModal] = useState(false);
  const router = useRouter();

  const [quickBuy, { isLoading }] = useQuickBuyMutation();
  const increaseCounter = () => {
    if (isNaN(formik.values.quantity)) {
      formik.setFieldTouched('quantity', true, true);
      return;
    }
    formik.setFieldValue('quantity', Number(formik.values.quantity) + 1, true);
    formik.setFieldTouched('quantity', false);
    return;
  };

  const decreaseCounter = () => {
    if (formik.values.quantity === 0 || isNaN(formik.values.quantity)) {
      formik.setFieldTouched('quantity', true, true);
      return;
    }

    formik.setFieldValue('quantity', Number(formik.values.quantity) - 1, true);
    formik.setFieldTouched('quantity', false);

    return;
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      const formData = new FormData();
      formData.append('name', values['Item Name'] as string | Blob);
      formData.append(
        'description',
        values['Item Description'] as string | Blob
      );

      formData.append('quantity', String(values.quantity));
      if (values.Image) {
        if (values.Image[0]) {
          formData.append('image', values.Image[0] as Blob);
        }
      }
      quickBuy({ data: formData })
        .unwrap()
        .then((res) => {
          toast.success(`${res.message}`);
          resetForm();
          setOrderSuccessModal(true);
        })
        .catch((err) => mainErrorHandler(err));
    },
  });
  return (
    <div className='w-full '>
      {/* Content */}
      <div className='mt-10 w-full'>
        <ModalHeader
          title='Quick Buy'
          text='Place order for items with small units and we can get it for you on the go!'
        />
        <div className='mt-5 w-full'>
          <form onSubmit={formik.handleSubmit}>
            <Input
              id={CONSTANTS.ITEMNAME}
              type={CONSTANTS.TEXT}
              value={formik.values[CONSTANTS.ITEMNAME]}
              className='rounded-[8px]'
              label='Item Name'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.errors[CONSTANTS.ITEMNAME] &&
                formik.touched[CONSTANTS.ITEMNAME]
              }
              errorText={formik.errors[CONSTANTS.ITEMNAME]}
              required={true}
            />
            <div className='mt-4'>
              <InputFile
                label='Sample Image '
                id={CONSTANTS.IMAGE}
                name={CONSTANTS.IMAGE}
                className='rounded-[8px]'
                type='file'
                placeholder='Click to upload image or drag image here '
                onChange={formik.setFieldValue}
                onBlur={formik.handleBlur}
                value={formik.values[CONSTANTS.IMAGE]}
                error={
                  formik.errors[CONSTANTS.IMAGE] &&
                  formik.touched[CONSTANTS.IMAGE]
                }
                errorText={formik.errors[CONSTANTS.IMAGE]}
                required={true}
                extensions='image/*, .doc, .docx,'
                showPreview={true}
                multiple
              />
            </div>
            <div className='mt-4'>
              <MultiLineInput
                label='Description'
                id={CONSTANTS.ITEMDESCRIPTION}
                name={CONSTANTS.ITEMDESCRIPTION}
                className='rounded-[8px] '
                formikTouched={formik.touched[CONSTANTS.ITEMDESCRIPTION]}
                formikErrors={formik.errors[CONSTANTS.ITEMDESCRIPTION]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[CONSTANTS.ITEMDESCRIPTION]}
                numbOfRows={3}
              />
            </div>
            <div className='mt-4 w-1/2'>
              <CartCounter
                decreaseQuantity={decreaseCounter}
                increaseQuantity={increaseCounter}
                value={formik.values.quantity}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                error={formik.errors[CONSTANTS.QUANTITY]}
                touched={formik.touched[CONSTANTS.ITEMDESCRIPTION]}
              />
            </div>
            <Button
              type='submit'
              // leftIcon={MdAdd}
              leftIconClassName='text-primary-blue  text-xl'
              className=' mt-8 h-[52px] w-full '
              variant='primary'
              isLoading={isLoading}
            >
              Add
            </Button>
          </form>
        </div>
      </div>
      <GenModal
        isOpen={orderSuccessModal}
        handleCloseModal={() => setOrderSuccessModal(!orderSuccessModal)}
      >
        <ResponseStatusModal
          onClick={() => {
            setOrderSuccessModal(false);
            router.push('/app/orders');
          }}
          title='Order Recieved'
          msg='We have gotten the list and we will be responding with a quote in less
        than 5 hours, check your order page to monitor update and make payment'
          icon_src='order_received'
          btnText='Proceed To Orders'
        />
      </GenModal>
    </div>
  );
};

export default QuickBuyModalView;
