import { Link } from "react-router-dom";
import messi from "../../../assets/img/messi.jpg";
import logoPng from "../../../assets/img/messi-stanley-logo.avif";

function Messi() {
    return (
        <>
            <div className="relative max-lg:h-[193vh] h-[90vh] max-md:h-[80vh] w-full overflow-hidden">
                <img
                    src={messi}
                    alt="img"
                    className="absolute inset-0 w-full h-full object-cover -z-10"
                />
                <div className="absolute top-[250px] max-lg:top-[75%] max-sm:top-[400px] max-md:top-[60%] bottom-0 left-0 px-[52px] max-md:px-[24px] pb-[40px] max-w-[626px] max-md:max-w-[500px] max-md:min-h-[36px] max-md:leading-[0.1px] text-white">
                    <img className="max-w-[250px] min-h-[113px] max-md:max-w-[200px] max-sm:max-w-[118px] max-sm:min-h-[53px] max-md:min-h-[15px]" src={logoPng} alt="imgs" />
                    <span className="block text-[90px] max-md:text-[34px] font-bold leading-[80px] max-sm:leading-[30px]">
                        Start early. Stay late.
                    </span>
                    <p className="text-[15px] font-[500] tracking-[1px] max-md:tracking-[0.5px] mt-1 max-sm:mt-5 max-sm:leading-[20px]">
                        The new Messi x Stanley 1913 Collection just landed.
                    </p>
                    <Link to="/messi-shop">
                        <button className="bg-[#c39533] w-[164px] h-[48px] py-[14px] px-[32px] text-[15px] rounded-[7px] font-extrabold text-[#101010] mt-[32px] tracking-[1px] hover:bg-[#fff] cursor-pointer transition-all">
                            SHOP NOW
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Messi
