'use client';
import React from 'react';
import useSWR from 'swr';
const fetcher = async url => {
  const res = await fetch(url);
  return res.json();
};

export default function TenEntries() {
  const { data, error } = useSWR('/api/entries', fetcher);

  if (error) return <div>Error fetching data</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h3 className="text-black text-4xl text-center md:text-lg lg:text-2xl font-extrabold xs:text-xl 2xs:text-xs pt-10">
        <nobr className="text-red-600 animate-bounce">Latest</nobr> Received
        Inquiry
      </h3>
      <div className="place-content-center pt-10 xl:mx-36 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 2xs:mx-2 s:mx-2  md:ml-11 my-10 mx-10 overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-800">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-gray-800 text-white">Car</th>
              <th className="px-4 py-2 bg-gray-800 text-white">Part List</th>
              <th className="px-4 py-2 bg-gray-800 text-white">Car Location</th>
            </tr>
          </thead>
          {data.map((h, i) => (
            <tbody key={i}>
              <tr>
                <td className="border font-semibold px-4 py-2">
                  {h.Year} {h.BRAND} {h.Model}
                </td>
                <td className="border px-4 py-2">{h.PartList}</td>
                <td className="border px-4 py-2">
                  {h.Location}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}
