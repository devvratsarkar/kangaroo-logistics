import { useEffect, useId, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDownIcon } from '../../ui/AllSVG.jsx'
import { serviceNavItems } from '../../../data/services.js'
import {
  getAboutPageRoute,
  getBlogPageRoute,
  getContactPageRoute,
  getHomePageRoute,
  getServicesPageRoute,
} from '../../../routes/routes.js'

const linkClass = ({ isActive }) =>
  [
    'relative px-3 py-2 text-[13px] font-semibold tracking-[0.1em] uppercase transition-colors',
    'after:absolute after:inset-x-3 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-secondary after:transition-transform after:duration-200',
    isActive
      ? 'text-secondary after:scale-x-100'
      : 'text-primary hover:text-secondary hover:after:scale-x-100',
  ].join(' ')

export default function PrimaryMenu({ onNavigate }) {
  const location = useLocation()
  const [servicesOpen, setServicesOpen] = useState(false)
  const dropdownRef = useRef(null)
  const closeTimerRef = useRef(null)
  const menuId = useId()

  const servicesActive =
    location.pathname === getServicesPageRoute() ||
    location.pathname.startsWith(`${getServicesPageRoute()}/`)

  useEffect(() => {
    setServicesOpen(false)
  }, [location.pathname])

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
    }
  }, [])

  useEffect(() => {
    if (!servicesOpen) return undefined

    function onKeyDown(event) {
      if (event.key === 'Escape') setServicesOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [servicesOpen])

  function openServices() {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
    setServicesOpen(true)
  }

  function closeServicesSoon() {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
    closeTimerRef.current = setTimeout(() => setServicesOpen(false), 120)
  }

  return (
    <nav aria-label="Primary" className="hidden items-center gap-3 lg:flex">
      <NavLink to={getHomePageRoute()} className={linkClass} onClick={onNavigate}>
        Home
      </NavLink>

      <NavLink to={getAboutPageRoute()} className={linkClass} onClick={onNavigate}>
        About Us
      </NavLink>

      <div
        className="relative"
        ref={dropdownRef}
        onMouseEnter={openServices}
        onMouseLeave={closeServicesSoon}
      >
        <NavLink
          to={getServicesPageRoute()}
          className={[
            'relative inline-flex items-center gap-1.5 px-3 py-2 text-[13px] font-semibold tracking-widest uppercase transition-colors',
            'after:absolute after:inset-x-3 after:-bottom-0.5 after:h-px after:origin-left after:bg-secondary after:transition-transform after:duration-200',
            servicesActive || servicesOpen
              ? 'text-secondary after:scale-x-100'
              : 'text-primary after:scale-x-0 hover:text-secondary hover:after:scale-x-100',
          ].join(' ')}
          aria-expanded={servicesOpen}
          aria-controls={menuId}
          aria-haspopup="menu"
          onFocus={openServices}
          onBlur={(event) => {
            if (!dropdownRef.current?.contains(event.relatedTarget)) {
              setServicesOpen(false)
            }
          }}
          onClick={onNavigate}
        >
          Services
          <ChevronDownIcon
            className={[
              'size-3.5 transition-transform duration-200',
              servicesOpen ? 'rotate-180' : '',
            ].join(' ')}
          />
        </NavLink>

        <div
          id={menuId}
          role="menu"
          aria-hidden={!servicesOpen}
          className={[
            'absolute left-0 top-full z-50 w-60 pt-3 transition-[opacity,transform] duration-150',
            servicesOpen
              ? 'pointer-events-auto translate-y-0 opacity-100'
              : 'pointer-events-none -translate-y-1 opacity-0',
          ].join(' ')}
        >
          <div className="overflow-hidden border border-secondary bg-white">
            <ul>
              {serviceNavItems.map((item, index) => (
                <li key={item.slug}>
                  <Link
                    to={item.to}
                    role="menuitem"
                    className={[
                      'block px-4 py-3 text-[13px] font-medium text-primary transition-colors hover:bg-primary/4 hover:text-primary',
                      index < serviceNavItems.length - 1
                        ? 'border-b border-dashed border-secondary/80'
                        : '',
                    ].join(' ')}
                    onClick={() => {
                      setServicesOpen(false)
                      onNavigate?.()
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <NavLink to={getBlogPageRoute()} className={linkClass} onClick={onNavigate}>
        Blog
      </NavLink>

      <NavLink to={getContactPageRoute()} className={linkClass} onClick={onNavigate}>
        Contact
      </NavLink>
    </nav>
  )
}
