import React from 'react';
import { MdAdd } from 'react-icons/md';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';

const Wallet = () => {
  return (
    <Layout
      headerText='Wallet'
      component={
        <div>
          <Button
            variant='primary'
            leftIcon={MdAdd}
            leftIconClassName='text-white text-xl'
            className='h-[56px] w-[192px] text-[18px]'
          >
            Add Funds
          </Button>
        </div>
      }
    ></Layout>
  );
};

export default Wallet;
