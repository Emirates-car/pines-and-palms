export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
import Image from 'next/image';
import React from 'react';
import { getCity, getFormModel, getMake, getParts } from '../../page';
import Link from 'next/link';
import FormComponent from '../../../components/FormComponent';
import Footer from '../../../components/footer';
import TenEntries from '../../../components/tenentries';
import CarParts from '../../../public/img/car-spare-parts.png';
import Counter from '../../../components/service-countup';
import path from 'path';
import { promises as fs } from 'fs';
import { notFound } from 'next/navigation';


export async function generateStaticParams() {
  try {
    const filePath = path.join(process.cwd(), 'public/lib/parts.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(fileContents);

    const params = data.map(item => ({
      parts: item.parts,
    }));

    return params;
  } catch (error) {
    console.error('Error generating static params from JSON:', error);
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { parts } = params;
  const decodedParts = decodeURIComponent(parts);
  return {
    title: `${decodedParts} Car Auto Spare Parts Order Online in UAE | Emirates-car.com`,
    description: `Buy Online and Get delivered Used, New, Genuine / Original / OEM, Aftermarket auto spare parts Online in ${decodedParts} UAE`,
    openGraph: {
      images: '/favicon.png',
      title: `${decodedParts} Car Auto Spare Parts Order Online in UAE | Emirates-car.com`,
      description: `Buy Online and Get delivered Used, New, Genuine / Original / OEM, Aftermarket auto spare parts Online in ${decodedParts} UAE`,
      url: 'https://emirates-car.com/search-by-part-name/' + parts,
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
      title: `${decodedParts} Car Auto Spare Parts Order Online in UAE | Emirates-car.com`,
      url: 'https://www.emirates-car.com/search-by-part-name/' + parts,
      description: `Buy Online and Get delivered Used, New, Genuine / Original / OEM, Aftermarket auto spare parts Online in ${decodedParts} UAE`,
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
    category: `${decodedParts}`,
    alternates: {
      canonical: `https://emirates-car.com/search-by-part-name/${encodeURIComponent(parts)}`,
    },
    keywords: `${decodedParts} for honda, ${decodedParts} in dubai, ${decodedParts} for porsche, ${decodedParts} for volkswagen, ${decodedParts} for volvo, ${decodedParts} online, ${decodedParts} for ford, ${decodedParts} spare parts uae, ${decodedParts} spare parts online, ${decodedParts} used spare parts dubai, ${decodedParts} spare parts near me`,
  };
}
async function getPartsData(parts) {
  const filePath = path.join(process.cwd(), 'public/lib/parts.json');
  const jsonData = await fs.readFile(filePath, 'utf8');
  const data = JSON.parse(jsonData);

  const decodedParts = decodeURIComponent(parts);
  const filtered = data.find(item => item.parts === decodedParts);

  return filtered;
}
export default async function Parts({ params }) {
  const { parts } = params;
  const partsData = await getPartsData(parts);

  if (!partsData || partsData.length === 0) {
    notFound();
  }

  const cities = await getCity();
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
                    <span class="block">
                      Expert Parts&nbsp;
                      <span class="block text-blue-600 xl:inline">
                        Seamless Performance
                      </span>
                    </span>
                  </h2>
                  <h1 className="mt-3 text-5xl lg:text-4xl sm:text-lg xs:text-xl xxs:text-xl md:text-xl font-head font-extrabold">
                    Used / New / Genuine / Aftermarket{' '}
                    <span className="text-blue-500">{partsData.parts}</span> in
                    UAE
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
              </div>
            </div>
            <div className="xxs:hidden xs:hidden p-35 md:p-20 lg:p-20">
              <Image
                alt="emirates car"
                className="rounded-sm"
                src={CarParts}
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
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

          <h3 className="text-black text-4xl text-center md:text-2xl lg:text-2xl font-bold xs:text-xl xxs:text-2xl pt-10">
            Search{' '}
            <span className="text-blue-500">
              {decodeURIComponent(partsData.parts)}{' '}
            </span>
            in UAE
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
          <TenEntries />
          <Counter />
          <h3 className="text-black text-4xl text-center md:text-2xl lg:text-2xl font-bold xs:text-xl xxs:text-2xl pt-10">
            Search{' '}
            <span className="text-blue-500">
              {decodeURIComponent(partsData.parts)}{' '}
            </span>
            parts in UAE
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
                  <div className="border h-full  hover:border-blue-600 py-3 bg-gray-100 rounded-sm">
                    <div className=" text-center font-sans ">
                      {decodeURIComponent(partsData.parts)} in {post.city}
                    </div>
                  </div>
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
