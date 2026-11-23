// src/PostForm.js
import React, { useState } from 'react';
import Dragupload from './dragupload';

const PostForm = ({ onAddPost, onClose }) => {
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (image && description) {
      onAddPost({ image, description });
      setImage('');
      setDescription('');
      onClose(); // Close the modal after adding the post
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <h2 className="text-xl font-semibold mb-2 text-center">Add Post</h2>
      {/* <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="border border-gray-300 rounded-lg p-2 w-full mb-2"
        required
      /> */}
      <Dragupload onChange={(e) => setImage(e.target.value)} value={image}/>
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border border-gray-300 rounded-lg p-2 w-full mb-2 outline-none"
        required
      />
      <div className="flex justify-between">
        <button type="submit" className="bg-stone-950 text-white rounded-lg px-4 py-2 hover:bg-gray-600 transition duration-200">
          Add Post
        </button>
        <button type="button" onClick={onClose} className="bg-gray-300 text-black rounded-lg px-4 py-2 hover:bg-gray-400 transition duration-200">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default PostForm;