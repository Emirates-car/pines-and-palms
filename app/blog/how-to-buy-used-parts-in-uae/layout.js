import '../../../styles/globals.css';
import Navbar from '../../../components/footer';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#2563eb',
};

export const metadata = {
  title: 'How to buy used spare parts in UAE? |  Emirates-car.com',
  description:
    'Buy Online and Get delivered Used, New, Genuine / Original / OEM, Aftermarket auto spare parts Online in UAE for Starter, Battery, Oxygen sensor, Fusebox, Engine, Piston ',
  openGraph: {
    images: '/favicon.png',
    title: 'How to buy used spare parts in UAE? |  Emirates-car.com',
    description:
      'Buy Online and Get delivered Used, New, Genuine / Original / OEM, Aftermarket auto spare parts Online in UAE for Starter, Battery, Oxygen sensor, Fusebox, Engine, Piston ',
    url: 'https://emirates-car.com/blog/how-to-buy-used-parts-in-uae',
    image: 'https://emirates-car.com/img/blog/how-to-buy.png',
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
    title: 'How to buy used spare parts in UAE? |  Emirates-car.com',
    url: 'https://emirates-car.com/blog/how-to-buy-used-parts-in-uae',
    description:
      'Buy Online and Get delivered Used, New, Genuine / Original / OEM, Aftermarket auto spare parts Online in UAE for Starter, Battery, Oxygen sensor, Fusebox, Engine, Piston ',
    images: ['https://emirates-car.com/favicon.png'],
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
