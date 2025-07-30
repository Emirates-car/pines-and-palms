"use client"
import React, { useState } from 'react';
import Link from 'next/link';

export default function SupplierForm() {
    const [formData, setFormData] = useState({
        companyName: '',
        tradeLicense: '',
        licenseExpiry: '',
        emirate: '',
        address: '',
        website: '',
        contactName: '',
        designation: '',
        phone: '',
        whatsapp: '',
        email: '',
        parts: '',
        brands: '',
        partCondition: '',
        deliveryOptions: '',
        notes: '',
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle submission (API call, validation, etc.)
        console.log(formData);
    };

    return (
        <div>
            <form
                id="supplierForm"
                method="POST"
                onSubmit={handleSubmit}
                className="w-full shadow-xl px-8 py-8 xs:px-1 xs:py-2 sm:py-3 s:py-2 xxs:px-1 sm:px-3 md:px-3 lg:px-8 xxl:px-8 xl:px-8"
            >
                <div className="grid grid-cols-1 pt-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3" htmlFor="companyName">
                        Company Name
                    </label>
                    <input
                        id="companyName"
                        type="text"
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
                        placeholder="Company Name"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="grid grid-cols-3 gap-3 xs:grid-cols-1 pt-3">
                    <div>
                        <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="tradeLicense">
                            Trade License Number
                        </label>
                        <input
                            id="tradeLicense"
                            type="text"
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
                            value={formData.tradeLicense}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="licenseExpiry">
                            License Expiry Date
                        </label>
                        <input
                            id="licenseExpiry"
                            type="date"
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
                            value={formData.licenseExpiry}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="emirate">
                            Emirate
                        </label>
                        <select
                            id="emirate"
                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
                            value={formData.emirate}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Emirate</option>
                            <option value="Abu Dhabi">Abu Dhabi</option>
                            <option value="Dubai">Dubai</option>
                            <option value="Sharjah">Sharjah</option>
                            <option value="Ajman">Ajman</option>
                            <option value="RAK">Ras Al Khaimah</option>
                            <option value="Fujairah">Fujairah</option>
                            <option value="Umm Al Quwain">Umm Al Quwain</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-3 xs:grid-cols-1 pt-3">
                    <div>
                        <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="contactName">
                            Contact Person Name
                        </label>
                        <input
                            id="contactName"
                            type="text"
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
                            value={formData.contactName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
                            Phone Number
                        </label>
                        <input
                            id="phone"
                            type="tel"
                            placeholder="+971..."
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="example@email.com"
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 pt-3">
                    <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="parts">
                        Types of Spare Parts You Sell
                    </label>
                    <textarea
                        id="parts"
                        rows={4}
                        placeholder="e.g. Engine, Suspension, Electrical, Body parts"
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
                        value={formData.parts}
                        onChange={handleChange}
                    ></textarea>
                </div>

                <div className="grid grid-cols-1 pt-3">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl xs:text-xs"
                    >
                        Submit
                    </button>
                </div>

                <div className="flex justify-between text-xs text-gray-400 pt-4">
                    <div>
                        <Link href="/privacy-policy" className="underline" target="_blank">
                            Privacy policy
                        </Link>
                        &nbsp;|&nbsp;
                        <Link href="/terms-and-condition" className="underline" target="_blank">
                            Terms and conditions
                        </Link>
                    </div>
                    <div>100% secure and trusted</div>
                </div>
            </form>
        </div>
    );
}
