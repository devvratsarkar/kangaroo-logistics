import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Autoplay, EffectCoverflow } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { homeSlides } from '../../data/homeSlides.js'
import { ArrowLeftLongIcon, ArrowRightLongIcon } from '../ui/AllSVG.jsx'
import 'swiper/css'
import 'swiper/css/effect-coverflow'

function AnimatedLine({ text, className = '', delay = 0, active }) {
  const chars = Array.from(text)

  return (
    <h2
      className={['overflow-hidden font-display font-semibold text-white', className].join(' ')}
      style={{ perspective: '400px' }}
    >
      <span className="inline-block">
        {chars.map((char, index) => (
          <span
            key={`${text}-${index}-${active ? 'on' : 'off'}`}
            className={[
              'inline-block whitespace-pre will-change-transform',
              active ? 'banner-char-animate' : 'opacity-0',
            ].join(' ')}
            style={
              active
                ? { animationDelay: `${delay + index * 0.02}s` }
                : undefined
            }
          >
            {char}
          </span>
        ))}
      </span>
    </h2>
  )
}

function SlideContent({ slide, active }) {
  return (
    <div className="relative z-2 flex h-full min-h-130 items-center px-5 py-22 sm:min-h-140 sm:px-8 sm:py-26.25 lg:min-h-155 lg:px-12 lg:py-30 xl:px-16">
      <div className="max-w-5xl">
        <h1
          className={[
            'relative mb-7 inline-flex min-h-10 items-center pl-6 font-display text-[15px] font-medium text-white sm:mb-8 sm:text-lg',
            active ? 'banner-fade-animate' : 'opacity-0',
          ].join(' ')}
          style={{
            backgroundImage: "url('/banners/banner-sub.webp')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'left center',
            paddingRight: '2.5rem',
            animationDelay: '0.05s',
          }}
        >
          {slide.eyebrow}
        </h1>

        <div className="space-y-1 sm:space-y-0">
          {slide.lines.map((line, lineIndex) => (
            <AnimatedLine
              key={`${slide.id}-${line}`}
              text={line}
              active={active}
              delay={0.12 + lineIndex * 0.14}
              className={[
                'text-[34px] leading-[1.08] sm:text-[40px] sm:leading-12.5 md:text-[50px] md:leading-15 lg:text-[64px] lg:leading-17.5 xl:text-[74px] xl:leading-19.5',
                lineIndex === 0 ? 'tracking-[-0.01em]' : 'font-semibold',
              ].join(' ')}
            />
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-8 sm:mt-12 lg:mt-12.5">
          <div
            className={active ? 'banner-fade-animate' : 'opacity-0'}
            style={{ animationDelay: '0.55s' }}
          >
            <Link
              to={slide.cta.to}
              className="group relative inline-flex items-center overflow-hidden rounded-full bg-secondary px-8 py-4 font-display text-lg font-medium text-primary"
            >
              <span className="absolute inset-0 origin-center scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
              <span className="relative z-1 transition-colors duration-300 group-hover:text-white">
                {slide.cta.label}
              </span>
              <span
                className="relative z-1 mx-4 h-4 w-px bg-primary/45 transition-colors duration-300 group-hover:bg-white/80"
                aria-hidden="true"
              />
              <ArrowRightLongIcon className="relative z-1 size-4 transition-colors duration-300 group-hover:text-white" />
            </Link>
          </div>

          <div
            className={[
              'relative flex items-center gap-5 border-t border-white/15 pt-5.5 sm:max-w-135 lg:max-w-178.75',
              active ? 'banner-fade-animate' : 'opacity-0',
            ].join(' ')}
            style={{ animationDelay: '0.7s' }}
          >
            <img
              src="/banners/since.webp"
              alt=""
              className="size-14 object-contain sm:size-16"
              width={64}
              height={64}
            />
            <div>
              <h3 className="font-display text-lg font-semibold text-white">
                We&apos;re Since <span className="text-secondary">{slide.sinceYear}</span>
              </h3>
              <h4 className="mt-1 font-display text-lg font-semibold text-white">
                {slide.sinceLocation}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function HomeHeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const swiperRef = useRef(null)

  return (
    <section
      className="home-banner-slider relative px-0 pt-0 pb-0 sm:px-4.5 sm:pt-4 lg:px-7.5"
      aria-label="Home banner"
    >
      <div className="relative overflow-hidden rounded-none sm:rounded-[20px]">
        <Swiper
          modules={[Autoplay, EffectCoverflow]}
          className="banner-classic-swiper"
          effect="coverflow"
          speed={1500}
          loop
          grabCursor
          centeredSlides
          slidesPerView={1}
          spaceBetween={30}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper
            setActiveIndex(swiper.realIndex)
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex)
          }}
        >
          {homeSlides.map((slide, slideIndex) => (
            <SwiperSlide key={slide.id} className="h-auto! overflow-hidden rounded-none sm:rounded-[20px]">
              <div className="relative overflow-hidden rounded-none sm:rounded-[20px]">
                <img
                  src={slide.image}
                  alt={slide.imageAlt}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/55" />
                <SlideContent
                  slide={slide}
                  active={activeIndex === slideIndex}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          type="button"
          aria-label="Previous slide"
          className="absolute top-1/2 left-3 z-20 hidden size-15 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-secondary xl:left-10 xl:flex"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <ArrowLeftLongIcon />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          className="absolute top-1/2 right-3 z-20 hidden size-15 -translate-y-1/2 items-center justify-center rounded-full bg-secondary text-white transition-colors hover:bg-primary xl:right-10 xl:flex"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <ArrowRightLongIcon />
        </button>

        <div className="absolute right-5 bottom-5 z-20 flex items-center gap-2 xl:hidden">
          <button
            type="button"
            aria-label="Previous slide"
            className="flex size-11 items-center justify-center rounded-full bg-white/10 text-white"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ArrowLeftLongIcon className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            className="flex size-11 items-center justify-center rounded-full bg-secondary text-white"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ArrowRightLongIcon className="size-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
