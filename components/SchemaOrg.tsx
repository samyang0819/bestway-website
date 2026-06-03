'use client'

export default function SchemaOrg() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'BestWay Consulting',
    url: 'https://bestwayconsulting.com',
    logo: 'https://bestwayconsulting.com/logo.png',
    description: 'Professional immigration consulting and legal services for Canada, Australia, and beyond',
    image: 'https://bestwayconsulting.com/logo.png',
    telephone: '+1-604-XXX-XXXX',
    email: 'info@bestwayconsulting.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Vancouver, BC',
      addressCountry: 'CA',
    },
    priceRange: '$$',
    areaServed: ['CA', 'US', 'AU', 'JP', 'KR', 'CN'],
    availableLanguage: ['en', 'ja', 'ko', 'zh'],
    sameAs: [
      'https://www.facebook.com/bestwayconsulting',
      'https://www.linkedin.com/company/bestwayconsulting',
      'https://www.twitter.com/bestwayconsult',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '250',
      bestRating: '5',
      worstRating: '1',
    },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Professional Certification',
        name: 'Licensed Immigration Consultant',
      },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Immigration Consulting Services',
    provider: {
      '@type': 'LocalBusiness',
      name: 'BestWay Consulting',
      url: 'https://bestwayconsulting.com',
    },
    description: 'Expert immigration consulting including visa applications, work permits, study visas, and permanent residence',
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 49.2827,
        longitude: -123.1207,
      },
      geoRadius: 10000,
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What visa services do you offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer comprehensive visa services including study visas, work permits, family sponsorship, and permanent residence applications for Canada and Australia.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does the immigration process take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Processing times vary depending on the visa type and individual circumstances. We provide estimated timelines during your consultation.',
        },
      },
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://bestwayconsulting.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://bestwayconsulting.com/#services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Contact',
        item: 'https://bestwayconsulting.com/#contact',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
