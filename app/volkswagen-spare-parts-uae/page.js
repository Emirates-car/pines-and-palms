'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import GetInTouchForm from '../../components/GetInTouchForm';
import HeroCarousel from '../../components/HeroCarousel';
import Image from 'next/image';
import Footer from '../../components/footer';

async function fetchDataFromPublicFolder() {
    const res = await fetch('/data.json');
    if (!res.ok) {
        throw new Error(`Failed to fetch JSON: ${res.status}`);
    }
    return res.json();
}

const FilterContent = React.memo(function FilterContent(props) {
    const {
        categories,
        engines,
        compatibilities,
        categorySearch,
        setCategorySearch,
        engineSearch,
        setEngineSearch,
        compatibilitySearch,
        setCompatibilitySearch,
        selectedCategories,
        toggleCategory,
        selectedEngines,
        toggleEngine,
        selectedCompatibility,
        toggleCompatibility,
    } = props;

    const filteredCategories = categories.filter(c =>
        c.toLowerCase().includes(categorySearch.toLowerCase())
    );
    const filteredEngines = engines.filter(e =>
        e.toLowerCase().includes(engineSearch.toLowerCase())
    );
    const filteredCompatibilities = compatibilities.filter(c =>
        c.toLowerCase().includes(compatibilitySearch.toLowerCase())
    );

    return (
        <>
            {/* Category Search */}
            <input
                type="text"
                placeholder="Search categories..."
                value={categorySearch}
                onChange={(e) => setCategorySearch(e.target.value)}
                className="w-full px-3 py-2 mb-3 border border-gray-300 rounded-md text-sm"
            />
            <h4 className="font-semibold mb-2">Filter by Category</h4>
            <div className="space-y-1">
                {filteredCategories.map(category => (
                    <label key={category} className="block text-sm">
                        <input
                            type="checkbox"
                            checked={selectedCategories.includes(category)}
                            onChange={() => toggleCategory(category)}
                            className="mr-2"
                        />
                        {category}
                    </label>
                ))}
            </div>

            {/* Engine Search */}
            <input
                type="text"
                placeholder="Search engines..."
                value={engineSearch}
                onChange={(e) => setEngineSearch(e.target.value)}
                className="w-full px-3 py-2 mt-4 mb-3 border border-gray-300 rounded-md text-sm"
            />
            <h4 className="font-semibold mb-2">Filter by Engine</h4>
            <div className="space-y-1">
                {filteredEngines.map(engine => (
                    <label key={engine} className="block text-sm">
                        <input
                            type="checkbox"
                            checked={selectedEngines.includes(engine)}
                            onChange={() => toggleEngine(engine)}
                            className="mr-2"
                        />
                        {engine}
                    </label>
                ))}
            </div>

            {/* Compatibility Search */}
            <input
                type="text"
                placeholder="Search compatibility..."
                value={compatibilitySearch}
                onChange={(e) => setCompatibilitySearch(e.target.value)}
                className="w-full px-3 py-2 mt-4 mb-3 border border-gray-300 rounded-md text-sm"
            />
            <h4 className="font-semibold mb-2">Filter by Compatibility</h4>
            <div className="space-y-1">
                {filteredCompatibilities.map(compat => (
                    <label key={compat} className="block text-sm">
                        <input
                            type="checkbox"
                            checked={selectedCompatibility.includes(compat)}
                            onChange={() => toggleCompatibility(compat)}
                            className="mr-2"
                        />
                        {compat}
                    </label>
                ))}
            </div>
        </>
    );
});

export default function VolkswagenParts() {
    const [data, setData] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedEngines, setSelectedEngines] = useState([]);
    const [selectedCompatibility, setSelectedCompatibility] = useState([]);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [categorySearch, setCategorySearch] = useState('');
    const [engineSearch, setEngineSearch] = useState('');
    const [compatibilitySearch, setCompatibilitySearch] = useState('');

    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        async function fetchData() {
            try {
                const fetchedData = await fetchDataFromPublicFolder();
                setData(fetchedData);

                const params = new URLSearchParams(searchParams?.toString());
                const filters = params.getAll('filter_car_parts[]');
                const engines = params.getAll('engine[]');
                const compats = params.getAll('compatibility[]');
                const query = params.get('search') || '';

                setSelectedCategories(filters);
                setSelectedEngines(engines);
                setSelectedCompatibility(compats);
                setSearchQuery(query);

                const filtered = fetchedData.filter(product => {
                    const matchesCategory = filters.length === 0 || filters.includes(product.category);
                    const matchesSearch = product.partname.toLowerCase().includes(query.toLowerCase());
                    const matchesEngine = engines.length === 0 || (Array.isArray(product.engine) && product.engine.some(e => engines.includes(e)));
                    const matchesCompatibility = compats.length === 0 || (Array.isArray(product.compatibility) && product.compatibility.some(c => compats.includes(c)));
                    return matchesCategory && matchesSearch && matchesEngine && matchesCompatibility;
                });

                setFilteredProducts(filtered);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    const updateURLAndFilter = (categories, engines, compats, query) => {
        const categoryQuery = categories.map(c => `filter_car_parts[]=${encodeURIComponent(c)}`).join('&');
        const engineQuery = engines.map(e => `engine[]=${encodeURIComponent(e)}`).join('&');
        const compatQuery = compats.map(c => `compatibility[]=${encodeURIComponent(c)}`).join('&');
        const search = query ? `&search=${encodeURIComponent(query)}` : '';
        const hash = '#filter';
        const fullURL = `/volkswagen-spare-parts-uae?${categoryQuery}&${engineQuery}&${compatQuery}${search}${hash}`;
        router.replace(fullURL, { scroll: false });

        setFilteredProducts(() => {
            return data.filter(product => {
                const matchesQuery =
                    product.partname.toLowerCase().includes(query.toLowerCase()) ||
                    product.partnumber.toLowerCase().includes(query.toLowerCase()) ||
                    (Array.isArray(product.compatibility) && product.compatibility.some(c => c.toLowerCase().includes(query.toLowerCase()))) ||
                    (Array.isArray(product.engine) && product.engine.some(e => e.toLowerCase().includes(query.toLowerCase())));

                const matchesCategory = categories.length === 0 || categories.includes(product.category);
                const matchesEngine = engines.length === 0 || (Array.isArray(product.engine) && product.engine.some(e => engines.includes(e)));
                const matchesCompatibility = compats.length === 0 || (Array.isArray(product.compatibility) && product.compatibility.some(c => compats.includes(c)));

                return matchesQuery && matchesCategory && matchesEngine && matchesCompatibility;
            });
        });
    };

    const toggleCategory = (category) => {
        setSelectedCategories(prev => {
            const newCategories = prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category];
            updateURLAndFilter(newCategories, selectedEngines, selectedCompatibility, searchQuery);
            return newCategories;
        });
    };

    const toggleEngine = (engine) => {
        setSelectedEngines(prev => {
            const newEngines = prev.includes(engine)
                ? prev.filter(e => e !== engine)
                : [...prev, engine];
            updateURLAndFilter(selectedCategories, newEngines, selectedCompatibility, searchQuery);
            return newEngines;
        });
    };

    const toggleCompatibility = (compat) => {
        setSelectedCompatibility(prev => {
            const newCompat = prev.includes(compat)
                ? prev.filter(c => c !== compat)
                : [...prev, compat];
            updateURLAndFilter(selectedCategories, selectedEngines, newCompat, searchQuery);
            return newCompat;
        });
    };

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        updateURLAndFilter(selectedCategories, selectedEngines, selectedCompatibility, query);
    };

    const categories = useMemo(() => [...new Set(data.map(item => item.category))], [data]);
    const engines = useMemo(() => [...new Set(data.flatMap(item => Array.isArray(item.engine) ? item.engine : []))], [data]);
    const compatibilities = useMemo(() => [...new Set(data.flatMap(item => Array.isArray(item.compatibility) ? item.compatibility : []))], [data]);

    return (
        <div>
            <div className="mx-auto px-4 xs:px-1 s:px-1 xxs:px-2 sm:px-2 md:px-3 lg:px-4 xl:px-4 xxl:px-4 py-8 xl:py-2 xxl:py-3 s:py-1 xs:py-1 xxs:py-1 sm:py-2 md:py-3">
                <section className="py-5 max-w-7xl mx-auto" aria-label="Spare parts by country of origin">
                    <div className="bg-backgroundlight rounded-sm grid grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1">
                        <div className="ml-8 lg:my-auto md:my-auto xl:my-auto xxl:my-auto s:mx-4 xs:mx-4 sm:mx-4 xxs:mx-4 mt-10">
                            <h2 className="text-3xl s:text-lg md:text-xl sm:text-lg xs:text-lg xxs:text-lg font-medium text-gray-800">
                                Expert Parts <span className="text-blue-600">Seamless Performance</span>
                            </h2>
                            <p className="mt-3 text-5xl xs:text-xl sm:text-xl md:text-2xl s:text-xl xxs:text-xl lg:text-3xl xl:text-4xl xxl:text-5xl font-extrabold text-gray-900">
                                Your Partner in Automotive Excellence with Quality Auto Spare Parts.
                            </p>
                            <div className="my-5">
                                <a href="/#myForm" className="py-2 text-xl rounded-sm text-white bg-blue-600 hover:bg-blue-700 inline-block px-4">
                                    Inquire Now
                                </a>
                            </div>
                        </div>
                        <div className="xxs:hidden xs:hidden">
                            <HeroCarousel />
                        </div>
                    </div>
                </section>

                {/* Search Bar */}
                <div id="filter" className="sticky top-0 bg-white z-50 py-4 shadow-sm">
                    <div className="flex justify-center items-center">
                        <input
                            type="text"
                            placeholder="Search by part name, part number, compatibility, or engine..."
                            value={searchQuery}
                            onChange={handleSearch}
                            className="w-full max-w-3xl px-4 py-2 border border-gray-300 rounded-full shadow-sm text-sm"
                        />
                    </div>
                </div>

                {/* Filter toggle for mobile */}
                <div className="lg:hidden xl:hidden xxl:hidden flex justify-end mb-4">
                    <button
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                        className="p-2 border border-gray-300 rounded-md"
                    >
                        ☰ Filters
                    </button>
                </div>

                {/* Main Grid Layout */}
                <div className="grid lg:grid-cols-[16rem_1fr] xl:grid-cols-[16rem_1fr] xxl:grid-cols-[16rem_1fr] gap-6">
                    {/* Sidebar */}
                    <aside className="hidden lg:block xl:block xxl:block lg:w-64 xl:w-64 xxl:w-64 lg:sticky xl:sticky xxl:sticky lg:top-20 xl:top-20 xxl:top-20 lg:h-screen xl:h-screen xxl:h-screen lg:overflow-y-auto xl:overflow-y-auto xxl:overflow-y-auto p-4 border-r border-gray-200">
                        <FilterContent
                            categories={categories}
                            engines={engines}
                            compatibilities={compatibilities}
                            categorySearch={categorySearch}
                            setCategorySearch={setCategorySearch}
                            engineSearch={engineSearch}
                            setEngineSearch={setEngineSearch}
                            compatibilitySearch={compatibilitySearch}
                            setCompatibilitySearch={setCompatibilitySearch}
                            selectedCategories={selectedCategories}
                            toggleCategory={toggleCategory}
                            selectedEngines={selectedEngines}
                            toggleEngine={toggleEngine}
                            selectedCompatibility={selectedCompatibility}
                            toggleCompatibility={toggleCompatibility}
                        />
                    </aside>

                    {/* Product Grid */}
                    <main>
                        <div className="grid grid-cols-4 sm:grid-cols-2 xxs:grid-cols-2 s:grid-cols-2 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xxl:grid-cols-5 xl:grid-cols-4 gap-6 xs:gap-1 s:gap-1 xxs:gap-1 sm:gap-4 md:gap-4 mt-6">
                            {filteredProducts.length > 0 ? (
                                filteredProducts.map(product => (
                                    <div key={product.id} className="flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                                        <Link href={`/search-by-make/parts/${product.partname}`} target="_blank" className="flex flex-col h-full">
                                            <div className="relative w-full aspect-square">
                                                <Image src={product.image} alt={product.partname} fill className="object-cover" />
                                            </div>
                                            <div className="flex-1 p-4 flex flex-col justify-between">
                                                <div>
                                                    <h2 className="text-lg font-semibold line-clamp-1">{product.partname}</h2>
                                                    <p className="text-sm text-gray-600">Part Number: {product.partnumber}</p>
                                                    <p className="text-sm text-gray-600 line-clamp-1">Compatibility: {Array.isArray(product.compatibility) ? product.compatibility.join(', ') : ''}</p>
                                                    {Array.isArray(product.engine) && <p className="text-sm text-gray-600 line-clamp-1">Engine: {product.engine.join(', ')}</p>}
                                                </div>
                                                <div className="mt-4">
                                                    <button className="w-full bg-blue-500 text-white text-sm py-2 px-2 hover:bg-blue-600 transition">
                                                        Order Now
                                                    </button>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))
                            ) : (
                                <div className="col-span-full text-center text-gray-600">
                                    No products found for "{searchQuery}"
                                </div>
                            )}
                        </div>
                    </main>
                </div>

                {/* Mobile Filter Drawer */}
                {isFilterOpen && (
                    <div className="lg:hidden xl:hidden xxl:hidden fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setIsFilterOpen(false)}>
                        <div
                            className="absolute left-0 top-0 w-64 bg-white h-full p-4 overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="mb-4 p-2 border border-gray-300 rounded-md"
                                onClick={() => setIsFilterOpen(false)}
                            >
                                ✕ Close
                            </button>
                            <FilterContent
                                categories={categories}
                                engines={engines}
                                compatibilities={compatibilities}
                                categorySearch={categorySearch}
                                setCategorySearch={setCategorySearch}
                                engineSearch={engineSearch}
                                setEngineSearch={setEngineSearch}
                                compatibilitySearch={compatibilitySearch}
                                setCompatibilitySearch={setCompatibilitySearch}
                                selectedCategories={selectedCategories}
                                toggleCategory={toggleCategory}
                                selectedEngines={selectedEngines}
                                toggleEngine={toggleEngine}
                                selectedCompatibility={selectedCompatibility}
                                toggleCompatibility={toggleCompatibility}
                            />
                        </div>
                    </div>
                )}
                <div>
                    <div className='py-4'>
                        <GetInTouchForm />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
