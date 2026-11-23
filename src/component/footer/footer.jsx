// src/Footer.js
import React, { useState } from 'react';
import { FaShoppingCart, FaUser , FaBars, FaTimes } from 'react-icons/fa';

const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const handleSearch = (e)=>{
        alert("form sumitted");
        preventdefault()
    }
    return (
        <footer className="bg-gray-900 text-white py-10 fixed min-h-60 md:hidden flex">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Searchbar */}
                  <div className='fixed bottom-0 left-0 right-0 flex justify-center  z-50'>
                        <button onClick={toggleMenu} className=" bg-stone-950 rounded-full  shadow-sm shadow-amber-50 w-15 h-15 justify-center focus:outline-none">
                        {/* <span className="absolute right-3 top-1/2 transform -translate-y-3 text-center text-white"> */}
                                <svg className="w-8 h-8 ml-3 text-stone-50 [text-shadow:_0_4px_8px_rgba(255_255_255_/_0.6)] dark:text-stone-50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                {/* </span> */}
                        </button>
                  </div>
                   {/* Mobile Menu */}
            <div className={`fixed bottom-0 left-0 right-0 shadow-lg lg:hidden  ${isOpen ? 'block' : 'hidden'}`}>
                <div className="flex flex-col items-center bg-stone-950 z-50 mb-15 shadow-sm shadow-amber-50 ">
                    {/* <a href="#" className="py-2 hover:text-blue-400">Home</a>
                    <a href="#" className="py-2 hover:text-blue-400">Services</a>
                    <a href="#" className="py-2 hover:text-blue-400">About</a>
                    <a href="#" className="py-2 hover:text-blue-400">Contact</a> */}
                    <div className="flex flex-col items-center mt-4 mb-2">  
                                <form onSubmit={handleSearch} className="relative w-full max-w-md">
                                <input
                                type="text"
                                placeholder="Search..."
                                className="sm:w-auto [text-shadow:_0_4px_8px_rgba(255_255_255_/_0.5)] mb-2 px-2 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <span className="absolute right-3 top-1/2 transform -translate-y-3 text-white">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </span>
                            </form>
                             {/* <button className="flex items-center bg-blue-600 px-3 py-1 rounded-md hover:bg-blue-700 mb-2">
                            <FaShoppingCart />
                        </button> */}
                        {/* <button className="flex items-center bg-blue-500 shadow-lg shadow-blue-500/50 px-3 py-1 rounded -md hover:bg-blue-500 shadow-lg shadow-blue-500/50">
                            <FaUser  />
                        </button> */}
                         </div>
                     </div>
                  </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;