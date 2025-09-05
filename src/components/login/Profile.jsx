import React from "react";
import { Link } from "react-router-dom";

function Profile() {
    return (
        <div className="h-[80vh] bg-gray-100 flex flex-col items-center p-6">
            <div>
            <i className="fa-solid text-purple-700 fa-circle-user text-[80px] my-5"></i>
            </div>
            <h1 className="text-[40px] font-bold mb-8 text-purple-700 text-center">Welcome, Derya</h1>
            <div className="bg-white rounded-2xl shadow-lg w-full max-w-3xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-purple-50 rounded-lg p-4 shadow hover:shadow-lg transition">
                        <h2 className="font-semibold text-lg">Hero Shop</h2>
                        <p className="text-gray-600 mt-2">Explore our hero products.</p>
                        <Link to="/hero-shop" className="text-purple-600 mt-2 inline-block font-medium">Show</Link>
                    </div>

                    <div className="bg-purple-50 rounded-lg p-4 shadow hover:shadow-lg transition">
                        <h2 className="font-semibold text-lg">Fuel Shop</h2>
                        <p className="text-gray-600 mt-2">Fuel products and offers.</p>
                        <Link to="/fuel-shop" className="text-purple-600 mt-2 inline-block font-medium">Show</Link>
                    </div>

                    <div className="bg-purple-50 rounded-lg p-4 shadow hover:shadow-lg transition">
                        <h2 className="font-semibold text-lg">Messi Shop</h2>
                        <p className="text-gray-600 mt-2">Special Messi collection.</p>
                        <Link to="/messi-shop" className="text-purple-600 mt-2 inline-block font-medium">Show</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
