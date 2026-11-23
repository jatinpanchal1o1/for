// src/Modal.js
import React, {useEffect, useState} from 'react';
import Message from '../../../assets/card-icons/message';

const Modal = ({ isOpen, onClose, image }) => {
  if (!isOpen) return null;

  const [isCount, setisCount] = useState(0)

  const handleOverlayClick = (e) => {
    // Close the modal only if the overlay is clicked
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
   
  const onCount = (e) =>{
      e.preventDefault();
      setisCount(isCount + 1);
  }

  // useEffect((e)=>{
       
  // },[isCount])
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-stone-950 opacity-[.24]" onClick={handleOverlayClick}>
      <div className="bg-stone-950 rounded-lg p-2 max-w-lg">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">
          &times;
        </button>
        <img src={image.src} alt={image.alt} className="w-full h-auto rounded" />
        <h2 className="mt-2 mb-2 text-lg font-semibold text-amber-50">{image.alt}</h2>
        <div className="flex justify-between items-center">
          <button className=" hover:bg-sky-500 hover:text-white outline-sky-500 text-center cursor-pointer text-sky-400 rounded-full p-4 border-8 shadow-lg shadow-blue-500/50" onClick={onCount}>
           <p className="h-5 w-5 font-bold text-white text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">{isCount}</p> 
          </button>
          <button className="hover:bg-sky-500 hover:text-white outline-sky-500  cursor-pointer text-sky-400 rounded-full p-4 border-8 shadow-lg shadow-blue-500/50">
          <Message color='white'/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;