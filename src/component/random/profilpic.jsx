// src/ProfilePicture.js
import React from 'react';

const ProfilePicture = ({ src, alt, size, style }) => {
  return (
    <div className={`flex items-center justify-cente rounded-full cursor-pointer shadow-sm shadow-amber-50 ${size}`}>
      <img
        src={src}
        alt={alt}
        className={`rounded-full object-cover border-2 ${style} ${size}`}
      />
    </div>
  );
};

export default ProfilePicture;