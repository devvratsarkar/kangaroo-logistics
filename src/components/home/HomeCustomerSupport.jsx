import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import SectionBadge from '../common/SectionBadge.jsx'
import {
  ArrowRightLongIcon,
  DeliveryCartIcon,
  GlobeIcon,
  HeadsetIcon,
} from '../ui/AllSVG.jsx'
import { supportStats } from '../../data/supportStats.js'
import { getContactPageRoute, getServicesPageRoute } from '../../routes/routes.js'

const statIcons = {
  globe: GlobeIcon,
  headset: HeadsetIcon,
  delivery: DeliveryCartIcon,
}

function formatCount(value, suffix) {
  if (suffix === 'k+') {
    return `${value}${suffix}`
  }

  return `${value.toLocaleString()}${suffix}`
}

function SupportStat({ stat }) {
  const ref = useRef(null)
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const Icon = statIcons[stat.icon]

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated) return

        setHasAnimated(true)
        const start = performance.now()
        const duration = 1800

        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - (1 - progress) ** 3
          setCount(Math.round(stat.value * eased))

          if (progress < 1) {
            requestAnimationFrame(tick)
          }
        }

        requestAnimationFrame(tick)
      },
      { threshold: 0.35 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [hasAnimated, stat.value])

  return (
    <div
      ref={ref}
      className="support-stat-item flex flex-col items-center px-6 py-8 text-center sm:px-8 lg:px-10"
    >
      <div className="flex items-center gap-4 sm:gap-5">
        <span className="support-stat-icon flex size-14 shrink-0 items-center justify-center rounded-2xl sm:size-16">
          <Icon className="size-6 text-secondary sm:size-7" strokeWidth={1.5} />
        </span>
        <p className="font-display text-[40px] leading-none font-bold text-primary sm:text-[48px] lg:text-[56px]">
          {formatCount(count, stat.suffix)}
        </p>
      </div>
      <p className="mt-4 text-[16px] font-medium text-muted sm:text-[17px]">{stat.label}</p>
    </div>
  )
}

export default function HomeCustomerSupport() {
  return (
    <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div
        className="support-section-panel relative overflow-hidden rounded-[30px] px-5 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-20"
        style={{
          backgroundColor: '#f0f8f8',
          backgroundImage: "url('/home/about-bg.webp')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
      >
        <div className="support-section-dots pointer-events-none absolute inset-0" aria-hidden="true" />

        <div className="relative z-1 mx-auto max-w-4xl text-center">
          <SectionBadge icon={HeadsetIcon} tone="soft">
            24x7 Customer Support
          </SectionBadge>

          <h2 className="mt-6 font-display text-[30px] leading-[1.15] font-bold text-primary sm:mt-7 sm:text-[38px] lg:text-[46px]">
            Need Immediate Support Or Any Help?
          </h2>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              to={getContactPageRoute()}
              className="group inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3.5 font-display text-[15px] font-medium text-primary transition-colors hover:bg-secondary/90 sm:text-[16px]"
            >
              Contact Us
              <ArrowRightLongIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>

            <Link
              to={getServicesPageRoute()}
              className="group inline-flex items-center gap-2 rounded-full border-2 border-secondary bg-transparent px-7 py-3.5 font-display text-[15px] font-medium text-primary transition-colors hover:bg-secondary/10 sm:text-[16px]"
            >
              Our Services
              <ArrowRightLongIcon className="size-4 text-secondary transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <div className="support-stats-bar relative z-1 mx-auto mt-10 max-w-5xl sm:mt-12 lg:mt-14">
          <div className="grid sm:grid-cols-3">
            {supportStats.map((stat) => (
              <SupportStat key={stat.id} stat={stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
