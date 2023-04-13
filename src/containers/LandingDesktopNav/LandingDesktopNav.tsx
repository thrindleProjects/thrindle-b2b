import Link from 'next/link';

const LandingDesktopNav: React.FC = () => {
  return (
    <>
      <nav className='hidden h-full items-center text-white/80 lg:flex'>
        <ul className='flex items-center gap-4 font-medium'>
          <li>
            <Link href='how-it-works'>How It Works</Link>
          </li>
          <li>
            <Link href='why-us'>Why Us</Link>
          </li>
          <li>
            <Link href='contact-us'>Contact Us</Link>
          </li>
        </ul>
      </nav>

      <Link
        href='/login'
        className='bg-primary-blue hidden h-full place-items-center rounded-lg px-4 font-semibold text-white lg:grid'
      >
        Log In
      </Link>
    </>
  );
};

export default LandingDesktopNav;
