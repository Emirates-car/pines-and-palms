import React from 'react';

async function getLocationData() {
  const response = await fetch('https://rozy-api-two.vercel.app/api/desert');
  const data = await response.json();
  return data;
}

export default async function MakeLoc() {
  // Fetch data
  const data = await getLocationData();

  // Get unique makes
  const uniqueMakes = [...new Set(data.map(item => item.make))];

  // Generate sitemap XML
  const currentDate = new Date().toISOString();
  const sitemap = uniqueMakes.flatMap(make => {
    // Get all locations for this make
    const locations = data
      .filter(item => item.make === make)
      .flatMap(item => item.location);

    // Ensure unique locations
    const uniqueLocations = [...new Set(locations)];

    // Generate XML for each location
    return uniqueLocations.map(
      location => `
      <url>
        <loc>https://emirates-car.com/search-by-brands-in-uae/${make}/${encodeURIComponent(location)}</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>yearly</changefreq>
        <priority>1.0</priority>
      </url>
    `,
    );
  });

  // Return the sitemap XML in a React component
  return (
    <div>
      <pre>
        {`<?xml version="1.0" encoding="UTF-8"?>`}
        {`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`}
        {sitemap.join('')}
        {`</urlset>`}
      </pre>
    </div>
  );
}
