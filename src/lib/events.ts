export type EventStyle = {
  slug: string;
  title: string;
  navLabel: string;
  eyebrow: string;
  headline: string;
  description: string;
  paragraphs: string[];
  highlights: string[];
  heroImage: string;
  heroAlt: string;
  mosaic: Array<{ src: string; alt: string; label?: string }>;
  seoDescription: string;
};

export const EVENT_NAV = [
  { label: 'Weddings', href: '/events/weddings' },
  { label: 'Galas & Fundraisers', href: '/events/galas-fundraisers' },
  { label: 'Private Events', href: '/events/private-events' },
  { label: 'Product Launches', href: '/events/product-launches' },
  { label: 'Special Events', href: '/events/special-events' },
  { label: 'Schedule a Tour', href: '/tour' },
] as const;

export const EVENT_STYLES: EventStyle[] = [
  {
    slug: 'weddings',
    title: 'Weddings',
    navLabel: 'Weddings',
    eyebrow: 'Love & Celebration',
    headline: 'Welcome to a place of love and celebration.',
    description:
      'At The Nichols, every love story deserves a beautiful beginning. Our loft-style venue is a canvas for unforgettable moments — romantic ceremonies, grand receptions, and intimate gatherings alike.',
    paragraphs: [
      "Whether you've dreamed of a romantic wedding, a grand ballroom affair, or an intimate celebration, we turn your vision into reality with picturesque backdrops, impeccable service, and a touch of magic in the air.",
      'Welcome to your perfect wedding destination — where love takes center stage, and your journey together begins in style at 2515 Morse Street between Montrose and River Oaks.',
    ],
    highlights: [
      'Ceremony & reception in one transformative space',
      '100-ft projection walls for custom wedding visuals',
      'Chiavari chairs, tables & lounge seating included',
      'Flexible layouts for up to 400 guests',
    ],
    heroImage: '/events/weddings/01-77b5cfe7-ac14-4afc-baea-17017193852e.png',
    heroAlt: 'Wedding celebration at The Nichols Venue in Houston',
    mosaic: [
      { src: '/events/weddings/02-img_1577.jpeg', alt: 'Wedding reception at The Nichols', label: 'Receptions' },
      { src: '/events/weddings/03-img_1578.jpeg', alt: 'Wedding tables and florals', label: 'Table Settings' },
      { src: '/events/weddings/04-img_1579.jpeg', alt: 'Romantic wedding lighting', label: 'Romantic Lighting' },
      { src: '/events/weddings/05-img_1547.jpeg', alt: 'Wedding dance floor', label: 'Dance Floor' },
      { src: '/events/weddings/06-img_1558.jpeg', alt: 'Wedding lounge seating', label: 'Lounge Moments' },
      { src: '/events/weddings/08-img_1576.jpeg', alt: 'Wedding ceremony setup', label: 'Ceremonies' },
      { src: '/events/weddings/09-img_1614.jpeg', alt: 'Bridal portrait space', label: 'Portrait Spaces' },
      { src: '/events/weddings/10-img_1546.jpeg', alt: 'Wedding dinner service', label: 'Dinner Service' },
      { src: '/events/weddings/12-open-bouquet.jpg', alt: 'Wedding bouquet detail', label: 'Floral Details' },
      { src: '/events/weddings/13-ballroom.jpg', alt: 'Ballroom wedding setup', label: 'Grand Affairs' },
      { src: '/events/weddings/14-htx22_51_1056423-163154933174927.jpeg', alt: 'Houston wedding celebration', label: 'Houston Weddings' },
      { src: '/events/weddings/11-img_1536.jpeg', alt: 'Evening wedding atmosphere', label: 'Evening Glow' },
    ],
    seoDescription:
      'Host your Houston wedding at The Nichols Venue in Montrose — a luxury loft with projection walls, flexible layouts, and included furnishings for ceremonies and receptions up to 400 guests.',
  },
  {
    slug: 'galas-fundraisers',
    title: 'Galas & Fundraisers',
    navLabel: 'Galas & Fundraisers',
    eyebrow: 'Elegance Meets Impact',
    headline: 'A premier gala and fundraiser venue in Houston.',
    description:
      'At The Nichols, elegance meets impact. Located in the heart of Montrose, our venue is designed for organizations and hosts looking to create a memorable evening that inspires generosity and leaves guests talking long after the night ends.',
    paragraphs: [
      "Whether you're planning a black-tie charity gala, a nonprofit fundraiser, an award gala, or a formal benefit dinner, our Houston event space provides the flexibility, technology, and atmosphere to bring your cause to life.",
      'With customizable layouts, immersive projection walls for donor storytelling and program presentations, and plug-and-play audio/visual capabilities, we create an environment built for connection, generosity, and unforgettable evenings.',
      'From intimate donor dinners to large-scale fundraising galas, The Nichols stands out as one of the most versatile gala venues in Houston.',
    ],
    highlights: [
      'Award galas & charity benefits',
      'Donor receptions & silent auctions',
      'Projection walls for storytelling & presentations',
      'Seated capacity for up to 350 gala guests',
    ],
    heroImage: '/events/galas-fundraisers/01-img_4875.jpeg',
    heroAlt: 'Gala and fundraiser at The Nichols Venue Houston',
    mosaic: [
      { src: '/events/galas-fundraisers/12-img_5781.jpeg', alt: 'Awards show at The Nichols', label: 'Award Galas' },
      { src: '/events/galas-fundraisers/02-img_1600.jpeg', alt: 'Donor reception seating', label: 'Donor Receptions' },
      { src: '/events/galas-fundraisers/03-img_1601.jpeg', alt: 'Fundraiser dinner tables', label: 'Fundraisers' },
      { src: '/events/galas-fundraisers/08-img_1553.jpeg', alt: 'Charity gala atmosphere', label: 'Charity Galas' },
      { src: '/events/galas-fundraisers/09-img_1554.jpeg', alt: 'Silent auction display', label: 'Silent Auctions' },
      { src: '/events/galas-fundraisers/10-img_1573.jpeg', alt: 'Benefit dinner setup', label: 'Benefit Dinners' },
      { src: '/events/galas-fundraisers/06-img_1610.jpeg', alt: 'Formal gala lighting', label: 'Black-Tie Nights' },
      { src: '/events/galas-fundraisers/07-img_1611.jpeg', alt: 'Gala stage presentation', label: 'Program Stages' },
      { src: '/events/galas-fundraisers/11-img_4832.jpeg', alt: 'Large-scale fundraising gala', label: 'Large-Scale Galas' },
      { src: '/events/galas-fundraisers/14-large-open.jpg', alt: 'Open floor gala layout', label: 'Open Layouts' },
      { src: '/events/galas-fundraisers/04-img_1606.jpeg', alt: 'Nonprofit fundraising evening', label: 'Nonprofit Events' },
      { src: '/events/galas-fundraisers/05-img_1607.jpeg', alt: 'Evening fundraiser cocktail hour', label: 'Cocktail Hours' },
    ],
    seoDescription:
      'Host charity galas, award dinners, donor receptions, and fundraisers at The Nichols Venue in Montrose, Houston — immersive projection walls and flexible layouts for up to 350 seated guests.',
  },
  {
    slug: 'private-events',
    title: 'Private Events',
    navLabel: 'Private Events',
    eyebrow: 'Your Vision, Our Stage',
    headline: 'A tailored space for extraordinary private gatherings.',
    description:
      'From proms and graduations to church celebrations and sports viewing parties, The Nichols offers a versatile Montrose venue that adapts to every private occasion.',
    paragraphs: [
      'Innovation meets inspiration in a loft-style space built for memorable nights. Customizable layouts, modern technology, and a dedicated events team help you impress guests and bring every detail to life.',
      'Discover a space that feels exclusive yet flexible — ready for dances, charity gatherings, milestone parties, and everything in between.',
    ],
    highlights: [
      'Proms, dances & graduations',
      'Church events & charity gatherings',
      'Sports viewing parties & fundraisers',
      'Custom lighting & A/V for every theme',
    ],
    heroImage: '/events/private-events/01-img_1545.jpeg',
    heroAlt: 'Private event at The Nichols Venue Houston',
    mosaic: [
      { src: '/events/private-events/02-img_1548.jpeg', alt: 'Prom and dance floor setup', label: 'Proms & Dances' },
      { src: '/events/private-events/03-img_1552.jpeg', alt: 'Church celebration venue', label: 'Church Events' },
      { src: '/events/private-events/05-img_1563.jpeg', alt: 'Charity private event', label: 'Charity Events' },
      { src: '/events/private-events/06-img_1570.jpeg', alt: 'Sports viewing party setup', label: 'Sports Viewing' },
      { src: '/events/private-events/07-img_1580.jpeg', alt: 'Graduation celebration', label: 'Graduations' },
      { src: '/events/private-events/08-img_1588.jpeg', alt: 'Private fundraiser evening', label: 'Fundraisers' },
      { src: '/events/private-events/04-img_1560.jpeg', alt: 'Private lounge gathering', label: 'Lounge Parties' },
      { src: '/events/private-events/09-img_1591.jpeg', alt: 'Private dinner celebration', label: 'Private Dinners' },
      { src: '/events/private-events/10-img_1595.jpeg', alt: 'Evening private event lighting', label: 'Evening Events' },
      { src: '/events/private-events/11-img_1605.jpeg', alt: 'Flexible private event layout', label: 'Flexible Layouts' },
      { src: '/events/private-events/12-img_1609.jpeg', alt: 'Milestone private celebration', label: 'Milestones' },
      { src: '/events/private-events/13-img_1540.jpeg', alt: 'Private cocktail reception', label: 'Cocktail Receptions' },
    ],
    seoDescription:
      'Book private events at The Nichols Venue in Houston — proms, graduations, church celebrations, sports viewing parties, and more in a transformative Montrose loft space.',
  },
  {
    slug: 'product-launches',
    title: 'Product Launches',
    navLabel: 'Product Launches',
    eyebrow: 'Brand Moments',
    headline: "Launch with impact in Houston's most transformative venue.",
    description:
      'The Nichols turns product reveals into unforgettable experiences. Surround guests with branded projection walls, flexible staging, and a loft atmosphere built for buzz.',
    paragraphs: [
      'Whether you are unveiling a new collection, hosting a press preview, or staging a high-energy brand activation, our 4,000 sq ft space and commercial-grade visuals put your product center stage.',
      'Plug-and-play A/V, customizable layouts, and a dedicated events team help your launch feel polished from first arrival to final applause.',
    ],
    highlights: [
      'Immersive branded projection environments',
      'Staging for demos, reveals & keynotes',
      'Press, VIP & full-guest launch formats',
      'Montrose location minutes from downtown',
    ],
    heroImage: '/events/product-launches/01-img_1583.jpeg',
    heroAlt: 'Product launch event at The Nichols Venue Houston',
    mosaic: [
      { src: '/events/product-launches/02-img_1584.jpeg', alt: 'Product reveal staging', label: 'Product Reveals' },
      { src: '/events/product-launches/03-img_1593.jpeg', alt: 'Brand activation lounge', label: 'Brand Activations' },
      { src: '/events/product-launches/04-img_1594.jpeg', alt: 'Press preview setup', label: 'Press Previews' },
      { src: '/events/product-launches/05-img_1599.jpeg', alt: 'Launch presentation stage', label: 'Keynote Stages' },
      { src: '/events/product-launches/06-img_1601.jpeg', alt: 'VIP product launch reception', label: 'VIP Receptions' },
      { src: '/events/product-launches/08-img_1554.jpeg', alt: 'Demo and display area', label: 'Demo Zones' },
      { src: '/events/product-launches/09-img_1567.jpeg', alt: 'Immersive projection launch', label: 'Immersive Walls' },
      { src: '/events/product-launches/10-img_1575.jpeg', alt: 'Corporate product launch dinner', label: 'Launch Dinners' },
      { src: '/events/product-launches/11-img_1535.jpeg', alt: 'Evening brand event', label: 'Evening Launches' },
      { src: '/events/product-launches/12-corporate.jpg', alt: 'Corporate launch networking', label: 'Networking' },
      { src: '/events/product-launches/07-img_1605.jpeg', alt: 'Flexible launch floor plan', label: 'Flexible Floor Plans' },
      { src: '/events/product-launches/01-img_1583.jpeg', alt: 'Product launch at The Nichols', label: 'Full-Venue Takeovers' },
    ],
    seoDescription:
      'Host product launches and brand activations at The Nichols Venue in Montrose, Houston — projection walls, flexible staging, and a luxury loft built for high-impact reveals.',
  },
  {
    slug: 'special-events',
    title: 'Special Events',
    navLabel: 'Special Events',
    eyebrow: 'Cherished Moments',
    headline: 'Turn cherished moments into extraordinary memories.',
    description:
      'Anniversary parties, engagement dinners, birthdays, quinceañeras, and family celebrations find a warm, elegant home at The Nichols — a versatile canvas for life’s most meaningful gatherings.',
    paragraphs: [
      'We understand that special events are about you, your vision, and your connections. From the moment you step through our doors, you sense warmth, elegance, and exclusivity.',
      'It is where your imagination meets our expertise — and where celebrations become extraordinary with custom lighting, flexible layouts, and a dedicated events team.',
    ],
    highlights: [
      'Engagements & anniversary parties',
      'Birthdays & quinceañeras',
      'Bar mitzvahs & baby showers',
      'Family reunions & milestone nights',
    ],
    heroImage: '/events/special-events/01-img_1589.jpeg',
    heroAlt: 'Special celebration at The Nichols Venue Houston',
    mosaic: [
      { src: '/events/special-events/02-img_1551.jpeg', alt: 'Engagement party setup', label: 'Engagements' },
      { src: '/events/special-events/11-bday-b7f1986.jpg', alt: 'Birthday and quinceañera celebration', label: 'Birthdays / Quinceañeras' },
      { src: '/events/special-events/03-img_1557.jpeg', alt: 'Bar mitzvah celebration', label: 'Bar Mitzvahs' },
      { src: '/events/special-events/04-img_1558.jpeg', alt: 'Family reunion gathering', label: 'Family Reunions' },
      { src: '/events/special-events/05-img_1568.jpeg', alt: 'Anniversary party dining', label: 'Anniversary Parties' },
      { src: '/events/special-events/06-img_1592.jpeg', alt: 'Baby shower celebration', label: 'Baby Showers' },
      { src: '/events/special-events/12-cocktail-hour.jpg', alt: 'Cocktail hour celebration', label: 'Cocktail Hours' },
      { src: '/events/special-events/07-img_1602.jpeg', alt: 'Milestone birthday party', label: 'Milestone Birthdays' },
      { src: '/events/special-events/08-img_1608.jpeg', alt: 'Special event lounge seating', label: 'Lounge Celebrations' },
      { src: '/events/special-events/09-img_1613.jpeg', alt: 'Evening special event lighting', label: 'Evening Parties' },
      { src: '/events/special-events/10-img_1530.jpeg', alt: 'Intimate special dinner', label: 'Intimate Dinners' },
      { src: '/events/special-events/13-party.png', alt: 'Party atmosphere at The Nichols', label: 'Celebration Nights' },
    ],
    seoDescription:
      'Celebrate engagements, birthdays, quinceañeras, anniversaries, and family reunions at The Nichols Venue in Montrose, Houston — a luxury loft for life’s special moments.',
  },
];

export function getEventBySlug(slug: string) {
  return EVENT_STYLES.find((event) => event.slug === slug);
}

export function getAllEventSlugs() {
  return EVENT_STYLES.map((event) => event.slug);
}
