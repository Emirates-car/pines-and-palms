import React, { Component } from 'react';
import Image from "next/image";
import Britain from '../public/img/icons/united-kingdom.png';
import Indian from '../public/img/icons/india.png';
import Japan from '../public/img/icons/japan.png';
import Korean from '../public/img/icons/south-korea.png';
import USA from '../public/img/icons/usa.png';
import Germany from '../public/img/icons/germany.png';
import China from '../public/img/icons/china.png';
import France from '../public/img/icons/france.png';
import Nav from './nav';

export default class products extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="grid grid-cols-8 xs:grid xs:grid-cols-2 ml-8 xs:mx-5">
          <div className="text-center">
            <Image
              src={Britain}
              alt="used car parts"
              className="object-scale-down h-40 w-full xs:object-none"
            />
            <p className="text-gray-500 text-sm">BRITAIN</p>
          </div>
          <div className="text-center">
            <Image
              src={Indian}
              alt="used car parts dubai"
              className="object-scale-down h-40 w-full xs:object-none"
            />
            <p className="text-gray-500 text-sm">INDIAN</p>
          </div>
          <div className="text-center">
            <Image
              src={Japan}
              alt="used spare parts dubai"
              className="object-scale-down h-40 w-full xs:object-none"
            />
            <p className="text-gray-500 text-sm">JAPANESE</p>
          </div>
          <div className="text-center">
            <Image
              src={Korean}
              alt="used parts honda civic"
              className="object-scale-down h-40 w-full xs:object-none"
            />
            <p className="text-gray-500 text-sm">KOREAN</p>
          </div>
          <div className="text-center">
            <Image
              src={USA}
              alt="spare parts UK"
              className="object-scale-down h-40 w-full xs:object-none"
            />
            <p className="text-gray-500 text-sm">USA</p>
          </div>
          <div className="text-center">
            <Image
              src={Germany}
              alt="german car parts"
              className="object-scale-down h-40 w-full xs:object-none"
            />
            <p className="text-gray-500 text-sm">GERMAN</p>
          </div>
          <div className="text-center">
            <Image
              src={China}
              alt="china car parts"
              className="object-scale-down h-40 w-full xs:object-none"
            />
            <p className="text-gray-500 text-sm">CHINESE</p>
          </div>
          <div className="text-center">
            <Image
              src={France}
              alt="car parts emirates"
              className="object-scale-down h-40 w-full xs:object-none"
            />
            <p className="text-gray-500 text-sm xs:text-xs">FRANCE</p>
          </div>
        </div>
      </div>
    );
  }
}
