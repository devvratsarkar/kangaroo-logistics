import { useEffect, useEffectEvent, useMemo, useState } from 'react'
import SectionBadge from '../common/SectionBadge.jsx'
import { ArrowLeftLongIcon, ArrowRightLongIcon, QuoteIcon, StarIcon } from '../ui/AllSVG.jsx'
import { testimonials } from '../../data/testimonials.js'

const AUTO_MS = 8000

function StarRating({ rating, size = 'md' }) {
  const starSize = size === 'sm' ? 'size-3.5' : 'size-4'

  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => {
        const starValue = index + 1
        const filled = rating >= starValue
        const half = !filled && rating >= starValue - 0.5
        return (
          <StarIcon
            key={starValue}
            className={`${starSize} ${filled || half ? 'text-secondary' : 'text-primary/15'}`}
            filled={filled}
            half={half}
          />
        )
      })}
    </div>
  )
}

function FeaturedTestimonial({ item, progressKey, paused }) {
  return (
    <article className="testimonial-feature-card relative overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-[0_24px_70px_rgba(13,27,61,0.09)]">
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-1 bg-secondary"
      />

      <div className="relative p-8 sm:p-10 lg:p-12 xl:p-14">
        <div className="flex items-start justify-between gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1.5">
            <QuoteIcon className="size-4 text-secondary-ink" strokeWidth={1.6} />
            <span className="font-display text-[13px] font-medium tracking-[0.08em] text-primary uppercase">
              Client Review
            </span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-primary/10 bg-[#f6f8fb] px-3.5 py-1.5">
            <span className="font-display text-[18px] font-bold leading-none text-primary">
              {item.rating.toFixed(1)}
            </span>
            <StarRating rating={item.rating} size="sm" />
          </div>
        </div>

        <blockquote className="mt-8 max-w-3xl text-[18px] leading-8 text-primary/90 sm:mt-10 sm:text-[20px] sm:leading-9 lg:text-[22px] lg:leading-10">
          &ldquo;{item.quote}&rdquo;
        </blockquote>

        <div className="mt-8 border-t border-primary/8 pt-8 sm:mt-10">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-1 rounded-2xl bg-secondary/25"
              />
              <img
                src={item.image}
                alt={item.name}
                className="relative size-16 rounded-2xl object-cover ring-2 ring-white sm:size-18"
                width={72}
                height={72}
              />
            </div>
            <div>
              <h3 className="font-display text-[20px] font-bold text-primary sm:text-[22px]">
                {item.name}
              </h3>
              <p className="mt-1 text-[14px] text-muted sm:text-[15px]">{item.role}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 h-0.5 overflow-hidden rounded-full bg-primary/8">
          <div
            key={progressKey}
            className="testimonial-progress h-full rounded-full bg-secondary"
            style={{ animationPlayState: paused ? 'paused' : 'running' }}
          />
        </div>
      </div>
    </article>
  )
}

export default function HomeTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [progressKey, setProgressKey] = useState(0)
  const total = testimonials.length
  const active = testimonials[activeIndex]

  const averageRating = useMemo(() => {
    const sum = testimonials.reduce((acc, item) => acc + item.rating, 0)
    return (sum / testimonials.length).toFixed(1)
  }, [])

  const goTo = useEffectEvent((index) => {
    setActiveIndex((index + total) % total)
    setProgressKey((key) => key + 1)
  })

  const next = useEffectEvent(() => goTo(activeIndex + 1))
  const prev = () => goTo(activeIndex - 1)

  useEffect(() => {
    if (paused) return undefined
    const id = window.setInterval(() => next(), AUTO_MS)
    return () => window.clearInterval(id)
  }, [paused, activeIndex, next])

  return (
    <section
      className="relative py-16 sm:py-20 lg:py-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: 'var(--color-surface)',
          backgroundImage: "url('/home/about-bg.webp')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
        aria-hidden="true"
      />

      <div className="custom_container relative">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          <div className="order-2 lg:order-1 lg:col-span-4 lg:sticky lg:top-28 xl:col-span-4">
            <SectionBadge icon={QuoteIcon} tone="soft">
              Testimonials
            </SectionBadge>

            <h2 className="mt-6 font-display text-[32px] leading-[1.12] font-bold text-primary sm:text-[40px] lg:text-[44px]">
              What Our Loyal Clients
            </h2>
            <h2 className="font-display text-[32px] leading-[1.12] font-bold text-primary sm:text-[40px] lg:text-[44px]">
              Say About Us
            </h2>

            <div className="mt-6 h-px w-14 bg-secondary" aria-hidden="true" />

            <p className="mt-6 max-w-sm text-[15px] leading-7 text-muted sm:text-[16px]">
              Trusted by carriers and logistics partners across the United States.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <div className="rounded-2xl border border-primary/10 bg-white/80 px-4 py-3 shadow-[0_8px_24px_rgba(13,27,61,0.05)] backdrop-blur-sm">
                <p className="font-display text-[24px] font-bold leading-none text-primary">
                  {averageRating}
                </p>
                <p className="mt-1 text-[12px] tracking-[0.08em] text-muted uppercase">
                  Avg. Rating
                </p>
              </div>
              <div className="rounded-2xl border border-primary/10 bg-white/80 px-4 py-3 shadow-[0_8px_24px_rgba(13,27,61,0.05)] backdrop-blur-sm">
                <p className="font-display text-[24px] font-bold leading-none text-primary">
                  {total}+
                </p>
                <p className="mt-1 text-[12px] tracking-[0.08em] text-muted uppercase">
                  Client Stories
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="flex size-12 items-center justify-center rounded-full border border-primary/15 bg-white text-primary shadow-[0_8px_24px_rgba(13,27,61,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-white hover:shadow-[0_12px_28px_rgba(13,27,61,0.12)]"
              >
                <ArrowLeftLongIcon className="size-4" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="flex size-12 items-center justify-center rounded-full border border-primary/15 bg-white text-primary shadow-[0_8px_24px_rgba(13,27,61,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-white hover:shadow-[0_12px_28px_rgba(13,27,61,0.12)]"
              >
                <ArrowRightLongIcon className="size-4" />
              </button>
              <span className="ml-1 font-display text-[13px] tracking-[0.14em] text-muted uppercase">
                {String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-8 xl:col-span-8">
            <FeaturedTestimonial
              key={active.id}
              item={active}
              progressKey={progressKey}
              paused={paused}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
