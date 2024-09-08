import React from 'react'
import RelatedPosts from '../relatedpost/page';
import Footer from "../../footer";
import Image from "next/image";
import Link from "next/link";

export default function FloodedCars() {
  return (
    <div>
      <div className="d-flex justify-center pt-10 xs:pt-5 mx-8">
        <div className="w-full p-4">
          <div className="flex xs:grid xs:grid-cols-1 md:grid md:grid-cols-1 sm:grid sm:grid-cols-1 2xs:grid 2xs:grid-cols-1">
            <div className="w-3/4 xs:w-full sm:w-full md:w-full 2xs:w-full shadow-md xs:shadow-none p-5 xs:p-2">
              <div className="bg-blue-200 text-center rounded-xl text-white text-base font-extrabold flex items-center justify-center">
                <Image
                  alt="flood"
                  src="/img/blog/flooded-cars.png"
                  width={940}
                  height={350}
                />
              </div>
              <h1 className="font-bold mb-2 text-5xl sm:text-2xl xs:text-2xl pt-10">
                Flooded Cars Checklist: Essential Car Parts to Check
              </h1>
              <p className="text-sm text-gray-400 font-semibold uppercase pb-5 xs:text-xs">
                "15 MIN READ" - "21, April, 2024"
              </p>
              <div className="text-base font-sans">
                Is your car flood-damaged? Don&apos;t worry! We provide list of
                parts you need to check and its warning signs that your need to
                replace for your flood-damaged car to get it back on Road
              </div>
              <div className="text-lg font-bold text-blue-600 uppercase py-5">
                Oxygen Sensor
              </div>
              <div className="text-base font-sans">
                The sign that your oxygen sensor need to be changed is when you
                feel your exhaust system emitting odor or smoke, your fuel
                efficiency goes down as the mixture of the air and fuel degrades
                due to faulty oxygen sensor. Since the air and fuel degrades,
                the fuel that throttle input to engine decreases and you will
                see a decrease in engine response. The last sign that if seen,
                you need to convince yourself to replace your oxygen sensor is
                your engine runs unevenly or misfires and you see a vibration
                when when your idle or accelerating.
              </div>
              <div className="text-base font-sans">
                You can inquire the price of Oxygen sensor at{' '}
                <Link
                  href="/search-by-part-name/Starter"
                  className="text-blue-600"
                >
                  OXYGEN SENSOR
                </Link>
              </div>
              <div className="text-xl font-bold text-blue-600 font-sans uppercase py-5">
                Starter
              </div>
              <div className="text-base font-sans">
                The warning sign for the starter are quite clear. You just have
                to check the clicking sound or whirring or grindig sound
                especially when you start the engine. Another clear sign is that
                it shows the smoky or burning smell when starting indicating
                failure in electrical system inside the starter
              </div>
              <div className="text-base font-sans">
                You can get to know the prices and place order at{' '}
                <Link
                  href="/search-by-part-name/Starter"
                  className="text-blue-600"
                >
                  STARTER MOTOR
                </Link>
              </div>
              <div className="text-xl font-bold text-blue-600 font-sans uppercase py-5">
                ENGINE
              </div>
              <div className="text-base font-sans">
                If you see oil leaks or coolant leaks. If your car is
                overheated, then it can be that your internal engine parts such
                as head gasket or cylinder head could be cracked is damaged and
                you should replace it. If its less heat then its not a sign thay
                you should change your engine. Excessive oil consumption could
                worn out the piston rings or worn out valve seals and you should
                replace it. You may observe a metallic components in oil during
                the oil change process, it could possibly be a damaged bearings
                or camshaft or piston and you should replace it. You could see
                often misfiring of engine when spark plugs are worn out and
                ignition coils are faulty.
              </div>
              <div className="text-base font-sans">
                You can get to know the prices and place order at{' '}
                <Link
                  href="/search-by-part-name/Engine"
                  className="text-blue-600"
                >
                  ENGINE
                </Link>
              </div>
              <div className="text-lg font-bold text-blue-600 uppercase py-5">
                Fuse Box
              </div>
              <div className="text-base font-sans">
                Non-functioning lights, power windows or door locks not working
                are mostly due to the fault in fusebox. If the fusebox has been
                corroded or has poor connections, then it is a sig to change
                your fusebox.
              </div>
              <div className="text-base font-sans">
                You can inquire the price of Fuse Box at{' '}
                <Link
                  href="/search-by-part-name/Fuse%20Box"
                  className="text-blue-600"
                >
                  FUSE BOX
                </Link>
              </div>
              <div className="text-lg font-bold text-blue-600 uppercase py-5">
                Battery
              </div>
              <div className="text-base font-sans">
                Battery is the most important part of the car that need to be
                checked regularly. If battery is dead, we may end up in the
                middle of the road. Battery dead sign are indicated by dimming
                lights dashboard lights, corroding battery.
              </div>
              <div className="text-base font-sans">
                You can get your battery replaced at&nbsp;
                <Link
                  href="/car-battery-replacement-services-in-uae"
                  className="text-blue-600"
                >
                  CAR BATTERY REPLACEMENT UAE
                </Link>
              </div>
              <div className="text-base font-sans">
                For any spare parts inquiries, submit your inquiry at{' '}
                <Link href="/" className="text-blue-500">
                  Emirates-car.com
                </Link>{' '}
                Our team will get back to you through whatsapp based on stock
                availability or will check the price and get back to you.
              </div>
              <div className="flex py-5">
                <div className="h-10 w-10 rounded-full bg-gray-500"></div>
                &nbsp;
                <div>
                  <p className="text-base xs:text-md font-normal pt-2">
                    <b>Author:</b> "Emirates-car"
                  </p>
                </div>
              </div>
            </div>
            <div className="w-1/4 p-4 xs:p-2 xs:w-full md:w-full sm:w-full 2xs:w-full">
              <RelatedPosts />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
