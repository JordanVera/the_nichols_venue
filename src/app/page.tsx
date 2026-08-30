import Hero from '@/components/home/Hero';
import Welcome from '@/components/home/Welcome';
import GalleryTeaser from '@/components/home/GalleryTeaser';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CtaStrip from '@/components/home/CtaStrip';
import { SEO } from '@/lib/seo';
import { AMENITIES, COMPANY } from '@/lib/data';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  Heart,
  MapPin,
  Sparkles,
  Star,
  Trees,
  UtensilsCrossed,
  Users,
} from 'lucide-react';

export const metadata: Metadata = {
  title: { absolute: SEO.title },
  description: SEO.description,
  alternates: { canonical: '/' },
};

const signatureHighlights = [
  {
    title: 'Historic Character, Modern Comfort',
    description:
      'A 4,000 sq ft loft-style venue with 100-ft projection walls, gallery walls, and state-of-the-art lighting.',
    icon: Sparkles,
  },
  {
    title: 'Indoor + Outdoor Flexibility',
    description:
      'Flexible two-level layout and included furnishings allow seamless transitions for weddings, galas, and corporate events.',
    icon: Trees,
  },
  {
    title: 'Photo-Perfect From Every Angle',
    description:
      'Floor-to-ceiling visuals, custom lighting, and a Montrose location deliver unforgettable events all night long.',
    icon: Camera,
  },
];

const planningFlow = [
  'Share your date, guest count, and vision',
  'Tour the venue and review layout options',
  'Finalize your event package and timeline',
  'Celebrate with confidence on event day',
];

const idealEvents = [
  'Weddings',
  'Rehearsal Dinners',
  'Bridal Showers',
  'Milestone Birthdays',
  'Corporate Events',
  'Private Parties',
];

const venueStats = [
  { value: '400+', label: 'Luxury loft venue', icon: Heart },
  { value: `Up to ${COMPANY.maxGuests}`, label: 'Seated guests', icon: Users },
  { value: `${COMPANY.googleRating.toFixed(1)}`, label: 'Google rating', icon: Star },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <section
        aria-label="Venue highlights"
        className="relative z-20 mx-4 -mt-8 overflow-hidden rounded-3xl border border-white/60 bg-white/95 shadow-[0_24px_80px_rgba(30,20,22,0.16)] backdrop-blur-xl sm:mx-8 lg:mx-auto lg:max-w-5xl"
      >
        <div className="grid divide-y divide-primary/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {venueStats.map(({ value, label, icon: Icon }) => (
            <div
              key={label}
              className="flex items-center justify-center gap-4 px-6 py-6 sm:py-7"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <div>
                <p className="font-serif text-2xl leading-none text-foreground">
                  {value}
                </p>
                <p className="mt-1.5 text-[10px] tracking-[0.2em] text-foreground/50 uppercase">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Welcome />
      <section className="overflow-hidden bg-[#171315] py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-16">
            <div className="relative order-2 min-h-140 sm:min-h-170 lg:order-1">
              <div className="absolute inset-x-0 top-0 h-[72%] overflow-hidden rounded-t-[8rem]">
                <Image
                  src="/gallery/gallery-05.jpg"
                  alt="The Nichols Venue historic estate framed by mature trees at dusk"
                  fill
                  className="object-cover transition-transform duration-1000 hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 46vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" />
              </div>

              <div className="absolute right-0 bottom-0 h-[44%] w-[58%] overflow-hidden border-[6px] border-[#171315] bg-[#171315] shadow-2xl sm:border-10">
                <Image
                  src="/gallery/gallery-06.jpg"
                  alt="Elegant ballroom reception with crystal chandeliers and floral centerpieces"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 55vw, 28vw"
                />
              </div>

              <div className="absolute bottom-[11%] left-0 max-w-55 rounded-r-2xl border-l-2 border-primary bg-white p-5 text-foreground shadow-2xl sm:p-6">
                <p className="font-serif text-xl italic leading-snug">
                  “Bold enough to transform. Flexible enough for your vision.”
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 text-primary">
                <span className="h-px w-10 bg-primary" />
                <p className="text-[10px] tracking-[0.35em] uppercase">
                  The Nichols Experience
                </p>
              </div>
              <h2 className="mt-6 max-w-xl font-serif text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
                One remarkable venue.{' '}
                <em className="font-normal text-primary">Every moment yours.</em>
              </h2>
              <p className="mt-7 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
                From quiet getting-ready moments to a courtyard ceremony and
                candlelit ballroom reception, your entire celebration unfolds
                within one stunning Montrose event space.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-4">
                {AMENITIES.slice(0, 6).map((amenity) => (
                  <div
                    key={amenity}
                    className="flex items-center gap-2 border-b border-white/10 pb-4 text-sm text-white/80"
                  >
                    <Sparkles
                      className="h-3.5 w-3.5 shrink-0 text-primary"
                      strokeWidth={1.5}
                    />
                    {amenity}
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/tour"
                  className="group inline-flex items-center justify-center gap-3 bg-primary px-7 py-4 text-xs font-semibold tracking-[0.2em] text-black uppercase transition-colors hover:bg-primary/90"
                >
                  Tour the Venue
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={COMPANY.googleUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 border border-white/25 px-7 py-4 text-xs tracking-[0.2em] text-white uppercase transition-colors hover:border-primary hover:text-primary"
                >
                  <MapPin className="h-4 w-4" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-background py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs tracking-[0.24em] text-primary uppercase">
              Signature Experience
            </p>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Host events with timeless elegance and effortless flow
            </h2>
            <p className="mt-5 text-base text-foreground/70 sm:text-lg">
              Every corner of The Nichols Venue is crafted to feel
              intentional, warm, and remarkable for both intimate gatherings and
              grand celebrations.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {signatureHighlights.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <article
                  key={highlight.title}
                  className="group rounded-3xl border border-primary/15 bg-linear-to-b from-white to-primary/5 p-7 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="inline-flex rounded-2xl bg-primary/15 p-3 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-2xl">{highlight.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70 sm:text-base">
                    {highlight.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-secondary py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="text-xs tracking-[0.24em] text-primary uppercase">
              Planning Made Simple
            </p>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
              A refined process from first tour to final toast
            </h2>
            <p className="mt-5 max-w-2xl text-base text-foreground/70 sm:text-lg">
              Our team helps you move from inspiration to execution with clear
              milestones, transparent communication, and a focus on guest
              experience.
            </p>
            <Link
              href="/tour"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold tracking-[0.18em] uppercase text-primary-foreground transition hover:brightness-95"
            >
              Schedule a Tour
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="rounded-3xl border border-primary/15 bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.07)] sm:p-8">
            <ul className="space-y-4">
              {planningFlow.map((step, index) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary">
                    {index + 1}
                  </span>
                  <div className="flex items-start gap-2 text-foreground/80">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{step}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/10 p-4">
              <p className="text-sm leading-relaxed text-foreground/80">
                Need trusted vendor recommendations? We can share preferred
                partners for catering, florals, photography, and entertainment.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <PricingPreview /> */}
      <GalleryTeaser />
      <section className="bg-background py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 rounded-[2rem] border border-primary/15 bg-linear-to-br from-white via-white to-primary/10 p-8 shadow-[0_12px_40px_rgba(0,0,0,0.07)] lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs tracking-[0.24em] text-primary uppercase">
                Perfect For
              </p>
              <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">
                Memorable events of every style and size
              </h2>
              <p className="mt-4 max-w-2xl text-foreground/70">
                Whether you are planning an intimate gathering or an all-out
                celebration, our venue adapts beautifully to your vision.
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {idealEvents.map((eventType) => (
                  <span
                    key={eventType}
                    className="rounded-full border border-primary/20 bg-white px-4 py-2 text-xs tracking-[0.13em] uppercase text-foreground/75"
                  >
                    {eventType}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/tour"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold tracking-[0.17em] uppercase text-primary-foreground transition hover:brightness-95"
              >
                Book a Tour
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-white px-6 py-3 text-sm font-semibold tracking-[0.17em] uppercase text-foreground transition hover:border-primary/60"
              >
                <UtensilsCrossed className="h-4 w-4 text-primary" />
                Plan Your Event
              </Link>
            </div>
          </div>
        </div>
      </section>
      <TestimonialsSection />
      <CtaStrip />
    </>
  );
}
