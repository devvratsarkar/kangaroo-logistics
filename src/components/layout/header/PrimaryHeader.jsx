import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import PrimaryToolbar from './PrimaryToolbar.jsx'
import PrimaryMenu from './PrimaryMenu.jsx'
import { ChevronDownIcon, CloseIcon, MenuIcon } from '../../ui/AllSVG.jsx'
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
    'block border-b border-primary/10 py-3.5 text-[13px] font-semibold tracking-[0.1em] uppercase',
    isActive ? 'text-secondary' : 'text-primary',
  ].join(' ')

export default function PrimaryHeader() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  const servicesActive =
    location.pathname === getServicesPageRoute() ||
    location.pathname.startsWith(`${getServicesPageRoute()}/`)

  useEffect(() => {
    setMobileOpen(false)
    setMobileServicesOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <PrimaryToolbar />

      <header className="sticky top-0 z-40 bg-white">
        <div className="border-b border-secondary bg-white">
        <div className="custom_container lg:w-[85%]! flex h-19 items-center justify-between gap-6 lg:h-21">
          <Link
            to={getHomePageRoute()}
            className="relative z-10 flex shrink-0 items-center"
            aria-label="Kangaroo Logistics home"
          >
            <img
              src="/logo.png"
              alt="Kangaroo Logistics LLC"
              className="h-11 w-auto sm:h-12 lg:h-13"
              width={260}
              height={74}
            />
          </Link>

          <PrimaryMenu />

          <div className="flex items-center gap-3">
            <Link
              to={getQuotePageRoute()}
              className="hidden items-center border border-secondary bg-secondary px-5 py-2.5 text-[11px] font-bold tracking-[0.16em] text-primary uppercase transition-colors hover:border-primary hover:bg-primary hover:text-white sm:inline-flex"
            >
              Get a Quote
            </Link>

            <button
              type="button"
              className="inline-flex size-11 items-center justify-center border border-primary/15 text-primary transition-colors hover:border-secondary hover:text-secondary lg:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={[
          'border-b border-primary/10 bg-white lg:hidden',
          mobileOpen ? 'block' : 'hidden',
        ].join(' ')}
      >
        <div className="custom_container max-h-[calc(100svh-8.5rem)] overflow-y-auto py-2 pb-6">
          <NavLink to={getHomePageRoute()} className={mobileLinkClass}>
            Home
          </NavLink>

          <NavLink to={getAboutPageRoute()} className={mobileLinkClass}>
            About Us
          </NavLink>

          <div className="border-b border-primary/10">
            <div className="flex items-center justify-between gap-2 border-b border-transparent">
              <NavLink
                to={getServicesPageRoute()}
                className={[
                  'flex-1 py-3.5 text-[13px] font-semibold tracking-widest uppercase',
                  servicesActive ? 'text-secondary' : 'text-primary',
                ].join(' ')}
              >
                Services
              </NavLink>

              <button
                type="button"
                className={[
                  'inline-flex size-10 items-center justify-center',
                  servicesActive || mobileServicesOpen
                    ? 'text-secondary'
                    : 'text-primary',
                ].join(' ')}
                aria-label={mobileServicesOpen ? 'Hide services' : 'Show services'}
                aria-expanded={mobileServicesOpen}
                onClick={() => setMobileServicesOpen((open) => !open)}
              >
                <ChevronDownIcon
                  className={[
                    'size-3.5 transition-transform duration-200',
                    mobileServicesOpen ? 'rotate-180' : '',
                  ].join(' ')}
                />
              </button>
            </div>

            {mobileServicesOpen ? (
              <div className="mb-3 overflow-hidden border border-secondary">
                {serviceNavItems.map((item, index) => (
                  <Link
                    key={item.slug}
                    to={item.to}
                    className={[
                      'block px-4 py-3 text-[13px] font-medium text-primary',
                      index < serviceNavItems.length - 1
                        ? 'border-b border-dashed border-secondary/80'
                        : '',
                    ].join(' ')}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          <NavLink to={getBlogPageRoute()} className={mobileLinkClass}>
            Blog
          </NavLink>

          <NavLink to={getContactPageRoute()} className={mobileLinkClass}>
            Contact
          </NavLink>

          <Link
            to={getQuotePageRoute()}
            className="mt-5 inline-flex w-full items-center justify-center border border-secondary bg-secondary px-4 py-3.5 text-[12px] font-bold tracking-[0.14em] text-primary uppercase"
          >
            Get a Quote
          </Link>
        </div>
      </div>
      </header>
    </>
  )
}
