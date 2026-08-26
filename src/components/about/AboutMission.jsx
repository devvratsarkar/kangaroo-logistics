import SectionBadge from '../common/SectionBadge.jsx'
import { CheckCircleIcon, ProcessIcon } from '../ui/AllSVG.jsx'
import { aboutPageContent } from '../../data/aboutPage.js'

export default function AboutMission() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="custom_container">
        <div className="mx-auto max-w-3xl text-center">
          <SectionBadge icon={ProcessIcon} tone="soft">
            Kangaroo Logistics
          </SectionBadge>
          <h2 className="mt-5 font-display text-[30px] leading-[1.15] font-bold text-primary sm:mt-6 sm:text-[38px] lg:text-[44px]">
            {aboutPageContent.missionTitle}
          </h2>
        </div>

        <ul className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {aboutPageContent.missionItems.map((item) => (
            <li
              key={item.title}
              className="rounded-[22px] border border-primary/10 bg-white p-6 shadow-[0_10px_36px_rgba(13,27,61,0.05)] sm:p-7"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
                <CheckCircleIcon className="size-5" strokeWidth={1.6} />
              </span>
              <h3 className="mt-4 font-display text-[18px] leading-snug font-semibold text-primary sm:text-[19px]">
                {item.title}
              </h3>
              <p className="mt-3 text-[14px] leading-6 text-muted sm:text-[15px] sm:leading-7">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
