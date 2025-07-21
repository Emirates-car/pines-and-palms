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
    title: 'Volkswagen spare parts in UAE | Emirates-car.com',
    description:
        'Buy Online and Get delivered Used, New, Genuine / Original / OEM, Aftermarket volkswagen spare parts Online in UAE Body parts, Interior and exterior parts, suspension parts, headlight, fog lights and other lighting parts, performance parts and more',
    openGraph: {
        images: '/favicon.png',
        title: 'Volkswagen spare parts in UAE | Emirates-car.com',
        description:
            'Buy Online and Get delivered Used, New, Genuine / Original / OEM, Aftermarket volkswagen spare parts Online in UAE Body parts, Interior and exterior parts, suspension parts, headlight, fog lights and other lighting parts, performance parts and more',
        url: 'https://emirates-car.com/volkswagen-spare-parts-uae',
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
        title: 'Volkswagen spare parts in UAE | Emirates-car.com',
        url: 'https://emirates-car.com/volkswagen-spare-parts-uae',
        description:
            'Buy Online and Get delivered Used, New, Genuine / Original / OEM, Aftermarket volkswagen spare parts Online in UAE Body parts, Interior and exterior parts, suspension parts, headlight, fog lights and other lighting parts, performance parts and more',
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
    alternates: {
        canonical: `https://emirates-car.com/volkswagen-spare-parts-uae`,
    },
    keywords:
        'volkswagen spare parts in uae, volkswagen part dubai, volkswagen touareg parts, volkswagen tiguan parts uae, volkswagen passat parts, volkswagen jetta, volkswagen golf parts uae',
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
