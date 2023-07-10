import * as Yup from 'yup';

import { CreateShoppingItemResponse } from '@/api/shopping-list/types';

export type ShoppingListItem = {
  image?: File[];
  name: string;
  description: string;
  quantity: number;
};

export type ShoppingListCart = CreateShoppingItemResponse[];

export const initialValues: ShoppingListItem = {
  image: [],
  name: '',
  description: '',
  quantity: 0,
};
export type EditInitialShoppingListItemType = Omit<
  CreateShoppingItemResponse,
  | 'isSubstitute'
  | 'recurrent'
  | 'companyId'
  | 'isAvailable'
  | 'price'
  | 'volumeDiscount'
  | 'volumeDiscountAmt'
> & {
  images: (string | File)[];
};

export const editInitialShoppingListItem: EditInitialShoppingListItemType = {
  images: [],
  name: '',
  quantity: 0,
  createdAt: '',
  description: '',
  id: '',
  updatedAt: '',
};

export const editValidationSchema = Yup.object({
  name: Yup.string().required('Item Name is required'),
  description: Yup.string().required('Description is required'),
  quantity: Yup.number()
    .required('Quantity is required')
    .typeError('Quantity must be a number')
    .min(1, 'Must be greater than zero'),
  images: Yup.array()
    .test(
      'validate image',
      'Please provide a valid image',
      (value: (string | File)[] | undefined, context) => {
        if (!value || !value.length) {
          return true;
        }
        const isValid = value.every((item) => {
          if (typeof item === 'string') {
            return true;
          }

          if (item instanceof File) {
            return item.type.includes('image/');
          }

          return false;
        });

        if (!isValid) context?.createError();

        return isValid;
      }
    )
    .min(1, 'Please provide at least one image')
    .max(6, 'You cannot upload more than 6 images')
    .required('Please provide at least one image'),
});

export const validationSchema = Yup.object({
  image: Yup.array()
    .test(
      'validate image',
      'Please provide a valid image',
      (value: File[] | undefined, context) => {
        if (!value || !value.length) {
          return true;
        }

        // const isValid = Boolean(value[0] && value[0].type.includes('image/'));

        const isValid = value.every((item) => item.type.includes('image/'));

        if (!isValid) context?.createError();

        return isValid;
      }
    )
    .max(6, 'You cannot upload more than 6 images')
    .min(1, 'Please provide at least one image')
    .required('Please provide at least one image'),
  name: Yup.string().required('Item Name is required'),
  description: Yup.string().required('Description is required'),
  quantity: Yup.number()
    .required('Quantity is required')
    .typeError('Quantity must be a number')
    .min(1, 'Must be greater than zero'),
});
