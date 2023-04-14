import LandingHero from '@/containers/LandingHero';
import OurPartners from '@/containers/OurPartners/OurPartners';

const LandingPageLayout: React.FC = () => {
  return (
    <div className='bg-primary-yellow/10'>
      <div className='mx-auto max-w-screen-2xl'>
        <LandingHero />
        <OurPartners />
      </div>
    </div>
  );
};

export default LandingPageLayout;
