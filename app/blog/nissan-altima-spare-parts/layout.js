import '../../../styles/globals.css';
import Navbar from '../../../components/nav';

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    themeColor: '#2563eb',
};

export const metadata = {
    title: 'Where to Buy Genuine Nissan Spare Parts in UAE | Emirates-car.com',
    description:
        'Looking for genuine, used, or aftermarket Nissan spare parts in the UAE? Emirates-car.com offers fast delivery across Dubai, Sharjah, and all emirates. Get a quote online now!',
    openGraph: {
        title: 'Where to Buy Genuine Nissan Spare Parts in UAE | Emirates-car.com',
        description:
            'Buy OEM, Used, or Aftermarket Nissan parts for Altima, Patrol, Sunny, and more. Fast delivery in UAE with expert support. Emirates-car.com',
        url: 'https://emirates-car.com/blog/nissan-spare-parts',
        image: 'https://emirates-car.com/img/car-logos/nissan.webp',
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
                alt: 'Nissan spare parts UAE',
            },
        ],
        locale: 'en_US',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Where to Buy Genuine Nissan Spare Parts in UAE',
        url: 'https://emirates-car.com/blog/nissan-spare-parts',
        description:
            'Order new, used, or aftermarket Nissan parts online with delivery in UAE. Emirates-car.com is your trusted car parts supplier.',
        images: ['https://emirates-car.com/img/blog/nissan-spare-parts.jpg'],
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
        <>{children}</>
    );
}
