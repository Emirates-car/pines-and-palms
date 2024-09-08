import React from 'react';
import Link from 'next/link';

export default function HondaOfferButton() {
  return (
    <div>
      <Link
        href="/honda-accord-8th-gen-parts"
        className="underline animate-pulse text-red-600 hover:text-red-800"
      >
        Check Offers On Honda Accord 8th Generation 2008, 2009, 2010, 2011, 2012
      </Link>
    </div>
  );
}
