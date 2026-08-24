import { useEffect, useEffectEvent, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { serviceNavItems } from '../../data/services.js'
import SectionBadge from '../common/SectionBadge.jsx'
import { ArrowLeftLongIcon, ArrowRightLongIcon } from '../ui/AllSVG.jsx'

const AUTO_MS = 5500

export default function HomeSpecialServices() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [progressKey, setProgressKey] = useState(0)
  const total = serviceNavItems.length
  const active = serviceNavItems[activeIndex]
  const touchStartX = useRef(null)

  const goTo = useEffectEvent((index) => {
    setActiveIndex((index + total) % total)
    setProgressKey((k) => k + 1)
  })

  const next = useEffectEvent(() => goTo(activeIndex + 1))
  const prev = useEffectEvent(() => goTo(activeIndex - 1))

  useEffect(() => {
    if (paused) return undefined
    const id = window.setInterval(() => next(), AUTO_MS)
    return () => window.clearInterval(id)
  }, [paused, activeIndex, next])

  return (
    <section
      className="special-services-section bg-white text-primary"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="custom_container py-14 sm:py-16 lg:py-18">
        <div className="mb-10 flex flex-col gap-5 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionBadge>Services</SectionBadge>
            <h2 className="mt-5 font-display text-[36px] leading-[1.15] font-bold text-primary sm:text-[44px] lg:text-[50px]">
              Special Services
            </h2>
          </div>

          <p className="max-w-120 text-[15px] leading-7 text-muted sm:text-[16px] lg:text-right">
            From temperature-controlled freight to port drayage — explore the
            logistics capabilities we deliver every day.
          </p>
        </div>

        <div
          onTouchStart={(e) => {
            touchStartX.current = e.changedTouches[0]?.clientX ?? null
          }}
          onTouchEnd={(e) => {
            const start = touchStartX.current
            const end = e.changedTouches[0]?.clientX
            if (start == null || end == null) return
            const delta = end - start
            if (Math.abs(delta) < 48) return
            if (delta < 0) next()
            else prev()
          }}
        >
          <article
            key={active.slug}
            className="special-stage overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-[0_8px_40px_rgba(12,32,54,0.06)]"
          >
            <div className="grid items-stretch lg:grid-cols-2">
              <div className="special-stage-media relative min-h-65 sm:min-h-80 lg:min-h-110">
                <img
                  src={active.stageImage ?? active.image}
                  alt={active.label}
                  className="absolute inset-0 size-full object-cover"
                  style={{ objectPosition: active.imagePosition ?? 'center center' }}
                  loading="eager"
                  decoding="async"
                />
              </div>

              <div className="flex flex-col justify-between px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-secondary">
                      <img
                        src={active.icon}
                        alt=""
                        className="size-6 object-contain brightness-0"
                        width={24}
                        height={24}
                      />
                    </div>
                    <p className="font-display text-[13px] tracking-[0.14em] text-muted uppercase">
                      Service {String(activeIndex + 1).padStart(2, '0')} of{' '}
                      {String(total).padStart(2, '0')}
                    </p>
                  </div>

                  <h3 className="special-stage-copy mt-6 font-display text-[30px] leading-[1.2] font-bold text-primary sm:text-[36px]">
                    {active.label}
                  </h3>

                  <p className="special-stage-copy mt-4 text-[16px] leading-7 text-muted [animation-delay:60ms]">
                    {active.description}
                  </p>
                </div>

                <div className="special-stage-copy mt-8 space-y-6 [animation-delay:120ms]">
                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      to={active.to}
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-display text-[15px] font-medium text-white transition-colors hover:bg-primary/90 sm:text-[16px]"
                    >
                      View service details
                      <ArrowRightLongIcon className="size-4" />
                    </Link>
                    <Link
                      to="/services"
                      className="font-display text-[15px] text-muted underline-offset-4 transition-colors hover:text-primary hover:underline"
                    >
                      All services
                    </Link>
                  </div>

                  <div className="flex items-center gap-4 border-t border-primary/10 pt-6">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        aria-label="Previous service"
                        className="flex size-11 items-center justify-center rounded-full border border-primary/15 text-primary transition-colors hover:border-primary hover:bg-primary/5"
                        onClick={prev}
                      >
                        <ArrowLeftLongIcon className="size-4" />
                      </button>
                      <button
                        type="button"
                        aria-label="Next service"
                        className="flex size-11 items-center justify-center rounded-full border border-primary/15 text-primary transition-colors hover:border-primary hover:bg-primary/5"
                        onClick={next}
                      >
                        <ArrowRightLongIcon className="size-4" />
                      </button>
                    </div>

                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-primary/10">
                      <div
                        key={progressKey}
                        className="special-progress h-full rounded-full bg-secondary"
                        style={{ animationDuration: `${AUTO_MS}ms` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-8">
          <p className="mb-4 font-display text-[13px] tracking-[0.12em] text-muted uppercase">
            Choose a service
          </p>

          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {serviceNavItems.map((service, index) => {
              const isActive = index === activeIndex
              return (
                <li key={service.slug}>
                  <button
                    type="button"
                    onClick={() => goTo(index)}
                    aria-pressed={isActive}
                    aria-label={`Show ${service.label}`}
                    className={[
                      'flex w-full flex-col items-center gap-2.5 rounded-2xl border px-3 py-4 text-center transition-all duration-300 sm:px-4 sm:py-5',
                      isActive
                        ? 'border-primary bg-primary text-white shadow-[0_8px_24px_rgba(12,32,54,0.15)]'
                        : 'border-primary/10 bg-white text-primary hover:border-primary/30 hover:bg-primary/3',
                    ].join(' ')}
                  >
                    <span
                      className={[
                        'flex size-10 items-center justify-center rounded-xl',
                        isActive ? 'bg-white/15' : 'bg-primary/5',
                      ].join(' ')}
                    >
                      <img
                        src={service.icon}
                        alt=""
                        className={[
                          'size-5 object-contain brightness-0',
                          isActive ? 'invert' : 'opacity-80',
                        ].join(' ')}
                        width={20}
                        height={20}
                      />
                    </span>
                    <span className="font-display text-[13px] leading-tight font-medium sm:text-[14px]">
                      {service.label}
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
