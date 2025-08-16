export const dynamic = 'force-dynamic';
export const fetchCache = 'default-cache';
export const revalidate = 1814400;
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HondaOfferButton from '../../../../components/HondaOfferButton';
import Footer from '../../../../components/footer';
import ABS from '../../../../public/img/honda-eighth-gen/ABS.webp';
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
import { getFormModel, getParts } from '../../../page';
import FormComponent from '../../../../components/FormComponent';
import { notFound } from 'next/navigation';
import { promises as fs } from 'fs';
import path from 'path';

export async function generateStaticParams() {
  const excludedMakes = [
    'Acura', 'Buick', 'Eagle', 'Lotus', 'Plymouth', 'Pontiac', 'Saab', 'Subaru',
    'Alpha Romeo', 'Geo', 'Oldsmobile', 'Isuzu', 'Saturn', 'Corbin', 'Holden',
    'Spyker', 'Spyker Cars', 'Aston Martin', 'Panoz', 'Foose', 'Morgan', 'Aptera',
    'Smart', 'SRT', 'Roush Performance', 'Pagani', 'Mobility Ventures LLC',
    'RUF Automobile', 'Koenigsegg', 'Karma', 'Polestar', 'STI', 'Kandi', 'Abarth',
    'Dorcen', 'Foton', 'W Motors', 'Opel', 'Skoda', 'Hillman', 'Austin', 'Fillmore',
    'Maybach', 'Merkur', 'Rambler', 'Shelby', 'Studebaker'
  ];

  try {
    const filePath = path.join(process.cwd(), 'public/lib/car-data.json');
    const jsonData = await fs.readFile(filePath, 'utf-8');
    const allCars = JSON.parse(jsonData);

    const filtered = allCars.filter(car => !excludedMakes.includes(car.make));

    const uniquePairs = Array.from(
      new Map(
        filtered.map(item => [`${item.make}-${item.model}`, { make: item.make, model: item.model }])
      ).values()
    );

    return uniquePairs.map(({ make, model }) => ({
      make,
      model: model
    }));
  } catch (error) {
    console.error('Error reading static params from car.json:', error);
    return [];
  }
}



export async function generateMetadata({ params }) {
  const { make, model } = params;
  return {
    title: `${make} - ${decodeURIComponent(
      model
    )} Car Auto Spare Parts Order Online in UAE from Dubai -
    Best Prices`,
    description: `Buy ${make} - ${decodeURIComponent(
      model
    )} auto spare parts Online and Get delivered Used, New, Genuine / OEM, Aftermarket in UAE`,

    openGraph: {
      images: '/favicon.png',
      title: `${make} - ${decodeURIComponent(
        model
      )} Car Auto Spare Parts Order Online in UAE from Dubai -
    Best Prices`,
      description: `Buy ${make} - ${decodeURIComponent(
        model
      )} auto spare parts Online and Get delivered Used, New, Genuine / OEM, Aftermarket in UAE`,
      url: 'https://www.emirates-car.com/search-by-make/' + make + '/' + model,
      image: '/img/car-spare-parts.png',
      siteName: 'Emirates Auto Parts',
      images: [
        '/favicon.png',
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
        model
      )} Car Auto Spare Parts Order Online in UAE from Dubai -
    Best Prices`,
      url: '/search-by-make/' + make + '/' + model,
      description: `Buy ${make} - ${decodeURIComponent(
        model
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
      canonical: `https://emirates-car.com/search-by-make/${make}/${model}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    category: `${make} ${decodeURIComponent(model)} auto spare parts`,
    keywords: `${make} ${decodeURIComponent(
      model
    )} spare parts sharjah, used ${make} ${model} spare parts, ${make} ${decodeURIComponent(
      model
    )} spare parts online, ${make} ${decodeURIComponent(
      model
    )} spare parts near me, ${make} ${decodeURIComponent(
      model
    )} wheels, ${make} ${decodeURIComponent(
      model
    )} distributor, ${make} ${decodeURIComponent(
      model
    )} shock absorber, ${make} ${decodeURIComponent(
      model
    )} spark plugs, ${make} ${decodeURIComponent(
      model
    )} fuse box, ${make} ${decodeURIComponent(
      model
    )} radiator, ${make} ${decodeURIComponent(model)} fuel pump`,
  };
}
async function getMakeImage(make, model) {
  try {
    const filePath = path.join(process.cwd(), 'public/lib/car-data.json');
    const jsonData = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(jsonData);

    const filtered = data.filter(item => item.make === make && item.model === model);

    const uniqueMkeArray = [
      ...new Map(filtered.map(item => [item.img, item])).values(),
    ];

    const imageMake = uniqueMkeArray.map(item => item.img);

    return imageMake;
  } catch (error) {
    console.error('Error reading make images:', error.message);
    return [];
  }
}

async function getDescription(make, model) {
  try {
    const filePath = path.join(process.cwd(), 'public/lib/car-data.json');
    const jsonData = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(jsonData);

    const filtered = data.filter(item => item.make === make && item.model === model);

    const uniqueDescriptionArray = [
      ...new Map(filtered.map(item => [item.description, item])).values(),
    ];

    const description = uniqueDescriptionArray.map(i => i.description);

    return description;
  } catch (error) {
    console.error('Error reading descriptions:', error.message);
    return [];
  }
}


async function getModel(make) {
  try {
    const filePath = path.join(process.cwd(), 'public/lib/car-data.json');
    const jsonData = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(jsonData);
    const filtered = data.filter(item => item.make === make);

    const uniqueObjectArray = [
      ...new Map(filtered.map(item => [item.model, item])).values(),
    ];

    return uniqueObjectArray;
  } catch (error) {
    console.error('Error reading model data:', error.message);
    return [];
  }
}

async function getMake() {
  try {
    const filePath = path.join(process.cwd(), 'public/lib/car-data.json');
    const jsonData = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(jsonData);

    const makeArray = [
      ...new Map(data.map(item => [item.make, item])).values(),
    ];

    return makeArray;
  } catch (error) {
    console.error('Error reading make data:', error.message);
    return [];
  }
}


export default async function Model({ params }) {
  const { make, model } = params;
  const imageMake = await getMakeImage(make, model);
  const description = await getDescription(make, model);
  const uniqueMakeArray = await getModel(make, model);
  const makeArray = await getMake();
  const partspost = await getParts();
  const modelsform = await getFormModel();
  const excludedMakes = [
    'Acura',
    'Buick',
    'Eagle',
    'Lotus',
    'Plymouth',
    'Pontiac',
    'Saab',
    'Subaru',
    'Alpha Romeo',
    'Geo',
    'Oldsmobile',
    'Isuzu',
    'Saturn',
    'Corbin',
    'Holden',
    'Spyker',
    'Spyker Cars',
    'Aston Martin',
    'Panoz',
    'Foose',
    'Morgan',
    'Aptera',
    'Smart',
    'SRT',
    'Roush Performance',
    'Pagani',
    'Mobility Ventures LLC',
    'RUF Automobile',
    'Koenigsegg',
    'Karma',
    'Polestar',
    'STI',
    'Kandi',
    'Abarth',
    'Dorcen',
    'Foton',
    'W Motors',
    'Opel',
    'Skoda',
    'Hillman',
    'Austin',
    'Fillmore',
    'Maybach',
    'Merkur',
    'Rambler',
    'RUF Automobile',
    'Saturn',
    'Shelby',
    'Studebaker',
  ];
  const isExcludedMake = excludedMakes.includes(make);
  if (excludedMakes.includes(make)) {
    notFound();
  }

  const filePath = path.join(process.cwd(), 'public/lib/car-data.json');
  const jsonData = await fs.readFile(filePath, 'utf8');
  const allData = JSON.parse(jsonData);

  const data = allData.filter(item => item.make === make && item.model === model);

  if (!data || data.length === 0) {
    notFound();
  }

  const images = [
    {
      images: ABS,
      name: 'ABS',
      alt: `${make} ${model} "anti lock braking system"`,
      link: '/search-by-part-name/Anti-Lock%20Brake%20Control%20Module%20(ABS)',
    },
    {
      images: AirFilter,
      name: 'Air Filter',
      alt: `${make} ${model} "air filter"`,
      link: '/get-in-touch',
    },

    {
      images: AirSuspension,
      name: 'Air Suspension',
      alt: `${make} ${model} "air suspension"`,
      link: '/get-in-touch',
    },

    {
      images: AxleAssembly,
      name: 'Axle',
      alt: `${make} ${model} " axle"`,
      link: '/search-by-part-name/Axle%20Assembly%20(Front,%204WD)',
    },
    {
      images: BrakePads,
      name: 'Brake Pads',
      alt: `${make} ${model} "brake pads"`,
      link: '/get-in-touch',
    },
    {
      images: CatalyticConverter,
      name: 'Catalytic Convertor',
      alt: `${make} ${model} "catalytic convertor"`,
      link: '/get-in-touch',
    },
    {
      images: CylinderHead,
      name: 'Cylinder Head',
      alt: `${make} ${model} "cylinder"`,
      link: '/search-by-part-name/Cylinder%20Head)',
    },
    {
      images: Distributor,
      name: 'Distributor',
      alt: 'honda accord distributor',
      link: '/search-by-part-name/Distributor',
    },
    {
      images: Engine,
      name: 'Engine',
      alt: `${make} ${model} "engine"`,
      link: '/search-by-part-name/Engine%20Assembly',
    },
    {
      images: ExhaustManifold,
      name: 'Exhaust Manifold',
      alt: `${make} ${model} "exhaust system"`,
      link: '/search-by-part-name/Exhaust%20Manifold',
    },
    {
      images: GearBox,
      name: 'Gearbox / Transmission',
      alt: `${make} ${model} "gearbox"`,
      link: '/search-by-part-name/Transmission%20Control%20Module',
    },
    {
      images: Grille,
      name: 'Grille',
      alt: `${make} ${model} " grill"`,
      link: '/search-by-part-name/Grille',
    },
    {
      images: Headlight,
      name: 'Headlight',
      alt: `${make} ${model} " headlight bulb"`,
      link: '/search-by-part-name/Headlight%20Assembly',
    },
    {
      images: MasterCylinderKit,
      name: 'Master Cylinder',
      alt: `${make} ${model} " master cylinder"`,
      link: '/search-by-part-name/Master%20Cylinder%20(Clutch)',
    },
    {
      images: MudFlap,
      name: 'Mud Flap',
      alt: `${make} ${model} " mud flaps"`,
      link: '/get-in-touch',
    },
    {
      images: Radiator,
      name: 'Radiator',
      alt: `${make} ${model} " radiator"`,
      link: '/search-by-part-name/Radiator',
    },
    {
      images: RearBumper,
      name: 'Rear Bumper',
      alt: `${make} ${model}" rear bumper"`,
      link: '/search-by-part-name/Bumper%20Assembly%20(Rear)',
    },
    {
      images: ReverseLight,
      name: 'Reverse Light',
      alt: `${make} ${model} "reverse light bulb"`,
      link: '/search-by-part-name/Reverse%20Light',
    },
    {
      images: Rim,
      name: 'Rims',
      alt: `${make} ${model} "rims for sale"`,
      link: '/search-by-part-name/Rim',
    },
    {
      images: SeatBelt,
      name: 'Seat Belt',
      alt: `${make} ${model} "seat belt"`,
      link: '/search-by-part-name/Seat%20Belt',
    },
    {
      images: ShockAbsorber,
      name: 'Shock Absorber',
      alt: `${make} ${model} "shock absorber"`,
      link: '/search-by-part-name/Shock%20Absorber',
    },
    {
      images: SideMirror,
      name: 'Mirror',
      alt: `${make} ${model}" mirrors"`,
      link: '/search-by-part-name/Mirror%20(Rear%20View)',
    },
    {
      images: SteeringWheel,
      name: 'Steering Wheel',
      alt: `${make} ${model} " steering wheel"`,
      link: '/search-by-part-name/Steering%20Wheel',
    },
    {
      images: Wheel,
      name: 'Wheels',
      alt: `${make} ${model} " wheels"`,
      link: '/search-by-part-name/Wheel',
    },
  ];
  return (
    <div>
      <div className="d-flex justify-center pt-10 xs:pt-5 mx-8 xs:mx-2 s:mx-2 xxs:mx-2 sm:mx-3 md:mx-5">
        <Image
          src={'/img/car-logos/' + imageMake}
          alt={make + ' spare parts'}
          className="mx-auto"
          priority
          width={100}
          height={100}
        />
        <h1 className="text-4xl font-extrabold mx-auto my-5 xs:text-lg xxs:text-xs ">
          {make} {decodeURIComponent(model)} spare parts - Buy Premium High
          Quality Used, Genuine, OEM and Aftermarket from Dubai to all over UAE
          and World
        </h1>
        <Link
          href="#myForm"
          className="w-1/4 xs:w-4/5 mx-auto flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-base xs:my-2 xxs:text-sm xxs:my-2 s:text-sm s:my-2 focus:filter brightness-125 my-5"
          title={'spare parts for ' + make + ' ' + model}
        >
          Inquire Now
        </Link>
        <p className="text-xl font-sans text-gray-700 mx-auto xs:text-base xl:text-lg xxs:text-xs">
          Emirates-car.com is the online Dealers specialist in {make}{' '}
          {decodeURIComponent(model)} spare parts and almost any car brands running on roads
          of UAE. We find pleasure in finding the best used, genuine (otherwise
          called OEM parts) and aftermarket parts for any cars. We have
          experienced professional who can find the parts at affordable and
          reasonable price. We deal in genuine honda parts and aftermarket honda
          parts such as engine parts, mechanical parts, electrical and
          electronic parts, body parts and lights, AC parts and service and
          maintenance parts. You can order Honda spare parts by simply
          submitting the online inquiry form{' '}
          <Link
            href="/"
            target="_newtab"
            className="text-blue-500 underline hover:text-blue-900"
            title={make + ' ' + model + ' parts'}
          >
            here
          </Link>
          . You can get callback or whatsapp chat or email after submitting your
          form inquiry.
        </p>
        <div className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-blue-400 font-bold py-4 sm:mt-5 md:mt-5 lg:mx-0 xs:text-base xl:text-lg xxs:text-xs px-5">
          FILL OUT THE INQUIRY FOR
          <nobr className="text-blue-700 text-3xl md:text-4xl xs:text-sm lg:text-2xl sm:text-xl">
            &nbsp;{make} {decodeURIComponent(model)}{' '}
          </nobr>
          BELOW
        </div>
        <FormComponent formsData={modelsform} postFilter={partspost} />

        <p
          className="text-xl font-sans text-gray-700 mx-auto my-5"
          dangerouslySetInnerHTML={{ __html: description || '' }}
        ></p>
        <div>
          <div className="flex xs:grid xs:grid-cols-1 sm:grid sm:grid-cols-1 xxs:grid xxs:grid-cols-1">
            <main className="xs:mx-auto xxs:mx-4 sm:mx-4 md:mx-5 mt-10 border border-gray-100 shadow-sm">
              <div className="container place-content-center py-6">
                <div className="place-content-center grid grid-cols-1 gap-3 xs:grid-cols-1 xs:grid s:grid s:grid-cols-1 py-5 xl:mx-10 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 xxs:mx-2 s:mx-2 md:ml-11 my-10 mx-10">

                  <h3 className="text-center font-bold text-4xl">
                    Spare parts for All {make} Models:
                  </h3>
                  <div className="grid grid-cols-4 xs:grid xs:grid-cols-1 sm:grid sm:grid-cols-4 md:grid md:grid-cols-3 xxs:grid xxs:grid-cols-3 gap-1">
                    {uniqueMakeArray.map((post, i) => {
                      const linkHref = isExcludedMake
                        ? '/get-in-touch'
                        : '/search-by-make/[make]/[model]';
                      const linkAs = isExcludedMake
                        ? '/get-in-touch'
                        : `/search-by-make/${post.make}/${encodeURIComponent(post.model)}`;

                      return (
                        <div key={i}>
                          <Link href={linkHref} as={linkAs} title={`${post.make} ${post.model} spare parts`}>
                            <div className="border-blue-800 h-full hover:border-blue-900 bg-white rounded-sm">
                              <p className="xs:text-center font-sans text-blue-800 underline hover:text-blue-700 focus:text-blue-700">
                                {make + ' ' + post.model.replace('%2F', '/') + ' parts'}
                              </p>
                            </div>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="place-content-center grid grid-cols-1 gap-3 xs:grid-cols-1 xs:grid s:grid s:grid-cols-1 py-5 xl:mx-10 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 xxs:mx-2 s:mx-2  md:ml-11 my-10 mx-10">
                  <div className="text-base font-medium text-gray-500 p-5">
                    We deal with any country auto spare parts including
                    japanese, american, german, chinese, indian, Korean, french,
                    british in UAE. We also operate in main cities such as
                    dubai, sharjah, abu dhabi, ajman, al quoz, jumeirah, deira
                    etc. You can check our catalogue at{' '}
                    <Link
                      href="/search-by-part-name"
                      className="text-blue-400 underline"
                      title={make + ' ' + model}
                    >
                      /search-by-part-name
                    </Link>
                    . We provide auto spare parts for any vehicles including :
                    <ul className="list-disc">
                      <li>New auto spare parts in uae</li>
                      <li>Used auto spare parts in uae</li>
                      <li>Genuine auto spare parts in uae</li>
                      <li>Aftermarket auto spare parts in uae</li>
                    </ul>
                  </div>
                </div>
                <h3 className="text-blue-600 text-4xl md:text-lg lg:text-2xl font-extrabold xs:text-base xxs:text-xs text-center py-5 xs:hidden sm:hidden s:hidden xxs:hidden">
                  Other Brands
                </h3>
                <div className="grid grid-cols-12 md:grid md:grid-cols-7 sm:ml-0 xs:hidden sm:hidden s:hidden xxs:hidden gap-1 mx-5 xxs:mx-4 md:mx-5 my-10">
                  {makeArray.map((p, i) => (
                    <div key={i}>
                      <Link
                        href="/search-by-make/[make]"
                        as={'/search-by-make/' + p.make}
                        title={p.make + ' spare parts'}
                      >
                        <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                          <div className="flex justify-center">
                            <Image
                              alt={p.make + ' parts'}
                              src={'/img/car-logos/' + p.img}
                              className="object-scale-down"
                              priority
                              height={70}
                              width={70}
                            />
                            <br />
                          </div>
                          <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                            {p.make.toUpperCase()}
                          </p>
                        </main>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </main>
          </div>
          <div className="d-flex py-10 xs:pt-5 mx-8 xs:mx-5">
            <div>
              <h3
                className="text-3xl font-extrabold mx-auto my-5"
                id="oemvsaftermarket"
              >
                Team Genuine {make} {decodeURIComponent(model)}part VS Team
                Aftermarket {make} {decodeURIComponent(model)} part
              </h3>
              <p className="text-xl font-sans text-gray-700 mx-auto my-5 font-bold">
                {make} {decodeURIComponent(model)} aftermarket parts are better
                to buy for many reasons:
              </p>
              <ol className="list-disc text-xl font-sans text-gray-700 mx-auto">
                <li>It is more affordable than genuine parts</li>
                <li>Some genuine parts are similar to genuine parts itself.</li>
                <li>
                  It is readily available because it is equivalently
                  manufactured to genuine parts.
                </li>
                <li>
                  Aftermarket parts can have more manufacturers than genuine
                  parts which can be only from one main manufacturer
                </li>
              </ol>
              <p className="text-xl font-sans text-gray-700 mx-auto my-5 font-bold">
                {make} {decodeURIComponent(model)} Genuine parts are better to
                buy for many reasons:
              </p>
              <ol className="list-disc text-xl font-sans text-gray-700 mx-auto">
                <li>
                  Aftermarket parts are not regularized or standardized because
                  it is manufactured as a duplicate to genuine parts.
                </li>
                <li>
                  Genuine parts are best in quality than aftermarket parts.{' '}
                </li>
                <li>
                  Genuine parts have warranty unlike aftermarket parts which has
                  no Warranty
                </li>
              </ol>
              <p className="text-xl font-sans text-gray-700 mx-auto">
                However, if you weigh your pros and cons and which kind of parts
                you really need, you can come to the best conclusion yourself.
                And we can serve you with both kind of parts.
              </p>
            </div>
          </div>

          <div className="d-flex justify-center text-center py-10 xs:pt-5 mx-8 xs:mx-5">
            <div>
              <p className="text-xl font-sans text-gray-700 mx-auto my-5 font-extrabold">
                Availability of {make} parts in UAE:
              </p>
              <div className="grid grid-cols-5 xs:grid-cols-1 gap-3 mx-auto p-5 border-2 border-gray-500">
                <div>
                  <Link
                    href="/search-by-cities-in-uae/Dubai"
                    className="font-sans font-semibold text-blue-600 underline hover:text-blue-900"
                  >
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    &nbsp; DUBAI
                  </Link>
                </div>
                <div>
                  {' '}
                  <Link
                    href="/search-by-cities-in-uae/Sharjah"
                    className="font-sans font-semibold text-blue-600 underline hover:text-blue-900"
                  >
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    &nbsp; SHARJAH
                  </Link>
                </div>
                <div>
                  {' '}
                  <Link
                    href="search-by-cities-in-uae/Ajman"
                    className="font-sans font-semibold text-blue-600 underline hover:text-blue-900"
                  >
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    &nbsp;AJMAN
                  </Link>
                </div>
                <div>
                  {' '}
                  <Link
                    href="/search-by-cities-in-uae/Ras%20al%20Khaimah"
                    className="font-sans font-semibold text-blue-600 underline hover:text-blue-900"
                  >
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    &nbsp;RAS AL KHAIMAH
                  </Link>
                </div>
                <div>
                  <Link
                    href="/search-by-cities-in-uae/Al%20Quoz%20(Dubai)"
                    className="font-sans font-semibold text-blue-600 underline hover:text-blue-900"
                  >
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    &nbsp;Al QUOZ
                  </Link>
                </div>
                <div>
                  <Link
                    href="/search-by-cities-in-uae/Abu%20Dhabi"
                    className="font-sans font-semibold text-blue-600 underline hover:text-blue-900"
                  >
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    &nbsp;ABU DHABI
                  </Link>
                </div>
                <div>
                  <Link
                    href="/search-by-cities-in-uae/Deira%20(Dubai)"
                    className="font-sans font-semibold text-blue-600 underline hover:text-blue-900"
                  >
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    &nbsp;DEIRA
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-3xl font-extrabold mx-auto my-5">
              5 ways you can {make} {model} find parts for your car.
            </p>
            There are 5 ways you can try finding {make} {model} spare parts for your car.
            <p className="text-xl font-sans text-gray-700 mx-auto my-5 font-bold">
              Traditional way its pros and cons
            </p>
            You find a {make} {model} spare parts shop nearby and go and purchase and the work
            is done. In this case, the pros is that you find nearby shop to have
            similar brands you have and that's it! you purchase it with ease. But
            the cons is when you don't find the nearby shop to have the car
            brand which you are using. There are shop who only deal with certain
            parts like the shop A sells only in honda, Mazda, BMW and shop B
            sells only Audi, Lincoln and Ferrari. So to see for next option, you
            can opt for shopping from Giant E-commerce company like Amazon,
            EBay, Flipkart etc.
            <p className="text-xl font-sans text-gray-700 mx-auto my-5 font-bold">
              Giant E-commerce Company its pros and cons:
            </p>
            If you don't find spare parts nearby your house location, generally
            we move on to search on internet. You search for top companies
            selling spare parts online and you end up in giant e-commerce
            company like Amazon, Flipkart,Ebay etc. Now you see the review of
            person who has already ordered spare parts. Most of the reviews says
            the parts were broken. These giant company has a very big logistics
            that they are vulnerable to be broken during or even get lost during
            the check-in process. So it is not always safe to buy spare parts
            from giant e-commerce company. Hence we see for other option which
            is the Local dealers.
            <p className="text-xl font-sans text-gray-700 mx-auto my-5 font-bold">
              Local Dealers
            </p>
            Local dealers are known through other person like through friends
            and family. Or he gives you his business card and he explains you
            directly the car brands he deals with. However with the current
            digital advancement, the local dealers are decreasing gradually. So
            we move to the next option to search on online marketplace.
            <p className="text-xl font-sans text-gray-700 mx-auto my-5 font-bold">
              Online Marketplace (Only CONS!)
            </p>
            Through Online marketplace we find spare parts for our car easily.
            But it also has lots of cons. If you search for very latest model
            used spare parts, it will not be available on marketplace. In this
            case you have to contact the car brand company directly. If you
            search for very old model, it will not be available with most of the
            car brands company itself due to numerous new brands being manufactured yearly. And also there are more spam issues
            reported from those who purchase from small vendor marketplace and
            also the larger companies. In this case you should go for Online
            dealer website.
            <p className="text-xl font-sans text-gray-700 mx-auto my-5 font-bold">
              Online Dealer Website ONLY PROS!
            </p>
            Online dealers website is the easiest way to order spare parts. You
            visit a bunch of site online and submit your inquiries therein and
            dealers will contact you back through the contact information you
            submitted. If one website didnt reply you or didn't have stock, then other website will
            do. So there is plenty of website and options. Emirates-car.com is
            one such website which accept online inquiries. It deals with parts
            and accessories for honda accord, Honda civic and{' '}
            <Link
              href={'/search-by-make/' + make}
              className="text-blue-500 underline hover:text-blue-900"
            >
              other honda models
            </Link>
            , Infiniti models, BMW models, Audi models and many other brands.
            Visit to search parts you need.
          </div>
          <div>
            <p className="text-xl font-sans text-gray-700 mx-auto my-5 font-extrabold">
              Special Deals on the following parts for {make}{' '}
              {decodeURIComponent(model)}
            </p>
            <div className="grid grid-cols-5 gap-2 s:grid-cols-2 xs:grid-cols-2 md:grid-cols-3">
              {images.map((i, k) => (
                <div key={k} className="border-2 p-5 relative">
                  <sup className="absolute top-0 right-0 text-sm font-bold text-white bg-red-600 rounded-l-xl rounded-r-xl p-1">
                    Sale!
                  </sup>
                  <div className="h-50">
                    <h6 className="text-xl font-bold font-sans">{i.name}</h6>
                  </div>

                  <hr className="py-1" />
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
                    title={{ make } + ' ' + { model } + i.name}
                    className="flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-xs xs:my-2 xxs:text-sm xxs:my-2 s:text-sm s:my-2 focus:filter brightness-125"
                  >
                    Inquire Now
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center text-xl underline font-bold text-red-600">
            <HondaOfferButton />
          </div>
          <div className="flex xs:grid xs:grid-cols-1 sm:grid sm:grid-cols-1 xxs:grid xxs:grid-cols-1">
            {/*Parts list */}
            <div className="xs:grid xs:grid-cols-1 xxs:w-full sm:w-full md:w-full xxs:grid xxs:grid-cols-1 sm:grid sm:grid-cols-1 sm:mt-5 lg:mx-2 ">
              <div className="xs:grid xs:grid-cols-1 text-gray-900 font-bold xxs:w-full sm:w-full md:w-full xxs:grid xxs:grid-cols-1 sm:grid sm:grid-cols-1 py-4 sm:mt-5 lg:mx-2 xs:text-xs xl:text-lg xxs:text-xs px-5 font-sans">
                SEARCH BY PART NAME
              </div>
              {partspost.map((post, i) => (
                <div key={i}>
                  <Link
                    href="/search-by-part-name/[parts]"
                    as={'/search-by-part-name/' + '/' + post.parts}
                    title={make + ' ' + model + ' ' + post.parts}
                  >
                    <p className="text-gray-700 hover:text-blue-700 focus:text-blue-700 text-xl xs:text-lg font-sans mx-auto my-5 xs:my-0">
                      <i className="far fa-compass"></i>
                      {' ' + make} {' ' + decodeURIComponent(model)}{' '}
                      {post.parts} price list
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
