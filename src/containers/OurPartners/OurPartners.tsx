import Image from 'next/image';

import LandingHeaderDash from '@/components/LandingHeaderDash/LandingHeaderDash';

const OurPartners: React.FC = () => {
  return (
    <div className='bg-primary-yellow/10 flex flex-col items-center gap-6 px-4 py-10 md:gap-9 md:px-10 xl:gap-11 xl:px-16'>
      <section className='g flex w-full flex-col items-center gap-4 text-center'>
        <LandingHeaderDash />
        <h2 className='text-center text-xl font-semibold md:text-xl lg:text-2xl lg:font-medium xl:text-3xl'>
          Our Partners
        </h2>
      </section>
      <div className='flex h-max w-full flex-row flex-wrap items-center justify-center gap-2 sm:gap-4 lg:h-32 lg:flex-nowrap lg:gap-10'>
        <figure className='relative h-12 w-4/12 flex-shrink-0 sm:h-20 lg:h-full lg:w-44 lg:flex-shrink'>
          <Image
            src='/assets/svg/boardroom_apartments_logo.svg'
            alt='Boardroom Apartments Logo'
            fill={true}
          />
        </figure>
        <figure className='relative h-12 w-3/12 flex-shrink-0 sm:h-28 lg:h-full lg:w-36 lg:flex-shrink'>
          <Image
            src='/assets/svg/critters_logo.svg'
            alt='Critters Logo'
            fill={true}
          />
        </figure>
        <figure className='relative h-12 w-4/12 flex-shrink-0 sm:h-20 lg:h-full lg:w-40 lg:flex-shrink'>
          <Image
            src='/assets/svg/city_church_logo.svg'
            alt='City Church Logo'
            fill={true}
          />
        </figure>
        <figure className='relative h-12 w-3/12 flex-shrink-0 sm:h-20 lg:h-full lg:w-40 lg:flex-shrink'>
          <Image
            src='/assets/svg/amali_logo.svg'
            alt='Amali Logo'
            fill={true}
          />
        </figure>
        <figure className='relative aspect-square h-12 w-2/12 flex-shrink-0 sm:h-20 lg:h-full lg:flex-shrink'>
          <Image src='/assets/svg/vfd_logo.svg' alt='VFD Logo' fill={true} />
        </figure>
      </div>
    </div>
  );
};

export default OurPartners;
