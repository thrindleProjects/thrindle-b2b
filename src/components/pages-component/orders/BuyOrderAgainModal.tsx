import { useRouter } from 'next/router';
import React from 'react';
import { toast } from 'react-hot-toast';
import { BsSend } from 'react-icons/bs';

// import { MdAdd } from 'react-icons/md';
import styles from './OrderListLayout.module.scss';

import logger from '@/lib/logger';

import Button from '@/components/buttons/Button';
import SingleShoppingListItem from '@/components/lib/SingleShoppingListItem/SingleShoppingListItem';
import BorderContainer from '@/components/shared/borderContainer/BorderContainer';

import { IOrderItem } from '@/@types/appTypes';
import {
  useDeleteShoppingItemMutation,
  useResendOrderMutation,
} from '@/api/shopping-list';
import { mainErrorHandler } from '@/utils/networkHandler';

const BuyOrderAgainModal = ({ listItems }: { listItems: IOrderItem[] }) => {
  const { query } = useRouter();

  const [deleteOrderItem, { isLoading }] = useDeleteShoppingItemMutation();
  const [resendNewOrder, { isLoading: isCreateOrderLoading }] =
    useResendOrderMutation();

  const deleteItem = async (id: string) => {
    // todo: use id to delete item
    try {
      await deleteOrderItem(id).unwrap();

      toast.success('Item removed successfully');
    } catch (error) {
      logger(error);
    }
  };

  const resendOrder = () => {
    const orderList = listItems.map((item) => item?.id);
    resendNewOrder({ list: orderList })
      .unwrap()
      .then((res) => {
        toast.success(`${res?.message}`);
      })
      .catch((err) => mainErrorHandler(err));
  };

  return (
    <div className={`mt-5 h-full w-full ${styles.buy_again_modal}`}>
      {/* Header */}
      <div className='flex w-full flex-row items-center justify-between'>
        <h6 className='font-clash-grotesk text-xl font-semibold '>
          Order #{String(query?.orderId)?.slice(0, 8)}
        </h6>
        <Button
          className='w-[30%]'
          leftIconClassName='text-xl mr-2'
          leftIcon={BsSend}
          isLoading={isCreateOrderLoading}
          onClick={resendOrder}
        >
          Send List
        </Button>
      </div>

      <BorderContainer
        className={`row-span-1 row-start-2 mt-10  w-full ${styles.buy_again_list}  px-4 py-4`}
      >
        <div>
          {listItems.map((item) => {
            return (
              <SingleShoppingListItem
                key={item.id}
                item={item}
                onDelete={deleteItem}
                className='mb-5'
                isLoading={isLoading}
              />
            );
          })}
        </div>
        {/* <div className='row-span-1 row-start-2 px-5 pb-5 '>
          <Button
            variant='outline'
            className='w-full'
            leftIcon={MdAdd}
            leftIconClassName='text-xl'
          >
            Add New Items
          </Button>
        </div> */}
      </BorderContainer>
    </div>
  );
};

export default BuyOrderAgainModal;
