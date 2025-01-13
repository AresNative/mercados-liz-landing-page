import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Styles from "./Offers.module.css";

const offers = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop",
        title: "Fresh Produce Week",
        description: "Up to 40% off on fresh fruits and vegetables",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?w=800&auto=format&fit=crop",
        title: "Dairy & Eggs Special",
        description: "Buy 2 Get 1 Free on all dairy products",
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0?w=800&auto=format&fit=crop",
        title: "Bulk Buy Savings",
        description: "25% off when you buy in bulk",
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
                            alt={offer.title}
                            className={Styles["img"]}
                        />
                        {/* Fondo semitransparente */}
                        <div className={Styles["fondo"]} />
                        {/* Contenido */}
                        <div className={Styles["contenido"]}>
                            <span className={Styles["spancont"]}>
                                Limited Time Offer
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
