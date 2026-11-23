// src/Loading.js
import React from 'react';
import './loaderCom.css';

const Loading = ({value}) => {
  return (
    <div className="flex items-center justify-center absolute h-screen w-full bg-gray-100 top-0 left-0 right-0 bottom-0">
      <div className="loader"></div>
      <p className='text-stone-900 bottom-0 font-bold'>{value}</p>
    </div>
  );
};

export default Loading;