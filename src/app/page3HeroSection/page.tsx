import React from 'react';
import Link from 'next/link';

const Hero4 = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Card */}
        <div className=" w-[492px] h-[360px] top-[32px]   bg-[#3563E9] p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-white w-[272px] mb-2">
          Sports car with the best design and acceleration
          </h2>
          <p className="text-white mb-6 w-[284px]">
          Safety and comfort while driving a 
          futuristic and elegant sports car
          </p>
          
          <img
            src="/images/p5.jpg"
            alt="Car"
            className="mt-[18px] ml-4 bg-[#3563E9] w-[380px] h-[120px]   object-cover"
          />
         
          

           
          <div className='grid grid-cols-3 gap-4'> 
          <div className='flex  items-center justify-center mt-10 w-[132px] h-[108px]   bg-[#3563E9] mr-[30px]'>
            <img src="/images/p5.jpg" alt="Car" 
            className=' w-[116px] h-[36px]'/>
            

          </div>        
          {/* secnd div handle */}

          <div className='flex  items-center justify-center mt-10 w-[132px] h-[108px]   bg-[#3563E9] mr-[30px]'>
            <img src="/images/handle.jpeg" alt="Car" 
            className=' w-[148px] h-[124px]'/>
            

          </div>   
          {/* third div handle */}

          <div className='flex  items-center justify-center mt-10 w-[132px] h-[108px]   bg-[#3563E9] mr-[30px]'>
            <img src="/images/handle1.jpeg" alt="Car" 
            className=' w-[148px] h-[124px]'/>
            
          </div>   

           

          {/* grid div end  */}
          </div>
          
        </div>
        
        

        {/* Right Card */}
        <div className="w-[492px] h-[508px]   bg-[#FFFFFF] p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-[#1A202C] w-[220x] h-[72px] top-[24px] left-[24px] gap-8 ">
            Nissan GT -R
          </h2>
          <p className="text-[#596780]  w-[444px] h-[120px] top-[128px]  text-lg left-[24px] ">
          NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2  w-[444px] h-[72px] top-[280px]  gap-2'>
            <div className='w-[200px] h-[72px] gap-[16px]'>
              <h4 className='text-[#90A3BF]'> Type Car  &nbsp;&nbsp;&nbsp;&nbsp;<span className='text-[#596780]'>Sport</span></h4>  &nbsp;&nbsp;&nbsp;&nbsp; <h1 className='text-[#90A3BF]'> Steering &nbsp;&nbsp;&nbsp;&nbsp;<span className='text-[#596780]'>Manual</span></h1>
              
               


            </div>
            <div className='w-[200px] h-[72px] gap-[16px]'>
              <h4 className='text-[#90A3BF]'> Capacity &nbsp;&nbsp;&nbsp;&nbsp;<span className='text-[#596780]'>2Person</span></h4>  &nbsp;&nbsp;&nbsp;&nbsp; <h1 className='text-[#90A3BF]'>Gasoline &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='text-[#596780]'>70L</span></h1>

            </div>
          </div>
          
          <div className="p-4 flex mt-12 items-center gap-4">
       <div className="flex items-center justify-between w-full">
       <h1 className="font-bold text-lg sm:text-xl lg:text-2xl">
        $80.00 / <span className="text-gray-500 text-sm lg:text-base">day $100.00</span>
      </h1>
      </div>
       <Link href={"/payment"}>
      <button className="bg-[#3563e9] hover:bg-[#264ac6] transition-all p-3 sm:p-4 px-6 sm:px-10 text-nowrap  text-white rounded-md w-full max-w-[180px] text-center">
        Rent Now
      </button>
    </Link>
  </div>
</div>
 
  
 <div className=' w-[1016px] h-[452px] top-[572px] left-[392px] rounded-lg '>
 
  
  <div className='w-[80px] mr-20 h-[28px]  text-[#1A202C] text-lg'> <h1> Reviews 
  <span className='w-[44px] h-[28px] gap-8 bg-[#3563E9] text-white py-2 px-2 ml-5'>13</span>
  </h1>
  
  </div>
  
  
  </div>

  
 </div>


        {/* Uaha se stade karo  */}
    
      
    </section>
  );
};

export default Hero4;
