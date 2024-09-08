import '../../styles/globals.css';
import Navbar from '../nav';
import Head from 'next/head';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#2563eb'
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Blog | Emirates-car.com</title>
        <meta property="og:title" content="Blog | Emirates-car.com" />
        <meta property="og:site_name" content="Emirates-car" />
        <meta property="og:url" content="https://www.emirates-car.com" />

        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://emirates-car.com/img/car-spare-parts.png"
        />
        <meta
          property="twitter:url"
          content="https://www.emirates-car.com/blog"
        />
        <meta property="twitter:title" content="Blog | Emirates-car.com" />
        <meta
          property="twitter:image"
          content="https://emirates-car.com/img/car-spare-parts.png"
        />
      </Head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
