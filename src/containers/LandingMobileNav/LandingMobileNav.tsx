import { MouseEvent, useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoCloseOutline } from 'react-icons/io5';

const LandingMobileNav = () => {
  const [showModal, setShowModal] = useState<boolean>(true);

  const handleClose = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    setShowModal(false);
  };

  const handleOpen = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    setShowModal(true);
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

      {showModal && (
        <div
          role='modal'
          className='text-primary-black fixed left-0 top-0 h-full w-full bg-white'
        >
          <button className='px-6 text-2xl' type='button' onClick={handleClose}>
            <IoCloseOutline />
          </button>
        </div>
      )}
    </div>
  );
};

export default LandingMobileNav;
