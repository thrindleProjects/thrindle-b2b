import React from 'react';
import { MdAdd } from 'react-icons/md';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';

const RecurrentList = () => {
  return (
    <Layout
      headerText='Recurrent List'
      subText='Create a  list of recurring things you need at a particular time monthly 
so we can get them for you automatically'
      component={
        <div>
          <Button
            variant='primary'
            leftIcon={MdAdd}
            leftIconClassName='text-white text-xl'
            className='h-[56px] w-[192px] text-[18px]'
          >
            Add New Item
          </Button>
        </div>
      }
    ></Layout>
  );
};

export default RecurrentList;
