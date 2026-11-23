// src/ScrollCard.js
import React from 'react';
import circleIcon from '../../assets/card-icons/circle.svg';
import ProfilePicture from './profilpic';
import ImageCard from "./imageCard";
import Message from '../../assets/card-icons/message';

const ScrollCard = (props) => {
  
  return (
    <div className="flex overflow-x-auto space-x-4 p-4 flex-col justify-center">
       {/* Card 1 */}
      {props.cardImage.map( (e) =>(
        // <div key={e.id} className="bg-white p-4 rounded-lg shadow-lg shadow-grey-500 flex flex-col m-2"><ImageCard images={e.image}/></div>
        
      <div key={e.id} className="min-w-[300px] bg-stone-950 text-white rounded-lg shadow-lg mb-4 overflow-hidden flex flex-col relative">
        <div className='flex m-1'>
        <div className='p-1'><a href='p'><ProfilePicture src={e.image} alt={e.username} size='w-8 h-8 md:w-12 md:h-12' style="border-gray-50"/></a></div>
        <div className="font-bold pl-1 pt-2 md:pt-4 [text-shadow:_0_4px_8px_rgba(255_255_255_/_0.4)]"><a href='u'>{e.username}</a></div>
        </div>
        {/* <img
          src={e.image}
          alt={e.username}
          className="w-full h-88 object-cover"
        /> */}
        <ImageCard images={e.image}/>
        
        <div className="flex justify-between items-center p-4 absolute bottom-0 left-0 right-0">
          <button className=" hover:bg-sky-500 hover:text-white outline-sky-500 text-center cursor-pointer text-sky-400 rounded-full p-4 border-8 shadow-lg shadow-blue-500/50">
           <p className="h-5 w-5 font-bold text-white text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">65</p>
          </button>
          <button className="hover:bg-sky-500 hover:text-white outline-sky-500 cursor-pointer text-sky-400 rounded-full p-4 border-8 shadow-lg shadow-blue-500/50">
          <Message color='white'/>
          </button>
        </div>
      </div>
      )
      )}
    </div>
  );
};

export default ScrollCard;