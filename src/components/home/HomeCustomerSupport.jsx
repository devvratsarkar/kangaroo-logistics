import { Link } from 'react-router-dom'
import SectionBadge from '../common/SectionBadge.jsx'
import { ArrowRightLongIcon, HeadsetIcon } from '../ui/AllSVG.jsx'
import { getContactPageRoute } from '../../routes/routes.js'

export default function HomeCustomerSupport() {
  return (
    <section className="px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <div
        className="support-section-panel relative overflow-hidden rounded-[30px] px-5 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-20"
        style={{
          backgroundColor: 'var(--color-surface)',
          backgroundImage: "url('/home/about-bg.webp')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
      >
        <div className="support-section-dots pointer-events-none absolute inset-0" aria-hidden="true" />

        <div className="relative z-1 mx-auto max-w-4xl text-center">
          <SectionBadge icon={HeadsetIcon} tone="soft">
            24/7 Support
          </SectionBadge>

          <h2 className="mt-6 font-display text-[30px] leading-[1.15] font-bold text-primary sm:mt-7 sm:text-[38px] lg:text-[46px]">
            Need Immediate Support Or Any Help?
          </h2>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              to={getContactPageRoute()}
              className="group inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3.5 font-display text-[15px] font-medium text-primary transition-colors hover:bg-secondary/90 sm:text-[16px]"
            >
              Contact Us
              <ArrowRightLongIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
