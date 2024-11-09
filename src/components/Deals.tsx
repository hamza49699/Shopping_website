import React from 'react'
import Image from 'next/image'

const Deals = ({ id }: { id: string }) => {
  return (
    <div id={id}>
      {/* First Section - Brand Names */}
      <section className="flex flex-wrap justify-center space-x-12 py-8 bg-gray-200">
        <p className="text-2xl font-semibold tracking-wider uppercase text-gray-800 mb-4 md:mb-0">CHANEL</p>
        <p className="text-2xl font-semibold tracking-wider lowercase text-gray-800 mb-4 md:mb-0">LOUIS VUITTON</p>
        <p className="text-2xl font-semibold tracking-wider uppercase text-gray-800 mb-4 md:mb-0">PRADA</p>
        <p className="text-2xl font-semibold tracking-wider lowercase text-gray-800 mb-4 md:mb-0">Calvin Klein</p>
        <p className="text-2xl font-semibold tracking-wider uppercase text-gray-800 mb-4 md:mb-0">DENIM</p>
      </section>

      {/* Second Section - Deals of the Month */}
      <section className="bg-white py-16 px-8">
        <div className="container mx-auto flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl font-bold mb-4">Deals Of The Month</h2>
            <p className="text-gray-600 mb-6">
              Winter is coming so this is best time to get this 
              hot dresses to enjoy your winters safely
            </p>
            
            <button className="bg-black text-white py-3 px-6 rounded shadow-md hover:bg-gray-800">
              Buy Now
            </button>

            <div className="mt-8">
              <p className="text-lg font-semibold mb-4">Hurry, Before It&rsquo;s Too Late!</p>
              {/* Countdown Timer */}
              <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
                <div className="bg-gray-100 p-4 text-center rounded">
                  <p className="text-2xl font-bold">02</p>
                  <p className="text-sm text-gray-600">Days</p>
                </div>
                <div className="bg-gray-100 p-4 text-center rounded">
                  <p className="text-2xl font-bold">06</p>
                  <p className="text-sm text-gray-600">Hr</p>
                </div>
                <div className="bg-gray-100 p-4 text-center rounded">
                  <p className="text-2xl font-bold">05</p>
                  <p className="text-sm text-gray-600">Mins</p>
                </div>
                <div className="bg-gray-100 p-4 text-center rounded">
                  <p className="text-2xl font-bold">30</p>
                  <p className="text-sm text-gray-600">Sec</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Carousel of Deals */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
              {/* Card 1 */}
              <div className="bg-gray-100 rounded-lg p-4 w-full sm:w-1/3 shadow-md">
                <Image 
                  src="/image7.png" 
                  alt="Spring Sale"
                  width={300}
                  height={400}
                  className="rounded-lg object-cover"
                />
                <div className="mt-4">
                  <p className="text-gray-500 text-sm">01 — Spring Sale</p>
                  <p className="text-lg font-bold">30% OFF</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-gray-100 rounded-lg p-4 w-full sm:w-1/3 shadow-md">
                <Image 
                  src="/image8.png" 
                  alt="Summer Sale"
                  width={300}
                  height={400}
                  className="rounded-lg object-cover"
                />
                <div className="mt-4">
                  <p className="text-gray-500 text-sm">02 — Summer Sale</p>
                  <p className="text-lg font-bold">50% OFF</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-gray-100 rounded-lg p-4 w-full sm:w-1/3 shadow-md">
                <Image 
                  src="/image9.png" 
                  alt="Fall Sale"
                  width={300}
                  height={400}
                  className="rounded-lg object-cover"
                />
                <div className="mt-4">
                  <p className="text-gray-500 text-sm">03 — Fall Sale</p>
                  <p className="text-lg font-bold">40% OFF</p>
                </div>
              </div>
            </div>
            
            {/* Carousel Controls */}
            <div className="flex justify-center mt-4 space-x-2">
              <button className="p-2 bg-gray-300 rounded-full shadow-md">
                <span>&lt;</span>
              </button>
              <button className="p-2 bg-gray-300 rounded-full shadow-md">
                <span>&gt;</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Deals;
