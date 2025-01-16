// PartnameServer.js (Server Component)
import React from 'react';
import data from '../../../../data.json';
import PartnameClient from './PartnameClient';

// Function to get parts by partname (case-sensitive)
async function getPartsByPartname(partname) {
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

// Dynamic routing for Next.js
export async function generateStaticParams() {
  const uniquePartnames = [...new Set(data.map(item => item.partname))];
  return uniquePartnames.map(partname => ({
    partname,
  }));
}
