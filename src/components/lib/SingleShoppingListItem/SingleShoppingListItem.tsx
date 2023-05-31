import { Icon } from '@iconify/react';
import Image from 'next/image';
import { useMemo, useState } from 'react';

import GenModal from '@/components/shared/modal/Modal';
import EditShoppingItemForm from '@/containers/EditShoppingItemForm/EditShoppingItemForm';

import { CreateShoppingItemResponse } from '@/api/shopping-list/types';
import { IMAGE_URL_PATH } from '@/constant/constants';
// import { SpinnerLoader } from '@/components/common/loader';

interface SingleShoppingListItemProps {
  item: CreateShoppingItemResponse;
  onDelete: (id: string) => Promise<void>;
  className?: string;
  isLoading?: boolean;
}

type SingleShoppingListItemType = React.FC<SingleShoppingListItemProps>;

const SingleShoppingListItem: SingleShoppingListItemType = ({
  item,
  onDelete,
  className,
  // isLoading,
}) => {
  const [showEditModal, setShowEditModal] = useState<boolean>(false);

  const image = useMemo(() => {
    return `${process.env.NEXT_PUBLIC_DEV_URL}${IMAGE_URL_PATH}/${item.images[0]}`;
  }, [item.images]);

  const date = useMemo(() => {
    // todo: change this date to the date coming from the backend
    const dateObj = new Date(item.createdAt);

    const formattedDate = dateObj.toLocaleString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

    return formattedDate;
  }, [item.createdAt]);

  const handleDelete = async () => {
    await onDelete(item.id);
  };

  const handleOpenEditModal = () => {
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const updatedItem: typeof item = {
  //     ...item,
  //     quantity: Number(e.target.value),
  //   };

  //   editItem(updatedItem);
  // };

  return (
    <>
      <div
        className={`flex items-start gap-3 rounded-lg border px-5 py-8 ${className}`}
      >
        <figure className='relative aspect-square w-12 flex-shrink-0'>
          <Image src={image} alt={item.name} fill={true} />
        </figure>
        <section className='flex flex-col gap-3'>
          <p className='text-base font-semibold'>{item.name}</p>
          <p className='text-sm font-medium'>Item Created {date}</p>
          <p className='text-xs font-medium'>{item.description}</p>
        </section>
        <div className='ml-auto flex flex-shrink-0 flex-col items-end gap-4'>
          <div className='text-sm font-semibold lg:text-base'>
            <div className='flex items-center gap-2 p-1'>
              {item.quantity} Pieces{' '}
              <button className='text-lg' onClick={handleOpenEditModal}>
                <Icon icon='ph:pencil-line' />
              </button>
            </div>
          </div>
          <button className='text-primary-red text-xl' onClick={handleDelete}>
            <Icon icon='ph:trash' />
          </button>
          {/* {isLoading && item?.id ? (
            <SpinnerLoader size='sm' />
          ) : (
            <button className='text-primary-red text-xl' onClick={handleDelete}>
              <Icon icon='ph:trash' />
            </button>
          )} */}
        </div>
      </div>

      <GenModal isOpen={showEditModal} handleCloseModal={handleCloseEditModal}>
        <EditShoppingItemForm item={item} />
      </GenModal>
    </>
  );
};

export default SingleShoppingListItem;
