import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import brands from "../data/BrandData.jsx";

function FavoritSlider() {
    return (
        <div className="py-[48px] px-4 max-w-[1280px] mx-auto">
            <h2 className="text-[32px] text-[#101010] font-bold uppercase tracking-[1.8px] pb-5">
                Stanley Favorites
            </h2>

            <style>{`
                .swiper-pagination {
                    bottom: 0px !important;
                    top: auto !important;
                    display: flex !important;
                    justify-content: center;
                    width: 100%;
                }
                .swiper-pagination-bullet {
                    background-color: #9ca3af;
                    opacity: 1;
                }
                .swiper-pagination-bullet-active {
                    background-color: #000000;
                }
                @media (min-width: 1024px) {
                    .swiper-pagination {
                        display: none !important;
                    }
                }
            `}</style>


            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="max-w-[1250px] mx-auto h-[200px]"
                breakpoints={{
                    1280: { slidesPerView: 4 },
                    1024: { slidesPerView: 4 },
                    768: { slidesPerView: 3 },
                    640: { slidesPerView: 2 },
                    290: { slidesPerView: 1 },
                }}
            >
                {brands.map((brand) => (
                    <SwiperSlide className="flex items-center justify-center h-full" key={brand.id}>
                        <Link
                            to={`/brand/${brand.slug}`}
                            className="flex flex-col items-center justify-center pb-5 h-full max-w-[300px] overflow-hidden"
                        >
                            <div className="bg-gray-100 p-3 rounded-[8px] flex items-center justify-center w-full flex-grow">
                                <img
                                    src={brand.logo}
                                    alt={`${brand.name} logo`}
                                    className="max-h-[120px] object-contain"
                                />
                            </div>
                            <span className="text-base font-bold mt-1 text-center px-2 text-[#101010]">{brand.name}</span>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default FavoritSlider;
