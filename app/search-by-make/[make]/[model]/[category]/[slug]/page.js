import products from "../../../../../../public/products.json";
import PartInquiryForm from "./PartInquiryForm";
import ProductTabs from "./ProductTabs";
import { Fira_Sans, Playfair_Display, Poppins, Roboto } from 'next/font/google';

const playfair_display = Playfair_Display({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-playfair-display',
});

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    display: 'swap',
    variable: '--font-roboto',
});

const firaSans = Fira_Sans({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-fira-sans',
});

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['600'],
});

export async function generateStaticParams() {
    const params = [];

    products.forEach((product) => {
        if (Array.isArray(product.compatibility)) {
            product.compatibility.forEach((compat) => {
                const slug = `${product.partname}-${compat.make}-${compat.model}-${compat.years}-${product.partnumber}-${product.id}`;
                params.push({
                    make: compat.make,
                    model: compat.model,
                    category: product.category,
                    slug,
                });
            });
        } else {
            const slug = `${product.partname}-${product.partnumber}-${product.id}`;
            params.push({
                make: "unknown",
                model: "unknown",
                category: product.category,
                slug,
            });
        }
    });

    return params;
}

export async function generateMetadata({ params }) {


    const { make, model, category, slug } = params;

    const id = Number(slug.split("-").pop());

    // Find product by ID
    const product = products.find((p) => p.id === id);

    if (!product) {
        return <div className="p-6 text-center text-gray-700">Product not found</div>;
    }

    const compat = product.compatibility?.find(
        (c) => c.make === make && c.model === model
    );

    const faqSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Product",
                "name": `${product.item_specifics?.Brand || ""} ${product.partname}`,
                "category": product.category,
                "mpn": product.partnumber,
                "sku": product.item_specifics?.sku,
                "brand": {
                    "@type": "Brand",
                    "name": product.item_specifics?.Brand || "Generic"
                },
                "image": product.image,
                "description": `${product.item_specifics?.Condition || ""} ${product.partname} compatible with multiple vehicles.`,
                "offers": {
                    "@type": "Offer",
                    "url": `https://emirates-car.com/search-by-make/${encodeURIComponent(make)}/${encodeURIComponent(model)}/${category}/${slug}`,
                    "price": product.pricing?.price,
                    "priceCurrency": product.pricing?.currency || "USD",
                    "availability":
                        product.availability === "In Stock"
                            ? "http://schema.org/InStock"
                            : "http://schema.org/OutOfStock"
                },
                "additionalProperty": Object.entries({
                    Condition: product.item_specifics?.Condition,
                    Warranty: product.item_specifics?.Warranty,
                    "OEM or Aftermarket": product.item_specifics?.["OEM or Aftermarket"],
                    "Fitment Type": product.item_specifics?.["Fitment Type"],
                    "Country/Region of Manufacture":
                        product.item_specifics?.["Country/Region of Manufacture"]
                })
                    .filter(([_, v]) => v)
                    .map(([k, v]) => ({
                        "@type": "PropertyValue",
                        "name": k,
                        "value": v
                    })),
                "isRelatedTo": product.compatibility?.map((c) => ({
                    "@type": "Product",
                    "name": `${c.make} ${c.model} (${c.years})`,
                    "additionalProperty": [
                        {
                            "@type": "PropertyValue",
                            "name": "Engine",
                            "value": c.engine
                        }
                    ]
                }))
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": `Can I buy used or aftermarket ${product.partname} (${product.partnumber}) to save costs?`,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": `Yes, we offer used and aftermarket ${product.partname} (${product.partnumber}) that are tested for quality and performance. You can cross check with item specifics tabs for other aftermarket part numbers.`
                        }
                    },
                    {
                        "@type": "Question",
                        "name": `Do you deliver ${product.partname} (${product.partnumber}) across UAE?`,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": `Yes, we deliver ${product.partname} (${product.partnumber}) to Dubai, Abu Dhabi, Sharjah, Ajman, and other Emirates. International shipping is also available.`
                        }
                    },
                    {
                        "@type": "Question",
                        "name": `How do I know if ${product.partname} (${product.partnumber}) fits my car?`,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": `You can share your car's VIN or model details with us, and we will confirm if ${product.partname} (${product.partnumber}) is compatible before shipping.`
                        }
                    },
                    {
                        "@type": "Question",
                        "name": `Does the ${product.partname} (${product.partnumber}) come with warranty?`,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": product.item_specifics?.Warranty ||
                                "This product is sold as-is without manufacturer or seller warranty."
                        }
                    }
                ]
            }
        ]
    };


    return {
        title: `${product.partnumber} ${product.item_specifics.Condition} ${product.partname} for ${make} ${decodeURIComponent(model)}`,
        description: `Buy ${product.item_specifics["OEM or Aftermarket"]} ${product.partname}, Check warranty, Fitment, Other part number, Manufacture part number and Policies`,

        openGraph: {
            images: 'https://www.emirates-car.com/favicon.png',
            title: `${product.partnumber} ${product.item_specifics.Condition} ${product.partname} for ${make} ${decodeURIComponent(model)}`,
            description: `Buy ${product.partname} fits ${compat.make + compat.model + compat.years}`,
            url: `https://www.emirates-car.com/search-by-make/${encodeURIComponent(make)}/${encodeURIComponent(model)}/${category}/${slug}`,
            image: 'https://www.emirates-car.com/img/car-spare-parts.png',
            siteName: 'Emirates Auto Parts',
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
            title: `${product.partnumber} ${product.item_specifics.Condition} ${product.partname} for ${make} ${decodeURIComponent(model)}`,
            url: `https://emirates-car.com/search-by-make/${encodeURIComponent(make)}/${encodeURIComponent(model)}/${category}/${slug}`,
            description: `Buy ${make} - ${decodeURIComponent(
                model
            )} auto spare parts Online and Get delivered Used, New, Genuine / OEM, Aftermarket in UAE`,
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
            canonical: `https://emirates-car.com/search-by-make/${encodeURIComponent(make)}/${encodeURIComponent(model)}/${category}/${slug}`,
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
        category: `${decodeURIComponent(category)}`,
        other: {
            "script:ld+json": JSON.stringify(faqSchema),
        },
    };
}




export default function ProductPage({ params }) {
    const { make, model, category, slug } = params;

    // Extract the ID from the slug
    const id = Number(slug.split("-").pop());

    // Find product by ID
    const product = products.find((p) => p.id === id);

    if (!product) {
        return <div className="p-6 text-center text-gray-700">Product not found</div>;
    }

    // Filter compatibility for the selected make and model
    const compat = product.compatibility?.find(
        (c) => c.make === make && c.model === model
    );

    if (!compat) {
        return (
            <div className="p-6 text-center text-gray-700">
                Compatibility not found for {make} {model}
            </div>
        );
    }

    // Other products of the same make
    const otherProducts = products.filter(
        (p) => p.id !== product.id && p.compatibility?.some((c) => c.make === make)
    );

    return (
        <main className="max-w-5xl mx-auto p-6">
            <div className="grid xl:grid-cols-2 xxl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-6"
                itemScope
                itemType="https://schema.org/Product">
                {/* Product Image */}
                {product.image && (
                    <figure className="mb-4 md:mb-0">
                        <img
                            src={product.image}
                            alt={product.partname}
                            className="w-full rounded-lg shadow border-[1px]"
                            itemProp="image"
                        />
                        <figcaption className="text-sm text-gray-500 text-center mt-2">
                            Image of <span itemProp="name">{product.partname}</span>
                        </figcaption>
                    </figure>
                )}

                {/* Product Info */}
                <section className="space-y-4">
                    {/* Category & Engine */}
                    <h1 className={`text-3xl xl:text-4xl xxl:text-4xl font-extrabold mx-auto my-5 xs:my-3 xs:text-xl xxs:text-2xl md:text-xl md:my-3 sm:text-xl xxs:text-center  ${poppins.className}`} itemProp="name">
                        {product.partname} (<span itemProp="mpn">{product.partnumber}</span> ) for {product.compatibility.map(c => c.make + " " + c.model + " " + c.years + " ")}
                    </h1>
                    <div className={`space-y-1 ${roboto.className}`}>
                        <p className="text-gray-700"><strong>Category:</strong><span itemProp="category">{product.category}</span> </p>
                        <p className="text-gray-700"><strong>Brand:</strong> {product.item_specifics.Brand}</p>
                        <p className="text-gray-700"><strong>Condition:</strong> {product.item_specifics.Condition}</p>
                        <p className="text-gray-700"><strong>Availability:</strong> {product.availability}</p>
                        <meta itemProp="brand" content={product.item_specifics.Brand} />

                    </div>
                    {/* Pricing */}
                    <div className="space-y-1">
                        <div
                            itemProp="offers"
                            itemScope
                            itemType="https://schema.org/Offer"
                        >
                            <p className="text-xl font-semibold text-gray-800">
                                Price:{" "}
                                <span
                                    className="line-through text-gray-400"
                                    style={{ filter: "blur(4px)", userSelect: "none" }}
                                >
                                    {product.pricing.price} <span itemProp="priceCurrency">{product.pricing.currency}</span>
                                </span>{" "}
                                <span
                                    className="text-red-600 font-bold"
                                    style={{ filter: "blur(4px)", userSelect: "none" }}
                                    itemProp="price"
                                >
                                    {product.pricing.discounted_price}
                                </span>{" "}

                                <span>
                                    <PartInquiryForm
                                        product={product}
                                        dealerPrice={product.pricing.discounted_price}
                                        dealerPriceCurrency={product.pricing.currency}
                                    />
                                </span>
                            </p>
                            {/* Hidden structured data for availability */}
                            <link itemProp="availability" href="https://schema.org/InStock" />
                        </div>
                    </div>
                </section>
            </div>
            <section><ProductTabs product={product} /></section>


            {/* Related Products */}
            {otherProducts.length > 0 && (
                <section className="mt-10">
                    <h2 className="text-xl font-semibold mb-4">Other {make} Products</h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-3  gap-6">
                        {otherProducts.map((p) => {
                            const compatForMake = p.compatibility.find(c => c.make === make);
                            if (!compatForMake) return null;
                            const otherSlug = `${p.partname}-${compatForMake.make}-${compatForMake.model}-${compatForMake.years}-${p.partnumber}-${p.id}`;
                            return (
                                <li key={p.id} className="border p-3 rounded-lg hover:shadow-md">
                                    <a
                                        href={`/search-by-make/${make}/${compatForMake.model}/${p.category}/${otherSlug}`}
                                        className="block"
                                    >
                                        <img
                                            src={p.image}
                                            alt={p.partname}
                                            className="w-full h-36 object-cover mb-2 rounded"
                                        />
                                        <p className={`text-sm font-semibold ${firaSans.className}`}>{p.partname}</p>
                                        <p className={`text-xs text-gray-600 ${firaSans.className}`}>{p.partnumber}</p>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </section>
            )}
        </main>
    );
}

