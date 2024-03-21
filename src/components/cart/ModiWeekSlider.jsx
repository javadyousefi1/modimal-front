// img
import modiweek1 from "../../assets/images/modiweek1.png";
import modiweek2 from "../../assets/images/modiweek2.png";
import modiweek3 from "../../assets/images/modiweek3.jfif";
import modiweek4 from "../../assets/images/modiweek4.jfif";
import modiweek5 from "../../assets/images/modiweek5.jfif";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";

import ModiWeekCart from "./ModiWeekCart";

const ModiWeekSlider = () => {
  return (
    <>
      <Swiper
        breakpoints={{
          // when window width is >= 600px
          600: {
            slidesPerView: 4,
          },
        }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        spaceBetween={68}
        slidesPerView={2}
        style={{
          "--swiper-pagination-color": "var(--color-primary)", //custome style for pagination bullet
        }}
      >
        <SwiperSlide>
          <ModiWeekCart imgSrc={modiweek1} />
        </SwiperSlide>
        <SwiperSlide>
          <ModiWeekCart imgSrc={modiweek2} />
        </SwiperSlide>
        <SwiperSlide>
          <ModiWeekCart imgSrc={modiweek3} />
        </SwiperSlide>
        <SwiperSlide>
          <ModiWeekCart imgSrc={modiweek4} />
        </SwiperSlide>
        <SwiperSlide>
          <ModiWeekCart imgSrc={modiweek5} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ModiWeekSlider;
