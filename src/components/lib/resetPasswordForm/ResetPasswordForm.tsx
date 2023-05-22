import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import Button from '@/components/buttons/Button';
import Input from '@/components/shared/Input/Input';

import { usePasswordResetMutation } from '@/api/auth';
import { PASSWORD } from '@/constant/constants';

import { initialValues, validationSchema } from './validation';
const ResetPasswordForm = () => {
  const router = useRouter();
  const [reset, { isLoading }] = usePasswordResetMutation();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      reset({ ...values, email: router.query.email })
        .unwrap()
        .then(() => {
          router.push('/app/login');
        })
        .catch(() => {
          //
        });
    },
  });

  return (
    <div className='mt-10 md:w-full xl:w-[80%]'>
      <form onSubmit={formik.handleSubmit}>
        <Input
          id='otp'
          type={PASSWORD}
          value={formik.values.otp}
          placeholder='XXXXXX'
          label='Enter Otp'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.otp && formik.touched.otp}
          errorText={formik.errors.otp}
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
        <div className='mt-3'>
          <Input
            id='confirmPassword'
            type={PASSWORD}
            value={formik.values.confirmPassword}
            placeholder='XXXXXX'
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
        <p className='text-primary-blue mt-4 text-xs font-[500]'>
          Forgot Password?
        </p>
        <Button
          type='submit'
          isLoading={isLoading}
          className='mt-4 h-[52px] w-full'
        >
          Reset Password
        </Button>
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
