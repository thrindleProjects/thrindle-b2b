import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import * as Yup from 'yup';

import Button from '@/components/buttons/Button';
import Input from '@/components/shared/Input/Input';

import { usePasswordResetRequestMutation } from '@/api/auth';
import { EMAIL } from '@/constant/constants';

const ResetPassword = () => {
  const router = useRouter();
  const [request, { isLoading }] = usePasswordResetRequestMutation();
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required('Email number is required'),
    }),
    onSubmit: (values) => {
      request({
        email: values.email,
      })
        .unwrap()
        .then(() => {
          router.push(
            {
              pathname: '/app/reset-password',
              query: {
                email: values.email,
              },
            },
            '/app/reset-password'
          );
        })
        .catch(() => {
          //
        });
      //
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        id='email'
        type={EMAIL}
        value={formik.values.email}
        placeholder='Email Address'
        label='Email Address'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.email && formik.touched.email}
        errorText={formik.errors.email}
        required={true}
      />
      <Button
        type='submit'
        isLoading={isLoading}
        className='mt-10 h-[52px] w-full'
      >
        Proceed
      </Button>
    </form>
  );
};

export default ResetPassword;
