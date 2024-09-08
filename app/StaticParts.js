import Link from 'next/link';
import React from 'react';
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
import Image from 'next/image';

export default function StaticParts() {
  const images = [
    {
      images: ABS,
      name: `ABS`,
      alt: `anti lock braking system`,
      link: '/search-by-part-name/Anti-Lock%20Brake%20Control%20Module%20(ABS)',
    },
    {
      images: AirFilter,
      name: `Air Filter`,
      alt: `air filter`,
      link: '/get-in-touch',
    },
    {
      images: AirSuspension,
      name: `Air Suspension`,
      alt: `Air suspension`,
      link: '/get-in-touch',
    },
    {
      images: AxleAssembly,
      name: `Axle`,
      alt: `axle`,
      link: '/search-by-part-name/Axle%20Assembly%20(Front,%204WD)',
    },
    {
      images: BrakePads,
      name: `Brake Pads`,
      alt: `brake pads`,
      link: '/get-in-touch',
    },
    {
      images: CatalyticConverter,
      name: `Catalytic Convertor`,
      alt: `catalytic convertor`,
      link: '/get-in-touch',
    },
    {
      images: CylinderHead,
      name: `Cylinder Head`,
      alt: `cylinder`,
      link: '/search-by-part-name/Cylinder%20Head)',
    },
    {
      images: Distributor,
      name: `Distributor`,
      alt: `distributor`,
      link: '/search-by-part-name/Distributor',
    },
    {
      images: Engine,
      name: `Engine`,
      alt: `Engine`,
      link: '/search-by-part-name/Engine%20Assembly',
    },
    {
      images: ExhaustManifold,
      name: `Exhaust Manifold`,
      alt: `exhaust system`,
      link: '/search-by-part-name/Exhaust%20Manifold',
    },
    {
      images: GearBox,
      name: `Gearbox / Transmission`,
      alt: `gearbox`,
      link: '/search-by-part-name/Transmission%20Control%20Module',
    },
    {
      images: Grille,
      name: `grill`,
      alt: `grill`,
      link: '/search-by-part-name/Grille',
    },
    {
      images: Headlight,
      name: `Headlight`,
      alt: `headlight bulb`,
      link: '/search-by-part-name/Headlight%20Assembly',
    },
    {
      images: MasterCylinderKit,
      name: `Master Cylinder`,
      alt: `master cylinder`,
      link: '/search-by-part-name/Master%20Cylinder%20(Clutch)',
    },
    {
      images: MudFlap,
      name: `Mud Flaps`,
      alt: `mud flaps`,
      link: '/get-in-touch',
    },
    {
      images: Radiator,
      name: `Radiator`,
      alt: `radiator`,
      link: '/search-by-part-name/Radiator',
    },
    {
      images: RearBumper,
      name: `Rear Bumper`,
      alt: `rear bumper`,
      link: '/search-by-part-name/Bumper%20Assembly%20(Rear)',
    },
    {
      images: ReverseLight,
      name: `Reverse Light`,
      alt: `reverse light`,
      link: '/search-by-part-name/Reverse%20Light',
    },
    {
      images: Rim,
      name: `Rims`,
      alt: `Rims for sale`,
      link: '/search-by-part-name/Rim',
    },
    {
      images: SeatBelt,
      name: `Seat Belt`,
      alt: `seat belt`,
      link: '/search-by-part-name/Seat%20Belt',
    },
    {
      images: ShockAbsorber,
      name: `Shock Absorber`,
      alt: `shock absorber`,
      link: '/search-by-part-name/Shock%20Absorber',
    },
    {
      images: SideMirror,
      name: `Mirror`,
      alt: `mirrors`,
      link: '/search-by-part-name/Mirror%20(Rear%20View)',
    },
    {
      images: SteeringWheel,
      name: `Steering Wheel`,
      alt: `steering wheel`,
      link: '/search-by-part-name/Steering%20Wheel',
    },
    {
      images: Wheel,
      name: `wheels`,
      alt: `wheels`,
      link: '/search-by-part-name/Wheel',
    },
  ];
  return (
    <div>
      <div className="text-black text-4xl my-10 text-center md:text-2xl lg:text-2xl font-bold xs:text-xl xxs:text-2xl pt-10">
        Popular <span className="text-blue-500">Searched Parts</span> in UAE
      </div>
      <div className="grid grid-cols-5 sm:gril-cols-2 xxs:grid-cols-2 gap-2 s:grid-cols-2 xs:grid-cols-1 px-5 xs:px-2 xxs:px-2 md:grid-cols-3 lg:grid-cols-3 max-w-7xl mx-auto">
        {images.map((i, k) => (
          <div key={k} className="border-2 p-5 relative bg-gray-200">
            <sup className="absolute top-0 right-0 text-xs font-bold text-white bg-red-600 rounded-sm p-1">
              Sale!
            </sup>
            <div className="h-50 flex justify-center">
              <div className="text-lg font-bold font-sans xs:text-base">
                {i.name}
              </div>
            </div>

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
              className="flex items-center justify-center px-8 py-2 my-5 text-lg border border-transparent font-medium rounded-sm text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-lg md:px-5 xs:py-2 xs:text-xs xs:my-2 xxs:text-sm xxs:my-2 s:text-sm s:my-2 focus:filter brightness-125"
              title={i.name}
            >
              Inquire Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
