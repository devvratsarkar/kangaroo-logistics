import { useCallback, useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getServiceBySlug, serviceNavItems } from '../../data/services.js'
import { getServicesPageRoute } from '../../routes/routes.js'
import ServiceDetailHero from '../../components/services/ServiceDetailHero.jsx'
import ServiceDetailOverview from '../../components/services/ServiceDetailOverview.jsx'
import ServiceDetailOfferings from '../../components/services/ServiceDetailOfferings.jsx'
import ServiceDetailIndustries from '../../components/services/ServiceDetailIndustries.jsx'
import ServiceDetailReasons from '../../components/services/ServiceDetailReasons.jsx'
import ServiceDetailProcess from '../../components/services/ServiceDetailProcess.jsx'
import ServiceDetailFaq from '../../components/services/ServiceDetailFaq.jsx'
import ServicesCta from '../../components/services/ServicesCta.jsx'
import QuoteModal from '../../components/quote/QuoteModal.jsx'
import { ArrowRightLongIcon } from '../../components/ui/AllSVG.jsx'

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)
  const [quoteOpen, setQuoteOpen] = useState(false)

  const openQuoteModal = useCallback(() => setQuoteOpen(true), [])
  const closeQuoteModal = useCallback(() => setQuoteOpen(false), [])

  useEffect(() => {
    window.scrollTo(0, 0)
    setQuoteOpen(false)
  }, [slug])

  if (!service) {
    return <Navigate to={getServicesPageRoute()} replace />
  }

  const related = serviceNavItems.filter((item) => item.slug !== service.slug).slice(0, 3)

  return (
    <>
      <ServiceDetailHero service={service} onRequestQuote={openQuoteModal} />
      <ServiceDetailOverview service={service} onRequestQuote={openQuoteModal} />
      <ServiceDetailOfferings service={service} />
      <ServiceDetailIndustries />
      <ServiceDetailReasons service={service} />
      <ServiceDetailProcess service={service} />
      <ServiceDetailFaq service={service} />

      <section className="border-t border-primary/8 bg-white py-12 sm:py-14">
        <div className="custom_container">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-display text-[13px] tracking-[0.12em] text-muted uppercase">
                Related services
              </p>
              <h2 className="mt-2 font-display text-[28px] font-bold text-primary sm:text-[32px]">
                Explore more capabilities
              </h2>
            </div>
            <Link
              to={getServicesPageRoute()}
              className="inline-flex items-center gap-2 font-display text-[15px] font-medium text-primary underline-offset-4 hover:underline"
            >
              View all services
              <ArrowRightLongIcon className="size-4" />
            </Link>
          </div>

          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  to={item.to}
                  className="group flex h-full items-center gap-4 rounded-[20px] border border-primary/10 bg-surface p-4 transition-colors hover:border-primary/25 hover:bg-white"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-secondary">
                    <img
                      src={item.icon}
                      alt=""
                      className="size-6 object-contain brightness-0"
                      width={24}
                      height={24}
                    />
                  </span>
                  <span>
                    <span className="block font-display text-[16px] font-semibold text-primary">
                      {item.label}
                    </span>
                    <span className="mt-1 block text-[13px] leading-5 text-muted">
                      {item.description}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ServicesCta />

      <QuoteModal
        isOpen={quoteOpen}
        onClose={closeQuoteModal}
        lockedServiceSlug={service.slug}
        serviceLabel={service.label}
      />
    </>
  )
}
