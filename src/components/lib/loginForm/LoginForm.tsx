import { Button } from 'flowbite-react';
import { useFormik } from 'formik';
import Link from 'next/link';
import React from 'react';

import Input from '@/components/shared/Input/Input';

import { PASSWORD, TEXT } from '@/constant/constants';

import { initialValues, validationSchema } from './validation';
const LoginForm = () => {
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
          id='phone'
          type={TEXT}
          value={formik.values.email}
          placeholder='Email Number'
          label='Email Number'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.email && formik.touched.email}
          errorText={formik.errors.email}
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
        <Link href='/reset-password'>
          <p className='text-primary-blue mt-4 text-xs font-[500]'>
            Forgot Password?
          </p>
        </Link>
        <Button className='mt-4 h-[52px] w-full'>Login</Button>
      </form>

      <Link href='/sign-up'>
        <p className=' mt-4 text-xs font-[500]'>
          Don’t have an account?{' '}
          <span className='text-primary-blue'>Create Account</span>
        </p>
      </Link>
    </div>
  );
};

export default LoginForm;
