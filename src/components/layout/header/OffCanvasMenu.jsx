import { useEffect, useLayoutEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDownIcon, CloseIcon, MailIcon, PhoneIcon, ArrowRightLongIcon } from '../../ui/AllSVG.jsx'
import { serviceNavItems } from '../../../data/services.js'
import {
  getAboutPageRoute,
  getBlogPageRoute,
  getContactPageRoute,
  getHomePageRoute,
  getQuotePageRoute,
  getServicesPageRoute,
} from '../../../routes/routes.js'

function mobileLinkClass(isActive) {
  return ['offcanvas-link offcanvas-nav-item', isActive ? 'is-active' : ''].filter(Boolean).join(' ')
}

export default function OffCanvasMenu({ isOpen, onClose }) {
  const location = useLocation()
  const [servicesOpen, setServicesOpen] = useState(false)
  const [ready, setReady] = useState(false)
  const [rendered, setRendered] = useState(false)

  const isVisible = isOpen && ready

  const servicesActive =
    location.pathname === getServicesPageRoute() ||
    location.pathname.startsWith(`${getServicesPageRoute()}/`)

  useLayoutEffect(() => {
    if (isOpen) {
      setRendered(true)
      setReady(false)

      const frame = requestAnimationFrame(() => {
        requestAnimationFrame(() => setReady(true))
      })

      return () => cancelAnimationFrame(frame)
    }

    setReady(false)
    const timer = window.setTimeout(() => setRendered(false), 400)
    return () => window.clearTimeout(timer)
  }, [isOpen])

  useEffect(() => {
    setServicesOpen(false)
    if (isOpen) onClose()
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return undefined

    function onKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isOpen, onClose])

  if (!rendered) return null

  return (
    <div className="lg:hidden" role="presentation">
      <button
        type="button"
        className={['offcanvas-backdrop', isVisible ? 'is-visible' : ''].join(' ')}
        aria-label="Close menu"
        tabIndex={isVisible ? 0 : -1}
        onClick={onClose}
      />

      <aside
        className={['offcanvas-panel', isVisible ? 'is-visible' : ''].join(' ')}
        aria-hidden={!isOpen}
        aria-label="Mobile navigation"
      >
        <div className="offcanvas-head">
          <div className="offcanvas-head-top">
            <Link to={getHomePageRoute()} className="offcanvas-logo" onClick={onClose}>
              <img
                src="/logo.webp"
                alt="Kangaroo Logistics LLC"
                width={160}
                height={40}
                loading="lazy"
                decoding="async"
              />
            </Link>

            <button
              type="button"
              className="offcanvas-close"
              aria-label="Close menu"
              onClick={onClose}
            >
              <CloseIcon className="size-5" />
            </button>
          </div>

          <div className="offcanvas-quick">
            <a href="tel:+17185550124">
              <PhoneIcon className="size-3.5" strokeWidth={1.6} />
              +1 (718) 555-0124
            </a>
            <a href="mailto:ops@kangaroologistics.com">
              <MailIcon className="size-3.5" strokeWidth={1.6} />
              ops@kangaroologistics.com
            </a>
          </div>
        </div>

        <nav aria-label="Mobile" className="offcanvas-body">
          <NavLink
            to={getHomePageRoute()}
            className={({ isActive }) => mobileLinkClass(isActive)}
            onClick={onClose}
          >
            Home
          </NavLink>

          <NavLink
            to={getAboutPageRoute()}
            className={({ isActive }) => mobileLinkClass(isActive)}
            onClick={onClose}
          >
            About Us
          </NavLink>

          <div
            className={[
              'offcanvas-services offcanvas-nav-item',
              servicesOpen ? 'is-open' : '',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <button
              type="button"
              className={[
                'offcanvas-services-toggle',
                servicesActive ? 'is-active' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              aria-label={servicesOpen ? 'Hide services' : 'Show services'}
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((open) => !open)}
            >
              <span className="offcanvas-services-toggle-text">
                <span>Services</span>
                <small>{serviceNavItems.length} logistics solutions</small>
              </span>
              <ChevronDownIcon className="size-3.5" />
            </button>

            <div
              className={[
                'offcanvas-services-panel',
                servicesOpen ? 'is-open' : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <div className="offcanvas-services-panel-inner">
                <div className="offcanvas-subnav">
                  {serviceNavItems.map((item) => (
                    <Link
                      key={item.slug}
                      to={item.to}
                      className="offcanvas-subnav-link"
                      onClick={onClose}
                    >
                      <span className="offcanvas-subnav-icon">
                        <img src={item.icon} alt="" loading="lazy" decoding="async" />
                      </span>

                      <span className="offcanvas-subnav-text">
                        <span className="offcanvas-subnav-title">{item.label}</span>
                        <span className="offcanvas-subnav-desc">{item.description}</span>
                      </span>

                      <ArrowRightLongIcon className="offcanvas-subnav-arrow size-4" />
                    </Link>
                  ))}
                </div>

                <Link
                  to={getServicesPageRoute()}
                  className="offcanvas-subnav-all mb-3!"
                  onClick={onClose}
                >
                  View all services
                  <ArrowRightLongIcon className="size-4" />
                </Link>
              </div>
            </div>
          </div>

          <NavLink
            to={getBlogPageRoute()}
            className={({ isActive }) => mobileLinkClass(isActive)}
            onClick={onClose}
          >
            Blog
          </NavLink>

          <NavLink
            to={getContactPageRoute()}
            className={({ isActive }) => mobileLinkClass(isActive)}
            onClick={onClose}
          >
            Contact
          </NavLink>

          <Link to={getQuotePageRoute()} className="offcanvas-cta offcanvas-nav-item" onClick={onClose}>
            Get a Quote
          </Link>
        </nav>
      </aside>
    </div>
  )
}
