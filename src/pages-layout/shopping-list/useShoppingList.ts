import { useFormik } from 'formik';
import { useState } from 'react';

import {
  initialValues as defaultValues,
  ShoppingListCart,
  ShoppingListItem,
  validationSchema,
} from './validation';
const useShoppingList = (props: {
  onSubmit?: (item: Readonly<ShoppingListItem & { date: string }>) => void;
  initialValues?: ShoppingListItem;
  resetForm?: boolean;
}) => {
  const { onSubmit, initialValues, resetForm } = props;

  const [shoppingItems, setShoppingItems] = useState<ShoppingListCart>([]);

  const formik = useFormik({
    initialValues: { ...defaultValues, ...(initialValues || {}) },
    validationSchema,
    onSubmit: (item) => {
      // on submit of form add new item to cart

      // if no initial values are provided add a new item to cart
      const date = new Date().toISOString();
      if (!initialValues) {
        setShoppingItems((old) => {
          const newCart: ShoppingListCart = [...old, { ...item, date }];
          return newCart;
        });
      }
      if (onSubmit) {
        onSubmit({ ...item, date });
      }

      if (resetForm) {
        formik.resetForm();
      }
    },
    enableReinitialize: true,
    validateOnChange: true,
  });

  const increaseQuantity = () => {
    if (isNaN(formik.values.quantity)) {
      formik.setFieldTouched('quantity', true, true);
      return;
    }
    formik.setFieldValue('quantity', Number(formik.values.quantity) + 1, true);
    formik.setFieldTouched('quantity', true);
    return;
  };

  const decreaseQuantity = () => {
    if (formik.values.quantity === 0 || isNaN(formik.values.quantity)) {
      formik.setFieldTouched('quantity', true, true);
      return;
    }

    formik.setFieldValue('quantity', Number(formik.values.quantity) - 1, true);
    formik.setFieldTouched('quantity', true);

    return;
  };

  const deleteItem = (date: string) => {
    setShoppingItems((old) => old.filter((item) => item.date !== date));
  };

  const editItem = (item: ShoppingListItem & { date: string }) => {
    setShoppingItems((old) => {
      return old.map((oldItem) => {
        if (item.date !== oldItem.date) {
          return oldItem;
        }
        return { ...oldItem, ...item };
      });
    });
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
    cart: shoppingItems,
    increaseQuantity,
    decreaseQuantity,
    deleteItem,
    editItem,
  });
};

export default useShoppingList;
