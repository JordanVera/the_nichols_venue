import type { Metadata } from 'next';
import Image from 'next/image';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import { COMPANY } from '@/lib/data';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Photos of Our Houston Event Venue',
  description:
    'Browse photos of The Nichols Venue — a luxury loft-style event space at 2515 Morse Street. See projection walls, gallery walls, and wedding moments in Montrose.',
  path: '/gallery',
});

export default function GalleryPage() {
  return (
    <>
      <section className="relative h-64 sm:h-80 overflow-hidden">
        <Image
          src="/gallery/gallery-02.jpg"
          alt={`Gallery of ${COMPANY.name} — historic luxury venue in Montrose`}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <p className="text-[#D32323] text-[10px] tracking-[0.4em] uppercase mb-4">
            Our Space
          </p>
          <h1 className="font-serif text-white text-5xl sm:text-6xl">
            Gallery
          </h1>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <p className="mx-auto mb-12 max-w-2xl text-center text-foreground/65 leading-relaxed">
          Explore The Nichols Venue: a 4,000 sq ft loft-style event space with
          100-ft projection walls, 16-ft gallery walls, and flexible two-level
          layout at 2515 Morse Street in Montrose.
        </p>
        <GalleryGrid />
      </section>
    </>
  );
}
