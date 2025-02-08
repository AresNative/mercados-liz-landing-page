import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Styles from "./Offers.module.css";

const offers = [
    {
        id: 1,
        image: "/frutas.png",
    },
    {
        id: 2,
        image: "/panaderia.png",
    },
    {
        id: 3,
        image: "/domicilio.png",
    },
    {
        id: 4,
        image: "/Carnes.png",
    },
    /*    {
           id: 5,
           image: "/proveedores.png",
           title: "",
           description: "",
       }, */
];

const OffersCarousel: React.FC = () => {
    return (
        <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000 }}
            className={Styles["swiper"]}
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
