// src/ImageCard.js
import React from 'react';

const ImageCard = ({ image, onClick }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer" onClick={onClick}>
      <img src={image.src} alt={image.alt} className="w-full h-auto object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{image.alt}</h3>
      </div>
    </div>
  );
};

export default ImageCard;