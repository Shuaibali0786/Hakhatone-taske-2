import React from 'react';
import { FaHeart, FaBell, FaSearch, FaCog } from 'react-icons/fa';
import { VscSettings } from 'react-icons/vsc';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="bg-white py-4 px-4 md:px-8 shadow-md flex items-center justify-between">

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
    </header>
  );
};

export default Navbar;
