import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Japanese from '/public/img/icons/japan.png';
import Footer from '../../footer';
import Count from '../../service-countup';
import Social from '../../Social';
import FormComponent from '../../FormComponent';
import { getFormModel, getParts } from '../../page';
import SearchPart from "../../SearchPart"

export default async function japanese() {
const modelforms = await getFormModel();
  const partsposts = await getParts();
  return (
    <div>
      <div className="bg-cover">
        <div className="grid grid-cols-1 xs:grid xs:grid-cols-1 s:grid s:grid-cols-1 xs:mx-auto sm:grid sm:grid-cols-2  2xs:grid 2xs:grid-cols-1 xs:pt-5 s:pt-5">
          <div>
            <h1 className="place-content-center text-blue-600 text-center text-4xl md:text-lg lg:text-2xl font-extrabold xs:text-xl 2xs:text-xl s:text-xl xl:mx-10 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 2xs:mx-2 s:mx-2  md:ml-11 my-10 mx-10">
              <Image
                src={Japanese}
                alt="used japanese car parts"
                height={50}
                width={50}
              />
              Used, Genuine(original), Aftermarket japanese Car Parts Online UAE
            </h1>
            <div className="grid grid-cols-4 md:grid md:grid-cols-5 lg:grid-cols-7 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-3 2xs:grid 2xs:grid-cols-2 s:grid s:grid-cols-2 gap-1 xs:mx-4 s:mx-4 2xs:mx-4 md:ml-11 my-10 mx-10">
              <div>
                <Link href="/search-by-make/Toyota">
                  <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                    <div className="flex justify-center">
                      <Image
                        alt="toyota spare parts in uae"
                        src="/img/car-logos/toyota.webp"
                        className="object-scale-down shadow-xl"
                        height={30}
                        width={30}
                      />
                      <br />
                    </div>
                    <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                      Toyota
                    </p>
                  </main>
                </Link>
              </div>
              <div>
                <Link href="/search-by-make/Mitsubishi">
                  <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                    <div className="flex justify-center">
                      <Image
                        alt="Mitsubishi spare parts in uae"
                        src="/img/car-logos/mitsubishi.webp"
                        className="object-scale-down shadow-xl"
                        height={30}
                        width={30}
                      />
                      <br />
                    </div>
                    <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                      Mitsubishi
                    </p>
                  </main>
                </Link>
              </div>
              <div>
                <Link href="/search-by-make/Lexus">
                  <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                    <div className="flex justify-center">
                      <Image
                        alt="lexus spare parts in uae"
                        src="/img/car-logos/lexus.webp"
                        className="object-scale-down shadow-xl"
                        height={30}
                        width={30}
                      />
                      <br />
                    </div>
                    <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                      Lexus
                    </p>
                  </main>
                </Link>
              </div>
              <div>
                <Link href="/search-by-make/Nissan">
                  <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                    <div className="flex justify-center">
                      <Image
                        alt="toyota spare parts in uae"
                        src="/img/car-logos/nissan.webp"
                        className="object-scale-down shadow-xl"
                        height={30}
                        width={30}
                      />
                      <br />
                    </div>
                    <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                      Nissan
                    </p>
                  </main>
                </Link>
              </div>
              <div>
                <Link href="/search-by-make/Infiniti">
                  <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                    <div className="flex justify-center">
                      <Image
                        alt="infinity spare parts in uae"
                        src="/img/car-logos/infiniti.webp"
                        className="object-scale-down shadow-xl"
                        height={30}
                        width={30}
                      />
                      <br />
                    </div>
                    <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                      Infiniti
                    </p>
                  </main>
                </Link>
              </div>
              <div>
                <Link href="/search-by-make/Honda">
                  <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                    <div className="flex justify-center">
                      <Image
                        alt="Honda spare parts in uae"
                        src="/img/car-logos/honda.webp"
                        className="object-scale-down shadow-xl"
                        height={30}
                        width={30}
                      />
                      <br />
                    </div>
                    <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                      Honda
                    </p>
                  </main>
                </Link>
              </div>
              <div>
                <Link href="/search-by-make/Mazda">
                  <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                    <div className="flex justify-center">
                      <Image
                        alt="mazda spare parts in uae"
                        src="/img/car-logos/mazda.webp"
                        className="object-scale-down shadow-xl"
                        height={30}
                        width={30}
                      />
                      <br />
                    </div>
                    <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                      Mazda
                    </p>
                  </main>
                </Link>
              </div>

              <div>
                <Link href="/search-by-make/Subaru">
                  <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                    <div className="flex justify-center">
                      <Image
                        alt="subaru spare parts in uae"
                        src="/img/car-logos/subaru.webp"
                        className="object-scale-down shadow-xl"
                        height={30}
                        width={30}
                      />
                      <br />
                    </div>
                    <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                      Subaru
                    </p>
                  </main>
                </Link>
              </div>
              <div>
                <Link href="/search-by-make/Suzuki">
                  <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                    <div className="flex justify-center">
                      <Image
                        alt="suzuki spare parts in uae"
                        src="/img/car-logos/suzuki.webp"
                        className="object-scale-down shadow-xl"
                        height={30}
                        width={30}
                      />
                      <br />
                    </div>
                    <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                      Suzuki
                    </p>
                  </main>
                </Link>
              </div>
              <div>
                <Link href="/search-by-make/Daihatsu">
                  <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                    <div className="flex justify-center">
                      <Image
                        alt="daihatsu spare parts in uae"
                        src="/img/car-logos/daihat.webp"
                        className="object-scale-down shadow-xl"
                        height={30}
                        width={30}
                      />
                      <br />
                    </div>
                    <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                      Daihatsu
                    </p>
                  </main>
                </Link>
              </div>
              <div>
                <Link href="/search-by-make/Isuzu">
                  <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                    <div className="flex justify-center">
                      <Image
                        alt="isuzu spare parts in uae"
                        src="/img/car-logos/isuzu.webp"
                        className="object-scale-down shadow-xl"
                        height={30}
                        width={30}
                      />
                      <br />
                    </div>
                    <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                      Isuzu
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
            <p className="place-content-center grid grid-cols-1 xs:grid-cols-1 xs:grid s:grid s:grid-cols-1 text-base text-gray-500 xs:text-sm md:text-base p-5 mx-10">
              Explore from our immensively large-scale auto spare parts website,
              your japanese auto spare parts for your Vehicle needs - Car / Jeep
              / Van / Truck / Buses in Your city in UAE especially in Abu al
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
            <h1 className="place-content-center grid grid-cols-1 xs:grid-cols-1 xs:grid s:grid s:grid-cols-1 text-base text-gray-500 xs:text-sm md:text-base p-5 mx-10 my-10">
              {' '}
              We provide auto spare parts for any japanese vehicles including :
              <ul className="list-disc">
                <li>New japanese vehicle auto spare parts</li>
                <li>Used japanese vehicle auto spare parts</li>
                <li>Genuine japanese vehicle auto spare parts</li>
                <li>Aftermarket japanese vehicle auto spare parts</li>
              </ul>
            </h1>
          </div>
        </div>
      </div>

      <h1 className="place-content-center text-blue-600 text-center text-4xl md:text-lg lg:text-2xl font-extrabold xs:text-xl 2xs:text-xl s:text-xl xl:mx-10 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 2xs:mx-2 s:mx-2  md:ml-11 my-10 mx-10">
        SEARCH FOR AUTO SPARE PARTS IN UAE
      </h1>
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


