'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function SearchMakeParts({ partsposts, make }) {
    const [text, setText] = useState('');
    const [suggestion, setSuggestion] = useState([]);
    const [formPartname, setFormPartname] = useState([]);

    useEffect(() => {
        const loadPart = async () => {
            var part = []; var makes = [];
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

            <div className="flex justify-center">
                <div className="pt-3">
                    <svg
                        className="absolute w-5 h-5 text-gray-400 left-3 top-1/2 transform -translate-y-1/2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1117 7.65a7.5 7.5 0 01-4.35 9.99z"
                        />
                    </svg>
                    <input
                        className="border-2 border-gray-300 w-96 xs:w-full sm:mx-2 xxs:w-auto xxs:mx-2 bg-white h-10 xs:h-6 xxs:h-6 rounded-sm text-sm focus:outline-none px-2"
                        type="search"
                        placeholder={`${make} AC Compressor, ${make} Radiator, ${make} Gearbox, ${make} Shock absorber, ${make} Spark plug, ${make} rear bumper...`}
                        onChange={e => onPartFormChange(e.target.value)}
                        value={text}
                        autoComplete="off"
                        required
                    />
                    <div className="overflow-y-hidden grid grid-cols-5 xs:grid xs:grid-cols-1 2xs:grid 2xs:grid-cols-1 xs:w-auto xs:mx-2 sm:w-auto sm:mx-2 2xs:w-auto 2xs:mx-2 ">
                        {suggestion &&
                            suggestion.map((suggestion, i) => (
                                <div
                                    key={i}
                                    className="cursor-pointer  text-base p-1 bg-white"
                                    onClick={() => onSuggestionHandler(suggestion)}
                                    width="100%"
                                >
                                    <Link
                                        href={
                                            'https://emirates-car.com/parts/' + make + "/" +
                                            suggestion
                                        }
                                        target="_newtab"
                                    >
                                        <div>{make + suggestion}</div>
                                    </Link>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
