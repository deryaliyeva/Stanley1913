import { useRef, useState } from "react";

function HeroShopVideo() {
    const [playing, setPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef(null);

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
        <>
        <section className="relative w-full h-[90vh] flex items-end justify-start text-white my-10">
            <video
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
                    media="(min-width: 990px)" />
                <source
                    src="https://www.stanley1913.com/cdn/shop/videos/c/vp/8d242b4254b74b01a84cbf001edc2451/8d242b4254b74b01a84cbf001edc2451.HD-720p-4.5Mbps-51853894.mp4?v=0"
                    type="video/mp4"
                    media="(min-width: 990px)" />
                <source
                    src="https://www.stanley1913.com/cdn/shop/videos/c/vp/186c013a44ab4c00b294df7dd44d5218/186c013a44ab4c00b294df7dd44d5218.m3u8?v=0"
                    type="application/x-mpegURL" />
                <source
                    src="https://www.stanley1913.com/cdn/shop/videos/c/vp/186c013a44ab4c00b294df7dd44d5218/186c013a44ab4c00b294df7dd44d5218.HD-1080p-3.3Mbps-51853593.mp4?v=0"
                    type="video/mp4" />
            </video>

            <button
                onClick={handleVideo}
                className="absolute bg-gray-600 p-[5px] flex items-center justify-center bottom-4 right-4 cursor-pointer">
                {playing ? <i className="text-[#d4d4d4] text-[10px] fa-solid fa-pause"></i> : <i className="text-[#d4d4d4] text-[10px] fa-solid fa-play"></i>}
            </button>

            <button
                onClick={handleMute}
                className="absolute bg-gray-600 p-[5px] flex items-center justify-center bottom-4 right-12 cursor-pointer">
                {isMuted ? <i className="text-[#d4d4d4] text-[10px] fa-solid fa-volume-xmark"></i> : <i className="text-[#d4d4d4] text-[10px] fa-solid fa-volume-high"></i>}
            </button>

        </section>
    </>
    )
}
export default HeroShopVideo;

