'use client';
import React, { Component } from 'react';
import AutoPartsImages from '../components/AutoPartsImages';
import Link from 'next/link';

export default class about extends Component {
  render() {
    return (
      <div className="d-flex justify-center text-center pt-10 xs:pt-5 mx-8">
        <h3 className="text-black text-4xl md:text-lg lg:text-2xl font-bold xs:text-base xxs:text-xs">
          Featured Parts
        </h3>
        <div className="grid grid-cols-6 place-items-center lg:grid-cols-5 place-content-center xs:grid xs:grid-cols-1 s:grid s:grid-cols-1 xxs:grid xxs:grid-cols-2 sm:grid sm:grid-cols-3 md:grid md:grid-cols-3 gap-1  my-10 mx-5 xs:mx-3 s:mx-2 sm:mx-4 xxs:mx-4">
          <AutoPartsImages />
          <Link href="/search-by-part-name">
            <main className="border-4 p-1 py-5 px-5 border-blue-700">
              <i className="fas fa-car-garage fa-4x bg-blue-500 text-gray-900 font-thin p-1 rounded-lg"></i>
              <p className="text-base text-blue-600 py-2 font-semibold underline">
                View all Parts
                {'>>'}
              </p>
              <p className="text-xs text-gray-500">
                We deal with almost any auto spare parts in UAE. In case if you
                dont find your desired parts, you can contact us directly.
              </p>
            </main>
          </Link>
        </div>
      </div>
    );
  }
}
