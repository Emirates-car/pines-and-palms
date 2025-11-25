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
  }, [posts]);

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
    <form role="search" className="flex justify-center">
      <div className="pt-3 w-full max-w-md">
        <label htmlFor="make-search" className="sr-only">
          Search car make
        </label>
        <input
          id="make-search"
          type="search"
          className="border-2 border-gray-300 w-full bg-white h-10 xs:h-6 2xs:h-6 rounded-lg text-sm focus:outline-none px-2"
          placeholder="Eg. Toyota, Ford, BMW, Audi..."
          onChange={e => onMakeFormChange(e.target.value)}
          value={searchMake}
          autoComplete="off"
          required
        />

        {recommendmake && recommendmake.length > 0 && (
          <ul className="mt-2 overflow-y-hidden grid grid-cols-5 xs:grid-cols-1 2xs:grid-cols-1 gap-1">
            {recommendmake.map((make, i) => (
              <li key={i} className="cursor-pointer text-base bg-white">
                <Link
                  href={`https://www.emirates-car.com/search-by-make/${make}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-1 hover:underline"
                  onClick={() => onMakeSuggestionHandler(make)}
                >
                  {make}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </form>
  );
}
