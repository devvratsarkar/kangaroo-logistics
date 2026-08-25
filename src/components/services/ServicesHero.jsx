import { Link } from 'react-router-dom'
import SectionBadge from '../common/SectionBadge.jsx'
import { ArrowRightLongIcon } from '../ui/AllSVG.jsx'
import { getHomePageRoute, getQuotePageRoute } from '../../routes/routes.js'

export default function ServicesHero() {
  return (
    <section className="services-page-hero relative overflow-hidden text-white">
      <img
        src="/banners/specialized-freight.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="services-page-hero-overlay absolute inset-0" aria-hidden="true" />

      <div className="custom_container relative z-1 py-16 sm:py-20 lg:py-24">
        <nav aria-label="Breadcrumb" className="services-page-breadcrumb">
          <Link to={getHomePageRoute()}>Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Services</span>
        </nav>

        <SectionBadge iconSrc="/services/icon-road.webp" tone="light">
          Our Services
        </SectionBadge>

        <p className="mt-5 font-display text-[15px] tracking-[0.08em] text-secondary uppercase sm:mt-6 sm:text-[16px]">
          Complete logistics solutions for every shipment.
        </p>

        <h1 className="mt-3 max-w-3xl font-display text-[36px] leading-[1.12] font-bold tracking-[-0.02em] sm:text-[48px] lg:text-[56px]">
          Complete Logistics Solutions
        </h1>

        <p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/72 sm:mt-6 sm:text-[17px] sm:leading-8">
          From road transportation and ocean freight to warehousing, drayage,
          multimodal transport, and temperature-controlled shipping — reliable,
          cost-effective services tailored to your shipping requirements.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10">
          <Link
            to={getQuotePageRoute()}
            className="group inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3.5 font-display text-[15px] font-medium text-primary transition-colors hover:bg-secondary/90 sm:text-[16px]"
          >
            Get a Quote
            <ArrowRightLongIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
          <a
            href="#service-catalog"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 font-display text-[15px] font-medium text-white transition-colors hover:border-secondary hover:text-secondary sm:text-[16px]"
          >
            Browse services
          </a>
        </div>
      </div>
    </section>
  )
}
