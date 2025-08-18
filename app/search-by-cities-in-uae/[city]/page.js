export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getFormModel, getMake, getParts } from '../../page';
import FormComponent from '../../../components/FormComponent';
import Footer from '../../../components/footer';
import Image from 'next/image';
import Britain from '../../../public/img/icons/united-kingdom.png';
import Indian from '../../../public/img/icons/india.png';
import Japan from '../../../public/img/icons/japan.png';
import Korean from '../../../public/img/icons/south-korea.png';
import USA from '../../../public/img/icons/usa.png';
import Germany from '../../../public/img/icons/germany.png';
import China from '../../../public/img/icons/china.png';
import France from '../../../public/img/icons/france.png';
import TenEntries from '../../../components/tenentries';
import Contents from '../../../components/Contents';
import { promises as fs } from 'fs';
import path from 'path';

export async function generateStaticParams() {
  try {
    const filePath = path.join(process.cwd(), 'public/lib/cities.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(fileContents);

    const params = data.map(item => ({
      city: item.city,
    }));

    return params;
  } catch (error) {
    console.error('Error generating static params from JSON:', error);
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { city } = params;
  return {
    title: `Auto spare parts in ${decodeURIComponent(city)}, Order Online from Dubai Dealers UAE - Best Prices`,
    description: `Used, New, Genuine / Original / OEM, Aftermarket car Online in ${decodeURIComponent(city)} UAE`,
    openGraph: {
      images: '/favicon.png',
      title: `Auto spare parts Order Online from Dubai Dealers in ${decodeURIComponent(city)}, UAE - Best Prices |
          Emirates-car.com`,
      description: `Used, New, Genuine / Original / OEM, Aftermarket auto spare parts Online in ${decodeURIComponent(city)}  uae`,
      url: 'https://emirates-car.com/search-by-cities-in-uae/' + city,
      image: 'https://emirates-car.com/img/car-spare-parts.png',
      siteName: 'Emirates Auto Parts',
      images: [
        {
          url: 'https://emirates-car.com/icon-192x192.png',
          width: 192,
          height: 192,
        },
        {
          url: 'https://emirates-car.com/icons/icon-512x512.png',
          width: 512,
          height: 512,
          alt: 'car parts',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Quick Car Auto Spare Parts Order Online in ${decodeURIComponent(city)} (UAE) |
          Emirates-car.com`,
      url: 'https://www.emirates-car.com/search-by-cities-in-uae/' + city,
      description: `Buy Online and Get delivered Used, New, Genuine / Original / OEM, Aftermarket auto spare parts Online in ${decodeURIComponent(city)}  uae`,
      images: ['https://emirates-car.com/favicon.png'],
    },
    icons: {
      icon: '/favicon.png',
      shortcut: '/icons/icon-96x96.png',
      apple: '/icons/icon-192x192.png',
      other: {
        rel: 'apple-touch-icon-precomposed',
        url: '/icons/icon-152x152.png',
      },
    },
    category: `Auto spare parts in ${decodeURIComponent(city)}`,
    alternates: {
      canonical: `https://emirates-car.com/search-by-cities-in-uae/${city}`,
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
      ', auto spare parts, emirates auto parts',
  };
}

async function getCityData(city) {
  const filePath = path.join(process.cwd(), 'public/lib/cities.json');
  const jsonData = await fs.readFile(filePath, 'utf8');
  const cities = JSON.parse(jsonData);

  const decodedCity = decodeURIComponent(city);
  const cityData = cities.find(c => c.city === decodedCity);

  if (!cityData) {
    return null;
  }

  return cityData;
}

export default async function City({ params }) {
  const cityData = await getCityData(params.city);

  if (!cityData) {
    notFound(); // cleanly render 404 page if city not found
  }

  const makedatas = await getMake();
  const partsposts = await getParts();
  const modelsform = await getFormModel();

  return (
    <div>
      <div className="py-5 xxs:px-7 sm:px-7 s:py-6 lg:mx-6 md:mx-6 xs:mx-2 xxs:mx-2 max-w-7xl mx-auto">
        <div className="bg-backgroundlight rounded-sm">
          <div className="grid grid-cols-2 xs:grid xs:grid-cols-1 s:grid s:grid-cols-1 xs:text-center sm:grid sm:grid-cols-2 xxs:grid xxs:grid-cols-1 xs:pt-5 s:pt-5">
            <div>
              <div className="ml-8 md:ml-8 xs:ml-1 xxs:ml-4 xxs:mt-8 xs:px-5 sm:ml-6 lg:ml-1 xl:ml-20 sm:mx-auto mt-10 sm:mt-12 md:mt-10 lg:mt-20 lg:px-8 xl:mt-28 xs:mt-2 xs:text-left s:mt-2">
                <div className="lg:text-left">
                  <h2 className="block text-3xl sm:text-sm xs:text-base xxs:text-base md:text-lg lg:text-2xl font-medium font-poppins text-gray-800  lg:leading-tight dark:text-white">
                    <span className="block">
                      Expert Parts&nbsp;
                      <span className="block text-blue-600 xl:inline">
                        Seamless Performance
                      </span>
                    </span>
                  </h2>
                  <h1 className="mt-3 text-5xl lg:text-4xl sm:text-lg xs:text-xl xxs:text-xl md:text-xl font-head font-extrabold">
                    Search Used / Genuine / Aftermarket Auto parts in{' '}
                    <span className="block text-darkblue xl:inline">
                      {cityData.city}
                    </span>
                  </h1>
                  <div className="mt-5 sm:mt-5 xxs:my-5 xs:my-5 lg:justify-start">
                    <div className="py-3 px-4 sm:py-0 sm:px-0 w-1/2 lg:w-full xs:w-full xxs:w-3/4 xs:mx-auto s:w-full sm:w-3/4 md:w-full md:mx-auto md:px-0 md:py-0 xs:py-0 xs:px-0 xxs:px-0 xxs:py-0 lg:px-0 lg:py-0 xl:px-0 xl:py-0 xxl:px-0 xxl:py-0 rounded-lg shadow-md sm:shadow-none">
                      <a
                        href="/#myForm"
                        title="vehicle parts online"
                        className="flex items-center justify-center py-2 xs:py-2 xxs:py-1 sm:py-0 text-xl sm:text-base xl:text-xl border border-transparent font-medium rounded-sm text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md md:text-lg md:px-5 xs:text-sm xxs:text-sm xxs:my-2 lg:my-2 s:text-sm s:my-2 focus:filter brightness-125"
                      >
                        Inquire Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-10 mb-3 xs:hidden xxs:hidden">
                  We deal with auto parts for german, japanese, chinese, french,
                  british origin cars.
                </div>
                <div className="grid grid-cols-8 xs:hidden xxs:hidden md:grid-cols-4 lg:grid-cols-4 gap-2 place-content-center mb-10">
                  {/* icons here */}
                </div>
              </div>
            </div>
            <div className="xxs:hidden xs:hidden p-10">
              <iframe
                src={cityData.link}
                className="w-full h-full border-8 border-darkblue pointer-events-none"
                allowFullScreen="null"
                loading="lazy"
                disable
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <FormComponent formsData={modelsform} postFilter={partsposts} />
      <div className="bg-bglight">
        <h3 className="text-black text-4xl my-10 text-center md:text-2xl lg:text-2xl font-bold xs:text-xl xxs:text-2xl pt-10">
          Search <span className="text-blue-500">{cityData.city}</span> Spare
          parts by Model
        </h3>

        <div className="grid grid-cols-7 md:grid-cols-5 lg:grid-cols-7 mx-10 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-5 xxs:grid xxs:grid-cols-5 s:grid s:grid-cols-3 gap-1 xs:mx-4 s:mx-4 xxs:mx-4 md:ml-11 my-10 pb-10 font-sans">
          {makedatas.map((post, i) => (
            <div key={i}>
              <Link
                href="/search-by-make/[make]"
                as={'/search-by-make/' + post.make}
                title={post.make + ' spare parts ' + cityData.city}
              >
                <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                  <div className="flex justify-center">
                    <Image
                      alt={post.make + ' spare parts ' + cityData.city}
                      src={'/img/car-logos/' + post.img}
                      className="object-scale-down shadow-xl"
                      height={50}
                      width={50}
                    />
                  </div>
                  <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                    {post.make.toUpperCase()}
                  </p>
                </main>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <iframe
        src={cityData.link}
        className="w-full h-full  pointer-events-none"
        height={300}
        width="100%"
        allowFullScreen="null"
        loading="lazy"
      ></iframe>
      <div className="bg-bglight">
        <h3 className="text-black text-4xl my-10 text-center md:text-2xl lg:text-2xl font-bold xs:text-xl xxs:text-2xl pt-10">
          Search <span className="text-blue-500">{cityData.city}</span> Spare
          parts by Model
        </h3>

        <div className="grid grid-cols-7 md:grid-cols-5 lg:grid-cols-7 mx-10 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-5 xxs:grid xxs:grid-cols-5 s:grid s:grid-cols-3 gap-1 xs:mx-4 s:mx-4 xxs:mx-4 md:ml-11 my-10 pb-10 font-sans">
          {partsposts.map((post, i) => (
            <div key={i}>
              <Link
                href="/search-by-part-name/[parts]"
                as={'/search-by-part-name/' + post.parts}
                title={post.parts + ' in ' + cityData.city}
              >
                <div className="border-blue-800 h-full hover:border-blue-900 bg-white rounded-sm">
                  <p className="text-center text-black font-medium text-sm hover:text-gray-800 p-2">
                    {post.parts + ' in ' + cityData.city}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <TenEntries />
      <Contents />
      <Footer />
    </div>
  );
}
