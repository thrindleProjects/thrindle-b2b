import styled from 'styled-components';

export const SwiperPaginationWrapper = styled.div`
  &.swiper-pagination {
    position: relative;
    transform: none;
    bottom: 0;
    top: 0;
    left: 0;
    width: 50%;
    overflow: hidden;
    .swiper-pagination-bullet {
      background: linear-gradient(
          0deg,
          rgba(6, 93, 167, 0.08),
          rgba(6, 93, 167, 0.08)
        ),
        #ffffff;
      border-radius: 8px;
      opacity: 1;
      flex: 1;
      transition: all 0.5s;
      &.swiper-pagination-bullet-active {
        background: #065da7;
        flex: 2;
      }
    }
  }
`;
