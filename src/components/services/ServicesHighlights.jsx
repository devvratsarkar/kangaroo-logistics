import { CheckCircleIcon } from '../ui/AllSVG.jsx'
import { servicesPageHighlights } from '../../data/services.js'

export default function ServicesHighlights() {
  return (
    <section className="border-b border-primary/8 bg-white py-10 sm:py-12">
      <div className="custom_container">
        <ul className="grid gap-6 md:grid-cols-3 md:gap-8">
          {servicesPageHighlights.map((item) => (
            <li key={item.title} className="flex gap-4">
              <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                <CheckCircleIcon className="size-5" strokeWidth={1.6} />
              </span>
              <div>
                <h2 className="font-display text-[18px] font-semibold text-primary sm:text-[19px]">
                  {item.title}
                </h2>
                <p className="mt-2 text-[14px] leading-6 text-muted sm:text-[15px] sm:leading-7">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
