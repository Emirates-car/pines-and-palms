import Image from 'next/image';
import React from 'react';
import { getCity, getFormModel, getMake, getParts } from '../../page';
import Link from 'next/link';
import Social from '../../Social';
import FormComponent from '../../FormComponent';
import Footer from '../../footer';

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
  const res = await fetch(
    `https://rozy-api-two.vercel.app/api/parts/${parts}`
  );
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
      <div className="flex place-content-center mx-auto">
        <h1 className="text-3xl font-extrabold mx-auto my-5 xs:text-xl">
          {partsData.parts}
        </h1>
      </div>
      <div className="flex xs:grid xs:grid-cols-1 s:grid s:grid-cols-1 sm:grid sm:grid-cols-1 2xs:grid 2xs:grid-cols-1">
        <div className="w-3/4 2xs:w-full xs:w-full sm:w-full s:w-full">
          <main className="mx-10 xs:mx-auto 2xs:mx-4 sm:mx-4 md:mx-5 mt-10 border border-gray-100 shadow-sm">
            <div className="container place-content-center mx-1 py-6">
              <div className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-blue-400 font-bold py-4 sm:mt-5 md:mt-5 lg:mx-0 xs:text-xs xl:text-lg 2xs:text-xs px-5">
                FILL OUT THE INQUIRY FOR
                <nobr className="text-blue-700 text-3xl md:text-4xl xs:text-sm lg:text-2xl sm:text-xl">
                  &nbsp;{partsData.parts}{' '}
                </nobr>
                BELOW
              </div>
              <div className="text-gray-600 text-base md:text-lg lg:text-2xl font-normal font-sans xs:text-xs 2xs:text-xs mx-10 xs:m-3 underline pb-3 ">
                <nobr className="text-blue-400 no-underline">
                  <i className="fal fa-car-garage"></i> Current
                  path:&nbsp;&nbsp;
                </nobr>
                index{'>>>'}
                {partsData.parts}
                {'>>>'}
              </div>
              <div className="uppercase xs:mx-4 s:mx-4 2xs:mx-4 md:ml-11 mx-10 bg-blue-200 font-serif text-center text-3xl text-blue-900 font-extrabold xs:text-xl xs:w-auto 2xs:w-auto s:w-auto s:text-2xl 2xs:text-2xl p-3">
                <Social />
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
              <div className="grid grid-cols-1 s:grid s:grid-cols-1 xs:grid xs:grid-cols-1 2xs:grid 2xs:grid-cols-1 sm:grid sm:grid-cols-1 xs:mx-4 s:mx-4 2xs:mx-4 md:mx-5 mx-auto">
                <div className="text-base font-medium  xs:text-sm md:text-base p-5 s:p-2">
                  Searching for {decodeURIComponent(partsData.parts)} Auto Spare
                  Parts in U.A.E? Fill out the inquiry down below.
                </div>
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
              <div className="text-blue-600 text-4xl md:text-lg lg:text-2xl font-extrabold xs:text-base 2xs:text-xs s:text-xs mx-10 my-10">
                SEARCH BY MAKE
              </div>
              <div className="grid grid-cols-7 md:grid-cols-5 lg:grid-cols-7 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-6 2xs:grid 2xs:grid-cols-2 s:grid s:grid-cols-2 gap-1 xs:mx-4 s:mx-4 2xs:mx-4 md:ml-11 my-10 mx-10">
                {makedatas.map((post, i) => (
                  <div key={i}>
                    <Link
                      href="/search-by-make/[make]"
                      as={'/search-by-make/' + post.make}
                      title={
                        post.make + ' ' + decodeURIComponent(partsData.parts)
                      }
                    >
                      <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                        <div className="flex justify-center">
                          <Image
                            alt={post.make + ' spare parts'}
                            src={'/img/car-logos/' + post.img}
                            className="object-scale-down shadow-xl"
                            height={60}
                            width={60}
                          />
                          <br />
                        </div>
                        <div className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                          {decodeURIComponent(partsData.parts)} for{' '}
                          {post.make.toUpperCase()}
                        </div>
                      </main>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="place-content-center grid grid-cols-1 gap-3 xs:grid-cols-1 xs:grid s:grid s:grid-cols-1 py-5 xl:mx-10 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 2xs:mx-2 s:mx-2  md:ml-11 my-10 mx-10">
                <div className="text-base font-medium text-gray-500 p-5">
                  We deal with any country auto spare parts including japanese,
                  american, german, chinese, indian, Korean, french, british in
                  UAE. We also operate in main cities such as dubai, sharjah,
                  abu dhabi, ajman, al quoz, jumeirah, deira etc. You can check
                  our catalogue at{' '}
                  <Link
                    href="/search-by-part-name"
                    className="text-blue-400 underline"
                  >
                    https://emirates-car.com/search-by-part-name
                  </Link>
                  . We provide auto spare parts for any vehicles including :
                  <ul className="list-disc">
                    <li>
                      {decodeURIComponent(partsData.parts)} New auto spare parts
                      in uae
                    </li>
                    <li>
                      {decodeURIComponent(partsData.parts)} Used auto spare
                      parts in uae
                    </li>
                    <li>
                      {decodeURIComponent(partsData.parts)} Genuine auto spare
                      parts in uae
                    </li>
                    <li>
                      {decodeURIComponent(partsData.parts)} Aftermarket auto
                      spare parts in uae
                    </li>
                  </ul>
                </div>
                <div className="text-base font-medium text-gray-500 p-5">
                  UAE Automobile industry is slowly shifting towards a service
                  oriented business model based on consumer data and customer
                  experience. Now companies are trying to adapt to the current
                  need of the trends Markets. They rely on consumer data for
                  knowing the sale interest of the customers based on the
                  experience through analytics software. Owners are now thinking
                  ways to accommodate the market through the trends analytics in
                  order to keep the company into their targeted level.
                  Previously there were cars running on petrol in which UAE is
                  one of the largest producer and diesel. Since the beginning
                  era of electric vehicle have started, many people are opting
                  for electric vehicles in spite of its shortcomings because it
                  is more affordable comapared to vehicle running on diesel or
                  petrol. By this transition there is no difference in usage of
                  irreversible energy.
                </div>
                <div className="text-base font-medium text-gray-500 p-5"></div>
              </div>
            </div>
          </main>
        </div>
        <div className="w-1/4 text-sm font-sans s:w-full xs:w-full 2xs:w-full sm:w-full my-5">
          <div className="xs:grid xs:grid-cols-1 s:grid s:grid-cols-1 s:w-full 2xs:w-full sm:w-full md:w-full text-5xl lg:text-4xl md:text-base sm:text-2xl text-blue-400 font-bold py-4 sm:mt-5 md:mt-5 lg:mx-2 xs:text-xs s:text-xs  xl:text-lg 2xs:text-2xl px-5  text-justify font-sans">
            SEARCH PARTS BY COUNTRIES (U.A.E)
          </div>
          <div className="xs:grid xs:grid-cols-1 s:grid s:grid-cols-1 2xs:w-full s:w-full sm:w-full md:w-full 2xs:grid 2xs:grid-cols-1 sm:grid sm:grid-cols-1 py-4 sm:mt-5 lg:mx-2 px-5 s:px-3">
            {cities.map((post, i) => (
              <div key={i}>
                <Link
                  href="/search-by-cities-in-uae/[city]"
                  as={'/search-by-cities-in-uae/' + post.city}
                  title={
                    decodeURIComponent(partsData.parts) + ' in ' + post.city
                  }
                >
                  <div className="text-base hover:text-blue-700 focus:text-blue-700 xs:text-sm xl:text-lg 2xs:text-xs text-gray-500 font-sans s:text-xs underline">
                    <i className="far fa-compass"></i>{' '}
                    {decodeURIComponent(parts)} in {post.city}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
