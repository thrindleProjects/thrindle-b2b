import Image from 'next/image';
import { signOut } from 'next-auth/react';
import { ImSpinner2 } from 'react-icons/im';
import Modal from 'react-modal';

import { useDisclosure } from '@/hooks';

interface LogoutModalProps {
  isOpen: boolean;
  close: () => void;
}

type LogoutModalType = React.FC<LogoutModalProps>;

const LogoutModal: LogoutModalType = ({ isOpen, close }) => {
  const { isOpen: isLoading, open: setLoadingTrue } = useDisclosure();

  function handleSignout() {
    setLoadingTrue();
    signOut();
  }

  return (
    <Modal
      isOpen={isOpen}
      shouldCloseOnEsc
      onRequestClose={close}
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
      className='h-max w-[60%] rounded-md bg-white drop-shadow-2xl md:h-max lg:w-[28rem]'
    >
      <section className='flex flex-col items-center gap-2 px-8 py-10 text-center'>
        <div className='blue_linear_gradient mx-auto aspect-[6/5] w-3/6 rounded-full'>
          <figure className='relative h-full w-full'>
            <Image fill={true} src='/assets/svg/logout.svg' alt='Logout' />
          </figure>
        </div>
        <h5 className='text-2xl font-semibold'>
          Are you sure you want to log out?
        </h5>
        <p className='w-5/6 text-base font-medium'>
          Once logged out it will require a password for you to log back into
          your account
        </p>

        <div className='mt-4 grid w-full grid-cols-2 gap-4'>
          <button
            onClick={close}
            className='text-primary-yellow border-primary-yellow rounded-lg border px-4 py-3 text-base font-semibold '
          >
            No, Go back
          </button>
          <button
            onClick={handleSignout}
            className='bg-primary-blue border-primary-blue rounded-lg border px-4 py-3 text-base font-semibold text-white'
          >
            {isLoading ? (
              <ImSpinner2 className='mx-auto animate-spin' />
            ) : (
              'Yes, Log me out'
            )}
          </button>
        </div>
      </section>
    </Modal>
  );
};

export default LogoutModal;
