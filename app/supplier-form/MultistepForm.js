"use client"
import React, { useState } from 'react';

export default function SupplierForm() {
    const [step, setStep] = useState(1);

    // Step 1
    const [garageName, setGarageName] = useState('');
    const [tradeLicense, setTradeLicense] = useState('');
    const [licenseExpiry, setLicenseExpiry] = useState('');
    const [establishmentYear, setEstablishmentYear] = useState('');
    const [emirate, setEmirate] = useState('');
    const [address, setAddress] = useState('');
    const [website, setWebsite] = useState('');

    // Step 2
    const [contactName, setContactName] = useState('');
    const [designation, setDesignation] = useState('');
    const [phone, setPhone] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [email, setEmail] = useState('');
    const [altEmail, setAltEmail] = useState('');

    // Step 3
    const [parts, setParts] = useState('');
    const [brandsSearch, setBrandsSearch] = useState('');
    const [brands, setBrands] = useState([]);
    const [conditions, setConditions] = useState([]);
    const [delivery, setDelivery] = useState([]);
    const [locations, setLocations] = useState([]);
    const [returnPolicy, setReturnPolicy] = useState('');
    const [catalog, setCatalog] = useState(null);

    const allBrands = ['Toyota', 'Nissan', 'Ford', 'Chevrolet', 'BMW', 'Mercedes', 'Kia', 'Hyundai', 'Volkswagen', 'Volvo'];
    const filteredBrands = allBrands.filter((brand) => brand.toLowerCase().includes(brandsSearch.toLowerCase()));

    const toggleCheckbox = (value, list, setList) => {
        setList((prev) => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
    };

    async function handleSubmit(e) {
        e.preventDefault();

        console.log("submitting form...")
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


        fetch(`/api/g_sheet_supplier`, {
            method: 'POST',
            body: JSON.stringify({
                Timestamp: dateTime,
                garageName: garageName,
                tradeLicense: tradeLicense,
                licenseExpiry: licenseExpiry,
                establishmentYear: establishmentYear,
                emirate: emirate,
                address: address,
                website: website,
                contactName: contactName,
                designation: designation,
                phone: phone,
                whatsapp: whatsapp,
                email: email,
                altEmail: altEmail,
                parts: parts,
                brands: brands,
                conditions: conditions,
                delivery: delivery,
                locations: locations,
                returnPolicy: returnPolicy
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        alert('Form submitted successfully.');
    }

    return (
        <div
            onKeyDown={(e) => {
                if (e.key === 'Enter' && step !== 3) {
                    e.preventDefault();
                }
            }}
            className="space-y-8 p-4 max-w-3xl mx-auto w-full"
        >
            {step === 1 && (
                <div>
                    <h2 className="text-xl font-semibold mb-4">Garage Details</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <input className="input w-full" placeholder="Garage Name" value={garageName} onChange={(e) => setGarageName(e.target.value)} />
                        <input className="input w-full" placeholder="Trade License No" value={tradeLicense} onChange={(e) => setTradeLicense(e.target.value)} />
                        <input className="input w-full" type="date" placeholder="License Expiry" value={licenseExpiry} onChange={(e) => setLicenseExpiry(e.target.value)} />
                        <input className="input w-full" placeholder="Establishment Year" value={establishmentYear} onChange={(e) => setEstablishmentYear(e.target.value)} />
                        <select className="input w-full" value={emirate} onChange={(e) => setEmirate(e.target.value)}>
                            <option value="">Select Emirate</option>
                            {['Abu Dhabi', 'Dubai', 'Sharjah', 'Ajman', 'RAK', 'Umm Al Quwain', 'Fujairah'].map(e => <option key={e}>{e}</option>)}
                        </select>
                        <input className="input w-full" placeholder="Website (optional)" value={website} onChange={(e) => { console.log(e.target.value), setWebsite(e.target.value) }} />
                    </div>
                    <textarea className="input w-full mt-6" placeholder="Garage Address" value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
            )}

            {step === 2 && (
                <div>
                    <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <input className="input w-full" placeholder="Contact Person Name" value={contactName} onChange={(e) => setContactName(e.target.value)} />
                        <input className="input w-full" placeholder="Designation" value={designation} onChange={(e) => setDesignation(e.target.value)} />
                        <input className="input w-full" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        <input className="input w-full" placeholder="WhatsApp Number" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} />
                        <input className="input w-full" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input className="input w-full" type="email" placeholder="Alternate Email" value={altEmail} onChange={(e) => setAltEmail(e.target.value)} />
                    </div>
                </div>
            )}

            {step === 3 && (
                <div>
                    <h2 className="text-xl font-semibold mb-4">Spare Parts Details</h2>
                    <textarea className="input w-full" placeholder="Parts Description" value={parts} onChange={(e) => setParts(e.target.value)} />

                    <input className="input w-full mt-6" placeholder="Search Vehicle Brands..." value={brandsSearch} onChange={(e) => setBrandsSearch(e.target.value)} />
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                        {filteredBrands.map((brand) => (
                            <label key={brand} className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={brands.includes(brand)}
                                    onChange={() => toggleCheckbox(brand, brands, setBrands)}
                                    className="mr-2"
                                />
                                {brand}
                            </label>
                        ))}
                    </div>

                    <p className="mt-6 font-semibold">Part Conditions</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {['New', 'Used', 'OEM', 'Aftermarket'].map((opt) => (
                            <label key={opt} className="block">
                                <input
                                    type="checkbox"
                                    checked={conditions.includes(opt)}
                                    onChange={() => toggleCheckbox(opt, conditions, setConditions)}
                                    className="mr-2"
                                />{opt}
                            </label>
                        ))}
                    </div>

                    <p className="mt-6 font-semibold">Delivery Options</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {['Pickup', 'Courier', 'Other'].map((opt) => (
                            <label key={opt} className="block">
                                <input
                                    type="checkbox"
                                    checked={delivery.includes(opt)}
                                    onChange={() => toggleCheckbox(opt, delivery, setDelivery)}
                                    className="mr-2"
                                />{opt}
                            </label>
                        ))}
                    </div>

                    <p className="mt-6 font-semibold">Shipping Locations (UAE)</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {['Abu Dhabi', 'Dubai', 'Sharjah', 'Ajman', 'RAK', 'Umm Al Quwain', 'Fujairah'].map((city) => (
                            <label key={city} className="block">
                                <input
                                    type="checkbox"
                                    checked={locations.includes(city)}
                                    onChange={() => toggleCheckbox(city, locations, setLocations)}
                                    className="mr-2"
                                />{city}
                            </label>
                        ))}
                    </div>

                    <textarea className="input w-full mt-6" placeholder="Return Policy" value={returnPolicy} onChange={(e) => setReturnPolicy(e.target.value)} />
                    <input type="file" className="input mt-2 w-full" onChange={(e) => setCatalog(e.target.files[0])} />
                </div>
            )}

            <div className="flex justify-between mt-6">
                {step > 1 && <button type="button" onClick={() => setStep(step - 1)} className="btn bg-gray-300">Back</button>}
                {step < 3 ? (
                    <button type="button" onClick={() => setStep(step + 1)} className="btn bg-green-600 text-white">Next</button>
                ) : (
                    <button type="button" onClick={handleSubmit} className="btn bg-green-600 text-white">Submit</button>
                )}
            </div>
        </div>
    );
}
