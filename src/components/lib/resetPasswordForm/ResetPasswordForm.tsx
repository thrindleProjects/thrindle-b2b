import { useFormik } from 'formik';
import Link from 'next/link';
import React from 'react';

import Button from '@/components/buttons/Button';
import Input from '@/components/shared/Input/Input';

import { PASSWORD } from '@/constant/constants';

import { initialValues, validationSchema } from './validation';
const ResetPasswordForm = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {
      //
    },
  });

  return (
    <div className='mt-10 md:w-full xl:w-[80%]'>
      <form onSubmit={formik.handleSubmit}>
        <Input
          id='code'
          type={PASSWORD}
          value={formik.values.code}
          placeholder='XXXXXX'
          label='Enter Code'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.code && formik.touched.code}
          errorText={formik.errors.code}
          required={true}
        />
        <div className='mt-3'>
          <Input
            id='password'
            type={PASSWORD}
            value={formik.values.password}
            placeholder='XXXXXX'
            label='Password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.password && formik.touched.password}
            errorText={formik.errors.password}
            required={true}
          />
        </div>
        <p className='text-primary-blue mt-4 text-xs font-[500]'>
          Forgot Password?
        </p>
        <Button className='mt-4 h-[52px] w-full'>Login</Button>
      </form>
      <Link href='/app/login'>
        <p className=' mt-4 text-xs font-[500]'>
          Remember your password?{' '}
          <span className='text-primary-blue'> Log in</span>
        </p>
      </Link>
    </div>
  );
};

export default ResetPasswordForm;
