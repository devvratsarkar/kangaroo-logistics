import { Link } from 'react-router-dom'
import SectionBadge from '../common/SectionBadge.jsx'
import { ArrowRightLongIcon, ChatBubbleIcon, PhoneIcon } from '../ui/AllSVG.jsx'
import { getContactPageRoute, getQuotePageRoute } from '../../routes/routes.js'

export default function ServicesCta() {
  return (
    <section className="px-4 pb-14 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
      <div className="services-cta-panel relative overflow-hidden rounded-[28px] px-6 py-12 text-white sm:px-10 sm:py-14 lg:px-14 lg:py-16">
        <img
          src="/banners/road-transport.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="services-cta-overlay absolute inset-0" aria-hidden="true" />

        <div className="relative z-1 mx-auto max-w-3xl text-center">
          <SectionBadge icon={ChatBubbleIcon} tone="light">
            Ready to ship
          </SectionBadge>

          <h2 className="mt-5 font-display text-[30px] leading-[1.15] font-bold sm:mt-6 sm:text-[38px] lg:text-[44px]">
            Tell us what you need to move — we will map the right service
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-7 text-white/70 sm:text-[16px] sm:leading-7.5">
            Share lane details, cargo type, and timing. Our team responds with a
            clear plan and a free estimate within 24 hours.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-9 sm:flex-row sm:gap-4">
            <Link
              to={getQuotePageRoute()}
              className="group inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3.5 font-display text-[15px] font-medium text-primary transition-colors hover:bg-secondary/90 sm:text-[16px]"
            >
              Request a quote
              <ArrowRightLongIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
            <Link
              to={getContactPageRoute()}
              className="group inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 font-display text-[15px] font-medium text-white transition-colors hover:border-secondary hover:text-secondary sm:text-[16px]"
            >
              Talk to our team
              <PhoneIcon className="size-4" strokeWidth={1.7} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
