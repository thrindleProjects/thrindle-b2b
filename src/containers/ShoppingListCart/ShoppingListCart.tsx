import { Icon } from '@iconify/react';
import { toast } from 'react-hot-toast';
import { ImSpinner } from 'react-icons/im';

import Button from '@/components/buttons/Button';
import SingleShoppingListItem from '@/components/lib/SingleShoppingListItem/SingleShoppingListItem';

import { useGetShoppingItemsQuery } from '@/api/shopping-list';
import { CreateShoppingItemResponse } from '@/api/shopping-list/types';

interface ShoppingListCartProps {
  deleteItem: (id: string) => Promise<void>;
  createOrder: (list: CreateShoppingItemResponse[]) => void;
  creatingOrder: boolean;
}

type ShoppingListCartType = React.FC<ShoppingListCartProps>;

const ShoppingListCart: ShoppingListCartType = ({
  deleteItem,
  createOrder,
  creatingOrder,
}) => {
  const { isLoading, currentData } = useGetShoppingItemsQuery('');

  if (isLoading || !currentData) {
    return (
      <div className='text-primary-blue flex h-full w-full items-center justify-center'>
        <ImSpinner className='animate-spin' />
      </div>
    );
  }

  if (!isLoading && !currentData.data.length) {
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

  async function handleCreateOrder() {
    if (!currentData) {
      return toast.error('Please add at least one item to your list');
    }

    createOrder(currentData.data);
  }

  const { data: cart } = currentData;

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
              {cart.map((item) => {
                return (
                  <SingleShoppingListItem
                    key={item.id}
                    item={item}
                    onDelete={deleteItem}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className='px-5'>
          <Button
            className='bg-primary-blue hover:border-primary-blue hover:bg-primary-blue/90 flex w-full items-center justify-center gap-4 rounded-md border border-transparent py-5 text-xs font-semibold text-white md:text-sm'
            onClick={handleCreateOrder}
            isLoading={creatingOrder}
          >
            <Icon icon='ph:paper-plane-tilt' />
            <span>Send List</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default ShoppingListCart;
