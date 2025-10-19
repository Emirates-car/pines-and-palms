import products from "../../../../../public/products.json";
import Link from "next/link";

export default function CategoryPage({ params }) {
    const { make, model, category } = params;

    const filteredProducts = products.filter((p) => {
        const hasCategory = p.category === category;
        const hasCompatibility =
            Array.isArray(p.compatibility) &&
            p.compatibility.some(
                (c) => c && c.make === make && c.model === model
            );

        return hasCategory && hasCompatibility;
    });


    if (filteredProducts.length === 0) {
        return (
            <div className="p-6 text-center text-gray-700">
                No products found for {make} {model} in {category}.
            </div>
        );
    }
    const otherProducts = products.filter((p) => {
        const hasCompatibility =
            Array.isArray(p.compatibility) &&
            p.compatibility.some(
                (c) => c && c.make === make
            )
        return hasCompatibility;
    })
    if (otherProducts.length === 0) {
        return (
            <div>

            </div>
        );
    }

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">
                {make} {model} – {category}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => {
                    const compat = product.compatibility?.find(
                        (c) => c.make === make && c.model === model
                    );

                    // create slug using raw values + id
                    const slug = `${product.partname}-${compat?.make || "unknown"}-${compat?.model || "unknown"}-${compat?.years || "unknown"}-${product.partnumber}-${product.id}`;

                    return (
                        <Link
                            key={product.id + (compat?.model || "")}
                            href={`https://www.emirates-car.com/search-by-make/${make}/${model}/${category}/${slug}`}
                        >
                            <div className="border p-4 rounded-lg shadow hover:shadow-lg transition">
                                <img
                                    src={product.image}
                                    alt={product.partname}
                                    className="w-full h-40 object-cover mb-4 rounded"
                                />
                                <h2 className="font-semibold">{product.partname}</h2>
                                <p className="text-gray-600 text-sm">{product.partnumber}</p>
                                <p className="text-xs mt-1">
                                    Years: {compat?.years || "N/A"} | Engine(s): {product.engine?.join(", ") || "N/A"}
                                </p>
                            </div>
                        </Link>
                    );
                })}
            </div>
            {otherProducts.length > 0 && (
                <section className="mt-12">
                    <h2 className="text-xl font-semibold mb-4">Other Products from {make}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-4 gap-6">
                        {otherProducts.map((p) => {
                            const compat = p.compatibility?.find(c => c?.make === make);

                            const relatedSlug = `${p.partname}-${compat?.make || "unknown"}-${compat?.model || "unknown"}-${compat?.years || "unknown"}-${p.partnumber}-${p.id}`;

                            return (
                                <Link
                                    key={p.id}
                                    href={`https://www.emirates-car.com/search-by-make/${make}/${compat?.model || "unknown"}/${p.category}/${relatedSlug}`}
                                >
                                    <div className="border p-4 rounded hover:shadow">
                                        {p.image && (
                                            <img
                                                src={p.image}
                                                alt={p.partname}
                                                className="w-full h-40 object-cover mb-2"
                                            />
                                        )}
                                        <h3 className="text-sm font-semibold">{p.partname}</h3>
                                        <p className="text-xs text-gray-500">{p.partnumber}</p>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </section>
            )}

        </div>
    );
}
