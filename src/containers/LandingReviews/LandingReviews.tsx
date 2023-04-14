import LandingHeaderDash from '@/components/LandingHeaderDash/LandingHeaderDash';

const LandingReviews: React.FC = () => {
  return (
    <div className='flex flex-col items-center gap-6 bg-white px-4 pt-[45rem] md:gap-9 md:px-10 md:pt-[50rem] lg:pb-40 lg:pt-44 xl:gap-11 xl:px-16'>
      <section className='g flex w-full flex-col items-center gap-4 text-center'>
        <LandingHeaderDash />
        <h2 className='text-center text-xl font-semibold md:text-xl lg:text-2xl lg:font-medium xl:text-3xl'>
          Our customers have this to say about us
        </h2>
      </section>
    </div>
  );
};

export default LandingReviews;
