// src/Home.js
import React from 'react';
import ScrollCard from '../component/random/scrollcard';
import Sidebar from '../component/random/sidebar';
import SecondNav from '../component/nav/secondnav';
import { useState } from 'react';
import { FaShoppingCart, FaUser , FaFilter, FaTimes } from 'react-icons/fa';
import FilterIcon from '../assets/nav-icon/filtericon.jsx';
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/24/solid';

const imageData =[{username: "mohan",
  image:[	{src:"https://as1.ftcdn.net/v2/jpg/08/34/75/38/1000_F_834753812_nxAqPyeN0vB5PWuReNxBQMl6YU9yb2fG.jpg",
    alt : "asdfgh"
  },
  {src :"https://t3.ftcdn.net/jpg/06/08/88/12/360_F_608881224_4lhFUqMFy0gsNSZlSujQUpiOqvVHejlw.jpg",
    alt : "asdfg"  
  },
  ],
  description:"asdfghjkl",
},
{username: "rohan",
  image:[	{src:"https://as1.ftcdn.net/v2/jpg/02/43/12/34/1000_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    alt : "asdfgh"
  },
  {src :"https://t3.ftcdn.net/jpg/06/08/88/12/360_F_608881224_4lhFUqMFy0gsNSZlSujQUpiOqvVHejlw.jpg",
    alt : "asdfg"  
  },
  ],
  description:"asdfghjkl",
},
{username: "rohan",
  image:[	{src:"https://as1.ftcdn.net/v2/jpg/02/43/12/34/1000_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    alt : "asdfgh"
  },
  {src :"https://t3.ftcdn.net/jpg/06/08/88/12/360_F_608881224_4lhFUqMFy0gsNSZlSujQUpiOqvVHejlw.jpg",
    alt : "asdfg"  
  },
  ],
  description:"asdfghjkl",
},
{username: "rohan",
  image:[	{src:"https://as1.ftcdn.net/v2/jpg/02/43/12/34/1000_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    alt : "asdfgh"
  },
  {src :"https://t3.ftcdn.net/jpg/06/08/88/12/360_F_608881224_4lhFUqMFy0gsNSZlSujQUpiOqvVHejlw.jpg",
    alt : "asdfg"  
  },
  ],
  description:"asdfghjkl",
},
];

const Home = () => {
       const [isFilter, setIsFilter] = useState(false);
    
        const toggleMenu = () => {
            setIsFilter(!isFilter);
        };
    return (
        <div className="flex min-h-screen bg-gray-100">
              <SecondNav/>
              {/* Sidebar */}
              <div className="md:hidden z-60 p-1 fixed top-30 right-0 left-0">
                                      <button onClick={toggleMenu} className="text-white [text-shadow:_0_4px_8px_rgba(255_255_255_/_0.5)] focus:outline-none">
                                          {isFilter ? <FaTimes size={24} /> : <FaFilter size={24} className='text-stone-950'/>}
                                      </button>
              </div>
              <div className="hidden md:block lg:block w-1/5 lg:w-1/4 md:w-1/3">
                <Sidebar/>
              </div>
        
              {/* Main Content Area */}
              <div className="flex-grow p-4">
                {/* <h1 className="text-2xl font-bold mb-4">Main Content</h1> */}
                <br/>
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:left-10 gap-4 ">
                  {/* Grid Items */}
                  <div>
                    <ScrollCard cardImage={imageData}/>
                  </div>
                </div>
              </div>
              {/* mobile interface */}
              <div className={`md:hidden absolute ${isFilter ? 'block' : 'hidden'}`}>
              <div className=" bg-gray-800 text-white">
              <Sidebar sidebarBlock={isFilter}/>
              </div>
              </div>
            </div>
    );
};

export default Home;