import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import TourScheduler from '@/components/tour/TourScheduler';
import { pageMetadata } from '@/lib/seo';
import { COMPANY } from '@/lib/data';

export const metadata: Metadata = pageMetadata({
  title: 'Schedule a Tour',
  description:
    'Tour The Nichols Venue — a luxury loft-style event space at 2515 Morse Street in Montrose. Schedule an in-person walkthrough of our projection walls, gallery walls, and 4,000 sq ft venue.',
  path: '/tour',
});

export default function TourPage() {
  return (
    <>
      <section className="relative h-64 overflow-hidden sm:h-80">
        <Image
          src="/gallery/gallery-02.jpg"
          alt="Tour The Nichols Venue luxury event space"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pt-20 text-center">
          <p className="mb-4 text-[10px] tracking-[0.4em] text-[#00b7cc] uppercase">
            Explore the Venue
          </p>
          <h1 className="font-serif text-5xl text-white sm:text-6xl">
            Tour The Nichols
          </h1>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="leading-relaxed text-foreground/60">
              Use the calendar below to book a time to tour our venue at your
              convenience. Walk through our 4,000 sq ft loft-style space — 100
              feet of floor-to-ceiling projection walls, 16-foot gallery walls,
              and a flexible two-level layout at {COMPANY.address},{' '}
              {COMPANY.city}.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-foreground/50">
              Please book at least 24 hours in advance. If you need something
              sooner, call us at{' '}
              <a
                href={`tel:${COMPANY.phoneHref}`}
                className="text-[#00b7cc] transition-colors hover:underline"
              >
                {COMPANY.phone}
              </a>
              . If the venue becomes reserved on the day of your tour, someone
              will reach out to reschedule.
            </p>
          </div>

          <TourScheduler />

          <div className="flex flex-col items-center justify-center gap-4 border-t border-border pt-10 text-center sm:flex-row sm:gap-8">
            <p className="text-sm text-foreground/50">
              Prefer to talk it through first?
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {COMPANY.phone ? (
                <a
                  href={`tel:${COMPANY.phoneHref}`}
                  className="inline-flex items-center gap-2 border border-border px-5 py-2.5 text-xs tracking-[0.15em] text-foreground uppercase transition-colors hover:border-[#00b7cc]/50 hover:text-[#00b7cc]"
                >
                  <Phone className="h-3.5 w-3.5" />
                  {COMPANY.phone}
                </a>
              ) : null}
              <Link
                href="/contact"
                className="inline-flex items-center bg-[#00b7cc] px-5 py-2.5 text-xs tracking-[0.15em] text-white uppercase transition-colors hover:bg-[#0099aa]"
              >
                Send an Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
