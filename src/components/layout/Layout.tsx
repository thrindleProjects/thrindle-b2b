import React from 'react';

import { useMediaQuery } from '@/hooks';

import { LayoutProps } from '@/components/layout/type';
import NavBar from '@/components/shared/NavBar/NavBar';
import NavItem from '@/components/shared/NavItem/NavItem';

const Layout: React.FC<LayoutProps> = ({
  children,
  headerText,
  component,
  subText,
  className,
  headerClassName,
}) => {
  // Put Header or Footer Here

  const isMobile = useMediaQuery('(max-width: 768px)');

  if (isMobile) {
    return (
      <div className='text-md flex h-screen w-screen items-center justify-center'>
        <p> This Web App can't be viewed on mobile screens.</p>
      </div>
    );
  }

  return (
    <div className=''>
      <NavBar />
      <NavItem />

      <div className={`px-10 ${className}`}>
        <div
          className={`flex items-center justify-between py-6 ${headerClassName}`}
        >
          <div>
            <p className='text-[24px] font-[500]'>{headerText}</p>

            <p className='mt-1 w-[60%]'>{subText}</p>
          </div>
          {component}
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
