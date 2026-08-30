import type { Metadata } from 'next';
import Image from 'next/image';
import { Phone, MapPin, Camera, Globe, Clock, Mail } from 'lucide-react';
import InquiryForm from '@/components/contact/InquiryForm';
import { COMPANY } from '@/lib/data';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Contact & Wedding Inquiries',
  description:
    'Contact The Nichols Venue to book a private tour or inquire about wedding dates and packages. Historic luxury venue at 2515 Morse Street, Houston, TX 77019.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <section className="relative h-64 sm:h-80 overflow-hidden">
        <Image
          src="/gallery/gallery-03.jpg"
          alt={`Contact ${COMPANY.name} — 2515 Morse Street, Montrose`}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <p className="text-[#00b7cc] text-[10px] tracking-[0.4em] uppercase mb-4">Book a Tour</p>
          <h1 className="font-serif text-white text-5xl sm:text-6xl">Contact Us</h1>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16">
          <div className="flex flex-col gap-10">
            <div>
              <p className="text-[#00b7cc] text-[10px] tracking-[0.35em] uppercase mb-4">
                Inquiry &amp; Pricing
              </p>
              <h2 className="font-serif text-foreground text-3xl sm:text-4xl">
                Schedule Your Tour
              </h2>
              <p className="text-foreground/60 mt-4 leading-relaxed">
                Reach out or fill out the form to inquire about availability, tour
                our Montrose Houston estate, and receive wedding package details.
              </p>
            </div>

            <ul className="flex flex-col gap-6">
              {COMPANY.phone ? (
                <li>
                  <a href={`tel:${COMPANY.phoneHref}`} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 border border-[#00b7cc]/30 flex items-center justify-center flex-shrink-0">
                      <Phone size={14} className="text-[#00b7cc]" />
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/40 mb-0.5">Text Us</p>
                      <p className="text-foreground group-hover:text-[#00b7cc] transition-colors">{COMPANY.phone}</p>
                    </div>
                  </a>
                </li>
              ) : null}
              {COMPANY.email ? (
                <li>
                  <a href={`mailto:${COMPANY.email}`} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 border border-[#00b7cc]/30 flex items-center justify-center flex-shrink-0">
                      <Mail size={14} className="text-[#00b7cc]" />
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/40 mb-0.5">Email</p>
                      <p className="text-foreground group-hover:text-[#00b7cc] transition-colors">{COMPANY.email}</p>
                    </div>
                  </a>
                </li>
              ) : null}
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#00b7cc]/30 flex items-center justify-center flex-shrink-0">
                  <MapPin size={14} className="text-[#00b7cc]" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/40 mb-0.5">Location</p>
                  <p className="text-foreground">{COMPANY.address}<br />{COMPANY.city}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#00b7cc]/30 flex items-center justify-center flex-shrink-0">
                  <Clock size={14} className="text-[#00b7cc]" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/40 mb-0.5">Hours</p>
                  <p className="text-foreground">By appointment · Private tours</p>
                </div>
              </li>
            </ul>

            {(COMPANY.instagram || COMPANY.facebook) ? (
              <div className="flex gap-3">
                {COMPANY.instagram ? (
                  <a href={COMPANY.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 border border-border hover:border-[#00b7cc]/50 text-foreground/60 hover:text-[#00b7cc] text-xs transition-all">
                    <Camera size={13} /> Instagram
                  </a>
                ) : null}
                {COMPANY.facebook ? (
                  <a href={COMPANY.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 border border-border hover:border-[#00b7cc]/50 text-foreground/60 hover:text-[#00b7cc] text-xs transition-all">
                    <Globe size={13} /> Facebook
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>

          <div className="bg-card border border-border p-8 md:p-10">
            <h3 className="font-serif text-foreground text-2xl mb-2">Send an Inquiry</h3>
            <p className="text-foreground/50 text-sm mb-8">
              Tell us about your wedding or celebration and we&apos;ll share availability and pricing for The Nichols Venue.
            </p>
            <InquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
