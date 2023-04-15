import Image from 'next/image';
import { useRouter } from 'next/router';

import Button from '@/components/buttons/Button';
import { ModalHeader } from '@/components/shared/modal';

const OrderSuccessModal = () => {
  const router = useRouter();
  return (
    <div className='mt-24 flex h-full w-full flex-1 flex-col items-center'>
      <Image
        src='/assets/svg/order_received.svg'
        alt='bell'
        width={300}
        height={300}
        // className='h-30 w-30 object-contain'
      />

      <ModalHeader
        title='Order Recieved'
        className='mt-5 flex flex-row items-center justify-center'
      />
      <p className='font-clash-grotesk  pt-4 text-center text-sm text-gray-500'>
        We have gotten the list and we will be responding with a quote in less
        than 5 hours, check your order page to monitor update and make payment
      </p>

      <Button
        onClick={() => {
          router.push('/app/orders');
        }}
        size='base'
        className='mt-10 w-full'
      >
        Proceed To Orders
      </Button>
    </div>
  );
};

export default OrderSuccessModal;
