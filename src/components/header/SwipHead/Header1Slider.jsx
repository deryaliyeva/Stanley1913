import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

export default function Header1Slider() {
  const swiperRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleAutoplay = () => {
    if (swiperRef.current) {
      isPlaying ? swiperRef.current.autoplay.stop() : swiperRef.current.autoplay.start();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative flex items-center gap-3 w-full max-w-[45%] max-lg:max-w-[90%]">
      <button onClick={toggleAutoplay} className="w-6 h-6 flex items-center justify-center text-white text-xs">
        {isPlaying ? (<i className="fa-solid fa-pause"></i>) : (<i className="fa-solid fa-play"></i>)}
      </button>

      <Swiper
        modules={[Navigation, Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop
        navigation
        speed={600}
        spaceBetween={10}
        slidesPerView={1}
        className="w-full">
        <SwiperSlide>
          <div className="text-center text-white font-bold text-[12px] py-2 max-sm:text-[10px]">
            <a href="#" className="underline">SHOP NOW: MESSI X STANLEY 1913</a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center text-white font-bold text-[12px] py-2 max-sm:text-[10px]">
            <a href="#" className="underline">SUMMER EDIT: SHOP NOW</a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center text-white font-bold text-[12px] py-2 max-sm:text-[10px]">
            <a href="#" className="underline">FREE SHIPPING OVER $50</a>
          </div>
        </SwiperSlide>
      </Swiper>

      <style>{`
            .swiper-button-prev,
            .swiper-button-next {
            width: 20px !important;
            height: 40px !important;
            top: 100% !important;
            transform: translateY(-40%) !important;
            color: white !important;
            z-index: 10 !important;
            }
      
            .swiper-button-prev::after,
            .swiper-button-next::after {
            font-size: 13px !important;
            color: white !important;
            }
        `}</style>
    </div>
  );
}