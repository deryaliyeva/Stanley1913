import fuelShopImg from "../../../assets/img/fuelShopImg.jpg";
import FuelFaq from "./FuelFaq";
import LifestyleTiles from "./LifeStyleTiles";

function FuelShop() {
    return (
        <>
            <section className="relative h-[60vh] max-md:h-[30vh] w-full overflow-hidden my-[20px]">
                <img
                    src={fuelShopImg}
                    alt="img"
                    className="absolute inset-0 w-full h-full object-cover -z-10"
                />
                <div className="absolute top-[350px] max-lg:top-[70%] max-md:top-[50%] bottom-0 left-0 px-[52px] max-md:px-[24px] pb-[40px] max-w-[690px] max-md:min-h-[36px] max-md:leading-[0.1px] text-white">
                    <span className="block text-[36px] max-md:text-[24px] font-bold leading-[60px] max-sm:leading-[25px]">
                        QUENCHER POSSIBILITIES
                    </span>
                    <p className="text-[17px] font-[500] tracking-[1px] max-md:tracking-[0.5px] mt-2 max-sm:mt-5 max-sm:leading-[15px]">
                        ProTour and FlowState™ tumblers in multiple sizes and colors.
                    </p>
                </div>
            </section>

            <section>
                <LifestyleTiles />
            </section>
            <section>
                <FuelFaq />
            </section>
        </>
    )
}

export default FuelShop
