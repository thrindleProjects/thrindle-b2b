import LandingHero from '@/containers/LandingHero';

const LandingPageLayout = () => {
  return (
    <div className='bg-primary-yellow/10'>
      <div className='mx-auto max-w-screen-2xl'>
        <LandingHero />
      </div>
    </div>
  );
};

export default LandingPageLayout;
