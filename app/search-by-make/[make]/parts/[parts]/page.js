export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { promises as fs } from 'fs';
import { notFound, redirect } from 'next/navigation';
import path from 'path';
import FormComponent from '../../../../../components/FormComponent';
import TenEntries from '../../../../../components/tenentries';
import { getCity, getFormModel, getMake, getParts } from '../../../../page';
import CarParts from '../../../../../public/img/car-spare-parts.png';
import SearchModel from '../../../../../components/SearchModel';
import { Fira_Sans, Playfair_Display } from 'next/font/google';
import products from "../../../../../public/products.json"
import ProductFilter from './ProductFilter';

const playfair_display = Playfair_Display({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-playfair-display',
});

const firaSans = Fira_Sans({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-fira-sans',
});


export async function generateStaticParams() {
    try {
        const filePath = path.join(process.cwd(), 'public/lib/parts.json');
        const fileContents = await fs.readFile(filePath, 'utf8');
        const data = JSON.parse(fileContents);

        const params = data.map(item => ({
            parts: item.parts,
        }));

        return params;
    } catch (error) {
        console.error('Error generating static params from JSON:', error);
        return [];
    }
}

export async function generateMetadata({ params }) {
    const { parts, make } = params;
    const decodedParts = decodeURIComponent(parts);
    return {
        title: `${decodedParts} Auto Spare Parts Order Online in UAE | Emirates-car.com`,
        description: `Buy Online and Get delivered Used, New, Genuine / Original / OEM, Aftermarket auto spare parts Online in ${decodedParts} UAE`,
        openGraph: {
            images: 'https://emirates-car.com/favicon.png',
            title: `${decodedParts} Auto Spare Parts Order Online in UAE | Emirates-car.com`,
            description: `Buy Online and Get delivered Used, New, Genuine / Original / OEM, Aftermarket auto spare parts Online in ${decodedParts} UAE`,
            url: 'https://emirates-car.com/search-by-part-name/' + parts,
            image: 'https://emirates-car.com/img/car-spare-parts.png',
            siteName: 'Emirates Auto Parts',
            images: [
                {
                    url: 'https://emirates-car.com/icon-192x192.png',
                    width: 192,
                    height: 192,
                },
                {
                    url: 'https://emirates-car.com/icons/icon-512x512.png',
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
            title: `${decodedParts} Auto Spare Parts Order Online in UAE - Used, Genuine, Aftermarket | Emirates-car.com`,
            url: 'https://www.emirates-car.com/search-by-part-name/' + parts,
            description: `Buy Online and Get delivered Used, New, Genuine / Original / OEM, Aftermarket auto spare parts Online in ${decodedParts} UAE`,
            images: ['https://emirates-car.com/favicon.png'],
        },
        icons: {
            icon: 'https://emirates-car.com/favicon.png',
            shortcut: 'https://emirates-car.com/icons/icon-96x96.png',
            apple: 'https://emirates-car.com/icons/icon-192x192.png',
            other: {
                rel: 'apple-touch-icon-precomposed',
                url: 'https://emirates-car.com/icons/icon-152x152.png',
            },
        },
        category: `${decodedParts}`,
        alternates: {
            canonical: `https://emirates-car.com/search-by-part-name/${parts}`,
        },
        keywords: `${decodedParts} for honda, ${decodedParts} in dubai, ${decodedParts} for porsche, ${decodedParts} for volkswagen, ${decodedParts} for volvo, ${decodedParts} online, ${decodedParts} for ford, ${decodedParts} spare parts uae, ${decodedParts} spare parts online, ${decodedParts} used spare parts dubai, ${decodedParts} spare parts near me`,
    };
}
async function getPartsData(parts) {
    const filePath = path.join(process.cwd(), 'public/lib/parts.json');
    const jsonData = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(jsonData);

    const decodedParts = decodeURIComponent(parts);
    const filtered = data.find(item => item.parts === decodedParts);

    return filtered;
}


async function getMakeImage(make) {
    try {
        const filePath = path.join(process.cwd(), 'public/lib/car-data.json');
        const jsonData = await fs.readFile(filePath, 'utf8');
        const data = JSON.parse(jsonData);

        const filtered = data.filter(item => item.make === make);

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

async function getModel(make) {
    try {
        const filePath = path.join(process.cwd(), 'public/lib/car-data.json');
        const jsonData = await fs.readFile(filePath, 'utf8');
        const data = JSON.parse(jsonData);
        const decodedMake = decodeURIComponent(make);

        const filtered = data.filter(item => item.make === decodedMake);

        const uniqueObjectArray = [
            ...new Map(filtered.map(item => [item.model, item])).values(),
        ];

        return uniqueObjectArray;
    } catch (error) {
        console.error('Error reading model data:', error.message);
        return [];
    }
}
export default async function Parts({ params, searchParams }) {
    const { make, parts } = params;
    const partsData = await getPartsData(parts);
    const carmodel = await getModel(make)
    const imageMake = await getMakeImage(make)
    const partsDa = await getParts()



    if (!partsData || partsData.length === 0) {
        notFound();
    }
    const {
        "filter_car_parts[]": categories = [],
        "engine[]": engines = [],
        "compatibility[]": compats = [],
        search = ""
    } = searchParams;


    const selectedCategories = Array.isArray(categories) ? categories : [categories].filter(Boolean);
    const selectedEngines = Array.isArray(engines) ? engines : [engines].filter(Boolean);
    const selectedCompats = Array.isArray(compats) ? compats : [compats].filter(Boolean);
    const query = search?.toLowerCase() || "";
    const partEntry = partsDa.find(
        (p) => p.parts.toLowerCase() === decodeURIComponent(parts).toLowerCase()
    );

    if (!partEntry) {
        redirect("/get-in-touch");
    }

    // Filter all products that:
    // 1. Match make
    // 2. Match subcategory === parts
    const makeFiltered = products.filter(product =>
        product.compatibility?.some(
            (c) => c.make.toLowerCase() === make.toLowerCase()
        )
    );

    const partFiltered = makeFiltered.filter(product =>
        product.subcategory.toLowerCase() === partEntry.parts.toLowerCase()
    );

    if (partFiltered.length === 0) {
        redirect("/get-in-touch");
    }



    const filtered = partFiltered.filter(product => {
        const matchesCategory =
            selectedCategories.length === 0 || selectedCategories.includes(product.category);

        const matchesSearch =
            product.partname.toLowerCase().includes(query) ||
            product.partnumber.toLowerCase().includes(query) ||
            product.engine?.some(e => e.toLowerCase().includes(query)) ||
            product.compatibility?.some(c =>
                `${c.make} ${c.model} ${c.years ?? ""}`.toLowerCase().includes(query))

        const matchesEngine =
            selectedEngines.length === 0 || product.engine?.some(e => selectedEngines.includes(e));

        const matchesCompatibility =
            selectedCompats.length === 0 ||
            product.compatibility?.some(c => selectedCompats.includes(`${c.make} ${c.model} ${c.years ? `(${c.years})` : ""}`));
        return matchesCategory && matchesSearch && matchesEngine && matchesCompatibility;
    });

    const excludedMakes = [
        'Acura', 'Buick', 'Eagle', 'Lotus', 'Plymouth', 'Pontiac', 'Saab', 'Subaru',
        'Alpha Romeo', 'Geo', 'Oldsmobile', 'Isuzu', 'Saturn', 'Corbin', 'Holden',
        'Spyker', 'Spyker Cars', 'Aston Martin', 'Panoz', 'Foose', 'Morgan', 'Aptera',
        'Smart', 'SRT', 'Roush Performance', 'Pagani', 'Mobility Ventures LLC',
        'RUF Automobile', 'Koenigsegg', 'Karma', 'Polestar', 'STI', 'Kandi', 'Abarth',
        'Dorcen', 'Foton', 'W Motors', 'Opel', 'Skoda', 'Hillman', 'Austin', 'Fillmore',
        'Maybach', 'Merkur', 'Rambler', 'Shelby', 'Studebaker', 'Great Wall GWM', 'Zeekr', 'ZNA', 'GAC', 'Gs7', 'Hongqi',
        'W Motor', 'JAC', 'Jaecoo', 'Jetour', 'TANK', 'Soueast', 'Zarooq Motors', 'Changan', 'Maxus', 'Haval', 'Zotye', 'Sandstorm',
        'Chery', 'Geely', 'BAIC', 'Bestune'
    ];
    const isExcludedMake = excludedMakes.includes(make);
    if (excludedMakes.includes(make)) {
        redirect('/get-in-touch');
    }

    const filePath = path.join(process.cwd(), 'public/lib/car-data.json');
    const jsonData = await fs.readFile(filePath, 'utf8');
    const allData = JSON.parse(jsonData);

    const data = allData.filter(item => item.make === make);

    if (!data || data.length === 0) {
        notFound();
    }

    const cities = await getCity();
    const makedatas = await getMake();
    const partsposts = await getParts();
    const modelsform = await getFormModel();


    return (
        <div className='max-w-7xl mx-auto'>
            <div className="py-5 xxs:px-7 sm:px-7 s:py-6 lg:mx-6 md:mx-6 xs:mx-2 xxs:mx-2 max-w-7xl mx-auto">
                <div className="bg-backgroundlight rounded-sm">
                    <div className="grid grid-cols-2 xs:grid xs:grid-cols-1 s:grid s:grid-cols-1 xs:text-center sm:grid sm:grid-cols-2 xxs:grid xxs:grid-cols-1 xs:pt-5 s:pt-5">
                        <div>
                            <div className="ml-8 md:ml-8 xs:ml-1 xxs:ml-4 xxs:mt-8 xs:px-5 sm:ml-6 lg:ml-1 xl:ml-20 sm:mx-auto mt-10 sm:mt-12 md:mt-10 lg:mt-20 lg:px-8 xl:mt-28 xs:mt-2 xs:text-left s:mt-2">
                                <div className="lg:text-left">

                                    <h1 className={`mt-3 text-5xl lg:text-4xl sm:text-lg xs:text-xl xxs:text-xl md:text-xl font-head font-bold ${firaSans.className}`}>
                                        <span className="text-blue-500">{make} {partsData.parts}</span> - Used, Genuine & Aftermarket in UAE
                                    </h1>
                                    <p className='text-base'></p>
                                    <div className="mt-5 sm:mt-5 xxs:my-5 xs:my-5 lg:justify-start">
                                        <div className="py-3 px-4 sm:py-0 sm:px-0 w-1/2 lg:w-full xs:w-full xxs:w-3/4 xs:mx-auto s:w-full sm:w-3/4 md:w-full md:mx-auto md:px-0 md:py-0 xs:py-0 xs:px-0 xxs:px-0 xxs:py-0 lg:px-0 lg:py-0 xl:px-0 xl:py-0 xxl:px-0 xxl:py-0 rounded-lg shadow-md sm:shadow-none">
                                            <a
                                                href="/#myForm"
                                                title="vehicle parts online"
                                                className="flex items-center justify-center py-2 xs:py-2 xxs:py-1 sm:py-0 text-xl sm:text-base xl:text-xl border border-transparent font-medium rounded-sm text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md md:text-lg md:px-5 xs:text-sm xxs:text-sm xxs:my-2 lg:my-2 s:text-sm s:my-2 focus:filter brightness-125"
                                            >
                                                Inquire Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xxs:hidden xs:hidden p-35 md:p-20 lg:p-20">
                            <Image
                                src={'/img/car-logos/' + imageMake}
                                alt={make + ' spare parts'}
                                className="ml-20 md:ml-5 lg:ml-8 lg:mt-10 xl:mt-10 xxl:mt-10 xl:ml-16 xxl:ml-16"
                                priority
                                width={300}
                                height={300}
                            />
                        </div>
                    </div>
                </div>
                <section>
                    {partFiltered.length > 0 ?
                        <ProductFilter
                            make={make}
                            products={filtered}
                            allProducts={partFiltered}
                            searchParams={searchParams}
                        /> : <></>}
                </section>

                <section className="grid grid-cols-1 s:grid s:grid-cols-1 xs:grid xs:grid-cols-1 xxs:grid xxs:grid-cols-1 sm:grid sm:grid-cols-1">
                    <FormComponent formsData={modelsform} postFilter={partsposts} />
                    <div className="p-5 pt-10">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722504.3860201286!2d51.71183150969869!3d24.337497293019872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e48dfb1ab12bd%3A0x33d32f56c0080aa7!2sUnited%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1641654109734!5m2!1sen!2sin"
                            title={parts + ' parts'}
                            width="100%"
                            height="100%"
                            style={{ border: '0' }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </section>

                <section className="mt-10 shadow-sm mx-4 md:mx-4 lg:max-w-4xl lg:mx-auto xl:mx-10 bg-bglight px-20 xs:px-3 xxs:px-3">
                    <div className="container py-6">
                        <h2 className={`text-black text-4xl text-center md:text-2xl lg:text-3xl font-bold xs:text-xl xxs:text-2xl pt-10 ${firaSans.className}`}>
                            Search <span className='text-blue-600'>{decodeURIComponent(parts)}</span> for all {make} model
                        </h2>
                        <SearchModel make={make} car={carmodel} />

                        <ul className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-4 xs:grid-cols-2 xxs:grid-cols-3 gap-3 xs:gap-1 mt-10">
                            {carmodel.map((post, i) => {
                                const linkHref = isExcludedMake
                                    ? '/get-in-touch'
                                    : '/search-by-make/[make]/[model]/[category]/[subcategory]';
                                const linkAs = isExcludedMake
                                    ? '/get-in-touch'
                                    : `/search-by-make/${post.make}/${post.model}/${partsData.category}/${parts}`;

                                return (
                                    <li key={i} className="h-full">
                                        <Link
                                            href={linkHref}
                                            as={linkAs}
                                            target='_blank'
                                            title={`${post.make} ${post.model} ${decodeURIComponent(parts)}`}
                                            className="block border border-blue-800 hover:border-blue-900 bg-white rounded-sm h-full p-3 text-center"
                                        >
                                            <span className="text-center text-black text-lg font-medium hover:text-gray-800 p-2 xs:p-0 font-sans underline ">
                                                <span className='text-blue-600'>{make} {post.model}</span> {decodeURIComponent(parts)} parts
                                            </span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                    </div>
                </section>
                <section>
                    <h3 className={`text-black text-4xl text-center md:text-2xl lg:text-3xl font-bold xs:text-xl xxs:text-2xl pt-10 ${firaSans.className}`}>
                        Search{' '}
                        <span className="text-blue-500">
                            {decodeURIComponent(partsData.parts)}{' '}
                        </span>
                        for Any Models
                    </h3>
                    <div className="grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-6 xxs:grid xxs:grid-cols-2 s:grid s:grid-cols-2 gap-3 xs:gap-1 xxs:gap-1 sm:gap-2 s:gap-2 md:gap-2 xs:mx-4 s:mx-4 xxs:mx-4 md:ml-11 my-10 mx-10">
                        {makedatas.map((post, i) => (
                            <div key={i} className='border'>
                                <Link
                                    href="/search-by-make/[make]"
                                    as={'/search-by-make/' + post.make}
                                    title={post.make + ' ' + decodeURIComponent(partsData.parts)}
                                >
                                    <span className="h-full hover:border-blue-600 py-3 bg-gray-100 rounded-sm">
                                        <Image
                                            src={'/img/car-logos/' + post.img}
                                            alt={make + ' spare parts'}
                                            className="mx-auto m-3"
                                            priority
                                            width={70}
                                            height={70}
                                        />
                                        <p className={`text-center font-sans font-medium text-lg`}>
                                            <span className='text-blue-600'>{post.make}</span> {decodeURIComponent(partsData.parts)}
                                        </p>
                                    </span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>

                <TenEntries />
                <section>
                    <h3 className={`text-black text-4xl text-center md:text-2xl lg:text-3xl font-bold xs:text-xl xxs:text-2xl pt-10 ${firaSans.className}`}>
                        Search{' '}
                        <span className="text-blue-500">
                            {decodeURIComponent(partsData.parts)}{' '}
                        </span>
                        parts in UAE
                    </h3>
                    <div className="grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-6 xxs:grid xxs:grid-cols-2 s:grid s:grid-cols-2 gap-3 xs:gap-1 xxs:gap-1 sm:gap-2 s:gap-2 md:gap-2 xs:mx-4 s:mx-4 xxs:mx-4 md:ml-11 my-10 mx-10">
                        {cities.map((post, i) => (
                            <div key={i} className='border'>
                                <Link
                                    href="/search-by-cities-in-uae/[city]"
                                    as={'/search-by-cities-in-uae/' + post.city}
                                    title={
                                        decodeURIComponent(partsData.parts) + ' in ' + post.city
                                    }
                                >
                                    <span className="h-full hover:border-blue-600 py-auto bg-gray-100 rounded-sm">
                                        <p className={`text-center my-auto font-sans font-medium text-lg xs:text-base xxs:text-base`}>
                                            {decodeURIComponent(partsData.parts)} in <span className='text-blue-600'>{post.city}</span>
                                        </p>
                                    </span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

        </div>
    );
}
