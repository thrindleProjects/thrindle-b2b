import ProfileLayout from '@/layouts/ProfileLayout/ProfileLayout';
import { NextPageWithLayout } from '@/pages/_app';
import PasswordLayout from '@/pages-layout/profile/password';

const PasswordSettings: NextPageWithLayout = () => {
  return <PasswordLayout />;
};

PasswordSettings.getLayout = function (page) {
  return <ProfileLayout>{page}</ProfileLayout>;
};

export default PasswordSettings;
