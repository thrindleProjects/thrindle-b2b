import React, { PropsWithChildren } from 'react';

// import { toast } from 'react-hot-toast';
import { useMediaQuery } from '@/hooks';

// import { OrderPaymentModal } from '@/components/pages-component/orders';
// import GenModal from '@/components/shared/modal/Modal';
import NavBar from '@/components/shared/NavBar/NavBar';
import NavItem from '@/components/shared/NavItem/NavItem';

// import { useAppDispatch, useAppSelector } from '@/store/store.hooks';

// import { togglePaymentModal } from '@/slices/appSlice';

const AuthenticatedLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  // const { isPaymentModalOpen } = useAppSelector((state) => state.app);
  // const dispatch = useAppDispatch();

  if (isMobile) {
    return (
      <div className='text-md flex h-screen w-screen items-center justify-center'>
        <p> This Web App can't be viewed on mobile screens.</p>
      </div>
    );
  }

  return (
    <div className='mx-auto h-full max-h-screen w-full max-w-[1560px] overflow-y-auto'>
      <NavBar />
      <NavItem />
      {children}
      {/* <GenModal
        isOpen={isPaymentModalOpen}
        handleCloseModal={() => dispatch(togglePaymentModal())}
      >
        <OrderPaymentModal handleCompleteOrder={() => toast.success('Hello')} />
      </GenModal> */}
    </div>
  );
};

export default AuthenticatedLayout;
