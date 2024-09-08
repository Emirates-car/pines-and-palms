import React from 'react';
import Hero from './home_hero';
import Count from './service-countup';
import Featured from './featured';
import Link from 'next/link';
import Image from 'next/image';
import TenEntries from './tenentries';
import Contents from './Contents';
import Footer from './footer';
import StaticCities from './StaticCities';

export async function getMake() {
  const resp = await fetch(`https://rozy-api-two.vercel.app/api/grooves`);
  const data = await resp.json();
  let uniqueMakeArray = [
    ...new Map(data.map(item => [item['make'], item])).values(),
  ];
  return uniqueMakeArray;
}

export async function getYear() {
  const resp = await fetch(`https://rozy-api-two.vercel.app/api/grooves`);
  const data = await resp.json();
  let uniqueYearArray = [
    ...new Map(data.map(item => [item['year'], item])).values(),
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
  return (
    <div>
      <Hero />
      <div className="max-w-7xl mx-auto font-sans">
        {/*American */}
        <h3 className="text-black text-4xl text-center md:text-2xl lg:text-2xl font-bold xs:text-xl xxs:text-2xl pt-10">
          Top American Spare parts
        </h3>
        <div className="grid grid-cols-4 md:grid md:grid-cols-5 lg:grid-cols-7 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-3 xxs:grid xxs:grid-cols-2 s:grid s:grid-cols-2 gap-1 xs:mx-2 s:mx-2 xxs:mx-2 md:ml-11 my-10 mx-10">
          <div>
            <Link href="/search-by-make/Ford">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Ford
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/GMC">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  GMC
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Chevrolet">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Chevrolet
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Jeep">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Jeep
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Hummer">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Hummer
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Cadillac">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Cadillac
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Lincoln">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Lincoln
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Dodge">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Dodge
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Chrysler">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Chrysler
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Mercury">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Mercury
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Buick">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Buick
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Ram">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Ram
                </p>
              </div>
            </Link>
          </div>
        </div>
        {/*Japanese */}
        <h3 className="text-black text-4xl text-center md:text-2xl lg:text-2xl font-bold xs:text-xl xxs:text-2xl pt-10">
          Top Japanese Spare parts
        </h3>
        <div className="grid grid-cols-4 md:grid md:grid-cols-5 lg:grid-cols-7 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-3 xxs:grid xxs:grid-cols-2 s:grid s:grid-cols-2 gap-1 xs:mx-4 s:mx-4 xxs:mx-4 md:ml-11 my-10 mx-10">
          <div>
            <Link href="/search-by-make/Ford">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Toyota
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Mitsubishi">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Mitsubishi
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Lexus">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Lexus
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Nissan">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Nissan
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Infiniti">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Infinity
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Honda">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Honda
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Mazda">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Mazda
                </p>
              </div>
            </Link>
          </div>

          <div>
            <Link href="/search-by-make/Subaru">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Subaru
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Suzuki">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Suzuki
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Daihatsu">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Daihatsu
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Isuzu">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Isuzu
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/*Britain */}
        <h3 className="text-black text-4xl text-center md:text-2xl lg:text-2xl font-bold xs:text-xl xxs:text-2xl pt-10">
          Top Britain Spare parts
        </h3>
        <div className="grid grid-cols-4 md:grid md:grid-cols-5 lg:grid-cols-5 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-3 xxs:grid xxs:grid-cols-2 s:grid s:grid-cols-2 gap-1 xs:mx-4 s:mx-4 xxs:mx-4 md:ml-11 my-10 mx-10">
          <div>
            <Link href="/search-by-make/Aston Martin">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Aston Martin
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Bentley">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Bentley
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Jaguar">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Jaguar
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Land Rover">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Land Rover
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Lotus">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Lotus
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/McLaren">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  McLaren
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Mini">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Mini
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Rolls-Royce">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Rolls Royce
                </p>
              </div>
            </Link>
          </div>
        </div>
        {/*French */}
        <h3 className="text-black text-4xl text-center md:text-2xl lg:text-2xl font-bold xs:text-xl xxs:text-2xl pt-10">
          Top French Spare parts
        </h3>
        <div className="grid grid-cols-4 md:grid md:grid-cols-5 lg:grid-cols-5 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-3 xxs:grid xxs:grid-cols-2 s:grid s:grid-cols-2 gap-1 xs:mx-4 s:mx-4 xxs:mx-4 md:ml-11 my-10 mx-10">
          <div>
            <Link href="/search-by-make/Peugeot">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Peugeot
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Citroen">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Citroen
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Renault">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Renault
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Mobility Ventures LLC">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Mobility Ventures LLC
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Bugatti">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Bugatti
                </p>
              </div>
            </Link>
          </div>
        </div>
        {/*German */}
        <h3 className="text-black text-4xl text-center md:text-2xl lg:text-2xl font-bold xs:text-xl xxs:text-2xl pt-10">
          Top German Spare parts
        </h3>
        <div className="grid grid-cols-3 md:grid md:grid-cols-3 lg:grid-cols-3 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-3 xxs:grid xxs:grid-cols-2 s:grid s:grid-cols-2 gap-1 xs:mx-4 s:mx-4 xxs:mx-4 md:ml-11 my-10 mx-10">
          <div>
            <Link href="/search-by-make/Mercedes-Benz">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Mercedes Benz
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/BMW">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  BMW
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Volkswagen">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Volkswagen
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Jaguar">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Jaguar
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Land%20Rover">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Land Rover
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Porsche">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Porsche
                </p>
              </div>
            </Link>
          </div>
        </div>
        {/*Korean */}
        <h3 className="text-black text-4xl text-center md:text-2xl lg:text-2xl font-bold xs:text-xl xxs:text-2xl pt-10">
          Top Korean Spare parts
        </h3>
        <div className="grid grid-cols-4 md:grid md:grid-cols-5 lg:grid-cols-3 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-3 xxs:grid xxs:grid-cols-2 s:grid s:grid-cols-2 gap-1 xs:mx-4 s:mx-4 xxs:mx-4 md:ml-11 my-10 mx-10">
          <div>
            <Link href="/search-by-make/Hyundai">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Hyundai
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Kia">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Kia
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Daewoo">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Daewoo
                </p>
              </div>
            </Link>
          </div>
        </div>

        <TenEntries />

        <div className="mx-auto py-10">
          <Count />
        </div>
        <div className="text-black text-4xl text-center md:text-2xl lg:text-2xl font-bold xs:text-xl xxs:text-2xl pt-10 ">
          Popular Brands
        </div>
        <div className="grid grid-cols-5 md:grid md:grid-cols-4 sm:grid sm:grid-cols-4 lg:grid lg:grid-cols-4 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 xxs:grid xxs:grid-cols-2 s:grid s:grid-cols-2 gap-1 xs:mx-4 s:mx-4 xxs:mx-4 md:ml-11 my-10 mx-10">
          <div>
            <Link href="/search-by-make/Toyota">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Toyota
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Mitsubishi">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Mitsubishi
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Mercedes-benz">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Mercedes-benz
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Nissan">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Nissan
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Ford">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Ford
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Hyundai">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Hyundai
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Volkswagen">
              <div className="border h-full hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Volkswagen
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Honda">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Honda
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Lexus">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Lexus
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Acura">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Acura
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Kia">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Kia
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Porsche">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Porsche
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Chevrolet">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Chevrolet
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Land Rover">
              <div className="border h-full  hover:border-blue-600 py-3 ">
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
                <p className="text-center m-1 bg-darkblue hover:bg-blue-400  font-bold text-white text-sm hover:text-gray-800 rounded-sm">
                  Land Rover
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <StaticCities />

      <Featured />
      <Contents />

      <Footer />
    </div>
  );
}
