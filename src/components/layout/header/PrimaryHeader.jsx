import { useEffect, useId, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import PrimaryToolbar from './PrimaryToolbar.jsx'
import PrimaryMenu, { ServicesMegaMenu } from './PrimaryMenu.jsx'
import OffCanvasMenu from './OffCanvasMenu.jsx'
import { ArrowRightLongIcon, CloseIcon, MenuIcon, PhoneIcon } from '../../ui/AllSVG.jsx'
import {
  getHomePageRoute,
  getQuotePageRoute,
} from '../../../routes/routes.js'

export default function PrimaryHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const servicesMenuId = useId()
  const servicesCloseTimerRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    setServicesOpen(false)
  }, [location.pathname])

  useEffect(() => {
    return () => {
      if (servicesCloseTimerRef.current) clearTimeout(servicesCloseTimerRef.current)
    }
  }, [])

  function cancelServicesClose() {
    if (servicesCloseTimerRef.current) {
      clearTimeout(servicesCloseTimerRef.current)
      servicesCloseTimerRef.current = null
    }
  }

  function openServicesMenu() {
    cancelServicesClose()
    setServicesOpen(true)
  }

  function scheduleServicesClose() {
    cancelServicesClose()
    servicesCloseTimerRef.current = setTimeout(() => {
      setServicesOpen(false)
      servicesCloseTimerRef.current = null
    }, 220)
  }

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!servicesOpen) return undefined

    function onKeyDown(event) {
      if (event.key === 'Escape') setServicesOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [servicesOpen])

  return (
    <>
      <PrimaryToolbar />

      <header
        className={[
          'site-header',
          scrolled ? 'is-scrolled' : '',
          servicesOpen ? 'is-services-open' : '',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <div className="site-header-pattern" aria-hidden="true" />

        <div className="site-header-body">
          <div className="custom_container site-header-shell">
            <div className="site-header-bar">
              <Link
                to={getHomePageRoute()}
                className="site-header-logo"
                aria-label="Kangaroo Logistics home"
              >
                <img
                  src="/logo.png"
                  alt="Kangaroo Logistics LLC"
                  width={260}
                  height={74}
                />
              </Link>

              <PrimaryMenu
                servicesOpen={servicesOpen}
                onServicesOpen={openServicesMenu}
                onServicesClose={scheduleServicesClose}
                onServicesCancelClose={cancelServicesClose}
                servicesMenuId={servicesMenuId}
              />

              <div className="site-header-actions">
                <div className="site-header-help">
                  <span className="site-header-help-label">Need assistance?</span>
                  <a href="tel:+17185550124" className="site-header-help-phone">
                    <PhoneIcon className="size-4" strokeWidth={1.7} />
                    +1 (718) 555-0124
                  </a>
                </div>

                <Link to={getQuotePageRoute()} className="site-header-cta">
                  <span className="site-header-cta-text">
                    <span>Get a Quote</span>
                    <small>Free estimate in 24hrs</small>
                  </span>
                  <span className="site-header-cta-icon" aria-hidden="true">
                    <ArrowRightLongIcon className="size-5" />
                  </span>
                </Link>

                <button
                  type="button"
                  className="site-header-menu-btn"
                  aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                  aria-expanded={mobileOpen}
                  onClick={() => setMobileOpen((open) => !open)}
                >
                  {mobileOpen ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
                </button>
              </div>
            </div>
          </div>

          <ServicesMegaMenu
            isOpen={servicesOpen}
            onOpen={openServicesMenu}
            onClose={scheduleServicesClose}
            onCancelClose={cancelServicesClose}
            servicesMenuId={servicesMenuId}
          />
        </div>
      </header>

      <OffCanvasMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
