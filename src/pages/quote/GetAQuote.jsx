import { Link } from 'react-router-dom'
import SectionBadge from '../../components/common/SectionBadge.jsx'
import QuoteRequestForm from '../../components/quote/QuoteRequestForm.jsx'
import {
  ChatBubbleIcon,
  CheckCircleIcon,
  ClockIcon,
  MailIcon,
  PhoneIcon,
} from '../../components/ui/AllSVG.jsx'
import { getHomePageRoute } from '../../routes/routes.js'

const quoteBenefits = [
  {
    title: '24-hour estimate',
    description: 'Free response with a clear plan for your lane and cargo.',
  },
  {
    title: 'Full service coverage',
    description: 'Reefer, drayage, warehouse, multimodal, ocean, and road.',
  },
  {
    title: 'Dedicated coordination',
    description: 'Support from booking through pickup and final delivery.',
  },
]

export default function GetAQuotePage() {
  return (
    <>
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
            <span aria-current="page">Get a Quote</span>
          </nav>

          <SectionBadge iconSrc="/services/icon-road.webp" tone="light">
            Free estimate
          </SectionBadge>

          <h1 className="mt-5 max-w-3xl font-display text-[36px] leading-[1.12] font-bold tracking-[-0.02em] sm:mt-6 sm:text-[46px] lg:text-[52px]">
            Get a Quote
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-7 text-white/75 sm:text-[17px] sm:leading-8">
            Request a tailored quote for your logistics needs. Choose a service,
            share shipment details, and our team will respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="quote-page-section relative py-14 sm:py-16 lg:py-20">
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
          <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
            <div className="flex flex-col justify-between rounded-[28px] border border-primary/8 bg-white/70 p-6 shadow-[0_16px_50px_rgba(12,32,54,0.05)] backdrop-blur-sm sm:p-8 lg:p-10">
              <div>
                <SectionBadge icon={ChatBubbleIcon} tone="soft">
                  Quote request
                </SectionBadge>

                <h2 className="mt-5 font-display text-[30px] leading-[1.15] font-bold text-primary sm:mt-6 sm:text-[36px] lg:text-[40px]">
                  Tell us what you need to move
                </h2>

                <p className="mt-4 max-w-md text-[15px] leading-7 text-muted sm:text-[16px] sm:leading-7.5">
                  Select the service that fits your shipment, then share contact
                  details and cargo notes. We&apos;ll review your request and send a
                  clear estimate.
                </p>

                <ul className="mt-8 space-y-4">
                  {quoteBenefits.map((item) => (
                    <li
                      key={item.title}
                      className="flex gap-3.5 rounded-2xl border border-primary/8 bg-white px-4 py-3.5"
                    >
                      <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                        <CheckCircleIcon className="size-5" strokeWidth={1.6} />
                      </span>
                      <div>
                        <p className="font-display text-[16px] font-semibold text-primary">
                          {item.title}
                        </p>
                        <p className="mt-1 text-[14px] leading-6 text-muted">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a
                  href="tel:+17185550124"
                  className="flex items-center gap-3 rounded-2xl border border-primary/10 bg-primary px-4 py-3.5 text-white transition-colors hover:bg-primary/90"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-secondary">
                    <PhoneIcon className="size-4.5" strokeWidth={1.7} />
                  </span>
                  <span>
                    <span className="block font-display text-[11px] tracking-[0.12em] text-white/55 uppercase">
                      Call us
                    </span>
                    <span className="mt-0.5 block font-display text-[14px] font-medium">
                      +1 (718) 555-0124
                    </span>
                  </span>
                </a>

                <a
                  href="mailto:ops@kangaroologistics.com"
                  className="flex items-center gap-3 rounded-2xl border border-primary/10 bg-white px-4 py-3.5 text-primary transition-colors hover:border-secondary"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                    <MailIcon className="size-4.5" strokeWidth={1.7} />
                  </span>
                  <span>
                    <span className="block font-display text-[11px] tracking-[0.12em] text-muted uppercase">
                      Email us
                    </span>
                    <span className="mt-0.5 block font-display text-[14px] font-medium">
                      ops@kangaroologistics.com
                    </span>
                  </span>
                </a>
              </div>

              <p className="mt-5 flex items-center gap-2 text-[13px] text-muted">
                <ClockIcon className="size-4 text-secondary" strokeWidth={1.7} />
                Mon–Fri, 8AM – 6PM EST
              </p>
            </div>

            <div className="rounded-[28px] border border-primary/10 bg-white p-5 shadow-[0_20px_60px_rgba(12,32,54,0.08)] sm:p-8 lg:p-9">
              <div className="mb-6 border-b border-primary/8 pb-5">
                <p className="font-display text-[12px] tracking-[0.14em] text-secondary uppercase">
                  Shipment details
                </p>
                <h3 className="mt-1.5 font-display text-[22px] font-bold text-primary sm:text-[24px]">
                  Request your estimate
                </h3>
              </div>

              <QuoteRequestForm
                idPrefix="quote-page"
                submitLabel="Request a Quote"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
