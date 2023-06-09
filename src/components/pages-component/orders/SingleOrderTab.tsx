import React from 'react';

import { orderStatus } from '@/@types/appTypes';

const SingleOrderTab = ({
  status,
  slug,
  activeTab,
  changeTab,
}: {
  status: string;
  slug: string;
  activeTab: orderStatus;
  changeTab: () => void;
}) => {
  return (
    <button
      onClick={changeTab}
      className={`flex-center  flex h-[70%] items-center justify-center rounded-md px-3 text-sm text-gray-500 transition-all duration-500 ease-in-out ${
        activeTab === slug &&
        'bg-primary-blue font-clash-grotesk font-medium text-white'
      }`}
    >
      {status}
    </button>
  );
};

export default SingleOrderTab;
