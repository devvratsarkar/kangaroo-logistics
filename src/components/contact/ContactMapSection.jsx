import SectionBadge from '../common/SectionBadge.jsx'
import { MapPinIcon } from '../ui/AllSVG.jsx'
import { contactPageInfo } from '../../data/contactPage.js'

export default function ContactMapSection() {
  return (
    <section className="relative pb-14 sm:pb-16 lg:pb-20">
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

      <div className="custom_container relative py-14 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <SectionBadge icon={MapPinIcon} tone="soft">
            Visit us
          </SectionBadge>
          <h2 className="mt-5 font-display text-[30px] leading-[1.15] font-bold text-primary sm:mt-6 sm:text-[38px]">
            {contactPageInfo.address.officeTitle}
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-muted sm:text-[16px]">
            {contactPageInfo.address.lines.join(', ')}
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-[28px] border border-primary/10 bg-white shadow-[0_18px_50px_rgba(13,27,61,0.08)]">
          <iframe
            title={contactPageInfo.address.mapTitle}
            src={contactPageInfo.address.mapUrl}
            className="h-80 w-full border-0 sm:h-100 lg:h-125"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
