'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

async function fetchDataFromPublicFolder() {
  const res = await fetch('/data.json'); // Direct path in production
  if (!res.ok) {
    throw new Error(`Failed to fetch JSON: ${res.status}`);
  }
  return res.json();
}

export default function VolkswagenParts() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch data on component mount
  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedData = await fetchDataFromPublicFolder();
        setData(fetchedData);
        setFilteredProducts(fetchedData); // Initialize filtered products with full data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  // Handle search input changes
  const handleSearch = e => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter products based on query matching partname, partnumber, compatibility, or engine
    const filtered = data.filter(
      product =>
        product.partname.toLowerCase().includes(query) ||
        product.partnumber.toLowerCase().includes(query) ||
        product.compatibility.toLowerCase().includes(query) ||
        (product.engine && product.engine.toLowerCase().includes(query))
    );

    setFilteredProducts(filtered);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Search Bar */}
      <div className="sticky top-0 bg-white z-50 py-4 shadow-sm">
        <div className="flex justify-center items-center">
          <input
            type="text"
            placeholder="Search by part name, part number, compatibility, or engine..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full max-w-3xl px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
          />
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xs:grid-cols-1 xxs:grid-cols-1 gap-6 mt-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div
              key={product.id}
              className="card bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden"
            >
              <Link
                href={`/search-by-make/parts/${product.partname}`}
                as={'/search-by-make/parts/' + product.partname}
                target="_blank"
              >
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.partname}
                  className="w-full h-48 object-cover"
                />

                {/* Product Details */}
                <div className="p-4">
                  <h2 className="text-lg font-semibold truncate">
                    {product.partname}
                  </h2>
                  <p className="text-sm text-gray-600">
                    Part Number: {product.partnumber}
                  </p>
                  <p className="text-sm text-gray-600 truncate">
                    Compatibility: {product.compatibility}
                  </p>
                  {product.engine && (
                    <p className="text-sm text-gray-600">
                      Engine: {product.engine}
                    </p>
                  )}
                </div>

                <button className="w-3/4 mb-3 bg-blue-500 text-white text-sm py-2 px-2 hover:bg-blue-600 transition">
                  Order Now
                </button>
              </Link>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-600">
            No products found for "{searchQuery}"
          </div>
        )}
      </div>
    </div>
  );
}
