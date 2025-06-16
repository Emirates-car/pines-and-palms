import '../styles/globals.css';
import Navbar from '../components/nav';
import Script from 'next/script';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#2563eb',
};

export const metadata = {
  title:
    'Auto Spare Parts Order Online in UAE from Dubai dealers | Emirates-car.com',
  description:
    'Buy Car spare parts Online and Get delivered Used, New, Genuine / Original / OEM, Aftermarket auto spare parts Online in UAE for German, American, Korean, Japanese models',
  metadataBase: new URL('https://www.emirates-car.com'),
  manifest: 'https://www.emirates-car.com/manifest.json',
  verification: {
    google: '2dbXrKrxCBjzz1bLwaw_6nd4YEhhviwPLiGq6fLXPoU',
    yandex: '1a59e5a3d5ee0eeb',
    yahoo: 'yahoo',
    other: {
      me: ['emiratesautomobileparts@gmail.com', 'https://www.emirates-car.com'],
    },
  },
  alternates: {
    canonical: 'https://emirates-car.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title:
      'Auto Spare Parts Order Online in UAE from Dubai dealers | Emirates-car.com',
    description:
      'Buy Online and Get delivered Used, New, Genuine / Original / OEM, Aftermarket auto spare parts Online in UAE for German, American, Korean, Japanese models',
    url: 'https://www.emirates-car.com',
    siteName: 'Emirates Auto Parts',
    images: [
      {
        url: 'https://www.emirates-car.com/icon-192x192.png',
        width: 192,
        height: 192,
      },
      {
        url: 'https://www.emirates-car.com/icons/icon-512x512.png',
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
    title: 'Car spare parts',
    description:
      'Buy Online and Get delivered Used, New, Genuine / Original / OEM, Aftermarket auto spare parts Online in UAE for German, American, Korean, Japanese models',
    images: 'https://www.emirates-car.com/favicon.png',
  },
  icons: {
    icon: 'https://www.emirates-car.com/favicon.png',
    shortcut: 'https://www.emirates-car.com/icons/icon-96x96.png',
    apple: 'https://www.emirates-car.com/icons/icon-192x192.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: 'https://www.emirates-car.com/icons/icon-152x152.png',
    },
  },
  category: 'car parts',
  keywords:
    'spare parts dealers in dubai, spare parts online, auto spare parts online, best auto parts, auto spare parts in dubai, auto spare parts uae, honda accord parts, used engine parts, headlight parts, genuine parts, aftermarket spare parts, bumper parts, sensors, camera',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script
        id="myscript6"
        dangerouslySetInnerHTML={{
          __html: `https://cdnjs.cloudflare.com/ajax/libs/admin-lte/3.2.0-rc/js/adminlte.min.js`,
        }}
        integrity="sha512-pbrNMLSckfh8yEOr2o1RT+4zMU3Sj7+zP3BOY6nFVI/FLnjTRyubNppLbosEt4nvLCcdsEa8tmKhH3uqOYFXKg=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <Script
        id="myscript5"
        src="https://polyfill.io/v3/polyfill.min.js?features=default"
        async
      ></Script>
      <Script
        language="javascript"
        src={`https://www.exactseek.com/remote-submit.js`}
      />
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/6210ae28a34c2456412714f6/1fs8igkmc';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
              })();
              `,
        }}
      ></script>
      <script
        id="myscript"
        dangerouslySetInnerHTML={{
          __html: `
              (function(c,l,a,r,i,t,y){        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);    })(window, document, "clarity", "script", "c2136u1t6f");
              `,
        }}
      />
      <script
        id="myscript2"
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-3E8C09YD12', {
                  page_path: window.location.pathname,
                });
              `,
        }}
      />
      <script
        id="myscript3"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-3E8C09YD12`}
      />
      <body className="font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
