import { Link } from 'react-router-dom'
import SectionBadge, { BuildingIcon } from '../common/SectionBadge.jsx'
import { ArrowRightLongIcon, PhoneIcon } from '../ui/AllSVG.jsx'
import { aboutPageContent } from '../../data/aboutPage.js'
import { companyPhones, primaryPhone } from '../../data/companyContact.js'
import { getQuotePageRoute } from '../../routes/routes.js'

const highlightImages = [
  {
    src: '/home/why-choose-2.webp',
    alt: 'Logistics professionals coordinating with carriers',
  },
  {
    src: '/home/contact-thumb.webp',
    alt: 'Customer support team ready to assist',
  },
]

export default function AboutSolutions() {
  return (
    <section className="relative py-14 sm:py-16 lg:py-20">
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
        <div className="mx-auto max-w-3xl text-center">
          <SectionBadge icon={BuildingIcon} tone="soft">
            About Us
          </SectionBadge>
          <h2 className="mt-5 font-display text-[30px] leading-[1.15] font-bold text-primary sm:mt-6 sm:text-[38px] lg:text-[44px]">
            {aboutPageContent.solutionsTitle}
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          <article className="about-solutions-card flex h-full flex-col overflow-hidden rounded-[24px] border border-primary/10 bg-white shadow-[0_14px_40px_rgba(13,27,61,0.06)] sm:col-span-2 lg:col-span-1">
            <div className="relative aspect-[5/3] overflow-hidden sm:aspect-[16/9] lg:aspect-[5/3.2]">
              <img
                src="/home/why-choose-1.webp"
                alt="Freight truck delivering shipments"
                className="size-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-primary/55 via-primary/10 to-transparent"
                aria-hidden="true"
              />
              <p className="absolute bottom-4 left-4 font-display text-[13px] tracking-[0.12em] text-secondary uppercase">
                Proven results
              </p>
            </div>

            <div className="grid flex-1 grid-cols-2 divide-x divide-primary/10">
              {aboutPageContent.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col justify-center px-4 py-6 text-center sm:px-5 sm:py-7"
                >
                  <p className="font-display text-[32px] leading-none font-bold text-primary sm:text-[38px]">
                    {stat.value}
                  </p>
                  <p className="mt-2.5 text-[12px] leading-5 text-muted sm:text-[13px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </article>

          {aboutPageContent.highlights.map((item, index) => (
            <article
              key={item.title}
              className="about-solutions-card flex h-full flex-col overflow-hidden rounded-[24px] border border-primary/10 bg-white shadow-[0_14px_40px_rgba(13,27,61,0.06)]"
            >
              <div className="relative aspect-[5/3.2] overflow-hidden">
                <img
                  src={highlightImages[index].src}
                  alt={highlightImages[index].alt}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="flex flex-1 flex-col px-5 py-5 sm:px-6 sm:py-6">
                <span className="font-display text-[12px] tracking-[0.14em] text-secondary-ink uppercase">
                  Capability {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 font-display text-[20px] leading-snug font-bold text-primary sm:text-[22px]">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-6 text-muted sm:text-[15px] sm:leading-7">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-7 flex flex-col gap-5 overflow-hidden rounded-[24px] bg-primary sm:mt-8 lg:mt-9 lg:flex-row lg:items-center lg:justify-between">
          <div className="px-6 pt-6 sm:px-8 sm:pt-7 lg:py-7 lg:pr-0">
            <p className="font-display text-[13px] tracking-[0.14em] text-secondary uppercase">
              Call Us Anytime
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-display text-[20px] font-semibold text-white sm:text-[24px]">
              {companyPhones.map((phone, index) => (
                <span key={phone.href} className="contents">
                  {index > 0 ? <span className="text-white/35">|</span> : null}
                  <a href={phone.href} className="transition-colors hover:text-secondary">
                    {phone.label}
                  </a>
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 px-6 pb-6 sm:px-8 sm:pb-7 lg:py-7 lg:pl-0">
            <Link
              to={getQuotePageRoute()}
              className="group inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 font-display text-[15px] font-medium text-primary transition-colors hover:bg-secondary/90"
            >
              Get Started
              <ArrowRightLongIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
            <a
              href={primaryPhone.href}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 font-display text-[15px] font-medium text-white transition-colors hover:border-secondary hover:text-secondary"
            >
              <PhoneIcon className="size-4" strokeWidth={1.7} />
              Call now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
