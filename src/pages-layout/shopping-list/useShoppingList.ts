import { useFormik } from 'formik';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

import logger from '@/lib/logger';

import {
  useCreateOrderMutation,
  useCreateShoppingItemMutation,
  useDeleteShoppingItemMutation,
} from '@/api/shopping-list';
import { CreateShoppingItemResponse } from '@/api/shopping-list/types';

import {
  initialValues as defaultValues,
  ShoppingListItem,
  validationSchema,
} from './validation';

const useShoppingList = (props: {
  onSubmit?: (item: Readonly<CreateShoppingItemResponse>) => void;
  initialValues?: ShoppingListItem;
  resetForm?: boolean;
}) => {
  const { onSubmit, initialValues, resetForm } = props;

  const [orderCreated, setOrderCreated] = useState<boolean>(false);

  const [createItem, { isLoading }] = useCreateShoppingItemMutation();

  const [deleteShoppingItem] = useDeleteShoppingItemMutation();

  const [createShoppingOrder, { isLoading: creatingOrder }] =
    useCreateOrderMutation();

  const formik = useFormik({
    initialValues: { ...defaultValues, ...(initialValues || {}) },
    validationSchema,
    onSubmit: async (item) => {
      // on submit of form add new item to cart

      const formData = new FormData();

      const keys = Object.keys(item) as (keyof ShoppingListItem)[];

      keys.forEach((key) => {
        const value = item[key];

        if (
          key === 'image' &&
          value &&
          typeof value !== 'string' &&
          typeof value !== 'number'
        ) {
          value.forEach((image) => {
            formData.append(`${key}`, image as Blob);
          });
          return;
        }

        formData.append(key, value as string | Blob);
      });
      try {
        const createdItem = await createItem(formData).unwrap();

        if (onSubmit) {
          onSubmit(createdItem.data);
        }

        if (resetForm) {
          formik.resetForm();
        }
      } catch (error) {
        // handle error
        logger(error);
      }
    },
    enableReinitialize: true,
    validateOnChange: false,
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

  const deleteItem = async (id: string) => {
    // todo: use id to delete item
    try {
      await deleteShoppingItem(id).unwrap();

      toast.success('Item removed successfully');
    } catch (error) {
      logger(error);
    }
  };

  const createOrder = async (list: CreateShoppingItemResponse[]) => {
    const orderArray: string[] = list.reduce((acc, curr) => {
      return acc.concat(curr.id);
    }, [] as string[]);

    try {
      await createShoppingOrder({
        list: orderArray,
      }).unwrap();

      setOrderCreated(true);
    } catch (error) {
      logger({ error });
    }
  };

  const handleCloseOrderCreated = () => {
    setOrderCreated(false);
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
    increaseQuantity,
    decreaseQuantity,
    deleteItem,
    createOrder,
    handleCloseOrderCreated,
    creatingOrder,
    orderCreated,
    isLoading,
  });
};

export default useShoppingList;
