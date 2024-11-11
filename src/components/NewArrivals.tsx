import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NewArrivals = ({ id }: { id: string }) => {
  return (
    <section id={id} className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">New Arrivals</h2>
        <p className="text-gray-600 mb-8">
          Enjoy your Party with beautiful dresses now. Dont forget to avail this amazing collections.
        </p>

        {/* Category Tabs */}
        <div className="flex justify-center space-x-4 mb-12 flex-wrap">
          <button className="py-2 px-4 bg-gray-100 text-black rounded-md hover:bg-black hover:text-white mb-2">Mens Fashion</button>
          <button className="py-2 px-4 bg-black text-white rounded-md mb-2">Womens Fashion</button>
          <button className="py-2 px-4 bg-gray-100 text-black rounded-md hover:bg-black hover:text-white mb-2">Womens Accessories</button>
          <button className="py-2 px-4 bg-gray-100 text-black rounded-md hover:bg-black hover:text-white mb-2">Mens Accessories</button>
          <button className="py-2 px-4 bg-gray-100 text-black rounded-md hover:bg-black hover:text-white mb-2">Discount Deals</button>
        </div>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        
        {/* Card 1 */}
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg text-left hover:bg-white">
          <Image src="/image1.png" alt="Shiny Dress" width={300} height={400} className="rounded-md mb-4" />
          <h3 className="text-lg font-bold mb-2">Shiny Dress</h3>
          <p className="text-sm text-gray-500">Modern Outfit</p>
          <p className="text-lg font-bold mt-2">$93.50</p>
          <p className="text-sm text-red-500">20% OFF</p>
          <div className="flex items-center mt-2">
            <span className="text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-200 hover:bg-white p-6 rounded-lg shadow-lg text-left">
          <Image src="/image2.png" alt="Long Dress" width={300} height={400} className="rounded-md mb-4" />
          <h3 className="text-lg font-bold mb-2">Long Dress</h3>
          <p className="text-sm text-gray-500">Modern Outfit</p>
          <p className="text-lg font-bold mt-2">$98.50</p>
          <p className="text-sm text-red-500">15% OFF</p>
          <div className="flex items-center mt-2">
            <span className="text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-200 hover:bg-white  p-6 rounded-lg shadow-lg text-left">
          <Image src="/th.jfif" alt="Full Sweater" width={300} height={400} className="rounded-md mb-4" />
          <h3 className="text-lg font-bold mb-2">Full Sweater</h3>
          <p className="text-sm text-gray-500">Winter Collection</p>
          <p className="text-lg font-bold mt-2">$99.50</p>
          <p className="text-sm text-red-500">10% OFF</p>
          <div className="flex items-center mt-2">
            <span className="text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-gray-200 hover:bg-white  p-6 rounded-lg shadow-lg text-left">
          <Image src="/image4.png" alt="White dress" width={300} height={400} className="rounded-md mb-4" />
          <h3 className="text-lg font-bold mb-2">White Dress</h3>
          <p className="text-sm text-gray-500">Winter Collection</p>
          <p className="text-lg font-bold mt-2">$99.50</p>
          <p className="text-sm text-red-500">10% OFF</p>
          <div className="flex items-center mt-2">
            <span className="text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
          </div>
        </div>

        {/* Card 5 */}
        <div className="bg-gray-200 hover:bg-white  p-6 rounded-lg shadow-lg text-left">
          <Image src="/image5.png" alt="Color Dress" width={300} height={400} className="rounded-md mb-4" />
          <h3 className="text-lg font-bold mb-2">Color Dress</h3>
          <p className="text-sm text-gray-500">Winter Collection</p>
          <p className="text-lg font-bold mt-2">$99.50</p>
          <p className="text-sm text-red-500">10% OFF</p>
          <div className="flex items-center mt-2">
            <span className="text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
          </div>
        </div>

        {/* Card 6 */}
        <div className="bg-gray-200 hover:bg-white  p-6 rounded-lg shadow-lg text-left">
          <Image src="/image6.png" alt="Full Sweater" width={300} height={400} className="rounded-md mb-4" />
          <h3 className="text-lg font-bold mb-2">White Shirt</h3>
          <p className="text-sm text-gray-500">Winter Collection</p>
          <p className="text-lg font-bold mt-2">$99.50</p>
          <p className="text-sm text-red-500">10% OFF</p>
          <div className="flex items-center mt-2">
            <span className="text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9734;</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default NewArrivals


