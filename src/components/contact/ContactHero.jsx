import { Link } from 'react-router-dom'
import SectionBadge from '../common/SectionBadge.jsx'
import { HeadsetIcon } from '../ui/AllSVG.jsx'
import { getHomePageRoute } from '../../routes/routes.js'
import { contactPageInfo } from '../../data/contactPage.js'

export default function ContactHero() {
  return (
    <section className="services-page-hero relative overflow-hidden text-white">
      <img
        src="/banners/specialized-freight.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="services-page-hero-overlay absolute inset-0" aria-hidden="true" />

      <div className="custom_container relative z-1 py-14 sm:py-16 lg:py-18">
        <nav aria-label="Breadcrumb" className="services-page-breadcrumb">
          <Link to={getHomePageRoute()}>Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Contact Us</span>
        </nav>

        <SectionBadge icon={HeadsetIcon} tone="light">
          Contact Us
        </SectionBadge>

        <p className="mt-5 font-display text-[15px] tracking-[0.08em] text-secondary uppercase sm:mt-6 sm:text-[16px]">
          {contactPageInfo.heroTagline}
        </p>

        <h1 className="mt-3 max-w-3xl font-display text-[36px] leading-[1.12] font-bold tracking-[-0.02em] sm:text-[46px] lg:text-[52px]">
          Get in touch with Kangaroo Logistics
        </h1>

        <p className="mt-4 max-w-2xl text-[15px] leading-7 text-white/75 sm:text-[17px] sm:leading-8">
          {contactPageInfo.intro}
        </p>
      </div>
    </section>
  )
}
