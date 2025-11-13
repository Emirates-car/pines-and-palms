import React from 'react'
import { promises as fs } from 'fs';
import ProductFilter from './ProductFilter';
import products from "../../../../../../public/products.json";

async function getMakeImage(make, model) {
    try {
        const filePath = path.join(process.cwd(), 'public/lib/car-data.json');
        const jsonData = await fs.readFile(filePath, 'utf8');
        const data = JSON.parse(jsonData);

        const filtered = data.filter(item => item.make === make && item.model === model);

        const uniqueMkeArray = [
            ...new Map(filtered.map(item => [item.img, item])).values(),
        ];

        const imageMake = uniqueMkeArray.map(item => item.img);

        return imageMake;
    } catch (error) {
        console.error('Error reading make images:', error.message);
        return [];
    }
}


export async function generateMetadata({ params, searchParams }) {
    const make = decodeURIComponent(params.make);
    const model = decodeURIComponent(params.model);
    const category = decodeURIComponent(params.category || '');
    const subcategory = decodeURIComponent(params.subcategory || '');
    const imageMake = getMakeImage(make, model);

    const productsForMake = products.filter(p =>
        p.compatibility?.some(c => c.make.toLowerCase() === make.toLowerCase())
    );
    const productListItems = productsForMake.map((product, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
            "@type": "Product",
            "@id": `https://emirates-car.com/search-by-make/${make}/${product.category}/${product.subcategory}/${product.partname}-${product.partnumber}-${product.id}#product`,
            "name": `${product.partname} ${product.partnumber} ${make}`,
            "url": `https://www.emirates-car.com/search-by-make/${make}/${product.category}/${product.subcategory}/${product.partname}-${product.partnumber}-${product.id}`,
            "image": `https://www.emirates-car.com${product.image}`,
            "description": `${product.partname} compatible with ${make} ${product.compatibility?.map(c => c.model).join(", ")}`,
            "brand": { "@type": "Brand", "name": product.compatibility[0]?.make || make },
            "mpn": product.partnumber,
            "offers": {
                "@type": "Offer",
                "url": `https://www.emirates-car.com/search-by-make/${make}/${product.category}/${product.subcategory}/${product.partname}-${product.partnumber}-${product.id}`,
                "priceCurrency": product.pricing.currency,
                "price": product.pricing.price,
                "availability": "https://schema.org/InStock",
                "itemCondition": "https://schema.org/NewCondition"
            },
            "isAccessoryOrSparePartFor": {
                "@type": "Car",
                "make": { "@type": "Brand", "name": product.compatibility[0]?.make || make },
                "model": product.compatibility[0]?.model
            }
        }
    }));
    const faqSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://www.emirates-car.com/#organization",
                "name": "EMIRATESCAR",
                "url": "https://www.emirates-car.com/",
                "logo": "https://www.emirates-car.com/img/car-spare-parts.png",
                "sameAs": [
                    "https://www.facebook.com/emirates.auto.parts",
                    "https://www.instagram.com/emiratescar_parts/",
                    "https://x.com/emiratescarpart",
                    "https://www.linkedin.com/company/emirates-car-auto-parts/"
                ]
            },
            {
                "@type": "CollectionPage",
                "name": `${make} ${model} ${subcategory} | EMIRATESCAR`,
                "url": `https://www.emirates-car.com/search-by-make/${make}`,
                "description": `Buy ${subcategory} for ${make} ${decodeURIComponent(model)} New, Used, and Aftermarket in UAE. Get fast delivery and expert support from reliable dealers. Shop now!`,
                "about": { "@type": "Brand", "name": make },
                "mainEntity": {
                    "@type": "ItemList",
                    "itemListElement": productListItems
                }
            },
            {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://www.emirates-car.com/"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Car Makes",
                        "item": `https://www.emirates-car.com/search-by-makes/`
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": `${make} Spare Parts`,
                        "item": `https://www.emirates-car.com/search-by-make/${make}`
                    },
                    {
                        "@type": "ListItem",
                        "position": 4,
                        "name": `${make} ${model} Spare Parts`,
                        "item": `https://www.emirates-car.com/search-by-make/${make}/${model}`
                    },
                    {
                        "@type": "ListItem",
                        "position": 4,
                        "name": `${make} ${model} ${category}`,
                        "item": `https://www.emirates-car.com/search-by-make/${make}/${model}/${category}`
                    },
                    {
                        "@type": "ListItem",
                        "position": 4,
                        "name": `${make} ${model} ${subcategory}`,
                        "item": `https://www.emirates-car.com/search-by-make/${make}/${model}/${category}/${subcategory}`
                    }
                ]
            },
        ]
    };

    return {
        title: `${make} ${model} ${subcategory} Used & Genuine Parts at Best Prices | EMIRATESCAR`,
        description: `Buy ${subcategory} for ${make} ${decodeURIComponent(model)} New, Used, and Aftermarket in UAE. Get fast delivery and expert support from reliable dealers. Shop now!`,

        openGraph: {
            images: 'https://www.emirates-car.com/favicon.png',
            title: `${make} ${model} ${subcategory} Used & Genuine at Best Prices | EMIRATESCAR`,
            description: `Buy ${subcategory} for ${make} ${decodeURIComponent(model)} New, Used, and Aftermarket in UAE. Get fast delivery and expert support from reliable dealers. Shop now! `,
            url: 'https://www.emirates-car.com/search-by-make/' + make + '/' + model + '/' + category,
            image: `https://www.emirates-car.com/img/car-logos/${imageMake}`,
            siteName: 'EMIRATESCAR',
            images: [
                'https://www.emirates-car.com/favicon.png',
                {
                    url: 'https://www.emirates-car.com/icon-192x192.png',
                    width: 192,
                    height: 192,
                },
                {
                    url: 'https://www.emirates-car.com/icons/icon-512x512.png',
                    width: 512,
                    height: 512,
                    alt: 'car parts',
                },
            ],
            locale: 'en_US',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: `${make} ${model} ${subcategory} Used & Genuine Parts at Best Prices | EMIRATESCAR`,
            url: 'https://www.emirates-car.com/search-by-make/' + make + '/' + model + '/' + category,
            description: `Buy ${subcategory} for ${make} ${decodeURIComponent(model)} New, Used, and Aftermarket in UAE. Get fast delivery and expert support from reliable dealers. Shop now!`,
            images: ['https://www.emirates-car.com/favicon.png'],
        },
        icons: {
            icon: 'https://www.emirates-car.com/favicon.png',
            shortcut: 'https://www.emirates-car.com/icons/icon-96x96.png',
            apple: 'https://www.emirates-car.com/icons/icon-192x192.png',
            other: {
                rel: 'apple-touch-icon-precomposed',
                url: 'https://www.emirates-car.com/icons/icon-152x152.png',
            },
        },
        alternates: {
            canonical: `https://emirates-car.com/search-by-make/${encodeURIComponent(make)}/${encodeURIComponent(model)}/${encodeURIComponent(category)}/${encodeURIComponent(subcategory)}`,
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                noimageindex: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        category: `${make} ${decodeURIComponent(model)} ${category} ${subcategory}`,
        other: {
            "script:ld+json": JSON.stringify(faqSchema),
        },
    };
}



export default function Subcategory({ params, searchParams }) {
    const make = decodeURIComponent(params.make);
    const model = decodeURIComponent(params.model);
    const category = decodeURIComponent(params.category || '');
    const subcategory = decodeURIComponent(params.subcategory || '');

    const {
        "filter_car_parts[]": categories = [],
        "subcategory": subcategories = [],
        "engine[]": engines = [],
        "compatibility[]": compats = [],
        search = "",
    } = searchParams;

    // Helper function to normalize strings
    const normalize = (str) => str?.toLowerCase().replace(/\s+/g, " ").trim();

    const selectedCategories = Array.isArray(categories)
        ? categories
        : [categories].filter(Boolean);
    const selectedSubcategories = Array.isArray(subcategories)
        ? subcategories
        : [subcategories].filter(Boolean);
    const selectedEngines = Array.isArray(engines)
        ? engines
        : [engines].filter(Boolean);
    const selectedCompats = Array.isArray(compats)
        ? compats
        : [compats].filter(Boolean);
    const query = search?.toLowerCase() || "";
    const makeModelCategorySubcategoryFiltered = products.filter(
        (product) =>
            product.compatibility.some(
                (c) => normalize(c.make) === normalize(make) && normalize(c.model) === normalize(model)
            ) && normalize(product.category) === normalize(category) && normalize(product.subcategory) === normalize(subcategory)
    );
    // STEP 2: Additional filter by user selection
    const filtered = makeModelCategorySubcategoryFiltered.filter((product) => {
        const matchesSubcategory = selectedSubcategories.length === 0 || selectedSubcategories.includes(product.subcategory)

        const matchesCategory =
            selectedCategories.length === 0 || selectedCategories.includes(product.category);

        const matchesSearch =
            product.partname?.toLowerCase().includes(query) ||
            product.partnumber?.toLowerCase().includes(query) ||
            product.engine?.some((e) => e.toLowerCase().includes(query)) ||
            product.compatibility?.some((c) => `${c.make} ${c.model} ${c.years ?? ""}`.toLowerCase().includes(query));

        const matchesEngine =
            selectedEngines.length === 0 ||
            product.engine?.some((e) => selectedEngines.includes(e));

        const matchesCompatibility =
            selectedCompats.length === 0 ||
            product.compatibility?.some((c) =>
                selectedCompats.includes(`${c.make} ${c.model} ${c.years ? `(${c.years})` : ""}`.trim())
            );

        return matchesSubcategory && matchesCategory && matchesSearch && matchesEngine && matchesCompatibility;
    });
    // STEP 3: Fallback for other products from the same make
    const otherProducts = products.filter((p) =>
        p.compatibility.some((c) => normalize(c.make) === normalize(make))
    );

    // Handle no results
    if (makeModelCategorySubcategoryFiltered.length === 0) {
        return (
            <div className="p-6 text-center text-gray-700">
                No products found for {make} {model} in {subcategory.replace(/-/g, " ")} {category.replace(/-/g, " ")}.
            </div>
        );
    }
    const displayCategory = category.replace(/-/g, " ");


    return (
        <div className="p-6 max-w-6xl mx-auto">
            <header>
                <h1 className="text-2xl font-bold mb-6 capitalize">
                    {make} {model} – {displayCategory}
                </h1>
            </header>
            <main>
                {/* Filter section */}
                {makeModelCategorySubcategoryFiltered.length > 0 && (
                    <section aria-labelledby="filters-heading">
                        <h2 id="filters-heading" className="sr-only">Filter {make} {model} Parts</h2>
                        <ProductFilter
                            make={make}
                            model={model}
                            products={filtered}
                            allProducts={makeModelCategorySubcategoryFiltered}
                            searchParams={searchParams}
                        />
                    </section>
                )}
            </main>
        </div>
    )
}
