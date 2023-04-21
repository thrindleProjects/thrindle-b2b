import { Icon } from '@iconify/react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChangeEventHandler } from 'react';

import style from './CartCounter.module.scss';

import InputLabel from '@/components/shared/InputLabel/InputLabel';

interface CartCounterProps {
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
  onBlur:
    | React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  onChange:
    | ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  value: number;
  error: string | undefined;
  touched: boolean | undefined;
}

type CartCounterType = React.FC<CartCounterProps>;

const CartCounter: CartCounterType = ({
  decreaseQuantity,
  increaseQuantity,
  value,
  onBlur,
  onChange,
  error,
  touched,
}) => {
  return (
    <div className='flex flex-col gap-2'>
      <InputLabel id='quantity' label='Quantity' />
      <div className='grid w-1/3 grid-cols-3 gap-4'>
        <button
          type='button'
          onClick={decreaseQuantity}
          disabled={!value || isNaN(value)}
          className={`${style.count_button} ${style.count_decrease}`}
        >
          <Icon icon='ic:round-minus' />
        </button>
        <input
          type='text'
          id='quantity'
          name='quantity'
          inputMode='numeric'
          pattern='\d*'
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className='border-primary-black/10 rounded-lg text-center'
        />
        <button
          type='button'
          onClick={increaseQuantity}
          disabled={isNaN(value)}
          className={`${style.count_button} ${style.count_increase}`}
        >
          <Icon icon='ic:round-plus' />
        </button>
      </div>

      <AnimatePresence>
        {!!touched && !!error && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ ease: 'easeOut', duration: 0.5 }}
            className='pl-1 pt-1 text-xs font-semibold text-red-300'
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CartCounter;
