import { Icon } from '@iconify/react';
import Image from 'next/image';
import { ChangeEvent, useMemo, useState } from 'react';

import { ShoppingListItem } from '@/pages-layout/shopping-list/validation';

interface SingleShoppingListItemProps {
  item: ShoppingListItem & { date: string };
  onDelete: (date: string) => void;
  editItem: (date: ShoppingListItem & { date: string }) => void;
}

type SingleShoppingListItemType = React.FC<SingleShoppingListItemProps>;

const SingleShoppingListItem: SingleShoppingListItemType = ({
  item,
  onDelete,
  editItem,
}) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const image = useMemo(() => {
    return item.image && item.image[0] && item.image[0] instanceof File
      ? URL.createObjectURL(item.image[0])
      : '/assets/svg/shopping-cart.svg';
  }, [item.image]);

  const date = useMemo(() => {
    const dateObj = new Date(item.date);

    const formattedDate = dateObj.toLocaleString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

    return formattedDate;
  }, [item.date]);

  const handleDelete = () => {
    onDelete(item.date);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const updatedItem: typeof item = {
      ...item,
      quantity: Number(e.target.value),
    };

    editItem(updatedItem);
  };

  return (
    <div className='flex items-start gap-3 rounded-lg border px-5 py-8'>
      <figure className='relative aspect-square w-12 flex-shrink-0'>
        <Image src={image} alt={item.title} fill={true} />
      </figure>
      <section className='flex flex-col gap-3'>
        <p className='text-base font-semibold'>{item.title}</p>
        <p className='text-sm font-medium'>Order Created {date}</p>
        <p className='text-xs font-medium'>{item.description}</p>
      </section>
      <div className='ml-auto flex flex-shrink-0 flex-col items-end gap-4'>
        <div className='text-sm font-semibold lg:text-base'>
          {isEdit ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setIsEdit(false);
              }}
              className='text-center'
            >
              <input
                type='number'
                min={1}
                onChange={handleChange}
                value={item.quantity}
                className='bg-primary-blue/10 max-w-[5rem] rounded-lg border-none p-1 text-center'
              />
            </form>
          ) : (
            <div className='flex items-center gap-2 p-1'>
              {item.quantity} Pieces{' '}
              <button className='text-lg' onClick={() => setIsEdit(true)}>
                <Icon icon='ph:pencil-line' />
              </button>
            </div>
          )}
        </div>
        <button className='text-primary-red text-xl' onClick={handleDelete}>
          <Icon icon='ph:trash' />
        </button>
      </div>
    </div>
  );
};

export default SingleShoppingListItem;
