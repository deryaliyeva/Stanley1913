import summerEdit from "../../../assets/img/summerEdit.webp";
import quencher from "../../../assets/img/quencher.webp";

function LifestyleTiles() {
    return (
        <section className="my-12">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
                <div>
                    <a href="#" className="block overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform mb-3">
                        <img src={summerEdit}
                            alt="imgs"
                            className="w-full h-[300px] sm:h-[350px] lg:h-[400px] object-cover" />
                    </a>
                    <h3 className="text-[#101010] px-3 py-1 uppercase font-bold text-[22px] max-md:text-[16px]">
                        Summer Edit Collection
                    </h3>
                </div>

                <div>
                    <a href="#"
                        className="block overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform mb-3" >
                        <img src={quencher}
                            alt="imgs"
                            className="w-full h-[300px] sm:h-[350px] lg:h-[400px] object-cover" />
                    </a>
                    <h3 className="text-[#101010] px-3 py-1 uppercase font-bold text-[22px] max-md:text-[16px]">
                        Leakproof quencher protour
                    </h3>
                </div>
            </div>
        </section>
    );
}
export default LifestyleTiles;
