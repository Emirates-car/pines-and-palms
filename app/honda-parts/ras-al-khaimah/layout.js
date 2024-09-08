import '../../../styles/globals.css';
import Navbar from '../../nav';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#2563eb'
};

export const metadata = {
         title:
           'Honda Car Parts in Ras al Khaimah from Dubai dealers Online |Emirates-car.com',
         description:
           'Buy Car Parts - Used, Genuine, OEM (Original parts) and Aftermarket Honda spare parts from Dubai Dealer to Ras al Khaimah',
         openGraph: {
           images: '/favicon.png',
           title:
             'Honda Car Parts in Ras al Khaimah from Dubai dealers Online |Emirates-car.com',
           description:
             'Buy Car Parts - Used, Genuine, OEM (Original parts) and Aftermarket Honda spare parts from Dubai Dealer to Ras al Khaimah',
           url: 'https://emirates-car.com/honda-parts/ras-al-khaimah',
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
             'Honda Car Parts in Ras al Khaimah from Dubai dealers Online | Emirates-car.com',
           url: 'https://emirates-car.com/honda-parts/ras-al-khaimah',
           description:
             'Buy Car Parts - Used, Genuine, OEM (Original parts) and Aftermarket Honda spare parts from Dubai Dealer to Ras al Khaimah',
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
         alternates: {
           canonical: 'https://emirates-car.com/honda-parts/ras-al-khaimah'
         },
         category: 'car parts',
         keywords:
           'honda accord spare parts sharjah, honda accord spare parts, honda accord 2008 brake pads, honda accord 2009 distributor, honda accord wheel, honda accord 2012 abs, honda accord engine, honda accord gearbox, honda accord axle, honda accord air filter, honda accord carburetor'
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
