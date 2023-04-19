import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import AddItemForm from '@/components/lib/addItemForm/AddItemForm';
import GenModal from '@/components/shared/modal/Modal';

import RecurrentLayout from '@/pages-layout/recurrent-layout/RecurrentLayout';

const RecurrentList = () => {
  const [addItemModal, setAddItemModal] = useState(false);
  const toggleModal = () => {
    setAddItemModal((prev) => !prev);
  };
  return (
    <Layout
      headerText='Recurrent List'
      subText='Create a  list of recurring things you need at a particular time monthly 
so we can get them for you automatically'
      component={
        <div>
          <Button
            type='button'
            variant='primary'
            leftIcon={MdAdd}
            leftIconClassName='text-white text-xl'
            className='h-[56px] w-[192px] text-[18px]'
            onClick={toggleModal}
          >
            Add New Item
          </Button>
        </div>
      }
    >
      <RecurrentLayout />
      <GenModal handleCloseModal={toggleModal} isOpen={addItemModal}>
        <AddItemForm asModal />
      </GenModal>
    </Layout>
  );
};

export default RecurrentList;
