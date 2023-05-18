import { Spinner } from 'flowbite-react';
import React from 'react';

type spinnerType = 'default' | 'fullScreen';

const SpinnerLoader = ({
  className,
  type = 'default',
}: {
  className?: string;
  type?: spinnerType;
}) => {
  return (
    <div
      className={`${
        type === 'fullScreen' &&
        'flex h-full w-full flex-col items-center justify-center'
      } ${className}`}
    >
      <Spinner aria-label='Extra large spinner example' size='xl' />
    </div>
  );
};

export default SpinnerLoader;
