import { useFormik } from 'formik';
import { useState } from 'react';

import {
  initialValues as defaultValues,
  ShoppingListCart,
  ShoppingListItem,
  validationSchema,
} from './validation';
const useShoppingList = (props: {
  onSubmit?: () => void;
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
      if (!initialValues) {
        setShoppingItems((old) => {
          const newCart: ShoppingListCart = [
            ...old,
            { ...item, date: new Date().toISOString() },
          ];
          return newCart;
        });
      }
      if (onSubmit) {
        onSubmit();
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
  });
};

export default useShoppingList;
