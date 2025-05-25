// app/robots.ts (or wherever your MetadataRoute is set up)
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: '/admin/', 
      },
      {
        userAgent: ['Applebot', 'Bingbot'],
        disallow: '/',
      },
    ],
    sitemap: 'https://cms.surajv.me/sitemap.xml', 
  }
}
