import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useMemo } from 'react';
import Skeleton from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';

import { IMAGE_URL } from '@/constant/constants';
const TeamAccessHeader: React.FC = () => {
  const { data } = useSession();

  const image = useMemo(() => {
    return data?.user.company.logo
      ? `${IMAGE_URL}/${data?.user.company.logo}`
      : '/assets/svg/buildings.svg';
  }, [data?.user.company.logo]);

  return (
    <div className='border-primary-black/10 flex items-center justify-between rounded-lg border p-5'>
      <div className='flex items-center gap-2'>
        <figure className='border-primary-black/10 relative aspect-square w-24 overflow-hidden rounded-full border'>
          <Image src={image} alt='Company Logo' fill={true} />
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
        <div className='border-primary-black/10 text-primary-black/60 flex items-center gap-1 rounded-lg border px-4 py-2 text-sm font-medium lg:text-base'>
          {data?.user.type === 'owner' ? 'Owner' : 'Member'}
        </div>
      </div>
    </div>
  );
};

export default TeamAccessHeader;
