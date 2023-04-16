import { ModalHeader } from '@/components/shared/modal';
import { AccountNumberContainer } from '@/components/shared/walletCard';

import { FundsModalProps } from '@/utils/appTypes';

const FundWalletModal: React.FC<FundsModalProps> = ({ text, title }) => {
  return (
    <div className='w-full '>
      {/* Content */}
      <div className='mt-10 w-full'>
        <ModalHeader title={title} text={text} />
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
