"use client";
import React, { useEffect, useState } from 'react'
import Link from "next/link";

export default function SearchCity() {
   const [searchCity, setSearchCity] = useState('');
   const [recommendcities, setRecommendCity] = useState('');
   const [formCityChange, setFormCityChange] = useState('');
   useEffect(() => {
     const loadPart = async () => {
       var part = [];
       for (var i in cities) {
         var filtered = cities[i].city;
         part.push(filtered);
       }
       setFormCityChange(part);
     };
     loadPart();
   });

   const onCityFormChange = text => {
     let matches = [];
     if (text.length > 0) {
       matches = formCityChange.filter(part => {
         const regex = new RegExp(`${text}`, 'gi');
         return part.match(regex);
       });
     }
     setRecommendCity(matches);
     setSearchCity(text);
   };

   const onCitySuggestionHandler = searchCity => {
     setSearchCity(searchCity);
     setRecommendCity([]);
   };
  return (
    <div>
      <div className="flex justify-center">
        <div className="pt-3">
          <input
            className="border-2 border-gray-300 w-96 xs:w-full sm:mx-2 2xs:w-auto 2xs:mx-2 bg-white h-10 xs:h-6 2xs:h-6 rounded-lg text-sm focus:outline-none px-2"
            type="search"
            placeholder="Eg. Abu dhabi, Dubai, Ajman..."
            onChange={e => onCityFormChange(e.target.value)}
            value={searchCity}
            autoComplete="off"
            required
          />
          <div className="overflow-y-hidden grid grid-cols-5 xs:grid xs:grid-cols-1 2xs:grid 2xs:grid-cols-1 xs:w-auto xs:mx-2 sm:w-auto sm:mx-2 2xs:w-auto 2xs:mx-2 ">
            {recommendcities &&
              recommendcities.map((recommendcities, i) => (
                <div
                  key={i}
                  className="cursor-pointer  text-base p-1 bg-white"
                  onClick={() => onCitySuggestionHandler(recommendcities)}
                  width="100%"
                >
                  <Link
                    href={
                      'https://emirates-car.com/search-by-part-name/' +
                      recommendcities
                    }
                    target="_newtab"
                    title={'spare parts online in ' + recommendcities}
                  >
                    <a>
                      <div>{recommendcities}</div>
                    </a>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
