import { useFormik } from 'formik';
import { toast } from 'react-hot-toast';

import logger from '@/lib/logger';

import {
  useDeleteImageFromItemMutation,
  useEditShoppingItemMutation,
} from '@/api/shopping-list';
import {
  editInitialShoppingListItem,
  EditInitialShoppingListItemType,
  editValidationSchema,
} from '@/pages-layout/shopping-list/validation';

const useEditShoppingListItem = (props: {
  initialValues: {
    images: (File | string)[];
    id: string;
    name: string;
    description: string;
    quantity: number;
  };
}) => {
  const { initialValues } = props;

  const [editItem, { isLoading }] = useEditShoppingItemMutation();
  const [deleteImage, { isLoading: imageDeleting }] =
    useDeleteImageFromItemMutation();

  const formik = useFormik({
    initialValues: { ...editInitialShoppingListItem, ...initialValues },
    validationSchema: editValidationSchema,
    onSubmit: async (values) => {
      // logic here
      const formData = new FormData();

      const updateData = {
        images: values.images,
        name: values.name,
        description: values.description,
        quantity: values.quantity,
      };
      const keys = Object.keys(updateData) as (keyof Omit<
        EditInitialShoppingListItemType,
        'createdAt' | 'updatedAt' | 'id'
      >)[];

      keys.forEach((key) => {
        const value = updateData[key];
        if (
          key === 'images' &&
          typeof value !== 'string' &&
          typeof value !== 'number'
        ) {
          value.forEach((item) => {
            if (item instanceof File) {
              formData.append('image', item);
            }
          });
          return;
        }
        formData.append(key, value as string | Blob);
      });

      try {
        await editItem({ id: values.id, payload: formData }).unwrap();

        toast.success('Item updated successfully');
      } catch (error) {
        logger({ error });
      }
    },
  });

  const increaseQuantity = () => {
    if (isNaN(formik.values.quantity)) {
      formik.setFieldTouched('quantity', true, true);
      return;
    }
    formik.setFieldValue('quantity', Number(formik.values.quantity) + 1, true);
    formik.setFieldTouched('quantity', false);
    return;
  };

  const decreaseQuantity = () => {
    if (formik.values.quantity === 0 || isNaN(formik.values.quantity)) {
      formik.setFieldTouched('quantity', true, true);
      return;
    }

    formik.setFieldValue('quantity', Number(formik.values.quantity) - 1, true);
    formik.setFieldTouched('quantity', false);

    return;
  };

  const handleDelete = async (imageKey: string) => {
    await deleteImage({ id: initialValues.id, imageKey }).unwrap();
  };

  return Object.freeze({
    onChange: formik.handleChange,
    onSubmit: formik.handleSubmit,
    setFieldValue: formik.setFieldValue,
    onBlur: formik.handleBlur,
    setFieldTouched: formik.setFieldTouched,
    setFieldError: formik.setFieldError,
    values: formik.values,
    errors: formik.errors,
    touched: formik.touched,
    isLoading,
    increaseQuantity,
    decreaseQuantity,
    imageDeleting,
    deleteImage: handleDelete,
  });
};

export default useEditShoppingListItem;
