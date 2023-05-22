import { Icon } from '@iconify/react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import Skeleton from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';

interface CompanyProfileHeaderProps {
  openModal: () => void;
}

type CompanyProfileHeaderType = React.FC<CompanyProfileHeaderProps>;

const CompanyProfileHeader: CompanyProfileHeaderType = ({ openModal }) => {
  const { data } = useSession();

  return (
    <div className='border-primary-black/10 mt-4 flex items-center justify-between rounded-lg border p-5'>
      <div className='flex items-center gap-2'>
        <figure className='border-primary-black/10 relative aspect-square w-24 overflow-hidden rounded-full border'>
          <Image
            src='/assets/svg/critters_logo.svg'
            alt='Company Logo'
            fill={true}
          />
        </figure>
        <p className='flex flex-col gap-px'>
          <span className='text-sm font-medium lg:text-base'>
            {data ? (
              data.user.company.companyName
            ) : (
              <Skeleton
                className='h-full w-full'
                style={{ lineHeight: 'unset' }}
              />
            )}
          </span>
          <span className='text-primary-black/60 text-xs font-medium lg:text-sm'>
            {data ? (
              data.user.company.address || 'Incomplete Profile'
            ) : (
              <Skeleton
                className='h-full w-full'
                style={{ lineHeight: 'unset' }}
              />
            )}
          </span>
        </p>
      </div>
      <div>
        <button
          className='border-primary-black/10 text-primary-black/60 flex items-center gap-1 rounded-lg border px-4 py-2 text-sm font-medium lg:text-base'
          onClick={openModal}
        >
          <span>Edit</span>
          <Icon icon='ph:pencil-line' />
        </button>
      </div>
    </div>
  );
};

export default CompanyProfileHeader;
