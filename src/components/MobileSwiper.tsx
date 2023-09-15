import { styled } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type Props = {
  type: number;
};

// 1 : 연픽
// 2 : 증기침입 위해성 평가
// 3 : 맛집 검색기
// 4 : 훠궈 소스 백과사전

const MobileSwiper = ({ type }: Props) => {
  const settings = {
    spaceBetween: 30,
    modules: [Autoplay, Pagination, Navigation],
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  };

  return (
    <MainContainer>
      <SwiperContainer>
        {type === 3 && (
          <>
            <Swiper {...settings}>
              <SwiperSlide>
                <img
                  src="/assets/png/img-michelin-1.png"
                  alt="display"
                  className="img"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/assets/png/img-michelin-2.png"
                  alt="display"
                  className="img"
                />
              </SwiperSlide>
            </Swiper>
          </>
        )}
        {type === 4 && (
          <>
            <Swiper {...settings}>
              <SwiperSlide>
                <img
                  src="/assets/png/img-hotpot-1.png"
                  alt="display"
                  className="img"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/assets/png/img-hotpot-2.png"
                  alt="display"
                  className="img"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/assets/png/img-hotpot-3.png"
                  alt="display"
                  className="img"
                />
              </SwiperSlide>
            </Swiper>
          </>
        )}
      </SwiperContainer>
      <img src="/assets/png/img-phone.png" alt="display" className="frame" />
    </MainContainer>
  );
};

export default MobileSwiper;

const MainContainer = styled.div`
  .frame {
    width: 14.7rem;
    height: 29rem;
    z-index: 5;
    position: relative;
    top: -24.5rem;
    left: -0.4rem;
  }
`;

const SwiperContainer = styled.div`
  width: 13.5rem;
  background-color: #fafafa;
  height: 24rem;
  border-radius: 1rem;

  .img {
    border-radius: 2rem;
  }
`;
