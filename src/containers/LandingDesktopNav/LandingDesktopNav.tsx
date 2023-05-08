import Link from 'next/link';

import ScrollLink from '@/components/links/ScrollLink';

const LandingDesktopNav: React.FC = () => {
  return (
    <>
      <nav className='hidden h-full items-center text-white/80 lg:flex'>
        <ul className='flex items-center gap-4 font-medium'>
          <li className='hover:text-primary-yellow'>
            <ScrollLink href='#how-it-works'>How It Works</ScrollLink>
          </li>
          <li className='hover:text-primary-yellow'>
            <ScrollLink href='#why-us'>Why Us</ScrollLink>
          </li>
          <li className='hover:text-primary-yellow'>
            <ScrollLink href='#contact-us'>Contact Us</ScrollLink>
          </li>
        </ul>
      </nav>

      <Link
        href='/app/login'
        className='bg-primary-blue hidden h-full place-items-center rounded-lg px-4 font-semibold text-white lg:grid'
      >
        Log In
      </Link>
    </>
  );
};

export default LandingDesktopNav;
