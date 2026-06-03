import { ReactNode } from 'react';
import { Metadata } from 'next';
import './globals.css';
import LiveChatWidget from '@/components/LiveChatWidget';
import FloatingActionButton from '@/components/FloatingActionButton';

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  metadataBase: new URL('https://bestwayconsulting.com'),
  title: {
    default: 'BestWay Consulting - Professional Immigration Services',
    template: '%s | BestWay Consulting',
  },
  description: 'Professional immigration consulting and legal services. Expert guidance for study visas, work permits, and permanent residence in Canada and Australia. Serving clients globally.',
  keywords: [
    'immigration consulting',
    'visa services',
    'immigration lawyer',
    'study visa',
    'work permit',
    'permanent residence',
    'Canadian immigration',
    'Australian immigration',
    'visa application',
    'immigration agency',
    'professional immigration services',
    'immigration consultant',
    'visa consultant',
  ],
  authors: [{ name: 'BestWay Consulting' }],
  creator: 'BestWay Consulting',
  publisher: 'BestWay Consulting',
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bestwayconsulting.com',
    siteName: 'BestWay Consulting',
    title: 'BestWay Consulting - Professional Immigration Services',
    description: 'Expert immigration consulting and visa services for study, work, and permanent residence in Canada, Australia, and more.',
    images: [
      {
        url: 'https://bestwayconsulting.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'BestWay Consulting - Professional Immigration Services',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bestwayconsult',
    title: 'BestWay Consulting - Professional Immigration Services',
    description: 'Expert immigration consulting and visa services for Canada, Australia, and beyond.',
    images: ['https://bestwayconsulting.com/logo.png'],
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
    other: [
      {
        rel: 'icon',
        url: '/logo.png',
      },
    ],
  },
  alternates: {
    canonical: 'https://bestwayconsulting.com',
    languages: {
      'en-US': 'https://bestwayconsulting.com/en',
      'en': 'https://bestwayconsulting.com/en',
      'ko-KR': 'https://bestwayconsulting.com/ko',
      'zh-CN': 'https://bestwayconsulting.com/zh',
      'ja-JP': 'https://bestwayconsulting.com/ja',
    },
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="theme-color" content="#0066CC" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="BestWay Consulting" />
        <meta name="apple-mobile-web-app-title" content="BestWay Consulting" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href="https://bestwayconsulting.com" />
        <link rel="alternate" hrefLang="en" href="https://bestwayconsulting.com/en" />
        <link rel="alternate" hrefLang="ko" href="https://bestwayconsulting.com/ko" />
        <link rel="alternate" hrefLang="zh" href="https://bestwayconsulting.com/zh" />
        <link rel="alternate" hrefLang="ja" href="https://bestwayconsulting.com/ja" />
        <link rel="alternate" hrefLang="x-default" href="https://bestwayconsulting.com" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body>
        {children}
        <FloatingActionButton />
        <LiveChatWidget />
      </body>
    </html>
  );
}
