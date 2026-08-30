'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { COMPANY } from '@/lib/data';

export default function CtaStrip() {
  return (
    <section className="relative overflow-hidden py-24 px-6 lg:px-8">
      <Image
        src="/gallery/gallery-05.jpg"
        alt="The Nichols Venue — historic luxury venue ready for your Montrose wedding"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-[10px] tracking-[0.4em] text-[#D32323] uppercase"
        >
          Plan Your Celebration
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-6 font-serif text-4xl leading-tight text-white sm:text-5xl md:text-6xl"
        >
          Let&apos;s Make It <em className="italic">Unforgettable</em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mb-10 max-w-xl text-base text-white/75 sm:text-lg"
        >
          Schedule a private tour or inquire about your date. We&apos;d love to
          host your wedding or celebration at our Montrose estate.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/tour"
            className="bg-[#D32323] px-8 py-3.5 text-xs tracking-[0.2em] text-black uppercase transition-colors duration-200 hover:bg-[#B01E1E]"
          >
            Book a Tour
          </Link>
          {COMPANY.phone ? (
            <a
              href={`tel:${COMPANY.phoneHref}`}
              className="inline-flex items-center justify-center gap-2 border border-white/50 px-8 py-3.5 text-xs tracking-[0.2em] text-white uppercase transition-all duration-200 hover:border-[#D32323] hover:text-[#D32323]"
            >
              <Phone size={13} />
              Text {COMPANY.phone}
            </a>
          ) : (
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-white/50 px-8 py-3.5 text-xs tracking-[0.2em] text-white uppercase transition-all duration-200 hover:border-[#D32323] hover:text-[#D32323]"
            >
              Send an Inquiry
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}
