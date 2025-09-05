import { Link } from "react-router-dom";
import fuelImg from "../../../assets/img/fuel1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Fuel() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section data-aos="fade-up" className="relative h-[80vh] max-md:h-[70vh] w-full overflow-hidden my-[30px]">
            <img
                src={fuelImg}
                alt="img"
                className="absolute inset-0 w-full h-full object-cover -z-10"
            />
            <div data-aos="fade-down" className="absolute top-[450px] max-lg:top-[60%] max-sm:top-[400px] max-md:top-[60%] bottom-0 left-0 px-[52px] max-md:px-[24px] pb-[40px] max-w-[690px] max-md:min-h-[36px] max-md:leading-[0.1px] text-white">
                <span className="block text-[90px] max-md:text-[34px] font-bold leading-[80px] max-sm:leading-[30px]">
                    Fuel your play
                </span>
                <p className="text-[15px] font-[500] tracking-[1px] max-md:tracking-[0.5px] mt-2 max-sm:mt-5 max-sm:leading-[20px]">
                    Score the leakproof Quencher® ProTour Tumbler.
                </p>
                <Link to="/fuel-shop">
                    <button className="bg-[#fff] w-[164px] h-[48px] py-[14px] px-[32px] cursor-pointer text-[15px] rounded-[7px] font-extrabold text-[#101010] border-[2px] border-[#fff] mt-[32px] tracking-[1px] hover:text-[#fff] hover:bg-[#101010] transition-all">
                        SHOP NOW
                    </button>
                </Link>
            </div>
        </section>
    );
}

export default Fuel;
