'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function FormComponent({ formsData, postFilter }) {
  const [Year, setYear] = useState('');
  const [Make, setMake] = useState('');
  const [Model, setModel] = useState('');
  const [Email, setEmail] = useState('');
  const [Whatsappno, setWhatsappno] = useState('');
  const [formPartname, setFormPartname] = useState([]);
  const [text, setText] = useState('');
  const [suggestion, setSuggestion] = useState([]);
  const [Address, setAddress] = useState('');
  const [searchMake, setSearchMake] = useState('');
  const [recommend, setRecommend] = useState('');
  const [formMakeChange, setFormMakeChange] = useState('');
  const [Name, setName] = useState('');
  const [Code, setCode] = useState('');

  useEffect(() => {
    const loadPart = async () => {
      var part = [];
      for (var i in postFilter) {
        var filtered = postFilter[i].parts;
        part.push(filtered);
      }
      console.log(part);
      setFormPartname(part);
    };
    loadPart();
  }, [postFilter]);

  const onSuggestionHandler = text => {
    setText(text);
    setSuggestion([]);
  };

  const onPartFormChange = text => {
    let matches = [];
    if (text.length > 0) {
      matches = formPartname.filter(part => {
        const regex = new RegExp(`${text}`, 'gi');
        return part.match(regex);
      });
    }
    setSuggestion(matches);
    setText(text);
  };

  useEffect(() => {
    const loadPart = async () => {
      var part = [];
      for (var i in cities) {
        var filtered = cities[i].city;
        part.push(filtered);
      }
      setFormMakeChange(part);
    };
    loadPart();
  });

  const onMakeSuggestionHandler = searchMake => {
    setSearchMake(searchMake);
    setRecommend([]);
  };

  const onMakeFormChange = searchMake => {
    let matches = [];
    if (searchMake.length > 0) {
      matches = formMakeChange.filter(part => {
        const regex = new RegExp(`${searchMake}`, 'gi');
        return part.match(regex);
      });
    }
    setRecommend(matches);
    setSearchMake(searchMake);
  };

  const ma = [
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
    'Kandi'
  ];
  const make = ma.sort();
  function handleYearChange(event) {
    setYear(event.target.value);
  }
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
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleCodeChange(event) {
    setCode(event.target.value);
  }
  async function handleSubmit(event) {
    event.preventDefault();
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
          Year +
          '\n' +
          'Part List: ' +
          text,
        partList: text,
        email: Email,
        year: Year,
        model: Model,
        address: Address
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    alert('Form submitted. We will contact you shortly ;)');
    setName('');
    setCode('');
    setYear('');
    setMake('');
    setModel('');
    setAddress('');
    setEmail('');
    setText('');
    setWhatsappno('');
  }
  return (
    <div className="place-content-center grid grid-cols-1 gap-3 xs:grid-cols-1 xs:grid s:grid s:grid-cols-1 py-5 xl:mx-10 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 xxs:mx-2 s:mx-2  md:ml-11 my-5 mx-10">
      <form
        id="myForm"
        method="POST"
        onSubmit={handleSubmit}
        className="w-full shadow-xl px-8 py-8 xs:px-4 xs:py-3 xxs:px-4 sm:px-4"
      >
        <div className="grid grid-cols-1 pt-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
            htmlFor="model"
          >
            Name
          </label>
          <div className="relative">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 xs:py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
              id="name"
              type="text"
              placeholder="Name"
              onChange={handleNameChange}
              value={Name}
              autoComplete="off"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 xs:grid-cols-1 sm:grid sm:grid-cols-1 xs:grid xxs:grid xxs:grid-cols-1 s:grid s:grid-cols-1 pt-3">
          <div>
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
              htmlFor="year"
            >
              Year
            </label>
            <div className="relative">
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 xs:py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
                id="year"
                type="text"
                placeholder="Year"
                name="entry.902626710"
                onChange={handleYearChange}
                value={Year}
                autoComplete="off"
                required
              />
            </div>
          </div>
          <div>
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
                name="entry.741646505"
                required="required"
                onChange={handleMakeChange}
                value={Make}
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
          <div>
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
                name="entry.402947466"
                required
                onChange={handleModelChange}
                value={Model}
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
        <div className="grid grid-cols-3 gap-3 xs:grid-cols-1 sm:grid sm:grid-cols-1 xs:grid xxs:grid xxs:grid-cols-1 s:grid s:grid-cols-1 pt-3">
          <div className="flex flex-wrap -mx-3 mb-2">
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
          <div>
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
              htmlFor="city"
            >
              Location
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 xs:py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
              id="city"
              type="text"
              placeholder="(Area, Emirates) or (City, Country)"
              onChange={handleAddressChange}
              value={Address}
              autoComplete="off"
            />
          </div>
          <div>
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
              htmlFor="email"
            >
              Email(Optional)
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 xs:py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
              id="email"
              type="text"
              placeholder="Mail ID"
              onChange={handleEmailChange}
              value={Email}
              autoComplete="off"
              name="entry.113755516"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 pt-3">
          <div>
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
              htmlFor="partname"
            >
              PART NAME
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 xs:py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
              id="partname"
              type="text"
              placeholder="Eg. AC Compressor, Radiator, Gearbox, Antenna, Door glass, Driving light..."
              rows={5}
              name="entry.1660104041"
              onChange={e => onPartFormChange(e.target.value)}
              value={text}
              autoComplete="off"
              required
            />{' '}
            {suggestion &&
              suggestion.map((suggestion, i) => (
                <div
                  key={i}
                  className="cursor-pointer border-gray-400 p-4"
                  onClick={() => onSuggestionHandler(suggestion)}
                >
                  {suggestion}{' '}
                </div>
              ))}{' '}
          </div>
        </div>
        <div className="grid grid-cols-1 pt-3">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded-xl xs:text-xs"
          >
            Submit
          </button>
        </div>
        <div className="flex float-left text-xs">
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

        <div className="flex float-right text-xs">100% secure and trusted</div>
      </form>
    </div>
  );
}
