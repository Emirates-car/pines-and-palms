export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    themeColor: '#2563eb',
};
export const metadata = {
    title:
        'Luxury Cars Auto Spare Parts in UAE - New | Used | Genuine | Aftermarket | OEM from Dubai Dealers',
    description:
        'Buy Online and Get delivered Luxury branded Used, New, Genuine / Original / OEM, Aftermarket auto spare parts Online in UAE Body parts, Interior and exterior parts, suspension parts, headlight, fog lights and other lighting parts, performance parts and more',
    openGraph: {
        images: '/favicon.png',
        title:
            'Online Luxury car brands Auto Spare Parts in UAE - New | Used | Genuine | Aftermarket | OEM',
        description:
            'Buy Online and Get delivered Luxury branded Used, New, Genuine / Original / OEM, Aftermarket auto spare parts Online in UAE Body parts, Interior and exterior parts, suspension parts, headlight, fog lights and other lighting parts, performance parts and more',
        url: 'https://www.emirates-car.com/luxury-car-parts-online',
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
        title:
            'Luxury Cars Auto Spare Parts in UAE - New | Used | Genuine | Aftermarket | OEM from Dubai Dealers',
        url: 'https://www.emirates-car.com/country-vehicles-spare-parts/american-auto-spare-parts',
        description:
            'Buy Online and Get delivered Luxury branded Used, New, Genuine / Original / OEM, Aftermarket auto spare parts Online in UAE Body parts, Interior and exterior parts, suspension parts, headlight, fog lights and other lighting parts, performance parts and more',
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
    alternates: {
        canonical: `https://emirates-car.com/spare-parts/american-auto-spare-parts}`,
    },
    category: 'car parts',
    keyword:
        'luxury car parts online, luxury auto spare parts, luxury car spare parts online in uae, luxury car spare parts, luxury car parts dealers in dubai, luxury auto parts',
};

export default function RootLayout({ children }) {
    return (
        <>{children}</>
    );
}
