import Image from 'next/image';

const SingleRecentPurchase = ({
  name,
  date,
  price,
}: {
  name: string;
  price: number;
  date: string;
}) => {
  return (
    <div className='mb-4 flex w-full flex-row items-center justify-between px-4'>
      <div className='flex flex-row'>
        <Image
          src='/assets/svg/critters.svg'
          alt='bell'
          width={40}
          height={40}
          // className='h-30 w-30 object-contain'
        />
        <div className='ml-3 w-[70%]'>
          <p className=' truncate... text-xs font-medium text-gray-700 xl:text-sm'>
            {name}
          </p>
          <p className='font-clash-grotesk text-[10px] font-normal text-gray-400 '>
            {date}
          </p>
        </div>
      </div>
      {/* Price */}
      <div>
        <p className='font-clash-grotesk text-xs font-semibold text-gray-600 xl:text-sm'>
          ₦{price.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default SingleRecentPurchase;
