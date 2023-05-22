import Image from 'next/image';

const SingleSuggestedOrder = () => {
  return (
    <div className='w-full'>
      <div className='relative h-[150px] w-full bg-gray-50'>
        <Image
          fill={true}
          src='/images/dev-order.png'
          alt='order'
          className=' rounded object-contain'
        />
      </div>
      <div className='mt-2'>
        <p className=' truncate... text-xs font-medium text-gray-700 xl:text-sm'>
          Office Chairs
        </p>
        <p className='font-clash-grotesk text-xs font-normal text-gray-600'>
          Lorem ipsum dolor sit amet consectetur. Viverra dictum sagittis{' '}
        </p>
        <div className='mt-1'>
          <span className='font-clash-grotesk text-xs font-semibold text-gray-800'>
            ₦20,000/
          </span>
          <span className='text-[10px] font-light'>each</span>
        </div>
      </div>
    </div>
  );
};

export default SingleSuggestedOrder;
