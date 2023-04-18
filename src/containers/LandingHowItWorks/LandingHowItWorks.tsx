import { Icon } from '@iconify/react';

import styles from './LandingHowItWorks.module.scss';

import LandingHeaderDash from '@/components/LandingHeaderDash/LandingHeaderDash';

import { cardData } from './ui-data';

const LandingHowItWorks: React.FC = () => {
  return (
    <div
      className='bg-primary-blue relative flex flex-col items-center gap-6 px-4 pb-40 pt-20 text-white md:gap-9 md:px-10 xl:gap-11 xl:px-16'
      id='how-it-works'
    >
      <section className='flex w-full flex-col items-center gap-4 text-center'>
        <LandingHeaderDash />
        <h2 className='text-center text-xl font-semibold md:text-xl lg:text-2xl lg:font-medium xl:text-3xl'>
          How It Works
        </h2>
        <p className='w-4/5 text-xs font-medium md:w-1/2 md:text-sm lg:w-1/2 lg:text-base lg:font-normal'>
          Thrindle helps you in procurement of whatever you need for your
          organization and you can achieve that in this few stepsmd
        </p>
      </section>

      <div
        className={`absolute inset-x-0 top-full grid -translate-y-[12.5%] grid-cols-1 gap-6 lg:-translate-y-1/2 lg:grid-cols-4 ${styles.cards_wrapper} mx-auto`}
      >
        {cardData.map((card) => {
          return (
            <section
              key={card.id}
              className='text-primary-black border-primary-black/10 mx-auto flex max-w-xs cursor-default flex-col items-center justify-center gap-4 rounded-lg border bg-white px-2 py-5 text-center lg:aspect-auto lg:px-4 lg:py-4 xl:px-8 xl:py-8'
            >
              <figure className='text-primary-blue aspect-square w-max rotate-[19.52deg] text-3xl'>
                <Icon icon={card.icon} />
              </figure>
              <h4 className='tesxt-sm font-semibold sm:text-base md:text-lg lg:font-medium '>
                {card.title}
              </h4>
              <p className='text-primary-black/60 text-xs font-medium md:text-sm'>
                {card.description}
              </p>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default LandingHowItWorks;
