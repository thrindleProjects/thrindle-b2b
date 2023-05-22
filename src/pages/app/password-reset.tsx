import React from 'react';

import FormContainer from '@/components/lib/formContainer/FormContainer';
import ResetPassword from '@/components/lib/resetPassword/ResetPassword';
import Tips from '@/components/lib/tips/Tips';

import { NextPageWithLayout } from '@/pages/_app';

const PasswordReset: NextPageWithLayout = () => {
  return (
    <div className='flex '>
      <div className='w-[50%]'>
        <FormContainer
          title='Password Reset Request'
          subtitle='Enter email address registered with us'
          className='mt-24'
        >
          <ResetPassword />
        </FormContainer>
      </div>
      <div className=' w-[50%]'>
        <Tips className='h-screen' />
      </div>
    </div>
  );
};

PasswordReset.getLayout = function (page) {
  return <>{page}</>;
};

export default PasswordReset;
