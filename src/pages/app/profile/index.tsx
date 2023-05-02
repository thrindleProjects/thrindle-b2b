import ProfileLayout from '@/layouts/ProfileLayout/ProfileLayout';
import { NextPageWithLayout } from '@/pages/_app';
import CompanyProfileLayout from '@/pages-layout/profile/company-profile';

const CompanyProfile: NextPageWithLayout = () => {
  return <CompanyProfileLayout />;
};

CompanyProfile.getLayout = function (page) {
  return <ProfileLayout>{page}</ProfileLayout>;
};

export default CompanyProfile;
