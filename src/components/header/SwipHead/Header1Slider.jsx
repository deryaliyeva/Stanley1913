import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';


function swiperSlider() {
    const swiperRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleToggle = () => {
        isPlaying ? swiperRef.current?.autoplay?.stop() : swiperRef.current?.autoplay?.start();
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="flex items-center justify-between gap-5 relative w-full max-w-[45%] max-lg:max-w-[90%]">
        <button
          onClick={handleToggle}
          className="text-[10px] text-white w-[20px] h-[40px] flex items-center p-2"
        >
          {isPlaying ? (
            <i className="fa-solid fa-pause"></i>
          ) : (
            <i className="fa-solid fa-play"></i>
          )}
        </button>
      
        <div className="w-full">
          <Swiper
            className='w-full'
            modules={[Navigation, Autoplay]}
            speed={600}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            navigation={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              swiper.autoplay.stop();
            }}
          >
            <SwiperSlide>
              <div className="text-center flex items-center justify-center text-[12px] max-sm:text-[10px] font-bold text-[#fff] py-2">
                <a className='underline' href="#">SHOP NOW: MESSI X STANLEY 1913</a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center flex items-center justify-center text-[12px] max-sm:text-[10px] font-bold text-[#fff] py-2">
                <a className='underline' href="#">SUMMER EDIT: SHOP NOW</a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="text-center flex items-center justify-center text-[12px] max-sm:text-[10px] font-bold text-[#fff] py-2">
                <a className='underline' href="#">FREE SHIPPING OVER $50</a>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>

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
    )
}

export default swiperSlider
