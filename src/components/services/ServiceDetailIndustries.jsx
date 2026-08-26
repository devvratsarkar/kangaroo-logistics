import SectionBadge from '../common/SectionBadge.jsx'
import { GlobeIcon } from '../ui/AllSVG.jsx'
import { industriesWeServe } from '../../data/industriesWeServe.js'

export default function ServiceDetailIndustries() {
  return (
    <section className="border-y border-primary/8 bg-surface py-14 sm:py-16 lg:py-18">
      <div className="custom_container">
        <div className="mx-auto max-w-3xl text-center">
          <SectionBadge icon={GlobeIcon} tone="soft">
            Serving Diverse Industries
          </SectionBadge>
          <h2 className="mt-5 font-display text-[30px] leading-[1.15] font-bold text-primary sm:mt-6 sm:text-[38px]">
            Industries We Serve
          </h2>
        </div>

        <ul className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {industriesWeServe.map((industry) => (
            <li
              key={industry.id}
              className="rounded-2xl border border-primary/10 bg-white px-5 py-4"
            >
              <h3 className="font-display text-[16px] font-semibold text-primary">
                {industry.title}
              </h3>
              <p className="mt-1.5 text-[13px] leading-6 text-muted">{industry.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
