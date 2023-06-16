// import { BASE_URL } from '@/api/globalApi';
// import { IMAGE_URL_PATH } from '@/constant/constants';
import { Carousel } from 'flowbite-react';

import { IOrderItemSubstitute } from '@/@types/appTypes';
// import Image from 'next/image';
// import { Carousel } from 'flowbite-react';

const SingleSuggestedOrder = ({ item }: { item: IOrderItemSubstitute }) => {
  return (
    <div className='w-full'>
      <Carousel
        className='relative aspect-[16/9] bg-red-500'
        indicators={false}
        leftControl={<></>}
        rightControl={<></>}
      >
        {item.images.map((image, index) => (
          <h6 key={index}> {image}</h6>
          // <Image
          //   fill={true}
          //   src={`${BASE_URL}${IMAGE_URL_PATH}/${image}`}
          //   alt='order'
          //   className='w-full rounded object-contain'
          //   key={index}
          // />
        ))}
      </Carousel>
      <div className='mt-2'>
        <p className=' truncate... text-xs font-medium text-gray-700 xl:text-sm'>
          {item.name}
        </p>
        <p className='font-clash-grotesk mt-2 text-xs font-normal text-gray-600'>
          {item?.description.slice(0, 200)}
        </p>
        <p className='font-clash-grotesk mt-2 text-[10px] font-normal text-gray-400'>
          {item?.quantity} pieces
        </p>
        <div className='mt-1'>
          <span className='font-clash-grotesk text-xs font-semibold text-gray-800'>
            ₦{item.price?.toLocaleString()}/
          </span>
          <span className='text-[10px] font-light'>each</span>
        </div>
      </div>
    </div>
  );
};

export default SingleSuggestedOrder;

// <div key={index} className='relative h-[150px] w-full bg-gray-50'>
//   <Image
//     fill={true}
//     src={`${BASE_URL}${IMAGE_URL_PATH}/${image}`}
//     alt='order'
//     className='rounded object-contain'
//   />
// </div>
