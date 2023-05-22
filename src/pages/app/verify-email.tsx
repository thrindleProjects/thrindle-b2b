import { useRouter } from 'next/router';
import React from 'react';

import FormContainer from '@/components/lib/formContainer/FormContainer';
import OTPForm from '@/components/lib/oTPForm/OTPForm';
import Tips from '@/components/lib/tips/Tips';

import { NextPageWithLayout } from '@/pages/_app';

const VerifyEmail: NextPageWithLayout = () => {
  const router = useRouter();

  return (
    <div className='flex '>
      <div className='w-[50%]'>
        <FormContainer
          title='Account Verification'
          subtitle={`Enter the 6 digit code sent to 
${router.query.email}`}
          className='mt-6'
        >
          <OTPForm />
        </FormContainer>
      </div>
      <div className=' w-[50%]'>
        <Tips className='h-screen' />
      </div>
    </div>
  );
};

VerifyEmail.getLayout = function (page) {
  return <>{page}</>;
};
export default VerifyEmail;
