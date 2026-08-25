import { Link } from 'react-router-dom'
import SectionBadge, { BuildingIcon } from '../common/SectionBadge.jsx'
import { getHomePageRoute } from '../../routes/routes.js'
import { aboutPageContent } from '../../data/aboutPage.js'

export default function AboutHero() {
  return (
    <section className="services-page-hero relative overflow-hidden text-white">
      <img
        src="/banners/road-transport.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="services-page-hero-overlay absolute inset-0" aria-hidden="true" />

      <div className="custom_container relative z-1 py-14 sm:py-16 lg:py-18">
        <nav aria-label="Breadcrumb" className="services-page-breadcrumb">
          <Link to={getHomePageRoute()}>Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">About Us</span>
        </nav>

        <SectionBadge icon={BuildingIcon} tone="light">
          About Us
        </SectionBadge>

        <p className="mt-5 font-display text-[15px] tracking-[0.08em] text-secondary uppercase sm:mt-6 sm:text-[16px]">
          {aboutPageContent.heroTagline}
        </p>

        <h1 className="mt-3 max-w-3xl font-display text-[36px] leading-[1.12] font-bold tracking-[-0.02em] sm:text-[46px] lg:text-[52px]">
          About Kangaroo Logistics
        </h1>
      </div>
    </section>
  )
}
