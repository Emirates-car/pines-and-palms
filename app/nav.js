'use client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faTumblr,
} from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Link from 'next/link';
import Image from 'next/image';
import Iconpng from '../public/favicon-32x32.png';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="flex relative flex-wrap items-center justify-between px-1 py-2 bg-darkblue">
      <div className="container px-4 xs:px-1 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full flex justify-between">
          <div className="flex items-center">
            <Image src={Iconpng} width={32} height={32} alt="car spare parts" />
            <span className="px-2 sm:px-1 s:px-1 xs:px-1 xxs:px-0 font-extrabold">
              <Link
                href={`/#spare_parts`}
                className="text-xl sm:text-base xs:text-sm leading-snug inline-block py-2 whitespace-nowrap text-white font-heading"
              >
                EMIRATES
                <span className="px-0 text-xl sm:text-base xs:text-sm leading-snug inline-block py-2 whitespace-nowrap text-blue-400 font-heading font-extrabold">
                  CAR
                </span>
              </Link>
            </span>
          </div>
          <div className="flex items-center">
            <ul className="flex flex-row space-x-4 xxs:space-x-1 xs:space-x-3">
              <li className="nav-item">
                <Link
                  href={`https://www.facebook.com/emirates.auto.parts/`}
                  className="text-white hover:opacity-75"
                  aria-label="Facebook"
                >
                  <FontAwesomeIcon icon={faFacebook} className="text-xl" />
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href={`https://www.instagram.com/emiratescar_parts/`}
                  className="text-white hover:opacity-75"
                  aria-label="Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} className="text-xl" />
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href={`https://twitter.com/emiratescarpart`}
                  className="text-white hover:opacity-75"
                  aria-label="Twitter"
                >
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="text-xl sm:text-base"
                  />
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href={`https://emirates-car.tumblr.com/`}
                  className="text-white hover:opacity-75"
                  aria-label="Tumblr"
                >
                  <FontAwesomeIcon
                    icon={faTumblr}
                    className="text-xl sm:text-base"
                  />
                </Link>
              </li>
            </ul>
            <button
              type="button"
              className="cursor-pointer text-base px-2 py-1 text-black hover:opacity-75 rounded block  outline-none focus:outline-none bg-white ml-4"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>

        <div
          className={`${
            navbarOpen ? 'flex' : 'hidden'
          } flex-col lg:flex-row xl:flex-row 2xl:flex-row lg:mx-auto xl:mx-auto 2xs:mx-auto lg:items-center w-full lg:w-auto mt-4 lg:mt-0 `}
        >
          <ul className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row list-none lg:mx-auto xl:mx-auto 2xs:mx-auto space-y-2 lg:space-y-0 lg:space-x-4">
            <li className="nav-item">
              <Link
                href={`/`}
                className="px-3 py-2 flex items-center text-xl sm:text-base leading-snug text-white hover:opacity-75"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href={`/about`}
                className="px-3 py-2 flex items-center text-xl sm:text-base leading-snug text-white hover:opacity-75"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href={`/contact`}
                className="px-3 py-2 flex items-center text-xl sm:text-base leading-snug text-white hover:opacity-75"
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href={`/search-by-make`}
                className="px-3 py-2 flex items-center text-xl sm:text-base leading-snug text-white hover:opacity-75"
              >
                Brands
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href={`/search-by-part-name`}
                className="px-3 py-2 flex items-center text-xl sm:text-base leading-snug text-white hover:opacity-75"
              >
                Parts
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href={`/search-by-cities-in-uae`}
                className="px-3 py-2 flex items-center text-xl sm:text-base leading-snug text-white hover:opacity-75"
              >
                Location
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href={`/blog`}
                className="px-3 py-2 flex items-center text-xl sm:text-base leading-snug text-white hover:opacity-75"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
