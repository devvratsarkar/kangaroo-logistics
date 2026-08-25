import SectionBadge from '../common/SectionBadge.jsx'
import { CheckCircleIcon, ProcessIcon } from '../ui/AllSVG.jsx'

function OfferingLabel(offering) {
  return typeof offering === 'string' ? offering : offering.title
}

function OfferingDescription(offering) {
  return typeof offering === 'string' ? null : offering.description
}

export default function ServiceDetailOfferings({ service }) {
  return (
    <section className="relative py-14 sm:py-16 lg:py-20">
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: '#f0f8f8',
          backgroundImage: "url('/home/about-bg.webp')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
        aria-hidden="true"
      />

      <div className="custom_container relative">
        <div className="mx-auto max-w-3xl text-center">
          <SectionBadge icon={ProcessIcon} tone="soft">
            Shipping Made Simple
          </SectionBadge>
          <h2 className="mt-5 font-display text-[30px] leading-[1.15] font-bold text-primary sm:mt-6 sm:text-[38px] lg:text-[44px]">
            {service.offeringsTitle}
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-muted sm:text-[16px]">
            {service.offeringsIntro}
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {service.offerings.map((offering) => {
            const label = OfferingLabel(offering)
            const description = OfferingDescription(offering)
            return (
              <li
                key={label}
                className="rounded-[20px] border border-primary/10 bg-white p-5 shadow-[0_8px_30px_rgba(12,32,54,0.04)] sm:p-6"
              >
                <span className="flex size-10 items-center justify-center rounded-xl bg-secondary text-primary">
                  <CheckCircleIcon className="size-5" strokeWidth={1.6} />
                </span>
                <h3 className="mt-4 font-display text-[17px] leading-snug font-semibold text-primary sm:text-[18px]">
                  {label}
                </h3>
                {description ? (
                  <p className="mt-2 text-[14px] leading-6 text-muted">{description}</p>
                ) : null}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
