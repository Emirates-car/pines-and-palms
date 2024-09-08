'use client';
import React, { useState, useEffect } from 'react';
import Link from "next/link";

export default function SearchModel({car, make}) {
  const [searchModel, setSearchModel] = useState('');
  const [recommend, setRecommend] = useState('');
  const [formModelChange, setFormModelChange] = useState('');
  useEffect(() => {
    const loadPart = async () => {
      var part = [];
      for (var i in car) {
        if (car[i].make === make) {
          var filter = car[i].model;
          part.push(filter);
        }
      }
      setFormModelChange(part);
    };
    loadPart();
  });

   const onModelFormChange = searchModel => {
     let matches = [];
     if (searchModel.length > 0) {
       matches = formModelChange.filter(part => {
         const regex = new RegExp(`${searchModel}`, 'gi');
         return part.match(regex);
       });
     }
     setRecommend(matches);
     setSearchModel(searchModel);
   };
  const onModelSuggestionHandler = searchModel => {
    setSearchModel(searchModel);
    setRecommend([]);
  };
  return (
    <div>
      <div className="flex justify-center">
        <div className="pt-3">
          <input
            className="border-2 border-gray-300 w-96 xs:w-full sm:mx-2 2xs:w-auto 2xs:mx-2 bg-white h-10 xs:h-6 2xs:h-6 rounded-lg text-sm focus:outline-none px-2"
            id="partname"
            type="search"
            placeholder={'Search Your ' + make + ' Model'}
            onChange={e => onModelFormChange(e.target.value)}
            value={searchModel}
            autoComplete="off"
            required
          />
          <div className="overflow-y-hidden grid grid-cols-5 xs:grid xs:grid-cols-1 2xs:grid 2xs:grid-cols-1 xs:w-auto xs:mx-2 sm:w-auto sm:mx-2 2xs:w-auto 2xs:mx-2 ">
            {recommend &&
              recommend.map((recommend, i) => (
                <div
                  key={i}
                  className="cursor-pointer  text-base p-1 bg-white"
                  onClick={() => onModelSuggestionHandler(recommend)}
                  width="100%"
                >
                  <Link
                    href={
                      'https://emirates-car.com/search-by-make/' +
                      make +
                      '/' +
                      recommend
                    }
                    rel="noopener noreferrer"
                    target="_newtab"
                    title={recommend}
                  >
                    {recommend}
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
