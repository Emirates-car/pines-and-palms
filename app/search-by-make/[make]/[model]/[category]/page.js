import products from "../../../../../public/products.json";
import Link from "next/link";
import ProductFilter from "./ProductFilter";

export default function CategoryPage({ params, searchParams }) {
    // Decode parameters to handle %20 and other URL encodings
    const make = decodeURIComponent(params.make);
    const model = decodeURIComponent(params.model);
    const category = decodeURIComponent(params.category || '');

    const {
        "filter_car_parts[]": categories = [],
        "engine[]": engines = [],
        "compatibility[]": compats = [],
        search = "",
    } = searchParams;

    // Helper function to normalize strings
    const normalize = (str) => str?.toLowerCase().replace(/\s+/g, " ").trim();

    // Normalize arrays
    const selectedCategories = Array.isArray(categories)
        ? categories
        : [categories].filter(Boolean);
    const selectedEngines = Array.isArray(engines)
        ? engines
        : [engines].filter(Boolean);
    const selectedCompats = Array.isArray(compats)
        ? compats
        : [compats].filter(Boolean);
    const query = search?.toLowerCase() || "";

    // STEP 1: Base filtering by make, model, and category
    const makeModelCategoryFiltered = products.filter(
        (product) =>
            product.compatibility.some(
                (c) => normalize(c.make) === normalize(make) && normalize(c.model) === normalize(model)
            ) && normalize(product.category) === normalize(category)
    );

    // STEP 2: Additional filter by user selection
    const filtered = makeModelCategoryFiltered.filter((product) => {
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

        return matchesCategory && matchesSearch && matchesEngine && matchesCompatibility;
    });

    // STEP 3: Fallback for other products from the same make
    const otherProducts = products.filter((p) =>
        p.compatibility.some((c) => normalize(c.make) === normalize(make))
    );

    // Handle no results
    if (makeModelCategoryFiltered.length === 0) {
        return (
            <div className="p-6 text-center text-gray-700">
                No products found for {make} {model} in {category.replace(/-/g, " ")}.
            </div>
        );
    }

    const displayCategory = category.replace(/-/g, " ");

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold mb-6 capitalize">
                {make} {model} – {displayCategory}
            </h1>

            {/* Filter section */}
            {makeModelCategoryFiltered.length > 0 && (
                <section>
                    <ProductFilter
                        make={make}
                        model={model}
                        products={filtered}
                        allProducts={makeModelCategoryFiltered}
                        searchParams={searchParams}
                    />
                </section>
            )}


        </div>
    );
}
