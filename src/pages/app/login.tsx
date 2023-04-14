import React from 'react';

import FormContainer from '@/components/lib/formContainer/FormContainer';
import LoginForm from '@/components/lib/loginForm/LoginForm';
import Tips from '@/components/lib/tips/Tips';

import { NextPageWithLayout } from '@/pages/_app';

const Login: NextPageWithLayout = () => {
  return (
    <div className='flex '>
      <div className='w-[50%]'>
        <FormContainer
          title='Welcome Back,'
          subtitle='Log in your account'
          className='mt-24'
        >
          <LoginForm />
        </FormContainer>
      </div>
      <div className=' w-[50%]'>
        <Tips />
      </div>
    </div>
  );
};

export default Login;
