import type { Metadata } from 'next';
import { COMPANY } from './data';

export const SITE_URL = 'https://thenicholsvenue.com';

export const SEO = {
  title: 'The Nichols Venue | Luxury Houston Event Space for Weddings & Corporate Events',
  description:
    'The Nichols Venue at 2515 Morse Street in Houston, TX is a luxury loft-style event space for up to 400 guests. 100-ft projection walls, 16-ft gallery walls, and all-inclusive furnishings for weddings, galas, and corporate events in Montrose.',
  keywords: [
    'The Nichols Venue Houston',
    'Houston wedding venue Montrose',
    'River Oaks event space',
    'luxury event venue Houston',
    'corporate event space Houston',
    'projection wall venue Houston',
    'loft wedding venue Houston',
    '2515 Morse Street event venue',
    'Houston gala venue',
  ],
};

export function pageMetadata({
  title,
  description,
  path,
  noIndex = false,
}: {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${SITE_URL}${path === '/' ? '' : path}`;
  const fullTitle = `${title} | ${COMPANY.name}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: COMPANY.name,
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: '/hero.jpg',
          width: 1200,
          height: 800,
          alt: `${COMPANY.name} — luxury event space at 2515 Morse Street, Houston`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function venueJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['EventVenue', 'LocalBusiness'],
    '@id': `${SITE_URL}/#venue`,
    name: COMPANY.name,
    alternateName: 'The Nichols',
    description: SEO.description,
    url: SITE_URL,
    image: [`${SITE_URL}/hero.jpg`, `${SITE_URL}/gallery/gallery-01.jpg`],
    telephone: COMPANY.phoneHref,
    email: COMPANY.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY.address,
      addressLocality: 'Houston',
      addressRegion: 'TX',
      postalCode: '77019',
      addressCountry: 'US',
    },
    areaServed: ['Montrose', 'River Oaks', 'Houston', 'Harris County', 'Texas'],
    maximumAttendeeCapacity: COMPANY.maxGuests,
    priceRange: '$$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: String(COMPANY.googleRating),
      reviewCount: String(COMPANY.reviewCount),
      bestRating: '5',
    },
    hasMap: COMPANY.googleUrl,
    sameAs: [COMPANY.googleUrl, COMPANY.website, COMPANY.instagram].filter(Boolean),
  };
}
