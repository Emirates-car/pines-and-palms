"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Fira_Sans, Playfair_Display } from "next/font/google";
import { Menu, X } from "lucide-react";

const playfair_display = Playfair_Display({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-playfair-display",
});

const firaSans = Fira_Sans({
    weight: ["400", "700"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-fira-sans",
});

export default function ProductFilter({ make, model, products, subcategory, allProducts, searchParams }) {
    const router = useRouter();
    const [localQuery, setLocalQuery] = useState(searchParams.search || "");
    const [suggestions, setSuggestions] = useState([]);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [categoryQuery, setCategoryQuery] = useState("");
    const [engineQuery, setEngineQuery] = useState("");
    const [compatQuery, setCompatQuery] = useState("");

    // Selected filters from URL
    const selectedCategories = Array.isArray(searchParams["categories"])
        ? searchParams["categories"]
        : searchParams["categories"]
            ? [searchParams["categories"]]
            : [];

    const selectedEngines = Array.isArray(searchParams["engine"])
        ? searchParams["engine"]
        : searchParams["engine"]
            ? [searchParams["engine"]]
            : [];

    const selectedCompat = Array.isArray(searchParams["compatibility"])
        ? searchParams["compatibility"]
        : searchParams["compatibility"]
            ? [searchParams["compatibility"]]
            : [];
    // Build options
    const categories = [...new Set(allProducts.map(item => item.category))];
    const engines = [...new Set(allProducts.flatMap(item => item.engine || []))];
    const compatibilities = [
        ...new Set(
            allProducts.flatMap(item =>
                item.compatibility.map(c =>
                    typeof c === "string"
                        ? c
                        : `${c.make} ${c.model ?? ""}${c.years ? ` (${c.years})` : ""}`
                )
            )
        ),
    ];
    const filteredCategories = categories.filter(cat =>
        cat.toLowerCase().includes(categoryQuery.toLowerCase())
    );
    const filteredEngines = engines.filter(eng =>
        eng.toLowerCase().includes(engineQuery.toLowerCase())
    );
    const filteredCompatibilities = compatibilities.filter(comp =>
        comp.toLowerCase().includes(compatQuery.toLowerCase())
    );
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            router.push(`?search=${encodeURIComponent(localQuery)}`);
        }
    };

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setLocalQuery(value);

        if (!value.trim()) return setSuggestions([]);
        const q = value.toLowerCase();
        const matches = allProducts
            .filter(p =>
                (p.partname?.toLowerCase().includes(q) || false) ||
                (p.partnumber?.toLowerCase().includes(q) || false) ||
                p.engine?.some(e => e.toLowerCase().includes(q)) ||
                p.compatibility?.some(c =>
                    `${c.make} ${c.model} ${c.years ?? ""}`.toLowerCase().includes(q)
                )
            )
            .slice(0, 6);
        setSuggestions(matches);
    };

    const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

    return (
        <div>
            {/* Search Bar */}
            <section id="filter" className="sticky top-0 bg-white z-50 py-4 shadow-sm">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center relative w-full max-w-3xl mx-auto">
                        <button
                            onClick={toggleDrawer}
                            className="mr-2 px-2 py-2 bg-blue-900 text-white rounded-full block md:hidden"
                        >
                            {isDrawerOpen ? <X /> : <Menu />}
                        </button>

                        <input
                            type="text"
                            placeholder={`Search ${make} ${model} parts by name, number, engine, compatibility...`}
                            value={localQuery}
                            onChange={handleSearchChange}
                            onKeyDown={handleKeyDown}
                            className="w-full px-4 py-2 border border-gray-300 rounded-full shadow-sm text-sm"
                        />

                        {suggestions.length > 0 && (
                            <ul className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
                                {suggestions.map((s) => (
                                    <li
                                        key={s.id}
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                                        onClick={() => router.push(`?search=${encodeURIComponent(s.partname)}`)}
                                    >
                                        {s.partname} <span className="text-gray-500">({s.partnumber})</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </section>

            {/* Filter & Results */}
            <div className="max-w-7xl mx-auto px-4">
                <div className="lg:grid lg:grid-cols-[20rem_1fr] xl:grid xl:grid-cols-[24rem_1fr] xxl:grid xxl:grid-cols-[28rem_1fr] md:grid md:grid-cols-[16rem_1fr] gap-6 xl:gap-4 xxl:gap-4 lg:gap-4">
                    {/* Sidebar */}
                    <aside
                        className={`fixed top-0 left-0 h-full lg:w-80 xl:w-96 xxl:w-auto md:w-64 bg-white shadow-lg p-4 z-50
      transform ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 lg:sticky lg:translate-x-0 lg:shadow-none lg:block lg:h-auto
       lg:top-4 lg:max-h-[calc(100vh-4rem)] lg:overflow-y-auto lg:z-auto xl:sticky xl:translate-x-0 xl:shadow-none xl:block xl:h-auto
       xl:top-4 xl:max-h-[calc(100vh-4rem)] xl:overflow-y-auto xl:z-auto xxl:sticky xxl:translate-x-0 xxl:shadow-none xxl:block xxl:h-auto
       xxl:top-4 xxl:max-h-[calc(100vh-4rem)] xxl:overflow-y-auto xxl:z-auto md:sticky md:translate-x-0 md:shadow-none md:block md:h-auto
       md:top-4 md:max-h-[calc(100vh-4rem)] md:overflow-y-auto md:z-auto`}
                    >
                        <div className="lg:hidden xl:hidden xxl:hidden md:hidden flex justify-end p-4">
                            <button onClick={toggleDrawer} className="px-2 py-2 bg-blue-900 text-white rounded-full">
                                {isDrawerOpen ? <X /> : <Menu />}
                            </button>
                        </div>

                        <form method="get">
                            <fieldset>
                                <legend className={`font-bold my-3 text-xl ${playfair_display.className}`}>Category</legend>
                                <input
                                    type="text"
                                    placeholder="Search Categories..."
                                    value={categoryQuery}
                                    name="filter_car_parts[]"
                                    onChange={(e) => setCategoryQuery(e.target.value)}
                                    className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md text-sm"
                                />
                                {filteredCategories.map(cat => (
                                    <label key={cat} className={`block ${firaSans.className}`}>
                                        <input
                                            type="checkbox"
                                            value={cat}
                                            name="filter_car_parts[]"
                                            defaultChecked={selectedCategories.includes(cat)}
                                            className="mr-2"
                                        />
                                        {cat}
                                    </label>
                                ))}
                            </fieldset>
                            <hr className="mt-5" />

                            <fieldset>
                                <legend className={`font-bold my-3 text-xl ${playfair_display.className}`}>Engine</legend>
                                <input
                                    type="text"
                                    placeholder="Search engines..."
                                    name="engines"
                                    value={engineQuery}
                                    onChange={(e) => setEngineQuery(e.target.value)}
                                    className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md text-sm"
                                />
                                {filteredEngines.map(eng => (
                                    <label key={eng} className={`block ${firaSans.className}`}>
                                        <input
                                            type="checkbox"
                                            name="engine[]"
                                            value={eng}
                                            defaultChecked={selectedEngines.includes(eng)}
                                            className="mr-2"
                                        />
                                        {eng}
                                    </label>
                                ))}
                            </fieldset>


                            <hr className="mt-5" />
                            <fieldset>
                                <legend className={`font-bold my-3 text-xl ${playfair_display.className}`}>Compatibility</legend>
                                <input
                                    type="text"
                                    placeholder="Search compatibility..."
                                    value={compatQuery}
                                    onChange={(e) => setCompatQuery(e.target.value)}
                                    className="w-full mb-2 px-3 py-2 border border-gray-300 rounded-md text-sm"
                                />
                                {filteredCompatibilities.map((comp, idx) => (
                                    <label key={idx} className={`block ${firaSans.className}`}>
                                        <input
                                            type="checkbox"
                                            name="compatibility[]"
                                            value={comp}
                                            defaultChecked={selectedCompat.includes(comp)}
                                            className="mr-2"
                                        />
                                        {comp}
                                    </label>
                                ))}
                            </fieldset>

                            <hr className="mt-5" />

                            <button
                                type="submit"
                                className="mt-4 w-full bg-blue-600 text-white py-2 rounded"
                            >
                                Apply Filters
                            </button>
                        </form>
                    </aside>

                    {/* Results Grid */}
                    <section className="lg:ml-0">
                        <h2 className={`text-4xl font-bold mb-4 ${playfair_display.className}`}>
                            {make} {model} <span className="text-blue-600">{subcategory}</span> items
                        </h2>
                        <p>{products.length} Results</p>

                        <ul className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {products.length > 0 ? (
                                products.map(product => {
                                    const compat = product.compatibility?.find(
                                        c =>
                                            c.make?.toLowerCase() === make.toLowerCase() &&
                                            c.model?.toLowerCase() === model.toLowerCase()
                                    );

                                    const slug = `${product.partname ?? "unknown"}-${make}-${model}${compat?.years ? `-${compat.years}` : ""}-${product.partnumber ?? "unknown"}-${product.id}`;

                                    return (
                                        <li key={product.id} className="flex flex-col border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                                            <Link
                                                href={`/search-by-make/${make}/${model}/${product.category}/${product.subcategory}/${encodeURIComponent(slug)}`}
                                                className="flex flex-col h-full"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <figure className="relative w-full aspect-square">
                                                    {product.image && (
                                                        <Image
                                                            src={product.image}
                                                            alt={product.partname}
                                                            fill
                                                            className="object-contain"
                                                        />
                                                    )}
                                                </figure>
                                                <figcaption className="p-3">
                                                    <h3 className={`line-clamp-3 ${firaSans.className}`}>{make} {model} {product.partname}</h3>
                                                    <p className="text-sm text-gray-600">Part #: {product.partnumber}</p>
                                                </figcaption>
                                            </Link>
                                        </li>
                                    );
                                })
                            ) : (
                                <p className="col-span-full text-center text-gray-600">
                                    No {make} products found for "{localQuery}"
                                </p>
                            )}
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    )
}
