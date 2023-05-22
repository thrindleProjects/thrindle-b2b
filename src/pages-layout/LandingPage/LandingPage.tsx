import Footer from '@/containers/Footer';
import LandingGetStarted from '@/containers/LandingGetStarted';
import LandingHero from '@/containers/LandingHero';
import LandingHowItWorks from '@/containers/LandingHowItWorks';
import LandingNewsLetter from '@/containers/LandingNewsLetter';
import LandingReviews from '@/containers/LandingReviews';
import LandingWhatWeOffer from '@/containers/LandingWhatWeOffer';
import OurPartners from '@/containers/OurPartners';

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
        <Footer />
      </div>
    </div>
  );
};

export default LandingPageLayout;
