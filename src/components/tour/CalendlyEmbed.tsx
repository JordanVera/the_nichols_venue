'use client';

import Script from 'next/script';

type CalendlyEmbedProps = {
  url: string;
};

export default function CalendlyEmbed({ url }: CalendlyEmbedProps) {
  return (
    <>
      <div
        className="calendly-inline-widget w-full min-w-[320px]"
        data-url={url}
        style={{ height: 720 }}
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </>
  );
}
