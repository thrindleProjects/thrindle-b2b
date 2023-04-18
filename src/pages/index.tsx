import { NextPageWithLayout } from '@/pages/_app';
import LandingPageLayout from '@/pages-layout/LandingPage';

const LandingPage: NextPageWithLayout = () => {
  return <LandingPageLayout />;
};

LandingPage.getLayout = function (page) {
  return <>{page}</>;
};

export default LandingPage;
