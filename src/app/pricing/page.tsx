import type { Metadata } from 'next';
import Image from 'next/image';
import PricingContent from '@/components/pricing/PricingContent';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Wedding Packages from $1,295',
  description:
    'Wedding and event packages at The Nichols Venue. Ceremony and reception at 2515 Morse Street in Montrose — projection walls, gallery walls, and space for up to 400 guests.',
  path: '/pricing',
});

export default function PricingPage() {
  return (
    <>
      <section className="relative h-64 sm:h-80 overflow-hidden">
        <Image
          src="/gallery/gallery-04.jpg"
          alt="Wedding packages at The Nichols Venue — luxury venue in Montrose"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <p className="text-[#00b7cc] text-[10px] tracking-[0.4em] uppercase mb-4">
            Montrose Event Space
          </p>
          <h1 className="font-serif text-white text-5xl sm:text-6xl">Pricing</h1>
        </div>
      </section>

      <PricingContent />
    </>
  );
}
