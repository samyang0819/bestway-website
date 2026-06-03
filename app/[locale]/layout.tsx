import { ReactNode } from 'react';
import { Metadata, Viewport } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';
import { ExitIntentPopup } from '@/components/ExitIntentPopup';

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

const localeMetadata: Record<string, { title: string; description: string; locale: string }> = {
  en: {
    title: 'BestWay Consulting - Professional Immigration Services',
    description: 'Expert immigration consulting and legal services. Professional guidance for study visas, work permits, and permanent residence.',
    locale: 'en_US',
  },
  ko: {
    title: 'BestWay Consulting - 전문 이민 서비스',
    description: '전문 이민 컨설팅 및 법률 서비스. 유학 비자, 취업 허가, 영구 거주권에 대한 전문적인 안내',
    locale: 'ko_KR',
  },
  ja: {
    title: 'BestWay Consulting - プロフェッショナル移民サービス',
    description: 'プロフェッショナルな移民コンサルティングおよび法務サービス。学生ビザ、労働許可、永住権のための専門的なガイダンス。',
    locale: 'ja_JP',
  },
  pa: {
    title: 'BestWay Consulting - ਪ੍ਰਾਫ਼ੈਸ਼ਨਲ ਇਮੀਗ੍ਰੇਸ਼ਨ ਸੇਵਾਵਾਂ',
    description: 'ਪ੍ਰਾਫ਼ੈਸ਼ਨਲ ਇਮੀਗ੍ਰੇਸ਼ਨ ਪਰਾਮਰਸ਼ ਅਤੇ ਕਾਨੂਨੀ ਸੇਵਾਵਾਂ।',
    locale: 'pa_IN',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 5.0,
};

// ISR: Revalidate every 24 hours (86400 seconds)
export const revalidate = 86400;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const meta = localeMetadata[locale] || localeMetadata.en;

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      locale: meta.locale,
    },
    alternates: {
      canonical: `https://bestwayconsulting.com/${locale}`,
      languages: {
        'en-US': 'https://bestwayconsulting.com/en',
        'ko-KR': 'https://bestwayconsulting.com/ko',
        'ja-JP': 'https://bestwayconsulting.com/ja',
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  let messages;
  
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    messages = {};
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ScrollProgress />
      <Navigation />
      <LanguageSwitcher />
      <ExitIntentPopup />
      <main>{children}</main>
      <Footer />
      <BackToTop />
    </NextIntlClientProvider>
  );
}