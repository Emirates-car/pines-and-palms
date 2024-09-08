export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/'
    },
    sitemap: [
      'https://emirates-car.com/sitemap.xml',
      'https://emirates-car.com/xmlfile/sitemap.xml'
    ]
  };
}