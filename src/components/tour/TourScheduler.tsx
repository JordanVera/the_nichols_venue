'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';
import {
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  Users,
} from 'lucide-react';
import { COMPANY } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

type TourType = 'schedule' | 'additional';
type Step = 'type' | 'datetime' | 'details' | 'confirmed';

const TOUR_TYPES: Array<{
  id: TourType;
  title: string;
  description: string;
  duration: string;
}> = [
  {
    id: 'schedule',
    title: 'Schedule a Tour',
    description:
      'Book your first in-person walkthrough of The Nichols — projection walls, gallery walls, and both levels.',
    duration: '15 min',
  },
  {
    id: 'additional',
    title: 'Additional Tour Request',
    description:
      'Already toured with us? Request a follow-up visit for vendors, partners, or a second look at the space.',
    duration: '30 min',
  },
];

const TIME_SLOTS = [
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '1:30 PM',
  '2:30 PM',
  '3:30 PM',
  '4:30 PM',
];

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function startOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function addMonths(date: Date, amount: number) {
  return new Date(date.getFullYear(), date.getMonth() + amount, 1);
}

function sameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function formatLongDate(date: Date) {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

function isBookable(date: Date, today: Date) {
  const min = new Date(today);
  min.setHours(0, 0, 0, 0);
  min.setDate(min.getDate() + 1);

  const candidate = new Date(date);
  candidate.setHours(0, 0, 0, 0);

  if (candidate < min) return false;
  const day = candidate.getDay();
  return day !== 0;
}

function buildCalendarDays(viewMonth: Date) {
  const first = startOfMonth(viewMonth);
  const startOffset = first.getDay();
  const daysInMonth = new Date(
    viewMonth.getFullYear(),
    viewMonth.getMonth() + 1,
    0,
  ).getDate();

  const cells: Array<Date | null> = [];
  for (let i = 0; i < startOffset; i += 1) cells.push(null);
  for (let day = 1; day <= daysInMonth; day += 1) {
    cells.push(new Date(viewMonth.getFullYear(), viewMonth.getMonth(), day));
  }
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

export default function TourScheduler() {
  const [today] = useState(() => new Date());
  const [step, setStep] = useState<Step>('type');
  const [tourType, setTourType] = useState<TourType | null>(null);
  const [viewMonth, setViewMonth] = useState(() => startOfMonth(new Date()));
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const selectedTour = TOUR_TYPES.find((t) => t.id === tourType);
  const calendarDays = buildCalendarDays(viewMonth);
  const monthLabel = viewMonth.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  const canGoPrev =
    viewMonth.getFullYear() > today.getFullYear() ||
    (viewMonth.getFullYear() === today.getFullYear() &&
      viewMonth.getMonth() > today.getMonth());

  function selectTour(id: TourType) {
    setTourType(id);
    setSelectedDate(null);
    setSelectedTime(null);
    setStep('datetime');
  }

  function resetBooking() {
    setStep('type');
    setTourType(null);
    setSelectedDate(null);
    setSelectedTime(null);
    setViewMonth(startOfMonth(today));
  }

  async function handleConfirm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setSubmitting(false);
    setStep('confirmed');
  }

  return (
    <div className="overflow-hidden border border-border bg-card shadow-sm">
      <div className="grid lg:grid-cols-[240px_1fr]">
        <aside className="border-b border-border bg-[#FAF7F7] p-6 lg:border-r lg:border-b-0">
          <p className="mb-1 text-[10px] tracking-[0.3em] text-[#00b7cc] uppercase">
            The Nichols
          </p>
          <h3 className="font-serif text-2xl text-foreground">Book a Tour</h3>
          <p className="mt-3 text-sm leading-relaxed text-foreground/55">
            {COMPANY.address}
            <br />
            {COMPANY.city}
          </p>

          <ul className="mt-8 space-y-4 text-sm text-foreground/70">
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#00b7cc]" />
              <span>
                {selectedTour ? selectedTour.duration : '30–45 min'} walkthrough
              </span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#00b7cc]" />
              <span>In-person at the venue</span>
            </li>
            <li className="flex items-start gap-3">
              <Users className="mt-0.5 h-4 w-4 shrink-0 text-[#00b7cc]" />
              <span>Private appointment</span>
            </li>
            {selectedDate && selectedTime ? (
              <li className="flex items-start gap-3">
                <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-[#00b7cc]" />
                <span>
                  {formatLongDate(selectedDate)}
                  <br />
                  {selectedTime}
                </span>
              </li>
            ) : null}
          </ul>

          {step !== 'type' && step !== 'confirmed' ? (
            <button
              type="button"
              onClick={() => {
                if (step === 'details') {
                  setStep('datetime');
                  return;
                }
                resetBooking();
              }}
              className="mt-8 inline-flex items-center gap-1 text-xs tracking-wide text-foreground/50 uppercase transition-colors hover:text-[#00b7cc]"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
              Back
            </button>
          ) : null}
        </aside>

        <div className="min-h-130 p-6 sm:p-8">
          {step === 'type' ? (
            <div>
              <h4 className="font-serif text-2xl text-foreground">
                Select a tour type
              </h4>
              <p className="mt-2 text-sm text-foreground/55">
                Choose how you&apos;d like to visit The Nichols.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {TOUR_TYPES.map((tour) => (
                  <button
                    key={tour.id}
                    type="button"
                    onClick={() => selectTour(tour.id)}
                    className="group border border-border bg-background p-5 text-left transition-all hover:border-[#00b7cc]/50 hover:shadow-sm"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center border border-[#00b7cc]/25 text-[#00b7cc] transition-colors group-hover:bg-[#00b7cc] group-hover:text-white">
                      <CalendarDays className="h-4 w-4" />
                    </div>
                    <p className="font-serif text-xl text-foreground">
                      {tour.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/55">
                      {tour.description}
                    </p>
                    <p className="mt-4 text-[10px] tracking-[0.2em] text-[#00b7cc] uppercase">
                      {tour.duration}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          ) : null}

          {step === 'datetime' && selectedTour ? (
            <div>
              <h4 className="font-serif text-2xl text-foreground">
                {selectedTour.title}
              </h4>
              <p className="mt-2 text-sm text-foreground/55">
                Pick a date and time. We ask that you book at least 24 hours in
                advance.
              </p>

              <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <button
                      type="button"
                      aria-label="Previous month"
                      disabled={!canGoPrev}
                      onClick={() => setViewMonth((m) => addMonths(m, -1))}
                      className="flex h-8 w-8 items-center justify-center text-foreground/60 transition-colors hover:text-[#00b7cc] disabled:opacity-30"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <p className="text-sm font-medium tracking-wide text-foreground">
                      {monthLabel}
                    </p>
                    <button
                      type="button"
                      aria-label="Next month"
                      onClick={() => setViewMonth((m) => addMonths(m, 1))}
                      className="flex h-8 w-8 items-center justify-center text-foreground/60 transition-colors hover:text-[#00b7cc]"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-7 gap-1 text-center text-[10px] tracking-wider text-foreground/40 uppercase">
                    {WEEKDAYS.map((day) => (
                      <div key={day} className="py-2">
                        {day}
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    {calendarDays.map((date, index) => {
                      if (!date) {
                        return (
                          <div
                            key={`empty-${index}`}
                            className="aspect-square"
                          />
                        );
                      }
                      const bookable = isBookable(date, today);
                      const selected =
                        selectedDate !== null && sameDay(date, selectedDate);
                      return (
                        <button
                          key={date.toISOString()}
                          type="button"
                          disabled={!bookable}
                          onClick={() => {
                            setSelectedDate(date);
                            setSelectedTime(null);
                          }}
                          className={cn(
                            'aspect-square text-sm transition-colors',
                            !bookable &&
                              'cursor-not-allowed text-foreground/25',
                            bookable &&
                              !selected &&
                              'text-foreground hover:bg-[#00b7cc]/10',
                            selected && 'bg-[#00b7cc] text-white',
                          )}
                        >
                          {date.getDate()}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <p className="mb-3 text-[10px] tracking-[0.25em] text-foreground/40 uppercase">
                    {selectedDate
                      ? formatLongDate(selectedDate)
                      : 'Available times'}
                  </p>
                  {selectedDate ? (
                    <div className="grid max-h-80 gap-2 overflow-y-auto pr-1">
                      {TIME_SLOTS.map((slot) => {
                        const active = selectedTime === slot;
                        return (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedTime(slot)}
                            className={cn(
                              'border px-4 py-2.5 text-sm transition-colors',
                              active
                                ? 'border-[#00b7cc] bg-[#00b7cc] text-white'
                                : 'border-border text-foreground hover:border-[#00b7cc]/50',
                            )}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="flex h-48 items-center justify-center border border-dashed border-border px-6 text-center text-sm text-foreground/45">
                      Select a date to view available times
                    </div>
                  )}

                  <button
                    type="button"
                    disabled={!selectedDate || !selectedTime}
                    onClick={() => setStep('details')}
                    className="mt-6 w-full bg-[#00b7cc] px-4 py-3 text-xs font-medium tracking-[0.2em] text-white uppercase transition-colors hover:bg-[#0099aa] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          ) : null}

          {step === 'details' &&
          selectedTour &&
          selectedDate &&
          selectedTime ? (
            <div>
              <h4 className="font-serif text-2xl text-foreground">
                Your details
              </h4>
              <p className="mt-2 text-sm text-foreground/55">
                Confirm your {selectedTour.title.toLowerCase()} for{' '}
                {formatLongDate(selectedDate)} at {selectedTime}.
              </p>

              <form onSubmit={handleConfirm} className="mt-8 space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="tour-name">Full Name *</Label>
                    <Input
                      id="tour-name"
                      name="name"
                      required
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tour-email">Email *</Label>
                    <Input
                      id="tour-email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="tour-phone">Phone *</Label>
                    <Input
                      id="tour-phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="(832) 555-0100"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tour-event">Event Type</Label>
                    <Input
                      id="tour-event"
                      name="eventType"
                      placeholder="Wedding, gala, corporate…"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tour-notes">Notes</Label>
                  <Textarea
                    id="tour-notes"
                    name="notes"
                    rows={3}
                    placeholder="Anything we should know before your visit?"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#00b7cc] px-4 py-3.5 text-xs font-medium tracking-[0.2em] text-white uppercase transition-colors hover:bg-[#0099aa] disabled:opacity-60"
                >
                  {submitting ? 'Scheduling…' : 'Schedule Tour'}
                </button>
              </form>
            </div>
          ) : null}

          {step === 'confirmed' &&
          selectedTour &&
          selectedDate &&
          selectedTime ? (
            <div className="flex h-full min-h-105 flex-col items-center justify-center text-center">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#00b7cc]/10 text-[#00b7cc]">
                <Check className="h-6 w-6" />
              </div>
              <h4 className="font-serif text-3xl text-foreground">
                You&apos;re booked
              </h4>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-foreground/60">
                Your {selectedTour.title.toLowerCase()} is confirmed for{' '}
                <span className="text-foreground">
                  {formatLongDate(selectedDate)}
                </span>{' '}
                at <span className="text-foreground">{selectedTime}</span>. A
                confirmation email will be sent shortly.
              </p>
              <button
                type="button"
                onClick={resetBooking}
                className="mt-8 border border-border px-6 py-3 text-xs tracking-[0.2em] text-foreground uppercase transition-colors hover:border-[#00b7cc]/50 hover:text-[#00b7cc]"
              >
                Book Another Tour
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
