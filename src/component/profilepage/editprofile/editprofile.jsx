// src/EditProfile.js
import React, { useEffect, useState } from 'react';
import ProfilePicture from '../../random/profilpic';
import Dragupload from '../adding/dragupload';
import Loading from '../../random/loaderCom';
import PhoneNumInput from './inputphone';


const EditProfile = () => {
  const [photo, setPhoto] = useState('');
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [aadhaarOrPan, setAadhaarOrPan] = useState('');
  const [AreaAddress, setAreaAddress] = useState('');
  const [image, setImage] = useState('');


  const [posts, setPosts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoader, setisLoader] = useState(false);
    const [isUpdate, setisUpdate] = useState('')
  
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setisUpdate("Update . . .");
      setisLoader(true);
    // Handle form submission logic here
    console.log({ photo, name, link, aboutMe, phoneNumber, aadhaarOrPan, AreaAddress });
  };

  useEffect(() => {
      // setLoader(true);
      const timer = setTimeout(() => {
        setisLoader(false);
        setisUpdate('')
      }, 1000); // Simulate a 1-second loading time
      return () => clearTimeout(timer) // Cleanup the timer on unmount
    }, [handleSubmit]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-stone-950 p-4">
        {isLoader ? (
        <Loading value={isUpdate}/>
      ) : (
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md shadow-gray-50">
        <h2 className="text-2xl font-bold mb-4 text-center">Edit Profile</h2>
        
        <div className="mb-4 flex justify-center">
          {/* <label className="block text-sm font-medium text-gray-700">Profile Photo URL</label> */}
          <div onClick={openModal}><ProfilePicture style="border-stone-950" size="w-25 h-25"/></div>
          {/* <input
            type="text"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="Enter photo URL"
          /> */}
        </div>
        {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black opacity-[.95]" onClick={handleOverlayClick}>
          <div className="bg-white rounded-lg p-6 shadow-lg w-auto m-2 md:w-1/2 mt-16 shadow-gray-50">
          <Dragupload onChange={(e) => setImage(e.target.value)} value={image} onClose={closeModal}/>
          </div>
        </div>
        )}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 outline-none"
            placeholder={name}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Link</label>
          <input
            type="url"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 outline-none"
            placeholder={link}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">About Me</label>
          <textarea
            value={aboutMe}
            onChange={(e) => setAboutMe(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 outline-none"
            placeholder={aboutMe}
            rows="4"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            value={phoneNumber}
            maxLength={Math.max(min.toString().length, max.toString().length + 1)}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 outline-none"
            placeholder={phoneNumber}
            onBlur={e => {
                if (value && !isNaN(value))
                  setValue(Math.min(max, Math.max(min, value)));
              }}
          />
          {/* <PhoneNumInput/> */}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Aadhaar or PAN</label>
          <input
            type="text"
            value={aadhaarOrPan}
            onChange={(e) => setAadhaarOrPan(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 outline-none"
            placeholder={aadhaarOrPan}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Area Address</label>
          <textarea
            value={AreaAddress}
            onChange={(e) => setAreaAddress(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 outline-none"
            placeholder={AreaAddress}
            rows="4"
          />
        </div>

        <button type="submit" className="w-full bg-stone-950 text-white rounded-lg px-4 py-2 hover:bg-gray-700 transition duration-200">
          Save Changes
        </button>
      </form>
    )}
    </div>
  );
};

export default EditProfile;