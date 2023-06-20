import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import { useGetWalletTotalTransactionQuery } from '@/api/wallet';

const WalletDough = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const { data } = useGetWalletTotalTransactionQuery();

  const data2 = {
    datasets: [
      {
        label: '# of Votes',
        data: [data?.data.inflow, data?.data.outflow],
        backgroundColor: ['#ffd89b', '#065DA7'],
        borderColor: ['#ffd89b', '#065DA7'],
        borderWidth: 1,
      },
    ],
    labels: ['inflow', 'outflow'],
  };

  return (
    <div>
      <div className='mb-10 flex items-center justify-between'>
        <p>Total Transaction</p>
        <p>Hello</p>
      </div>
      <p className='my-8 text-[24px] font-[600] text-[#49494b]'>
        N{data?.data.total.toLocaleString()}.00
      </p>

      <div className='h-full w-full'>
        {data?.data.total === 0 ? (
          <div>
            <p className='my-6 text-center text-xl'>
              There is no data to display
            </p>
          </div>
        ) : (
          <Doughnut data={data2} />
        )}
      </div>
    </div>
  );
};

export default WalletDough;
