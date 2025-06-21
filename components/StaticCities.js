import Link from 'next/link';
import React from 'react';

export default function StaticCities() {
  return (
    <section
      className="bg-bglight pt-10 pb-10"
      aria-labelledby="search-spare-parts-heading"
    >
      <h2
        id="search-spare-parts-heading"
        className="text-black text-4xl text-center md:text-2xl lg:text-2xl font-bold xs:text-xl xxs:text-2xl"
      >
        Search Auto Spare Parts Anywhere in UAE
      </h2>

      <ul
        className="grid grid-cols-7 md:grid-cols-5 lg:grid-cols-7 mx-10 md:mx-4 sm:mx-3 xs:grid-cols-2 sm:grid-cols-5 xxs:grid-cols-5 s:grid-cols-3 gap-1 xs:mx-4 s:mx-4 xxs:mx-4 md:ml-11 my-10"
        role="list"
      >
        {[
          'Abu Dhabi',
          'Ajman',
          'Al Barsha (Dubai)',
          'Dubai',
          'Sharjah',
          'Mussafah',
          'Deira (Dubai)',
          'Umm al Quwain',
          'Al Karama (Dubai)',
          'Ras Al Khor (Dubai)',
          'Umm Ramool (Dubai)',
          'Al Quoz (Dubai)',
        ].map((city) => (
          <li key={city}>
            <Link href={`/search-by-cities-in-uae/${city}`} className="block border-blue-800 hover:border-blue-900 h-full py-3 bg-gray-100"
              aria-label={`Search spare parts in ${city}`}>

              <p className="text-center text-blue-600 font-medium hover:text-gray-800">
                {city.replace(/\s?\(.+?\)/, '')}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>

  );
}
