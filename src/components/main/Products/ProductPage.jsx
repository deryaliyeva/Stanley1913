import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../../services/api.js";
import DetailsSlider from "./DetailsSlider";
import "../../../index.css";

function ProductPage({ cart, setCart }) {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (!id) return;
        setLoading(true);
        setError(null);

        fetchProductById(id)
            .then((data) => setProduct(data))
            .catch((err) => setError(err.message || "Xəta baş verdi"))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <div className="flex items-center justify-center my-10">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin text-red-700"></div>
    </div>;

    const addToCart = () => {
        const existsIndex = cart.findIndex(item => item.id === product.id);
        if (existsIndex >= 0) {
            const newCart = [...cart];
            newCart[existsIndex].quantity += quantity;
            setCart(newCart);
        } else {
            setCart([ ...cart, {id: product.id,name: product.name,price: product.price,quantity,image: product.images[0],  brand: product.brand || "Brand" } 
        ])}
    };

    return (
        <>
            <section className="pb-[48px]">
                <div className="max-w-[1250px] mx-auto flex items-center gap-8 max-xl:px-[35px] max-lg:flex-col max-lg:justify-center relative">
                    <div className="mb-[24px] flex justify-center items-center">
                        <div className="bg-gray-50 rounded-md w-[89%] min-h-[300px] max-lg:hidden">
                            <img src={product.images[0]} alt={product.name} />
                        </div>
                    </div>

                    <div className="w-[44%] max-lg:w-full flex flex-col justify-center h-[60vh]">
                        <div className="mb-[24px]">
                            <h1 className="font-bold mb-4 text-[36px] max-md:text-[20px] uppercase tracking-[1x]">
                                {product.name}
                            </h1>
                            <span className="text-[24px] mb-2 font-bold max-md:text-[16px] tracking-[1px]">$ {product.price}</span>
                        </div>

                        <div className="tracking-[1px]">
                            Color: <span>{product.Colors?.join(", ")}</span>
                        </div>

                        <div className="mt-3">
                            SKU: <span>{product.id}</span>
                        </div>

                        <div className="py-[24px] px-2 flex items-center justify-between">
                            <div>
                                QTY
                                <select
                                    className="ml-2"
                                    id="selectId"
                                    value={quantity}
                                    onChange={(e) => setQuantity(Number(e.target.value))}>
                                    {Array.from({ length: 20 }, (_, i) => (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="text-[16px] font-bold">
                                <span>$ {product.price * quantity}</span>
                            </div>
                        </div>

                        <button
                            onClick={addToCart}
                            className="bg-black border py-[14px] px-[32px] w-full cursor-pointer transition-all rounded-[5px] text-white hover:text-[#000] hover:bg-white"
                        >
                            <span className="text-[16px] font-bold uppercase">Add to Cart</span>
                        </button>
                    </div>
                </div>

                <div className="w-full mt-10 max-w-[1150px] mx-auto">
                    <DetailsSlider productId={id} />
                </div>
            </section>
        </>
    );
}

export default ProductPage;
