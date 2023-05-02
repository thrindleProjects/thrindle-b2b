import CompanyProfileHeader from '@/containers/CompanyProfileHeader';
import CompanyProfileInformation from '@/containers/CompanyProfileInformation/CompanyProfileInformation';

const CompanyProfileLayout: React.FC = () => {
  return (
    <div className='p-5'>
      <CompanyProfileHeader />
      <CompanyProfileInformation />
    </div>
  );
};

export default CompanyProfileLayout;
