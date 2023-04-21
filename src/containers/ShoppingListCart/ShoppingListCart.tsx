import { Icon } from '@iconify/react';
import Image from 'next/image';
import { useState } from 'react';

import Button from '@/components/buttons/Button';
import SingleShoppingListItem from '@/components/lib/SingleShoppingListItem/SingleShoppingListItem';
import GenModal from '@/components/shared/modal/Modal';

import {
  ShoppingListCart as CartType,
  ShoppingListItem as ListItem,
} from '@/pages-layout/shopping-list/validation';

interface ShoppingListCartProps {
  cart: CartType;
  deleteItem: (date: string) => void;
  editItem: (date: ListItem & { date: string }) => void;
}

type ShoppingListCartType = React.FC<ShoppingListCartProps>;

const ShoppingListCart: ShoppingListCartType = ({
  cart,
  deleteItem,
  editItem,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  if (!cart || !cart.length) {
    return (
      <div className='border-primary-black/10 flex h-full flex-col items-center justify-center border pb-10'>
        <div className='aspect-square w-1/3'>
          <Icon
            icon='ph:basket-fill'
            className='text-primary-black/40 h-full w-full'
          />
        </div>
        <div className='text-primary-blue text-lg font-medium'>
          No item added yet
        </div>
      </div>
    );
  }

  function handleSubmit() {
    setIsOpen(true);
  }
  function handleCloseModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className='border-primary-black/10 grid h-full grid-cols-1 grid-rows-[auto_1fr_auto] gap-4 border pb-10'>
        <div className='px-5'>
          <h3 className='border-b-primary-black/10 mx border-b py-5 text-lg font-medium'>
            My List
          </h3>
        </div>
        <div className='h-full w-full overflow-hidden'>
          <div className='h-full w-full overflow-y-auto px-5'>
            <div className='flex h-full flex-col gap-3'>
              {cart.map((item, index) => {
                return (
                  <SingleShoppingListItem
                    key={index}
                    item={item}
                    onDelete={deleteItem}
                    editItem={editItem}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className='px-5'>
          <button
            className='bg-primary-blue hover:border-primary-blue hover:bg-primary-blue/90 flex w-full items-center justify-center gap-4 rounded-md border border-transparent py-5 text-xs font-semibold text-white md:text-sm'
            onClick={handleSubmit}
          >
            <Icon icon='ph:paper-plane-tilt' />
            <span>Send List</span>
          </button>
        </div>
      </div>
      <GenModal isOpen={isOpen} handleCloseModal={handleCloseModal}>
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
          <Button
            type='submit'
            className='hover:bg-primary-blue mt-8 w-full py-5 font-medium hover:text-white'
            variant='primary'
            onClick={handleCloseModal}
          >
            Proceed to Orders
          </Button>
        </section>
      </GenModal>
    </>
  );
};

export default ShoppingListCart;
