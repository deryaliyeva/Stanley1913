import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { fetchProducts } from "../../../services/api";
import AOS from "aos";
import "aos/dist/aos.css";

function CollectionSlider() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProducts().then(response => {
            if (Array.isArray(response)) {
                setProducts(response);
            } else {
                setProducts([]);
            }
            setLoading(false);
        }).catch(error => {
            console.error(error);
            setProducts([]);
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true, });
    }, []);

    if (loading) return (
        <div className="flex items-center justify-center my-10 h-[40vh]">
            <div className="w-20 h-20 border-4 border-dashed rounded-full animate-spin text-red-900"></div>
        </div>
    );

    return (
        <>
            <h1 data-aos="fade-right" className="text-[25px] font-bold uppercase max-w-[1250px] mx-auto my-5">
                Shop the Collection
            </h1>

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
                className="max-w-[1250px] mx-auto h-[450px] my-5"
                breakpoints={{
                    1280: { slidesPerView: 4 },
                    1024: { slidesPerView: 4 },
                    768: { slidesPerView: 3 },
                    640: { slidesPerView: 2 },
                    290: { slidesPerView: 1 },
                }}
            >
                {products.map((product) => (
                    <SwiperSlide
                        data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="1000"
                        data-aos-duration="1500"
                        className="flex items-center justify-center h-full bg-gray-100 rounded-lg" key={product.id}>
                        <Link to={`/product/${product.id}`}
                            className="h-full max-w-[280px] pb-5 overflow-hidden"
                        >
                            <div className="bg-gray-100 p-3 rounded-[8px] flex items-center justify-center w-full h-[260px]">
                                <img
                                    src={product.images?.[0]}
                                    alt={product.name}
                                    className="w-full h-full py-2 object-contain block mx-auto max-w-[250px] max-h-[250px] max-md:max-w-[350px] max-md:max-h-[300px] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
                                />
                            </div>

                            <div className="px-4 py-2 ml-4">
                                <div className="flex flex-wrap gap-1 mb-1">
                                    {product.Colors?.map((color, index) => (
                                        <button
                                            key={index}
                                            className="w-[25px] h-[25px] rounded-full border border-black"
                                            style={{ backgroundColor: color.toLowerCase() }}
                                        ></button>
                                    ))}
                                </div>

                                <p className="text-[16px] text-[#666666] tracking-[0.7px] truncate">
                                    {product.category?.name}
                                </p>

                                <div className="flex items-center gap-1 text-[#fff] bg-[#5B624C] px-2 py-[1px] rounded w-fit my-1">
                                    <i className="fa-solid fa-star text-[8px]"></i>
                                    <span className="text-xs font-[600]">New</span>
                                </div>

                                <span className="text-[15px] font-[600] text-[#101010] line-clamp-2 flex-grow">
                                    {product.name}
                                </span>

                                <div className="py-1 mt-auto">
                                    <span className="text-[14px] font-[600] text-[#101010]">
                                        $ {product.price}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default CollectionSlider;
