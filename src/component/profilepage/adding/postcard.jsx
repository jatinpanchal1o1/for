// src/PostCard.js
import React from 'react';

const PostCard = ({ post }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4">
      <img src={post.image} alt="Post" className="w-full h-48 object-cover" />
      <div className="p-4">
        <p className="text-gray-700">{post.description}</p>
      </div>
    </div>
  );
};

export default PostCard;