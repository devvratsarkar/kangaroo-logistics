import { useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ArrowRightLongIcon, ChevronDownIcon } from '../../ui/AllSVG.jsx'
import { serviceNavItems } from '../../../data/services.js'
import {
  getAboutPageRoute,
  getBlogPageRoute,
  getContactPageRoute,
  getHomePageRoute,
  getQuotePageRoute,
  getServicesPageRoute,
} from '../../../routes/routes.js'

function navLinkClass(isActive) {
  return ['site-nav-link', isActive ? 'is-active' : ''].filter(Boolean).join(' ')
}

export function ServicesMegaMenu({
  isOpen,
  onOpen,
  onClose,
  onCancelClose,
  onNavigate,
  servicesMenuId,
}) {
  return (
    <div
      id={servicesMenuId}
      role="menu"
      aria-hidden={!isOpen}
      className={['site-mega-menu', isOpen ? 'is-open' : ''].filter(Boolean).join(' ')}
      onMouseEnter={() => {
        onCancelClose?.()
        onOpen()
      }}
      onMouseLeave={onClose}
    >
      <div className="custom_container site-mega-menu-shell">
        <div className="site-mega-menu-inner">
          <div className="site-mega-menu-intro">
            <span className="site-mega-menu-kicker">What we deliver</span>
            <h3 className="site-mega-menu-title">Logistics Solutions</h3>
            <p className="site-mega-menu-desc">
              End-to-end freight, warehousing, and specialized transport built for
              businesses that cannot afford delays.
            </p>

            <div className="site-mega-menu-stats">
              <div>
                <strong>6+</strong>
                <span>Core services</span>
              </div>
              <div>
                <strong>24/7</strong>
                <span>Dispatch support</span>
              </div>
            </div>

            <Link
              to={getServicesPageRoute()}
              className="site-mega-menu-intro-link"
              onClick={() => {
                onClose()
                onNavigate?.()
              }}
            >
              Explore all services
              <ArrowRightLongIcon className="size-4" />
            </Link>

            <Link
              to={getQuotePageRoute()}
              className="site-mega-menu-quote"
              onClick={() => {
                onClose()
                onNavigate?.()
              }}
            >
              Request a quote
            </Link>
          </div>

          <div className="site-mega-menu-grid">
            {serviceNavItems.map((item) => (
              <Link
                key={item.slug}
                to={item.to}
                role="menuitem"
                className="site-mega-menu-card"
                onClick={() => {
                  onClose()
                  onNavigate?.()
                }}
              >
                <span className="site-mega-menu-card-media">
                  <img src={item.image} alt="" loading="lazy" decoding="async" />
                  <span className="site-mega-menu-card-icon">
                    <img src={item.icon} alt="" loading="lazy" decoding="async" />
                  </span>
                </span>

                <span className="site-mega-menu-card-body">
                  <span className="site-mega-menu-card-title">{item.label}</span>
                  <span className="site-mega-menu-card-desc">{item.description}</span>
                </span>

                <ArrowRightLongIcon className="site-mega-menu-card-arrow size-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function PrimaryMenu({
  onNavigate,
  servicesOpen,
  onServicesOpen,
  onServicesClose,
  onServicesCancelClose,
  servicesMenuId,
}) {
  const location = useLocation()
  const dropdownRef = useRef(null)

  const servicesActive =
    location.pathname === getServicesPageRoute() ||
    location.pathname.startsWith(`${getServicesPageRoute()}/`)

  function openServices() {
    onServicesCancelClose?.()
    onServicesOpen()
  }

  function closeServicesSoon() {
    onServicesClose()
  }

  return (
    <nav aria-label="Primary" className="site-nav">
      <div className="site-nav-track">
        <NavLink
          to={getHomePageRoute()}
          className={({ isActive }) => navLinkClass(isActive)}
          onClick={onNavigate}
        >
          Home
        </NavLink>

        <NavLink
          to={getAboutPageRoute()}
          className={({ isActive }) => navLinkClass(isActive)}
          onClick={onNavigate}
        >
          About Us
        </NavLink>

        <div
          className="site-nav-dropdown-wrap"
          ref={dropdownRef}
          onMouseEnter={openServices}
          onMouseLeave={closeServicesSoon}
        >
          <NavLink
            to={getServicesPageRoute()}
            className={[
              navLinkClass(servicesActive),
              servicesOpen ? 'is-active' : '',
            ]
              .filter(Boolean)
              .join(' ')}
            aria-expanded={servicesOpen}
            aria-controls={servicesMenuId}
            aria-haspopup="menu"
            onFocus={openServices}
            onBlur={(event) => {
              if (!dropdownRef.current?.contains(event.relatedTarget)) {
                onServicesClose()
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
        </div>

        <NavLink
          to={getBlogPageRoute()}
          className={({ isActive }) => navLinkClass(isActive)}
          onClick={onNavigate}
        >
          Blog
        </NavLink>

        <NavLink
          to={getContactPageRoute()}
          className={({ isActive }) => navLinkClass(isActive)}
          onClick={onNavigate}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  )
}
