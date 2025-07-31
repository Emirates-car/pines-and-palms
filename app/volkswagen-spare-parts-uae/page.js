'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import GetInTouchForm from '../get-in-touch/GetInTouchForm';

async function fetchDataFromPublicFolder() {
    const res = await fetch('/data.json');
    if (!res.ok) {
        throw new Error(`Failed to fetch JSON: ${res.status}`);
    }
    return res.json();
}

export default function VolkswagenParts() {
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const fetchedData = await fetchDataFromPublicFolder();
                setData(fetchedData);
                setFilteredProducts(fetchedData);
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
        <div>
            <div className="container mx-auto px-4 py-8">
                <section
                    className="py-5 xxs:px-7 sm:px-7 s:py-6 lg:mx-6 md:mx-6 xs:mx-2 xxs:mx-2 s:mx-2 max-w-7xl mx-auto"
                    aria-label="Spare parts by country of origin"
                >
                    <div className="bg-backgroundlight rounded-sm">
                        <div className="grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-2 xxs:grid-cols-1 xs:text-center xs:pt-5">
                            <div>
                                <div className="ml-8 md:ml-8 xs:ml-1 xxs:ml-4 mt-10 sm:mt-12 md:mt-10 lg:mt-20 xl:mt-28 xs:mt-2 xs:text-left">
                                    <h2 className="block text-3xl md:text-lg lg:text-2xl font-medium text-gray-800 lg:leading-tight dark:text-white font-poppins">
                                        Expert Parts <span className="text-blue-600">Seamless Performance</span>
                                    </h2>

                                    <p className="mt-3 text-5xl xl:text-4xl xxl:text-4xl lg:text-4xl md:text-xl xs:text-lg xxs:text-lg sm:text-lg s:text-lg font-extrabold font-head text-gray-900">
                                        Your Partner in Automotive Excellence with Quality Auto Spare Parts.
                                    </p>

                                    <div className="mt-5">
                                        <div className="py-3  w-1/2 lg:w-full xs:w-full xxs:w-3/4 mr-auto rounded-lg shadow-md">
                                            <a
                                                href="/#myForm"
                                                title="Inquire about vehicle parts online"
                                                className="flex items-center justify-center py-2 text-xl border border-transparent font-medium rounded-sm text-white bg-blue-600 hover:bg-blue-700"
                                            >
                                                Inquire Now
                                            </a>
                                        </div>
                                    </div>

                                    <p className="mt-10 mb-3 hidden xl:block xxl:block lg:block md:block text-sm text-gray-700">
                                        We deal with auto parts for German, Japanese, Chinese, French, British origin cars.
                                    </p>

                                </div>
                            </div>

                            <div className="xxs:hidden xs:hidden">
                                <HeroCarousel />
                            </div>
                        </div>
                    </div>
                </section>
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
                                    <img
                                        src={product.image}
                                        alt={product.partname}
                                        className="w-full h-48 object-cover"
                                    />

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
                <div className='py-4'>
                    <GetInTouchForm />
                </div>
                <article className="font-poppins bg-bglight xs:px-3 xxs:px-3 md:px-5 py-10">
                    <section className="p-6 bg-bglight text-gray-800" aria-labelledby="car-parts-methods-heading">
                        <h1 id="car-parts-methods-heading" className="text-2xl font-bold mb-4">
                            Volkswagen spare parts in Dubai, Sharjah, Ajman, Al Ain, Abu Dhabi
                        </h1>

                        <p className="mb-4">
                            <strong className="text-black">Emirates-car.com</strong> specializes in spare parts for Japanese, Korean, German, French, and American cars. The main brands we deal with include Honda, Volkswagen, Audi, Porsche, Infiniti, Volvo, Toyota, Nissan, Lexus, Mini, BMW, Mercedes-Benz, Renault, Peugeot, Kia, Hyundai, Genesis, Jaguar, Ford, Hummer, Dodge, Cadillac, GMC, Jeep, and Lincoln.
                        </p>

                        <div className="mb-4 text-black">
                            <strong>Tags: </strong>
                            <span className="text-blue-600 underline">
                                #volkswagen_parts, #volkswagen_spare_parts, #autoparts, #volkswagen_spare_parts_online, #volkswagen_car_spare_parts_dubai, #volkswagen_parts_in_uae, #volkswagen_parts_dubai, #volkswagen_parts_sharjah, #dubai_auto_parts_online
                            </span>
                        </div>

                        <p className="mb-4">
                            At{' '}
                            <a href="/" className="text-blue-500 underline">
                                Emirates-car.com
                            </a>, you can buy premium, high-quality used, genuine, OEM, and aftermarket volkswagen parts in Dubai, Sharjah, Ajman, Ras Al Khaimah, Abu Dhabi, and worldwide. Click{' '}
                            <a href="/get-in-touch" className="text-blue-500 underline">
                                Get Free Quote
                            </a>{' '}
                            to get the best prices now!
                        </p>

                        {/* Method 1 */}
                        <section aria-labelledby="method-1-heading" className="mb-6">
                            <h3 id="method-1-heading" className="text-xl font-semibold mb-3">
                                1. The Traditional Way: Pros and Cons
                            </h3>
                            <p className="mb-2">
                                You can visit a nearby spare parts shop and purchase what you need. This approach is simple and effective if the shop stocks the brands and models you are looking for.
                            </p>
                            <div className="mb-2">
                                <strong>Pros:</strong>
                                <ul className="list-disc ml-6">
                                    <li>Easy and direct access to spare parts.</li>
                                    <li>Immediate availability if the store has your required part.</li>
                                </ul>
                            </div>
                            <div>
                                <strong>Cons:</strong>
                                <ul className="list-disc ml-6">
                                    <li>Limited stock or brand availability.</li>
                                    <li>Some shops specialize in only a few brands.</li>
                                </ul>
                            </div>
                        </section>

                        {/* Method 2 */}
                        <section aria-labelledby="method-2-heading" className="mb-6">
                            <h3 id="method-2-heading" className="text-xl font-semibold mb-3">
                                2. Giant E-Commerce Companies: Pros and Cons
                            </h3>
                            <p className="mb-2">Online marketplaces like Amazon, Flipkart, and eBay are alternatives when local shops lack inventory.</p>
                            <div className="mb-2">
                                <strong>Pros:</strong>
                                <ul className="list-disc ml-6">
                                    <li>Wide variety of products.</li>
                                    <li>Convenient ordering from home.</li>
                                </ul>
                            </div>
                            <div>
                                <strong>Cons:</strong>
                                <ul className="list-disc ml-6">
                                    <li>Risk of damaged parts due to logistics.</li>
                                    <li>Possibility of loss during transit.</li>
                                    <li>Unreliable for specific car models.</li>
                                </ul>
                            </div>
                        </section>

                        {/* Method 3 */}
                        <section aria-labelledby="method-3-heading" className="mb-6">
                            <h3 id="method-3-heading" className="text-xl font-semibold mb-3">
                                3. Local Dealers: Pros and Cons
                            </h3>
                            <p className="mb-2">
                                Local dealers often come recommended and provide tailored services.
                            </p>
                            <div className="mb-2">
                                <strong>Pros:</strong>
                                <ul className="list-disc ml-6">
                                    <li>Trustworthy and reliable.</li>
                                    <li>Specialized by brand.</li>
                                </ul>
                            </div>
                            <div>
                                <strong>Cons:</strong>
                                <ul className="list-disc ml-6">
                                    <li>Fewer due to digital shift.</li>
                                    <li>Accessibility may be limited by location.</li>
                                </ul>
                            </div>
                        </section>

                        {/* Method 4 */}
                        <section aria-labelledby="method-4-heading" className="mb-6">
                            <h3 id="method-4-heading" className="text-xl font-semibold mb-3">
                                4. Online Marketplaces: Mostly Cons
                            </h3>
                            <p className="mb-2">
                                Marketplaces simplify browsing but present serious limitations:
                            </p>
                            <ul className="list-disc ml-6">
                                <li>Limited availability for rare models.</li>
                                <li>Old models often not stocked.</li>
                                <li>High risk of spam or fraud.</li>
                            </ul>
                        </section>

                        {/* Method 5 */}
                        <section aria-labelledby="method-5-heading">
                            <h3 id="method-5-heading" className="text-xl font-semibold mb-3">
                                5. Online Dealer Websites: Only Pros!
                            </h3>
                            <p className="mb-2">
                                Dealer websites like{' '}
                                <a href="/" className="text-blue-500 underline">
                                    Emirates-car.com
                                </a>{' '}
                                offer the most reliable experience.
                            </p>
                            <div>
                                <strong>Pros:</strong>
                                <ul className="list-disc ml-6">
                                    <li>Multiple trusted options online.</li>
                                    <li>Quick inquiry process.</li>
                                    <li>Reliable communication.</li>
                                </ul>
                            </div>
                            <p className="mt-4">
                                Visit{' '}
                                <a href="/" className="text-blue-500 underline">
                                    Emirates-car.com
                                </a>{' '}
                                to easily find spare parts for Honda Accord, Civic, Infiniti, BMW, Audi, and more.
                            </p>
                        </section>
                    </section>
                </article>
            </div>
        </div>

    );
}
