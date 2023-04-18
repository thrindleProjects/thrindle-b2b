import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import { FundWalletModal } from '@/components/pages-component/dashboard';
import GenModal from '@/components/shared/modal/Modal';
import ResponseStatusModal from '@/components/shared/responseStatusModal/ResponseStatusModal';

import WalletLayout from '@/pages-layout/wallet-layout/WalletLayout';

const Wallet = () => {
  const [fundWalletModal, setFundWalletModal] = useState(false);
  const [fundWalletSucsessModal, setFundWalletSucsessModal] = useState(false);

  return (
    <Layout
      headerText='Wallet'
      className='mb-10'
      component={
        <div>
          <Button
            variant='primary'
            leftIcon={MdAdd}
            leftIconClassName='text-white text-xl'
            className='h-[56px] w-[192px] text-[18px]'
            onClick={() => setFundWalletModal(!fundWalletModal)}
          >
            Add Funds
          </Button>
        </div>
      }
    >
      <div>
        <WalletLayout />
        <GenModal
          isOpen={fundWalletModal}
          handleCloseModal={() => setFundWalletModal(!fundWalletModal)}
        >
          <FundWalletModal
            title='Add Funds'
            text='Make a transfer to the under listed account number to add money to your wallet now'
          />
        </GenModal>
        <GenModal
          isOpen={fundWalletSucsessModal}
          handleCloseModal={() =>
            setFundWalletSucsessModal(!fundWalletSucsessModal)
          }
        >
          <ResponseStatusModal
            title='Wallet Successfully Funded'
            msg='Your wallet have been funded with#100,000 from account
number 2123458798 UBA Proceed to wallet to view balance'
            btnText='Check Wallet'
            bvnVariant='primary'
            onClick={() => setFundWalletSucsessModal(false)}
            icon_src='funded-success'
          />
        </GenModal>
      </div>
    </Layout>
  );
};

export default Wallet;
