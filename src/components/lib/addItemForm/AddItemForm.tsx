import { useFormik } from 'formik';
import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';

import Button from '@/components/buttons/Button';
import { IAddItemFormProps } from '@/components/lib/addItemForm/types';
import Counter from '@/components/lib/counter/Counter';
import Input from '@/components/shared/Input/Input';
import InputFile from '@/components/shared/InputFile/InputFile';
import MultiLineInput from '@/components/shared/multilineInput/MultiLineInput';

import * as CONSTANTS from '@/constant/constants';

import { initialValues, validationSchema } from './validation';

const AddItemForm: React.FC<IAddItemFormProps> = ({ asModal }) => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter((prev) => prev + 1);
  };

  const decreaseCounter = () => {
    setCounter((prev) => prev + 1);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {
      //
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      {asModal && (
        <div className='mb-8'>
          <p className='text-primary-blue text-[24px] font-[600]'>Add Item</p>
          <p className='text-thrindle-text-grey mt-2 text-[14px] font-[400]'>
            Add an item to your recurrent orders to place order for them at
            schedule
          </p>
        </div>
      )}
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
          label='Sample Image (Optional)'
          id={CONSTANTS.IMAGE}
          name={CONSTANTS.IMAGE}
          className='rounded-[8px]'
          type='file'
          placeholder='Click to upload image or drag image here '
          onChange={formik.setFieldValue}
          onBlur={formik.handleBlur}
          value={formik.values[CONSTANTS.IMAGE]}
          error={
            formik.errors[CONSTANTS.IMAGE] && formik.touched[CONSTANTS.IMAGE]
          }
          errorText={formik.errors[CONSTANTS.IMAGE]}
          required={true}
          extensions='image/*, .doc, .docx, '
          showPreview={true}
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
      <Counter
        add={decreaseCounter}
        subtract={increaseCounter}
        counter={counter}
      />
      <Button
        type='submit'
        leftIcon={MdAdd}
        leftIconClassName='text-primary-blue text-xl'
        className='mt-8 h-[52px] w-full'
        variant='outline'
      >
        Add
      </Button>
    </form>
  );
};

export default AddItemForm;
