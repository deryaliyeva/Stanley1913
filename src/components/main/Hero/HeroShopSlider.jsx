import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/navigation";

const slides = [
    {
        id: 1,
        desktopSrc: "https://eu.stanley1913.com/cdn/shop/files/FW25_LP_Arsenal_ScrollingContent_XL_01_1.jpg",
        mobileSrc: "https://eu.stanley1913.com/cdn/shop/files/FW25_LP_Arsenal_ScrollingContent_S_01_1.jpg",
    },
    {
        id: 2,
        desktopSrc: "https://eu.stanley1913.com/cdn/shop/files/FW25_LP_Arsenal_ScrollingContent_XL_02_1.jpg",
        mobileSrc: "https://eu.stanley1913.com/cdn/shop/files/FW25_LP_Arsenal_ScrollingContent_S_02_1.jpg",
    },
    {
        id: 3,
        desktopSrc: "https://eu.stanley1913.com/cdn/shop/files/FW25_LP_Arsenal_ScrollingContent_XL_03_1.jpg",
        mobileSrc: "https://eu.stanley1913.com/cdn/shop/files/FW25_LP_Arsenal_ScrollingContent_S_03_1.jpg",
    },
    {
        id: 4,
        desktopSrc: "https://eu.stanley1913.com/cdn/shop/files/FW25_LP_Arsenal_ScrollingContent_XL_04_1.jpg",
        mobileSrc: "https://eu.stanley1913.com/cdn/shop/files/FW25_LP_Arsenal_ScrollingContent_S_04_1.jpg",
    },
];

function HeroShopSlider() {
    return (
        <div className="relative w-full h-[400px] lg:h-[600px]">
            <Swiper
                modules={[Navigation, Autoplay]} 
                loop={true}
                navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                slidesPerView={1}
                className="w-full h-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className="w-full h-full">
                        <picture className="w-full h-full">
                            <source media="(min-width:1024px)" srcSet={slide.desktopSrc} />
                            <img
                                src={slide.mobileSrc}
                                alt=""
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </picture>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <button className="custom-prev absolute top-1/2 left-4 -translate-y-1/2 z-20 text-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M15 6L9 12L15 18" stroke="#c3001e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <button className="custom-next absolute top-1/2 right-4 -translate-y-1/2 z-20 text-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M9 6L15 12L9 18" stroke="#c3001e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    );
}

export default HeroShopSlider;
