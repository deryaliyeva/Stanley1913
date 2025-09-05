import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/navigation";

const slides = [
    {
        id: 1,
        desktopSrc: "https://uk.stanley1913.com/cdn/shop/files/071625_lp-story-desktop_1_bb0aaab2-a464-487f-bcc8-acb40dbaa258.jpg?format=pjpg&v=1752220276&width=2048",
    },
    {
        id: 2,
        desktopSrc: "https://uk.stanley1913.com/cdn/shop/files/071625_lp-story-desktop_2.jpg?format=pjpg&v=1752220276&width=2048",
    },
    {
        id: 3,
        desktopSrc: "https://uk.stanley1913.com/cdn/shop/files/071625_lp-story-desktop_3_9ab021c1-f584-446c-8f56-7cc32b30ec0c.jpg?format=pjpg&v=1752220276&width=2048",
    },
    {
        id: 4,
        desktopSrc: "https://uk.stanley1913.com/cdn/shop/files/071625_lp-story-desktop_4_24314612-019c-4594-94a9-76da59361a55.jpg?format=pjpg&v=1752220276&width=2048",
    },
];

function MessiShopSlider() {
    return (
        <div className="relative w-full h-[500px] lg:h-[700px] my-10">
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

export default MessiShopSlider;
