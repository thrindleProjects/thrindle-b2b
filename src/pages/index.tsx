import { GetServerSideProps } from 'next';
import { getServerSession } from 'next-auth';

import { NextPageWithLayout } from '@/pages/_app';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import LandingPageLayout from '@/pages-layout/LandingPage';

const LandingPage: NextPageWithLayout = () => {
  return <LandingPageLayout />;
};

LandingPage.getLayout = function (page) {
  return <>{page}</>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return {
      redirect: {
        destination: '/app/dashboard',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default LandingPage;
