import { Link } from 'react-router-dom'
import SectionBadge, { BuildingIcon } from '../common/SectionBadge.jsx'
import { ArrowRightLongIcon } from '../ui/AllSVG.jsx'
import { aboutPageContent } from '../../data/aboutPage.js'
import { getContactPageRoute } from '../../routes/routes.js'

export default function AboutIntro() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="custom_container">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-18">
          <div>
            <SectionBadge icon={BuildingIcon} tone="soft">
              About Us
            </SectionBadge>
            <h2 className="mt-5 font-display text-[30px] leading-[1.15] font-bold text-primary sm:mt-6 sm:text-[38px] lg:text-[44px]">
              {aboutPageContent.introTitle}
            </h2>
            <div className="mt-4 h-px w-14 bg-secondary" aria-hidden="true" />

            <div className="mt-5 space-y-4 text-[15px] leading-7 text-muted sm:text-[16px] sm:leading-7.5">
              {aboutPageContent.introParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>

            <Link
              to={getContactPageRoute()}
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-display text-[15px] font-medium text-white transition-colors hover:bg-primary/90 sm:text-[16px]"
            >
              Send Message
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
                alt="Professional warehouse logistics operations"
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
    </section>
  )
}
