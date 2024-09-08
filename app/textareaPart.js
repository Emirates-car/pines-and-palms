'use client';

import React, { useEffect, useState } from 'react';

export default function FormPartFiltering({partsposts}) {
  const [text, setText] = useState('');
  const [suggestion, setSuggestion] = useState([]);
  const [formPartname, setFormPartname] = useState([]);

  useEffect(() => {
    const loadPart = async () => {
      var part = [];
      for (var i in partsposts) {
        var filtered = partsposts[i].parts;
        part.push(filtered);
      }
      setFormPartname(part);
    };
    loadPart();
  });
  const onSuggestionHandler = text => {
    setText(text);
    setSuggestion([]);
  };

  const onPartFormChange = text => {
    let matches = [];
    if (text.length > 0) {
      matches = formPartname.filter(part => {
        const regex = new RegExp(`${text}`, 'gi');
        return part.match(regex);
      });
    }
    setSuggestion(matches);
    setText(text);
  };
  return (
    <div>
      {/*Form part search component */}
      <div className="flex flex-wrap ">
        <div className="w-full px-3 mb-6">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
            htmlFor="partname"
          >
            PART NAME
          </label>
          <textarea
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 xs:py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
            type="text"
            placeholder="Eg. AC Compressor, Radiator, Gearbox, Antenna, Door glass, Driving light..."
            rows={5}
            id="partsname"
            name="partsname"
            onChange={e => onPartFormChange(e.target.value)}
            value={text}
            autoComplete="off"
            required
          />{' '}
          {suggestion &&
            suggestion.map((suggestion, i) => (
              <div
                key={i}
                className="cursor-pointer border-gray-400 p-4"
                onClick={() => onSuggestionHandler(suggestion)}
              >
                {suggestion}{' '}
              </div>
            ))}{' '}
        </div>
      </div>
    </div>
  );
}
