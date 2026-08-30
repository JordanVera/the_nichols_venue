import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import EventMosaic from '@/components/events/EventMosaic';
import CtaStrip from '@/components/home/CtaStrip';
import { EVENT_NAV, type EventStyle } from '@/lib/events';

export default function EventPageContent({ event }: { event: EventStyle }) {
  const otherEvents = EVENT_NAV.filter(
    (item) => item.href !== `/events/${event.slug}` && item.href !== '/tour',
  );

  return (
    <>
      <section className="relative h-72 overflow-hidden sm:h-96">
        <Image
          src={event.heroImage}
          alt={event.heroAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pt-20 text-center">
          <p className="mb-4 text-[10px] tracking-[0.4em] text-[#00b7cc] uppercase">
            {event.eyebrow}
          </p>
          <h1 className="font-serif text-5xl text-white sm:text-6xl">
            {event.title}
          </h1>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <div>
            <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl">
              {event.headline}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/65">
              {event.description}
            </p>
            {event.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="mt-5 leading-relaxed text-foreground/65"
              >
                {paragraph}
              </p>
            ))}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/tour"
                className="inline-flex items-center gap-2 bg-[#00b7cc] px-7 py-3.5 text-xs font-medium tracking-[0.2em] text-white uppercase transition-colors hover:bg-[#0099aa]"
              >
                Schedule a Tour
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center border border-border px-7 py-3.5 text-xs tracking-[0.2em] text-foreground uppercase transition-colors hover:border-[#00b7cc]/50 hover:text-[#00b7cc]"
              >
                Inquire
              </Link>
            </div>
          </div>

          <aside className="border border-border bg-[#FAF7F7] p-8">
            <p className="mb-5 text-[10px] tracking-[0.3em] text-[#00b7cc] uppercase">
              Why The Nichols
            </p>
            <ul className="space-y-4">
              {event.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/75">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#00b7cc]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <div className="bg-[#FAF7F7]">
        <EventMosaic items={event.mosaic} title={event.title} />
      </div>

      <section className="border-t border-border px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 text-center text-[10px] tracking-[0.3em] text-foreground/40 uppercase">
            Explore Other Events
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {otherEvents.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border border-border px-4 py-2.5 text-xs tracking-[0.15em] text-foreground/70 uppercase transition-colors hover:border-[#00b7cc]/50 hover:text-[#00b7cc]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
