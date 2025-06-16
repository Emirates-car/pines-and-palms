'use client';
import React from 'react';
import 'react-accessible-accordion/dist/fancy-example.css';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import Link from 'next/link';

export default function PartsAccordion({ make, location }) {
  return (
    <div className="py-5 xxs:px-7 sm:px-7 s:py-6 lg:mx-6 md:mx-6 xs:mx-2 xxs:mx-2 max-w-7xl mx-auto">
      <h3 className="text-black text-4xl text-center md:text-lg lg:text-2xl font-extrabold xs:text-xl 2xs:text-xs pt-10">
        <nobr className="text-red-600 animate-bounce">What? Where? How? Why? </nobr>
      </h3>
      <Accordion className="my-10">
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              How to order {make} auto spare parts with{' '}
              <Link
                href="/"
                className="text-blue-500 underline hover:no-underline"
              >
                Emirates-car.com
              </Link>{' '}
              {location ? 'in ' + location : ''}?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              To order spare parts with emirates-car.com, you just have to
              submit an inquiry at{' '}
              <Link
                href="/#myForm"
                className="text-blue-500 underline hover:no-underline"
              >
                this form link
              </Link>
              , then you are good to go.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              What are all the {make} upgrades parts do you sell{' '}
              {location ? 'in ' + location : ''}?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              We provide aerodynamics upgrades parts, performance upgrades
              parts, suspension upgrades parts, cooling system upgrades parts,
              transmission and drivetrain upgrades, braking system upgrades
              parts, exterior and interior upgrades parts.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Can I find parts for discontinued {make} parts{' '}
              {location ? 'in ' + location : ''}?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              The best thing you can do is leave it to the professionals. They
              will provide expert advice and help you choose the right part for
              your car&apos;s requirements.{' '}
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              What should I do if I'm unsure whether the part I want to buy will
              fit my car?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              The best thing you can do is leave it to the professionals. They
              will provide expert advice and help you choose the right part for
              your car&apos;s requirements.{' '}
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              What types of {make} parts does Emirates-car.com sell{' '}
              {location ? 'in ' + location : ''}?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              <Link
                href="/#myForm"
                className="text-blue-500 underline hover:no-underline"
              >
                Emirates-car.com
              </Link>{' '}
              sells Genuine/OEM, used and aftermarket parts.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              How long does it take to fulfill my spare parts request{' '}
              {location ? 'in ' + location : ''}?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              You will typically receive a reply within 10 minutes to 30 minutes
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              What is the difference between Genuine/OEM {make} parts and
              aftermarket {make}
              parts?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              <h6 className="font-bold">Genuine/OEM {make} Parts:</h6>
              These are made by the car manufacturer or their authorized
              suppliers and are identical to the original parts installed in
              your vehicle. They ensure perfect fit, quality, and warranty
              compliance but are usually more expensive.
              <h6 className="font-bold">Aftermarket {make} Parts:</h6>
              These are made by third-party manufacturers and may not exactly
              match the original specifications. They are often cheaper and
              available in a wider variety but can vary in quality and
              durability.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Do you provide warranty on {make} spare parts{' '}
              {location ? 'in ' + location : ''}?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>Yes, we do provide.</p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              What if the part which I bought doesn&apos;t fit My car?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              If the part doesn&apos;t fit your car, you can return or exchange
              it within our policy timeframe, provided it&apos;s unused. For
              accurate compatibility, we recommend consulting a professional
              mechanic, and if needed, we can assist in sourcing the correct
              part for your vehicle.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              What should I do if the spare parts I received is damaged{' '}
              {location ? 'in ' + location : ''}?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              You can contact us via WhatsApp, and we will assist you with the
              replacement.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Do you offer Installation services{' '}
              {location ? 'in ' + location : ''}?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              We do not provide installation services directly, but we can
              recommend trusted mechanics or service centers who can assist with
              the installation of the parts.{' '}
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              How long does delivery take within the{' '}
              {location ? 'in ' + location : 'UAE'}?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>It takes around 4 to 6 days.</p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Do you provide International shipping{' '}
              {location ? 'from ' + location : ''}?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>Yes, we do provide.</p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              What are all the courier services available{' '}
              {location ? 'from ' + location : ''}?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              We choose best courier services based on delivery speed, pricing,
              real time tracking and good coverage such as NasEx, FedEx, Aramex,
              DHL, Professional courier etc.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
