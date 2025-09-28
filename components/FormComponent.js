'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCity } from '../app/page';

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
    'Jetour',
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
    'Kandi',
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
        address: Address,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
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
    <div className="max-w-4xl mx-auto my-5 xs:mx-3 xxs:mx-3 md:mx-4">
      <h2 className="bg-gray-800 text-white text-center py-5 text-2xl md:text-4xl font-bold font-sans">
        AUTO SPARE PARTS INQUIRY FORM
      </h2>
      <form
        id="inquiry-form"
        method="POST"
        onSubmit={handleSubmit}
        className="bg-blue-400 w-full px-8 py-8 xs:px-3 xxs:px-4 sm:px-4"
      >
        {/* Personal Info */}
        <fieldset className="grid grid-cols-2 gap-3 pt-3">
          <legend className="sr-only">Personal Information</legend>

          <div>
            <label htmlFor="name" className="block text-sm font-bold mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 rounded-sm py-2 px-4 text-xs text-gray-500 focus:outline-none focus:border-gray-400"
              onChange={handleNameChange}
              value={Name}
              autoComplete="off"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-bold mb-2">
              Email <span className="text-gray-600">(optional)</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="Mail ID"
              className="w-full border border-gray-300 rounded-sm py-2 px-4 text-xs text-gray-500 focus:outline-none focus:border-gray-400"
              onChange={handleEmailChange}
              value={Email}
              autoComplete="off"
            />
          </div>
        </fieldset>

        {/* Vehicle Info */}
        <fieldset className="grid grid-cols-3 xs:grid-cols-1 xxs:grid-cols-1 gap-3 pt-3">
          <legend className="sr-only">Vehicle Information</legend>

          {/* Year */}
          <div>
            <label htmlFor="year" className="block text-sm font-bold mb-2">
              Year
            </label>
            <input
              id="year"
              type="text"
              placeholder="Year"
              className="w-full border border-gray-300 rounded-sm py-2 px-4 text-xs text-gray-500 focus:outline-none focus:border-gray-400"
              onChange={handleYearChange}
              value={Year}
              required
            />
          </div>

          {/* Make */}
          <div>
            <label htmlFor="make" className="block text-sm font-bold mb-2">
              Make
            </label>
            <select
              id="make"
              required
              onChange={handleMakeChange}
              value={Make}
              className="w-full border border-gray-300 rounded-sm py-2 px-4 text-xs text-gray-500 focus:outline-none focus:border-gray-400"
            >
              <option value="" disabled>
                Select your Make
              </option>
              {make.map((m, i) => (
                <option key={i}>{m}</option>
              ))}
            </select>
          </div>

          {/* Model */}
          <div>
            <label htmlFor="model" className="block text-sm font-bold mb-2">
              Model
            </label>
            <select
              id="model"
              required
              onChange={handleModelChange}
              value={Model}
              className="w-full border border-gray-300 rounded-sm py-2 px-4 text-xs text-gray-500 focus:outline-none focus:border-gray-400"
            >
              <option value="" disabled>
                Select your Model
              </option>
              {[...new Set(formsData
                .filter(s => s.make === Make)
                .map(s => s.model)
              )].map((model, i) => (
                <option key={i} value={model}>
                  {model}
                </option>
              ))}
            </select>
          </div>
        </fieldset>

        {/* Contact Info */}
        <fieldset className="grid grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1 sm:grid-cols-1 gap-3 pt-3">
          <legend className="sr-only">Contact Information</legend>

          <div className="flex gap-3">
            <div className="w-2/6">
              <label htmlFor="code" className="block text-sm font-bold mb-2">
                Code
              </label>
              <input
                id="code"
                type="text"
                placeholder="+971, +27 ..."
                className="w-full border border-gray-300 rounded-sm py-2 px-2 text-xs text-gray-500 focus:outline-none focus:border-gray-400"
                onChange={handleCodeChange}
                value={Code}
                required
              />
            </div>
            <div className="w-4/6">
              <label htmlFor="whatsappno" className="block text-sm font-bold mb-2">
                WhatsApp No
              </label>
              <input
                id="whatsappno"
                type="text"
                placeholder="WhatsApp No"
                className="w-full border border-gray-300 rounded-sm py-2 px-4 text-xs text-gray-500 focus:outline-none focus:border-gray-400"
                onChange={handleWhatsAppNoChange}
                value={Whatsappno}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-bold mb-2">
              Location
            </label>
            <input
              id="city"
              type="text"
              placeholder="(Area, Emirates) or (City, Country)"
              className="w-full border border-gray-300 rounded-sm py-2 px-4 text-xs text-gray-500 focus:outline-none focus:border-gray-400"
              onChange={handleAddressChange}
              value={Address}
              autoComplete="off"
            />
          </div>
        </fieldset>

        {/* Part Name */}
        <fieldset className="pt-3">
          <legend className="sr-only">Part Information</legend>

          <label htmlFor="partname" className="block text-sm font-bold mb-2">
            Part Name
          </label>
          <textarea
            id="partname"
            rows={5}
            placeholder="Eg. AC Compressor, Radiator, Gearbox, Antenna..."
            className="w-full border border-gray-300 rounded-sm py-2 px-4 text-xs text-gray-500 focus:outline-none focus:border-gray-400"
            onChange={e => onPartFormChange(e.target.value)}
            value={text}
            required
          />
          {suggestion &&
            suggestion.map((s, i) => (
              <div
                key={i}
                className="cursor-pointer border-gray-400 p-2"
                onClick={() => onSuggestionHandler(s)}
              >
                {s}
              </div>
            ))}
        </fieldset>

        {/* Submit & Footer */}
        <div className="pt-3">
          <button
            type="submit"
            className="bg-darkblue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm xs:text-sm"
          >
            Find Now
          </button>
        </div>

        <footer className="flex justify-between text-xs pt-3">
          <div>
            <Link
              href="https://emirates-car.com/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline mr-2"
            >
              Privacy Policy
            </Link>
            <Link
              href="https://emirates-car.com/terms-and-condition"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Terms & Conditions
            </Link>
          </div>
          <div>100% secure and trusted</div>
        </footer>
      </form>
    </div>

  );
}
