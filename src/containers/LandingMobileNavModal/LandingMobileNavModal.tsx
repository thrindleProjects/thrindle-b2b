import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { MouseEvent } from 'react';
import { IoCloseOutline } from 'react-icons/io5';

import { mobileNavVariant } from './variants';

const LandingMobileNavModal: React.FC<{
  isOpen: boolean;
  onClose: (e: MouseEvent<HTMLButtonElement>) => void;
}> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role='modal'
          className='text-primary-black fixed left-0 top-0 z-10 flex h-full w-full flex-col gap-8 bg-white px-6 py-9 md:px-10'
          variants={mobileNavVariant}
          initial='initial'
          exit='exit'
          animate='animate'
        >
          <button
            className='ml-auto block text-2xl'
            type='button'
            onClick={onClose}
          >
            <IoCloseOutline />
          </button>

          <div>
            <nav className='flex flex-col gap-3'>
              <ul className='text-primary-black flex flex-col items-center gap-4 text-center text-2xl font-semibold'>
                <li className='border-b-primary-black/10 w-full border-b py-6'>
                  <Link href='how-it-works'>How It Works</Link>
                </li>
                <li className='border-b-primary-black/10 w-full border-b py-6'>
                  <Link href='why-us'>Why Us</Link>
                </li>
                <li className='border-b-primary-black/10 w-full border-b py-6'>
                  <Link href='contact-us'>Contact Us</Link>
                </li>
              </ul>

              <ul className='text-primary-blue/80 flex flex-col items-center gap-4 text-center text-lg font-medium'>
                <li className='border-b-primary-black/10 w-full border-b py-6'>
                  <button type='button'>Logout</button>
                </li>
                <li className='w-full py-6'>
                  <Link href='register'>Why Us</Link>
                </li>
              </ul>
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LandingMobileNavModal;
