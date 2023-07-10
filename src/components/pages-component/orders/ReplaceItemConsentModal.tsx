import Image from 'next/image';
import React from 'react';
import Modal from 'react-modal';

import Button from '@/components/buttons/Button';

const ReplaceItemConsentModal = ({
  isOpen,
  isLoading,
  handleReplace,
  handleClose,
}: {
  isOpen: boolean;
  isLoading: boolean;
  handleReplace: () => void;
  handleClose: () => void;
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      shouldCloseOnEsc
      style={{
        overlay: {
          backgroundColor: '#00000020',
          zIndex: 100,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'auto',
        },
        content: {
          outline: 'none',
        },
      }}
      shouldCloseOnOverlayClick={true}
      shouldReturnFocusAfterClose={true}
      ariaHideApp={false}
      className='2xl:max-w-1/4 h-max w-[90%] max-w-lg flex-shrink-0 rounded-md bg-white py-2 drop-shadow-2xl md:h-max lg:w-2/5 xl:w-1/3'
    >
      <section className='flex w-full flex-col items-center gap-3 px-10 py-6 text-center'>
        <Image
          src='/assets/svg/CheckCircle.svg'
          alt='Check'
          width={100}
          height={100}
        />
        <h5 className='text-amali-black text-2xl font-semibold'>
          Item Selected
        </h5>
        <p className='text-base font-medium text-[#1B1C1E]'>
          You have selected item 1 as your prefferred option, and it would now
          be added to your list
        </p>

        <div className='mt-7 w-full'>
          <Button
            type='button'
            onClick={handleReplace}
            isLoading={isLoading}
            className='w-full'
          >
            Proceed
          </Button>
        </div>
      </section>
    </Modal>
  );
};

export default ReplaceItemConsentModal;
