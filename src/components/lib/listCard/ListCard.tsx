import Image from 'next/image';
import React, { useState } from 'react';

import { IListCardProps } from '@/components/lib/listCard/types';
import BorderContainer from '@/components/shared/borderContainer/BorderContainer';

const ListCard: React.FC<IListCardProps> = ({ data }) => {
  const [active, setActive] = useState(0);
  return (
    <div className='mt-6 h-[460px] overflow-y-auto'>
      {data.map((item, index) => (
        <BorderContainer
          onClick={() => setActive(index)}
          key={index}
          className={`mt-6 cursor-pointer p-6 ${
            active === index ? 'border-primary-blue' : ''
          }`}
        >
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-6'>
              <Image
                src='/assets/svg/chair.svg'
                alt=''
                width={40}
                height={40}
              />
              <div className='md:hidden lg:block'>
                <p className='text-[16px] font-[600]'>{item.title}</p>
                <p className='text-[12px] font-[500]  text-[#767778]'>
                  {item.orderDate}
                </p>
              </div>
            </div>
            <p className='whitespace-nowrap text-[16px] font-[600]  md:hidden lg:block'>
              {item.pieces}
            </p>
          </div>
          <div className='mt-4 block lg:hidden'>
            <div className='my-2 flex items-center justify-between'>
              <p className='text-[16px] font-[600]'>{item.title}</p>
              <p className='whitespace-nowrap text-[16px] font-[600]'>
                {item.pieces}
              </p>
            </div>
            <p className='text-[12px] font-[500]  text-[#767778]'>
              {item.orderDate}
            </p>
          </div>
          <div className='mt-6 flex items-center  justify-between lg:pl-16 '>
            <p className='text-[12px] font-[500] text-[#767778] lg:w-[60%] '>
              Lorem ipsum dolor sit amet consectetur. Viverra dictum sagittis
              turpis senectus. Proin tellus nibh
            </p>
            <Image src='/assets/svg/bin.svg' alt='' width={18} height={18} />
          </div>
        </BorderContainer>
      ))}
    </div>
  );
};

export default ListCard;
