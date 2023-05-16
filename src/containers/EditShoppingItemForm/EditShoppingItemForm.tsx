import React from 'react';

import Button from '@/components/buttons/Button';
import CartCounter from '@/components/shared/CartCounter/CartCounter';
import ImageComponent from '@/components/shared/ImageComponent/ImageComponent';
import Input from '@/components/shared/Input';
import InputFile from '@/components/shared/InputFile/InputFile';
import { ModalHeader } from '@/components/shared/modal';
import MultiLineInput from '@/components/shared/multilineInput/MultiLineInput';

import { CreateShoppingItemResponse } from '@/api/shopping-list/types';
import { IMAGE_URL_PATH } from '@/constant/constants';
import useEditShoppingListItem from '@/pages-layout/shopping-list/useEditShoppingListItem';

interface EditShoppingItemFormProps {
  item: CreateShoppingItemResponse;
}

type EditShoppingItemFormType = React.FC<EditShoppingItemFormProps>;

const EditShoppingItemForm: EditShoppingItemFormType = ({ item }) => {
  const {
    onChange,
    onSubmit,
    values,
    onBlur,
    errors,
    touched,
    setFieldValue,
    decreaseQuantity,
    increaseQuantity,
    isLoading,
  } = useEditShoppingListItem({
    initialValues: {
      description: item.description,
      id: item.id,
      image: item.image,
      name: item.name,
      quantity: item.quantity,
    },
  });

  return (
    <div className='mt-8 space-y-6'>
      <ModalHeader title='Edit Item' />
      <form onSubmit={onSubmit} className='flex flex-col gap-5'>
        <Input
          id='name'
          name='name'
          type='text'
          value={values.name}
          label='Item Name'
          onChange={onChange}
          onBlur={onBlur}
          error={errors.name && touched.name}
          errorText={errors.name}
          required={true}
        />

        {typeof values.image === 'string' && (
          <div className='flex flex-col gap-2'>
            <InputFile
              label='Sample Image'
              id='image'
              name='image'
              type='file'
              placeholder='Click to upload image or drag image here '
              onChange={setFieldValue}
              onBlur={onBlur}
              extensions='image/*'
            />
            <div className='flex h-20 w-full gap-4 overflow-x-auto '>
              <div className='relative h-full w-full'>
                <ImageComponent
                  alt={item.name}
                  src={`${process.env.NEXT_PUBLIC_DEV_URL}${IMAGE_URL_PATH}/${item.image}`}
                />
              </div>
            </div>
          </div>
        )}

        {typeof values.image !== 'string' && (
          <InputFile
            label='Sample Image'
            id='image'
            name='image'
            type='file'
            placeholder='Click to upload image or drag image here '
            onChange={setFieldValue}
            onBlur={onBlur}
            value={values.image}
            error={errors.image && touched.image}
            errorText={errors.image}
            extensions='image/*'
            showPreview={true}
          />
        )}

        <MultiLineInput
          label='Description'
          id='description'
          name='description'
          className='rounded-lg'
          formikTouched={touched.description}
          formikErrors={errors.description}
          onChange={onChange}
          onBlur={onBlur}
          value={values.description}
          numbOfRows={5}
        />
        <div className='w-1/2'>
          <CartCounter
            decreaseQuantity={decreaseQuantity}
            increaseQuantity={increaseQuantity}
            value={values.quantity}
            onBlur={onBlur}
            onChange={onChange}
            error={errors.quantity}
            touched={touched.quantity}
          />
        </div>
        <Button
          type='submit'
          leftIconClassName='text-primary-blue text-xl'
          className='hover:bg-primary-blue mt-8 w-full py-5 hover:text-white'
          variant='primary'
          isLoading={isLoading}
        >
          Proceed
        </Button>
      </form>
    </div>
  );
};

export default EditShoppingItemForm;
