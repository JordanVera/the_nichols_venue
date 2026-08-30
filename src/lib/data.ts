export const COMPANY = {
  name: 'The Nichols Venue',
  shortName: 'The Nichols',
  tagline: 'Luxury Event Space in Houston',
  phone: '(832) 939-1661',
  phoneHref: '+18329391661',
  email: 'Events@thenicholsvenue.com',
  address: '2515 Morse Street',
  city: 'Houston, TX 77019',
  serviceArea: 'Montrose · River Oaks · Houston',
  maxGuests: 400,
  instagram: 'https://www.instagram.com/thenicholsvenue',
  instagramHandle: '@thenicholsvenue',
  facebook: '',
  website: 'https://thenicholsvenue.com/',
  googleUrl:
    'https://www.google.com/maps/search/?api=1&query=The+Nichols+Venue+2515+Morse+Street+Houston+TX+77019',
  googleReviewsUrl:
    'https://www.google.com/maps/search/The+Nichols+Venue+2515+Morse+Street+Houston+TX+77019+reviews',
  googleRating: 4.8,
  reviewCount: 289,
};

export const ACCENT = '#00b7cc';
export const ACCENT_HOVER = '#0099aa';

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Events', href: '/events' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'interior', label: 'Interior' },
  { id: 'events', label: 'Events' },
  { id: 'exterior', label: 'Venue' },
] as const;

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number]['id'];

export { GALLERY_IMAGES, type GalleryImage } from './gallery-images';

export const ABOUT_CONTENT = {
  intro:
    "The Nichols is Houston's most unique luxury event space — a two-level, loft-style venue that hosts up to 400 guests and transforms completely for every celebration.",
  body: 'Located at 2515 Morse Street between Montrose and River Oaks, our 4,000 sq ft space features 100 feet of floor-to-ceiling projection walls, 16-foot gallery walls, and state-of-the-art lighting in any color imaginable — so your event can feel like anywhere in the world without leaving Houston.',
  evolution:
    'From weddings and galas to product launches and corporate celebrations, The Nichols brings every vision to life with included Chiavari chairs, round and rectangle tables, lounge seating, cocktail tables, and a dedicated events team.',
};

export const VENUE_HIGHLIGHTS = [
  {
    title: '100-Foot Projection Walls',
    description:
      'Floor-to-ceiling commercial-grade projectors and 16-foot gallery walls let you surround guests with custom visuals — from Santorini sunsets to branded backdrops.',
  },
  {
    title: '4,000 Sq Ft · Two Levels',
    description:
      'A loft-style open floor plan with flexible layout options for up to 400 guests (350 seated for galas) and complete venue transformation for every event type.',
  },
  {
    title: 'All-Inclusive Furnishings',
    description:
      'Black Chiavari chairs, round and rectangle tables, plush lounge sofas, cocktail tables, and coffee tables are included with every rental.',
  },
  {
    title: 'Montrose · River Oaks',
    description:
      "2515 Morse Street — minutes from downtown, the Medical Center, and Houston's best hotels, restaurants, and nightlife.",
  },
];

export const AMENITIES = [
  '4,000 Sq Ft Event Space',
  '100-Ft Projection Walls',
  '16-Ft Gallery Walls',
  '400 Guest Capacity',
  'Chiavari Chairs & Tables',
  'Lounge & Cocktail Seating',
  'State-of-the-Art Lighting',
  'Dedicated Events Team',
];

export const REVIEWS = [
  {
    id: 1,
    name: 'Wedding Client',
    event: 'Wedding · Google Review',
    rating: 5,
    text: 'The Nichols exceeded every expectation. The projection walls created the most stunning atmosphere — our guests could not stop talking about how unique and beautiful the space was.',
  },
  {
    id: 2,
    name: 'Corporate Client',
    event: 'Corporate Event · Google Review',
    rating: 5,
    text: 'Perfect venue for our product launch. The team was professional, the A/V capabilities are incredible, and the Montrose location was convenient for all our guests.',
  },
  {
    id: 3,
    name: 'Wedding Client',
    event: 'Wedding · Google Review',
    rating: 5,
    text: 'We fell in love with The Nichols the moment we walked in. The loft-style space, included furnishings, and flexible layout made planning so much easier — and the photos are breathtaking.',
  },
  {
    id: 4,
    name: 'Google Reviewer',
    event: 'Gala · Google Review',
    rating: 5,
    text: 'Hosted our annual gala here for 350 seated guests and it was flawless. The projection walls and lighting transformed the room, and the staff handled every detail with care.',
  },
  {
    id: 5,
    name: 'Google Reviewer',
    event: 'Private Event · Google Review',
    rating: 5,
    text: 'A truly one-of-a-kind Houston venue. The combination of luxury finishes, cutting-edge visuals, and prime River Oaks location makes The Nichols stand out from every other event space in the city.',
  },
  {
    id: 6,
    name: 'Google Reviewer',
    event: 'Wedding · Google Review',
    rating: 5,
    text: 'From tour to teardown, the Nichols team was responsive and thoughtful. Our wedding felt completely custom — the venue adapts to your vision unlike anywhere else we toured in Houston.',
  },
] as const;

export type FaqItem = {
  question: string;
  answer: string;
  link?: { href: string; label: string };
};

export const FAQS: FaqItem[] = [
  {
    question: 'What are your rental rates?',
    answer:
      'Pricing varies by day, season, and event type. The Nichols offers packages for weddings, corporate events, galas, and private celebrations — contact us for current rates and availability.',
    link: { href: '/contact', label: 'Request Pricing' },
  },
  {
    question: 'How many guests can The Nichols accommodate?',
    answer:
      'Our two-level loft venue hosts up to 400 guests, with seated capacity of up to 350 for galas and formal dinners. Layout and configuration affect final capacity — schedule a tour to plan your floor plan.',
  },
  {
    question: 'Where is The Nichols located?',
    answer:
      'We are located at 2515 Morse Street, Houston, TX 77019 — between Montrose and River Oaks, minutes from downtown Houston and the Texas Medical Center.',
  },
  {
    question: 'How do I schedule a tour?',
    answer:
      'Contact us to schedule an in-person walkthrough of the venue. We recommend touring early — peak dates book well in advance.',
    link: { href: '/tour', label: 'Schedule a Tour' },
  },
  {
    question: 'What is included with my rental?',
    answer:
      'Every rental includes black Chiavari chairs, round and rectangle tables, black plush lounge sofas, cocktail tables, and coffee tables. Our projection walls and gallery walls are available for custom visual experiences.',
  },
  {
    question: 'What types of events do you host?',
    answer:
      'The Nichols hosts weddings, corporate events, galas and fundraisers, product launches, art and fashion shows, premier parties, and private celebrations of all kinds.',
  },
  {
    question: 'What makes The Nichols unique?',
    answer:
      'Our 100 feet of floor-to-ceiling projection walls and 16-foot gallery walls powered by commercial-grade projectors allow your celebration to transform visually — surround guests with custom imagery and lighting in any color.',
  },
  {
    question: 'Is parking available?',
    answer:
      'Contact our events team for current parking arrangements and guest arrival details for your event date.',
    link: { href: '/contact', label: 'Contact Us' },
  },
];

export { VIDEOS_DATA as VIDEOS, EMBEDS_DATA as EMBEDS } from './videos';
