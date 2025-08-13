import React, { useState, useEffect } from "react";
import { fetchCategories } from "../../services/api";
import Header1Slider from './SwipHead/Header1Slider';
import flag from '../../assets/img/flags.jpg';
import logos from '../../assets/img/stanleyLogo.png';
import sidebarLogos from '../../assets/img/stanley-sidebar-logo.png';

function Header() {
    const [categories, setCategories] = useState([]);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [expandedIndex, setExpandedIndex] = useState(null);
    
    useEffect(() => {
        fetchCategories()
            .then(data => setCategories(data))
            .catch(err => console.error(err));
    }, []);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <>
            <div className="bg-[#080807] z-10 relative">
                <div className="container min-h-[44px] mx-auto px-5 flex items-center justify-between">
                    <Header1Slider />

                    <div className='text-[#fff] font-normal text-[14px] flex items-center justify-between max-lg:hidden'>
                        <div className='mr-[28px]'>
                            <a href="#">
                                <i className="fa-solid fa-crown mr-1"></i>
                                <span>Stanley Club</span>
                            </a>
                        </div>
                        <div className='mr-[28px]'>
                            <a href="#">
                                <i className="fa-regular fa-user mr-1"></i>
                                <span className='mr-2'>Sign In</span> |
                                <span className='ml-2'>Sign Up</span>
                            </a>
                        </div>
                        <div className='mr-[28px]'>
                            <a href="#">
                                <span>Support</span>
                            </a>
                        </div>
                        <div className='text-[#fff] mr-[28px] flex items-center justify-center'>
                            <a href="#">
                                <span>USA</span>
                                <i className="fa-solid fa-angle-down ml-1"></i>
                            </a>
                            <img className='max-w-[40px] ml-2' src={flag} alt="imgs" />
                        </div>
                    </div>
                </div>
            </div>

            <header className="py-4 px-[45px] max-sm:px-[35px] bg-[#fff] z-10 relative">
                <div className="container flex justify-between h-[50px] mx-auto">
                    <a href="/" className="flex items-center p-2 text-black">
                        <img className='max-w-[175px] max-sm:max-w-[130px] ml-4 max-md:ml-0' src={logos} alt="imgs" />
                    </a>
                    <nav className="relative">
                        <ul className="flex space-x-6 p-4 font-bold text-[15px] uppercase max-lg:hidden">
                            {categories.map((category) => (
                                <li key={category.id} className="relative group">
                                    <a href={`/${category.slug}`} className="cursor-pointer">{category.name}</a>
                                    <div className=" absolute left-0 top-full bg-white w-[300px] max-h-[500px] overflow-y-auto shadow-lg border border-gray-200 mt-1 rounded p-4 z-50 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-opacity duration-300 ">
                                        <ul className="flex flex-col space-y-2">
                                            {category.Subcategory?.map((sub) => (
                                                <li key={sub.id}>
                                                    <a href={`/${category.slug}/${sub.slug}`}
                                                        className="block px-2 py-1 text-gray-700 hover:text-red-600">
                                                        {sub.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="items-center flex-shrink-0 justify-center flex gap-2">
                        <div className="hidden max-lg:flex items-center">
                            <i className="fa-solid fa-magnifying-glass text-[20px] dark:text-gray-700 pl-3"></i>
                        </div>

                        <div className="relative flex items-center max-lg:hidden">
                            <i className="fa-solid fa-magnifying-glass text-gray-600 pl-3 absolute left-0"></i>
                            <input
                                type="search"
                                name="search"
                                placeholder="What are you looking for?"
                                className="pl-8 border rounded-lg border-black w-[380px] max-xl:w-[240px] max-w-full min-h-[46px] outline-none"
                            />
                        </div>

                        <div className='text-[22px] dark:text-gray-700 flex items-center justify-center'>
                            <i className="fa-solid fa-bag-shopping px-1"></i>

                            <button
                                className="lg:hidden px-1"
                                onClick={() => setSidebarOpen(true)}
                                aria-label="Open menu"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-6 h-6 dark:text-gray-800"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <div className={`fixed inset-0 z-[999] bg-black bg-opacity-50 transition-opacity duration-300
                 ${sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} 
                 onClick={() => setSidebarOpen(false)}></div>

                <aside className={`fixed top-0 right-0 bottom-0 left-0 bg-white shadow-lg p-6 overflow-y-auto transition-all duration-500 ease-in-out z-[1000]
                       ${sidebarOpen ? "translate-x-0 opacity-100 w-full" : "translate-x-full opacity-0 w-0"}`}>

                <button
                    className="mb-6 text-gray-700 font-bold text-[30px]"
                    onClick={() => setSidebarOpen(false)}
                    aria-label="Close menu" >&times; </button>

                <div className="flex items-center justify-center">
                    <img className="w-[200px] max-md:w-[100px]" src={sidebarLogos} alt="img" />
                </div>

                <nav className="p-5">
                    <ul>
                        {categories.map((category, idx) => (
                            <li key={category.id} className="mb-4">
                                <button
                                    className="w-full text-left font-semibold text-lg flex justify-between items-center"
                                    onClick={() => toggleExpand(idx)}>
                                    {category.name}
                                    <span className={`transform transition-transform duration-300 ${expandedIndex === idx ? "rotate-90" : ""}`}> ▶ </span>
                                </button>
                                {expandedIndex === idx && (
                                    <ul className="mt-2 ml-4 flex flex-col space-y-1">
                                        {category.Subcategory?.map((sub) => (
                                            <li key={sub.id}>
                                                <a href={`/${category.slug}/${sub.slug}`}
                                                    className="block px-2 py-1 text-gray-700 hover:text-red-600"> {sub.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="my-6 px-5 py-3 text-black">
                    <div className="text-[17px] flex flex-col md:flex-row items-start md:items-center justify-between">
                        <div className='mr-[28px] py-2'>
                            <a href="#">
                                <i className="fa-solid fa-crown mr-1"></i>
                                <span>Stanley Club</span>
                            </a>
                        </div>

                        <div className='mr-[28px] py-2'>
                            <a href="#">
                                <i className="fa-regular fa-user mr-1"></i>
                                <span className='mr-2'>Sign In</span> |
                                <span className='ml-2'>Sign Up</span>
                            </a>
                        </div>
                        <div className='mr-[28px] py-2'>
                            <a href="#">
                                <span>Support</span>
                            </a>
                        </div>
                        <div className='flex items-center justify-center py-2'>
                            <a href="#">
                                <span>USA</span>
                                <i className="fa-solid fa-angle-down ml-1"></i>
                            </a>
                            <img className='max-w-[40px] ml-2' src={flag} alt="imgs" />
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}

export default Header;
