import { toast } from 'react-hot-toast';
import { IoCopyOutline } from 'react-icons/io5';

import Button from '@/components/buttons/Button';

import { copyTextToClipboard } from '@/utils/helperFunctions';

const AccountNumberContainer = ({
  acctName,
  acctNumber,
  bankName,
  amount,
  confirmPayment,
}: {
  acctName: string;
  acctNumber: string;
  bankName: string;
  amount: string;
  confirmPayment: () => void;
}) => {
  const copyText = (text: string, title: string) => {
    copyTextToClipboard(text)
      .then(() => {
        toast.success(`${title} copied successfully`);
      })
      .catch(() => {
        toast.error('Unable to copy');
      });
  };

  return (
    <>
      <div className='w-full rounded-md bg-blue-50 p-5'>
        {/* Single Account Details */}
        <div className='mb-5 flex w-full flex-row items-center justify-between'>
          <div>
            <p className='font-clash-grotesk text-sm font-normal text-gray-400'>
              Account Name:
            </p>
            <p className='font-clash-grotesk text-base font-medium text-gray-700'>
              {acctName}
            </p>
          </div>
        </div>
        {/* Single Account Details */}
        <div className='mb-5 flex w-full flex-row items-center justify-between'>
          <div>
            <p className='font-clash-grotesk text-sm font-normal text-gray-400'>
              Account Number:
            </p>
            <p className='font-clash-grotesk text-base font-medium text-gray-700'>
              {acctNumber}
            </p>
          </div>
          <IoCopyOutline
            className='text-base text-gray-500'
            onClick={() => copyText(acctNumber, 'Account Number')}
          />
        </div>
        {/* Single Account Details */}
        <div className='mb-5 flex w-full flex-row items-center justify-between'>
          <div>
            <p className='font-clash-grotesk text-sm font-normal text-gray-400'>
              Bank Name:
            </p>
            <p className='font-clash-grotesk text-base font-medium text-gray-700'>
              {bankName}
            </p>
          </div>
          <IoCopyOutline
            className='text-base text-gray-500'
            onClick={() => copyText(bankName, 'Bank Name')}
          />
        </div>
        <div className='mb-5 flex w-full flex-row items-center justify-between'>
          <div>
            <p className='font-clash-grotesk text-sm font-normal text-gray-400'>
              Amount:
            </p>
            <p className='font-clash-grotesk text-base font-medium text-gray-700'>
              N {Number(amount).toLocaleString()}
            </p>
          </div>
          <IoCopyOutline
            className='text-base text-gray-500'
            onClick={() => copyText(amount, 'Amount')}
          />
        </div>
      </div>
      <Button
        onClick={confirmPayment}
        size='base'
        variant='outline'
        className='mt-10 w-full'
      >
        Confirm Transfer
      </Button>
    </>
  );
};

export default AccountNumberContainer;
