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
           'Flooded Cars Checklist: Essential Car Parts to Check |  Emirates-car.com',
         description:
           'Buy Online and Get delivered Used, New, Genuine / Original / OEM, Aftermarket auto spare parts Online in UAE for Starter, Battery, Oxygen sensor, Fusebox, Engine, Piston ',
         openGraph: {
           images: '/favicon.png',
           title:
             'Flooded Cars Checklist: Essential Car Parts to Check |  Emirates-car.com',
           description:
             'Buy Online and Get delivered Used, New, Genuine / Original / OEM, Aftermarket auto spare parts Online in UAE for Starter, Battery, Oxygen sensor, Fusebox, Engine, Piston ',
           url:
             'https://emirates-car.com/blog/car-parts-you-might-need-to-check-for-your-flooded-cars',
           image: 'https://emirates-car.com/img/flooded-cars.png',
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
             'Flooded Cars Checklist: Essential Car Parts to Check |  Emirates-car.com',
           url:
             'https://emirates-car.com/blog/car-parts-you-might-need-to-check-for-your-flooded-cars',
           description:
             'Buy Online and Get delivered Used, New, Genuine / Original / OEM, Aftermarket auto spare parts Online in UAE for Starter, Battery, Oxygen sensor, Fusebox, Engine, Piston ',
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
         category: 'car parts'
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
