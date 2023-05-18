import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import OTPInput from 'react-otp-input';

import Button from '@/components/buttons/Button';

import { useVerifyCompanyEmailMutation } from '@/api/auth';

const OTPForm = () => {
  const [otp, setOtp] = useState('');
  const handleChange = (enteredOtp: string) => {
    setOtp(enteredOtp);
  };

  const router = useRouter();

  const [verify, { isLoading }] = useVerifyCompanyEmailMutation();

  const handleSubmit = () => {
    if (router.isReady) {
      verify({
        companyId: router.query.id,
        token: otp,
      })
        .unwrap()
        .then(() => {
          toast.success('Email Verified Successfully');
          router.push(
            {
              pathname: '/app/kyc',
              query: {
                id: router.query.id,
              },
            },
            '/app/kyc'
          );
        })
        .catch((err) => {
          toast.error(err.data.data.error);
        });
    }
  };

  return (
    <div className='mt-10'>
      <OTPInput
        value={otp}
        onChange={handleChange}
        numInputs={6}
        inputStyle={{
          width: '3rem',
          height: '3rem',
          backgroundColor: '#f9f9f9',
          borderRadius: '8px',
        }}
        renderInput={(props) => <input {...props} />}
        containerStyle='flex gap-6 outline-none '
      />
      <div className='mt-10'>
        <p className='text-[16px] font-[500]'>
          Didn't get code ? <span className='text-primary-blue'> Resend</span>
        </p>
        <div className='mt-10 flex gap-6'>
          <Button
            onClick={() => router.push('/app/login')}
            className='w-[203px]'
            variant='outline'
          >
            <span>Back</span>
          </Button>
          <Button
            onClick={handleSubmit}
            className='w-[203px]'
            variant='primary'
            isLoading={isLoading}
          >
            <span>Proceed</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OTPForm;
