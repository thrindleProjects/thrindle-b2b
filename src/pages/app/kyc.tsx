import React from 'react';

import FormContainer from '@/components/lib/formContainer/FormContainer';
import Kycform from '@/components/lib/kycform/Kycform';
import Tips from '@/components/lib/tips/Tips';

import { NextPageWithLayout } from '@/pages/_app';

const KYC: NextPageWithLayout = () => {
  return (
    <div className='flex '>
      <div className='w-[50%]'>
        <FormContainer
          title='You are almost there'
          subtitle='Provide us with few other information 
and your account set up is done'
          className='mt-6'
        >
          <Kycform />
        </FormContainer>
      </div>
      <div className=' w-[50%]'>
        <Tips className='h-full' />
      </div>
    </div>
  );
};

KYC.getLayout = function (page) {
  return <>{page}</>;
};

export default KYC;
