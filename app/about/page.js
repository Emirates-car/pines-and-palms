import Link from 'next/link';
import React from 'react';

export default function About() {
  return (
    <div>
      <div className="place-content-center pt-10 xl:mx-36 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 xxs:mx-2 s:mx-2 md:ml-11 my-10 mx-10">
        <p className="text-blue-600 text-center text-4xl md:text-lg lg:text-2xl font-extrabold xs:text-xl xxs:text-xl s:text-xl">
          ABOUT Emirates-car.com
        </p>
        <p className="text-lg py-4 sm:mt-5 sm:text-base md:mt-5 md:text-base lg:mx-0 lg:text-base xs:text-sm xxs:text-sm s:text-sm xs:mx-2">
          Emirates-car.com is an online platform to buy/order auto spare parts. We have spare parts for American brand cars such as Ford, GMC, Cadillac, Chevrolet, Dodge, Chrysler, and{' '}
          <Link href="/spare-parts/american-auto-spare-parts" className="text-blue-700 hover:text-blue-900 list-none underline" title="American car parts">
            American car parts
          </Link>
          . Japanese brand cars such as Toyota, Mitsubishi, Honda, Infiniti, Daihatsu, Nissan, and{' '}
          <Link href="/spare-parts/japanese-auto-spare-parts" className="text-blue-700 hover:text-blue-900 list-none underline" title="Japan car parts">
            Japanese car parts
          </Link>
          . We have spare parts for Korean car brands such as Hyundai, Kia, and{' '}
          <Link href="/spare-parts/korean-auto-spare-parts" className="text-blue-700 hover:text-blue-900 list-none underline" title="Korean car parts">
            Korean car parts
          </Link>
          . We also provide spare parts for German brand cars such as Mercedes-Benz, BMW, Volkswagen, Land Rover, Porsche, Jaguar, Mini Cooper, and{' '}
          <Link href="/spare-parts/german-auto-spare-parts" className="text-blue-700 hover:text-blue-900 list-none underline" title="German car parts">
            German car parts
          </Link>
          . We have become prominent auto spare parts dealers online.
        </p>
        <p className="text-lg text-gray-800 py-4 sm:mt-5 sm:text-base md:mt-5 md:text-sm lg:mx-0 lg:text-base xs:text-sm xxs:text-sm s:text-sm xs:mx-2">
          We deal in used/new/aftermarket/genuine/OEM parts online. We deliver all over the UAE, including Dubai, Abu Dhabi, Ajman, Ras Al Khaimah, Sharjah, and{' '}
          <Link href="/search-by-cities-in-uae" className="text-blue-500 hover:text-blue-800 list-none underline">
            car parts in UAE
          </Link>
          &nbsp; and also to other countries on demand. We offer Cash on Delivery (COD) in the UAE. If you are looking for car spare parts, you can buy/order from us online by submitting inquiries on our website, and our team will get back to you with the best price quote through WhatsApp.
        </p>
        <div className="text-lg text-gray-800 py-4 sm:mt-5 sm:text-base md:mt-5 md:text-sm lg:mx-0 lg:text-base xs:text-sm xxs:text-sm s:text-sm xs:mx-2">
          You can search for your spare parts by:
          <ul>
            <li className="text-blue-700 hover:text-blue-900 list-none underline">
              <i className="fas fa-car"></i>{' '}
              <Link href="/search-by-make">Car Make Model</Link>
            </li>
            <li className="text-blue-700 hover:text-blue-900 list-none underline">
              <i className="fas fa-bolt"></i>{' '}
              <Link href="/search-by-part-name">Car Spare Parts</Link>
            </li>
            <li className="text-blue-700 hover:text-blue-900 list-none underline">
              <i className="fas fa-map-pin"></i>{' '}
              <Link href="/search-by-cities-in-uae">Location in UAE</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
