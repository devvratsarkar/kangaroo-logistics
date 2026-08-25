import SectionBadge from '../common/SectionBadge.jsx'
import QuoteRequestForm from '../quote/QuoteRequestForm.jsx'
import { ChatBubbleIcon } from '../ui/AllSVG.jsx'

export default function ContactFormSection() {
  return (
    <section className="overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      <div className="custom_container">
        <div className="grid overflow-hidden rounded-[28px] border border-primary/10 shadow-[0_20px_60px_rgba(12,32,54,0.07)] lg:grid-cols-2">
          <div className="contact-consultation-thumb relative min-h-80 sm:min-h-100 lg:min-h-full">
            <img
              src="/home/contact-thumb.webp"
              alt="Kangaroo Logistics support team ready to help"
              className="absolute inset-0 size-full object-cover"
              width={960}
              height={695}
              loading="lazy"
              decoding="async"
            />

            <div className="contact-consultation-badge absolute right-5 bottom-8 z-2 w-52 rounded-[28px] bg-white/20 px-4 py-8 text-center backdrop-blur-md sm:right-8 sm:bottom-10 sm:w-55 sm:py-10">
              <div className="ml-4 flex justify-center">
                <img
                  src="/home/contact-autor1.webp"
                  alt=""
                  aria-hidden="true"
                  className="-ml-4 size-14 rounded-full border-2 border-white object-cover"
                  width={56}
                  height={56}
                />
                <img
                  src="/home/contact-autor2.webp"
                  alt=""
                  aria-hidden="true"
                  className="-ml-4 size-14 rounded-full border-2 border-white object-cover"
                  width={56}
                  height={56}
                />
                <span className="-ml-4 flex size-14 items-center justify-center rounded-full bg-primary font-display text-[18px] font-medium text-white">
                  1.5k+
                </span>
              </div>
              <p className="mt-6 font-display text-[22px] leading-7 font-medium text-white sm:mt-7 sm:text-[24px] sm:leading-8">
                Trusted Happy Customers
              </p>
            </div>
          </div>

          <div className="flex items-center bg-white px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12 xl:px-12">
            <div className="w-full">
              <SectionBadge icon={ChatBubbleIcon} tone="soft">
                Consultations
              </SectionBadge>

              <h2 className="mt-5 font-display text-[28px] leading-[1.15] font-bold text-primary sm:mt-6 sm:text-[34px] lg:text-[38px]">
                Need Help? We&apos;re Here
              </h2>

              <p className="mt-3 text-[15px] leading-7 text-muted sm:text-[16px]">
                Share your freight details and our team will get back to you with a
                tailored logistics solution.
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
