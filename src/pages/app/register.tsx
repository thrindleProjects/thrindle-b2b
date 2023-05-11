import { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth';
import React from 'react';

import FormContainer from '@/components/lib/formContainer/FormContainer';
import RegisterForm from '@/components/lib/registerForm/RegisterForm';
import Tips from '@/components/lib/tips/Tips';

import { NextPageWithLayout } from '@/pages/_app';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

const SignUp: NextPageWithLayout = () => {
  return (
    <div className='flex '>
      <div className='w-[50%]'>
        <FormContainer
          title='Create Account'
          subtitle='Provide us with few information to create an account for you'
          className='mt-6'
        >
          <RegisterForm />
        </FormContainer>
      </div>
      <div className=' w-[50%]'>
        <Tips className='h-screen' />
      </div>
    </div>
  );
};

SignUp.getLayout = function (page) {
  return <>{page}</>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return {
      redirect: {
        destination: '/app/dashboard',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default SignUp;
