import Image from 'next/image';
import React from 'react';

interface IItemDetailsProps {
  active: string | undefined;
}

const ItemDetails: React.FC<IItemDetailsProps> = () => {
  return (
    <div className='mt-6'>
      <div className='grid grid-cols-4 gap-6'>
        {[1, 2, 3, 4].map((_, index) => (
          <Image
            src='/assets/svg/chair-img.svg'
            alt=''
            key={index}
            width={127}
            height={127}
          />
        ))}
      </div>
      <div className='my-6'>
        <p className='text-[18px] font-[600]'>Office Chairs</p>
        <p className='text-thrindle-text-grey w-[50%] text-[14px] font-[400] '>
          Lorem ipsum dolor sit amet consectetur. Viverra dictum sagittis turpis
          senectus. Proin tellus nibh
        </p>
      </div>

      <div>
        <div className='flex items-center justify-between'>
          <p className='text-[16px] font-[600]'>500 Pieces</p>
          <p className='font-[500]'>Total Price</p>
        </div>

        <div className='mt-6 flex items-center justify-between'>
          <p className='font-[500]'>#20,000/each</p>
          <p className='text-[16px] font-[600]'>#200,000</p>
        </div>
      </div>

      {/* suggested options */}
      <div className='mt-6'>
        <p className='text-thrindle-text-grey pb-6 font-[500] text-[500]'>
          Suggested Options
        </p>
        <div className='grid grid-cols-4 gap-6'>
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index}>
              <Image
                src='/assets/svg/chair-img.svg'
                alt=''
                width={127}
                height={127}
              />
              <div className='my-4'>
                <p className='text-[18px] font-[400]'>Office Chairs</p>
                <p className='text-thrindle-text-grey  text-[14px] font-[400] '>
                  Lorem ipsum dolor sit amet consectetur. Viverra dictum
                  sagittis
                </p>
                <p className='mt-2 font-[500]'>#20,000/each</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
