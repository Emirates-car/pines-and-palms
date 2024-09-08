import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Japanese from '/public/img/icons/japan.png';
import Footer from '../../footer';
import Count from '../../service-countup';
import Social from '../../Social';
import FormComponent from '../../FormComponent';
import { getFormModel, getParts } from '../../page';
import SearchPart from '../../SearchPart';
import SearchMake from '../../SearchMake';
import HeroCarousel from '../../HeroCarousel';
import StaticParts from '../../StaticParts';
import TenEntries from '../../tenentries';
import Contents from '../../Contents';

export default async function japanese() {
  const modelforms = await getFormModel();
  const partsposts = await getParts();
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
                    Used / Genuine / Aftermarket Japanese auto spare parts in
                    UAE
                  </h1>
                  <div className="mt-5 sm:mt-5 xxs:my-5 xs:my-5 lg:justify-start">
                    <div className="py-3 px-4 sm:py-0 sm:px-0 w-1/2 lg:w-full xs:w-full xxs:w-3/4 xs:mx-auto s:w-full sm:w-3/4 md:w-full md:mx-auto md:px-0 md:py-0 xs:py-0 xs:px-0 xxs:px-0 xxs:py-0 lg:px-0 lg:py-0 xl:px-0 xl:py-0 xxl:px-0 xxl:py-0 rounded-lg shadow-md sm:shadow-none">
                      <Link
                        href="/spare-parts/american-auto-spare-parts/#myForm"
                        title="vehicle parts online"
                        className="flex items-center justify-center py-2 xs:py-2 xxs:py-1 sm:py-0 text-xl sm:text-base xl:text-xl border border-transparent font-medium rounded-sm text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md md:text-lg md:px-5 xs:text-sm xxs:text-sm xxs:my-2 lg:my-2 s:text-sm s:my-2 focus:filter brightness-125"
                      >
                        Inquire Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xxs:hidden xs:hidden">
              <HeroCarousel />
            </div>
          </div>
        </div>
        <FormComponent formsData={modelforms} postFilter={partsposts} />
        <h3 className="text-black text-4xl text-center md:text-2xl lg:text-2xl font-bold xs:text-xl xxs:text-2xl pt-10">
          Search for <span className="text-blue-500">Japanese</span> Auto spare
          parts
        </h3>
        <SearchMake posts={modelforms} />
        <div className="bg-bglight max-w-7xl mx-auto font-sans">
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
        </div>
      </div>

      <StaticParts />
      <TenEntries />
      <Contents />

      <Footer />
    </div>
  );
}
