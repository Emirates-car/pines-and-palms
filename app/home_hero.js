import React from 'react';
import Image from 'next/image';
import NewCar from '../public/img/icons/new-car.png';
import UsedCar from '../public/img/icons/used-car.png';
import Genuine from '../public/img/icons/genuine.png';
import AfterMarket from '../public/img/icons/aftermarket.png';
import Britain from '../public/img/icons/united-kingdom.png';
import Indian from '../public/img/icons/india.png';
import Japan from '../public/img/icons/japan.png';
import Korean from '../public/img/icons/south-korea.png';
import USA from '../public/img/icons/usa.png';
import Germany from '../public/img/icons/germany.png';
import China from '../public/img/icons/china.png';
import France from '../public/img/icons/france.png';
import Link from 'next/link';
import FormComponent from './FormComponent';
import { getFormModel, getParts } from './page';
import StaticParts from './StaticParts';
import HeroCarousel from './HeroCarousel';

export default async function HomeHero() {
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
                    Your Partner in Automotive Excellence with Quality Auto
                    Spare Parts.
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
                  <div className="flex justify-center text-center">
                    <div className="flex justify-center text-center ">
                      <Link href="/spare-parts/german-auto-spare-parts">
                        <Image
                          src={Germany}
                          alt="german car auto spare parts"
                          className="my-1 px-2 py-1"
                          height={50}
                          width={50}
                        />

                        <div className="text-sm rounded-2xl border border-blue-500 hover:bg-blue-500 px-2 py-1">
                          Germany
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="flex justify-center text-center ">
                    <Link href="/spare-parts/british-auto-spare-parts">
                      <Image
                        src={Britain}
                        alt="british car auto spare parts"
                        className="my-1 px-2 py-1"
                        height={50}
                        width={50}
                      />

                      <div className="text-sm rounded-2xl border border-blue-500 hover:bg-blue-500 px-2 py-1">
                        Britain
                      </div>
                    </Link>
                  </div>

                  <div className="flex justify-center text-center ">
                    <div className="flex justify-center text-center ">
                      <Link href="/spare-parts/japanese-auto-spare-parts">
                        <Image
                          src={Japan}
                          alt="japanese car auto spare parts"
                          className="my-1 px-2 py-1"
                          height={50}
                          width={50}
                        />

                        <div className="text-sm rounded-2xl border border-blue-500 hover:bg-blue-500 px-2 py-1">
                          Japan
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="flex justify-center text-center">
                    <div className="flex justify-center text-center ">
                      <Link href="/spare-parts/korean-auto-spare-parts">
                        <Image
                          src={Korean}
                          alt="british car auto spare parts"
                          className="my-1 px-2 py-1"
                          height={50}
                          width={50}
                        />

                        <div className="text-sm rounded-2xl border border-blue-500 hover:bg-blue-500 px-2 py-1">
                          Korean
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="flex justify-center text-center ">
                    <div className="flex justify-center text-center ">
                      <Link href="/spare-parts/american-auto-spare-parts">
                        <Image
                          src={USA}
                          alt="british car auto spare parts"
                          className="my-1 px-2 py-1"
                          height={50}
                          width={50}
                        />

                        <div className="text-sm rounded-2xl border border-blue-500 hover:bg-blue-500 px-2 py-1">
                          USA
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="flex justify-center text-center ">
                    <div className="flex justify-center text-center ">
                      <Link href="/spare-parts/british-auto-spare-parts">
                        <Image
                          src={Indian}
                          alt="british car auto spare parts"
                          className="my-1 px-2 py-1"
                          height={50}
                          width={50}
                        />

                        <div className="text-sm rounded-2xl border border-blue-500 hover:bg-blue-500 px-2 py-1">
                          Indian
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div className="flex justify-center text-center">
                    <div className="flex justify-center text-center ">
                      <Link href="/spare-parts/british-auto-spare-parts">
                        <Image
                          src={China}
                          alt="british car auto spare parts"
                          className="my-1 px-2 py-1"
                          height={50}
                          width={50}
                        />

                        <div className="text-sm rounded-2xl border border-blue-500 hover:bg-blue-500 px-2 py-1">
                          China
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="flex justify-center text-center">
                    <div className="flex justify-center text-center ">
                      <Link href="/spare-parts/french-auto-spare-parts">
                        <Image
                          src={France}
                          alt="french car auto spare parts"
                          className="my-1 px-2 py-1"
                          height={50}
                          width={50}
                        />

                        <div className="text-sm rounded-2xl border border-blue-500 hover:bg-blue-500 px-2 py-1">
                          French
                        </div>
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
      </div>
      <div className="text-center mx-auto py-10 xs:py-5 xxs:py-5">
        <div className="grid grid-cols-4 text-center gap-2 xs:grid xs:grid-cols-4 s:grid s:grid-cols-2 xs:gap-1 xxs:text-sm xxs:grid xxs:grid-cols-2 md:px-2 xs:pb-5 s:pb-10  mx-8 xxs:mx-2 xs:mx-2 s:mx-4">
          <div className="text-base lg:text-base sm:text-xs md:text-sm bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500 rounded-sm lg:mx-6 py-2 shadow-2xl xs:text-xs s:text-xs xs:shadow-none sm:shadow-none">
            <div className="flex justify-center">
              <Image
                src={NewCar}
                alt="automotive parts store"
                priority
                width={50}
                height={50}
              />
            </div>
            New parts
          </div>
          <div className=" text-base lg:text-base sm:text-xs md:text-sm bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500 rounded-sm lg:mx-6 shadow-2xl xs:shadow-none s:shadow-none sm:shadow-none xs:text-xs s:text-xs">
            <div className="flex justify-center">
              <Image
                src={UsedCar}
                alt="auto spare parts in dubai"
                priority
                width={50}
                height={50}
              />
            </div>
            Used parts
          </div>
          <div className="text-base lg:text-base sm:text-xs md:text-sm bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500 rounded-sm lg:mx-6 py-2  shadow-2xl xs:text-xs s:text-xs s:shadow-none xs:shadow-none sm:shadow-none">
            <div className="flex justify-center">
              <Image
                src={Genuine}
                alt="automobile spare parts"
                priority
                width={50}
                height={50}
              />
            </div>
            Genuine parts
          </div>
          <div className="text-base lg:text-base sm:text-xs md:text-sm bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500 rounded-sm lg:mx-6 py-2  shadow-2xl xs:text-xs s:text-xs s:shadow-none xs:shadow-none sm:shadow-none">
            <div className="flex justify-center">
              <Image
                src={AfterMarket}
                alt="aftermarket auto body parts"
                priority
                width={50}
                height={50}
              />
            </div>
            Aftermarket parts
          </div>
        </div>
      </div>
      <FormComponent formsData={modelforms} postFilter={partsposts} />

      <StaticParts />
      <div className="bg-bglight">
        <h3 className="text-black text-4xl my-10 text-center md:text-2xl lg:text-2xl font-bold xs:text-xl xxs:text-2xl pt-10">
          Popular <span className="text-blue-500">Country Origin</span> Spare
          parts
        </h3>
        <div className="grid grid-cols-8 gap-4 xs:grid-cols-4 xxs:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 place-content-center my-10 pb-10 xs:px-2 xxs:px-2">
          <div className="flex justify-center text-center">
            <div>
              <Link href="/spare-parts/british-auto-spare-parts">
                <Image
                  src={Britain}
                  alt="british car auto spare parts"
                  priority
                  height={50}
                  width={50}
                />
              </Link>
              <div className="text-sm">Britain</div>
            </div>
          </div>
          <div className="flex justify-center text-center ">
            <div>
              <Image
                src={Indian}
                alt="indian car auto spare parts"
                priority
                height={50}
                width={50}
              />
              <div className=" text-sm">Indian</div>
            </div>
          </div>
          <div className="flex justify-center text-center ">
            <div>
              <Link href="/spare-parts/japanese-auto-spare-parts">
                <Image
                  src={Japan}
                  alt="japan car auto spare parts"
                  priority
                  height={50}
                  width={50}
                />
                <p className=" text-sm">Japan</p>
              </Link>
            </div>
          </div>
          <div className="flex justify-center text-center">
            <div>
              <Link href="/spare-parts/korean-auto-spare-parts">
                <Image
                  src={Korean}
                  alt="korean car auto spare parts"
                  priority
                  height={50}
                  width={50}
                />
                <p className=" text-sm">Korean</p>
              </Link>
            </div>
          </div>
          <div className="flex justify-center text-center ">
            <div>
              <Link href="/spare-parts/american-auto-spare-parts">
                <Image
                  src={USA}
                  alt="united state car auto spare parts"
                  priority
                  height={50}
                  width={50}
                />
                <p className=" text-sm">American</p>
              </Link>
            </div>
          </div>
          <div className="flex justify-center text-center">
            <div>
              <Link href="/spare-parts/german-auto-spare-parts">
                <Image
                  src={Germany}
                  alt="german car auto spare parts"
                  priority
                  height={50}
                  width={50}
                />
                <p className=" text-sm">German</p>
              </Link>
            </div>
          </div>
          <div className="flex justify-center text-center">
            <div>
              <Link href="/get-in-touch">
                <Image
                  src={China}
                  alt="chinese car auto spare parts"
                  priority
                  height={50}
                  width={50}
                />
                <p className=" text-sm">China</p>
              </Link>
            </div>
          </div>
          <div className="flex justify-center text-center">
            <div>
              <Link href="/spare-parts/french-auto-spare-parts">
                <Image
                  src={France}
                  alt="france auto spare parts"
                  priority
                  height={50}
                  width={50}
                />
                <p className=" text-sm xs:text-xs s:text-xs">French</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
