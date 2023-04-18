import Image from 'next/image';
import Link from 'next/link';

import styles from './LandingGetStarted.module.scss';

import LandingHeaderDash from '@/components/LandingHeaderDash/LandingHeaderDash';

const LandingGetStarted: React.FC = () => {
  return (
    <div className='flex w-full flex-col gap-6 bg-white px-4 py-10 md:px-10 lg:grid lg:aspect-[13/8] lg:grid-cols-2 lg:grid-rows-1 lg:gap-0 lg:py-20 xl:px-16'>
      <section className='square flex w-full flex-col items-center justify-center gap-4 text-center lg:items-start lg:pr-[33%] lg:text-left'>
        <LandingHeaderDash />
        <h2 className='text-xl font-semibold md:text-xl lg:text-2xl lg:font-medium xl:text-3xl'>
          Get supplies for you organization as seamless as possible
        </h2>
        <Link
          href='/app/register'
          className='bg-primary-blue min-w-[15%] rounded-lg px-5 py-3 text-xs font-semibold text-white md:text-sm lg:text-base xl:p-4'
        >
          Get Started
        </Link>
      </section>
      <section
        className={`relative aspect-[5/4] w-full rounded-lg p-2 md:p-4 md:pr-5 lg:aspect-auto lg:h-full ${styles.mockup_wrapper}`}
      >
        <div className='relative h-full w-full'>
          <figure className='h-full w-full'>
            <Image
              src='/assets/svg/landing-get-started.svg'
              fill={true}
              alt='Get Started'
            />
          </figure>
        </div>
        <figure className='absolute left-2 top-[5%] aspect-[14/6] w-1/3 lg:left-0 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2'>
          <Image
            src='/assets/svg/landing-ball-pen.svg'
            fill={true}
            alt='Get Started'
          />
        </figure>
        <figure className='absolute bottom-[5%] right-2 aspect-[14/6] w-1/3 lg:top-[40%] lg:-translate-y-1/2'>
          <Image
            src='/assets/svg/landing-purchase-successful.svg'
            fill={true}
            alt='Get Started'
          />
        </figure>
      </section>
    </div>
  );
};

export default LandingGetStarted;
