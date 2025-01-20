import React from 'react';
import { FaHeart } from 'react-icons/fa'; 
import { FaGasPump, FaCogs, FaUser } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';


const CarsMore = () => {
    const carData = [
        {
          id: 1,
          name: 'All New Rush',
          type: 'SUV',
          image: '/images/p6.jpg', 
          fuel: '90L',
          transmission: 'Manual',
          seats: '3 People',
          price: 99,
          originalPrice: 120,
        },
        {
          id: 2,
          name: 'CR-V',
          type: 'SUV',
          image: '/images/p9.jpg', 
          fuel: '80L',
          transmission: 'Manual',
          seats: '2 People',
          price: 80,
          originalPrice: 100,
        },
        {
          id: 3,
          name: 'All New Terlos',
          type: 'SUV',
          image: '/images/p11.jpg', 
          fuel: '70L',
          transmission: 'Automatic',
          seats: '4 People',
          price: 96,
          originalPrice: 120,
        },
        {
          id: 4,
          name: 'CR-V',
          type: 'SUV',
          image: '/images/p6.jpg', 
          fuel: '100%',
          transmission: 'Automatic',
          seats: '5 People',
          price: 120,
          originalPrice: 140,
        },
        {
            id: 5,
            name: 'MG ZX Exclusice',
            type: 'Hatchback',
            image: '/images/p11.jpg', 
            fuel: '100%',
            transmission: 'Automatic',
            seats: '5 People',
            price: 120,
            originalPrice: 140,
          },
          {
            id: 6,
            name: 'New MG ZS',
            type: 'SUV',
            image: '/images/p8.jpg', 
            fuel: '100%',
            transmission: 'Automatic',
            seats: '5 People',
            price: 120,
            originalPrice: 140,
          },
          {
            id: 7,
            name: 'MG ZX Excite',
            type: 'Hatchback',
            image: '/images/p11.jpg', 
            fuel: '100%',
            transmission: 'Automatic',
            seats: '5 People',
            price: 120,
            originalPrice: 140,
          },
          {
            id: 8,
            name: 'New MG ZS',
            type: 'SUV',
            image: '/images/p10.jpg', 
            fuel: '100%',
            transmission: 'Automatic',
            seats: '5 People',
            price: 120,
            originalPrice: 140,
          },
          {
            id: 9,
            name: 'New MG ZS',
            type: 'SUV',
            image: '/images/p10.jpg', 
            fuel: '100%',
            transmission: 'Automatic',
            seats: '5 People',
            price: 120,
            originalPrice: 140,
          },
      ];
    
      return (
        <div className="bg-gray-50 py-16">
          <div className="flex justify-between items-center px-10 mb-10">
            <h1 className="text-2xl font-semibold text-[#90A3BF]">Recomendation Car</h1>
            
          
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
            {carData.map((car) => (
              <div key={car.id} className="bg-white rounded-lg shadow-lg overflow-hidden ">
                {/* Heart Icon */}
               
               
    
                {/* Car Image */}
                <Image
                  src={car.image}
                  alt={car.name } 
                  width={300}
                  height={200}
                  className="object-contain w-full h-[180px] p"
                  
                />
                
    
                {/* Car Details */}
                <div className="p-4 pb-16">
            
                  <h2 className="text-lg font-semibold">{car.name}</h2>
                  <p className="text-sm text-gray-500">{car.type}</p>
    
                  {/* Features */}
                  <div className="flex items-center space-x-4 mt-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <FaGasPump />
                      <span>{car.fuel}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FaCogs />
                      <span>{car.transmission}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FaUser />
                      <span>{car.seats}</span>
                    </div>
                  </div>
    
                  {/* Pricing */}
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-blue-600">${car.price.toFixed(2)}/day</span>
                      <span className="text-sm text-gray-400 line-through ml-2">
                        ${car.originalPrice.toFixed(2)}
                      </span>
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                      Rent Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <Link href="/page3">
            <button className='flex items-center justify-center  w-[156px] h-[44px] rounded-3xl ml-[500px] 20 bg-[#3563E9]'>
              Show more car
            </button>
            </Link>
            
        
          </div>
        </div>
      );
  
}

export default CarsMore
