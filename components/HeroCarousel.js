'use client';

import React from 'react';
import Slider from 'react-slick';
import CarBatteryPoster from '../public/img/carbatteryposter.png';
import HeroOne from '../public/img/heroposter/1.png';
import HeroTwo from '../public/img/heroposter/2.png';
import HeroThree from '../public/img/heroposter/3.png';
import HeroFour from '../public/img/heroposter/4.png';
import Engine from '../public/img/honda-eighth-gen/Engine.webp';
import Image from 'next/image';
import Link from 'next/link';

const settings = {
  autoplay: true,
  arrows: false,
  centerMode: true,
  autopalySpeed: 500,
  dotsClass: 'slick-dots',
  pauseOnHover: 'true',
  fade: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
export default function HeroCarousel() {
  return (
    <Slider {...settings} className="py-10 pt-20 p-2">
      <div>
        <p className="text-4xl xs:text-base md:text-base lg:text-xl font-extrabold  text-center">
          <div className="flex justify-center">
            <Link href="/car-battery-replacement-services-in-uae">
              <Image
                alt="emirates car"
                className="rounded-sm border-4 border-darkblue"
                src={HeroOne}
                width={1500}
                height={1500}
              />
            </Link>
          </div>
        </p>
      </div>
      <div>
        <p className="text-4xl xs:text-base md:text-base lg:text-xl font-extrabold  text-center">
          <div className="flex justify-center">
            <Image
              alt="emirates car"
              className="rounded-sm border-4 border-darkblue"
              src={HeroTwo}
              width={1500}
              height={1500}
            />
          </div>
        </p>
      </div>
      <div>
        <p className="text-4xl xs:text-base md:text-base lg:text-xl font-extrabold  text-center">
          <div className="flex justify-center">
            <Image
              alt="emirates car"
              className="rounded-sm border-4 border-darkblue"
              src={HeroThree}
              width={1500}
              height={1500}
            />
          </div>
        </p>
      </div>
      <div>
        <p className="text-4xl xs:text-base md:text-base lg:text-xl font-extrabold  text-center">
          <div className="flex justify-center">
            <Image
              alt="emirates car"
              className="rounded-sm border-4 border-darkblue"
              src={HeroFour}
              width={1500}
              height={1500}
            />
          </div>
        </p>
      </div>
    </Slider>
  );
}
