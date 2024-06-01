import React from 'react';
import Social from './Social';
import Hero from './home_hero';
import Count from './service-countup';
import Featured from './featured';
import Hero_img from '../public/img/car-spare-parts.png';
import Link from 'next/link';
import Image from 'next/image';
import FormComponent from './FormComponent';
import TenEntries from './tenentries';
import Contents from './Contents';
import Footer from './footer';
import StaticCities from './StaticCities';
import StaticParts from './StaticParts';

export async function getMake() {
  const resp = await fetch(`https://rozy-api-two.vercel.app/api/grooves`);
  const data = await resp.json();
  let uniqueMakeArray = [
    ...new Map(data.map(item => [item['make'], item])).values()
  ];
  return uniqueMakeArray;
}

export async function getYear() {
  const resp = await fetch(`https://rozy-api-two.vercel.app/api/grooves`);
  const data = await resp.json();
  let uniqueYearArray = [
    ...new Map(data.map(item => [item['year'], item])).values()
  ];
  return uniqueYearArray;
}

export async function getFormModel() {
  //Pass it to forms to get appropriate model for make
  const respo = await fetch(`https://rozy-api-two.vercel.app/api/palms`);
  const forms = await respo.json();
  return forms;
}

export async function getCity() {
  const cityresponse = await fetch(
    `https://rozy-api-two.vercel.app/api/cities`
  );
  const cities = await cityresponse.json();
  return cities;
}

export async function getParts() {
  const respnse = await fetch(`https://rozy-api-two.vercel.app/api/parts`);
  const partsposts = await respnse.json();
  return partsposts;
}

export default async function Home() {
  const posts = await getMake();
  const modelforms = await getFormModel();
  const partsposts = await getParts();
  return (
    <div>
      <div className="max-w-7xl mx-auto font-sans">
        <Hero />
        <Social />
        {/*American */}
        <h3 className="text-black text-4xl text-center md:text-2xl lg:text-2xl font-extrabold xs:text-xl xxs:text-2xl pt-10 uppercase">
          Top American Spare parts
        </h3>
        <div className="grid grid-cols-4 md:grid md:grid-cols-5 lg:grid-cols-7 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-3 xxs:grid xxs:grid-cols-2 s:grid s:grid-cols-2 gap-1 xs:mx-4 s:mx-4 xxs:mx-4 md:ml-11 my-10 mx-10">
          <div>
            <Link href="/search-by-make/Ford">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="ford spare parts dubai"
                    src="/img/car-logos/ford.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Ford
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/GMC">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="GMC spare parts in uae"
                    src="/img/car-logos/gmc.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  GMC
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Chevrolet">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="Chevrolet spare parts in uae"
                    src="/img/car-logos/chevrolet.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Chevrolet
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Jeep">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="jeep spare parts in uae"
                    src="/img/car-logos/jeep.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Jeep
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Hummer">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="hummer parts online"
                    src="/img/car-logos/hummer.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Hummer
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Cadillac">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="Cadillac spare parts sharjah"
                    src="/img/car-logos/cadillac.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Cadillac
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Lincoln">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="lincoln spare parts sharjah"
                    src="/img/car-logos/lincoln.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Lincoln
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Dodge">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="dodge spare parts dubai"
                    src="/img/car-logos/dodge.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Dodge
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Chrysler">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="Chrysler spare parts in uae"
                    src="/img/car-logos/chrysler.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Chrysler
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Mercury">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="mercury spare parts in dubai"
                    src="/img/car-logos/mercury.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Mercury
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Buick">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="buick spare parts in uae"
                    src="/img/car-logos/buick.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Buick
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Ram">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="ram spare parts in uae"
                    src="/img/car-logos/ram.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Ram
                </p>
              </main>
            </Link>
          </div>
        </div>
        {/*Japanese */}
        <h3 className="text-black text-4xl text-center md:text-2xl lg:text-2xl font-extrabold xs:text-xl xxs:text-2xl pt-10 uppercase">
          Top Japanese Spare parts
        </h3>
        <div className="grid grid-cols-4 md:grid md:grid-cols-5 lg:grid-cols-7 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-3 xxs:grid xxs:grid-cols-2 s:grid s:grid-cols-2 gap-1 xs:mx-4 s:mx-4 xxs:mx-4 md:ml-11 my-10 mx-10">
          <div>
            <Link href="/search-by-make/Ford">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="auto parts toyota"
                    src="/img/car-logos/toyota.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Toyota
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Mitsubishi">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="Mitsubishi spare parts in uae"
                    src="/img/car-logos/mitsubishi.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Mitsubishi
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Lexus">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="lexus spare parts in uae"
                    src="/img/car-logos/lexus.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Lexus
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Nissan">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="spare parts toyota"
                    src="/img/car-logos/nissan.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Nissan
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Infiniti">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="infinity spare parts in uae"
                    src="/img/car-logos/infiniti.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Infinity
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Honda">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="Honda spare parts in uae"
                    src="/img/car-logos/honda.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Honda
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Mazda">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="mazda spare parts in uae"
                    src="/img/car-logos/mazda.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Mazda
                </p>
              </main>
            </Link>
          </div>

          <div>
            <Link href="/search-by-make/Subaru">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="subaru spare parts in uae"
                    src="/img/car-logos/subaru.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Subaru
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Suzuki">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="suzuki spare parts in uae"
                    src="/img/car-logos/suzuki.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Suzuki
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Daihatsu">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="daihatsu spare parts in uae"
                    src="/img/car-logos/daihat.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Daihatsu
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Isuzu">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="isuzu spare parts in uae"
                    src="/img/car-logos/isuzu.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Isuzu
                </p>
              </main>
            </Link>
          </div>
        </div>

        {/*Britain */}
        <h3 className="text-black text-4xl text-center md:text-2xl lg:text-2xl font-extrabold xs:text-xl xxs:text-2xl pt-10 uppercase">
          Top Britain Spare parts
        </h3>
        <div className="grid grid-cols-4 md:grid md:grid-cols-5 lg:grid-cols-7 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-3 xxs:grid xxs:grid-cols-2 s:grid s:grid-cols-2 gap-1 xs:mx-4 s:mx-4 xxs:mx-4 md:ml-11 my-10 mx-10">
          <div>
            <Link href="/search-by-make/Aston Martin">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="aston martin spare parts in uae"
                    src="/img/car-logos/aston_martin.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Aston Martin
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Bentley">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="bentley spare parts in uae"
                    src="/img/car-logos/bentley.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Bentley
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Jaguar">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="Jaguar spare parts in uae"
                    src="/img/car-logos/jaguar.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Jaguar
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Land Rover">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="land rover spare parts in uae"
                    src="/img/car-logos/land_rover.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Land Rover
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Lotus">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="lotus spare parts in uae"
                    src="/img/car-logos/lotus.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Lotus
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/McLaren">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="Mclaren spare parts in uae"
                    src="/img/car-logos/mclaren.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  McLaren
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Mini">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="mini spare parts in uae"
                    src="/img/car-logos/mini.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Mini
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Rolls-Royce">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="rolls royce spare parts in uae"
                    src="/img/car-logos/rolls-royce.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Rolls Royce
                </p>
              </main>
            </Link>
          </div>
        </div>
        {/*French */}
        <h3 className="text-black text-4xl text-center md:text-2xl lg:text-2xl font-extrabold xs:text-xl xxs:text-2xl pt-10 uppercase">
          Top French Spare parts
        </h3>
        <div className="grid grid-cols-4 md:grid md:grid-cols-5 lg:grid-cols-7 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-3 xxs:grid xxs:grid-cols-2 s:grid s:grid-cols-2 gap-1 xs:mx-4 s:mx-4 xxs:mx-4 md:ml-11 my-10 mx-10">
          <div>
            <Link href="/search-by-make/Peugeot">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="Peugeot spare parts in uae"
                    src="/img/car-logos/peugeot.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Peugeot
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Citroen">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="Citroen spare parts in uae"
                    src="/img/car-logos/citroen.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Citroen
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Renault">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="Renault spare parts in uae"
                    src="/img/car-logos/renault.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Renault
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Mobility Ventures LLC">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="venturi spare parts in uae"
                    src="/img/car-logos/venturi.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Mobility Ventures LLC
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Bugatti">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="Bugatti spare parts in uae"
                    src="/img/car-logos/bugatti.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Bugatti
                </p>
              </main>
            </Link>
          </div>
        </div>
        {/*German */}
        <h3 className="text-black text-4xl text-center md:text-2xl lg:text-2xl font-extrabold xs:text-xl xxs:text-2xl pt-10 uppercase">
          Top German Spare parts
        </h3>
        <div className="grid grid-cols-3 md:grid md:grid-cols-3 lg:grid-cols-3 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-3 xxs:grid xxs:grid-cols-2 s:grid s:grid-cols-2 gap-1 xs:mx-4 s:mx-4 xxs:mx-4 md:ml-11 my-10 mx-10">
          <div>
            <Link href="/search-by-make/Mercedes-Benz">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="Mercedes Benz spare parts in uae"
                    src="/img/car-logos/mercedesbenz.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Mercedes Benz
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/BMW">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="BMW spare parts in uae"
                    src="/img/car-logos/BMW.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  BMW
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Volkswagen">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="Volkswagen spare parts in uae"
                    src="/img/car-logos/volkswagon.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Volkswagen
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Jaguar">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="Jaguar spare parts in uae"
                    src="/img/car-logos/jaguar.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Jaguar
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Land%20Rover">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="land rover spare parts in uae"
                    src="/img/car-logos/land_rover.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Land Rover
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Porsche">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="Porsche spare parts in uae"
                    src="/img/car-logos/porsche.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Porsche
                </p>
              </main>
            </Link>
          </div>
        </div>
        {/*Korean */}
        <h3 className="text-black text-4xl text-center md:text-2xl lg:text-2xl font-extrabold xs:text-xl xxs:text-2xl pt-10 uppercase">
          Top Korean Spare parts
        </h3>
        <div className="grid grid-cols-4 md:grid md:grid-cols-5 lg:grid-cols-7 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-3 xxs:grid xxs:grid-cols-2 s:grid s:grid-cols-2 gap-1 xs:mx-4 s:mx-4 xxs:mx-4 md:ml-11 my-10 mx-10">
          <div>
            <Link href="/search-by-make/Hyundai">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="hyundai spare parts in uae"
                    src="/img/car-logos/hyundai.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Hyundai
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Kia">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="kia spare parts in uae"
                    src="/img/car-logos/kia.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Kia
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Daewoo">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="daewoo spare parts in uae"
                    src="/img/car-logos/daewoo.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Daewoo
                </p>
              </main>
            </Link>
          </div>
        </div>
        <FormComponent formsData={modelforms} postFilter={partsposts} />
        <TenEntries />

        <div className="mx-auto py-10">
          <Count />
        </div>
        <div className="text-black text-4xl text-center md:text-2xl lg:text-2xl font-extrabold xs:text-xl xxs:text-2xl pt-10 uppercase">
          POPULAR BRANDS
        </div>
        <div className="grid grid-cols-5 md:grid md:grid-cols-4 sm:grid sm:grid-cols-4 lg:grid lg:grid-cols-4 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-3 xxs:grid xxs:grid-cols-3 s:grid s:grid-cols-2 gap-1 xs:mx-4 s:mx-4 xxs:mx-4 md:ml-11 my-10 mx-10">
          <div>
            <Link href="/search-by-make/Toyota">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="toyota spare parts sharjah"
                    src="/img/car-logos/toyota.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Toyota
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Mitsubishi">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="Mitsubishi parts dubai"
                    src="/img/car-logos/mitsubishi.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Mitsubishi
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Mercedes-benz">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="honda parts sharjah"
                    src="/img/car-logos/mercedesbenz.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Mercedes-benz
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Nissan">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="honda parts dubai"
                    src="/img/car-logos/nissan.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Nissan
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Ford">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="honda parts ajman"
                    src="/img/car-logos/ford.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Ford
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Hyundai">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="honda accord spare parts dubai"
                    src="/img/car-logos/hyundai.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Hyundai
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Volkswagen">
              <main className="border h-full hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="honda spare parts sharjah"
                    src="/img/car-logos/volkswagon.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Volkswagen
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Honda">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="Honda"
                    src="/img/car-logos/honda.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Honda
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Lexus">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="lexus spare parts sharjah"
                    src="/img/car-logos/lexus.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Lexus
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Acura">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="toyota spare parts in uae"
                    src="/img/car-logos/acura.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Acura
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Kia">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="Kia spare parts in uae"
                    src="/img/car-logos/kia.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Kia
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Porsche">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="porsche spare parts in uae"
                    src="/img/car-logos/porsche.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Porsche
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Chevrolet">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="Chevrolet spare parts in uae"
                    src="/img/car-logos/chevrolet.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Chevrolet
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Land Rover">
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="Land Rover spare parts in uae"
                    src="/img/car-logos/land_rover.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Land Rover
                </p>
              </main>
            </Link>
          </div>
        </div>
        <div className="text-black text-4xl text-center md:text-2xl lg:text-2xl font-extrabold xs:text-xl xxs:text-2xl pt-10 uppercase">
          POPULAR SEARCHED PARTS IN UAE
        </div>
        <StaticParts />

        <div className="text-black text-4xl text-center md:text-2xl lg:text-2xl font-extrabold xs:text-xl xxs:text-2xl pt-10 uppercase">
          SEARCH AUTO SPARE PARTS ANYWHERE IN UAE
        </div>
        <StaticCities />

        <Featured />
        <Contents />
      </div>
      <Footer />
    </div>
  );
}
