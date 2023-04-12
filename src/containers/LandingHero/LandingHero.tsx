import Link from 'next/link';

import ThrindleLogo from '@/components/shared/ThrindleLogo/ThrindleLogo';

const LandingHero: React.FC = () => {
  return (
    <div className='aspect-video w-full bg-[url(/images/landing-hero-bg.png)] bg-cover bg-no-repeat'>
      <div className='bg-primary-black/80 h-full w-full text-white'>
        <header className='flex h-11 items-center justify-around'>
          <ThrindleLogo variant='white' />
          <nav className='flex h-full items-center'>
            <ul className='flex gap-6'>
              <li className='font-extrabold'>How it works</li>
              <li>Why Us</li>
              <li>Contact us</li>
            </ul>
          </nav>

          <Link href='/login' className='bg-primary-blue block'>
            Login
          </Link>
        </header>
      </div>
    </div>
  );
};

export default LandingHero;
