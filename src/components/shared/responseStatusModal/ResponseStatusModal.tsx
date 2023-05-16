import Image from 'next/image';

import Button from '@/components/buttons/Button';
import { ModalHeader } from '@/components/shared/modal';

const ResponseStatusModal = ({
  onClick,
  btnText,
  bvnVariant,
  title,
  msg,
  icon_src,
}: {
  onClick: () => void;
  btnText: string;
  bvnVariant?: 'primary' | 'outline' | 'ghost' | 'light' | 'dark' | undefined;
  title: string;
  msg: string;
  icon_src: string;
}) => {
  return (
    <div className='mt-24 flex h-full w-full flex-1 flex-col items-center'>
      <Image
        src={`/assets/svg/${icon_src}.svg`}
        alt='bell'
        width={300}
        height={300}
        // className='h-30 w-30 object-contain'
      />

      <ModalHeader
        title={title}
        className='mt-5 flex flex-row items-center justify-center'
      />
      <p className='font-clash-grotesk  pt-4 text-center text-sm text-gray-500'>
        {msg}
      </p>

      <Button
        // onClick={togglePaymentModal}
        onClick={onClick}
        size='base'
        className='mt-10 w-full'
        variant={bvnVariant ? bvnVariant : 'primary'}
      >
        {btnText}
      </Button>
    </div>
  );
};

export default ResponseStatusModal;
