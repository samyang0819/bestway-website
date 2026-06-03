import { ReactNode } from 'react'
import Script from 'next/script'

interface AnalyticsProps {
  children: ReactNode
}

export default function Analytics({ children }: AnalyticsProps) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'

  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      {/* Event tracking helper */}
      <Script
        id="event-tracking"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.trackEvent = function(eventName, eventData = {}) {
              if (typeof gtag !== 'undefined') {
                gtag('event', eventName, eventData);
              }
              console.log('Event tracked:', eventName, eventData);
            };

            // Track form submissions
            document.addEventListener('submit', function(e) {
              if (e.target && e.target.closest('form')) {
                window.trackEvent('form_submission', {
                  form_id: e.target.id || 'contact_form',
                });
              }
            });

            // Track button clicks
            document.addEventListener('click', function(e) {
              const target = e.target.closest('a[href^="#"]');
              if (target) {
                const href = target.getAttribute('href');
                window.trackEvent('navigation_click', {
                  section: href,
                });
              }
            });
          `,
        }}
      />

      {children}
    </>
  )
}
