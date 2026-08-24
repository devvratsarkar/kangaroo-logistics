import {
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from '../../ui/AllSVG.jsx'

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com', Icon: LinkedInIcon },
  { label: 'Facebook', href: 'https://www.facebook.com', Icon: FacebookIcon },
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
          <span className="site-toolbar-badge">Nationwide Logistics</span>

          <div className="site-toolbar-contacts">
            <ToolbarChip href="tel:+17185550124" icon={PhoneIcon}>
              +1 (718) 555-0124
            </ToolbarChip>

            <ToolbarChip
              href="mailto:ops@kangaroologistics.com"
              icon={MailIcon}
              className="hidden md:inline-flex"
            >
              ops@kangaroologistics.com
            </ToolbarChip>

            <ToolbarChip icon={ClockIcon} className="hidden lg:inline-flex">
              Mon–Fri, 8AM – 6PM EST
            </ToolbarChip>

            <ToolbarChip icon={MapPinIcon} className="hidden xl:inline-flex">
              Wilmington, DE
            </ToolbarChip>
          </div>
        </div>

        <div className="site-toolbar-right">
          <p className="site-toolbar-tagline hidden sm:block">
            Reliable. Responsive. Results.
          </p>

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
