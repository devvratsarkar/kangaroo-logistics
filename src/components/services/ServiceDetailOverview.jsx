import { Link } from 'react-router-dom'
import SectionBadge from '../common/SectionBadge.jsx'
import { ArrowRightLongIcon, CheckCircleIcon, PhoneIcon } from '../ui/AllSVG.jsx'
import { getContactPageRoute } from '../../routes/routes.js'

export default function ServiceDetailOverview({ service, onRequestQuote }) {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="custom_container">
        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div>
            <SectionBadge iconSrc={service.icon} tone="soft">
              Overview
            </SectionBadge>
            <h2 className="mt-5 font-display text-[30px] leading-[1.15] font-bold text-primary sm:mt-6 sm:text-[38px] lg:text-[44px]">
              {service.headline}
            </h2>
            <div className="mt-4 h-px w-14 bg-secondary" aria-hidden="true" />
            <p className="mt-5 text-[15px] leading-7 text-muted sm:text-[16px] sm:leading-7.5">
              {service.intro}
            </p>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {service.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-primary/10 bg-[#f7f9fa] px-4 py-3"
                >
                  <CheckCircleIcon className="size-5 shrink-0 text-secondary" strokeWidth={1.6} />
                  <span className="font-display text-[14px] font-medium text-primary sm:text-[15px]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="service-detail-aside rounded-3xl border border-primary/10 bg-primary p-6 text-white sm:p-8">
            <p className="font-display text-[13px] tracking-[0.14em] text-secondary uppercase">
              Need this service?
            </p>
            <h3 className="mt-3 font-display text-[26px] leading-tight font-bold sm:text-[28px]">
              Get a free estimate in 24 hours
            </h3>
            <p className="mt-3 text-[15px] leading-7 text-white/70">
              Share your lane, cargo type, and timing. Our team will map the right plan
              and respond quickly.
            </p>

            <div className="mt-7 space-y-3">
              <button
                type="button"
                onClick={onRequestQuote}
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3.5 font-display text-[15px] font-medium text-primary transition-colors hover:bg-secondary/90"
              >
                Request a quote
                <ArrowRightLongIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
              <Link
                to={getContactPageRoute()}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 font-display text-[15px] font-medium text-white transition-colors hover:border-secondary hover:text-secondary"
              >
                <PhoneIcon className="size-4" strokeWidth={1.7} />
                Contact our team
              </Link>
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
              <img
                src={service.image}
                alt={service.label}
                className="aspect-16/10 w-full object-cover"
                style={{ objectPosition: service.imagePosition }}
                loading="lazy"
                decoding="async"
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
