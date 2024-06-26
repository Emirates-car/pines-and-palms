'use client';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  fab,
  faFacebook,
  faInstagram,
  faTumblr,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Link from 'next/link';
import Image from 'next/image';
import Iconpng from '../public/favicon-32x32.png';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <nav className="flex relative flex-wrap items-center justify-between px-2 py-2 bg-purple-800 font-sans">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full flex justify-between">
          <Image src={Iconpng} width={32} height={32} alt="car spare parts" />
          <Link
            href={`/#spare_parts`}
            className="text-md leading-snug inline-block mr-4 py-2 whitespace-nowrap uppercase text-white xs:-ml-2 xxs:ml-1"
          >
            Emirates-car.com
          </Link>
          <button
            type="button"
            className="cursor-pointer text-xl px-5 py-5 rounded bg-transparent block xl:hidden outline-none focus:outline-none bg-white text-black"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <FontAwesomeIcon icon={fab} className="text-xl leading-xl" />
          </button>
        </div>

        <div
          className={
            'xl:flex lg:flex sm:flex xxl:flex flex-grow items-center' +
            (navbarOpen ? 'flex' : ' hidden')
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col xl:flex-row lg:flex-row list-none xl:ml-auto xxs:ml-auto xs:ml-auto">
            <li className="nav-item">
              <Link
                href={`/`}
                className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href={`/blog`}
                className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
              >
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href={`/contact`}
                className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href={`/about`}
                className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href={`/search-by-make`}
                className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
              >
                Search parts by make
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href={`/search-by-cities-in-uae`}
                className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
              >
                Search parts in your cities
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href={`/search-by-part-name`}
                className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
              >
                Search parts by Part name
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col xl:flex-row lg:flex-row list-none xl:ml-auto xxs:ml-auto xs:ml-auto">
            <li className="nav-item">
              <Link
                href={`https://www.facebook.com/emirates.auto.parts/`}
                className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
                ariaLabel="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} />

                <i className="fab fa-2x fa-facebook ml-2 text-xl leading-xl text-white opacity-75"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href={`https://www.instagram.com/emiratescar_parts/`}
                className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
                ariaLabel="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href={`https://twitter.com/emiratescarpart`}
                className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
                ariaLabel="Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href={`https://emirates-car.tumblr.com/`}
                className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
                ariaLabel="Tumblr"
              >
                <FontAwesomeIcon icon={faTumblr} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
