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
  title: 'Quick Car Auto Spare Part Online in UAE | Emirates-car.com',
  description:
    'Buy Online and Get delivered Used, New, Genuine / Original / OEM, Aftermarket auto spare parts Online in UAE Body parts, Interior and exterior parts, suspension parts, headlight, fog lights and other lighting parts, performance parts and more',
  openGraph: {
    images: 'https://emirates-car.com/favicon.png',
    title: 'Quick Car Auto Spare Part Online in UAE | Emirates-car.com',
    description:
      'Buy Online and Get delivered Used, New, Genuine / Original / OEM, Aftermarket auto spare parts Online in UAE Body parts, Interior and exterior parts, suspension parts, headlight, fog lights and other lighting parts, performance parts and more',
    url: 'https://emirates-car.com/search-by-part-name',
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
    title: 'Quick Car Auto Spare Part Online in UAE | Emirates-car.com',
    url: 'https://emirates-car.com/search-by-part-name',
    description:
      'Buy Online and Get delivered Used, New, Genuine / Original / OEM, Aftermarket auto spare parts Online in UAE Body parts, Interior and exterior parts, suspension parts, headlight, fog lights and other lighting parts, performance parts and more',
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
  category: 'car parts',
  alternates: {
    canonical: `https://emirates-car.com/search-by-part-name`,
  },
};

export default function RootLayout({ children }) {
  return (
    <>{children}</>
  );
}
