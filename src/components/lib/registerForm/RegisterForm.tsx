import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import Button from '@/components/buttons/Button';
import Input from '@/components/shared/Input/Input';

import { useCreateCompanyMutation } from '@/api/auth';
import { TEXT } from '@/constant/constants';

import { initialValues, validationSchema } from './validation';
import { EMAIL, PASSWORD } from '../../../constant/constants';

const RegisterForm = () => {
  const [createCompany, { isLoading }] = useCreateCompanyMutation();
  const router = useRouter();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      createCompany({ ...values })
        .unwrap()
        .then((res) => {
          if (res) {
            router
              .push(
                {
                  pathname: '/app/verify-email',
                  query: {
                    id: res?.data.company.id,
                    email: res?.data.company.email,
                  },
                },
                '/app/verify-email'
              )
              .catch(() => {
                //
              });
          }
        });
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

        <Button
          type='submit'
          isLoading={isLoading}
          className='mt-10 h-[52px] w-full'
        >
          Create An Account
        </Button>
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
