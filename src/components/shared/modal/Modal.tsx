import { motion } from 'framer-motion';
import React from 'react';
import Modal from 'react-modal';

import { ModalProps } from '@/components/shared/modal/type';

const GenModal: React.FC<ModalProps> = ({
  handleCloseModal,
  isOpen,
  children,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      shouldCloseOnEsc
      style={{
        overlay: {
          backgroundColor: '#00000020',
          zIndex: 100,

          overflow: 'auto',
        },
        content: {
          outline: 'none',
        },
      }}
      shouldCloseOnOverlayClick={true}
      shouldReturnFocusAfterClose={true}
      ariaHideApp={false}
      className='ml-auto  h-max flex-shrink-0 bg-transparent  bg-white drop-shadow-2xl md:h-max lg:w-[485px]'
    >
      <motion.div
        animate={{ x: 0 }}
        initial={{ x: '100vw' }}
        exit={{ x: '100vw' }}
        transition={{
          duration: 1,
          ease: [0.6, 0.05, -0.01, 0.9],
        }}
        className='ml-auto  h-screen overflow-y-scroll bg-white px-10 py-10'
      >
        {children}
      </motion.div>
    </Modal>
  );
};

export default GenModal;
