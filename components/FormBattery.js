'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function FormBattery({ formsData }) {
  const [Make, setMake] = useState('');
  const [Model, setModel] = useState('');
  const [Whatsappno, setWhatsappno] = useState('');
  const [Address, setAddress] = useState('');
  const [Name, setName] = useState('');
  const [Code, setCode] = useState('');

  function handleMakeChange(event) {
    setMake(event.target.value);
  }
  function handleModelChange(event) {
    setModel(event.target.value);
  }
  function handleWhatsAppNoChange(event) {
    setWhatsappno(event.target.value);
  }
  function handleAddressChange(event) {
    setAddress(event.target.value);
  }
  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleCodeChange(event) {
    setCode(event.target.value);
  }
  const mke = [
    'Ford',
    'Chrysler',
    'Citroen',
    'Hillman',
    'Chevrolet',
    'Cadillac',
    'BMW',
    'Austin',
    'Fairthorpe',
    'Fillmore',
    'Pontiac',
    'Studebaker',
    'Buick',
    'Rambler',
    'Plymouth',
    'Volkswagen',
    'Jensen',
    'Oldsmobile',
    'Sandstorm',
    'Haval',
    'Exeed',
    'Skoda',
    'Seres',
    'Opel',
    'Maxus',
    'Changan',
    'Zarooq Motors',
    'Soueast',
    'TANK',
    'Jaecoo',
    'JAC',
    'W Motors',
    'Hongqi',
    'GAC',
    'Foton',
    'ZNA',
    'Zeekr',
    'Great Wall GWM',
    'Dorcen',
    'Chery',
    'Geely',
    'BAIC',
    'Bestune',
    'Abarth',
    'Mercury',
    'Dodge',
    'Shelby',
    'Porsche',
    'Toyota',
    'Mercedes-Benz',
    'MG',
    'Nissan',
    'Honda',
    'Mazda',
    'Renault',
    'Audi',
    'Lincoln',
    'Lotus',
    'Maserati',
    'Mitsubishi',
    'Saab',
    'Subaru',
    'Suzuki',
    'Lamborghini',
    'Merkur',
    'Land Rover',
    'Acura',
    'Lexus',
    'Eagle',
    'Alfa Romeo',
    'Daihatsu',
    'Geo',
    'GMC',
    'Hyundai',
    'Infiniti',
    'Isuzu',
    'Jaguar',
    'Jeep',
    'Saturn',
    'Volvo',
    'HUMMER',
    'Kia',
    'Holden',
    'Corbin',
    'Daewoo',
    'MINI',
    'Maybach',
    'Scion',
    'Spyker',
    'Aston Martin',
    'Bentley',
    'Panoz',
    'Rolls-Royce',
    'Spyker Cars',
    'Ferrari',
    'Hummer',
    'Morgan',
    'Peugeot',
    'Foose',
    'Aptera',
    'Smart',
    'Bugatti',
    'Tesla',
    'Ram',
    'FIAT',
    'Fiat',
    'McLaren',
    'BYD',
    'McLaren Automotive',
    'Mobility Ventures LLC',
    'Pagani',
    'Roush Performance',
    'smart',
    'SRT',
    'Genesis',
    'Karma',
    'Koenigsegg',
    'RUF Automobile',
    'STI',
    'Polestar',
    'Kandi',
  ];
  const make = mke.sort();

  function Submission(e) {
    e.preventDefault();
    const today = new Date();
    const date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();
    const time =
      today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    const dateTime = date + ' ' + time;
    const response = fetch(`/api/g_sheet`, {
      method: 'POST',
      body: JSON.stringify({
        Timestamp: dateTime,
        brand: Make,
        contact: Code + Whatsappno,
        name: Name,
        description:
          'Customer Name: ' +
          Name +
          '\n' +
          'Address: ' +
          Address +
          '\n' +
          'Vehicle: ' +
          Make +
          ' ' +
          Model +
          ' ' +
          'Part List: ' +
          'Battery',
        email: 'Email',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    let message =
      'Timestamp: ' +
      dateTime +
      '\n' +
      'Brand: ' +
      Make +
      '\n' +
      'Model: ' +
      Model +
      '\n' +
      'Customer Name: ' +
      Name +
      '\n' +
      'Address: ' +
      Address;
    alert('Form submitted. We will contact you shortly ;)');
    let messageURI = encodeURI(message);
    setName('');
    setMake('');
    setCode('');
    setModel('');
    setAddress('');
    setWhatsappno('');
    window
      .open(
        `https://api.whatsapp.com/send?phone=+971551478994&text=${messageURI}`,
        '_blank'
      )
      .focus();
  }
  return (
    <div>
      <form
        id="myBatteryForm"
        className="w-full shadow-xl px-8 py-8 xs:px-2 xs:py-3 2xs:px-4 sm:px-4"
        method="POST"
        onSubmit={Submission}
        target="hidden_iframe"
      >
        <div className="flex flex-wrap ">
          <div className="w-full px-3 mb-6 xs:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
              htmlFor="whatsappno"
            >
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 xs:py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
              id="name"
              type="text"
              placeholder="Your name"
              name="entry.1153362739"
              value={Name}
              onChange={handleNameChange}
              autoComplete="off"
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap  mb-2">
          <div className="w-1/2 md:w-1/2 px-3 mb-6 md:mb-0 xs:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
              htmlFor="make"
            >
              Make
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 xs:py-1 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
                id="make"
                name="entry.1911907904"
                required="required"
                value={Make}
                onChange={handleMakeChange}
              >
                <option value="" disabled>
                  Select your Make
                </option>
                {make.map((m, i) => (
                  <option key={i}>{m}</option>
                ))}{' '}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-1/2 md:w-1/2 pr-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
              htmlFor="model"
            >
              Model
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 xs:py-1 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
                id="model"
                name="entry.1541894897"
                value={Model}
                onChange={handleModelChange}
                required
              >
                <option value="" disabled>
                  Select your Model
                </option>
                {formsData
                  .filter(s => s.make === Make)
                  .map((s, i) => (
                    <option key={i} value={s.model}>
                      {s.model}{' '}
                    </option>
                  ))}{' '}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap ">
          <div className="w-full px-3 mb-6 xs:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
              htmlFor="whatsappno"
            >
              Area Name, Emirates
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 xs:py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
              id="whatsappno"
              type="text"
              placeholder="Area Name, Emirates"
              name="entry.1153362739"
              value={Address}
              onChange={handleAddressChange}
              autoComplete="off"
              required
            />
          </div>
        </div>

        <div className="flex flex-wrap ">
          <div className="w-2/5 px-3 mb-6 xs:mb-0 md:mb-0">
            <label
              htmlFor="Code"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
            >
              CODE
            </label>
            <input
              id="Code"
              name="entry.44547744"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 xs:py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
              type="text"
              placeholder="Eg. +971, +27 ..."
              onChange={handleCodeChange}
              value={Code}
              required
            />
          </div>
          <div className="w-3/5 px-3 mb-6 xs:mb-0 md:mb-0">
            <label
              htmlFor="whatsappno"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
            >
              WhatsApp no
            </label>
            <input
              id="whatsappno"
              name="entry.902626710"
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 xs:py-1 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs "
              type="text"
              placeholder="WhatsApp No"
              onChange={handleWhatsAppNoChange}
              value={Whatsappno}
              required
            />
          </div>
        </div>

        <div className="flex flex-wrap py-3">
          <div className="w-full px-3 mb-6 xs:mb-0">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full xs:text-xs"
            >
              Submit
            </button>
          </div>
        </div>
        <div className="flex float-left text-xs text-gray-400">
          <Link
            href="https://emirates-car.com/privacy-policy"
            target="_newtab"
            className="underline"
          >
            Privacy policy
          </Link>
          &nbsp;
          <Link
            href="https://emirates-car.com/terms-and-condition"
            target="_newtab"
            className="underline"
          >
            Terms and conditions
          </Link>
        </div>

        <div className="flex float-right text-xs text-gray-400 ">
          100% secure and trusted
        </div>
      </form>
    </div>
  );
}
