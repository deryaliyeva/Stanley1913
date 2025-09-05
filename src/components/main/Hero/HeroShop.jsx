import heroImg from "../../../assets/img/heroImg.webp";
import heroShopImg from "../../../assets/img/heroShop.jpg";
import HeroShopSlider from "./HeroShopSlider";
import HeroShopVideo from "./HeroShopVideo";

function HeroShop() {
    return (
        <>
            <section className="relative w-full h-[60vh] max-lg:h-[80vh] flex items-end justify-start text-white my-8">
                <img src={heroShopImg}
                    alt="hero shop"
                    className="absolute top-0 left-0 w-full h-full object-cover z-0" />

                <div className="absolute inset-0 bg-black/30 z-0"></div>

                <div className="absolute top-[300px] max-lg:top-[70%] max-md:top-[60%] left-0 px-[52px] max-md:px-[24px] pb-[40px] max-w-[500px] text-white z-10">
                    <img className="max-w-[156px] min-h-[57px] max-md:max-w-[200px] max-sm:max-w-[118px] max-sm:min-h-[53px] mb-3"
                        src={heroImg}
                        alt="Stanley logo" />
                    <span className="block text-[36px] max-md:text-[24px] font-[600] leading-[60px] max-sm:leading-[30px]">
                        Everywhere you go </span>
                    <p className="text-[17px] font-[500] tracking-[1px] max-md:tracking-[0.5px] mt-2 max-sm:mt-5 max-sm:leading-[20px]">
                        Where icons meet - Legacy begins. </p>
                </div>
            </section>

            <section>
                <HeroShopVideo />
            </section>
            <section className="mb-8">
                <HeroShopSlider />
            </section>
        </>
    );
}

export default HeroShop;
