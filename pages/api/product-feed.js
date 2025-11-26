import parts from "../../public/products.json";

export default function handler(req, res) {
    const feed = parts.map((item) => {
        const compatibilityText = item.compatibility
            .map(
                (c) =>
                    `${c.make} ${c.model} (${c.years}${c.engine ? ", " + c.engine : ""
                    })`
            )
            .join(" and ");

        const description = `${item.partname} compatible with ${compatibilityText}. Direct replacement Genuine part. Inquiry recommended to confirm compatibility and final pricing.`;

        return {
            id: item.id,
            title: `${item.partname} for ${item.compatibility?.[0]?.make || ""}`,
            category: item.category,
            subcategory: item.subcategory,
            part_name: item.partname,
            part_number: item.partnumber,
            brand: item.item_specifics?.Brand || "",
            availability: item.availability,
            description,
            compatibility: item.compatibility,
            engines_supported: item.engine,
            image: item.image,
            item_specifics: item.item_specifics,
            pricing: item.pricing,
            policies: item.policies,
        };
    });

    res.status(200).json(feed);
}