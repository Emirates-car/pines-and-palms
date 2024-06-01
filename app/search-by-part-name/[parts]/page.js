import Image from 'next/image';
import React from 'react';
import { getCity, getFormModel, getMake, getParts } from '../../page';
import Link from 'next/link';
import Social from '../../Social';
import FormComponent from '../../FormComponent';
import Footer from '../../footer';
import TenEntries from '../../tenentries';

export async function generateMetadata({ params }) {
  const { parts } = params;
  return {
    title: `${decodeURIComponent(
      parts
    )} Car Auto Spare Parts Order Online in UAE |
          Emirates-car.com`,
    description: `Buy Online and Get delivered Used, New, Genuine / Original / OEM, Aftermarket auto spare parts Online in ${decodeURIComponent(
      parts
    )}  uae`,
    openGraph: {
      images: '/favicon.png',
      title: `${decodeURIComponent(
        parts
      )} Car Auto Spare Parts Order Online in UAE |
          Emirates-car.com`,
      description: `Buy Online and Get delivered Used, New, Genuine / Original / OEM, Aftermarket auto spare parts Online in ${decodeURIComponent(
        parts
      )}  uae`,
      url: 'https://emirates-car.com/search-by-part-name/' + parts,
      image: 'https://emirates-car.com/img/car-spare-parts.png',
      siteName: 'Emirates Auto Parts',
      images: [
        {
          url: 'https://emirates-car.com/icon-192x192.png',
          width: 192,
          height: 192
        },
        {
          url: 'https://emirates-car.com/icons/icon-512x512.png',
          width: 512,
          height: 512,
          alt: 'car parts'
        }
      ],
      locale: 'en_US',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: `${decodeURIComponent(
        parts
      )} Car Auto Spare Parts Order Online in UAE |
          Emirates-car.com`,
      url: 'https://emirates-car.com/search-by-part-name/' + parts,
      description: `Buy Online and Get delivered Used, New, Genuine / Original / OEM, Aftermarket auto spare parts Online in ${decodeURIComponent(
        parts
      )}  uae`,
      images: ['https://emirates-car.com/favicon.png']
    },
    icons: {
      icon: '/favicon.png',
      shortcut: '/icons/icon-96x96.png',
      apple: '/icons/icon-192x192.png',
      other: {
        rel: 'apple-touch-icon-precomposed',
        url: '/icons/icon-152x152.png'
      }
    },
    category: `${parts}`,
    alternates: {
      canonical: `https://emirates-car.com/search-by-part-name/${parts}`
    },
    keywords: `${decodeURIComponent(parts)} for honda, ${decodeURIComponent(
      parts
    )} in  dubai, ${decodeURIComponent(
      parts
    )} for porsche, ${decodeURIComponent(
      parts
    )} for volkswagen, ${decodeURIComponent(
      parts
    )} for volvo, ${decodeURIComponent(parts)} online, ${decodeURIComponent(
      parts
    )} for ford, ${decodeURIComponent(
      parts
    )} spare parts uae, ${decodeURIComponent(
      parts
    )} spare parts online, ${decodeURIComponent(
      parts
    )} used spare parts dubai, ${decodeURIComponent(parts)} spare parts near me`
  };
}

async function getPartsData(parts) {
  const res = await fetch(`https://rozy-api-two.vercel.app/api/parts/${parts}`);
  const data = await res.json();
  return data;
}

export default async function Parts({ params }) {
  const { parts } = params;
  const cities = await getCity();
  const makedatas = await getMake();
  const partsData = await getPartsData(parts);
  const partsposts = await getParts();
  const modelsform = await getFormModel();
  return (
    <div>
      <div className="d-flex justify-center pt-10 xs:pt-5 mx-2 font-sans">
        <h1 className="block text-3xl font-bold sm:text-4xl xs:text-4xl xxs:text-4xl md:text-6xl lg:text-6xl lg:leading-tight dark:text-white text-center">
          <span className="block">
            {partsData.parts} spare parts&nbsp;
            <span className="block text-blue-600 xl:inline">in UAE</span>
          </span>
        </h1>
        <p className="w-3/4 md:w-4/5 mx-auto xs:w-full xs:mx-1 xxs:w-full xxs:mx-1 sm:w-full sm:mx-1 mt-3 text-lg font-normal font-sans">
          Buy Premium High Quality {partsData.parts} Used, Genuine, OEM and
          Aftermarket parts in Dubai, Sharjah, Ajman, Ras al khaimah, Abu dhabi
          and all over the world. We are dealers {partsData.parts} in Auto Spare
          parts in UAE. If you are in need of any Spare parts Submit your
          inquiry now.
        </p>
        <Link
          href={'/search-by-part-name/' + partsData.parts + '#myForm'}
          className="w-40 xs:w-full xxs:w-full mx-auto flex items-center justify-center px-4 py-2 xl:text-lg border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-lg  md:px-5 xs:py-2 xs:text-lg xs:my-2 xxs:text-lg xxs:my-2 s:text-lg s:my-2 focus:filter brightness-125 my-5"
        >
          Inquire Now
        </Link>
      </div>
      <div className="flex xs:grid xs:grid-cols-1 s:grid s:grid-cols-1 sm:grid sm:grid-cols-1 xxs:grid xxs:grid-cols-1">
        <main>
          <div className="grid grid-cols-1 s:grid s:grid-cols-1 xs:grid xs:grid-cols-1 xxs:grid xxs:grid-cols-1 sm:grid sm:grid-cols-1">
            <FormComponent formsData={modelsform} postFilter={partsposts} />
            <div className="p-5 pt-10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722504.3860201286!2d51.71183150969869!3d24.337497293019872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e48dfb1ab12bd%3A0x33d32f56c0080aa7!2sUnited%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1641654109734!5m2!1sen!2sin"
                title={parts + ' parts'}
                width="100%"
                height="100%"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <h3 className="text-blue-600 text-4xl md:text-lg lg:text-2xl font-extrabold xs:text-lg xxs:text-lg s:text-lg mx-10 my-10 text-center">
            Search {decodeURIComponent(partsData.parts)} by Car Make in UAE
          </h3>
          <div className="grid grid-cols-7 md:grid-cols-5 lg:grid-cols-7 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-6 xxs:grid xxs:grid-cols-2 s:grid s:grid-cols-2 gap-1 xs:mx-4 s:mx-4 xxs:mx-4 md:ml-11 my-10 mx-10">
            {makedatas.map((post, i) => (
              <div key={i}>
                <Link
                  href="/search-by-make/[make]"
                  as={'/search-by-make/' + post.make}
                  title={post.make + ' ' + decodeURIComponent(partsData.parts)}
                >
                  <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100 rounded-sm">
                    <div className=" text-center font-sans ">
                      {post.make} {decodeURIComponent(partsData.parts)}
                    </div>
                  </main>
                </Link>
              </div>
            ))}
          </div>
          <Social />
          <TenEntries />
          <h3 className="text-blue-600 text-4xl md:text-lg lg:text-lg font-extrabold xs:text-lg xxs:text-lg s:text-lg mx-10 my-10 text-center">
            Search {decodeURIComponent(partsData.parts)} parts in UAE
          </h3>
          <div className="grid grid-cols-5 md:grid-cols-5 lg:grid-cols-7 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-6 xxs:grid xxs:grid-cols-2 s:grid s:grid-cols-2 gap-1 xs:mx-4 s:mx-4 xxs:mx-4 md:ml-11 my-10 mx-10">
            {cities.map((post, i) => (
              <div key={i}>
                <Link
                  href="/search-by-cities-in-uae/[city]"
                  as={'/search-by-cities-in-uae/' + post.city}
                  title={
                    decodeURIComponent(partsData.parts) + ' in ' + post.city
                  }
                >
                  <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100 rounded-sm">
                    <div className=" text-center font-sans ">
                      {decodeURIComponent(partsData.parts)} in {post.city}
                    </div>
                  </main>
                </Link>
              </div>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
