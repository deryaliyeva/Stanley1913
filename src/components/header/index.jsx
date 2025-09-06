import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { fetchCategories } from "../../services/api";
import Header1Slider from './SwipHead/Header1Slider';
import flag from '../../assets/img/flags.jpg';
import logos from '../../assets/img/stanleyLogo.png';
import sidebarLogos from '../../assets/img/stanley-sidebar-logo.png';

function Header({ cart, setCart, searchTerm, setSearchTerm }) {
    const [categories, setCategories] = useState([]); //navbar category
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [expandedCategory, setExpandedCategory] = useState(null); //subcategory
    const [mobileSearchOpen, setMobileSearchOpen] = useState(false);


    useEffect(() => {
        fetchCategories()
            .then(data => setCategories(data))
            .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        document.body.style.overflow = cartOpen || sidebarOpen ? "hidden" : "";
    }, [cartOpen, sidebarOpen]);

    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <>
                <div className="bg-[#080807] z-10 relative">
                    <div className="container min-h-[44px] mx-auto px-5 flex items-center justify-between">
                        <Header1Slider />
                        <div className='text-[#fff] font-normal text-[14px] flex items-center justify-between max-lg:hidden'>
                            <div className='mr-[28px]'><a href="#"><i className="fa-solid fa-crown mr-1"></i>Stanley Club</a></div>

                            <div className="mr-[28px]">
                                {!localStorage.getItem("token") && (
                                    <Link to="/SignIn" className="flex items-center">
                                        <i className="fa-regular fa-user mr-1"></i>
                                        Sign In | Sign Up
                                    </Link>)}

                                {localStorage.getItem("token") && (
                                    <button
                                        onClick={() => {
                                            localStorage.removeItem("token");
                                            window.location.href = "/";
                                        }}
                                        className="flex items-center">
                                        <i className="fa-regular fa-user mr-1"></i>
                                        Sign Out
                                    </button>
                                )}
                            </div>
                            <div className='mr-[28px]'><a href="#">Support</a></div>
                            <div className='text-[#fff] mr-[28px] flex items-center justify-center'>
                                <a href="#">USA <i className="fa-solid fa-angle-down ml-1"></i></a>
                                <img className='max-w-[40px] ml-2' src={flag} alt="flag" />
                            </div>
                        </div>
                    </div>
                </div>

                <header className="py-4 px-[45px] max-sm:px-[35px] bg-[#fff] z-10 relative">
                    <div className="container flex justify-between h-[50px] mx-auto">
                        <Link to="/" className="flex items-center p-2 text-black">
                            <img className='w-[150px] max-sm:w-[120px] ml-4 max-md:ml-0' src={logos} alt="logo" />
                        </Link>

                        <nav className="relative max-lg:hidden">
                            <ul className="flex space-x-6 px-4 font-bold text-[15px] uppercase">
                                {categories.map((category) => (
                                    <li key={category.id} className="relative group py-4">
                                        <span className="cursor-pointer">{category.name}</span>
                                        {category.Subcategory && (
                                            <div className="absolute left-0 top-0 z-50 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="absolute top-[45px] bg-white w-[300px] max-h-[500px] overflow-y-auto shadow-lg border border-gray-200 mt-1 rounded p-4">
                                                <ul className="flex flex-col space-y-2">
                                                    {category.Subcategory.map((sub) => (
                                                        <li key={sub.id}>
                                                            <Link
                                                                to={`/category/${category.slug}/${sub.slug}`}
                                                                className="block px-2 py-1 text-gray-700 hover:text-red-600">
                                                                {sub.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className="items-center flex-shrink-0 justify-center flex gap-2">
                            {/* Mobile search icon */}
                            <div className="lg:hidden flex items-center">
                                <button onClick={() => setMobileSearchOpen(true)}>
                                    <i className="fa-solid fa-magnifying-glass text-[20px] text-gray-700"></i>
                                </button>
                            </div>
                            <div className="relative flex items-center max-lg:hidden">
                                <i className="fa-solid fa-magnifying-glass text-gray-600 pl-3 absolute left-0"></i>
                                <input type="search" placeholder="What are you looking for?" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-8 border rounded-lg border-black w-[380px] max-xl:w-[240px] max-w-full min- outline-none" />
                            </div>

                            {/* Sidebar açmaq üçün button */}
                            <div className="lg:hidden flex items-center order-2">
                                <button onClick={() => setSidebarOpen(true)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-800">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>

                            {/* Cart ikonu */}
                            <div className='relative dark:text-gray-700 flex items-center justify-center order-1'>
                                <i className="fa-solid fa-bag-shopping px-1 cursor-pointer text-[35px] max-lg:text-[22px]" onClick={() => setCartOpen(true)}></i>
                                {totalItems > 0 && (
                                    <span className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-bold rounded-full w-4 h-4 max-lg:w-3 max-lg:h-3 max-lg:text-[8px] flex items-center justify-center">
                                        {totalItems}
                                    </span>
                                )}
                            </div>
                        </div>
                        {/* Mobile Search Sidebar */}
                        <aside className={`fixed top-0 right-0 h-full bg-white z-[1000] p-6 transition-transform duration-500
                        ${mobileSearchOpen ? "translate-x-0 w-1/2" : "translate-x-full w-0"} max-md:w-full`}>
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-bold">Search</h2>
                                <button onClick={() => setMobileSearchOpen(false)}>
                                    <i className="fa-solid fa-xmark text-2xl"></i>
                                </button>
                            </div>
                            <input
                                type="search"
                                placeholder="What are you looking for?"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full border rounded-lg border-black p-2 outline-none"
                            />
                        </aside>

                    </div>
                </header>

                {/* Sidebar özü */}
                <aside
                    className={`fixed top-0 right-0 bottom-0 bg-white shadow-lg p-6 overflow-y-auto transition-all duration-500 ease-in-out z-[1000]
                ${sidebarOpen ? "translate-x-0 opacity-100 w-full max-md:w-full" : "translate-x-full opacity-0 w-0"}`}>
                    <button className="mb-6 text-gray-700 font-bold text-[20px]" onClick={() => setSidebarOpen(false)}>
                        <i className="fa-solid fa-xmark"></i>
                    </button>

                    <div className="flex items-center justify-center mb-6">
                        <img className="w-[150px] max-md:w-[100px]" src={sidebarLogos} alt="sidebar-logo" />
                    </div>

                    <nav>
                        <ul className="flex flex-col space-y-2">
                            {categories.map((category) => (
                                <li key={category.id}>
                                    <div
                                        className="px-4 py-2 font-bold cursor-pointer flex justify-between items-center hover:text-red-600"
                                        onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}>
                                        {category.name}
                                        {category.Subcategory && <i className="fa-solid fa-chevron-down"></i>}
                                    </div>
                                    {category.Subcategory && expandedCategory === category.id && (
                                        <ul className="pl-4 mt-1 flex flex-col space-y-1">
                                            {category.Subcategory.map((sub) => (
                                                <li key={sub.id}>
                                                    <Link
                                                        to={`/category/${category.slug}/${sub.slug}`}
                                                        className="block px-2 py-1 text-gray-700 hover:text-red-600"
                                                        onClick={() => setSidebarOpen(false)}>
                                                        {sub.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="mt-10 flex items-center">
                        <div className='text-[#101010] font-[500] text-[17px]'>
                            <div className='mr-[28px] leading-10'>
                                <a href="#">
                                    <i className="fa-solid fa-crown mr-1"></i>Stanley Club
                                </a>
                            </div>
                            <div className="mr-[28px]">
                                {!localStorage.getItem("token") && (
                                    <Link to="/SignIn" className="flex items-center">
                                        <i className="fa-regular fa-user mr-1"></i>
                                        Sign In | Sign Up
                                    </Link>)}
                                {localStorage.getItem("token") && (
                                    <button
                                        onClick={() => {
                                            localStorage.removeItem("token");
                                            window.location.href = "/";
                                        }}
                                        className="flex items-center">
                                        <i className="fa-regular fa-user mr-1"></i>
                                        Sign Out
                                    </button>
                                )}
                            </div>
                            <div className='mr-[28px] leading-10'><a href="#">Support</a></div>
                            <div className='text-[#101010] flex items-center'>
                                <a href="#">USA <i className="fa-solid fa-angle-down ml-1"></i></a>
                                <img className='max-w-[40px] ml-2' src={flag} alt="flag" />
                            </div>
                        </div>
                    </div>
                </aside>
                <div
                    className={`fixed inset-0 z-[999] transition-all duration-500
                    ${cartOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"}`}
                    onClick={() => setCartOpen(false)}>
                </div>

                <aside className={`fixed top-0 right-0 h-full bg-white shadow-lg p-6 z-[1000] transition-all duration-500 ease-in-out flex flex-col
                ${cartOpen ? "translate-x-0 opacity-100 w-1/2 max-md:w-full" : "translate-x-full opacity-0 w-0"}`}>

                    <div className="flex justify-between items-center mb-6">
                        <button className="text-gray-700 cursor-pointer font-bold text-[20px]" onClick={() => setCartOpen(false)}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>

                        {cart.length > 0
                            ? (<button className="text-red-600 hover:text-red-800 font-bold text-[14px]" onClick={() => setCart([])} >Delete All </button>)
                            : null
                        }
                    </div>

                    <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

                    {cart.length === 0 ? (<p>Cart is empty</p>) :
                        (<>
                            <ul className="flex flex-col gap-4 overflow-y-auto flex-grow">
                                {cart.map((item, idx) => (
                                    <li key={idx} className="flex items-center justify-between border-b border-gray-200 pb-2">
                                        <div className="flex items-center gap-3">
                                            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                                            <div>
                                                <p className="font-bold">{item.brand}</p>
                                                <p>{item.name}</p>
                                            </div>
                                        </div>

                                        <div className="text-right flex flex-col items-end gap-1">
                                            <p>Qty: {item.quantity}</p>
                                            <p>${item.price * item.quantity}</p>
                                            <button
                                                onClick={() => {
                                                    const newCart = cart.filter((_, i) => i !== idx);
                                                    setCart(newCart);
                                                }}
                                                className="text-red-600 hover:text-red-800">
                                                <i className="fa-solid fa-trash-can"></i>
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            {/* TotalPrice */}
                            <div className="mt-6 border-t pt-4">
                                <h2 className="text-xl font-bold flex justify-between">
                                    <span>Total Price:</span>
                                    <span>${totalPrice.toFixed(2)}</span>
                                </h2>
                            </div>
                        </>)
                    }
                </aside>
        </>
    );
}

export default Header;