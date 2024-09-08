import '../../styles/globals.css';
import Navbar from '../nav';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#2563eb'
};

export const metadata = {
         title:
           'Honda spare parts UAE from Dubai dealers Online | Emirates-car.com',
         description:
           'Buy Car Parts - Used, Genuine, OEM (Original parts) and Aftermarket Honda spare parts from Dubai Dealer to all over UAE and world Online',
         openGraph: {
           images: '/favicon.png',
           title:
             'Honda spare parts UAE from Dubai dealers Online | Emirates-car.com',
           description:
             'Buy Car Parts - Used, Genuine, OEM (Original parts) and Aftermarket Honda spare parts from Dubai Dealer to all over UAE and world Online',
           url: 'https://emirates-car.com/honda-parts',
           image: 'https://emirates-car.com/img/car-spare-parts.png',
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
           title:
             'Honda spare parts UAE from Dubai dealers Online | Emirates-car.com',
           url: 'https://emirates-car.com/honda-parts',
           description:
             'Buy Car Parts - Used, Genuine, OEM (Original parts) and Aftermarket Honda spare parts from Dubai Dealer to all over UAE and world Online',
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
         alternates: {
           canonical: 'https://emirates-car.com/honda-parts'
         },
         keywords:
           'honda spare parts sharjah, honda spare parts, honda brake pads, honda distributor, honda  wheel, honda abs, honda engine, honda gearbox, honda axle, honda air filter, honda accord carburetor'
       };

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
