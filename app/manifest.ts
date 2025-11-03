import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Suraj Enterprises - Professional Construction Services',
    short_name: 'Suraj Enterprises',
    description: 'Leading construction contractor with 20+ years of experience in bar bending, shuttering, and concrete work. Trusted by India\'s top construction companies.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#d97706',
    icons: [
      {
        src: '/logo.png',
        sizes: 'any',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/logo.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/logo.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      }
    ],
    categories: ['construction', 'business', 'professional services'],
    orientation: 'any'
  }
}