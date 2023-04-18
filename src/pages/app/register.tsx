import React from 'react';

import FormContainer from '@/components/lib/formContainer/FormContainer';
import RegisterForm from '@/components/lib/registerForm/RegisterForm';
import Tips from '@/components/lib/tips/Tips';

import { NextPageWithLayout } from '@/pages/_app';

const SignUp: NextPageWithLayout = () => {
  return (
    <div className='flex '>
      <div className='w-[50%]'>
        <FormContainer
          title='Create Account'
          subtitle='Privide us with few information to create an account for you'
          className='mt-6'
        >
          <RegisterForm />
        </FormContainer>
      </div>
      <div className=' w-[50%]'>
        <Tips />
      </div>
    </div>
  );
};

SignUp.getLayout = function (page) {
  return <>{page}</>;
};
export default SignUp;
