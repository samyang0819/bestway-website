import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
export const locales = ['en'];
export const defaultLocale = 'en';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  // Static import for now
  const messages = await import('../messages/en.json');

  return {
    messages: messages.default,
    locale: locale as string
  };
});

export const routing = {
  locales,
  defaultLocale,
};