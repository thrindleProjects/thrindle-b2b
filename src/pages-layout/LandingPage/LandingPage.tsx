import LandingHero from '@/containers/LandingHero';
import LandingHowItWorks from '@/containers/LandingHowItWorks/LandingHowItWorks';
import LandingReviews from '@/containers/LandingReviews/LandingReviews';
import LandingWhatWeOffer from '@/containers/LandingWhatWeOffer/LandingWhatWeOffer';
import OurPartners from '@/containers/OurPartners/OurPartners';

const LandingPageLayout: React.FC = () => {
  return (
    <div className='bg-primary-yellow/10'>
      <div className='mx-auto max-w-screen-2xl'>
        <LandingHero />
        <OurPartners />
        <LandingWhatWeOffer />
        <LandingHowItWorks />
        <LandingReviews />
      </div>
    </div>
  );
};

export default LandingPageLayout;