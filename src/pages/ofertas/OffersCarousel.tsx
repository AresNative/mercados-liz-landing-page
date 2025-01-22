import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Styles from "./Offers.module.css";

const offers = [
    {
        id: 1,
        image: "/merc1.jpg",
        title: "",
        description: "",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?w=800&auto=format&fit=crop",
        title: "",
        description: "",
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0?w=800&auto=format&fit=crop",
        title: "",
        description: "",
    },
    {
        id: 3,
        image: "/merc1.jpg",
        title: "",
        description: "",
    }
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
        >
            {offers.map((offer) => (
                <SwiperSlide key={offer.id}>
                    <div className={Styles["div"]}>
                        <img
                            src={offer.image}
                            className={Styles["img"]}
                        />
                        {/* Fondo semitransparente */}
                        <div className={Styles["fondo"]} />
                        {/* Contenido */}
                        <div className={Styles["contenido"]}>
                            <span className={Styles["spancont"]}>
                            </span>
                            <h3 className={Styles["h3"]}>{offer.title}</h3>
                            <p className={Styles["parf"]}>{offer.description}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default OffersCarousel;
