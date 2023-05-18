import moment from 'moment';
import { useRouter } from 'next/router';
import React from 'react';

import Button from '@/components/buttons/Button';
import BorderContainer from '@/components/shared/borderContainer/BorderContainer';
import OrderStatusContainer from '@/components/shared/orderStatus/OrderStatusContainer';
import Table from '@/components/shared/Table';
import TableBody from '@/components/shared/Table/TableBody';
import TableCell from '@/components/shared/Table/TableCell';
import TableHeader from '@/components/shared/Table/TableHeader';
import TableRow from '@/components/shared/Table/TableRow';

import { orderStatus } from '@/@types/appTypes';
import { IRecurrentOrderResponse } from '@/api/recurrent/types';

interface ITableProps {
  data: IRecurrentOrderResponse[] | undefined;
}

const RecurrentTable: React.FC<ITableProps> = ({ data }) => {
  const router = useRouter();
  return (
    <BorderContainer className='p-6'>
      <p className='my-10 text-[16px] font-[500] text-[#1B1C1E]/60'>
        Recurrent List
      </p>
      <Table>
        <TableHeader
          items={[
            '#',
            'Created At',
            'Order Referral Code',
            'Order Status',

            'Number of Items',
            'Delivery Date (th)',
            'Action',
          ]}
        />
        <TableBody>
          {data &&
            data.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  {moment(item.createdAt).format('Do MMMM YYYY')}
                </TableCell>
                <TableCell> {item.orderRefCode}</TableCell>
                <TableCell>
                  <OrderStatusContainer
                    status={item.orderStatus as orderStatus}
                    className='mt-5 max-w-[70%]'
                  />
                </TableCell>

                <TableCell> {item.listItems.length} items</TableCell>
                <TableCell> {item.recurringDeliveryDay} </TableCell>
                <TableCell>
                  <Button
                    onClick={() =>
                      router.push(`/app/recurrent-list/${item.id}`)
                    }
                    className='w-[100px]'
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </BorderContainer>
  );
};

export default RecurrentTable;
