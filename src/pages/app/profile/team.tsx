import ProfileLayout from '@/layouts/ProfileLayout/ProfileLayout';
import { NextPageWithLayout } from '@/pages/_app';
import TeamLayout from '@/pages-layout/profile/team';

const TeamAccess: NextPageWithLayout = () => {
  return <TeamLayout />;
};

TeamAccess.getLayout = function (page) {
  return <ProfileLayout>{page}</ProfileLayout>;
};

export default TeamAccess;
