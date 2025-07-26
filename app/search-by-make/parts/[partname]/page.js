import React from 'react';
import PartnameClient from './PartnameClient';
import fs from 'fs';
import path from 'path';

async function fetchDataFromPublicFolder() {
  const filePath = path.join(process.cwd(), 'public', 'data.json');

  try {
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(jsonData);
  } catch (error) {
    throw new Error(
      `Failed to fetch JSON from public folder: ${error.message}`
    );
  }
}

export async function generateStaticParams() {
  const data = await fetchDataFromPublicFolder();
  const uniquePartnames = [...new Set(data.map(item => item.partname))];
  return uniquePartnames.map(partname => ({
    partname,
  }));
}

export async function generateMetadata({ params }) {
  const { partname } = params;
  const parts = await getPartsByPartname(partname);

  if (parts.length === 0) {
    return {
      title: 'Part Not Found',
      description: 'No matching part found in our inventory.',
    };
  }

  return {
    title: `${parts[0].partname} ${parts[0].partnumber} ${parts[0].engine} - Best Prices`,
    description: `Volkswagen ${parts[0].compatibility} - ${parts[0].partname} ${parts[0].partnumber}`,
    openGraph: {
      title: `${parts[0].partname} ${parts[0].partnumber} ${parts[0].engine} - Best Price`,
      description: `Volkswagen ${parts[0].compatibility} - ${parts[0].partname} ${parts[0].partnumber}`,
      url: `https://www.emirates-car.com/parts/${partname}`,
      images: [
        { url: '/icon-192x192.png', width: 192, height: 192 },
        {
          url: '/icons/icon-512x512.png',
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
      title: `${parts[0].partname} ${parts[0].partnumber} ${parts[0].engine} - Best Prices`,
      url: `/parts/${partname}`,
      description: `Volkswagen ${parts[0].compatibility} - ${parts[0].partname} ${parts[0].partnumber}`,
      images: ['/favicon.png'],
    },
    alternates: {
      canonical: `https://emirates-car.com/parts/${partname}`,
    },
  };
}

async function getPartsByPartname(partname) {
  const data = await fetchDataFromPublicFolder();
  const decodedPartname = decodeURIComponent(partname);
  return data.filter(item => item.partname === decodedPartname);
}

export default async function Partname({ params }) {
  const { partname } = params;
  const parts = await getPartsByPartname(partname);

  if (parts.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4 text-center">
          No parts found for "{decodeURIComponent(partname)}"
        </h1>
      </div>
    );
  }

  return <PartnameClient part={parts[0]} />;
}
