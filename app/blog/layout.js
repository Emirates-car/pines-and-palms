import '../../styles/globals.css';
import Navbar from '../../components/nav';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#2563eb',
};

export const metadata = {
  title: 'Blog | Emirates-car.com',
  description: 'Explore our auto parts insights and updates at Emirates-car.com.',
  openGraph: {
    title: 'Blog | Emirates-car.com',
    siteName: 'Emirates-car',
    url: 'https://www.emirates-car.com',
    type: 'website',
    images: [
      {
        url: 'https://emirates-car.com/img/car-spare-parts.png',
        width: 1200,
        height: 630,
        alt: 'Auto Spare Parts',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Emirates-car.com',
    url: 'https://www.emirates-car.com/blog',
    images: ['https://emirates-car.com/img/car-spare-parts.png'],
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/icons/icon-96x96.png',
    apple: '/icons/icon-192x192.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/icons/icon-152x152.png',
    },
  },
  category: 'car parts',
  alternates: {
    canonical: 'https://www.emirates-car.com/blog',
  },
  keywords: 'emirates-car blog, auto parts updates, car parts news',
};

export default function BlogLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
