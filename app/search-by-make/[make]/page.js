export const dynamic = 'force-dynamic';
export const fetchCache = 'default-cache';
export const revalidate = 1814400;
import React from 'react';
import SearchModel from '../../../components/SearchModel';
import FormComponent from '../../../components/FormComponent';
import Link from 'next/link';
import HondaOfferButton from '../../../components/HondaOfferButton';
import Image from 'next/image';
import { getParts, getCity, getFormModel } from '../../page';
import Footer from '../../../components/footer';
import ABS from '../../../public/img/honda-eighth-gen/Anti_Lock_Braking_System.webp';
import AirFilter from '../../../public/img/honda-eighth-gen/Air_Filter.webp';
import AirSuspension from '../../../public/img/honda-eighth-gen/Air_Suspension_Module.webp';
import AxleAssembly from '../../../public/img/honda-eighth-gen/Axle_Assembly_Rear.webp';
import BrakePads from '../../../public/img/honda-eighth-gen/Brake_Pads.webp';
import CatalyticConverter from '../../../public/img/honda-eighth-gen/Catalytic_Converter.webp';
import CylinderHead from '../../../public/img/honda-eighth-gen/Cylinder_Head.webp';
import Distributor from '../../../public/img/honda-eighth-gen/Distributor.webp';
import Engine from '../../../public/img/honda-eighth-gen/Engine.webp';
import ExhaustManifold from '../../../public/img/honda-eighth-gen/Exhaust_Manifold.webp';
import GearBox from '../../../public/img/honda-eighth-gen/Gearbox.webp';
import Grille from '../../../public/img/honda-eighth-gen/Grille.webp';
import Headlight from '../../../public/img/honda-eighth-gen/Headlight.webp';
import MasterCylinderKit from '../../../public/img/honda-eighth-gen/Master_Cylinder.webp';
import Radiator from '../../../public/img/honda-eighth-gen/Radiator.webp';
import RearBumper from '../../../public/img/honda-eighth-gen/Rear_Bumper_Assembly.webp';
import ReverseLight from '../../../public/img/honda-eighth-gen/Reverse_Light.webp';
import Rim from '../../../public/img/honda-eighth-gen/Rim.webp';
import SeatBelt from '../../../public/img/honda-eighth-gen/Seat_Belt.webp';
import ShockAbsorber from '../../../public/img/honda-eighth-gen/Shock_Absorber.webp';
import SideMirror from '../../../public/img/honda-eighth-gen/Side_Mirror.webp';
import SteeringWheel from '../../../public/img/honda-eighth-gen/Steering_Wheel.webp';
import Wheel from '../../../public/img/honda-eighth-gen/Wheel.webp';
import MudFlap from '../../../public/img/honda-eighth-gen/Mud_Flap.webp';
import Contents from '../../../components/Contents';
import Hero_img from '../../../public/img/car-spare-parts.png';
import SearchCity from '../../../components/SearchCity';
import TenEntries from '../../../components/tenentries';
import PartsAccordion from '../../../components/Parts-Accordion';
import { notFound } from 'next/navigation';
import { promises as fs } from 'fs';
import path from 'path';
import VWFilters from '../../volkswagen-spare-parts-uae/VWFilters';

export async function generateStaticParams({ make }) {
  const excludedMakes = [
    'Acura', 'Buick', 'Eagle', 'Lotus', 'Plymouth', 'Pontiac', 'Saab', 'Subaru',
    'Alpha Romeo', 'Geo', 'Oldsmobile', 'Isuzu', 'Saturn', 'Corbin', 'Holden',
    'Spyker', 'Spyker Cars', 'Aston Martin', 'Panoz', 'Foose', 'Morgan', 'Aptera',
    'Smart', 'SRT', 'Roush Performance', 'Pagani', 'Mobility Ventures LLC',
    'RUF Automobile', 'Koenigsegg', 'Karma', 'Polestar', 'STI', 'Kandi', 'Abarth',
    'Dorcen', 'Foton', 'W Motors', 'Opel', 'Skoda', 'Hillman', 'Austin', 'Fillmore',
    'Maybach', 'Merkur', 'Rambler', 'Shelby', 'Studebaker'
  ];

  if (excludedMakes.includes(make)) {
    notFound();
  }

  try {
    const filePath = path.join(process.cwd(), 'public/lib/car-data.json');
    const fileContent = await fs.readFile(filePath, 'utf8');
    const allCars = JSON.parse(fileContent);

    const allowed = allCars.filter(
      car => car.make === make && !excludedMakes.includes(car.make)
    );

    return allowed.map(post => ({
      make: encodeURIComponent(post.make),
    }));
  } catch (error) {
    console.error('Error reading car.json:', error);
    return [];
  }
}


async function getModel(make) {
  try {
    const filePath = path.join(process.cwd(), 'public/lib/car-data.json');
    const jsonData = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(jsonData);
    const decodedMake = decodeURIComponent(make);

    const filtered = data.filter(item => item.make === decodedMake);

    const uniqueObjectArray = [
      ...new Map(filtered.map(item => [item.model, item])).values(),
    ];

    return uniqueObjectArray;
  } catch (error) {
    console.error('Error reading model data:', error.message);
    return [];
  }
}



export async function generateMetadata({ params }) {
  const make = decodeURIComponent(params.make);
  return {
    title: `${make} - Car Auto Spare Parts Order Online from Dubai Dealers in UAE - Best Prices`,
    description: `Buy ${make} Car Parts - Used, Genuine, OEM (Original parts) and Aftermarket
    ${make} spare parts from Dubai Dealer to all over UAE and world Online`,
    metadataBase: new URL(
      `https://www.emirates-car.com/search-by-make/${encodeURIComponent(make)}`
    ),
    openGraph: {
      images: '/favicon.png',
      title: `${make} - Car Auto Spare Parts Order Online from Dubai Dealers in UAE - Best Prices`,
      description: `Buy ${make} Car Parts - Used, Genuine, OEM (Original parts) and Aftermarket
    ${make} spare parts from Dubai Dealer to all over UAE and world Online`,
      url: 'https://emirates-car.com/search-by-make/' + encodeURIComponent(make),
      image: 'https://www.emirates-car.com/img/car-spare-parts.png',
      siteName: 'Emirates Auto Parts',
      images: [
        '/favicon.png',
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
      title: `${make} - Car Auto Spare Parts Order Online from Dubai Dealers in UAE - Best Prices`,
      url: 'https://emirates-car.com/search-by-make/' + encodeURIComponent(make),
      description: `Buy ${make} Car Parts - Used, Genuine, OEM (Original parts) and Aftermarket
    ${make} spare parts from Dubai Dealer to all over UAE and world Online`,
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
    category: `${make} auto spare parts`,
    alternates: {
      canonical: `https://emirates-car.com/search-by-make/${encodeURIComponent(make)}`,
    },
    keywords: `${make} parts, ${make} spare parts sharjah, ${make} spare parts dubai, ${make} spare parts ras al khaimah, ${make} spare parts ajman, ${make} spare parts deira, ${make} spare parts ras al khor, ${make} spare parts al quoz, ${make} spare parts uae, ${make} spare parts online, ${make} used spare parts dubai, ${make} spare parts near me, ${make} oem, ${make} oem parts, ${make} car parts, ${make} spares `,
  };
}

export default async function MakePage({ params }) {
  const make = decodeURIComponent(params.make);
  const carmodel = await getModel(make);
  const partspost = await getParts();
  const cities = await getCity();
  const modelsform = await getFormModel();
  const excludedMakes = [
    'Acura', 'Buick', 'Eagle', 'Lotus', 'Plymouth', 'Pontiac', 'Saab', 'Subaru',
    'Alpha Romeo', 'Geo', 'Oldsmobile', 'Isuzu', 'Saturn', 'Corbin', 'Holden',
    'Spyker', 'Spyker Cars', 'Aston Martin', 'Panoz', 'Foose', 'Morgan',
    'Aptera', 'Smart', 'SRT', 'Roush Performance', 'Pagani', 'Mobility Ventures LLC',
    'RUF Automobile', 'Koenigsegg', 'Karma', 'Polestar', 'STI', 'Kandi', 'Abarth',
    'Dorcen', 'Foton', 'W Motors', 'Opel', 'Skoda', 'Hillman', 'Austin',
    'Fillmore', 'Maybach', 'Merkur', 'Rambler', 'Shelby', 'Studebaker'
  ];

  if (excludedMakes.includes(make)) {
    notFound();
  }
  const isExcludedMake = excludedMakes.includes(make);


  const images = [
    {
      images: ABS,
      name: `${make} ABS`,
      alt: `${make} anti lock braking system`,
      link: '/search-by-part-name/Anti-Lock%20Brake%20Control%20Module%20(ABS)',
    },
    {
      images: AirFilter,
      name: `${make} Air Filter`,
      alt: `${make} air filter`,
      link: '/get-in-touch',
    },
    {
      images: AirSuspension,
      name: `${make} Air Suspension`,
      alt: `${make} Air suspension`,
      link: '/get-in-touch',
    },
    {
      images: AxleAssembly,
      name: `${make} Axle`,
      alt: `${make} axle`,
      link: '/search-by-part-name/Axle%20Assembly%20(Front,%204WD)',
    },
    {
      images: BrakePads,
      name: `${make} Brake Pads`,
      alt: `${make} brake pads`,
      link: '/get-in-touch',
    },
    {
      images: CatalyticConverter,
      name: `${make} Catalytic Convertor`,
      alt: `${make} catalytic convertor`,
      link: '/get-in-touch',
    },
    {
      images: CylinderHead,
      name: `${make} Cylinder Head`,
      alt: `${make} cylinder`,
      link: '/search-by-part-name/Cylinder%20Head)',
    },
    {
      images: Distributor,
      name: `${make} Distributor`,
      alt: `${make} distributor`,
      link: '/search-by-part-name/Distributor',
    },
    {
      images: Engine,
      name: `${make} Engine`,
      alt: `${make} Engine`,
      link: '/search-by-part-name/Engine%20Assembly',
    },
    {
      images: ExhaustManifold,
      name: `${make} Exhaust Manifold`,
      alt: `${make} exhaust system`,
      link: '/search-by-part-name/Exhaust%20Manifold',
    },
    {
      images: GearBox,
      name: `${make} Gearbox / Transmission`,
      alt: `${make} gearbox`,
      link: '/search-by-part-name/Transmission%20Control%20Module',
    },
    {
      images: Grille,
      name: `${make} grill`,
      alt: `${make} grill`,
      link: '/search-by-part-name/Grille',
    },
    {
      images: Headlight,
      name: `${make} Headlight`,
      alt: `${make} headlight bulb`,
      link: '/search-by-part-name/Headlight%20Assembly',
    },
    {
      images: MasterCylinderKit,
      name: `${make} Master Cylinder`,
      alt: `${make} master cylinder`,
      link: '/search-by-part-name/Master%20Cylinder%20(Clutch)',
    },
    {
      images: MudFlap,
      name: `${make} Mud Flaps`,
      alt: `${make} mud flaps`,
      link: '/get-in-touch',
    },
    {
      images: Radiator,
      name: `${make} Radiator`,
      alt: `${make} radiator`,
      link: '/search-by-part-name/Radiator',
    },
    {
      images: RearBumper,
      name: `${make} Rear Bumper`,
      alt: `${make} rear bumper`,
      link: '/search-by-part-name/Bumper%20Assembly%20(Rear)',
    },
    {
      images: ReverseLight,
      name: `${make} Reverse Light`,
      alt: `${make} reverse light`,
      link: '/search-by-part-name/Reverse%20Light',
    },
    {
      images: Rim,
      name: `${make} Rims`,
      alt: `${make} Rims for sale`,
      link: '/search-by-part-name/Rim',
    },
    {
      images: SeatBelt,
      name: `${make} Seat Belt`,
      alt: `${make} seat belt`,
      link: '/search-by-part-name/Seat%20Belt',
    },
    {
      images: ShockAbsorber,
      name: `${make} Shock Absorber`,
      alt: `${make} shock absorber`,
      link: '/search-by-part-name/Shock%20Absorber',
    },
    {
      images: SideMirror,
      name: `${make} Mirror`,
      alt: `${make} mirrors`,
      link: '/search-by-part-name/Mirror%20(Rear%20View)',
    },
    {
      images: SteeringWheel,
      name: `${make} Steering Wheel`,
      alt: `${make} steering wheel`,
      link: '/search-by-part-name/Steering%20Wheel',
    },
    {
      images: Wheel,
      name: `${make} wheels`,
      alt: `${make} wheels`,
      link: '/search-by-part-name/Wheel',
    },
  ];

  return (
    <div>
      <main className="d-flex justify-center pt-10 xs:pt-5 mx-2 font-sans">
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
                    <h1 className="mt-3 text-3xl lg:text-4xl sm:text-lg xs:text-xl xxs:text-xl md:text-xl font-head font-extrabold">
                      <span className="block text-blue-600 xl:inline">
                        {decodeURIComponent(make)} spare parts&nbsp;
                      </span>
                      Used, Genuine, Aftermarket&nbsp; in Dubai, Abu dhabi,
                      Sharjah, Ras Al Khaimah, Ajman - UAE
                    </h1>
                    <div className="mt-5 sm:mt-5 xxs:my-5 xs:my-5 lg:justify-start">
                      <div className="py-3 px-4 sm:py-0 sm:px-0 w-1/2 lg:w-full xs:w-full xxs:w-3/4 xs:mx-auto s:w-full sm:w-3/4 md:w-full md:mx-auto md:px-0 md:py-0 xs:py-0 xs:px-0 xxs:px-0 xxs:py-0 lg:px-0 lg:py-0 xl:px-0 xl:py-0 xxl:px-0 xxl:py-0 rounded-lg shadow-md sm:shadow-none">
                        <a
                          href={'/search-by-make/' + make + '#myForm'}
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
              <div className="xxs:hidden xs:hidden hero_section_blob s:hidden">
                <Image src={Hero_img} alt="car spare parts online" priority />
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="py-5 xxs:px-7 sm:px-7 s:py-6 lg:mx-6 md:mx-6 xs:mx-2 xxs:mx-2 max-w-7xl mx-auto">
            Searching for reliable {make} parts in the UAE? Whether you're
            looking for genuine, used, or aftermarket parts, Emirates Auto Parts
            has you covered. We deal in wide range of parts for popular {make}{' '}
            models, including the{' '}
            {carmodel
              .slice(0, 5)
              .map(c => c.make + ' ' + c.model)
              .join(', ')}
            , and many more. With fast shipping to Dubai, Sharjah, and across
            the UAE, and a commitment to quality, we ensure your {make} remains
            road-ready. Explore our inventory and enjoy quality parts backed by
            expert support
          </p>
        </div>
        <div>
          <div className="place-content-center grid grid-cols-1 gap-3 xs:grid-cols-1 xs:grid s:grid s:grid-cols-1 py-5 md:grid md:grid-cols-1 xl:mx-10 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 xxs:mx-2 s:mx-2  md:ml-11 my-5 mx-10">
            <FormComponent formsData={modelsform} postFilter={partspost} />
          </div>

          <div className="bg-bglight">
            {!isExcludedMake && (
              <>
                <h3 className="text-black text-4xl my-10 text-center md:text-2xl lg:text-2xl font-bold xs:text-xl xxs:text-2xl pt-10">
                  Search <span className="text-blue-500">{decodeURIComponent(make)}</span>{' '}
                  Spare parts by Model
                </h3>

                <SearchModel make={make} car={carmodel} />

                <div className="grid grid-cols-7 md:grid-cols-5 lg:grid-cols-7 mx-10 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-5 xxs:grid xxs:grid-cols-5 s:grid s:grid-cols-3 gap-1 xs:mx-4 s:mx-4 xxs:mx-4 md:ml-11 my-10 pb-10 font-sans">
                  {carmodel.map((post, i) => {
                    const linkHref = `/search-by-make/[make]/[model]`;
                    const linkAs = `/search-by-make/${post.make}/${post.model}`;

                    return (
                      <div key={i}>
                        <Link
                          href={linkHref}
                          as={linkAs}
                          title={`${post.make} ${post.model} spare parts`}
                        >
                          <div className="border-blue-800 h-full hover:border-blue-900 bg-white rounded-sm">
                            <p className="text-center text-black text-sm font-medium hover:text-gray-800 p-2">
                              {make + ' ' + post.model.replace('%2F', '/') + ' parts'}
                            </p>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </>
            )}


          </div>


          <div className="text-center mt-2 text-red-400 text-sm xs:text-xs py-5">
            **Model not found above?
            <Link href="/get-in-touch">
              <nobr className="text-blue-500 text-sm underline">
                {' '}
                Get in touch with us {'>>'}**
              </nobr>
            </Link>{' '}
          </div></div>
        <div className="text-center">
          {make === 'Honda' ? <HondaOfferButton /> : <></>}
        </div>
        {make === 'Volkswagen' ? <div>
          <div className="text-black text-4xl my-10 text-center md:text-2xl lg:text-2xl font-bold xs:text-xl xxs:text-2xl pt-10">
            Popular{' '}
            <span className="text-blue-500">
              Searched {decodeURIComponent(make)} Parts
            </span>{' '}
            in UAE
          </div>
          <VWFilters />
        </div> : <></>}

        <div>
          <div className="text-black text-4xl my-10 text-center md:text-2xl lg:text-2xl font-bold xs:text-xl xxs:text-2xl pt-10">
            Popular{' '}
            <span className="text-blue-500">
              Searched {decodeURIComponent(make)} Parts
            </span>{' '}
            in UAE
          </div>
          <div className="grid grid-cols-5 sm:gril-cols-2 xxs:grid-cols-2 gap-2 s:grid-cols-2 xs:grid-cols-1 px-5 xs:px-2 xxs:px-2 md:grid-cols-3 lg:grid-cols-3 max-w-7xl mx-auto">
            {images.map((i, k) => (
              <div key={k} className="border-2 p-5 relative bg-gray-200">
                <sup className="absolute top-0 right-0 text-xs font-bold text-white bg-red-600 rounded-sm p-1">
                  Sale!
                </sup>
                <div className="h-50 flex justify-center">
                  <div className="text-lg font-bold font-sans xs:text-base">
                    {i.name}
                  </div>
                </div>

                <Image
                  src={i.images}
                  alt={i.alt}
                  height={250}
                  width={250}
                  className="object-none object-center p-1"
                  priority
                />

                <Link
                  href={i.link}
                  className="flex items-center justify-center px-8 py-2 my-5 text-lg border border-transparent font-medium rounded-sm text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-lg md:px-5 xs:py-2 xs:text-xs xs:my-2 xxs:text-sm xxs:my-2 s:text-sm s:my-2 focus:filter brightness-125"
                  title={i.name}
                >
                  Inquire Now
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-bglight ">
          <h3 className="text-black text-4xl my-10 text-center md:text-2xl lg:text-2xl font-bold xs:text-xl xxs:text-2xl pt-10">
            Search{' '}
            <span className="text-blue-500">{make}</span>{' '}
            Spare parts Anywhere in UAE
          </h3>
          <SearchCity cities={cities} />
          <div className="grid grid-cols-7 md:grid-cols-5 lg:grid-cols-7 mx-10 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-5 xxs:grid xxs:grid-cols-5 s:grid s:grid-cols-3 gap-1 xs:mx-4 s:mx-4 xxs:mx-4 md:ml-11 my-10 pb-10 font-sans">
            {cities.map((post, i) => (
              <div key={i}>
                <Link
                  href="/search-by-cities-in-uae/[city]"
                  as={'/search-by-cities-in-uae/' + post.city}
                  title={make + ' spare parts ' + post.city}
                >
                  <div className="border-blue-800 h-full hover:border-blue-900 bg-white rounded-sm">
                    <p className="text-center text-black font-medium text-sm hover:text-gray-800 p-2">
                      {post.city}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <TenEntries />
        <PartsAccordion make={make} />
        <article className="font-sans bg-bglight px-10 xs:px-3 xxs:px-3 md:px-5 py-10">
          <section className="p-6 bg-bglight text-gray-800" aria-labelledby="car-parts-methods-heading">
            <h2 id="car-parts-methods-heading" className="text-2xl font-bold mb-4">
              5 Ways You Can Find Parts for Your {make} car
            </h2>

            <p className="mb-4">
              <strong className="text-black">Emirates-car.com</strong> specializes in spare parts for Japanese, Korean, German, French, and American cars. The main brands we deal with include Honda, Volkswagen, Audi, Porsche, Infiniti, Volvo, Toyota, Nissan, Lexus, Mini, BMW, Mercedes-Benz, Renault, Peugeot, Kia, Hyundai, Genesis, Jaguar, Ford, Hummer, Dodge, Cadillac, GMC, Jeep, and Lincoln.
            </p>

            <div className="mb-4 text-black">
              <strong>Tags: </strong>
              <span className="text-blue-600 underline">
                #{make}_parts, #{make}_spare_parts, #autoparts, #spare_parts_online, #{make}_spare_parts_dubai, #{make}_parts_in_uae, #{make}_parts_dubai, #{make}_parts_sharjah, #dubai_{make}_parts_online
              </span>
            </div>

            <p className="mb-4">
              At{' '}
              <a href="/" className="text-blue-500 underline">
                Emirates-car.com
              </a>, you can buy premium, high-quality used, genuine, OEM, and aftermarket parts in Dubai, Sharjah, Ajman, Ras Al Khaimah, Abu Dhabi, and worldwide. Click{' '}
              <a href="/" className="text-blue-500 underline">
                Get Free Quote
              </a>{' '}
              to get the best prices now!
            </p>

            {/* Method 1 */}
            <section aria-labelledby="method-1-heading" className="mb-6">
              <h3 id="method-1-heading" className="text-xl font-semibold mb-3">
                1. The Traditional Way: Pros and Cons
              </h3>
              <p className="mb-2">
                You can visit a nearby {make} spare parts shop and purchase what you need. This approach is simple and effective if the shop stocks the brands and models you are looking for.
              </p>
              <div className="mb-2">
                <strong>Pros:</strong>
                <ul className="list-disc ml-6">
                  <li>Easy and direct access to spare parts.</li>
                  <li>Immediate availability if the store has your required part.</li>
                </ul>
              </div>
              <div>
                <strong>Cons:</strong>
                <ul className="list-disc ml-6">
                  <li>Limited stock or brand availability.</li>
                  <li>Some shops specialize in only a few brands.</li>
                </ul>
              </div>
            </section>

            {/* Method 2 */}
            <section aria-labelledby="method-2-heading" className="mb-6">
              <h3 id="method-2-heading" className="text-xl font-semibold mb-3">
                2. Giant E-Commerce Companies: Pros and Cons
              </h3>
              <p className="mb-2">Online marketplaces like Amazon, Flipkart, and eBay are alternatives when local shops lack inventory.</p>
              <div className="mb-2">
                <strong>Pros:</strong>
                <ul className="list-disc ml-6">
                  <li>Wide variety of products.</li>
                  <li>Convenient ordering from home.</li>
                </ul>
              </div>
              <div>
                <strong>Cons:</strong>
                <ul className="list-disc ml-6">
                  <li>Risk of damaged parts due to logistics.</li>
                  <li>Possibility of loss during transit.</li>
                  <li>Unreliable for specific car models.</li>
                </ul>
              </div>
            </section>

            {/* Method 3 */}
            <section aria-labelledby="method-3-heading" className="mb-6">
              <h3 id="method-3-heading" className="text-xl font-semibold mb-3">
                3. Local Dealers: Pros and Cons
              </h3>
              <p className="mb-2">
                Local dealers often come recommended and provide tailored services.
              </p>
              <div className="mb-2">
                <strong>Pros:</strong>
                <ul className="list-disc ml-6">
                  <li>Trustworthy and reliable.</li>
                  <li>Specialized by brand.</li>
                </ul>
              </div>
              <div>
                <strong>Cons:</strong>
                <ul className="list-disc ml-6">
                  <li>Fewer due to digital shift.</li>
                  <li>Accessibility may be limited by location.</li>
                </ul>
              </div>
            </section>

            {/* Method 4 */}
            <section aria-labelledby="method-4-heading" className="mb-6">
              <h3 id="method-4-heading" className="text-xl font-semibold mb-3">
                4. Online Marketplaces: Mostly Cons
              </h3>
              <p className="mb-2">
                Marketplaces simplify browsing but present serious limitations:
              </p>
              <ul className="list-disc ml-6">
                <li>Limited availability for rare models.</li>
                <li>Old models often not stocked.</li>
                <li>High risk of spam or fraud.</li>
              </ul>
            </section>

            {/* Method 5 */}
            <section aria-labelledby="method-5-heading">
              <h3 id="method-5-heading" className="text-xl font-semibold mb-3">
                5. Online Dealer Websites: Only Pros!
              </h3>
              <p className="mb-2">
                Dealer websites like{' '}
                <a href="/" className="text-blue-500 underline">
                  Emirates-car.com
                </a>{' '}
                offer the most reliable experience.
              </p>
              <div>
                <strong>Pros:</strong>
                <ul className="list-disc ml-6">
                  <li>Multiple trusted options online.</li>
                  <li>Quick inquiry process.</li>
                  <li>Reliable communication.</li>
                </ul>
              </div>
              <p className="mt-4">
                Visit{' '}
                <a href="/" className="text-blue-500 underline">
                  Emirates-car.com
                </a>{' '}
                to easily find {make} spare parts for your {make} car.
              </p>
            </section>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
