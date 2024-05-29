import React from 'react';
import Link from 'next/link';
import HondaOfferButton from '../../HondaOfferButton';
import { getFormModel, getMake, getParts } from '../../page';
import FormComponent from '../../FormComponent';
import Footer from '../../footer';
import Social from '../../Social';
import Image from 'next/image';

export async function generateMetadata({ params }) {
  const { city } = params;
  return {
    title: `Quick Car Auto Spare Parts Order Online in ${city} (UAE) | Emirates-car.com`,
    description: `Buy Online and Get delivered Used, New, Genuine / Original / OEM, Aftermarket auto spare parts Online in ${city}  uae`,
    openGraph: {
      images: '/favicon.png',
      title: `Quick Car Auto Spare Parts Order Online in ${city} (UAE) |
          Emirates-car.com`,
      description: `Buy Online and Get delivered Used, New, Genuine / Original / OEM, Aftermarket auto spare parts Online in ${city}  uae`,
      url: 'https://emirates-car.com/search-by-cities-in-uae/' + city,
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
      title: `Quick Car Auto Spare Parts Order Online in ${city} (UAE) |
          Emirates-car.com`,
      url: 'https://emirates-car.com/search-by-cities-in-uae/' + city,
      description: `Buy Online and Get delivered Used, New, Genuine / Original / OEM, Aftermarket auto spare parts Online in ${city}  uae`,
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
    category: `Auto spare parts in ${city}`,
    alternates: {
      canonical: `https://emirates-car.com/search-by-cities-in-uae/${city}`
    },
    keywords:
      'auto parts in ' +
      city +
      ', ' +
      'car parts ' +
      city +
      ', ' +
      'Spare parts in ' +
      city +
      ', auto spare parts, emirates auto parts'
  };
}
async function getCityData(city) {
  const res = await fetch(
    `https://rozy-api-two.vercel.app/api/cities/${city}`,
    {
      cache: 'no-store'
    }
  );
  const data = await res.json();
  return data;
}

export default async function City({ params }) {
  const { city } = params;
  const cityData = await getCityData(city);
  const makedatas = await getMake();
  const partsposts = await getParts();
  const modelsform = await getFormModel();

  return (
    <div>
      <div className="flex xs:grid xs:grid-cols-1 sm:grid sm:grid-cols-1 2xs:grid 2xs:grid-cols-1  xs:mx-auto">
        <div className="w-3/4 2xs:w-full xs:w-full sm:w-full border border-1">
          <main className="mx-10 xs:ml-3  2xs:mx-4 sm:mx-4 md:mx-5 mt-10 border border-gray-100 shadow-sm">
            <div className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-blue-400 font-bold py-4 sm:mt-5 md:mt-5 lg:mx-0 xs:text-xs xl:text-lg 2xs:text-xs px-5">
              FILL OUT THE INQUIRY FOR PARTS IN
              <nobr className="text-blue-700 text-3xl md:text-4xl xs:text-sm lg:text-2xl sm:text-xl">
                &nbsp;{cityData.city}{' '}
              </nobr>
              BELOW
            </div>
            <div className="text-gray-600 text-base md:text-lg lg:text-2xl font-normal font-sans xs:text-xs 2xs:text-xs mx-10 xs:ml-3 underline pb-3">
              <nobr className="text-blue-400 no-underline">
                <i className="fal fa-car-garage"></i> Current path:&nbsp;&nbsp;
              </nobr>
              index{'>>>'}
              <Link href={'/search-by-cities-in-uae/' + cityData.city}>
                search-by-cities-in-uae{'/'}
                {cityData.city}
              </Link>
              {'>>>'}
            </div>
            <div className="text-gray-700 font-semibold text-xl md:text-lg lg:text-2xl font-sans xs:text-xs 2xs:text-xs mx-10 xs:ml-3 pb-3">
              {cityData.description}
              {'>>>'}
            </div>
            <iframe
              src={cityData.link}
              height={300}
              width="100%"
              allowFullScreen="null"
              loading="lazy"
            ></iframe>
            <div className="grid grid-cols-1 xs:grid xs:grid-cols-1 2xs:grid 2xs:grid-cols-1">
              <p className="text-base font-medium text-gray-700 xs:text-sm md:text-base p-5">
                <h1 className="text-md font-bold text-blue-500">
                  SEARCH YOUR PARTS IN
                  <nobr className="text-gray-700  text-2xl md:text-4xl xs:text-sm lg:text-2xl sm:text-xl">
                    &nbsp;{cityData.city}.
                  </nobr>{' '}
                </h1>
              </p>
              <p className="text-base font-medium text-gray-700 xs:text-sm md:text-base p-5">
                To buy Auto spare parts online near {cityData.city}. , fill in
                the spare part forms below, get inquired through whatsapp and
                get quote for your spare parts and we also offer delivery to
                your convinient area.
              </p>
            </div>
            <div className="place-content-center grid grid-cols-1 gap-3 xs:grid-cols-1 xs:grid s:grid s:grid-cols-1 py-5 xl:mx-10 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 2xs:mx-2 s:mx-2  md:ml-11 mx-10">
              <FormComponent formsData={modelsform} postFilter={partsposts} />
              <div className="uppercase bg-blue-200 font-serif xl:mx-10 lg:mx-7 md:mx-5 s:mx-3 2xs:mx-4 xs:mx-4 text-center text-3xl text-blue-900 font-extrabold xs:text-xl xs:w-auto 2xs:w-auto s:w-auto s:text-2xl 2xs:text-2xl p-3">
                <Social />
                <div>
                  <span>
                    <Link
                      href="/search-by-part-name"
                      className="underline hover:text-blue-500 xs:text-sm"
                    >
                      SEARCH BY PART NAME
                    </Link>{' '}
                    &nbsp;|
                  </span>
                  <span>
                    <Link
                      href="/search-by-cities-in-uae"
                      className="underline hover:text-blue-500  xs:text-sm"
                    >
                      SEARCH BY CITY
                    </Link>{' '}
                    &nbsp;|
                  </span>
                  <span>
                    <Link
                      href="/search-by-make"
                      className="underline hover:text-blue-500  xs:text-sm"
                    >
                      SEARCH BY MAKE
                    </Link>{' '}
                    &nbsp;
                  </span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <HondaOfferButton />
            </div>
            <div className="place-content-center grid grid-cols-1 gap-3 xs:grid-cols-1 xs:grid s:grid s:grid-cols-1 py-5 xl:mx-10 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 2xs:mx-2 s:mx-2  md:ml-11 mx-5">
              <h1 className="text-base font-medium text-gray-700 p-5">
                We deal with any country auto spare parts including japanese,
                american, german, chinese, indian, Korean, french, british in
                UAE. Looking for Auto spare parts in {cityData.city}?. We are
                dealing with auto spare parts for car, heavy truck, van, buses,
                coupe, SUV, prime, Petrol based vehicles, Diesel based vehicles,
                Used spare parts, After market parts, Genuine spare parts and
                New parts etc. You can check our catalogue at{' '}
                <Link
                  href="/search-by-part-name"
                  className="text-blue-400 underline"
                >
                  /search-by-part-name
                </Link>
                . Contact us for any inquiry. We also deal in brands such as{' '}
                {makedatas.map((p, i) => (
                  <Link key={i} href={'/search-by-cities-in-uae/' + p.make}>
                    {p.make}
                    {' spare parts in ' + city + ', '}
                  </Link>
                ))}
                .<br />
                <br />
                We provide auto spare parts for any vehicles including :
                <ul className="list-disc">
                  <li>New auto spare parts in {cityData.city}</li>
                  <li>Used auto spare parts in {cityData.city}</li>
                  <li>Genuine auto spare parts in {cityData.city}</li>
                  <li>Aftermarket auto spare parts in {cityData.city}</li>
                </ul>
              </h1>
              <p className="text-base font-medium text-gray-700 p-5">
                UAE Automobile industry is slowly shifting towards a service
                oriented business model based on consumer data and customer
                experience. Now companies are trying to adapt to the current
                need of the trends Markets. They rely on consumer data for
                knowing the sale interest of the customers based on the
                experience through analytics software. Owners are now thinking
                ways to accommodate the market through the trends analytics in
                order to keep the company into their targetted level. Previously
                there were cars running on petrol in which UAE is one of the
                largest producer and diesel. Since the beginning era of electric
                vehicle have started, many people are opting for electric
                vehicles in spite of its shortcomings because it is more
                affordable comapared to vehicle running on diesel or petrol. By
                this transition there is no difference in usage of irreversible
                energy.
              </p>
            </div>
            <h1 className="text-blue-600 text-4xl md:text-lg lg:text-2xl font-extrabold xs:text-base 2xs:text-xs s:text-xs mx-10 my-10">
              SEARCH BY MAKE
            </h1>
            <div className="grid grid-cols-9 md:grid-cols-5 lg:grid-cols-7 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-6 2xs:grid 2xs:grid-cols-2 s:grid s:grid-cols-2 gap-1 xs:mx-4 s:mx-4 2xs:mx-4 md:ml-11 my-10 mx-10">
              {makedatas.map((makedata, i) => (
                <div key={i}>
                  <Link
                    href="/search-by-make/[make]"
                    as={'/search-by-make/' + makedata.make}
                    title={makedata.make + ' spare parts ' + city}
                  >
                    <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                      <div className="flex justify-center">
                        <Image
                          alt={makedata.make + ' spare parts ' + city}
                          src={'/img/car-logos/' + makedata.img}
                          className="object-scale-down shadow-xl"
                          height={30}
                          width={30}
                        />
                        <br />
                      </div>
                      <p className="text-xs text-center text-gray-700 font-medium hover:text-gray-800">
                        {makedata.make.toUpperCase()}
                      </p>
                    </main>
                  </Link>
                </div>
              ))}
            </div>
          </main>
        </div>
        <div className="w-1/4 text-sm font-sans xs:w-full 2xs:w-full sm:w-full my-10">
          <div className="xs:grid xs:grid-cols-1 2xs:w-full sm:w-full md:w-full text-5xl lg:text-4xl md:text-base sm:text-2xl text-blue-400 font-bold py-4 sm:mt-5 md:mt-5 lg:mx-2 xs:text-xl  xl:text-lg 2xs:text-2xl px-5  font-sans">
            PARTS IN {cityData.city}
          </div>
          <div className="xs:grid xs:grid-cols-1 text-gray-600 font-bold 2xs:w-full sm:w-full md:w-full 2xs:grid 2xs:grid-cols-1 sm:grid sm:grid-cols-1 py-4 sm:mt-5 lg:mx-2 xs:text-xs xl:text-lg 2xs:text-xs px-5 font-sans">
            SEARCH BY PART NAME
          </div>
          <div className="xs:grid xs:grid-cols-1 2xs:w-full sm:w-full md:w-full 2xs:grid 2xs:grid-cols-1 sm:grid sm:grid-cols-1 sm:mt-5 lg:mx-2 ">
            {partsposts.map((post, i) => (
              <div key={i}>
                <Link
                  href="/search-by-part-name/[parts]"
                  as={'/search-by-part-name/' + post.parts}
                  title={post.parts + ' in ' + city}
                >
                  <p className="text-sm hover:text-blue-700 focus:text-blue-700 text-gray-700 xs:text-sm xl:text-base 2xs:text-base s:text-xx px-5 font-sans underline">
                    <i className="far fa-compass"></i>{' '}
                    {post.parts + ' in ' + city}
                  </p>
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
