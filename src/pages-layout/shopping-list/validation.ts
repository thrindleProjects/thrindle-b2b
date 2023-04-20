import * as Yup from 'yup';

export type ShoppingListItem = {
  image: File[] | undefined;
  title: string;
  description: string;
  quantity: number;
};

export type ShoppingListCart = (ShoppingListItem & {
  date: string;
})[];

export const initialValues: ShoppingListItem = {
  image: undefined,
  title: '',
  description: '',
  quantity: 0,
};

export const validationSchema = Yup.object({
  image: Yup.array()
    .test(
      'validate image',
      'Please provide a valid image',
      (value: File[] | undefined, context) => {
        if (!value || !value.length) {
          return true;
        }

        const isValid = Boolean(value[0] && value[0].type.includes('image/'));

        if (!isValid) return context?.createError();

        return isValid;
      }
    )
    .notRequired(),
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
  quantity: Yup.number()
    .required('Quantity is required')
    .typeError('Quantity must be a number')
    .min(1, 'Must be greater than zero'),
});
