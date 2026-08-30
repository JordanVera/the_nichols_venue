export type PricingPackage = {
  id: string;
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export const VENUE_PACKAGES: PricingPackage[] = [
  {
    id: 'full-wedding',
    name: 'Full Wedding',
    price: 'Contact Us',
    description:
      'Ceremony and reception at our luxury Montrose event space — projection walls, gallery walls, and included furnishings.',
    highlighted: true,
    features: [
      'Two-level loft layout',
      '100-ft projection walls',
      'Chiavari chairs & tables included',
      'Up to 400 guests',
    ],
  },
  {
    id: 'corporate',
    name: 'Corporate Events',
    price: 'Contact Us',
    description:
      'Product launches, galas, and corporate celebrations with state-of-the-art A/V and flexible layout.',
    features: [
      'Commercial-grade projectors',
      'Custom lighting in any color',
      'Lounge & cocktail seating',
      'Dedicated events team',
    ],
  },
  {
    id: 'private-events',
    name: 'Private Celebrations',
    price: 'Contact Us',
    description:
      'Birthdays, galas, fundraisers, art shows, and milestone celebrations in a fully transformable space.',
    features: [
      '4,000 sq ft event space',
      '16-ft gallery walls',
      'Montrose · River Oaks location',
      'All-inclusive furnishings',
    ],
  },
];

export const ADD_ONS: PricingPackage[] = [];

export const PRICING_NOTES = [
  'Peak season dates book well in advance — contact us early for availability.',
  'Every rental includes black Chiavari chairs, tables, lounge sofas, and cocktail tables.',
  'Projection walls and gallery walls available for custom visual experiences.',
  'Contact us to schedule a private tour of The Nichols Venue.',
];
