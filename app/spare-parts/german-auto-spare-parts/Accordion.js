"use client";
import 'react-accessible-accordion/dist/fancy-example.css';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from 'react-accessible-accordion';

import React from 'react'

export default function Accordon() {
  return (
    <div className="place-content-center text-center pt-10 xl:mx-36 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 2xs:mx-2 s:mx-2  md:ml-11 my-10 mx-10">
      <div className="text-blue-600 text-center text-4xl md:text-lg lg:text-2xl font-extrabold xs:text-xl 2xs:text-xl s:text-xl">
        FAQ SESSION
      </div>
      <Accordion className="my-10">
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>How can I place order?</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              You can simply place order by Submitting your details in the form.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Do you provide international shipping?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>Yes, we do provide.</p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              What is the return policy?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Check out the return policy here{' '}
              <a href="https://emirates-car.com/return-an-refund-policy">
                here
              </a>
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Do you offer warranties for the parts?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>We do provide warrantees only for some parts.</p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Can I return a part if it doesn't fit my vehicle?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>Yes you can return or also replace withe other one.</p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Can i place order for brands and parts that are not included in
              the website?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Yes, the forms are designed in a way that accepts any parts for
              any cars. If you dont find your desired parts or brand in the
              dropdown in the form, then submit your inquiries at{' '}
              <a href="https://emirates-car.com/get-in-touch">here.</a>
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
