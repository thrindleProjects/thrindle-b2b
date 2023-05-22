import { Icon } from '@iconify/react';
import Image from 'next/image';
import { Autoplay, Keyboard, Mousewheel, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import LandingHeaderDash from '@/components/LandingHeaderDash/LandingHeaderDash';
import { SwiperPaginationWrapper } from '@/containers/LandingReviews/styled';

import { data } from './ui-data';

function getStarRatingEmoji(stars: number): JSX.Element {
  const MINIMUM_STARS = 1;
  const MAXIMUM_STARS = 5;
  const FULL_STAR = 'material-symbols:star-rounded';
  const EMPTY_STAR = 'material-symbols:star-outline-rounded';
  // 'material-symbols:star-rounded'
  if (stars < MINIMUM_STARS || stars > MAXIMUM_STARS) {
    return (
      <>
        {Array.from({ length: MAXIMUM_STARS }, (_, i) => i + 1).map((value) => {
          return <Icon icon={EMPTY_STAR} key={`${value}${EMPTY_STAR}`} />;
        })}
      </>
    );
  }

  const intStars = Math.floor(stars);

  const fullStars = Array.from({ length: intStars }, (_, i) => i + 1).map(
    (value) => {
      return <Icon icon={FULL_STAR} key={`${value}${FULL_STAR}`} />;
    }
  );
  const emptyStars = Array.from({ length: 5 - intStars }, (_, i) => i + 1).map(
    (value) => {
      return <Icon icon={EMPTY_STAR} key={`${value}${EMPTY_STAR}`} />;
    }
  );

  const allStars = fullStars.concat(emptyStars);

  const rating = <>{...allStars}</>;
  return rating;
}

const LandingReviews: React.FC = () => {
  return (
    <div
      className='flex flex-col items-center gap-6 bg-white px-4 pb-20 pt-[45rem] md:gap-9 md:px-10 md:pt-[50rem] lg:pb-20 lg:pt-64 xl:gap-11 xl:px-16'
      id='testimonials'
    >
      <section className='flex w-full flex-col items-center gap-4 text-center'>
        <LandingHeaderDash />
        <h2 className='text-center text-xl font-semibold md:text-xl lg:text-2xl lg:font-medium xl:text-3xl'>
          Our customers have this to say about us
        </h2>
      </section>

      <div className='relative w-full sm:w-4/5 md:w-3/5 lg:w-full'>
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          slidesPerGroup={3}
          direction='vertical'
          allowTouchMove={false}
          breakpoints={{
            1024: {
              direction: 'horizontal',
              spaceBetween: 20,
              autoHeight: true,
              allowTouchMove: true,
            },
          }}
          pagination={{
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }}
          modules={[Pagination, Mousewheel, Keyboard, Autoplay]}
          className='aspect-[1/3] w-full lg:aspect-auto lg:h-auto'
          autoHeight={false}
          mousewheel={{
            forceToAxis: true,
            sensitivity: 3,
            releaseOnEdges: true,
          }}
          keyboard={{
            enabled: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
        >
          {data.map((review) => {
            return (
              <SwiperSlide
                key={review.id}
                className='aspect-square w-full overflow-y-auto'
              >
                <div className='border-primary-black/10 flex min-h-full w-full flex-col items-center justify-center gap-4 rounded-lg border p-6 lg:p-4'>
                  <div className='border-primary-black/10 flex w-full items-center gap-2 border-b pb-4'>
                    <figure className='relative aspect-square w-1/6 overflow-hidden rounded-lg lg:w-1/5'>
                      <Image src={review.logo} alt={review.title} fill={true} />
                    </figure>
                    <div className='flex flex-col'>
                      <p className='text-sm font-semibold md:text-base lg:text-xl lg:font-medium xl:text-2xl'>
                        {review.title}
                      </p>
                      <p className='text-primary-black/60 text-xs font-medium md:text-sm lg:text-base lg:font-normal'>
                        {review.label}
                      </p>
                    </div>
                  </div>
                  <p className='text-primary-black/60 pt-4 text-center text-xs font-medium md:text-sm lg:text-base lg:font-normal'>
                    {review.description}
                  </p>
                  <div className='text-primary-yellow flex flex-row items-center justify-center text-2xl'>
                    {getStarRatingEmoji(review.stars)}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <SwiperPaginationWrapper className='swiper-pagination mx-auto mt-8 flex items-center justify-center gap-3'></SwiperPaginationWrapper>
      </div>
    </div>
  );
};

export default LandingReviews;
