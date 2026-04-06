import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/auth/', '/dashboard/', '/api/'],
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: ['/auth/', '/dashboard/', '/api/'],
      },
      {
        userAgent: 'OAI-SearchBot',
        allow: '/',
        disallow: ['/auth/', '/dashboard/', '/api/'],
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
        disallow: ['/auth/', '/dashboard/', '/api/'],
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: ['/auth/', '/dashboard/', '/api/'],
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: ['/auth/', '/dashboard/', '/api/'],
      },
      {
        userAgent: 'Applebot-Extended',
        allow: '/',
        disallow: ['/auth/', '/dashboard/', '/api/'],
      },
      {
        // ByteDance/TikTok AI — niet relevant voor B2B healthcare
        userAgent: 'Bytespider',
        disallow: '/',
      },
    ],
    sitemap: 'https://www.zentrack.nl/sitemap.xml',
  }
}
