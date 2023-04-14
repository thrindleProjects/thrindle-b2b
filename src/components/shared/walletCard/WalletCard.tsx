import Image from 'next/image';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const WalletCard = ({ className }: { className?: string }) => {
  const [showPrice, setShowPrice] = useState(false);
  return (
    <div
      className={`bg-primary-blue relative h-[200px] w-full rounded-lg border px-7 py-6 ${className}`}
    >
      <Image
        src='/assets/svg/walletCircle.svg'
        alt='bell'
        width={180}
        height={180}
        className='h-30 w-30 absolute -right-5  -top-24 z-0'
      />
      <div className='item-center flex flex-row'>
        <Image src='/assets/svg/wallet.svg' alt='bell' width={24} height={24} />
        <span className='font-clash-grotesk pl-3 text-base font-medium text-white/60'>
          Wallet Balance
        </span>
      </div>
      {/* Balance */}
      <div className='absolute bottom-10  left-0 right-0 flex flex-row items-center justify-between  px-7'>
        {showPrice ? (
          <p className='font-clash-grotesk text-3xl font-semibold text-white'>
            ₦20,000
          </p>
        ) : (
          <p className='text-3xl font-semibold text-white'>*******</p>
        )}

        <button onClick={() => setShowPrice(!showPrice)}>
          {showPrice ? (
            <FaEye className='text-2xl text-white' />
          ) : (
            <FaEyeSlash className='text-2xl text-white' />
          )}
        </button>
      </div>
    </div>
  );
};

export default WalletCard;
