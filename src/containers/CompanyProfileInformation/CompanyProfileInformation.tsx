import { Icon } from '@iconify/react';

const companyData = [
  {
    title: 'Company Name',
    value: 'Critters Veterinary Center',
  },
  {
    title: 'Contact Person Phone Number',
    value: '09065434323',
  },
  {
    title: 'Address',
    value: '20, Maryland, Lagos, Nigeria',
  },
  {
    title: 'Email Address',
    value: 'crittersvet@gmail.com',
  },
  {
    title: 'Alternative Contact Person Number',
    value: '08123456789',
  },
];

const CompanyProfileInformation: React.FC = () => {
  return (
    <div className='border-primary-black/10 mt-4 flex items-center justify-between rounded-lg border p-5'>
      <section className='space-y-10'>
        <h4 className='text-lg font-medium'>Company Information</h4>
        <div>
          <div className='grid grid-cols-2 grid-rows-3 gap-10'>
            {companyData.map((data, index) => {
              return (
                <div key={index} className='flex flex-col gap-1'>
                  <span className='text-primary-black/60 text-xs font-medium lg:text-sm '>
                    {data.title}
                  </span>
                  <span className='text-primary-black text-sm font-medium lg:text-base'>
                    {data.value}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <div>
        <button className='border-primary-black/10 text-primary-black/60 flex items-center gap-1 rounded-lg border px-4 py-2 text-sm font-medium lg:text-base'>
          <span>Edit</span>
          <Icon icon='ph:pencil-line' />
        </button>
      </div>
    </div>
  );
};

export default CompanyProfileInformation;
