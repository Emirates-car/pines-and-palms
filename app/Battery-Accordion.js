"use client";
import React from 'react'
import 'react-accessible-accordion/dist/fancy-example.css';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from 'react-accessible-accordion';

export default function BatteryAccordion() {
  return (
    <div>
      <Accordion className="my-10">
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              What is CCA(cold cranking amps)?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              The car battery with more CCA, has high chance of starting the
              engine very soon than the car battery which has less CCA value. So
              when buying battery make sure that your battery has a good cold
              cranking Amp value.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              What are the types of battery?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Car battery are of AGM types or of EFB types. Some other batteries
              are mostly the variation of lead acid batteries. It works by
              chemical reaction between lead plates, sulphuric acid and
              distilled water to create electrical power.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              What is the recommended time period to change your car battery?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Recommended time period to replace your car battery is 2 years.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Is dimming light the sign to change the car battery?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Yes, when you see your car indicator is dimming its light, it has
              more probability to get its car battery replaced.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              How do you maintain your car battery from corroding?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              To maintain car battery from corrosion, use distilled water to
              clean it very often.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              Big rides are better than Small rides for the longetivity of the
              battery. Is it true?
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Yes, Big rides at once are better than frequent small rides for
              the longetivity of the car battery.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
