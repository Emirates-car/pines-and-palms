import '../../styles/globals.css';
import Navbar from "../nav";

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#2563eb'
};

export const metadata = {
         title:
           'Auto Spare Parts Order Online in UAE from Dubai dealers |Emirates-car.com',
         description:
           'Buy Online and Get delivered Used, New, Genuine / Original / OEM, Aftermarket auto spare parts Online in UAE for German, American, Korean, Japanese models',
         openGraph: {
           images: '/favicon.png',
           title:
             'Auto Spare Parts Order Online in UAE from Dubai dealers |Emirates-car.com',
           description:
             'Buy Online and Get delivered Used, New, Genuine / Original / OEM, Aftermarket auto spare parts Online in UAE for German, American, Korean, Japanese models',
           url: 'https://www.emirates-car.com/search-by-make',
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
             'Auto Spare Parts Order Online in UAE from Dubai dealers |Emirates-car.com',
           url: `https://emirates-car.com/search-by-make`,
           description:
             'Buy Online and Get delivered Used, New, Genuine / Original / OEM, Aftermarket auto spare parts Online in UAE for German, American, Korean, Japanese models',
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
           canonical: `https://emirates-car.com/search-by-make`
         },
         keywords:
           'how to buy auto spare parts in uae, how to search for auto spare parts in dubai sharjah, how to search for auto spare parts in dubai online, dubai spare parts market, dubai spare parts market online, auto spare parts sharjah, auto spare parts wholesalers dubai, Whats the best online auto parts store, parts market uae'
       };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
