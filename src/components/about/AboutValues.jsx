import SectionBadge, { BuildingIcon } from '../common/SectionBadge.jsx'
import { aboutPageContent } from '../../data/aboutPage.js'

export default function AboutValues() {
  return (
    <section className="relative py-14 sm:py-16 lg:py-20">
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
        <div className="mx-auto max-w-3xl text-center">
          <SectionBadge icon={BuildingIcon} tone="soft">
            Our Core Values
          </SectionBadge>
          <h2 className="mt-5 font-display text-[28px] leading-[1.2] font-bold text-primary sm:mt-6 sm:text-[36px] lg:text-[42px]">
            {aboutPageContent.valuesIntro}
          </h2>
        </div>

        <ul className="mt-10 grid gap-5 sm:mt-12 lg:grid-cols-2 lg:gap-6">
          {aboutPageContent.values.map((item, index) => (
            <li
              key={item.title}
              className="rounded-[24px] border border-primary/10 bg-white p-6 shadow-[0_14px_40px_rgba(12,32,54,0.05)] sm:p-8"
            >
              <span className="font-display text-[13px] tracking-[0.14em] text-secondary uppercase">
                Value {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 font-display text-[22px] font-bold text-primary sm:text-[24px]">
                {item.title}
              </h3>
              <p className="mt-3 text-[15px] leading-7 text-muted sm:text-[16px] sm:leading-7.5">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
