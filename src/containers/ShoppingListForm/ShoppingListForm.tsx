import { FormikErrors, FormikTouched, FormikValues } from 'formik';
import { ChangeEventHandler, FormEvent } from 'react';
import { MdAdd } from 'react-icons/md';

import Button from '@/components/buttons/Button';
import CartCounter from '@/components/shared/CartCounter';
import Input from '@/components/shared/Input';
import InputFile from '@/components/shared/InputFile/InputFile';
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
  return (
    <div className='border-primary-black/10 w-full border p-5 py-10'>
      <form onSubmit={onSubmit} className='flex flex-col gap-5'>
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
          showPreview={false}
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
  );
};

export default ShoppingListForm;
