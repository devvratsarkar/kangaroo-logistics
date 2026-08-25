import SectionBadge from '../common/SectionBadge.jsx'
import { ProcessIcon } from '../ui/AllSVG.jsx'

export default function ServiceDetailProcess({ service }) {
  return (
    <section className="service-detail-process relative overflow-hidden bg-primary py-14 text-white sm:py-16 lg:py-20">
      <img
        src="/home/process-shape.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-8 left-0 hidden w-28 opacity-70 lg:block xl:w-36"
      />
      <img
        src="/home/process-shape2.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 hidden w-32 opacity-70 lg:block xl:w-40"
      />

      <div className="custom_container relative">
        <div className="mx-auto max-w-3xl text-center">
          <SectionBadge icon={ProcessIcon} tone="light">
            Working Process
          </SectionBadge>
          <h2 className="mt-5 font-display text-[30px] leading-[1.15] font-bold sm:mt-6 sm:text-[38px] lg:text-[44px]">
            {service.processTitle}
          </h2>
        </div>

        <ol className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-5">
          {service.process.map((item) => (
            <li
              key={item.step}
              className="rounded-[22px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <span className="font-display text-[13px] font-semibold tracking-[0.16em] text-secondary uppercase">
                Step {item.step}
              </span>
              <h3 className="mt-4 font-display text-[20px] font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-[14px] leading-6 text-white/65 sm:text-[15px] sm:leading-7">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
