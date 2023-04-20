import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
const AppDashboardPage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/app/dashboard');
  }, [router]);

  return <></>;
};

export default AppDashboardPage;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      source: '/app',
      destination: '/app/dashboard',
      permanent: true,
    },
  };
};
