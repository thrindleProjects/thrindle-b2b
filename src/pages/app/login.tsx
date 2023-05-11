import { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth';
import React from 'react';

import FormContainer from '@/components/lib/formContainer/FormContainer';
import LoginForm from '@/components/lib/loginForm/LoginForm';
import Tips from '@/components/lib/tips/Tips';

import { NextPageWithLayout } from '@/pages/_app';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

const Login: NextPageWithLayout = () => {
  return (
    <div className='flex '>
      <div className='w-1/2'>
        <FormContainer
          title='Welcome Back,'
          subtitle='Log in your account'
          className='mt-24'
        >
          <LoginForm />
        </FormContainer>
      </div>
      <div className=' w-1/2'>
        <Tips className='h-screen' />
      </div>
    </div>
  );
};

Login.getLayout = function (page) {
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

export default Login;
