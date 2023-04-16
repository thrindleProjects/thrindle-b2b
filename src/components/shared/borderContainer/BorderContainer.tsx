import React from 'react';

const BorderContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={` rounded border border-gray-200 ${className}`}>
      {children}
    </div>
  );
};

export default BorderContainer;
