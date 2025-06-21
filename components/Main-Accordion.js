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

export default function MainAccordion() {
  return (
    <section
      className="py-5 xxs:px-7 sm:px-7 s:py-6 lg:mx-6 md:mx-6 xs:mx-2 xxs:mx-2 max-w-7xl mx-auto"
      aria-label="Frequently Asked Questions"
    >
      <h2 className="text-black text-4xl text-center md:text-lg lg:text-2xl font-extrabold xs:text-xl 2xs:text-xs pt-10">
        <span className="text-red-600 animate-bounce inline-block">
          What? Where? How? Why?
        </span>
      </h2>

      <Accordion className="my-10">
        {/* FAQ Item 1 */}
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              How to order auto spare parts with{' '}
              <Link
                href="/"
                className="text-blue-500 underline hover:no-underline"
              >
                Emirates-car.com
              </Link>
              ?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              To order spare parts with Emirates-car.com, submit an inquiry via{' '}
              <Link
                href="/#myForm"
                className="text-blue-500 underline hover:no-underline"
              >
                this form
              </Link>
              , and you’re good to go.
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        {/* FAQ Item 2 */}
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              What should I do if I'm unsure whether the part fits my car?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Leave it to professionals. They will advise and help you choose the correct part for your car.
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        {/* FAQ Item 3 */}
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              What types of parts does Emirates-car.com sell?
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
              offers genuine/OEM, used, and aftermarket parts.
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        {/* FAQ Item 4 */}
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              How long does it take to fulfill my spare parts request?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>Typically, you will receive a reply within 10 minutes.</p>
          </AccordionItemPanel>
        </AccordionItem>

        {/* FAQ Item 5 */}
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Difference between Genuine/OEM and aftermarket parts?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              <strong>Genuine/OEM Parts:</strong> Made by the manufacturer or authorized supplier. Perfect fit and quality, but more expensive.<br />
              <strong>Aftermarket Parts:</strong> Made by third-party manufacturers. More affordable and widely available, but quality may vary.
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        {/* FAQ Item 6 */}
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Do you provide warranty on spare parts?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>Yes, we provide warranty for applicable parts.</p>
          </AccordionItemPanel>
        </AccordionItem>

        {/* FAQ Item 7 */}
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              What if the part doesn’t fit my car?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              You can return or exchange it within our return policy window. We recommend consulting a mechanic before purchase.
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        {/* FAQ Item 8 */}
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              What should I do if the received part is damaged?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Contact us via WhatsApp, and we’ll assist with a replacement.
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        {/* FAQ Item 9 */}
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Do you offer installation services?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              No, but we can recommend trusted mechanics or service centers.
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        {/* FAQ Item 10 */}
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              How long does delivery take within the UAE?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>Delivery typically takes 4 to 6 days.</p>
          </AccordionItemPanel>
        </AccordionItem>

        {/* FAQ Item 11 */}
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Do you provide international shipping?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>Yes, we do provide international shipping.</p>
          </AccordionItemPanel>
        </AccordionItem>

        {/* FAQ Item 12 */}
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              What courier services do you use?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              We choose the best based on speed, price, and tracking. Examples include NasEx, FedEx, Aramex, DHL, and more.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </section>

  );
}
