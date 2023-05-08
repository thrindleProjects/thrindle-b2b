import { Icon } from '@iconify/react';
import { Session } from 'next-auth';
import { useSession } from 'next-auth/react';
import Skeleton from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';

// as keyof Session['user']['company']

const companyData: {
  title: string;
  slug: keyof Session['user']['company'];
}[] = [
  {
    title: 'Company Name',
    slug: 'companyName',
  },
  {
    title: 'Contact Person Phone Number',
    slug: 'contactPhone',
  },
  {
    title: 'Address',
    slug: 'address',
  },
  {
    title: 'Email Address',
    slug: 'email',
  },
  {
    title: 'Alternative Contact Person Number',
    slug: 'alternateContactPhone',
  },
];

const CompanyProfileInformation: React.FC = () => {
  const { data: session } = useSession();

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
                    {session ? (
                      (session.user.company[data.slug] as string) ||
                      'Not Provided'
                    ) : (
                      <Skeleton
                        className='h-full w-full'
                        style={{ lineHeight: 'unset' }}
                      />
                    )}
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
