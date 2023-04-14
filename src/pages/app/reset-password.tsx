import React from 'react';

import FormContainer from '@/components/lib/formContainer/FormContainer';
import ResetPasswordForm from '@/components/lib/resetPasswordForm/ResetPasswordForm';
import Tips from '@/components/lib/tips/Tips';

const ResetPassword = () => {
  return (
    <div className='flex '>
      <div className='w-[50%]'>
        <FormContainer
          title='Reset Password,'
          subtitle='A code has been sent to your registered 
email address enter this code here to reset password'
          className='mt-24'
        >
          <ResetPasswordForm />
        </FormContainer>
      </div>
      <div className=' w-[50%]'>
        <Tips />
      </div>
    </div>
  );
};

export default ResetPassword;
