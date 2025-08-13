import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { fetchProducts } from "../../../services/api";

function CollectionSlider() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getProducts() {
            try {
                const response = await fetchProducts();
                console.log("API cavabı:", response);

                if (Array.isArray(response)) {
                    setProducts(response);
                } else {
                    console.error("Data gözlənilməz formatdadır:", response);
                    setProducts([]);
                }
            } catch (error) {
                console.error("Məhsullar yüklənərkən xəta:", error);
                setProducts([]);
            } finally {
                setLoading(false);
            }
        }
        getProducts();
    }, []);

    if (loading) return <div>Loading products...</div>;
    if (products.length === 0) return <div>No products found.</div>;

    return (
        <>
            <style>{`
                .swiper-pagination {
                    bottom: 10px !important;
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
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>

            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="max-w-[1250px] mx-auto h-[470px]"
                breakpoints={{
                    1280: { slidesPerView: 4 },
                    1024: { slidesPerView: 4 },
                    768: { slidesPerView: 3 },
                    640: { slidesPerView: 2 },
                    290: { slidesPerView: 1 },
                }}
            >
                {products.map((product) => (
                    <SwiperSlide className="py-4 flex items-center justify-center h-full" key={product.id}>
                        <Link to={`/product/${product.id}`}
                            className="flex flex-col items-center justify-start h-full max-w-[280px] bg-gray-100 rounded-lg p-3 w-full overflow-hidden"
                        >
                            <div className="flex items-center justify-center flex-shrink-0">
                                <img
                                    src={product.images?.[0]}
                                    alt={product.name}
                                    className="w-full h-full py-2 object-contain block mx-auto max-w-[250px] max-h-[250px] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
                                />
                            </div>

                            <div className="self-start w-full mt-2 px-5 flex-grow flex flex-col">
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
