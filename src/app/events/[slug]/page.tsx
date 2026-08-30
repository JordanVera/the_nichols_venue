import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import EventPageContent from '@/components/events/EventPageContent';
import {
  getAllEventSlugs,
  getEventBySlug,
} from '@/lib/events';
import { pageMetadata } from '@/lib/seo';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllEventSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return {};

  return pageMetadata({
    title: event.title,
    description: event.seoDescription,
    path: `/events/${event.slug}`,
  });
}

export default async function EventStylePage({ params }: PageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  return <EventPageContent event={event} />;
}
