import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { MdAdd } from 'react-icons/md';

import Button from '@/components/buttons/Button';
import {
  FundWalletModal,
  QuickBuyModalView,
} from '@/components/pages-component/dashboard';
import AuthenticatedLayoutHeader from '@/components/shared/AuthenticatedLayoutHeader/AuthenticatedLayoutHeader';
import MainContentWrapper from '@/components/shared/MainContentWrapper';
import GenModal from '@/components/shared/modal/Modal';
import ResponseStatusModal from '@/components/shared/responseStatusModal/ResponseStatusModal';

import DashboardLayout from '@/pages-layout/dashboardLayout/DashboardLayout';

const Dashboard = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [fundWalletModal, setFundWalletModal] = useState(false);
  const [orderSuccessModal, setOrderSuccessModal] = useState(false);
  // const session = useSession()
  // console.log(session)

  // const test = () => {
  //   signOut({
  //     callbackUrl: `/app/login`
  //   })
  // }

  const handleCloseModal = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <MainContentWrapper className='px-0'>
      <AuthenticatedLayoutHeader
        headerClassName='lg:px-10'
        headerText='Overview'
        component={
          <div className='z-50 flex gap-2'>
            <Button
              variant='outline'
              leftIcon={MdAdd}
              leftIconClassName='text-primary-blue text-xl'
              className='h-[56px] w-[192px] text-[18px]'
              onClick={() => setFundWalletModal(!fundWalletModal)}
              // onClick={() => setOrderSuccessModal(!orderSuccessModal)}
            >
              Fund Wallet
            </Button>
            <Button
              onClick={handleCloseModal}
              variant='primary'
              leftIcon={HiOutlineShoppingBag}
              leftIconClassName='text-white text-xl'
              className='h-[56px] w-[192px] text-[18px]'
            >
              Quick Buy
            </Button>
          </div>
        }
      />

      <section className='mt-5 w-full border-t border-t-gray-200 lg:px-10'>
        <DashboardLayout />
      </section>
      <GenModal isOpen={isOpen} handleCloseModal={handleCloseModal}>
        <QuickBuyModalView />
      </GenModal>
      <GenModal
        isOpen={fundWalletModal}
        handleCloseModal={() => setFundWalletModal(!fundWalletModal)}
      >
        <FundWalletModal
          title='Fund Wallet'
          text='An account has been set up for you, make a transfer and it will automatically reflect in your wallet once it is seen'
        />
      </GenModal>
      <GenModal
        isOpen={orderSuccessModal}
        handleCloseModal={() => setOrderSuccessModal(!orderSuccessModal)}
      >
        <ResponseStatusModal
          onClick={() => router.push('/app/orders')}
          title='Order Recieved'
          msg='     We have gotten the list and we will be responding with a quote in less
        than 5 hours, check your order page to monitor update and make payment'
          icon_src='order_received'
          btnText='Proceed To Orders'
        />
      </GenModal>
    </MainContentWrapper>
  );
};

export default Dashboard;
