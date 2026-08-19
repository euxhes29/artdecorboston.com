import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import styles from "./Carousel.module.scss";

const Carousel = () => {
  return (
    <div className={styles.carouselWrapper}>
      <Swiper
        className="mySwiper"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={false}
        slidesPerView={"3"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        loop={false}
        breakpoints={{
          0: {
            // për pajisje të vogla (mobile)
            slidesPerView: 1,
            spaceBetween: 10, // hapësira midis slides
            centeredSlides: true,
          },
          480: {
            // pak më të mëdha (mobile landscape)
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            // tablet
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            // desktop
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <img src="/images/imitation of rocks-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/imitation of rocks-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/imitation of rocks-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/imitation of rocks-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/wall page.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/wall-page-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/relief-wall-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/fireplace decoration.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/relief-wall-3.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
