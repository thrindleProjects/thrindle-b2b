import { ModalHeader } from '@/components/shared/modal';
import { AccountNumberContainer } from '@/components/shared/walletCard';

const FundWalletModal = () => {
  return (
    <div className='w-full '>
      {/* Content */}
      <div className='mt-10 w-full'>
        <ModalHeader
          title='Fund Wallet'
          text='An account has been set up for you, make a transfer and it will automatically reflect in your wallet once it is seen'
        />
        <div className='mt-5 w-full'>
          <AccountNumberContainer
            acctName='Critter Vertinary'
            acctNumber='1234567898'
            bankName='United Bank of Africa (UBA)'
          />
        </div>
      </div>
    </div>
  );
};

export default FundWalletModal;
