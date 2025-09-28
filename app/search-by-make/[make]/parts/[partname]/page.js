"use client";
import { useParams } from "next/navigation";
import products from "../../../../../public/products.json";
import Image from "next/image";
import PartnameClient from "./PartnameClient";
import PartsInquiryButton from "./PartnameClient";
import PartsInquiry from "./PartsInquiry";

export default function PartPage() {
    const { make, partname } = useParams();
    const decodedPartname = decodeURIComponent(partname);

    // Find the current product
    const product = products.find(
        (p) =>
            p.partname === decodedPartname &&
            p.compatibility.some((c) => c.make === make)
    );

    if (!product) {
        return (
            <div className="max-w-4xl mx-auto py-10 text-center text-gray-600">
                <h1 className="text-2xl font-bold">Part not found</h1>
                <p>No {make} part matches "{decodedPartname}"</p>
            </div>
        );
    }

    // Filter related parts for the same make, excluding the current part
    const relatedParts = products.filter(
        (p) =>
            p.id !== product.id &&
            p.compatibility.some((c) => c.make === make)
    );

    return (
        <main className="max-w-4xl mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold mb-4">
                {product.partname} for {make}
            </h1>

            <div className="grid grid-cols-2  md:grid-cols-2 gap-8">
                <div>
                    <Image
                        src={product.image}
                        alt={product.partname}
                        width={400}
                        height={400}
                        className="rounded-lg border"
                    />
                </div>

                <div>
                    <p className="text-lg font-semibold mb-2">
                        Part Number: {product.partnumber}
                    </p>
                    <p className="text-gray-700 mb-4">{product.category}</p>

                    <h3 className="font-semibold mb-2">Compatible with:</h3>
                    <ul className="list-disc pl-5 text-gray-600">
                        {product.compatibility.map((c, i) => (
                            <li key={i}>
                                {c.make} {c.model} {c.years && `(${c.years})`}
                            </li>
                        ))}
                    </ul>

                    <h3 className="font-semibold mt-4 mb-2">Engines:</h3>
                    <p>{product.engine.join(", ")}</p>
                    <p>
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
                    </p>
                    <PartsInquiryButton part={product.partname} />

                    <div className="mt-6">
                        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
                            Order Now
                        </button>
                    </div>
                </div>

            </div>
            <div className="grid grid-cols-2  md:grid-cols-2 gap-8">
                <PartsInquiry part={partname} product={relatedParts} />
            </div>

            {/* Related parts for the same make */}
            {relatedParts.length > 0 && (
                <section className=" mt-12">
                    <h2 className="text-2xl font-bold mb-6">Other {make} Parts</h2>
                    <div className="grid grid-cols-3 xs:grid-cols-1 xxs:grid-cols-3 s:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {relatedParts.map((p) => (
                            <div
                                key={p.id}
                                className="border rounded-lg p-4 hover:shadow-lg transition"
                            >
                                <Image
                                    src={p.image}
                                    alt={p.partname}
                                    width={200}
                                    height={200}
                                    className="rounded mb-2"
                                />
                                <h3 className="font-semibold">{p.partname}</h3>
                                <p className="text-gray-600 text-sm">{p.category}</p>
                                <p className="text-gray-500 text-sm">
                                    Part #: {p.partnumber}
                                </p>

                            </div>
                        ))}
                    </div>
                </section>
            )}
            <PartnameClient part={partname} />
        </main>
    );
}
