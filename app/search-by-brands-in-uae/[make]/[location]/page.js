export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
import React from 'react';
import Hero_img from '../../../../public/img/car-spare-parts.png';
import TenEntries from '../../../../components/tenentries';
import Contents from '../../../../components/Contents';
import ABS from '../../../../public/img/honda-eighth-gen/Anti_Lock_Braking_System.webp';
import AirFilter from '../../../../public/img/honda-eighth-gen/Air_Filter.webp';
import AirSuspension from '../../../../public/img/honda-eighth-gen/Air_Suspension_Module.webp';
import AxleAssembly from '../../../../public/img/honda-eighth-gen/Axle_Assembly_Rear.webp';
import BrakePads from '../../../../public/img/honda-eighth-gen/Brake_Pads.webp';
import CatalyticConverter from '../../../../public/img/honda-eighth-gen/Catalytic_Converter.webp';
import CylinderHead from '../../../../public/img/honda-eighth-gen/Cylinder_Head.webp';
import Distributor from '../../../../public/img/honda-eighth-gen/Distributor.webp';
import Engine from '../../../../public/img/honda-eighth-gen/Engine.webp';
import ExhaustManifold from '../../../../public/img/honda-eighth-gen/Exhaust_Manifold.webp';
import GearBox from '../../../../public/img/honda-eighth-gen/Gearbox.webp';
import Grille from '../../../../public/img/honda-eighth-gen/Grille.webp';
import Headlight from '../../../../public/img/honda-eighth-gen/Headlight.webp';
import MasterCylinderKit from '../../../../public/img/honda-eighth-gen/Master_Cylinder.webp';
import Radiator from '../../../../public/img/honda-eighth-gen/Radiator.webp';
import RearBumper from '../../../../public/img/honda-eighth-gen/Rear_Bumper_Assembly.webp';
import ReverseLight from '../../../../public/img/honda-eighth-gen/Reverse_Light.webp';
import Rim from '../../../../public/img/honda-eighth-gen/Rim.webp';
import SeatBelt from '../../../../public/img/honda-eighth-gen/Seat_Belt.webp';
import ShockAbsorber from '../../../../public/img/honda-eighth-gen/Shock_Absorber.webp';
import SideMirror from '../../../../public/img/honda-eighth-gen/Side_Mirror.webp';
import SteeringWheel from '../../../../public/img/honda-eighth-gen/Steering_Wheel.webp';
import Wheel from '../../../../public/img/honda-eighth-gen/Wheel.webp';
import MudFlap from '../../../../public/img/honda-eighth-gen/Mud_Flap.webp';
import { getCity, getFormModel, getParts, getMake } from '../../../page';
import Image from 'next/image';
import FormComponent from '../../../../components/FormComponent';
import SearchModel from '../../../../components/SearchModel';
import Link from 'next/link';
import SearchCity from '../../../../components/SearchCity';
import Footer from '../../../../components/footer';
import HondaOfferButton from '../../../../components/HondaOfferButton';
import PartsAccordion from '../../../../components/Parts-Accordion';
import { promises as fs } from 'fs';
import path from 'path';

export async function generateStaticParams({ params }) {

  try {
    const carPath = path.join(process.cwd(), 'public/lib/car-data.json');
    const carData = await fs.readFile(carPath, 'utf8');
    const cars = JSON.parse(carData);

    const cityPath = path.join(process.cwd(), 'public/lib/basecity.json');
    const cityData = await fs.readFile(cityPath, 'utf8');
    const locations = JSON.parse(cityData);

    const uniqueMakes = Array.from(
      new Set(cars.map(car => car.make))
    );

    const paths = [];
    uniqueMakes.forEach(make => {
      locations.forEach(location => {
        paths.push({
          make,
          location: location.city,
        });
      });
    });

    return paths;
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}


export async function generateMetadata({ params }) {
  const { make, location } = params;
  return {
    title: `${make} - ${decodeURIComponent(
      location,
    )} Car Auto Spare Parts Order Online in UAE from Dubai -
      Best Prices`,
    description: `Buy ${make} - ${decodeURIComponent(
      location,
    )} auto spare parts Online and Get delivered Used, New, Genuine / OEM, Aftermarket in UAE`,
    openGraph: {
      images: '/favicon.png',
      title: `${make} - ${decodeURIComponent(
        location,
      )} Car Auto Spare Parts Order Online in UAE from Dubai -
      Best Prices`,
      description: `Buy ${make} - ${decodeURIComponent(
        location,
      )} auto spare parts Online and Get delivered Used, New, Genuine / OEM, Aftermarket in UAE`,
      url: 'https://emirates-car.com/search-by-make/' + make + '/' + location,
      image: '/img/car-spare-parts.png',
      siteName: 'Emirates Auto Parts',
      images: [
        {
          url: '/icon-192x192.png',
          width: 192,
          height: 192,
        },
        {
          url: '/icons/icon-512x512.png',
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
      title: `${make} - ${decodeURIComponent(
        location,
      )} Car Auto Spare Parts Order Online in UAE from Dubai -
      Best Prices`,
      url: '/search-by-make/' + make + '/' + location,
      description: `Buy ${make} - ${decodeURIComponent(
        location,
      )} auto spare parts Online and Get delivered Used, New, Genuine / OEM, Aftermarket in UAE`,
      images: ['/favicon.png'],
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
    alternates: {
      canonical: `/search-by-make/${make}/${location}`,
    },
    category: `${make} ${decodeURIComponent(location)} auto spare parts`,
    keywords: `${make} ${decodeURIComponent(
      location,
    )} spare parts sharjah, used ${make} ${location} spare parts, ${make} ${decodeURIComponent(
      location,
    )} spare parts online, ${make} ${decodeURIComponent(
      location,
    )} spare parts near me, ${make} ${decodeURIComponent(
      location,
    )} wheels, ${make} ${decodeURIComponent(
      location,
    )} distributor, ${make} ${decodeURIComponent(
      location,
    )} shock absorber, ${make} ${decodeURIComponent(
      location,
    )} spark plugs, ${make} ${decodeURIComponent(
      location,
    )} fuse box, ${make} ${decodeURIComponent(
      location,
    )} radiator, ${make} ${decodeURIComponent(location)} fuel pump`,
  };
}


async function getModel(make) {
  const filePath = path.join(process.cwd(), 'public/lib/car-data.json');
  const jsonData = await fs.readFile(filePath, 'utf8');
  const data = JSON.parse(jsonData);

  const filtered = data.filter(item => item.make === make);

  const uniqueObjectArray = [
    ...new Map(filtered.map(item => [item.model, item])).values(),
  ];

  return uniqueObjectArray;
}


async function getLocation(make) {
  const filePath = path.join(process.cwd(), 'public/lib/car-data.json');
  const jsonData = await fs.readFile(filePath, 'utf8');
  const data = JSON.parse(jsonData);

  const filtered = data.filter(item => item.make === make);

  const uniqueObjectArray = [
    ...new Map(filtered.map(item => [item.location, item])).values(),
  ];

  return uniqueObjectArray;
}

export default async function Cities({ params }) {
  const { make, location } = params;
  const carmodel = await getModel(make);
  const partspost = await getParts();
  const cities = await getCity();
  const posts = await getMake();
  const modelsform = await getFormModel();

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
                      Used / Genuine / Aftermarket&nbsp;
                      <span className="block text-blue-600 xl:inline">
                        {encodeURIComponent(make)} Auto parts&nbsp;
                      </span>
                      in {decodeURIComponent(location)} UAE
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
            Searching for reliable {make} parts in the{' '}
            {decodeURIComponent(location)} UAE? Whether you're looking for
            genuine, used, or aftermarket parts, Emirates Auto Parts has you
            covered. We stock a wide range of parts for popular {make} models,
            including the{' '}
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
            <h3 className="text-black text-4xl my-10 text-center md:text-2xl lg:text-2xl font-bold xs:text-xl xxs:text-2xl pt-10">
              Search{' '}
              <span className="text-blue-500">{encodeURIComponent(make)}</span>{' '}
              Spare parts in{' '}
              <span className="text-blue-500">
                {decodeURIComponent(location)}
              </span>
            </h3>
            <SearchModel make={make} car={carmodel} />
            <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 mx-10 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-5 xxs:grid xxs:grid-cols-5 s:grid s:grid-cols-3 gap-1 xs:mx-4 s:mx-4 xxs:mx-4 md:ml-11 my-10 pb-10 font-sans">
              {carmodel.map((post, i) => (
                <div key={i}>
                  <Link
                    href="/search-by-make/[make]/[model]"
                    as={'/search-by-make/' + post.make + '/' + post.model}
                    title={post.make + post.model + ' spare parts' + location}
                  >
                    <div className="border-blue-800 h-full  hover:border-blue-900 bg-white rounded-sm">
                      <p className="text-center text-black text-sm font-medium hover:text-gray-800 p-2">
                        {make +
                          ' ' +
                          post.model.replace('%2F', '/') +
                          ' parts in ' +
                          decodeURIComponent(location)}{' '}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}{' '}
            </div>
          </div>
        </div>

        <div className="text-center mt-2 text-red-400 text-sm xs:text-xs py-5">
          **Model not found above?
          <Link href="/get-in-touch">
            <nobr className="text-blue-500 text-sm underline">
              {' '}
              Get in touch with us {'>>'}**
            </nobr>
          </Link>{' '}
        </div>
        <div className="text-center">
          {make === 'Honda' ? <HondaOfferButton /> : <></>}
        </div>
        <div>
          <div className="text-black text-4xl my-10 text-center md:text-2xl lg:text-2xl font-bold xs:text-xl xxs:text-2xl pt-10">
            Popular{' '}
            <span className="text-blue-500">
              Searched {encodeURIComponent(make)} Parts
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
            <span className="text-blue-500">{encodeURIComponent(make)}</span>{' '}
            Spare parts Anywhere in {location}
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
                      {encodeURIComponent(make)} parts in {post.city}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <TenEntries />
        <div className="grid grid-cols-4 xs:ml-4 md:mx-4 sm:ml-0 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-3 md:grid md:grid-cols-3 2xs:grid 2xs:grid-cols-3 gap-1 2xs:mx-4 md:ml-11 mr-3 my-10 font-sans">
          {posts.map((post, i) => (
            <div key={i}>
              <Link
                href="/search-by-brands-in-uae/[make]/[location]"
                as={'/search-by-brands-in-uae/' + post.make + '/' + location}
                title={post.make + ' spare parts'}
              >
                <main className="text-center text-base xs:text-xs xs:text-center font-mono text-blue-500 underline hover:text-blue-700 focus:text-blue-700 border border-gray-100">
                  <div className="flex justify-center">
                    <Image
                      alt={post.make + ' parts uae'}
                      src={'/img/car-logos/' + post.img}
                      className="object-scale-down shadow-xl"
                      height={30}
                      width={30}
                    />
                    <br />
                  </div>
                  {post.make.toUpperCase()}
                </main>
              </Link>
            </div>
          ))}
        </div>
        <PartsAccordion make={make} location={location} />
        <Contents />
      </main>
      <Footer />
    </div>
  );
}
