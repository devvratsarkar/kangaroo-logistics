import { useState } from 'react'
import SectionBadge from '../common/SectionBadge.jsx'
import { ChatBubbleIcon, ChevronDownIcon } from '../ui/AllSVG.jsx'
import { aboutPageContent } from '../../data/aboutPage.js'

export default function AboutFaq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="custom_container">
        <div className="mx-auto max-w-3xl text-center">
          <SectionBadge icon={ChatBubbleIcon} tone="soft">
            Frequently Asked Questions
          </SectionBadge>
          <h2 className="mt-5 font-display text-[30px] leading-[1.15] font-bold text-primary sm:mt-6 sm:text-[38px] lg:text-[44px]">
            Find answers to common questions
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-muted sm:text-[16px]">
            {aboutPageContent.faqsIntro}
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-3 sm:mt-12">
          {aboutPageContent.faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-[18px] border border-primary/10 bg-white"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className="font-display text-[16px] font-semibold text-primary sm:text-[17px]">
                    {faq.question}
                  </span>
                  <span
                    className={[
                      'flex size-9 shrink-0 items-center justify-center rounded-full border border-primary/10 text-primary transition-transform duration-300',
                      isOpen ? 'rotate-180 bg-secondary' : 'bg-surface',
                    ].join(' ')}
                  >
                    <ChevronDownIcon className="size-3.5" />
                  </span>
                </button>
                <div
                  className={[
                    'grid transition-[grid-template-rows] duration-300 ease-out',
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                  ].join(' ')}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-primary/8 px-5 pb-5 text-[15px] leading-7 text-muted sm:px-6 sm:pb-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
