import React, { PropsWithChildren } from 'react';

import { useMediaQuery } from '@/hooks';

import NavBar from '@/components/shared/NavBar/NavBar';
import NavItem from '@/components/shared/NavItem/NavItem';

const AuthenticatedLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const isMobile = useMediaQuery('(max-width: 767px)');

  if (isMobile) {
    return (
      <div className='text-md flex h-screen w-screen items-center justify-center'>
        <p> This Web App can't be viewed on mobile screens.</p>
      </div>
    );
  }

  return (
    <div className='mx-auto h-full max-h-screen w-full max-w-[1560px] overflow-y-auto'>
      <NavBar />
      <NavItem />
      {children}
    </div>
  );
};

export default AuthenticatedLayout;
