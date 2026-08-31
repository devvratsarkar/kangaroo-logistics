import { Link } from 'react-router-dom'
import {
  footerBottomLinks,
  footerCompanyLinks,
  footerContact,
  footerDescription,
  footerSocialLinks,
  footerUsefulLinks,
} from '../../../data/footerLinks.js'
import { getHomePageRoute } from '../../../routes/routes.js'
import {
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from '../../ui/AllSVG.jsx'

const socialIcons = {
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
}

function FooterLink({ item }) {
  const className = 'site-footer-link'

  if (item.to.startsWith('#')) {
    return (
      <a href={item.to} className={className}>
        {item.label}
      </a>
    )
  }

  return (
    <Link to={item.to} className={className}>
      {item.label}
    </Link>
  )
}

function FooterNavGroup({ title, links }) {
  return (
    <div className="site-footer-nav-group">
      <h2 className="site-footer-heading">{title}</h2>
      <ul className="site-footer-links">
        {links.map((item) => (
          <li key={item.label}>
            <FooterLink item={item} />
          </li>
        ))}
      </ul>
    </div>
  )
}

function ContactCard({ icon: Icon, label, children }) {
  return (
    <div className="site-footer-contact-card">
      <span className="site-footer-contact-icon" aria-hidden="true">
        <Icon className="size-5" strokeWidth={1.6} />
      </span>
      <div className="site-footer-contact-body">
        <span className="site-footer-contact-label">{label}</span>
        <div className="site-footer-contact-value">{children}</div>
      </div>
    </div>
  )
}

export default function PrimaryFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer-accent" aria-hidden="true" />

      <div className="site-footer-main">
        <div className="site-footer-glow site-footer-glow--left" aria-hidden="true" />
        <div className="site-footer-glow site-footer-glow--right" aria-hidden="true" />

        <div className="custom_container site-footer-inner">
          <div className="site-footer-top">
            <div className="site-footer-brand">
              <Link to={getHomePageRoute()} className="site-footer-logo" aria-label="Kangaroo Logistics home">
                <img
                  src="/logo.webp"
                  alt="Kangaroo Logistics LLC"
                  width={240}
                  height={60}
                  loading="lazy"
                  decoding="async"
                />
              </Link>

              <p className="site-footer-desc">{footerDescription}</p>

              <ul className="site-footer-social">
                {footerSocialLinks.map(({ label, href, icon }) => {
                  const Icon = socialIcons[icon]
                  if (!Icon) return null
                  return (
                    <li key={label}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={label}
                        className="site-footer-social-link"
                      >
                        <Icon className="size-4" />
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="site-footer-nav">
              <FooterNavGroup title="Company" links={footerCompanyLinks} />
              <FooterNavGroup title="Resources" links={footerUsefulLinks} />
            </div>
          </div>

          <div className="site-footer-contact-grid">
            <ContactCard icon={MapPinIcon} label={footerContact.addressLabel}>
              <p>{footerContact.address}</p>
            </ContactCard>

            <ContactCard icon={MailIcon} label="Email">
              {footerContact.emails.map((email) => (
                <a key={email.href} href={email.href} className="site-footer-contact-link">
                  {email.label}
                </a>
              ))}
            </ContactCard>

            <ContactCard icon={PhoneIcon} label="Phone">
              {footerContact.phones.map((phone) => (
                <a key={phone.href} href={phone.href} className="site-footer-contact-link">
                  {phone.label}
                </a>
              ))}
            </ContactCard>
          </div>

          <div className="site-footer-bottom">
            <p className="site-footer-copyright">
              &copy; {year} Kangaroo Logistics. All rights reserved.
            </p>
            <ul className="site-footer-bottom-menu">
              {footerBottomLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.to}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
