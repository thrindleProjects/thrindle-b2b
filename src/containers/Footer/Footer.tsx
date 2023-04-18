import ScrollLink from '@/components/links/ScrollLink';
import ThrindleLogo from '@/components/shared/ThrindleLogo/ThrindleLogo';

const Footer: React.FC = () => {
  return (
    <div
      className='bg-primary-grey text-primary-black px-4 py-4 md:px-10 lg:py-10 xl:px-16'
      id='contact-us'
    >
      <footer className='flex w-full flex-col gap-5'>
        <div className='border-primary-black/10 flex w-full flex-col gap-4 border-b pb-5 lg:flex-row lg:justify-between lg:gap-0'>
          <section className='flex flex-col items-center gap-2 text-center lg:w-1/5 lg:items-start lg:gap-4 lg:text-left'>
            <ThrindleLogo variant='blue' />
            <h5 className='text-primary-black/60 w-4/5 text-xs font-medium md:text-sm lg:w-full lg:text-base'>
              Thrindle provides the platform to shop from major markets online
              and at your convenience
            </h5>
          </section>
          <section className='flex flex-col justify-end gap-4 text-center text-xs font-medium md:text-sm lg:flex-row lg:text-left lg:text-base'>
            <nav className='flex w-full flex-col items-center gap-4 lg:w-1/3 lg:items-start'>
              <h6 className='text-primary-black/60 font-semibold'>
                Quick Links
              </h6>
              <ul className='text-primary-black flex flex-col gap-2 font-medium'>
                <li>
                  <ScrollLink href='#how-it-works'>How It Works</ScrollLink>
                </li>
                <li>
                  <ScrollLink href='#testimonials'>Testimonials</ScrollLink>
                </li>
                <li>
                  <a
                    href='https://thrindle.com'
                    rel='noreferrer'
                    target='__blank'
                  >
                    Thrindle for <br /> personal shopping
                  </a>
                </li>
              </ul>
            </nav>
            <nav className='flex flex-col items-center gap-4 lg:items-start'>
              <h6 className='text-primary-black/60 w-max font-semibold'>
                Social Links
              </h6>
              <ul className='text-primary-black flex flex-col gap-2 font-medium'>
                <li>
                  <a
                    href='https://web.facebook.com/thrindle/'
                    rel='noreferrer'
                    target='__blank'
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.instagram.com/thrindle/'
                    rel='noreferrer'
                    target='__blank'
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href='https://twitter.com/thrindle_ng'
                    rel='noreferrer'
                    target='__blank'
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.linkedin.com/company/thrindle/'
                    rel='noreferrer'
                    target='__blank'
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </nav>
            <nav className='flex flex-col items-center gap-4 lg:items-start'>
              <h6 className='text-primary-black/60 font-semibold'>Contacts</h6>
              <ul className='text-primary-black flex w-max flex-col gap-2 font-medium'>
                <li>
                  <a
                    href='mailto:info@thrindle.com'
                    rel='noreferrer'
                    target='__blank'
                  >
                    info@thrindle.com
                  </a>
                </li>
                <li>
                  <a
                    href='tel: +234-810-056-9319'
                    rel='noreferrer'
                    target='__blank'
                  >
                    +234-810-056-9319
                  </a>
                </li>
              </ul>
            </nav>
          </section>
        </div>
        <p className='w-full py-4 text-center  text-xs md:text-sm lg:text-base'>
          <span>All rights reserved</span>
          <span> &copy; </span>
          <span>Thrindle Services Ltd</span>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
