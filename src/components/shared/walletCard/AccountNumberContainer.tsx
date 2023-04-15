import Button from '@/components/buttons/Button';

const AccountNumberContainer = ({
  acctName,
  acctNumber,
  bankName,
}: {
  acctName: string;
  acctNumber: string;
  bankName: string;
}) => {
  return (
    <>
      <div className='w-full rounded-md bg-blue-50 p-5'>
        {/* Single Account Details */}
        <div className='mb-5 w-full'>
          <p className='font-clash-grotesk text-sm font-normal text-gray-400'>
            Account Name:
          </p>
          <p className='font-clash-grotesk text-base font-medium text-gray-700'>
            {acctName}
          </p>
        </div>
        {/* Single Account Details */}
        <div className='mb-5 w-full'>
          <p className='font-clash-grotesk text-sm font-normal text-gray-400'>
            Account Number:
          </p>
          <p className='font-clash-grotesk text-base font-medium text-gray-700'>
            {acctNumber}
          </p>
        </div>
        {/* Single Account Details */}
        <div className='mb-5 w-full'>
          <p className='font-clash-grotesk text-sm font-normal text-gray-400'>
            Bank Name:
          </p>
          <p className='font-clash-grotesk text-base font-medium text-gray-700'>
            {bankName}
          </p>
        </div>
      </div>
      <Button size='base' className='mt-10 w-full'>
        Proceed To Wallet
      </Button>
    </>
  );
};

export default AccountNumberContainer;
