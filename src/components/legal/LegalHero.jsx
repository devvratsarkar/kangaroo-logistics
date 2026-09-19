import { Link } from 'react-router-dom'
import SectionBadge from '../common/SectionBadge.jsx'
import { FileSignatureIcon, ShieldIcon } from '../ui/AllSVG.jsx'
import { getHomePageRoute } from '../../routes/routes.js'

const legalIcons = {
  shield: ShieldIcon,
  file: FileSignatureIcon,
}

export default function LegalHero({ page }) {
  const Icon = legalIcons[page.icon] ?? ShieldIcon

  return (
    <section className="services-page-hero relative overflow-hidden text-white">
      <img
        src={page.image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="services-page-hero-overlay absolute inset-0" aria-hidden="true" />

      <div className="custom_container relative z-1 py-14 sm:py-16 lg:py-18">
        <nav aria-label="Breadcrumb" className="services-page-breadcrumb">
          <Link to={getHomePageRoute()}>Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{page.crumb}</span>
        </nav>

        <SectionBadge icon={Icon} tone="light">
          {page.badge}
        </SectionBadge>

        <p className="mt-5 font-display text-[15px] tracking-[0.08em] text-secondary uppercase sm:mt-6 sm:text-[16px]">
          {page.tagline}
        </p>

        <h1 className="mt-3 max-w-3xl font-display text-[36px] leading-[1.12] font-bold tracking-[-0.02em] sm:text-[46px] lg:text-[52px]">
          {page.title}
        </h1>

        <p className="mt-4 max-w-2xl text-[15px] leading-7 text-white/75 sm:text-[17px] sm:leading-8">
          {page.intro}
        </p>

        <p className="mt-5 font-display text-[13px] tracking-[0.06em] text-white/55 uppercase sm:text-[14px]">
          Last updated {page.lastUpdated}
        </p>
      </div>
    </section>
  )
}
