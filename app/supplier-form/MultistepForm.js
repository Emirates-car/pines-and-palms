"use client"
import React, { useState } from 'react';

const vehicleBrandsList = [
    'Toyota', 'Nissan', 'Honda', 'Hyundai', 'Kia', 'Ford', 'Chevrolet', 'BMW', 'Mercedes-Benz', 'Volkswagen', 'Volvo', 'Mazda', 'Mitsubishi', 'Suzuki', 'Jeep', 'GMC'
];

export default function SupplierMultiStepForm() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        garageName: '',
        tradeLicense: '',
        licenseExpiry: '',
        establishmentYear: '',
        emirate: '',
        address: '',
        website: '',
        contactName: '',
        phone: '',
        email: '',
        parts: '',
        brands: [],
        condition: '',
        delivery: '',
        locations: '',
        returnPolicy: '',
    });
    const [brandSearch, setBrandSearch] = useState('');

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleCheckboxChange = (brand) => {
        setFormData((prev) => {
            const updatedBrands = prev.brands.includes(brand)
                ? prev.brands.filter((b) => b !== brand)
                : [...prev.brands, brand];
            return { ...prev, brands: updatedBrands };
        });
    };

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const filteredBrands = vehicleBrandsList.filter((brand) =>
        brand.toLowerCase().includes(brandSearch.toLowerCase())
    );

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto p-4 shadow-lg">
            {step === 1 && (
                <div>
                    <h2 className="text-lg font-bold mb-4">Step 1: Garage Details</h2>
                    <input id="garageName" value={formData.garageName} onChange={handleChange} placeholder="Garage Name" className="mb-3 block w-full p-2 border" required />
                    <input id="tradeLicense" value={formData.tradeLicense} onChange={handleChange} placeholder="Trade License Number" className="mb-3 block w-full p-2 border" required />
                    <input id="licenseExpiry" value={formData.licenseExpiry} onChange={handleChange} placeholder="License Expiry Date" type="date" className="mb-3 block w-full p-2 border" required />
                    <input id="establishmentYear" value={formData.establishmentYear} onChange={handleChange} placeholder="Garage Establishment Year" type="number" className="mb-3 block w-full p-2 border" />
                    <select id="emirate" value={formData.emirate} onChange={handleChange} className="mb-3 block w-full p-2 border" required>
                        <option value="">Select Emirate</option>
                        <option value="Abu Dhabi">Abu Dhabi</option>
                        <option value="Dubai">Dubai</option>
                        <option value="Sharjah">Sharjah</option>
                        <option value="Ajman">Ajman</option>
                        <option value="RAK">Ras Al Khaimah</option>
                        <option value="Fujairah">Fujairah</option>
                        <option value="Umm Al Quwain">Umm Al Quwain</option>
                    </select>
                    <input id="address" value={formData.address} onChange={handleChange} placeholder="Garage Address" className="mb-3 block w-full p-2 border" required />
                    <input id="website" value={formData.website} onChange={handleChange} placeholder="Garage Website (optional)" className="mb-3 block w-full p-2 border" />
                    <button type="button" onClick={nextStep} className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
                </div>
            )}

            {step === 2 && (
                <div>
                    <h2 className="text-lg font-bold mb-4">Step 2: Contact Info</h2>
                    <input id="contactName" value={formData.contactName} onChange={handleChange} placeholder="Contact Person Name" className="mb-3 block w-full p-2 border" required />
                    <input id="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number (+971...)" className="mb-3 block w-full p-2 border" required />
                    <input id="email" value={formData.email} onChange={handleChange} placeholder="Email Address" type="email" className="mb-3 block w-full p-2 border" />
                    <div className="flex justify-between">
                        <button type="button" onClick={prevStep} className="bg-gray-300 px-4 py-2 rounded">Back</button>
                        <button type="button" onClick={nextStep} className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
                    </div>
                </div>
            )}

            {step === 3 && (
                <div>
                    <h2 className="text-lg font-bold mb-4">Step 3: Spare Parts Info</h2>
                    <textarea id="parts" value={formData.parts} onChange={handleChange} placeholder="Types of Spare Parts" rows={3} className="mb-3 block w-full p-2 border"></textarea>
                    <div className="mb-3">
                        <input
                            type="text"
                            value={brandSearch}
                            onChange={(e) => setBrandSearch(e.target.value)}
                            placeholder="Search Vehicle Brands..."
                            className="mb-2 block w-full p-2 border"
                        />
                        <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto border p-2">
                            {filteredBrands.map((brand) => (
                                <label key={brand} className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        checked={formData.brands.includes(brand)}
                                        onChange={() => handleCheckboxChange(brand)}
                                    />
                                    <span>{brand}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <select id="condition" value={formData.condition} onChange={handleChange} className="mb-3 block w-full p-2 border">
                        <option value="">Select Part Condition</option>
                        <option value="New">New</option>
                        <option value="Used">Used</option>
                        <option value="OEM">OEM</option>
                        <option value="Aftermarket">Aftermarket</option>
                    </select>
                    <input id="delivery" value={formData.delivery} onChange={handleChange} placeholder="Delivery Options (e.g. Pickup, Courier)" className="mb-3 block w-full p-2 border" />
                    <input id="locations" value={formData.locations} onChange={handleChange} placeholder="Shipping Locations (e.g. UAE, GCC, etc.)" className="mb-3 block w-full p-2 border" />
                    <textarea id="returnPolicy" value={formData.returnPolicy} onChange={handleChange} placeholder="Return Policy / Warranty Info" rows={3} className="mb-3 block w-full p-2 border"></textarea>
                    <div className="flex justify-between">
                        <button type="button" onClick={prevStep} className="bg-gray-300 px-4 py-2 rounded">Back</button>
                        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Submit</button>
                    </div>
                </div>
            )}
        </form>
    );
}
