'use client';
import React, { useState, useEffect } from 'react';
import Link from "next/link";

export default function SearchModel({ car, make }) {
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
  }, [car, make]);

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
  const excludedMakes = [
    'Acura',
    'Buick',
    'Eagle',
    'Lotus',
    'Plymouth',
    'Pontiac',
    'Saab',
    'Subaru',
    'Alpha Romeo',
    'Geo',
    'Oldsmobile',
    'Isuzu',
    'Saturn',
    'Corbin',
    'Holden',
    'Spyker',
    'Spyker Cars',
    'Aston Martin',
    'Panoz',
    'Foose',
    'Morgan',
    'Aptera',
    'Smart',
    'SRT',
    'Roush Performance',
    'Pagani',
    'Mobility Ventures LLC',
    'RUF Automobile',
    'Koenigsegg',
    'Karma',
    'Polestar',
    'STI',
    'Kandi',
    'Abarth',
    'Dorcen',
    'Foton',
    'W Motors',
    'Opel',
    'Skoda',
    'Hillman',
    'Austin',
    'Fillmore',
    'Maybach',
    'Merkur',
    'Rambler',
    'RUF Automobile',
    'Saturn',
    'Shelby',
    'Studebaker',
  ];
  const isExcludedMake = excludedMakes.includes(make);
  return (
    <form role="search" className="flex justify-center" onSubmit={e => e.preventDefault()}>
      <div className="pt-3 w-full max-w-md">
        {/* Accessible input with label */}
        <label htmlFor="partname" className="sr-only">
          Search {make} Model
        </label>
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-full shadow-sm text-sm"
          id="partname"
          type="search"
          placeholder={`Search Your ${make} Model`}
          onChange={e => onModelFormChange(e.target.value)}
          value={searchModel}
          autoComplete="off"
          required
        />

        {/* Suggestions list */}
        {recommend?.length > 0 && (
          <ul className="mt-2 max-h-60 overflow-y-auto grid grid-cols-1 bg-white border border-gray-200 rounded-md shadow-sm">
            {recommend.map((item, i) => (
              <li
                key={i}
                className="cursor-pointer text-base p-2 hover:bg-gray-100"
                onClick={() => onModelSuggestionHandler(item)}
              >
                <Link
                  href={
                    isExcludedMake
                      ? '/get-in-touch'
                      : `/search-by-make/${make}/${encodeURIComponent(item)}`
                  }
                  title={`${item} model`}
                  className="block"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </form>

  );
}
