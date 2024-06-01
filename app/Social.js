'use client';
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  fab,
  faFacebook,
  faInstagram,
  faPinterest,
  faTumblr,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

export default function Social() {
  return (
    <div>
      <div className="uppercase xs:mx-4 s:mx-4 xxs:mx-4 md:ml-11 mx-10 bg-blue-200 font-sans text-center text-3xl text-blue-900 font-extrabold xs:text-xl xs:w-auto xxs:w-auto s:w-auto s:text-2xl xxs:text-2xl p-3">
        <div className="container mx-0">
          <div className="grid grid-cols-6 gap-4 text-center py-2">
            <div>
              <a
                href="https://www.facebook.com/emirates.auto.parts"
                title="used car parts"
                className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-blue-700 text-4xl xs:text-3xl sm:text-xl md:text-4xl lg:text-4xl"
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/emiratescar_parts/"
                title="car trends"
                className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
                target="_newtab"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-purple-800 text-4xl xs:text-3xl sm:text-xl md:text-4xl lg:text-4xl"
                />
              </a>
            </div>
            <div>
              <a
                href="https://twitter.com/emiratescarpart"
                title="emirates car parts news"
                className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
                target="_newtab"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-blue-400 text-4xl xs:text-3xl sm:text-xl md:text-4xl lg:text-4xl"
                />
              </a>
            </div>
            <div>
              <a
                href="https://emirates-car.tumblr.com/"
                title="emirates car parts"
                className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
                target="_newtab"
              >
                <FontAwesomeIcon
                  icon={faTumblr}
                  className="text-black text-4xl xs:text-3xl sm:text-xl md:text-4xl lg:text-4xl"
                />
              </a>
            </div>
            <div>
              <a
                href="https://in.pinterest.com/emiratesautomobileparts/"
                title="emirates car parts"
                className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
                target="_newtab"
              >
                <FontAwesomeIcon
                  icon={faPinterest}
                  className="text-red-700 text-4xl xs:text-3xl sm:text-xl md:text-4xl lg:text-4xl"
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/emirates-car-771929232/"
                title="emirates car parts career"
                className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
                target="_newtab"
              >
                <i className="fab fa-linkedin text-blue-500 text-4xl xs:text-3xl sm:text-xl md:text-4xl lg:text-4xl"></i>
              </a>
            </div>
          </div>
        </div>
        <div>
          <span>
            <Link
              href="/search-by-part-name"
              className="underline hover:text-blue-500 xs:text-sm"
              title="car spare parts online"
            >
              SEARCH BY PART NAME
            </Link>{' '}
            &nbsp;|
          </span>
          <span>
            <Link
              href="/search-by-cities-in-uae"
              className="underline hover:text-blue-500 xs:text-sm"
            >
              Spare parts near me
            </Link>{' '}
            &nbsp;|
          </span>
          <span>
            <Link
              href="/search-by-make"
              className="underline hover:text-blue-500 xs:text-sm"
            >
              SEARCH BY MAKE
            </Link>{' '}
            &nbsp;
          </span>
        </div>
      </div>
    </div>
  );
}
