'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function SearchMake({ posts }) {
  const [searchMake, setSearchMake] = useState('');
  const [recommendmake, setRecommendmake] = useState('');
  const [formMakeChange, setFormMakeChange] = useState('');
  useEffect(() => {
    const loadPart = async () => {
      var part = [];
      for (var i in posts) {
        var filtered = posts[i].make;
        part.push(filtered);
      }
      setFormMakeChange(part);
    };
    loadPart();
  });

  const onMakeSuggestionHandler = searchMake => {
    setSearchMake(searchMake);
    setRecommendmake([]);
  };
  const onMakeFormChange = searchMake => {
    let matches = [];
    if (searchMake.length > 0) {
      matches = formMakeChange.filter(part => {
        const regex = new RegExp(`${searchMake}`, 'gi');
        return part.match(regex);
      });
    }
    setRecommendmake(matches);
    setSearchMake(searchMake);
  };
  return (
    <div>
      {/*Search by make input box */}
      <div className="flex justify-center">
        <div className="pt-3">
          <input
            className="border-2 border-gray-300 w-96 xs:w-full sm:mx-2 2xs:w-auto 2xs:mx-2 bg-white h-10 xs:h-6 2xs:h-6 rounded-lg text-sm focus:outline-none px-2"
            type="search"
            placeholder="Eg. Toyota, Ford, BMW, Audi..."
            onChange={e => onMakeFormChange(e.target.value)}
            value={searchMake}
            autoComplete="off"
            required
          />
          <div className="overflow-y-hidden grid grid-cols-5 xs:grid xs:grid-cols-1 2xs:grid 2xs:grid-cols-1 xs:w-auto xs:mx-2 sm:w-auto sm:mx-2 2xs:w-auto 2xs:mx-2 ">
            {recommendmake &&
              recommendmake.map((recommendmake, i) => (
                <div
                  key={i}
                  className="cursor-pointer  text-base p-1 bg-white"
                  onClick={() => onMakeSuggestionHandler(recommendmake)}
                  width="100%"
                >
                  <Link
                    href={
                      'https://emirates-car.com/search-by-make/' + recommendmake
                    }
                    target="_newtab"
                  >
                    {recommendmake}
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
