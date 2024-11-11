import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      {/* Heading outside the container */}
      <h1 className="text-7xl font-extrabold text-black mb-16 mt-16 text-center">ULTIMATE SALES</h1>

      {/* Centered Container */}
      <div className="bg-gray-300 p-12 rounded-lg w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 hover:bg-white">
        <Image src="/image.png" alt="Small Gray Box" width={500} height={600} />
        <p className="text-center text-xl mt-4">Find your perfect dress for any occasion, from casual chic to elegant evening wear. Our collection combines style, comfort, and confidence, so you can look and feel your best. Shop now and discover the dress that speaks to your unique style.</p>
      </div>

      {/* Login Button */}
      <div className="mt-6">
        <button className="bg-black text-white py-2 px-6 rounded-lg text-xl hover:bg-white hover:text-black transition-colors mb-5">
          Log In
        </button>
      </div>
    </div>
  )
}

export default Hero
