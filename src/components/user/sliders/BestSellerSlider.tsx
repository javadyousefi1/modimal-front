// components
import CartBox from "@components/user/cart/CartBox";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination"

const BestSellerSlider:React.FC = () => {
    return (<>
        <div className="w-full mt-2">
            <Swiper
                breakpoints={{
                    // when window width is >= 600px
                    600: {
                        slidesPerView: 3,
                    },
                }}
                pagination={{ clickable: true }}
                modules={[Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={2}
                style={{
                    "--swiper-pagination-color": "var(--color-primary)", //custome style for pagination bullet
                }}
            >
                <SwiperSlide>
                    <CartBox
                        title="tailored stretch"
                        desc="turn it up pants"
                        price={180}
                        colors={["#7DC3EB", "#0C0C0C", "#748C70"]}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CartBox
                        title="tailored stretch"
                        desc="turn it up pants"
                        price={180}
                        colors={["#7DC3EB", "#0C0C0C", "#748C70"]}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CartBox
                        title="tailored stretch"
                        desc="turn it up pants"
                        price={180}
                        colors={["#7DC3EB", "#0C0C0C", "#748C70"]}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CartBox
                        title="tailored stretch"
                        desc="turn it up pants"
                        price={180}
                        colors={["#7DC3EB", "#0C0C0C", "#748C70"]}
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    </>);
}

export default BestSellerSlider;