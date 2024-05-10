// img
import modiweek1 from "@assets/images/modiweek1.png";
import modiweek2 from "@assets/images/modiweek2.png";
import modiweek3 from "@assets/images/modiweek3.jfif";
import modiweek4 from "@assets/images/modiweek4.jfif";
import modiweek5 from "@assets/images/modiweek5.jfif";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";

import ModiWeekCart from "../cart/ModiWeekCart";

const ModiWeekSlider:React.FC = () => {

  const ModiWeekSliderList = [
    { id: 1, imgSrc: modiweek1, day: "Sunday" },
    { id: 2, imgSrc: modiweek2, day: "Monday" },
    { id: 3, imgSrc: modiweek3, day: "Tuesday " },
    { id: 4, imgSrc: modiweek4, day: "Wednesday " },
    { id: 5, imgSrc: modiweek5, day: "Thursday " },
  ]

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
        {ModiWeekSliderList.map(item => <SwiperSlide key={item.id}>
          <ModiWeekCart key={item.id} imgSrc={item.imgSrc} day={item.day} />
        </SwiperSlide>)}
      </Swiper>
    </>
  );
};

export default ModiWeekSlider;
