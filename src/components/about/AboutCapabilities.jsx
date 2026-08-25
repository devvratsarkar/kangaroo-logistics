import { aboutPageContent } from '../../data/aboutPage.js'

export default function AboutCapabilities() {
  return (
    <section className="overflow-hidden bg-primary py-10 text-white sm:py-12">
      <div className="custom_container">
        <ul className="flex flex-wrap justify-center gap-3 sm:gap-3.5">
          {aboutPageContent.capabilities.map((item) => (
            <li
              key={item}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 font-display text-[13px] tracking-[0.04em] text-white/85 sm:px-5 sm:text-[14px]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
