import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'ko', 'ja', 'zh'],
  defaultLocale: 'en',
  localeDetection: true
});

export const config = {
  matcher: [
    '/((?!api|_next|_vercel|.*\\..*|favicon\\.ico|robots\\.txt|sitemap\\.xml|manifest\\.json).*)',
    '/(en|ko|ja|zh)/:path*'
  ]
};
