import { GetServerSideProps } from 'next';
import { getServerSession, Session } from 'next-auth';

import ProfileLayout from '@/layouts/ProfileLayout/ProfileLayout';
import { NextPageWithLayout } from '@/pages/_app';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import CompanyProfileLayout from '@/pages-layout/profile/company-profile';

const CompanyProfile: NextPageWithLayout = () => {
  return <CompanyProfileLayout />;
};

CompanyProfile.getLayout = function (page) {
  return <ProfileLayout>{page}</ProfileLayout>;
};

export default CompanyProfile;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = (await getServerSession(
    context.req,
    context.res,
    authOptions
  )) as Session;

  if (session.user.type !== 'owner') {
    return {
      redirect: {
        destination: '/app/profile/password',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
