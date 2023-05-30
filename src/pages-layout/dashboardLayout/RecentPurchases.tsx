import Image from 'next/image';

import Button from '@/components/buttons/Button';
import { SpinnerLoader } from '@/components/common/loader';
import SingleRecentPurchase from '@/components/pages-component/dashboard/SingleRecentPurchase';
import BorderContainer from '@/components/shared/borderContainer/BorderContainer';

import { useGetDashboardRecentPurchasesQuery } from '@/api/dashboard/dashboardServices';
import { REFETCH_TIME } from '@/constant/constants';
import { recentPurchasesData } from '@/utils/devData';
import { getErrorMessage } from '@/utils/networkHandler';

const RecentPurchases = () => {
  const { data, isFetching, isError, error, refetch } =
    useGetDashboardRecentPurchasesQuery(null, {
      pollingInterval: REFETCH_TIME,
      refetchOnMountOrArgChange: true,
    });

  return (
    <BorderContainer className='mt-5 max-h-[350px] min-h-[300px] bg-white pb-3'>
      <div className='border-b-200 w-full border-b px-4  py-3'>
        <p className='font-clash-grotesk text-sm font-medium text-gray-500'>
          Recent Purchases
        </p>
      </div>
      {/* Loading */}
      {isFetching && <SpinnerLoader type='fullScreen' className='mt-10' />}

      {/* Error occurred */}
      {isError && !isFetching && (
        <div className='mt-10 flex w-full flex-col items-center justify-center'>
          <h6 className='font-clash-grotesk text-base font-medium text-red-500'>
            {getErrorMessage(error)}
          </h6>
          <Button onClick={refetch}>Try Again</Button>
        </div>
      )}

      {/* Available data */}
      {!isError &&
        !isFetching &&
        data &&
        data?.data &&
        data?.data.length > 0 && (
          <div className='mt-2 w-full pt-2'>
            {recentPurchasesData.map((item, index) => (
              <SingleRecentPurchase {...item} key={index} />
            ))}
          </div>
        )}

      {/* Empty data */}
      {!isError &&
        !isFetching &&
        data &&
        data?.data &&
        data?.data.length === 0 && (
          <div className='mt-12 flex w-full flex-col items-center justify-center'>
            <Image
              src='/assets/svg/pricelist.svg'
              alt='Order Icon'
              width={50}
              height={50}
            />
            <h6 className='text-primary-blue font-clash-grotesk mt-3 text-center text-base font-medium'>
              Nothing to see here yet
            </h6>
            <p className='font-clash-grotesk mt-2 text-sm font-normal text-black/60'>
              Place your first order and come back
            </p>
          </div>
        )}
    </BorderContainer>
  );
};

export default RecentPurchases;
