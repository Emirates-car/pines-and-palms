'use client';

import React, { useState } from 'react';

// Inquiry Modal Component
const PartInquiryModal = ({ isOpen, onClose, part }) => {
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
    partList: `${part.partname} (${part.partnumber})`,
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
          partList: `${part.partname} (${part.partnumber})`,
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
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">Inquire Now</h2>
        <form onSubmit={handleSubmit}>
          {/* Part List (Read-Only) */}
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
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          {/* Phone */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          {/* Address */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg"
              rows="4"
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

export default function PartnameClient({ part }) {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-2 md:rid-cols-2 gap-8">
        {/* Part Image */}
        <div className="flex justify-center">
          <img
            src={part.image}
            alt={part.partname}
            className="w-full max-w-sm object-cover border rounded-lg shadow-lg"
          />
        </div>
        {/* Part Details */}
        <div>
          <h1 className="text-2xl font-bold mb-4">{part.partname}</h1>
          <div className="mb-4">
            <span className="text-lg font-bold">Price:</span>
            <span
              className="ml-2 text-gray-400 bg-gray-200 px-3 py-1 rounded-lg cursor-pointer"
              style={{
                filter: 'blur(4px)',
                userSelect: 'none',
              }}
              title="Click 'Inquire Now' to view the price"
            >
              $XXX.XX
            </span>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg shadow"
          >
            Inquire Now
          </button>
          {/* Specifications */}
          <div className="mt-6">
            <h2 className="text-lg font-bold mb-2">Specifications:</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                <strong>Part Number:</strong> {part.partnumber}
              </li>
              <li>
                <strong>Engine:</strong> {part.engine}
              </li>
            </ul>
          </div>
          {/* Compatibility */}
          <div className="mt-4">
            <h2 className="text-lg font-bold mb-2">Compatibility:</h2>
            <ul className="list-disc list-inside text-gray-700">
              {part.compatibility?.split(',').map((item, index) => (
                <li key={index}>{item.trim()}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Inquiry Modal */}
      <PartInquiryModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        part={part}
      />
    </div>
  );
}
