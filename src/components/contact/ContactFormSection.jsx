import SectionBadge from '../common/SectionBadge.jsx'
import QuoteRequestForm from '../quote/QuoteRequestForm.jsx'
import { ChatBubbleIcon } from '../ui/AllSVG.jsx'

export default function ContactFormSection() {
  return (
    <section className="overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      <div className="custom_container">
        <div className="grid overflow-hidden rounded-[28px] border border-primary/10 shadow-[0_20px_60px_rgba(13,27,61,0.07)] lg:grid-cols-2">
          <div className="contact-consultation-thumb relative min-h-80 sm:min-h-100 lg:min-h-full">
            <img
              src="/home/contact-thumb.jpg"
              alt="Logistics helpdesk with freight tracking and shipment support"
              className="absolute inset-0 size-full object-cover"
              width={1600}
              height={900}
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="flex items-center bg-white px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12 xl:px-12">
            <div className="w-full">
              <SectionBadge icon={ChatBubbleIcon} tone="soft">
                Helpdesk
              </SectionBadge>

              <h2 className="mt-5 font-display text-[28px] leading-[1.15] font-bold text-primary sm:mt-6 sm:text-[34px] lg:text-[38px]">
                Need Help? We&apos;re Here
              </h2>

              <p className="mt-3 text-[15px] leading-7 text-muted sm:text-[16px]">
                If you need help with any freight solution, simply send us a message.
                Our team will respond quickly.
              </p>

              <div className="mt-7">
                <QuoteRequestForm
                  idPrefix="contact-page"
                  submitLabel="Send Message"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
