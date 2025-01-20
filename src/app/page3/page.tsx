import React from 'react'
import Navbar from '@/components/Navbar'
import Hero4 from '../page3HeroSection/page'
// import Hero from '@/components/Hero'

const Page3 = () => {
  return (
    <div>
      <Navbar/>
      <div className="w-[1440px] h-[1600px] top-[124px] ">
      {/* second div start */}
      <div className="grid grid-cols-[360px,1fr] w-[1440px] h-auto mx-auto top-[124px] gap-2">
        <div className="h-auto border-r border-gray-300">
          <div className="p-4">
            <div className="mb-8">
              <h2 className="text-[#90A3BF] text-sm font-semibold">Type</h2>
              <div className="space-y-2 mt-4">
                {[
                  "Sport (10)",
                  "SUV (12)",
                  "MPV (16)",
                  "Sedan (20)",
                  "Coupe (14)",
                  "Hatchback (14)",
                ].map((type) => (
                  <label key={type} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-500 rounded"
                    />
                    <span className="text-sm text-gray-700">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-[#90A3BF] text-sm font-semibold">Capacity</h2>
              <div className="space-y-2 mt-4">
                {[
                  "2 Person (10)",
                  "4 Person (14)",
                  "6 Person (12)",
                  "8 or More (16)",
                ].map((capacity) => (
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
        {/* third div end  */}

        {/* third div start */}

        {/* Right Box */}
        <div className="gap-4 border rounded-lg shadow-md w-full mx-auto">
          <Hero4/>
          
          


          {/* uaha se cal karo  */}
          {/* <Hero/> */}

          {/* <h1>hello world this is me shuaib ali baat who </h1> */}

          {/* <HeroPage2/>
          <CarsMore/>
          <Footer/> */}

        {/* <Home/> */}
        {/* <CarsMore/> */}
          
          






          {/* end */}


        </div>
      </div>
      {/* third div end */}

      {/* main end div  */}
    </div>


      
      
    </div>
  )
}

export default Page3
