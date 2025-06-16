import Link from 'next/link';
import React from 'react';

export default function StaticCities() {
  return (
    <div className="bg-bglight">
      <h3 className="text-black text-4xl text-center md:text-2xl lg:text-2xl font-bold xs:text-xl xxs:text-2xl pt-10">
        Search Auto Spare parts Anywhere in UAE
      </h3>
      <div className="grid grid-cols-7 md:grid-cols-5 lg:grid-cols-7 mx-10 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-5 xxs:grid xxs:grid-cols-5 s:grid s:grid-cols-3 gap-1 xs:mx-4 s:mx-4 xxs:mx-4 md:ml-11 my-10 pb-10">
        <div>
          <Link href="/search-by-cities-in-uae/Abu Dhabi">
            <div className="border-blue-800 h-full  hover:border-blue-900 py-3 bg-gray-100">
              <p className="text-center text-blue-600 font-medium hover:text-gray-800">
                Abu Dhabi
              </p>
            </div>
          </Link>
        </div>
        <div>
          <Link href="/search-by-cities-in-uae/Ajman">
            <div className="border-blue-800 h-full  hover:border-blue-900 py-3 bg-gray-100">
              <p className="text-center text-blue-600 font-medium hover:text-gray-800">
                Ajman
              </p>
            </div>
          </Link>
        </div>
        <div>
          <Link href="/search-by-cities-in-uae/Al Barsha (Dubai)">
            <div className="border-blue-800 h-full  hover:border-blue-900 py-3 bg-gray-100">
              <p className="text-center text-blue-600 font-medium hover:text-gray-800">
                Al Barsha
              </p>
            </div>
          </Link>
        </div>
        <div>
          <Link href="/search-by-cities-in-uae/Dubai">
            <div className="border-blue-800 h-full  hover:border-blue-900 py-3 bg-gray-100">
              <p className="text-center text-blue-600 font-medium hover:text-gray-800">
                Dubai
              </p>
            </div>
          </Link>
        </div>
        <div>
          <Link href="/search-by-cities-in-uae/Sharjah">
            <div className="border-blue-800 h-full  hover:border-blue-900 py-3 bg-gray-100">
              <p className="text-center text-blue-600 font-medium hover:text-gray-800">
                Sharjah
              </p>
            </div>
          </Link>
        </div>
        <div>
          <Link href="/search-by-cities-in-uae/Mussafah">
            <div className="border-blue-800 h-full  hover:border-blue-900 py-3 bg-gray-100">
              <p className="text-center text-blue-600 font-medium hover:text-gray-800">
                Mussafah
              </p>
            </div>
          </Link>
        </div>
        <div>
          <Link href="/search-by-cities-in-uae/Deira (Dubai)">
            <div className="border-blue-800 h-full  hover:border-blue-900 py-3 bg-gray-100">
              <p className="text-center text-blue-600 font-medium hover:text-gray-800">
                Deira
              </p>
            </div>
          </Link>
        </div>
        <div>
          <Link href="/search-by-cities-in-uae/Umm al Quwain">
            <div className="border-blue-800 h-full  hover:border-blue-900 py-3 bg-gray-100">
              <p className="text-center text-blue-600 font-medium hover:text-gray-800">
                Umm al Quwain
              </p>
            </div>
          </Link>
        </div>
        <div>
          <Link href="/search-by-cities-in-uae/Al Karama (Dubai)">
            <div className="border-blue-800 h-full  hover:border-blue-900 py-3 bg-gray-100">
              <p className="text-center text-blue-600 font-medium hover:text-gray-800">
                Karama
              </p>
            </div>
          </Link>
        </div>
        <div>
          <Link href="/search-by-cities-in-uae/Ras Al Khor (Dubai)">
            <div className="border-blue-800 h-full  hover:border-blue-900 py-3 bg-gray-100">
              <p className="text-center text-blue-600 font-medium hover:text-gray-800">
                Ras al Khor
              </p>
            </div>
          </Link>
        </div>
        <div>
          <Link href="/search-by-cities-in-uae/Umm Ramool (Dubai)">
            <div className="border-blue-800 h-full  hover:border-blue-900 py-3 bg-gray-100">
              <p className="text-center text-blue-600 font-medium hover:text-gray-800">
                Umm Ramool
              </p>
            </div>
          </Link>
        </div>
        <div>
          <Link href="/search-by-cities-in-uae/Al Quoz (Dubai)">
            <div className="border-blue-800 h-full  hover:border-blue-900 py-3 bg-gray-100">
              <p className="text-center text-blue-600 font-medium hover:text-gray-800">
                Al Quoz
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
