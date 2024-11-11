import React from 'react';
import Image from 'next/image';

const Contact = ({ id }: { id: string }) => {
  return (
    <div id={id}>
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left Image */}
            <div className="lg:col-span-1 flex justify-center">
              <Image
                src="/image2.png"
                alt="Descriptive text for image 2"
                width={500}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Subscription Form */}
            <div className="lg:col-span-1 text-center lg:text-left">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Subscribe To Our Newsletter
              </h2>
              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
                duis ultrices sollicitudin aliquam.
              </p>

              <form className="mt-6 flex justify-center lg:justify-start flex-wrap">
                <input
                  type="text"
                  placeholder="Drop your Message"
                  className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent mb-4 lg:mb-0"
                />
                <button
                  type="submit"
                  className="ml-4 px-6 py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-800 focus:outline-none mt-10"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-1 flex justify-center">
              <Image
                src="/image3.png"
                alt="Descriptive text for image 3"
                width={500}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Navbar (if you want it here, hide on small screens) */}
          <ul className="gap-10 lg:gap-16 hidden lg:flex font-bold text-2xl mt-8 justify-center">
            <li className="menuLink">
              <a href="#hero">Home</a>
            </li>
            <li className="menuLink">
              <a href="#NewArrivals">New Arrivals</a>
            </li>
            <li className="menuLink">
              <a href="#Deals">Deals</a>
            </li>
            <li className="menuLink">
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Contact;
