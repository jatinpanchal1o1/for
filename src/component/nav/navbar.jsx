// src/Navbar.js
import React, { useState } from 'react';
import { FaShoppingCart, FaUser , FaBars, FaTimes } from 'react-icons/fa';
import Profileimage from "../random/profilpic";
import SearchBar from './searchbar';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSignup, setSignup] = useState(true);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

const handleSearch = (e)=>{
    alert("form sumitted");
    preventdefault()
}
    return (
        <nav className="bg-stone-950 text-white sticky top-0 z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="text-lg font-bold [text-shadow:_0_4px_8px_rgba(255_255_255_/_0.5)]"><a href='/'>FriendOnRent</a></div>
                    {/* <div className="hidden md:flex space-x-4">
                        <a href="/" className="hover:text-blue-400">Home</a>
                        <a href="/service" className="hover:text-blue-400">Services</a>
                        <a href="/about" className="hover:text-blue-400">About</a>
                        <a href="/contact" className="hover:text-blue-400">Contact</a>
                    </div> */}
                    <div className="hidden md:flex items-center space-x-4">
                    <form onSubmit={handleSearch} className="relative w-full max-w-md">
                        <input
                        type="text"
                        placeholder="Search..."
                        className="w-md px-2 py-1 rounded-md border [text-shadow:_0_4px_8px_rgba(255_255_255_/_0.5)] border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </span>
                    </form>
                    </div>
                    <div className='hidden md:flex items-center space-x-4'>
                    {/* <a href='/login'><button className="flex items-center cursor-pointer bg-blue-500 px-3 py-1 rounded-md hover:bg-blue-500 shadow-lg shadow-blue-500/50">
                            <FaUser  />
                        </button>
                        </a> */}
                         {isSignup ?(
                            <>
                            <a href='/chat' className=''><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                          </svg></a>
                            <a href='/profile'><Profileimage className="cursor-pointer" size="w-8 h-8" style="border-gray-50"/></a>
                          </>
                        ):(
                            <a href='/login'><button className="flex items-center mr-2 cursor-pointer bg-blue-500 shadow-lg shadow-blue-500/50 px-3 py-1 rounded-full hover:bg-blue-500">
                                <FaUser />
                            </button>
                            </a>
                    )}
                    </div>
                    <div className={isSignup ? "md:hidden flex w-20 justify-between" : "md:hidden flex justify-between"}>
                        {isSignup ?(
                            <>
                            <a href='/chat' className=''><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                          </svg></a>
                            <a href='/profile'><Profileimage className="cursor-pointer" size="w-8 h-8"/></a>
                          </>
                        ):(
                            <a href='/login'><button className="flex items-center mr-2 cursor-pointer bg-blue-500 shadow-lg shadow-blue-500/50 px-3 py-1 rounded-full hover:bg-blue-500">
                                <FaUser />
                            </button>
                            </a>
                    )}
                        {/* <button onClick={toggleMenu} className="text-white [text-shadow:_0_4px_8px_rgba(255_255_255_/_0.5)] focus:outline-none">
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button> */}
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden  ${isOpen ? 'block' : 'hidden'}`}>
                <div className="flex flex-col items-center bg-stone-950 z-50">
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
            <hr/>
        </nav>
    );
};

export default Navbar;