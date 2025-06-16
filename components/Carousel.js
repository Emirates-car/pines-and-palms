"use client";
import React from 'react'
import Image from "next/image";
import Slider from 'react-slick';
import avatar1 from '../public/img/avatar1.jpeg';
import avatar2 from '../public/img/avatar2.jpg';
import avatar3 from '../public/img/avatar3.jpg';
const settings = {
  autoplay: true,
  arrows: false,
  centerMode: true,
  autopalySpeed: 3000,
  dotsClass: 'slick-dots',
  pauseOnHover: 'true',
  fade: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

export default function Carousel() {
  return (
    <div>
      <Slider {...settings} className="py-10 p-2">
        <div>
          <div className="text-xl font-bold text-center">
            <div>
              {' '}
              <Image
                alt="emirates car"
                className="rounded-full"
                src={avatar1}
                width={50}
                height={50}
              />
            </div>
            Jamal
          </div>
          <p className="text-sm text-center pt-5">
            Honestly a genuine dealing it was. The rate was so genuine. My order
            received on time.
          </p>
        </div>
        <div>
          <div className="text-xl font-bold text-center">
            <div>
              {' '}
              <Image
                alt="emirates car"
                className="rounded-full"
                src={avatar2}
                width={50}
                height={50}
              />
            </div>
            Mohammed
          </div>
          <p className="text-sm text-center pt-5">
            {' '}
            I replaced my Backup light with their Used backup light. It was just
            as new and it was good quality too.
          </p>
        </div>
        <div>
          <div className="text-xl font-bold text-center">
            <div>
              {' '}
              <Image
                alt="emirates car"
                className="rounded-full"
                src={avatar3}
                width={50}
                height={50}
              />
            </div>
            Abdul
          </div>
          <p className="text-sm text-center pt-5">
            {' '}
            Got my Gearbox, AC Compressor, Battery, Radiator at best deal! It
            was a very good rate and dealing.
          </p>
        </div>
        <div>
          <div className="text-xl font-bold text-center">
            <div>
              {' '}
              <Image
                alt="emirates car"
                className="rounded-full"
                src={avatar1}
                width={50}
                height={50}
              />
            </div>
            Anonymous
          </div>
          <p className="text-sm text-center pt-5">
            The dealings was simply world-class. My parts were of good quality
            and was very genuine too.
          </p>
        </div>
      </Slider>
    </div>
  );
}
