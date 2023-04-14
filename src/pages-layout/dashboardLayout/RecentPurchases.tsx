import SingleRecentPurchase from '@/components/pages-component/dashboard/SingleRecentPurchase';
import BorderContainer from '@/components/shared/borderContainer/BorderContainer';

import { recentPurchasesData } from '@/utils/devData';

const RecentPurchases = () => {
  return (
    <BorderContainer className='mt-5 bg-white pb-3'>
      <div className='border-b-200 w-full border-b px-4  py-3'>
        <p className='font-clash-grotesk text-sm font-medium text-gray-500'>
          Recent Purchases
        </p>
      </div>
      <div className='mt-2 w-full pt-2'>
        {recentPurchasesData.map((item, index) => (
          <SingleRecentPurchase {...item} key={index} />
        ))}
      </div>
    </BorderContainer>
  );
};

export default RecentPurchases;
