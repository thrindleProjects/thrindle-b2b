import React from 'react';
import { PropsWithChildren } from 'react';

import ThrindleLogo from '@/components/shared/ThrindleLogo/ThrindleLogo';

interface IFormContainer extends PropsWithChildren {
  title: string;
  subtitle?: string;
  className: string;
}

const FormContainer: React.FC<IFormContainer> = ({
  children,
  title,
  subtitle,
  className,
}) => {
  return (
    <div className=' md:px-10 lg:px-20'>
      <div className='h-20 py-10'>
        <ThrindleLogo variant='blue' />
      </div>
      <div className={`flex h-max flex-col ${className}`}>
        <p className='text-primary-blue text-[24px] font-[600]'>{title}</p>
        <p className='md:w-full xl:w-[80%]'>{subtitle}</p>

        {children}
      </div>
    </div>
  );
};

export default FormContainer;
