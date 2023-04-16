import { Icon } from '@iconify/react';
import { FormEvent, useState } from 'react';

import styles from './LandingNewsLetter.module.scss';
const LandingNewsLetter: React.FC = () => {
  const [email, setEmail] = useState<{ email: string }>({ email: '' });
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail({ email: e.target.value });
  };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div
      className='bg-white px-4 py-4 md:px-10 lg:py-10 xl:px-16'
      id='contact-us'
    >
      <section
        className={`${styles.newsletter_container} flex flex-col gap-6 rounded-lg px-4 py-14 text-center`}
      >
        <h3 className='cursor-default text-sm font-semibold md:text-base lg:text-xl xl:text-2xl'>
          {'Be the first to know about our special offers and discount sales'
            .split('')
            .map((item, index) => {
              return (
                <span
                  key={index}
                  className='hover:text-primary-yellow transition-colors'
                >
                  {item}
                </span>
              );
            })}
        </h3>
        <p className='text-xs font-medium md:text-sm lg:text-base'>
          Enter your email address to subscribe
        </p>
        <div className='mx-auto w-full lg:w-2/3 xl:w-1/2'>
          <form
            className='text-primary-black/60 relative flex w-full flex-col gap-3 text-xs md:text-sm'
            onSubmit={handleOnSubmit}
          >
            <div className='relative w-full'>
              <label
                className='absolute inset-y-0 left-4 my-auto h-max text-lg xl:text-xl'
                htmlFor='email'
              >
                <Icon icon='ph:envelope' />
              </label>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Enter Email Address'
                onChange={handleOnChange}
                value={email.email}
                className='outline-primary-blue placeholder:text-primary-black/60 w-full rounded-lg border-none py-3 pl-10 text-xs font-semibold sm:py-4 sm:pl-8 md:pl-10 md:text-sm lg:py-6 lg:pl-14 lg:pr-32 lg:text-base'
              />
            </div>
            <button
              type='submit'
              className='bg-primary-yellow static flex items-center justify-center rounded-lg p-3 text-xs font-semibold text-white hover:bg-opacity-90 sm:p-4 md:text-sm lg:absolute lg:right-2 lg:top-1/2 lg:h-4/5 lg:-translate-y-1/2 lg:text-base'
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
//  inset-y-0 right-[2.5px] my-auto h-[80%] rounded-lg px-2 font-light text-white hover:bg-opacity-90 sm:right-1 sm:px-4 sm:font-semibold lg:absolute lg:px-6
export default LandingNewsLetter;
