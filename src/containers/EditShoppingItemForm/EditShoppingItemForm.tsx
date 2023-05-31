import React from 'react';

import Button from '@/components/buttons/Button';
import CartCounter from '@/components/shared/CartCounter/CartCounter';
import Input from '@/components/shared/Input';
import InputFile from '@/components/shared/InputFile/InputFile';
import { ModalHeader } from '@/components/shared/modal';
import MultiLineInput from '@/components/shared/multilineInput/MultiLineInput';

import { CreateShoppingItemResponse } from '@/api/shopping-list/types';
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
    deleteImage,
  } = useEditShoppingListItem({
    initialValues: {
      description: item.description,
      id: item.id,
      images: item.images,
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
        <InputFile
          label='Sample Image'
          id='images'
          name='images'
          type='file'
          placeholder='Click to upload image or drag image here '
          onChange={setFieldValue}
          onBlur={onBlur}
          value={values.images}
          error={errors.images && touched.images}
          errorText={errors.images as string}
          extensions='image/*'
          showPreview={true}
          multiple={true}
          onDelete={deleteImage}
        />

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
