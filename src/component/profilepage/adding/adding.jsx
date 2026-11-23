// src/App.js
import React, { useState } from 'react';
import PostForm from './postform';
import PostCard from './postcard';
import { FaShoppingCart, FaUser , FaBars, FaTimes, FaPlus } from 'react-icons/fa';


const AddingPost = () => {
  const [posts, setPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOverlayClick = (e) => {
    // Close the modal only if the overlay is clicked
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-md">
        <a onClick={openModal} className="text-lg font-semibold cursor-pointer">
         <FaPlus size={25}/>
        </a>
        {posts.map((post, index) => (
         <PostCard key={index} post={post} />
        ))}
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black opacity-[.95]" onClick={handleOverlayClick}>
          <div className="bg-white rounded-lg p-6 shadow-lg w-auto m-2 md:w-1/2 mt-16 shadow-gray-50">
            <PostForm onAddPost={addPost} onClose={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AddingPost;