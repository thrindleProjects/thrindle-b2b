import { DashboardChart } from '@/components/pages-component/dashboard';
import BorderContainer from '@/components/shared/borderContainer/BorderContainer';
import WalletCard from '@/components/shared/walletCard/WalletCard';

import RecentPurchases from '@/pages-layout/dashboardLayout/RecentPurchases';

const DashboardLayout = () => {
  return (
    <div className='flex w-full flex-col justify-between lg:flex-row'>
      <div className='w-full lg:w-[65%]'>
        <BorderContainer>
          <DashboardChart />
        </BorderContainer>
      </div>
      <div className='mt-5 h-[200px] w-full lg:mt-0 lg:w-[32%]'>
        <WalletCard />
        <RecentPurchases />
      </div>
    </div>
  );
};

export default DashboardLayout;
