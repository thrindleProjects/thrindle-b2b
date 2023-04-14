import Link from 'next/link';

import styles from './LandingHero.module.scss';

import { useMediaQuery } from '@/hooks';

import LandingHeaderDash from '@/components/LandingHeaderDash';
import ThrindleLogo from '@/components/shared/ThrindleLogo';
import LandingDesktopNav from '@/containers/LandingDesktopNav';
import LandingMobileNav from '@/containers/LandingMobileNav/LandingMobileNav';

const LandingHero: React.FC = () => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <div className='h-screen w-full bg-[url(/images/landing-hero-bg.png)] bg-cover bg-no-repeat md:aspect-video md:h-auto'>
      <div
        className={`bg-primary-black/80 h-full w-full ${styles.hero_wrapper}`}
      >
        <header className='row-span-1 row-start-1 box-content flex h-10 items-center justify-between px-4 py-8 md:px-10 md:text-xs lg:h-11 lg:text-base xl:px-16'>
          <ThrindleLogo variant='white' />
          {isDesktop && <LandingDesktopNav />}
          {!isDesktop && <LandingMobileNav />}
        </header>

        <div className='row-span-1 row-start-2 mx-auto h-full'>
          <section className='flex h-full flex-col items-center justify-center gap-4 px-4 text-center text-white md:w-full md:gap-6 md:px-0 lg:gap-8'>
            <LandingHeaderDash />

            <h1 className='text-3xl font-semibold lg:text-4xl xl:text-5xl'>
              Automate your office purchase system
            </h1>

            <p className='w-full text-xs font-medium text-white/80 md:w-1/2 md:text-sm lg:text-base'>
              Streamline your procurement process and increase efficiency. Say
              goodbye to tedious manual purchasing tasks and hello to more
              productive workflows. We simplify your procurement process and
              help you save time and money
            </p>

            <Link
              href='/app/register'
              className='bg-primary-blue min-w-[15%] rounded-lg px-5 py-3 text-xs font-semibold md:text-sm lg:text-base xl:p-4'
            >
              Get Started
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
