'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarBatteryPoster from '../public/img/carbatteryposter.png';
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
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function BatterySlider() {
  return (
    <div>
      <Slider {...settings} className="py-10 p-2">
        <div>
          <p className="text-4xl xs:text-base md:text-base lg:text-xl font-extrabold  text-center">
            <div>AMARON</div>
            <div className="flex justify-center">
              <Link href="/car-battery-replacement-services-in-uae/#myBatteryForm">
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
            recommended for any vehicle makes used largely by many car owners in
            UAE.
          </p>
        </div>
        <div>
          <p className="text-4xl xs:text-base md:text-base lg:text-xl font-extrabold  text-center">
            <div>ACDELCO</div>
            <div className="flex justify-center">
              <Link href="/car-battery-replacement-services-in-uae/#myBatteryForm">
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
            {' '}
            Acdelco battery replacement in UAE are a "on-highly-demanded
            service" that we came across throughout our orders from different
            customers.
          </p>
        </div>
        <div>
          <p className="text-4xl xs:text-base md:text-base lg:text-xl font-extrabold  text-center">
            <div>SOLITE</div>
            <div className="flex justify-center">
              <Link href="/car-battery-replacement-services-in-uae/#myBatteryForm">
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
            {' '}
            Solite automotive batteries in UAE at best price with us are most
            reliable battery provided with best standards.
          </p>
        </div>
        <div>
          <p className="text-4xl xs:text-base md:text-base lg:text-xl font-extrabold  text-center">
            <div>VARTA</div>
            <div className="flex justify-center">
              <Link href="/car-battery-replacement-services-in-uae/#myBatteryForm">
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
            Varta provides the best durability of the battery and we have it at
            high standard and deliverable across UAE.
          </p>
        </div>
        <div>
          <p className="text-4xl font-extrabold  text-center">
            <div>SEBANG</div>
            <div className="flex justify-center">
              <Link href="/car-battery-replacement-services-in-uae/#myBatteryForm">
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
            Sebang battery are used excessively in UAE marking it as one of the
            best korean battery running on the roads of UAE with high standards.
          </p>
        </div>
      </Slider>
    </div>
  );
}
