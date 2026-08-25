import { Link } from 'react-router-dom'
import SectionBadge from '../common/SectionBadge.jsx'
import { ArrowRightLongIcon, TruckIcon } from '../ui/AllSVG.jsx'
import { serviceNavItems, servicesPageIntro } from '../../data/services.js'

export default function ServicesGrid() {
  return (
    <section id="service-catalog" className="services-catalog-section bg-white py-14 text-primary sm:py-16 lg:py-20">
      <div className="custom_container">
        <div className="mx-auto max-w-3xl text-center">
          <SectionBadge icon={TruckIcon} tone="soft">
            Our Services
          </SectionBadge>
          <h2 className="mt-5 font-display text-[32px] leading-[1.15] font-bold sm:mt-6 sm:text-[40px] lg:text-[48px]">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-muted sm:text-[16px] sm:leading-7.5">
            {servicesPageIntro}
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-7">
          {serviceNavItems.map((service, index) => (
            <li key={service.slug}>
              <Link
                to={service.to}
                className="services-catalog-card group flex h-full flex-col overflow-hidden rounded-[22px] border border-primary/10 bg-white transition-all duration-300 hover:border-primary/20 hover:shadow-[0_18px_48px_rgba(12,32,54,0.1)]"
              >
                <span className="services-catalog-card-media relative block aspect-16/10 overflow-hidden bg-primary">
                  <img
                    src={service.image}
                    alt=""
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    style={{ objectPosition: service.imagePosition }}
                    loading={index < 3 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                  <span className="services-catalog-card-icon absolute bottom-4 left-4 flex size-12 items-center justify-center rounded-xl bg-secondary shadow-[0_8px_24px_rgba(12,32,54,0.18)]">
                    <img
                      src={service.icon}
                      alt=""
                      className="size-6 object-contain brightness-0"
                      width={24}
                      height={24}
                    />
                  </span>
                </span>

                <span className="flex flex-1 flex-col px-5 py-6 sm:px-6 sm:py-7">
                  <span className="font-display text-[13px] tracking-[0.14em] text-muted uppercase">
                    Service {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="mt-2 font-display text-[22px] leading-tight font-bold text-primary sm:text-[24px]">
                    {service.label}
                  </span>
                  <span className="mt-3 text-[15px] leading-7 text-muted">
                    {service.description}
                  </span>

                  <span className="mt-auto flex items-center gap-2 pt-6 font-display text-[15px] font-medium text-primary">
                    Read More
                    <ArrowRightLongIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
