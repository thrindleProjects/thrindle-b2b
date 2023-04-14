import { MouseEvent, useState } from 'react';
import { FiMenu } from 'react-icons/fi';

import LandingMobileNavModal from '@/containers/LandingMobileNavModal/LandingMobileNavModal';

const LandingMobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    setIsOpen(false);
  };

  const handleOpen = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    setIsOpen(true);
  };

  return (
    <div className='grid aspect-square w-max place-items-center text-white'>
      <button
        className='h-max w-max text-2xl'
        type='button'
        onClick={handleOpen}
      >
        <FiMenu />
      </button>
      <LandingMobileNavModal isOpen={isOpen} onClose={handleClose} />
    </div>
  );
};

export default LandingMobileNav;
