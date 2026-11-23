// src/InstagramProfile.js
import React, {useState} from 'react';
import ProfilePicture from '../../component/random/profilpic';
import { FaShoppingCart, FaUser , FaBars, FaTimes, FaPlus } from 'react-icons/fa';
import ImageCard from './imageModel/imgcard';
import Modal from './imageModel/imgmodel';
import AddingPost from '../../component/profilepage/adding/adding';

const InstagramProfile = () => {

    const [isFollower, setisFollwer] = useState("13213651");
    const [isCardopen, setisCardopen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const items = [
        { id: 1, src: 'https://as1.ftcdn.net/v2/jpg/02/43/12/34/1000_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg', alt: 'Image 1' },
        { id: 2, src: 'https://t3.ftcdn.net/jpg/06/08/88/12/360_F_608881224_4lhFUqMFy0gsNSZlSujQUpiOqvVHejlw.jpg', alt: 'Image 2' },
        { id: 3, src: 'https://as1.ftcdn.net/v2/jpg/02/43/12/34/1000_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg', alt: 'Image 3' },
        { id: 4, src: 'https://t3.ftcdn.net/jpg/06/08/88/12/360_F_608881224_4lhFUqMFy0gsNSZlSujQUpiOqvVHejlw.jpg', alt: 'Image 4' },
        { id: 5, src: 'https://as1.ftcdn.net/v2/jpg/02/43/12/34/1000_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg', alt: 'Image 5' },
        { id: 6, src: 'https://t3.ftcdn.net/jpg/06/08/88/12/360_F_608881224_4lhFUqMFy0gsNSZlSujQUpiOqvVHejlw.jpg', alt: 'Image 6' },
        { id: 7, src: 'https://as1.ftcdn.net/v2/jpg/02/43/12/34/1000_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg', alt: 'Image 6' },
        { id: 8, src: 'https://t3.ftcdn.net/jpg/06/08/88/12/360_F_608881224_4lhFUqMFy0gsNSZlSujQUpiOqvVHejlw.jpg', alt: 'Image 6' },
        { id: 9, src: 'https://as1.ftcdn.net/v2/jpg/02/43/12/34/1000_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg', alt: 'Image 6' },
        { id: 10, src: 'https://t3.ftcdn.net/jpg/06/08/88/12/360_F_608881224_4lhFUqMFy0gsNSZlSujQUpiOqvVHejlw.jpg', alt: 'Image 6' },
        { id: 11, src: 'https://as1.ftcdn.net/v2/jpg/02/43/12/34/1000_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg', alt: 'Image 6' },
        { id: 12, src: 'https://t3.ftcdn.net/jpg/06/08/88/12/360_F_608881224_4lhFUqMFy0gsNSZlSujQUpiOqvVHejlw.jpg', alt: 'Image 6' },
        { id: 13, src: 'https://as1.ftcdn.net/v2/jpg/02/43/12/34/1000_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg', alt: 'Image 6' },
        { id: 14, src: 'https://t3.ftcdn.net/jpg/06/08/88/12/360_F_608881224_4lhFUqMFy0gsNSZlSujQUpiOqvVHejlw.jpg', alt: 'Image 6' },
      ];


      const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
      };

      const onHandel=()=>{
        isCardopen? false: setisCardopen(true);
      }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg w-full min-h-screen">
        <div className='bg-stone-950 p-6 text-white'>
        <div className="flex flex-col items-center">
          <ProfilePicture className="cursor-pointer" size="w-25 h-25"/>
          <h2 className="text-2xl font-bold">Jane Doe</h2>
          <p className="text-gray-400">Photographer | Traveler</p>
          <p className="text-sky-200">janedoe@example.com</p>
          <div className='flex justify-between p-3 w-40'>
            <p className='text-gray-700'>Bcounts</p>
          <button className='rounded-full text-white bg-stone-900 text-md'>{isFollower}</button>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold">About Me</h3>
          <p className="text-gray-400">
            Passionate photographer capturing moments around the world. 
            Follow my journey!
          </p>
        </div>
        <div className='flex justify-around pt-4'>
        <a href='setting'><button className='p-2 rounded-lg text-white bg-stone-800 text-md hover:bg-stone-700 cursor-pointer'>Edit profile</button></a>
        <a href=''><button className='p-2 rounded-lg text-white  bg-stone-800 text-md hover:bg-stone-700 cursor-pointer'>Share profile</button></a>
        </div>
        </div>
        <div className="mt-4 p-1">
          <div className="flex justify-center">
          {/* <a  className="text-lg font-semibold cursor-pointer"><FaPlus size={25}/></a> */}
          <AddingPost/>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {/* {items.map((item) => (
                <div key={item.id} className="bg-white shadow rounded-lg overflow-hidden">
                <img src={item.src} alt={item.alt} className="w-full h-auto" />
                </div>
            ))} */}
            {items.map((image, index) => (
            <div className="bg-white shadow rounded-lg m-2 overflow-hidden">
              
                <ImageCard key={index} image={image} onClick={() => openModal(image)} />
            
              <Modal isOpen={isModalOpen} onClose={closeModal} image={selectedImage} />
            </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramProfile;