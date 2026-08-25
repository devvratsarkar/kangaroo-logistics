import { Link } from 'react-router-dom'
import SectionBadge from '../common/SectionBadge.jsx'
import { ArrowRightLongIcon } from '../ui/AllSVG.jsx'
import { getHomePageRoute, getServicesPageRoute } from '../../routes/routes.js'

export default function ServiceDetailHero({ service, onRequestQuote }) {
  return (
    <section className="services-page-hero relative overflow-hidden text-white">
      <img
        src={service.stageImage ?? service.image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover"
        style={{ objectPosition: service.imagePosition ?? 'center center' }}
      />
      <div className="services-page-hero-overlay absolute inset-0" aria-hidden="true" />

      <div className="custom_container relative z-1 py-14 sm:py-18 lg:py-22">
        <nav aria-label="Breadcrumb" className="services-page-breadcrumb">
          <Link to={getHomePageRoute()}>Home</Link>
          <span aria-hidden="true">/</span>
          <Link to={getServicesPageRoute()}>Services</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{service.label}</span>
        </nav>

        <SectionBadge iconSrc={service.icon} tone="light">
          {service.eyebrow}
        </SectionBadge>

        <p className="mt-5 font-display text-[15px] tracking-[0.08em] text-secondary uppercase sm:mt-6 sm:text-[16px]">
          {service.heroTagline}
        </p>

        <h1 className="mt-3 max-w-3xl font-display text-[34px] leading-[1.12] font-bold tracking-[-0.02em] sm:text-[46px] lg:text-[54px]">
          {service.headline}
        </h1>

        <div className="mt-8">
          <button
            type="button"
            onClick={onRequestQuote}
            className="group inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3.5 font-display text-[15px] font-medium text-primary transition-colors hover:bg-secondary/90 sm:text-[16px]"
          >
            Get a Quote
            <ArrowRightLongIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </section>
  )
}
