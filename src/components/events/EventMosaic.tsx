'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type MosaicItem = {
  src: string;
  alt: string;
  label?: string;
};

const SPAN_PATTERN = [
  'md:col-span-2 md:row-span-2',
  '',
  '',
  'md:col-span-2',
  '',
  'md:row-span-2',
  '',
  'md:col-span-2',
  '',
  '',
  'md:col-span-2 md:row-span-2',
  '',
];

export default function EventMosaic({
  items,
  title,
}: {
  items: MosaicItem[];
  title: string;
}) {
  return (
    <section className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-[10px] tracking-[0.35em] text-[#00b7cc] uppercase">
            Inspiration
          </p>
          <h2 className="font-serif text-3xl text-foreground sm:text-4xl">
            {title} Gallery
          </h2>
        </div>

        <div className="grid auto-rows-[140px] grid-cols-2 gap-2 sm:auto-rows-[180px] sm:gap-3 md:grid-cols-4 md:auto-rows-[200px] lg:auto-rows-[220px]">
          {items.map((item, index) => (
            <motion.figure
              key={`${item.src}-${index}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.28) }}
              className={cn(
                'group relative overflow-hidden bg-muted',
                SPAN_PATTERN[index % SPAN_PATTERN.length],
              )}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />
              {item.label ? (
                <figcaption className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                  <span className="font-serif text-sm text-white sm:text-base md:text-lg">
                    {item.label}
                  </span>
                </figcaption>
              ) : null}
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
