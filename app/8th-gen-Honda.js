import React from 'react';
import Image from 'next/image';
import ABS from '../public/img/honda-eighth-gen/Anti_Lock_Braking_System.webp';
import AirFilter from '../public/img/honda-eighth-gen/Air_Filter.webp';
import AirSuspension from '../public/img/honda-eighth-gen/Air_Suspension_Module.webp';
import AxleAssembly from '../public/img/honda-eighth-gen/Axle_Assembly_Rear.webp';
import BrakePads from '../public/img/honda-eighth-gen/Brake_Pads.webp';
import CatalyticConverter from '../public/img/honda-eighth-gen/Catalytic_Converter.webp';
import CylinderHead from '../public/img/honda-eighth-gen/Cylinder_Head.webp';
import Distributor from '../public/img/honda-eighth-gen/Distributor.webp';
import Engine from '../public/img/honda-eighth-gen/Engine.webp';
import ExhaustManifold from '../public/img/honda-eighth-gen/Exhaust_Manifold.webp';
import GearBox from '../public/img/honda-eighth-gen/Gearbox.webp';
import Grille from '../public/img/honda-eighth-gen/Grille.webp';
import Headlight from '../public/img/honda-eighth-gen/Headlight.webp';
import MasterCylinderKit from '../public/img/honda-eighth-gen/Master_Cylinder.webp';
import Radiator from '../public/img/honda-eighth-gen/Radiator.webp';
import RearBumper from '../public/img/honda-eighth-gen/Rear_Bumper_Assembly.webp';
import ReverseLight from '../public/img/honda-eighth-gen/Reverse_Light.webp';
import Rim from '../public/img/honda-eighth-gen/Rim.webp';
import SeatBelt from '../public/img/honda-eighth-gen/Seat_Belt.webp';
import ShockAbsorber from '../public/img/honda-eighth-gen/Shock_Absorber.webp';
import SideMirror from '../public/img/honda-eighth-gen/Side_Mirror.webp';
import SteeringWheel from '../public/img/honda-eighth-gen/Steering_Wheel.webp';
import Wheel from '../public/img/honda-eighth-gen/Wheel.webp';
import MudFlap from '../public/img/honda-eighth-gen/Mud_Flap.webp';
import Link from 'next/link';

export default function Honda() {
  const images = [
    {
      images: ABS,
      name: 'ABS',
      alt: 'honda accord anti lock braking system',
      link:
        'https://emirates-car.com/search-by-part-name/Anti-Lock%20Brake%20Control%20Module%20(ABS)'
    },
    {
      images: AirFilter,
      name: 'Air Filter',
      alt: 'honda accord air filter',
      link: 'https://emirates-car.com/get-in-touch'
    },

    {
      images: AirSuspension,
      name: 'Air Suspension',
      alt: 'honda accord air suspension',
      link: 'https://emirates-car.com/get-in-touch'
    },

    {
      images: AxleAssembly,
      name: 'Axle',
      alt: 'honda accord axle',
      link:
        'https://emirates-car.com/search-by-part-name/Axle%20Assembly%20(Front,%204WD)'
    },
    {
      images: BrakePads,
      name: 'Brake Pads',
      alt: 'honda accord brake pads',
      link: 'https://emirates-car.com/get-in-touch'
    },
    {
      images: CatalyticConverter,
      name: 'Catalytic Convertor',
      alt: 'honda accord catalytic convertor',
      link: 'https://emirates-car.com/get-in-touch'
    },
    {
      images: CylinderHead,
      name: 'Cylinder Head',
      alt: 'honda accord cylinder',
      link: 'https://emirates-car.com/search-by-part-name/Cylinder%20Head)'
    },
    {
      images: Distributor,
      name: 'Distributor',
      alt: 'honda accord distributor',
      link: 'https://emirates-car.com/search-by-part-name/Distributor'
    },
    {
      images: Engine,
      name: 'Engine',
      alt: 'honda accord engine',
      link: 'https://emirates-car.com/search-by-part-name/Engine%20Assembly'
    },
    {
      images: ExhaustManifold,
      name: 'Exhaust Manifold',
      alt: 'honda accord exhaust system',
      link: 'https://emirates-car.com/search-by-part-name/Exhaust%20Manifold'
    },
    {
      images: GearBox,
      name: 'Gearbox / Transmission',
      alt: 'honda accord gearbox',
      link:
        'https://emirates-car.com/search-by-part-name/Transmission%20Control%20Module'
    },
    {
      images: Grille,
      name: 'Grille',
      alt: 'honda accord grill',
      link: 'https://emirates-car.com/search-by-part-name/Grille'
    },
    {
      images: Headlight,
      name: 'Headlight',
      alt: 'honda accord headlight bulb',
      link: 'https://emirates-car.com/search-by-part-name/Headlight%20Assembly'
    },
    {
      images: MasterCylinderKit,
      name: 'Master Cylinder',
      alt: 'honda accord master cylinder',
      link:
        'https://emirates-car.com/search-by-part-name/Master%20Cylinder%20(Clutch)'
    },
    {
      images: MudFlap,
      name: 'Mud Flap',
      alt: 'honda accord mud flaps',
      link: 'https://emirates-car.com/get-in-touch'
    },
    {
      images: Radiator,
      name: 'Radiator',
      alt: 'honda accord radiator',
      link: 'https://emirates-car.com/search-by-part-name/Radiator'
    },
    {
      images: RearBumper,
      name: 'Rear Bumper',
      alt: 'honda accord rear bumper',
      link:
        'https://emirates-car.com/search-by-part-name/Bumper%20Assembly%20(Rear)'
    },
    {
      images: ReverseLight,
      name: 'Reverse Light',
      alt: 'honda accord reverse light bulb',
      link: 'https://emirates-car.com/search-by-part-name/Reverse%20Light'
    },
    {
      images: Rim,
      name: 'Rims',
      alt: 'honda accord rims for sale',
      link: 'https://emirates-car.com/search-by-part-name/Rim'
    },
    {
      images: SeatBelt,
      name: 'Seat Belt',
      alt: 'honda accord seat belt',
      link: 'https://emirates-car.com/search-by-part-name/Seat%20Belt'
    },
    {
      images: ShockAbsorber,
      name: 'Shock Absorber',
      alt: 'honda accord shock absorber',
      link: 'https://emirates-car.com/search-by-part-name/Shock%20Absorber'
    },
    {
      images: SideMirror,
      name: 'Mirror',
      alt: 'honda accord mirrors',
      link:
        'https://emirates-car.com/search-by-part-name/Mirror%20(Rear%20View)'
    },
    {
      images: SteeringWheel,
      name: 'Steering Wheel',
      alt: 'honda accord steering wheel',
      link: 'https://emirates-car.com/search-by-part-name/Steering%20Wheel'
    },
    {
      images: Wheel,
      name: 'Wheels',
      alt: 'honda accord wheels',
      link: 'https://emirates-car.com/search-by-part-name/Wheel'
    }
  ];

  return (
    <div>
      <div className="grid grid-cols-5 gap-2 s:grid-cols-2 xs:grid-cols-2 md:grid-cols-3">
        {images.map((i, m) => (
          <div key={m} className="border-2 p-5 relative">
            <sup className="absolute top-0 right-0 text-sm font-bold text-white bg-red-600 rounded-l-xl rounded-r-xl p-1">
              Sale!!
            </sup>
            <div className="h-50">
              <h6 className="text-xl font-bold font-sans">{i.name}</h6>
            </div>

            <hr className="py-1" />
            <Image
              src={i.images}
              alt={i.alt}
              height={250}
              width={250}
              className="object-none object-center p-1"
              priority
            />

            <Link
              href={i.link}
              title={'Honda accord ' + i.name}
              className="flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-xs xs:my-2 2xs:text-sm 2xs:my-2 s:text-sm s:my-2 focus:filter brightness-125"
            >
              Inquire Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
