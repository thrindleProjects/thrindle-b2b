import Image from 'next/image';
import { useSession } from 'next-auth/react';
import React from 'react';

import ThrindleLogo from '@/components/shared/ThrindleLogo/ThrindleLogo';

const NavBar = () => {
  const { data } = useSession();
  return (
    <div className='border-b-thrindle-grey flex h-24 items-center justify-between border bg-white px-10 '>
      <ThrindleLogo variant='blue' />

      <div className='flex items-center gap-4'>
        <div className='border-thrindle-grey flex h-[40px] w-[40px] items-center justify-center rounded-full  border'>
          <div className='relative h-[18px]  w-[18px] rounded-full '>
            <Image
              src='/assets/svg/bell.svg'
              alt='bell'
              fill={true}
              className='h-30 w-30 object-contain'
            />
          </div>
        </div>
        <div className='flex items-center justify-center gap-2 rounded-full'>
          <div className='border-thrindle-light-blue relative  h-[40px] w-[40px] rounded-full '>
            <Image
              src='/assets/svg/critters.svg'
              alt='bell'
              fill={true}
              className='h-30 w-30 object-contain'
            />
          </div>
          <p className='font-[500]'>{data?.user.company.companyName}</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
