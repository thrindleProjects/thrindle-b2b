import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import React, { useState } from 'react';

import Button from '@/components/buttons/Button';
import Input from '@/components/shared/Input/Input';

import { PASSWORD, TEXT } from '@/constant/constants';

import { initialValues, validationSchema } from './validation';
const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const result = await signIn('login', {
          ...values,
          redirect: false,
        });
        // setLoading(false)

        if (!result || result.error) {
          if (result?.error === 'CredentialsSignin') {
            // yes
            (await import('react-hot-toast')).toast.error(
              'Something went wrong'
            );
            return;
          }
          (await import('react-hot-toast')).toast.error(
            result?.error ?? 'Something went wrong'
          );

          // setLoading(false)

          return;
        }

        formik.resetForm();

        if (typeof router.query.callbackUrl === 'string') {
          return router.replace(new URL(router.query.callbackUrl));
        }

        router.push('/app/dashboard');
      } catch (error) {
        // setLoading(false)
      } finally {
        setLoading(false);
      }
      //
    },
  });

  return (
    <div className='mt-10 md:w-full xl:w-[80%]'>
      <form onSubmit={formik.handleSubmit}>
        <Input
          id='email'
          type={TEXT}
          value={formik.values.email}
          placeholder='Email Address'
          label='Email Address'
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
        <Link href='/app/password-reset'>
          <p className='text-primary-blue mt-4 text-xs font-[500]'>
            Forgot Password?
          </p>
        </Link>
        <Button
          isLoading={loading}
          className='mt-4 h-[52px] w-full'
          variant='primary'
          type='submit'
        >
          Login
        </Button>
      </form>

      <Link href='/app/register'>
        <p className=' mt-4 text-xs font-[500]'>
          Don’t have an account?{' '}
          <span className='text-primary-blue'>Create Account</span>
        </p>
      </Link>
    </div>
  );
};

export default LoginForm;
