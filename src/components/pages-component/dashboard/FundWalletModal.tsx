import { useFormik } from 'formik';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaRegClock } from 'react-icons/fa';
import * as Yup from 'yup';

import { useTimerHook } from '@/hooks';

import Button from '@/components/buttons/Button';
import Input from '@/components/shared/Input/Input';
import { ModalHeader } from '@/components/shared/modal';
import { AccountNumberContainer } from '@/components/shared/walletCard';

import { TEXT } from '@/constant/constants';

const FundWalletModal = ({
  handleCloseModal,
}: {
  handleCloseModal: () => void;
}) => {
  const [isAccountAvailable, setIsAccountAvailable] = useState(false);
  const [startTimer, setStartTimer] = useState(false);
  // Custom timer hook
  const { isTimerCounting, minutes, seconds, resetTimer } = useTimerHook({
    initialMinutes: 40,
    startTimer,
    toggleStartTimer: setStartTimer,
    cb: () => {
      setIsAccountAvailable(false);
      toast.error('Payment details has expired. Please try again.');
    },
  });

  // useEffect(() => {
  //   if (!isTimerCounting) {
  //     setIsAccountAvailable(false);
  //   }
  // }, [isTimerCounting]);

  /**
   *
   * @function To get dynamic account number
   */
  const getAccountNumber = () => {
    setIsAccountAvailable(true);
    setStartTimer(true);
  };

  /**
   *
   * @function To confirm payment
   */

  const confirmPayment = () => {
    resetTimer();
    handleCloseModal();
  };

  const formik = useFormik({
    initialValues: { amount: '' },
    validationSchema: Yup.object({
      amount: Yup.number()
        .required('Amount field is required')
        .typeError('Must be a number')
        .min(1, 'Price must be greater than 0'),
    }),
    onSubmit: () => getAccountNumber(),
  });

  const title = !isAccountAvailable ? 'Fund Wallet' : 'Funds Transfer';
  const text = !isAccountAvailable
    ? 'How much would you like to fund your wallet with?'
    : 'Find your temporary Payment details below. This is a one time transfer';

  return (
    <div className='w-full '>
      {/* Content */}
      <div className='mt-10 w-full'>
        <ModalHeader title={title} text={text} />
        {!isAccountAvailable && (
          <div className='w-full'>
            <form className='mt-5 w-full' onSubmit={formik.handleSubmit}>
              <Input
                id='amount'
                name='amount'
                type={TEXT}
                value={formik.values.amount}
                placeholder='N 200,000'
                label='Top up amount'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.amount && formik.touched.amount}
                errorText={formik.errors.amount}
                required={true}
              />
              <Button type='submit' className='mt-14 w-full'>
                Confirm Amount
              </Button>
            </form>
            <div
              role='button'
              className='mx-auto mt-8 flex w-[35%] flex-row items-center justify-center rounded-md bg-[#EFF0F0]'
              onClick={() => {
                resetTimer();
                setIsAccountAvailable(false);
                handleCloseModal();
              }}
            >
              <p className='text-primary-blue font-clash-grotesk py-2 text-sm font-medium'>
                Cancel
              </p>
            </div>
          </div>
        )}
        {isAccountAvailable && (
          <div className='mt-5 w-full'>
            <div className='w-full'>
              <AccountNumberContainer
                acctName='Critter Vertinary'
                acctNumber='1234567898'
                bankName='United Bank of Africa (UBA)'
                amount={formik.values.amount}
                confirmPayment={confirmPayment}
              />
              <div className='mt-10 flex w-full flex-col items-center justify-center'>
                {isTimerCounting && (
                  <>
                    <p className='font-clash-grotesk pt-1 text-sm text-gray-500'>
                      Payment Details expires in
                    </p>
                    <div className='mt-5 flex w-full flex-col items-center justify-center'>
                      <FaRegClock className='text-2xl text-gray-500' />
                      <p className='font-clash-grotesk text-black/660 mt-5 font-medium'>
                        {`${minutes}:${seconds}`}{' '}
                        <span className='font-normal'>minutes left</span>
                      </p>
                      <div
                        role='button'
                        className='mt-8 flex w-[35%] flex-row items-center justify-center rounded-md bg-[#EFF0F0]'
                        onClick={() => {
                          resetTimer();
                          setIsAccountAvailable(false);
                          handleCloseModal();
                        }}
                      >
                        <p className='text-primary-blue font-clash-grotesk py-2 text-sm font-medium'>
                          Cancel Payment
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FundWalletModal;
