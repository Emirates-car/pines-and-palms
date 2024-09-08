import React from 'react';
import Battery from '../public/img/car-auto-parts/battery.png';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';

const settings = {
  autoplay: true,
  arrows: false,
  centerMode: true,
  autopalySpeed: 500,
  dotsClass: 'slick-dots',
  pauseOnHover: 'true',
  fade: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function HomeBattery() {
  return (
    <div>
      <div className="grid grid-cols-2 xs:grid xs:grid-cols-1 s:grid s:grid-cols-1 xs:mx-auto xs:text-center sm:grid sm:grid-cols-2  2xs:grid 2xs:grid-cols-1 xs:pt-5 s:pt-5">
        <div>
          <div className="mt-10 ml-8 max-w-full sm:mt-12 sm:ml-6 md:mt-16 lg:mt-20 lg:ml-1 lg:px-8 xl:mt-28 md:ml-7 xl:ml-20 xs:mt-2 xs:text-left 2xs:mt-2 s:mt-2">
            <div className="sm:ml-5 lg:text-left xs:text-center">
              <h1 className="tracking-tight font-extrabold xl:text-6xl sm:text-3xl md:text-4xl lg:text-5xl xs:text-2xl s:text-xl xs:font-sans">
                <span className="block xl:inline">
                  Car Battery Replacement &nbsp;
                  <span className="block text-blue-600 xl:inline">
                    Services in UAE
                  </span>
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xs md:mt-5 md:text-sm lg:mx-0 xs:text-sm xl:text-lg s:text-sm 2xs:text-sm font-serif">
                The only inquiry form you will need to get your car battery
                replacement change Services right away on your spot in Dubai,
                Sharjah, Abu dhabi, Al quoz, Ajman, Ras al Khaimah and all the
                locations in uae.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex lg:justify-start xs:pb-20 s:pb-20">
                <div className="w-1/2 lg:w-40 xs:w-48 xs:mx-auto s:w-48 s:mx-auto 2xs:w-auto 2xs:mx-auto rounded-lg shadow-md">
                  <Link
                    href="https://emirates-car.com/car-battery-replacement-services-in-uae"
                    className="flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-xs xs:my-2 2xs:text-sm 2xs:my-2 s:text-sm s:my-2 focus:filter brightness-125"
                  >
                    Order Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 sm:mt-12 md:mt-16 lg:mt-5 ">
          <Slider {...settings} className="py-10 p-2">
            <div>
              <p className="text-4xl xs:text-base md:text-base lg:text-xl font-extrabold  text-center">
                <div>AMARON</div>
                <div className="flex justify-center">
                  <Link href="/#myBatteryForm">
                    <Image
                      alt="emirates car"
                      className="rounded-sm border-4 border-darkblue"
                      src={CarBatteryPoster}
                      width={400}
                      height={400}
                    />
                  </Link>
                </div>
              </p>
              <p className="text-sm font-bold font-serif text-center pt-5">
                The top level brand for replacing your battery which is more
                recommended for any vehicle makes used largely by many car
                owners in UAE.
              </p>
            </div>
            <div>
              <p className="text-4xl xs:text-base md:text-base lg:text-xl font-extrabold  text-center">
                <div>
                  {' '}
                  <div>ACDELCO</div>
                  <Image
                    alt="emirates car"
                    src={Battery}
                    width={300}
                    height={300}
                  />
                </div>
              </p>
              <p className="text-sm font-bold font-serif text-center pt-5">
                {' '}
                Acdelco battery replacement in UAE are a "on-highly-demanded
                service" that we came across throughout our orders from
                different customers.
              </p>
            </div>
            <div>
              <p className="text-4xl xs:text-base md:text-base lg:text-xl font-extrabold  text-center">
                <div>
                  {' '}
                  <div>SOLITE</div>
                  <Image
                    alt="emirates car"
                    src={Battery}
                    width={300}
                    height={300}
                  />
                </div>
              </p>
              <p className="text-sm font-bold font-serif text-center pt-5">
                {' '}
                Solite automotive batteries in UAE at best price with us are
                most reliable battery provided with best standards.
              </p>
            </div>
            <div>
              <p className="text-4xl xs:text-base md:text-base lg:text-xl font-extrabold  text-center">
                <div>
                  {' '}
                  <div>VARTA</div>
                  <Image
                    alt="emirates car"
                    src={Battery}
                    width={300}
                    height={300}
                  />
                </div>
              </p>
              <p className="text-sm font-bold font-serif text-center pt-5">
                Varta provides the best durability of the battery and we have it
                at high standard and deliverable across UAE.
              </p>
            </div>
            <div>
              <p className="text-4xl font-extrabold  text-center">
                <div>
                  {' '}
                  <div>SEBANG</div>
                  <Image
                    alt="emirates car"
                    src={Battery}
                    width={300}
                    height={300}
                  />
                </div>
              </p>
              <p className="text-sm font-bold font-serif text-center pt-5">
                Sebang battery are used excessively in UAE marking it as one of
                the best korean battery running on the roads of UAE with high
                standards.
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
