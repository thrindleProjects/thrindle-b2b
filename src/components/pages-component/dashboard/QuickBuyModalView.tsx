import React from 'react';

import { ModalHeader } from '@/components/shared/modal';

const QuickBuyModalView = () => {
  return (
    <div className='w-full '>
      {/* Content */}
      <div className='mt-10 w-full'>
        <ModalHeader
          title='Quick Buy'
          text='Place order for items with small units and we can get it for you on the go!'
        />
        <div className='mt-5 w-full'></div>
      </div>
    </div>
  );
};

export default QuickBuyModalView;
