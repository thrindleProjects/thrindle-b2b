import { FormikErrors, FormikTouched, FormikValues } from 'formik';
import Image from 'next/image';
import { ChangeEventHandler, FormEvent, useState } from 'react';
import { MdAdd } from 'react-icons/md';

import Button from '@/components/buttons/Button';
import CartCounter from '@/components/shared/CartCounter';
import Input from '@/components/shared/Input';
import InputFile from '@/components/shared/InputFile/InputFile';
import GenModal from '@/components/shared/modal/Modal';
import MultiLineInput from '@/components/shared/multilineInput/MultiLineInput';

import { ShoppingListItem } from '@/pages-layout/shopping-list/validation';

interface ShoppingListProps {
  onSubmit: (e?: FormEvent<HTMLFormElement> | undefined) => void;
  values: ShoppingListItem;
  onChange:
    | ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  errors: FormikErrors<ShoppingListItem>;
  touched: FormikTouched<ShoppingListItem>;
  onBlur: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  setFieldValue: (
    field: string,
    value: File[],
    shouldValidate?: boolean | undefined
  ) => Promise<FormikErrors<FormikValues>> | Promise<void>;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
}

type ShoppingListFormType = React.FC<ShoppingListProps>;

const ShoppingListForm: ShoppingListFormType = ({
  onSubmit,
  values,
  onChange,
  errors,
  touched,
  onBlur,
  setFieldValue,
  increaseQuantity,
  decreaseQuantity,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    onSubmit(e);
    setIsOpen(true);
  }

  function handleCloseAddedModal() {
    setIsOpen(false);
  }
  return (
    <>
      <div className='border-primary-black/10 w-full border p-5 py-10'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
          <Input
            id='title'
            name='title'
            type='text'
            value={values.title}
            label='Item Name'
            onChange={onChange}
            onBlur={onBlur}
            error={errors.title && touched.title}
            errorText={errors.title}
            required={true}
          />
          <InputFile
            label='Sample Image (Optional)'
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
          <CartCounter
            decreaseQuantity={decreaseQuantity}
            increaseQuantity={increaseQuantity}
            value={values.quantity}
            onBlur={onBlur}
            onChange={onChange}
            error={errors.quantity}
            touched={touched.quantity}
          />
          <Button
            type='submit'
            leftIcon={MdAdd}
            leftIconClassName='text-primary-blue text-xl'
            className='hover:bg-primary-blue mt-8 w-full py-5 hover:text-white'
            variant='outline'
          >
            Add
          </Button>
        </form>
      </div>
      <GenModal isOpen={isOpen} handleCloseModal={handleCloseAddedModal}>
        <section className='flex w-full flex-col gap-3 text-center'>
          <figure className='relative mx-auto aspect-square w-4/5'>
            <Image
              fill={true}
              src='/assets/svg/added-success.svg'
              alt='Successfully Added'
            />
          </figure>
          <h4 className='text-primary-blue text-2xl font-semibold'>
            Item Added Successfully
          </h4>
          <p>
            This item has been successfully added to your order list, once you
            are satisfied you can proceed to order
          </p>
          <Button
            type='submit'
            className='hover:bg-primary-blue mt-8 w-full py-5 font-medium hover:text-white'
            variant='outline'
            onClick={handleCloseAddedModal}
          >
            Back
          </Button>
        </section>
      </GenModal>
    </>
  );
};

export default ShoppingListForm;
