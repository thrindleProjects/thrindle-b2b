import { Icon } from '@iconify/react';

import LandingHeaderDash from '@/components/LandingHeaderDash/LandingHeaderDash';

import { cardData } from './ui-data';

const LandingWhatWeOffer: React.FC = () => {
  return (
    <div
      className='flex flex-col gap-6 px-4 py-20 md:gap-9 md:px-10 lg:py-40 xl:gap-11 xl:px-16'
      id='why-us'
    >
      <section className='flex w-full flex-col items-center gap-4 text-center'>
        <LandingHeaderDash />
        <h2 className='text-center text-xl font-semibold md:text-xl lg:text-2xl lg:font-medium xl:text-3xl'>
          What we offer
        </h2>
        <p className='w-4/5 text-xs font-medium md:w-1/2 md:text-sm lg:w-1/2 lg:text-base lg:font-normal'>
          Here are some of the unique deals we bring to the table to ensure your
          utmost satisfaction
        </p>
      </section>

      <div className='mx-auto grid w-10/12 grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-3'>
        {cardData.map((card) => {
          return (
            <section
              key={card.id}
              className='flex flex-col items-center gap-3 text-center'
            >
              <figure className='bg-primary-yellow aspect-square w-max rounded-lg p-4 text-3xl text-white'>
                <Icon icon={card.icon} />
              </figure>
              <h4 className='text-base font-semibold sm:text-lg md:text-xl lg:text-xl lg:font-medium'>
                {card.title}
              </h4>
              <p className='text-primary-black/80 text-xs font-medium md:text-sm lg:font-normal'>
                {card.description}
              </p>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default LandingWhatWeOffer;
