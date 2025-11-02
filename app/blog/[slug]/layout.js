import '../../../styles/globals.css';
import Navbar from '../../../components/nav';

async function getBlogDetail(slug) {
  const res = await fetch(`https://rozy-api-two.vercel.app/api/blog/${slug}`);
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
    title: `${data.TITLE} | EMIRATESCAR`,
    description: `${data.DESCRIPTION}`,
    manifest: 'https://www.emirates-car.com/manifest.json',
    openGraph: {
      images: 'https://www.emirates-car.com/favicon.png',
      title: `${data.TITLE} | EMIRATESCAR`,
      description: `${data.DESCRIPTION}`,
      url: `https://emirates-car.com/${data.TITLE}`,
      image: `https://www.emirates-car.com/img/blog/ + ${slug}`,
      siteName: 'EMIRATESCAR',
      images: [
        {
          url: 'https://www.emirates-car.com/icon-192x192.png',
          width: 192,
          height: 192
        },
        {
          url: 'https://www.emirates-car.com/icons/icon-512x512.png',
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
      images: ['https://www.emirates-car.com/favicon.png']
    },
    icons: {
      icon: 'https://www.emirates-car.com/favicon.png',
      shortcut: 'https://www.emirates-car.com/icons/icon-96x96.png',
      apple: 'https://www.emirates-car.com/icons/icon-192x192.png',
      other: {
        rel: 'apple-touch-icon-precomposed',
        url: 'https://www.emirates-car.com/icons/icon-152x152.png'
      }
    },
    category: 'Blog',
    alternate: {
      cannonical: "https://emirates-car.com",
    }
  };
}

export default function RootLayout({ children }) {
  return (
    <>{children}</>
  );
}
