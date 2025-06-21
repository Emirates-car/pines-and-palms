'use client';
import React, { Component } from 'react';
import AutoPartsImages from '../components/AutoPartsImages';
import Link from 'next/link';

export default class about extends Component {
  render() {
    return (
      <section
        className="pt-10 xs:pt-5 mx-8 text-center"
        aria-labelledby="featured-parts-heading"
      >
        <h2
          id="featured-parts-heading"
          className="text-black text-4xl md:text-lg lg:text-2xl font-bold xs:text-base xxs:text-xs"
        >
          Featured Parts
        </h2>

        <div
          className="grid grid-cols-6 place-items-center lg:grid-cols-5 xs:grid-cols-1 s:grid-cols-1 xxs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-1 my-10 mx-5 xs:mx-3 s:mx-2 sm:mx-4 xxs:mx-4"
          role="list"
        >
          <AutoPartsImages />

          <Link href="/search-by-part-name" role="listitem"
            className="border-4 p-1 py-5 px-5 border-blue-700 block text-center"
            aria-label="View all auto spare parts">

            <i className="fas fa-car-garage fa-4x bg-blue-500 text-gray-900 font-thin p-1 rounded-lg"></i>

            <p className="text-base text-blue-600 py-2 font-semibold underline">
              View all Parts {'>>'}
            </p>
            <p className="text-xs text-gray-500">
              We deal with almost any auto spare parts in UAE. If you don’t find your desired parts, you can contact us directly.
            </p>
          </Link>
        </div>
      </section>

    );
  }
}
