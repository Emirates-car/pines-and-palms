"use client"
import { Roboto } from 'next/font/google';
import React, { useState } from 'react'

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    display: 'swap',
    variable: '--font-roboto',
});

const PartInquiryModal = ({ isOpen, onClose, product }) => {
    const today = new Date();
    const date =
        today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time =
        today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    const dateTime = date + ' ' + time;

    const [formData, setFormData] = useState({
        Timestamp: '',
        name: '',
        email: '',
        phone: '',
        address: '',
        partList: `${product.partname} (${product.partnumber})`,
    });
    const [loading, setLoading] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;

        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setLoading(true);
        formData.Timestamp = dateTime;

        try {
            const response = await fetch('/api/vw-inquiry', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Inquiry submitted successfully!');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    address: '',
                    partList: `${product.partname} (${product.partnumber})`,
                });
                onClose();
            } else {
                alert('Error: Failed to submit inquiry.');
            }
        } catch (error) {
            alert('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-indigo-50 text-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-4">Inquire Now</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">Part List</label>
                        <input
                            type="text"
                            name="partList"
                            value={formData.partList}
                            readOnly
                            className="w-full px-4 py-2 border rounded-lg bg-gray-200 cursor-not-allowed"
                        />
                    </div>
                    {/* Name */}
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder='Name'
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-lg"
                        />
                    </div>
                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder='Email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-lg"
                        />
                    </div>
                    {/* Phone */}
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">WhatsApp No</label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder='Whatsapp No'
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-lg"
                        />
                    </div>
                    {/* Address */}
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2">Location</label>
                        <input
                            name="address"
                            placeholder='Eg. Dubai, UAE'
                            value={formData.address}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border rounded-lg"
                        />
                    </div>
                    {/* Buttons */}
                    <div className="flex justify-start">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 mr-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
                        >
                            Cancel
                        </button>
                        <button type="submit" disabled={loading}>
                            {loading ? 'Submitting...' : 'Submit'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default function PartInquiryForm({ product }) {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div>
            <button
                onClick={() => setModalOpen(true)}
                className="px-6 py-2 my-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg shadow"
            >
                Inquire Now
            </button>
            <span className={`text-red-500 text-xs ${roboto.className}`}><br />**Inquiring is important for fitment check</span>

            <PartInquiryModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
                product={product}
            />
        </div>
    );
}
