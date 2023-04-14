import React, { useState } from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { MdAdd } from 'react-icons/md';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import GenModal from '@/components/shared/modal/Modal';

import DashboardLayout from '@/pages-layout/dashboardLayout/DashboardLayout';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <Layout
      className='px-0'
      headerClassName='lg:px-10'
      headerText='Overview'
      component={
        <div className='z-50 flex gap-2'>
          <Button
            variant='outline'
            leftIcon={MdAdd}
            leftIconClassName='text-primary-blue text-xl'
            className='h-[56px] w-[192px] text-[18px]'
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
    >
      <section className='mt-5 w-full border-t border-t-gray-200 pb-5 lg:px-10'>
        <DashboardLayout />
      </section>
      <GenModal isOpen={isOpen} handleCloseModal={handleCloseModal}>
        <div>Modal Children</div>
      </GenModal>
    </Layout>
  );
};

export default Dashboard;
