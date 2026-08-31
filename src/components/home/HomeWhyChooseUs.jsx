import SectionBadge from '../common/SectionBadge.jsx'
import { TruckIcon } from '../ui/AllSVG.jsx'
import { whyChooseUsItems } from '../../data/whyChooseUs.js'

function WhyChooseImage({ item, accent = false }) {
  return (
    <div className="relative mx-auto w-full max-w-140 lg:mx-0 lg:max-w-none">
      {accent ? (
        <div
          aria-hidden="true"
          className="welcome-image-accent pointer-events-none absolute inset-x-2 top-2 bottom-0 rounded-[20px] bg-secondary sm:inset-x-3 sm:top-3"
        />
      ) : null}
      <div className="relative overflow-hidden rounded-[18px] border border-white/80 shadow-[0_16px_45px_rgba(13,27,61,0.1)] sm:rounded-[22px]">
        <img
          src={item.image}
          alt={item.imageAlt}
          className="aspect-600/350 w-full object-cover"
          width={600}
          height={350}
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  )
}

function WhyChooseContent({ item }) {
  return (
    <div className="max-w-xl lg:max-w-none">
      <h3 className="font-display text-[26px] leading-[1.2] font-bold text-primary sm:text-[32px] lg:text-[36px]">
        {item.title}
      </h3>
      <div className="mt-4 h-px w-14 bg-secondary" aria-hidden="true" />
      <p className="mt-5 text-[15px] leading-7 text-muted sm:text-[16px] sm:leading-7.5">
        {item.description}
      </p>
    </div>
  )
}

export default function HomeWhyChooseUs() {
  if (!whyChooseUsItems.length) return null

  return (
    <section className="relative py-14 sm:py-16 lg:py-20">
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: 'var(--color-surface)',
          backgroundImage: "url('/home/about-bg.webp')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
        aria-hidden="true"
      />

      <div className="custom_container relative">
        <div className="mx-auto max-w-3xl text-center">
          <SectionBadge icon={TruckIcon} tone="soft">
            About Us
          </SectionBadge>
          <h2 className="mt-6 font-display text-[34px] leading-[1.15] font-bold text-primary sm:text-[42px] lg:text-[50px]">
            Why Choose us ?
          </h2>
        </div>

        <div className="mt-12 space-y-14 sm:mt-14 sm:space-y-16 lg:mt-16 lg:space-y-20">
          {whyChooseUsItems.map((item, index) => {
            const imageFirst = index % 2 === 0
            return (
              <article
                key={item.id}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-18"
              >
                <div className={imageFirst ? '' : 'lg:order-2'}>
                  <WhyChooseImage item={item} accent={imageFirst} />
                </div>
                <div className={imageFirst ? '' : 'lg:order-1'}>
                  <WhyChooseContent item={item} />
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
