import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination"
import product1 from "@assets/images/product1.png"
import product2 from "@assets/images/product2.png"
import product3 from "@assets/images/product3.png"
import product4 from "@assets/images/product4.png"

const ProductSwiper: React.FC = () => {

    const images = [
        {id: 1, image: product1 },
        {id: 2, image: product2 },
        {id: 3, image: product3 },
        {id: 4, image: product4 },
    ]
  return (
    <div className="w-full mt-2 px-0">
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        slidesPerView={1}
        style={{
          "--swiper-pagination-color": "var(--color-primary)", //custome style for pagination bullet

        }}
      >
          {images.map((item, index) => (
        <SwiperSlide key={index}>
                <img src={item.image} className="mb-8" />
        </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default ProductSwiper;
