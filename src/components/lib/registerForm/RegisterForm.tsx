import { useFormik } from 'formik';
import Link from 'next/link';
import React from 'react';

import Button from '@/components/buttons/Button';
import Input from '@/components/shared/Input/Input';

import { TEXT } from '@/constant/constants';

import { initialValues, validationSchema } from './validation';
import { EMAIL, PASSWORD } from '../../../constant/constants';
const RegisterForm = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {
      //
    },
  });

  return (
    <div className='mb-10 mt-6 md:w-full xl:w-[80%]'>
      <form onSubmit={formik.handleSubmit}>
        <Input
          id='companyName'
          type={TEXT}
          value={formik.values.companyName}
          placeholder='Critters'
          label='Company Name'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.companyName && formik.touched.companyName}
          errorText={formik.errors.companyName}
          required={true}
        />
        <div className='mt-3'>
          <Input
            id='email'
            type={EMAIL}
            value={formik.values.email}
            placeholder='exmaple@gamil.com'
            label='Email Address'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.email && formik.touched.email}
            errorText={formik.errors.email}
            required={true}
          />
        </div>
        <div className='mt-3'>
          <Input
            id='phone'
            type={TEXT}
            value={formik.values.phone}
            placeholder='09055555555'
            label='Phone Number'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.phone && formik.touched.phone}
            errorText={formik.errors.phone}
            required={true}
          />
        </div>
        <div className='mt-3'>
          <Input
            id='password'
            type={PASSWORD}
            value={formik.values.password}
            placeholder='XXXXXXXXX'
            label='Password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.password && formik.touched.password}
            errorText={formik.errors.password}
            required={true}
          />
        </div>
        <div className='mt-3'>
          <Input
            id='confirmPassword'
            type={PASSWORD}
            value={formik.values.confirmPassword}
            placeholder='XXXXXXXXX'
            label='Confirm Password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.errors.confirmPassword && formik.touched.confirmPassword
            }
            errorText={formik.errors.confirmPassword}
            required={true}
          />
        </div>

        <Button className='mt-10 h-[52px] w-full'>Create An Account</Button>
      </form>
      <Link href='/app/login'>
        <p className=' mt-4 text-xs font-[500]'>
          Already have an account?{' '}
          <span className='text-primary-blue'> Sign in</span>
        </p>
      </Link>
    </div>
  );
};

export default RegisterForm;
