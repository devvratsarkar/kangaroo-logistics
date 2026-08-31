import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { features } from '../../data/features.js'
import SectionBadge from '../common/SectionBadge.jsx'
import { ArrowLeftLongIcon, ArrowRightLongIcon } from '../ui/AllSVG.jsx'

import 'swiper/css'

function FeatureCard({ feature }) {
  return (
    <div className="feature-card">
      <div className="feature-card-thumb">
        <figure className="feature-card-figure">
          <img src={feature.image} alt={feature.imageAlt} loading="lazy" decoding="async" />
        </figure>

        <div className="feature-card-content">
          <div className="feature-card-icon">
            <img src={feature.icon} alt="" width={52} height={52} />
          </div>
          <h3 className="feature-card-title">{feature.title}</h3>
        </div>
      </div>
    </div>
  )
}

export default function HomeFeatures() {
  const swiperRef = useRef(null)
  const hasPillars = features.length > 0

  return (
    <section className="home-features-section" aria-label="Pillars of Nationwide Logistics">
      <div className="custom_container">
        <div className="home-features-top">
          <div className="home-features-header">
            <SectionBadge tone="soft">Pillars</SectionBadge>
            <h2 className="home-features-title">Pillars of</h2>
            <h2 className="home-features-title home-features-title--last">
              Nationwide Logistics
            </h2>
          </div>

          {hasPillars ? (
            <div className="feature-slider-arrows">
              <button
                type="button"
                className="feature-slider-prev"
                aria-label="Previous pillar"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <ArrowLeftLongIcon />
              </button>
              <button
                type="button"
                className="feature-slider-next"
                aria-label="Next pillar"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <ArrowRightLongIcon />
              </button>
            </div>
          ) : null}
        </div>

        {hasPillars ? (
          <div className="home-features-slider">
            <Swiper
              className="features-classic-swiper"
              speed={1500}
              loop
              grabCursor
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                576: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
                1400: { slidesPerView: 3 },
                1920: { slidesPerView: 3 },
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper
              }}
            >
              {features.map((feature) => (
                <SwiperSlide key={feature.id}>
                  <FeatureCard feature={feature} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : null}
      </div>
    </section>
  )
}
