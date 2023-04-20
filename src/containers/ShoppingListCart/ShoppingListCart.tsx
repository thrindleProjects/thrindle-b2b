import { Icon } from '@iconify/react';

import style from './ShoppingListCart.module.scss';

import { ShoppingListCart as CartType } from '@/pages-layout/shopping-list/validation';

interface ShoppingListCartProps {
  cart: CartType;
}

type ShoppingListCartType = React.FC<ShoppingListCartProps>;

const ShoppingListCart: ShoppingListCartType = ({ cart }) => {
  if (!cart || !cart.length) {
    return <div className='border-primary-black/10 mt-6 border pb-10'></div>;
  }

  return (
    <div
      className={`border-primary-black/10 mt-6 border pb-10 ${style.cart_wrapper} gap-4`}
    >
      <div className='row-span-1 row-start-1 px-5'>
        <h3 className='border-b-primary-black/10 mx border-b py-5 text-lg font-medium'>
          My List
        </h3>
      </div>
      <div className='row-span-1 row-start-2 px-5'>
        {cart.map((item, index) => {
          return <div key={index}>{item.title}</div>;
        })}
      </div>
      <div className='button row-span-1 row-start-3 px-5'>
        <button className='bg-primary-blue hover:border-primary-blue hover:bg-primary-blue/90 flex w-full items-center justify-center gap-4 rounded-md border border-transparent py-5 text-xs font-semibold text-white md:text-sm'>
          <Icon icon='ph:paper-plane-tilt' />
          <span>Send List</span>
        </button>
      </div>
    </div>
  );
};

export default ShoppingListCart;
