import { Link } from 'react-router-dom'
import SectionBadge from '../common/SectionBadge.jsx'
import { ArrowRightLongIcon } from '../ui/AllSVG.jsx'
import { getAboutPageRoute } from '../../routes/routes.js'

export default function HomeWelcome() {
  return (
    <section className="relative mt-3 sm:mt-4 lg:mt-5">
      <div className="custom_container">
        <div
          className="relative overflow-hidden rounded-none sm:rounded-[20px] px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16 xl:px-14"
          style={{
            backgroundColor: 'var(--color-surface)',
            backgroundImage: "url('/home/about-bg.webp')",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
          }}
        >
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-18">
            <div className="max-w-xl lg:max-w-none">
              <SectionBadge tone="soft">Kangaroo Logistics</SectionBadge>

              <div className="mt-5 h-px w-14 bg-secondary sm:mt-6" aria-hidden="true" />

              <h2 className="mt-5 font-display text-[28px] leading-[1.2] font-bold tracking-[-0.02em] text-primary sm:mt-6 sm:text-[36px] lg:text-[44px] xl:text-[48px]">
                Welcome to our website!
              </h2>

              <div className="mt-5 max-w-lg space-y-4 text-[15px] leading-7 text-muted sm:mt-6 sm:space-y-5 sm:text-[16px] sm:leading-7.5">
                <p>
                  At Kangaroo Logistics, we understand that seamless transportation
                  is vital to global trade. As a leading provider of ocean, air, and
                  road freight, we emphasize agility, cost-effectiveness, and
                  reliability—ensuring your goods arrive smoothly, whether by sea,
                  air, or land.
                </p>
                <p>
                  Based in the USA, we leverage industry expertise and a trusted
                  partner network to deliver tailored logistics solutions. From
                  perishables and electronics to industrial machinery, our team handles
                  every shipment with precision, care, and clear communication at
                  every step.
                </p>
              </div>

              <Link
                to={getAboutPageRoute()}
                className="group mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-display text-[15px] font-medium text-white transition-colors hover:bg-primary/90 sm:mt-8 sm:text-[16px]"
              >
                About us
                <ArrowRightLongIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="relative mx-auto w-full max-w-140 lg:mx-0 lg:ml-auto lg:max-w-none">
              <div
                aria-hidden="true"
                className="welcome-image-accent pointer-events-none absolute inset-x-2 top-2 bottom-0 rounded-[20px] bg-secondary sm:inset-x-3 sm:top-3"
              />
              <div className="relative overflow-hidden rounded-[18px] border border-white/80 shadow-[0_20px_50px_rgba(13,27,61,0.12)] sm:rounded-[22px]">
                <img
                  src="/home/welcome.jpg"
                  alt="Kangaroo Logistics team coordinating freight operations"
                  className="aspect-16/10 w-full object-cover"
                  width={900}
                  height={560}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
