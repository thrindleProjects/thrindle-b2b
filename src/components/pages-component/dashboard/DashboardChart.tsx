import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import Button from '@/components/buttons/Button';
import { SpinnerLoader } from '@/components/common/loader';
import { DashboardChartTooltip } from '@/components/pages-component/dashboard';

import { useGetDashboardDataQuery } from '@/api/dashboard/dashboardServices';
import { REFETCH_TIME } from '@/constant/constants';
import { getMonthFromNumber } from '@/utils/helperFunctions';
import { getErrorMessage } from '@/utils/networkHandler';

const DashboardChart = () => {
  const router = useRouter();
  const { data, isError, error, refetch, isFetching } =
    useGetDashboardDataQuery(null, {
      refetchOnMountOrArgChange: true,
      pollingInterval: REFETCH_TIME,
    });

  // Restructure the data from backend
  const reformedData =
    data && data?.data && data?.data?.monthlySpendingData
      ? data?.data?.monthlySpendingData.map((item) => {
          return {
            ...item,
            name: getMonthFromNumber(item.month),
            uv: item?.orderAmount,
            pv: item?.orderAmount,
            amt: item?.orderAmount,
          };
        })
      : [];

  return (
    <div className='w-full px-6 py-8 '>
      {/* When loading */}
      {!isError && isFetching && <SpinnerLoader type='fullScreen' />}
      {isError && !isFetching && (
        <div className='mt-10 flex w-full flex-col items-center justify-center'>
          <h6 className='font-clash-grotesk text-base font-medium text-red-500'>
            {getErrorMessage(error)}
          </h6>
          <Button onClick={refetch} className='mt-4'>
            Try Again
          </Button>
        </div>
      )}

      {/* When data is available */}
      {!isError && !isFetching && data && data?.data && (
        <div className='w-full'>
          {/* Header */}
          <div className='flex w-full flex-row justify-between '>
            <div>
              <p className='font-clash-grotesk pb-1 text-xs font-normal text-gray-400'>
                Total Amount Spent
              </p>

              <p className='font-clash-grotesk text-xl font-semibold text-gray-800'>
                ₦{data?.data?.totalAmountSpent.toLocaleString()}
              </p>
            </div>
            <p>Hello</p>
          </div>

          {/* Graph */}
          {data && data?.data?.monthlySpendingData?.length > 0 && (
            <div className='mt-14 w-full pl-10'>
              <ResponsiveContainer width='100%' height={400}>
                <LineChart
                  className='w-full'
                  data={reformedData}
                  margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                >
                  <Line type='monotone' dataKey='uv' stroke='#8884d8' />
                  <XAxis dataKey='name' />
                  <YAxis />
                  <Tooltip
                    wrapperStyle={{ outline: 'none' }}
                    formatter={(value, name) => [`#${value}K`, name]}
                    content={<DashboardChartTooltip />}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
          {/* Empty data */}
          {data && data?.data?.monthlySpendingData?.length === 0 && (
            <div className='flex h-full w-full flex-col items-center justify-center'>
              <Image
                src='/assets/svg/emptyDashboard.svg'
                alt='Order Icon'
                width={150}
                height={150}
              />
              <h6 className='text-primary-blue font-clash-grotesk mt-3 text-center text-base font-medium'>
                No Data to show here yet
              </h6>
              <p className='font-clash-grotesk mt-2 text-sm font-normal text-black/60'>
                Start placing orders to get a detailed visual representation
                here
              </p>
              <Button
                onClick={() => {
                  router.push('/app/orders');
                }}
                variant='outline'
                className='mt-5 '
              >
                Start Buying
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DashboardChart;
