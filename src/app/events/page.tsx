import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { EVENT_STYLES } from '@/lib/events';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Events',
  description:
    'Explore weddings, galas, private events, product launches, and special celebrations at The Nichols Venue — a luxury loft event space in Montrose, Houston.',
  path: '/events',
});

export default function EventsIndexPage() {
  return (
    <>
      <section className="relative h-64 overflow-hidden sm:h-80">
        <Image
          src="/events/weddings/06-img_1558.jpeg"
          alt="Events at The Nichols Venue"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pt-20 text-center">
          <p className="mb-4 text-[10px] tracking-[0.4em] text-[#00b7cc] uppercase">
            Celebrate With Us
          </p>
          <h1 className="font-serif text-5xl text-white sm:text-6xl">Events</h1>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="leading-relaxed text-foreground/60">
            From weddings and charity galas to product launches and milestone
            celebrations, The Nichols transforms for every occasion.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EVENT_STYLES.map((event) => (
            <Link
              key={event.slug}
              href={`/events/${event.slug}`}
              className="group overflow-hidden border border-border transition-colors hover:border-[#00b7cc]/40"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={event.heroImage}
                  alt={event.heroAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/35 transition-colors group-hover:bg-black/25" />
              </div>
              <div className="p-6">
                <p className="mb-2 text-[10px] tracking-[0.25em] text-[#00b7cc] uppercase">
                  {event.eyebrow}
                </p>
                <h2 className="font-serif text-2xl text-foreground">
                  {event.title}
                </h2>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-foreground/55">
                  {event.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-[10px] tracking-[0.2em] text-[#00b7cc] uppercase transition-all group-hover:gap-3">
                  Explore <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}

          <Link
            href="/tour"
            className="group flex flex-col justify-between border border-border bg-[#FAF7F7] p-6 transition-colors hover:border-[#00b7cc]/40 sm:col-span-2 lg:col-span-1"
          >
            <div>
              <p className="mb-2 text-[10px] tracking-[0.25em] text-[#00b7cc] uppercase">
                Visit the Venue
              </p>
              <h2 className="font-serif text-2xl text-foreground">
                Schedule a Tour
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground/55">
                Walk the loft, see the projection walls, and imagine your event
                at 2515 Morse Street.
              </p>
            </div>
            <span className="mt-8 inline-flex items-center gap-2 text-[10px] tracking-[0.2em] text-[#00b7cc] uppercase transition-all group-hover:gap-3">
              Book Now <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
