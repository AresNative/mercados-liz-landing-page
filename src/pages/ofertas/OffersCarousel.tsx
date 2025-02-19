import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Styles from "./Offers.module.css";

const offers = [
    {
        id: 1,
        image: "/frutas.webp",
        alt: ""
    },
    {
        id: 2,
        image: "/panaderia.webp",
        alt: ""
    },
    {
        id: 3,
        image: "/domicilio.webp",
        alt: ""
    },
    {
        id: 4,
        image: "/Carnes.webp",
        alt: ""
    },
];

const OffersCarousel: React.FC = () => {
    return (
        <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            className={Styles["swiper"]}
            lazyPreloadPrevNext={1}
        >
            {offers.map((offer) => (
                <SwiperSlide key={offer.id} className={Styles["swiper-slide"]}>
                    <div className={Styles["div"]}>
                        <img
                            src={offer.image}
                            className={Styles["img"]
                            }
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
export default OffersCarousel;
