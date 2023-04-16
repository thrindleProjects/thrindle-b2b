import Image from 'next/image';

const OrderProgressState = () => {
  return (
    <div className='h-full w-full'>
      <div className='w-full border-b border-b-gray-200 pb-2'>
        <p className='font-clash-grotesk text-sm font-medium text-gray-700'>
          My list
        </p>
      </div>
      <div className='flex h-[95%] w-full  flex-col items-center justify-center'>
        <Image
          src='/assets/svg/emptyState.svg'
          alt='bell'
          width={100}
          height={100}
          // className='h-30 w-30 object-contain'
        />
        <p className='font-clash-grotesk pt-4 text-center text-base font-semibold text-gray-800'>
          We are working up a price list
        </p>
        <p className='font-clash-grotesk w-[70%] pt-2 text-center text-base text-gray-400'>
          Our representatives are working to get you a price list ASAP, you will
          be notified when we have one for you, check back soon
        </p>
      </div>
    </div>
  );
};

export default OrderProgressState;
