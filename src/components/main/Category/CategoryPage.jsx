import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProductsBySlug } from "../../../services/api.js";

function CategoryPage({ cart, setCart, searchTerm }) {
    const { mainSlug, subSlug } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [visibleCount, setVisibleCount] = useState(6);

    useEffect(() => {
        fetchProductsBySlug(mainSlug, subSlug).then((data) => {
            setProducts(data);
            setLoading(false);
        });
    }, [mainSlug, subSlug]);

    if (loading) return (
        <div className="flex items-center justify-center my-10 h-[90vh]">
            <div className="w-20 h-20 border-4 border-dashed rounded-full animate-spin text-red-900"></div>
        </div>
    );
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm?.toLowerCase() || "")
    );
    const visibleProducts = filteredProducts.slice(0, visibleCount);

    const handleAddToCart = (product) => {
        const cartItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            brand: product.Brands?.name,
            category: product.category?.name,
            image: product.images[0],
            quantity: 1
        };

        const existingIndex = cart.findIndex(item => item.id === product.id);
        if (existingIndex >= 0) {
            const newCart = [...cart];
            newCart[existingIndex].quantity += 1;
            setCart(newCart);
        } else {
            setCart([...cart, cartItem]);
        }
    };

    return (
        <div className="container mx-auto p-5">
            <h1 className="text-[28px] font-bold mb-5 text-center">
                Welcome to {subSlug || mainSlug} category!
            </h1>

            {visibleProducts.length === 0 ? (
                <p className="text-center text-gray-500">No products match your search.</p>
            ) : (
                <div className="flex flex-wrap justify-center gap-6">
                    {visibleProducts.map((product) => (
                        <div key={product.id}
                            className="bg-gray-50 rounded-xl p-4 hover:shadow-lg transition flex flex-col w-[300px] h-[480px]">
                            <div className="w-full h-64 bg-gray-50 rounded-md mb-4 flex items-center justify-center overflow-hidden">
                                <img
                                    src={product.images[0]}
                                    alt={product.name}
                                    className="w-full h-full object-contain" />
                            </div>

                            <div className="flex items-center gap-3 mb-2">
                                {product.Colors?.map((color, index) => (
                                    <span key={index}
                                        className="w-6 h-6 rounded-full border border-gray-400"
                                        style={{ backgroundColor: color }}>
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-2 mb-2">
                                {product.Size?.map((size, index) => (
                                    <span
                                        key={index}
                                        className="px-2 py-1 border border-gray-400 rounded text-sm text-gray-700">
                                        {size}
                                    </span>
                                ))}
                            </div>

                            <p className="text-sm text-gray-600 mb-1">
                                {product.category?.name} • {product.Brands?.name}
                            </p>

                            <h2 className="font-semibold text-gray-800 mb-1 line-clamp-1">
                                {product.name}
                            </h2>

                            <p className="text-gray-900 font-bold mb-3">
                                $ {product.price}
                            </p>

                            <button
                                onClick={() => handleAddToCart(product)}
                                className="mt-auto px-4 py-2 bg-black text-white rounded-lg hover:bg-white hover:text-black border transition">
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {visibleCount < filteredProducts.length && (
                <div className="text-center mt-8">
                    <button
                        onClick={() => setVisibleCount(prev => prev + 6)}
                        className="px-6 py-2 bg-black border font-bold uppercase text-white rounded-lg hover:bg-white hover:text-black cursor-pointer transition">
                        Show More
                    </button>
                </div>
            )}
        </div>
    );
}

export default CategoryPage;
