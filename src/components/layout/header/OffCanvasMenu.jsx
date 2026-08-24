import { useEffect, useLayoutEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDownIcon, CloseIcon } from '../../ui/AllSVG.jsx'
import { serviceNavItems } from '../../../data/services.js'
import {
  getAboutPageRoute,
  getBlogPageRoute,
  getContactPageRoute,
  getHomePageRoute,
  getQuotePageRoute,
  getServicesPageRoute,
} from '../../../routes/routes.js'

const mobileLinkClass = ({ isActive }) =>
  [
    'offcanvas-nav-item block border-b border-primary/10 py-3.5 text-[13px] font-semibold tracking-[0.1em] uppercase',
    isActive ? 'text-secondary' : 'text-primary hover:text-secondary',
  ].join(' ')

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
        <div className="flex shrink-0 items-center justify-between border-b border-secondary px-5 py-4">
          <span className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase">
            Menu
          </span>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center border border-primary/15 text-primary transition-colors hover:border-secondary hover:text-secondary"
            aria-label="Close menu"
            onClick={onClose}
          >
            <CloseIcon />
          </button>
        </div>

        <nav
          aria-label="Mobile"
          className="flex-1 overflow-y-auto px-5 py-2 pb-8"
        >
          <NavLink to={getHomePageRoute()} className={mobileLinkClass} onClick={onClose}>
            Home
          </NavLink>

          <NavLink to={getAboutPageRoute()} className={mobileLinkClass} onClick={onClose}>
            About Us
          </NavLink>

          <div className="offcanvas-nav-item border-b border-primary/10">
            <div className="flex items-center justify-between gap-2">
              <NavLink
                to={getServicesPageRoute()}
                className={[
                  'flex-1 py-3.5 text-[13px] font-semibold tracking-widest uppercase transition-colors',
                  servicesActive ? 'text-secondary' : 'text-primary hover:text-secondary',
                ].join(' ')}
                onClick={onClose}
              >
                Services
              </NavLink>

              <button
                type="button"
                className={[
                  'inline-flex size-10 items-center justify-center transition-colors',
                  servicesActive || servicesOpen
                    ? 'text-secondary'
                    : 'text-primary hover:text-secondary',
                ].join(' ')}
                aria-label={servicesOpen ? 'Hide services' : 'Show services'}
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((open) => !open)}
              >
                <ChevronDownIcon
                  className={[
                    'size-3.5 transition-transform duration-300 ease-out',
                    servicesOpen ? 'rotate-180' : '',
                  ].join(' ')}
                />
              </button>
            </div>

            <div
              className={[
                'grid transition-[grid-template-rows,opacity] duration-300 ease-out',
                servicesOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
              ].join(' ')}
            >
              <div className="overflow-hidden">
                <div className="mb-3">
                  {serviceNavItems.map((item, index) => (
                    <Link
                      key={item.slug}
                      to={item.to}
                      className={[
                        'block px-4 py-3 text-[13px] font-medium text-primary transition-colors hover:bg-primary/4',
                        index < serviceNavItems.length - 1
                          ? 'border-b border-dashed border-secondary/80'
                          : '',
                      ].join(' ')}
                      onClick={onClose}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <NavLink to={getBlogPageRoute()} className={mobileLinkClass} onClick={onClose}>
            Blog
          </NavLink>

          <NavLink to={getContactPageRoute()} className={mobileLinkClass} onClick={onClose}>
            Contact
          </NavLink>

          <Link
            to={getQuotePageRoute()}
            className="offcanvas-nav-item mt-5 inline-flex w-full items-center justify-center border border-secondary bg-secondary px-4 py-3.5 text-[12px] font-bold tracking-[0.14em] text-primary uppercase transition-colors hover:border-primary hover:bg-primary hover:text-white"
            onClick={onClose}
          >
            Get a Quote
          </Link>
        </nav>
      </aside>
    </div>
  )
}
