import '../../../styles/globals.css';
import Navbar from '../../nav';
import Head from 'next/head';

async function getBlogDetail(slug) {
  const res = await fetch(`https://rozy.vercel.app/api/blog/${slug}`);
  const data = await res.json();
  return data;
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#2563eb'
};

export async function generateMetadata({ params }) {
  const { slug } = params;
  const data = await getBlogDetail(slug);
  return {
    title: `${data.TITLE} | Emirates-car.com`,
    description: `${data.DESCRIPTION}`,
    manifest: 'https://emirates-car.com/manifest.json',
    openGraph: {
      images: '/favicon.png',
      title: `${data.TITLE} | Emirates-car.com`,
      description: `${data.DESCRIPTION}`,
      url: `https://emirates-car.com/${data.TITLE}`,
      image: `https://emirates-car.com/img/blog/ + ${slug}`,
      siteName: 'Emirates Auto Parts',
      images: [
        {
          url: 'https://emirates-car.com/icon-192x192.png',
          width: 192,
          height: 192
        },
        {
          url: 'https://emirates-car.com/icons/icon-512x512.png',
          width: 512,
          height: 512,
          alt: 'car parts'
        }
      ],
      locale: 'en_US',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: `${data.TITLE}`,
      description: `${data.DESCRIPTION}`,
      images: ['https://emirates-car.com/favicon.png']
    },
    icons: {
      icon: '/favicon.png',
      shortcut: '/icons/icon-96x96.png',
      apple: '/icons/icon-192x192.png',
      other: {
        rel: 'apple-touch-icon-precomposed',
        url: '/icons/icon-152x152.png'
      }
    },
    category: 'car parts',
    alternate: {
      cannonical: "https://emirates-car.com",
    }
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
