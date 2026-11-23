// src/SearchBar.js
import React from 'react';
const SearchBar = (props) => {
  return (
    <div className="hidden md:flex items-center space-x-4">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search..."
          className=""
        // className="w-md px-2 py-1 rounded-md border [text-shadow:_0_4px_8px_rgba(255_255_255_/_0.5)] border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white">
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </span>
      </div>
    </div>
  );
};

export default SearchBar;