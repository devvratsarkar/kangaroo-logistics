import { companyAddress, primaryEmail } from '../../../data/companyContact.js'
import {
  ClockIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
} from '../../ui/AllSVG.jsx'

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com', Icon: LinkedInIcon },
  { label: 'Instagram', href: 'https://www.instagram.com', Icon: InstagramIcon },
]

function ToolbarChip({ href, icon: Icon, children, className = '' }) {
  const content = (
    <>
      <span className="site-toolbar-chip-icon">
        <Icon className="size-3.5" strokeWidth={1.6} />
      </span>
      <span>{children}</span>
    </>
  )

  if (href) {
    return (
      <a href={href} className={['site-toolbar-chip', className].filter(Boolean).join(' ')}>
        {content}
      </a>
    )
  }

  return (
    <span className={['site-toolbar-chip', className].filter(Boolean).join(' ')}>
      {content}
    </span>
  )
}

export default function PrimaryToolbar() {
  return (
    <div className="site-toolbar">
      <div className="site-toolbar-grid-pattern" aria-hidden="true" />

      <div className="custom_container site-toolbar-inner">
        <div className="site-toolbar-left">
          <div className="site-toolbar-contacts">
            <ToolbarChip href={primaryEmail.href} icon={MailIcon}>
              {primaryEmail.label}
            </ToolbarChip>

            <ToolbarChip icon={ClockIcon} className="hidden sm:inline-flex">
              Working Hours: 24/7 Availability
            </ToolbarChip>

            <ToolbarChip icon={MapPinIcon} className="hidden md:inline-flex">
              {companyAddress.short}
            </ToolbarChip>
          </div>
        </div>

        <div className="site-toolbar-right">
          <div className="site-toolbar-social">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="site-toolbar-social-link"
              >
                <Icon className="size-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
