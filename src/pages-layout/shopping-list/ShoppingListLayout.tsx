import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import AuthenticatedLayoutHeader from '@/components/shared/AuthenticatedLayoutHeader';
import MainContentWrapper from '@/components/shared/MainContentWrapper';
import GenModal from '@/components/shared/modal/Modal';
import ShoppingListCart from '@/containers/ShoppingListCart';
import ShoppingListForm from '@/containers/ShoppingListForm';

import useShoppingList from '@/pages-layout/shopping-list/useShoppingList';

const ShoppingListLayout: React.FC = () => {
  const [addedStatus, setAddedStatus] = useState<boolean>(false);

  function handleCloseAddedModal() {
    setAddedStatus(false);
  }

  const props = useShoppingList({
    resetForm: true,
    onSubmit: () => {
      setAddedStatus(true);
    },
  });

  return (
    <>
      <MainContentWrapper>
        <div className='grid gap-5 lg:grid-cols-2'>
          <div className='no-scrollbar grid h-[55rem] grid-rows-[auto_1fr] overflow-y-auto'>
            <AuthenticatedLayoutHeader
              headerText='Shopping List'
              subText='Add your orders here as much as you need them and once you are ready to pay we will get them for you'
            />
            <ShoppingListForm
              {...props}
              isOpen={addedStatus}
              closeModal={handleCloseAddedModal}
            />
          </div>
          <div className='h-[55rem] overflow-hidden pt-5'>
            <ShoppingListCart {...props} />
          </div>
        </div>
      </MainContentWrapper>

      <GenModal
        isOpen={props.orderCreated}
        handleCloseModal={props.handleCloseOrderCreated}
      >
        <section className='flex w-full flex-col gap-3 text-center'>
          <figure className='relative mx-auto aspect-square w-4/5'>
            <Image
              fill={true}
              src='/assets/svg/added-success.svg'
              alt='Successfully Added'
            />
          </figure>
          <h4 className='text-primary-blue text-2xl font-semibold'>
            Order List Recieved
          </h4>
          <p>
            We have gotten the list and we will be responding with a quote in
            less than 5 hours, check your order page to monitor update and make
            payment
          </p>
          <Link
            className='bg-primary-blue mt-8 w-full rounded-lg py-5 font-medium text-white'
            href='/app/orders'
            onClick={props.handleCloseOrderCreated}
          >
            Proceed to Orders
          </Link>
        </section>
      </GenModal>
    </>
  );
};

export default ShoppingListLayout;
