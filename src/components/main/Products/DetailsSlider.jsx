import { useEffect, useState } from "react";
import { fetchProductById } from "../../../services/api.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function DetailsSlider({ productId }) {
    const [variants, setVariants] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!productId) return;

        setLoading(true);
        setError(null);

        fetchProductById(productId)
            .then((productData) => {
                const variantsData = productData.images.map((img, idx) => ({
                    id: idx,
                    name: `Image ${idx + 1}`,
                    images: [img],
                }));
                setVariants(variantsData);
            })
            .catch((err) => setError(err.message || "Xəta baş verdi"))
            .finally(() => setLoading(false));
    }, [productId]);
    
    if (variants.length <= 1) return null;

    return (
        <>
            <style>{`
        .swiper-pagination {
          bottom: 0 !important;
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
                {variants.map((variant) => (
                    <SwiperSlide
                        key={variant.id}
                        className="flex items-center justify-center h-[160px]">
                        <div
                            className="bg-white p-5 rounded-lg flex items-center justify-center w-full h-full
                                shadow-[0_6px_12px_0_#0000001F]
                                hover:shadow-[0_10px_20px_0_#00000029]
                                transition-shadow duration-300">
                            <img
                                src={variant.images[0]}
                                alt={variant.name}
                                className="max-h-[140px] object-contain" />
                        </div>
                    </SwiperSlide>

                ))}
            </Swiper>
        </>
    );
}

export default DetailsSlider;
