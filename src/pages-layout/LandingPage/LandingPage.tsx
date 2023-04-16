import LandingGetStarted from '@/containers/LandingGetStarted/LandingGetStarted';
import LandingHero from '@/containers/LandingHero';
import LandingHowItWorks from '@/containers/LandingHowItWorks/LandingHowItWorks';
import LandingNewsLetter from '@/containers/LandingNewsLetter/LandingNewsLetter';
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
        <LandingGetStarted />
        <LandingNewsLetter />
      </div>
    </div>
  );
};

export default LandingPageLayout;
