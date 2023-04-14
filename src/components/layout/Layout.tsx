import React, { useEffect, useState } from 'react';

import { LayoutProps } from '@/components/layout/type';
import NavBar from '@/components/shared/NavBar/NavBar';
import NavItem from '@/components/shared/NavItem/NavItem';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Layout: React.FC<LayoutProps> = ({
  children,
  headerText,
  component,
  subText,
}) => {
  // Put Header or Footer Here

  const [showMobileWarning, setShowMobileWarning] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 800) setShowMobileWarning(true);
  }, []);

  if (showMobileWarning) {
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

      <div className='px-10'>
        <div className='flex items-center justify-between py-6'>
          <div>
            <p className='text-[24px] font-[600]'>{headerText}</p>

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
