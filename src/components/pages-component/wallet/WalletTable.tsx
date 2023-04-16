import React from 'react';

import StatusBar from '@/components/lib/stausBar/StatusBar';
import Table from '@/components/shared/Table';
import TableBody from '@/components/shared/Table/TableBody';
import TableCell from '@/components/shared/Table/TableCell';
import TableHeader from '@/components/shared/Table/TableHeader';
import TableRow from '@/components/shared/Table/TableRow';

import { walletData } from '@/utils/devData';

const WalletTable = () => {
  return (
    <div>
      <div className='mb-10 flex items-center justify-between'>
        <p>Transaction History</p>
        <p>Hello</p>
      </div>
      <Table>
        <TableHeader items={['#', 'Description', 'Date', 'Amount', 'Status']} />
        <TableBody>
          {walletData.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.amount}</TableCell>
              <TableCell>
                <StatusBar status={item.status} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default WalletTable;
