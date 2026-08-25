import { Link } from 'react-router-dom'
import SectionBadge from '../common/SectionBadge.jsx'
import { TagIcon } from '../ui/AllSVG.jsx'
import { getHomePageRoute } from '../../routes/routes.js'

export default function BlogHero() {
  return (
    <section className="services-page-hero relative overflow-hidden text-white">
      <img
        src="/banners/ocean-freight.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="services-page-hero-overlay absolute inset-0" aria-hidden="true" />

      <div className="custom_container relative z-1 py-14 sm:py-16 lg:py-18">
        <nav aria-label="Breadcrumb" className="services-page-breadcrumb">
          <Link to={getHomePageRoute()}>Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Blogs</span>
        </nav>

        <SectionBadge icon={TagIcon} tone="light">
          Blogs
        </SectionBadge>

        <h1 className="mt-5 max-w-3xl font-display text-[36px] leading-[1.12] font-bold tracking-[-0.02em] sm:mt-6 sm:text-[46px] lg:text-[52px]">
          Supply chain insights & logistics news
        </h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-7 text-white/75 sm:text-[17px] sm:leading-8">
          Practical freight insights, industry updates, and logistics guides from
          the Kangaroo Logistics team.
        </p>
      </div>
    </section>
  )
}
