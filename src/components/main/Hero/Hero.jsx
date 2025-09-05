import heroImg from "../../../assets/img/heroImg.webp";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
    const [playing, setPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef(null);

    useEffect(() => {
        AOS.init({duration: 1000,once: true,});
    }, []);

    function handleVideo() {
        const video = videoRef.current;
        playing ? video.pause() : video.play();
        setPlaying(!playing);
    }

    function handleMute() {
        const video = videoRef.current;
        video.muted = !video.muted;
        setIsMuted(video.muted);
    }

    return (
        <section className="relative w-full h-[90vh] flex items-end justify-start text-white">
            <video
                data-aos="fade-up"
                ref={videoRef}
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                playsInline
                muted={isMuted}
                loop
                autoPlay
                preload="metadata"
                poster="https://www.stanley1913.com/cdn/shop/files/preview_images/8d242b4254b74b01a84cbf001edc2451.thumbnail.0000000000.jpg?v=1753383271">
                <source
                    src="https://www.stanley1913.com/cdn/shop/videos/c/vp/8d242b4254b74b01a84cbf001edc2451/8d242b4254b74b01a84cbf001edc2451.m3u8?v=0"
                    type="application/x-mpegURL"
                    media="(min-width: 990px)"/>
                <source
                    src="https://www.stanley1913.com/cdn/shop/videos/c/vp/8d242b4254b74b01a84cbf001edc2451/8d242b4254b74b01a84cbf001edc2451.HD-720p-4.5Mbps-51853894.mp4?v=0"
                    type="video/mp4"
                    media="(min-width: 990px)"/>
                <source
                    src="https://www.stanley1913.com/cdn/shop/videos/c/vp/186c013a44ab4c00b294df7dd44d5218/186c013a44ab4c00b294df7dd44d5218.m3u8?v=0"
                    type="application/x-mpegURL"/>
                <source
                    src="https://www.stanley1913.com/cdn/shop/videos/c/vp/186c013a44ab4c00b294df7dd44d5218/186c013a44ab4c00b294df7dd44d5218.HD-1080p-3.3Mbps-51853593.mp4?v=0"
                    type="video/mp4"/>
            </video>

            <button
                onClick={handleVideo}
                className="absolute bg-gray-600 p-[5px] flex items-center justify-center bottom-4 right-4 cursor-pointer">
                {playing ? (<i className="text-[#d4d4d4] text-[10px] fa-solid fa-pause"></i>) : (<i className="text-[#d4d4d4] text-[10px] fa-solid fa-play"></i>)}
            </button>

            <button
                onClick={handleMute}
                className="absolute bg-gray-600 p-[5px] flex items-center justify-center bottom-4 right-12 cursor-pointer">
                {isMuted ? ( <i className="text-[#d4d4d4] text-[10px] fa-solid fa-volume-xmark"></i>) : (<i className="text-[#d4d4d4] text-[10px] fa-solid fa-volume-high"></i>)}
            </button>

            <div data-aos="fade-up-left" className="absolute top-[300px] max-lg:top-[40%] max-sm:top-[400px] max-md:top-[60%] bottom-0 left-0 px-[52px] max-md:px-[24px] pb-[40px] max-w-[500px] text-white">
                <img className="max-w-[187px] min-h-[69px] max-md:max-w-[200px] max-sm:max-w-[118px] max-sm:min-h-[53px] max-md:min-h-[15px] mb-3" src={heroImg} alt="imgs"/>
                <span className="block text-[64px] max-md:text-[34px] font-[600] leading-[60px] max-sm:leading-[30px] text-white">
                    Everywhere you go
                </span>
                <p className="text-[18px] font-[500] tracking-[1px] max-md:tracking-[0.5px] mt-2 max-sm:mt-5 max-sm:leading-[20px] text-white">
                    Stanley 1913 x Arsenal
                </p>
                <Link to="/hero-shop" className="bg-[#c3001e] w-[164px] h-[48px] flex items-center justify-center text-[16px] rounded-[4px] font-extrabold text-[#fff] mt-[32px] tracking-[1px] hover:bg-[#fff] hover:text-[#101010] cursor-pointer transition-all">
                    SHOP NOW
                </Link>
            </div>
        </section>
    );
}

export default Hero;