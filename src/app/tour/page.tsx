import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { pageMetadata } from '@/lib/seo';
import { COMPANY, VIDEOS, EMBEDS } from '@/lib/data';

export const metadata: Metadata = pageMetadata({
  title: 'Schedule a Tour',
  description:
    'Tour The Nichols Venue — a luxury loft-style event space at 2515 Morse Street in Montrose. Schedule an in-person walkthrough of our projection walls, gallery walls, and 4,000 sq ft venue.',
  path: '/tour',
});

export default function TourPage() {
  const vimeo = VIDEOS.find((v) => v.type === 'vimeo');
  const tourLink = EMBEDS.find((e) => e.type === 'external');

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
          <p className="mb-4 text-[10px] tracking-[0.4em] text-[#D32323] uppercase">
            Explore the Venue
          </p>
          <h1 className="font-serif text-5xl text-white sm:text-6xl">Tour The Nichols</h1>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-16">
          <div className="text-center">
            <p className="mx-auto max-w-xl text-foreground/60 leading-relaxed">
              Walk through our 4,000 sq ft loft-style venue — 100 feet of floor-to-ceiling
              projection walls, 16-foot gallery walls, and flexible two-level layout at
              {COMPANY.address}, {COMPANY.city}.
            </p>
          </div>

          {vimeo?.vimeoId ? (
            <div className="space-y-4">
              <h2 className="font-serif text-3xl text-center">Venue Video</h2>
              <div className="relative aspect-video overflow-hidden rounded-sm border border-border">
                <iframe
                  src={`https://player.vimeo.com/video/${vimeo.vimeoId}?title=0&byline=0&portrait=0`}
                  title={vimeo.title}
                  className="absolute inset-0 h-full w-full border-0"
                  allowFullScreen
                />
              </div>
            </div>
          ) : null}

          <div className="text-center space-y-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#D32323] px-8 py-3.5 text-xs font-medium tracking-[0.2em] text-white uppercase hover:bg-[#B01E1E] transition-colors"
            >
              Schedule an In-Person Tour
              <ArrowRight className="h-4 w-4" />
            </Link>
            {tourLink ? (
              <p className="text-sm text-foreground/50">
                Or 
                <a
                  href={tourLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#D32323] hover:underline"
                >
                  book a tour on our current site
                  <ExternalLink className="h-3 w-3" />
                </a>
              </p>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}
