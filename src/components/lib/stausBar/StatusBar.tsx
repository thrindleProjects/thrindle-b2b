import React from 'react';

const StatusBar = ({ status }: { status: string }) => {
  return (
    <div
      className={`flex h-[28px] w-[72px] items-center justify-center rounded-full  ${
        status === 'Success'
          ? 'text-primary-blue bg-[#e9f2f9]'
          : 'text-primary-yellow bg-[#fffbf5]'
      }`}
    >
      <p className='text-[14px] font-[500]'>{status}</p>
    </div>
  );
};

export default StatusBar;
