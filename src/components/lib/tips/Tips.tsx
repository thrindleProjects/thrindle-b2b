import { Carousel } from 'flowbite-react';
import React from 'react';

const Tips = () => {
  return (
    <div className='bg-pattern flex h-screen flex-col items-center justify-center bg-cover bg-no-repeat'>
      <p className='relative top-10 text-center text-[24px] font-[600] text-white'>
        Quick Tips
      </p>

      <div className='md:h-[12rem] md:w-[60%] xl:h-[10rem] xl:w-[40%]'>
        <Carousel leftControl={<></>} rightControl={<></>} slideInterval={4000}>
          <div>
            <p className=' mt-2 text-center text-[16px] font-[600] text-white'>
              If we can’t get what you want, we will always suggest options for
              you so you don’t have to worry
            </p>
          </div>
          <div>
            <p className=' mt-2 text-center text-[16px] font-[600] text-white'>
              If we can’t get what you want, we will always suggest options for
              you so you don’t have to worry
            </p>
          </div>
          <div>
            <p className=' mt-2 text-center text-[16px] font-[600] text-white'>
              If we can’t get what you want, we will always suggest options for
              you so you don’t have to worry
            </p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Tips;
