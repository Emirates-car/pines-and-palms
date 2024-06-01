import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Germany from '../../../public/img/icons/germany.png';
import Footer from '../../footer';
import Head from 'next/head';
import Count from '../../service-countup';
import Social from '../../Social';
import FormComponent from '../../FormComponent';
import { getFormModel, getParts } from '../../page';
import SearchPart from "../../SearchPart"
import Accordon from './Accordion';

export default async function German() {
const modelforms = await getFormModel();
  const partsposts = await getParts();
  return (
    <div>

      <div className="bg-cover">
        <div className="grid grid-cols-1 xs:grid xs:grid-cols-1 s:grid s:grid-cols-1 xs:mx-auto sm:grid sm:grid-cols-2  2xs:grid 2xs:grid-cols-1 xs:pt-5 s:pt-5">
          <div>
            <h1 className="place-content-center text-blue-600 text-center text-4xl md:text-lg lg:text-2xl font-extrabold xs:text-xl 2xs:text-xl s:text-xl xl:mx-10 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 2xs:mx-2 s:mx-2  md:ml-11 my-10 mx-10">
              <Image
                src={Germany}
                alt="used German car parts"
                height={50}
                width={50}
              />
              Used, Genuine(original), Aftermarket German Car Parts Online UAE
            </h1>
            <div className="grid grid-cols-3 md:grid md:grid-cols-3 lg:grid-cols-3 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-1 sm:grid sm:grid-cols-1 2xs:grid 2xs:grid-cols-1 s:grid s:grid-cols-1 gap-1 xs:mx-4 s:mx-4 2xs:mx-4 md:ml-11 my-10 mx-10">
              <div>
                <Link href="/search-by-make/Mercedes-Benz">
                  <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                    <div className="flex justify-center">
                      <Image
                        alt="Mercedes Benz spare parts in uae"
                        src="/img/car-logos/mercedesbenz.webp"
                        className="object-scale-down shadow-xl"
                        height={30}
                        width={30}
                      />
                      <br />
                    </div>
                    <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                      Mercedes Benz
                    </p>
                  </main>
                </Link>
              </div>
              <div>
                <Link href="/search-by-make/BMW">
                  <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                    <div className="flex justify-center">
                      <Image
                        alt="BMW spare parts in uae"
                        src="/img/car-logos/BMW.webp"
                        className="object-scale-down shadow-xl"
                        height={30}
                        width={30}
                      />
                      <br />
                    </div>
                    <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                      BMW
                    </p>
                  </main>
                </Link>
              </div>
              <div>
                <Link href="/search-by-make/Volkswagen">
                  <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                    <div className="flex justify-center">
                      <Image
                        alt="Volkswagen spare parts in uae"
                        src="/img/car-logos/volkswagon.webp"
                        className="object-scale-down shadow-xl"
                        height={30}
                        width={30}
                      />
                      <br />
                    </div>
                    <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                      Volkswagen
                    </p>
                  </main>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-3 md:grid md:grid-cols-3 lg:grid-cols-3 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-1 sm:grid sm:grid-cols-1 2xs:grid 2xs:grid-cols-1 s:grid s:grid-cols-1 gap-1 xs:mx-4 s:mx-4 2xs:mx-4 md:ml-11 my-10 mx-10">
              <div>
                <Link href="/search-by-make/Jaguar">
                  <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                    <div className="flex justify-center">
                      <Image
                        alt="Jaguar spare parts in uae"
                        src="/img/car-logos/jaguar.webp"
                        className="object-scale-down shadow-xl"
                        height={30}
                        width={30}
                      />
                      <br />
                    </div>
                    <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                      Jaguar
                    </p>
                  </main>
                </Link>
              </div>
              <div>
                <Link href="/search-by-make/Land%20Rover">
                  <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                    <div className="flex justify-center">
                      <Image
                        alt="land rover spare parts in uae"
                        src="/img/car-logos/land_rover.webp"
                        className="object-scale-down shadow-xl"
                        height={30}
                        width={30}
                      />
                      <br />
                    </div>
                    <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                      Land Rover
                    </p>
                  </main>
                </Link>
              </div>
              <div>
                <Link href="/search-by-make/Porsche">
                  <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                    <div className="flex justify-center">
                      <Image
                        alt="Porsche spare parts dubai"
                        src="/img/car-logos/porsche.webp"
                        className="object-scale-down shadow-xl"
                        height={30}
                        width={30}
                      />
                      <br />
                    </div>
                    <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                      Porsche
                    </p>
                  </main>
                </Link>
              </div>
            </div>
            <div className="text-center mt-2 text-red-400 text-sm xs:text-xs">
              **Make not found above?
              <Link href="/get-in-touch">
                <nobr className="text-blue-500 text-sm underline">
                  {' '}
                  Get in touch with us {'>>'}**
                </nobr>
              </Link>{' '}
            </div>
            <p className="place-content-center grid grid-cols-1 xs:grid-cols-1 xs:grid s:grid s:grid-cols-1 text-base  xs:text-sm md:text-base p-5 mx-10">
              Used parts? New parts? Aftermarket Parts? Genuine parts? Yes we
              are dealing with all german brands including{' '}
              <a
                href="https://emirates-car.com/search-by-make"
                className="text-blue-400 underline"
              >
                BMW
              </a>
              <nobr />
              <a
                href="https://emirates-car.com/search-by-make/Mercedes-Benz"
                className="text-blue-400 underline"
              >
                Mercedes-Benz
              </a>
              ,<nobr />
              <a
                href="https://emirates-car.com/get-in-touch"
                className="text-blue-400 underline"
              >
                Bosch
              </a>
              ,<nobr />
              <a
                href="https://emirates-car.com/search-by-make/BMW"
                className="text-blue-400 underline"
              >
                BMW
              </a>
              ,<nobr />
              <a
                href="https://emirates-car.com/search-by-make/Volkswagen"
                className="text-blue-400 underline"
              >
                Volkswagen
              </a>
              ,<nobr />
              <a
                href="https://emirates-car.com/search-by-make/Land%20Rover"
                className="text-blue-400 underline"
              >
                Land Rover
              </a>
              ,<nobr />
              <a
                href="https://emirates-car.com/search-by-make/Porsche"
                className="text-blue-400 underline"
              >
                Porsche
              </a>
              ,<nobr />
              <a
                href="https://emirates-car.com/search-by-make/Jaguar"
                className="text-blue-400 underline"
              >
                Jaguar
              </a>
              ,<nobr />
              <a
                href="https://emirates-car.com/search-by-make/Mini%20Cooper"
                className="text-blue-400 underline"
              >
                Mini Cooper
              </a>
              . In recent years, there has been an high interest in car
              modification and Upgrade. If you are interested too, then simply
              submit your inquiry at our website. Our Part finding Professionals
              has the largest database of supplier and stockist as well. We
              offer shipping to Dubai, Sharjah, Ajman, Ras al Khaimah and other
              places in UAE. Have a look at our return and refund policy{' '}
              <a
                href="https://emirates-car.com/return-and-refund-policy"
                className="text-blue-400 underline"
              >
                here
              </a>
              .
            </p>
            <p className="place-content-center grid grid-cols-1 xs:grid-cols-1 xs:grid s:grid s:grid-cols-1 text-base text-gray-500 xs:text-sm md:text-base p-5 mx-10">
              Explore from our immensively large-scale auto spare parts website,
              your German auto spare parts for your Vehicle needs - Car / Jeep /
              Van / Truck / Buses in Your city in UAE especially in Abu al
              Bukhoosh,Abu Dhabi,Abu Musa,Ahmed Bin Rashid Port,Ajman,Al Ain,Al
              Barsha,Al Dhafra,Al Fujayrah,Al Hamriyah,Al Jazeera Port,Al Jeer
              Port,Al Mafraq,Al Quoz,Al Sufouh,Ar Ruways,Arzanah Island,Das
              Island,Deira,Dibba,Dubai,Dubai World Central Apt,Esnnad,Sea Port
              Fateh Terminal ,Free Port,Habshan,Hail,Hamriya Free Zone Port,Al
              Jarf Hassyan ,Hatta,Sea Port Hulaylah Terminal,Sea Port
              Indooroodilly ,Jebel Ali,Jebel Ali Free Zone,Jebel
              Dhanna,Jumayrah,Kalba,Khalidia,Khor al Fakkan,Masfut,Khalid
              Port,Khalifa City - Abu Dhabi,Mina Rashid Port,Mina Saqr,Mina
              Zayed - Abu Dhabi,Minhad,Mirfa,Mubarek Terminal,Mubarras
              Island,Musafa,Mussafah,Offshore Fujairah,Port Rashid,Rak Khor
              Port,Rak Maritime City,Ras al Khaimah,Ras Al Khor,Al Ras,Reem
              Island,Ruwais = Ar Ruways,Ruwais Port,Sadiyat
              Island,Sharjah,Sila,Stevin Rock,Swaihan,The Palm Jumeirah,Umm Al
              Nar,Umm al Quwain,Al Qurayyah,Yas Island,Zirku Island in UAE. You
              can check our catalogue at{' '}
              <Link
                href="https://emirates-car.com/search-by-part-name"
                className="text-blue-400 underline"
              >
                https://emirates-car.com/search-by-part-name
              </Link>
              . Submit your inquiry to us, our dealer will get back to you based
              on stock availability.
            </p>
            <div className="mx-auto">
              <Count />
            </div>
            <div className="place-content-center grid grid-cols-1 gap-3 xs:grid-cols-1 xs:grid s:grid s:grid-cols-1 py-5 xl:mx-10 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 2xs:mx-2 s:mx-2  md:ml-11 my-10 mx-10">
              <Social/>
              <FormComponent formsData={modelforms} postFilter={partsposts} />
            </div>
            <h3 className="place-content-center grid grid-cols-1 xs:grid-cols-1 xs:grid s:grid s:grid-cols-1 text-base text-gray-500 xs:text-sm md:text-base p-5 mx-10 my-10">
              {' '}
              We provide auto spare parts for any German vehicles including :
              <ul className="list-disc">
                <li>New German vehicle auto spare parts</li>
                <li>Used German vehicle auto spare parts</li>
                <li>Genuine German vehicle auto spare parts</li>
                <li>Aftermarket German vehicle auto spare parts</li>
              </ul>
            </h3>
            <Accordon />
          </div>
        </div>
      </div>

      <h3 className="place-content-center text-blue-600 text-center text-4xl md:text-lg lg:text-2xl font-extrabold xs:text-xl 2xs:text-xl s:text-xl xl:mx-10 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 2xs:mx-2 s:mx-2  md:ml-11 my-10 mx-10">
        SEARCH FOR AUTO SPARE PARTS IN UAE
      </h3>
      <SearchPart partsposts={partsposts} />
      <div className="grid grid-cols-7 md:grid-cols-5 lg:grid-cols-7 mx-10 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-6 2xs:grid 2xs:grid-cols-5 s:grid s:grid-cols-3 gap-1 xs:mx-4 s:mx-4 2xs:mx-4 md:ml-11 my-10">
        {partsposts.map((post, i) => (
          <div key={i}>
            <Link
              href="https://emirates-car.com/search-by-cities-in-uae/[city]"
              as={'https://emirates-car.com/search-by-part-name/' + post.parts}
              title={post.parts + ' in uae'}
            >
              <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                  {post.parts.toUpperCase()}{' '}
                </p>
              </main>
            </Link>
          </div>
        ))}{' '}
      </div>
      <Footer />
    </div>
  );
}


