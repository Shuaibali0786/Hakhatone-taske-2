import React from 'react';
import { FaHeart, FaBell, FaSearch, FaGasPump, FaCogs, FaUser, FaCog } from 'react-icons/fa';
import { VscSettings } from 'react-icons/vsc';
import Image from 'next/image';
// import { FaGasPump, FaCogs, FaUser } from 'react-icons/fa';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="bg-white py-4 px-4 md:px-8 shadow-md flex items-center justify-between">
      <div className="text-xl md:text-2xl font-bold text-blue-600">
        MORENT
      </div>

      <div className="relative w-full lg:w-[492px] h-[44px] mx-4 lg:mx-8">
        <input
          type="text"
          placeholder="Search something here"
          className="w-full h-full border rounded-full py-2 px-4 pl-12 pr-12 text-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{ borderRadius: '70px' }}
          aria-label="Search bar"
        />
        
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
          <FaSearch className="text-lg" />
        </div>
        
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
          <VscSettings className="text-lg" />
        </div>
      </div>
   
      <div className="flex items-center space-x-4">
        
        <Link href="/favorites" aria-label="Favorites">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center">
            <FaHeart className="text-gray-600 text-lg md:text-xl" />
          </div>
        </Link>

     
        <Link href="/notifications" aria-label="Notifications">
          <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center">
            <FaBell className="text-gray-600 text-lg md:text-xl" />
            <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </div>
        </Link>

       
        <Link href="/settings" aria-label="Settings">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center">
            <FaCog className="text-gray-600 text-lg md:text-xl" />
          </div>
        </Link>

     
        <Link href="/profile" aria-label="Profile">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 overflow-hidden cursor-pointer">
            <Image
              src="/images/shuaib .jpg" 
              alt="User Profile Picture"
              width={40}
              height={40}
              className="object-cover"
              priority
            />
          </div>
        </Link>
      </div>
      

      
    </div>
    
  );
};





const Hero = () => {
  return (

    // main div.
    <div className='w-[1440px] h-[1600px] top-[124px] bg-[#F6F7F9]'>

   
    <div className="grid grid-cols-2 w-[1440px] h-auto mx-auto top-[124px] gap-4">
    
      <div className="w-[360px] h-auto border-r border-gray-300">
       
        
        <div className="p-4">
       
          <div className="mb-8">
            <h2 className="text-[#90A3BF] text-sm font-semibold">Type</h2>
            <div className="space-y-2 mt-4">
              {["Sport (10)", "SUV (12)", "MPV (16)", "Sedan (20)", "Coupe (14)", "Hatchback (14)"].map((type) => (
                <label key={type} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-500 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Capacity Section */}
          <div className="mb-8">
            <h2 className="text-[#90A3BF] text-sm font-semibold">Capacity</h2>
            <div className="space-y-2 mt-4">
              {["2 Person (10)", "4 Person (14)", "6 Person (12)", "8 or More (16)"].map((capacity) => (
                <label key={capacity} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-500 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">{capacity}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Section */}
          <div>
            <h2 className="text-[#90A3BF] text-sm font-semibold">Price</h2>
            <input
              type="range"
              className="w-full mt-4 cursor-pointer"
              min="0"
              max="100"
            />
            <h1 className="text-[#596780] text-lg mt-2">Max. $100.00</h1>
          </div>
        </div>
      </div>


      {/* second div div */}
   

      <div className="w-[486px] h-[132px] flex flex-col md:flex-row items-center gap-4 mt-8 bg-white p-6 rounded-lg shadow-md">
          {/* Pick-Up Section */}
          <div className="flex-1">
            <h3 className="text-lg font-medium mb-2">Pick-Up</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm mb-1">Locations</label>
                <select className="w-full border rounded-md p-2">
                  <option>Select your city</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1">Date</label>
                <input
                  type="date"
                  className="w-full border rounded-md p-2"
                />
                
              </div>
              <div>
                <label className="block text-sm mb-1">Time</label>
                <input
                  type="time"
                  className="w-full border rounded-md p-2"
                />
              </div>
            </div>
          </div>

          {/* Swap Button */}
          <div>
            <button className="bg-blue-500 text-white p-4 rounded-full shadow-md hover:bg-blue-600">
              ↔
            </button>
          </div>

          {/* Drop-Off Section */}
          <div className="flex-1">
            <h3 className="text-lg font-medium mb-2">Drop-Off</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm mb-1">Locations</label>
                <select className="w-full border rounded-md p-2">
                  <option>Select your city</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1">Date</label>
                <input
                  type="date"
                  className="w-full border rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Time</label>
                <input
                  type="time"
                  className="w-full border rounded-md p-2"
                />
              </div>
            </div>
          </div>
        </div>
        

      </div>


   




    {/* main end div  */}
    </div>


  
  );
};


// App Component

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;

   















