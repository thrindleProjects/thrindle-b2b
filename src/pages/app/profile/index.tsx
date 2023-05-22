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

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const session = await getServerSession(context.req, context.res, authOptions);

//   if (!session) {
//     return {
//       redirect: {
//         statusCode: 401,
//         destination: '/app/login',
//       },
//       props: {},
//     };
//   }

//   if (session.user.type === 'owner') {
//     return {
//       notFound: true,
//       props: {},
//     };
//   }

//   return {
//     props: {},
//   };
// };
