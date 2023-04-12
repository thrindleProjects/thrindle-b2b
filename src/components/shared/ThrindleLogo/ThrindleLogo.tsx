import Image from 'next/image';
import Link from 'next/link';

const ThrindleLogo = () => {
  return (
    <div className='aspect-video w-full bg-[url(/images/landing-hero-bg.png)] bg-cover bg-no-repeat'>
      <div className='bg-primary-black/80 h-full w-full text-white'>
        <header className='flex h-11 items-center justify-around'>
          <figure className='relative h-full w-36'>
            <Image alt='Logo' src='/svg/Logo.svg' fill={true} />
          </figure>
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

export default ThrindleLogo;
