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

export default function PrimaryToolbar() {
  return (
    <div className="border-b border-secondary/25 bg-primary text-white">
      <div className="custom_container flex h-9 items-center justify-between gap-4 text-[11px] tracking-[0.04em] sm:h-10 sm:text-[12px]">
        <div className="flex min-w-0 items-center gap-4 overflow-x-auto whitespace-nowrap scrollbar-none [&::-webkit-scrollbar]:hidden sm:gap-6">
          <a
            href="tel:+17185550124"
            className="inline-flex items-center gap-2 text-white/85 transition-colors hover:text-secondary"
          >
            <PhoneIcon className="size-3.5 text-secondary" strokeWidth={1.6} />
            <span>+1 (718) 555-0124</span>
          </a>

          <span className="hidden h-3 w-px bg-white/20 sm:block" aria-hidden="true" />

          <a
            href="mailto:ops@kangaroologistics.com"
            className="hidden items-center gap-2 text-white/85 transition-colors hover:text-secondary md:inline-flex"
          >
            <MailIcon className="size-3.5 text-secondary" strokeWidth={1.6} />
            <span>ops@kangaroologistics.com</span>
          </a>

          <span className="hidden h-3 w-px bg-white/20 lg:block" aria-hidden="true" />

          <p className="hidden items-center gap-2 text-white/75 lg:inline-flex">
            <ClockIcon className="size-3.5 text-secondary" strokeWidth={1.6} />
            <span>Mon–Fri, 8:00 AM – 6:00 PM EST</span>
          </p>

          <span className="hidden h-3 w-px bg-white/20 xl:block" aria-hidden="true" />

          <p className="hidden items-center gap-2 text-white/75 xl:inline-flex">
            <MapPinIcon className="size-3.5 text-secondary" strokeWidth={1.6} />
            <span>New York, NY</span>
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="inline-flex size-7 items-center justify-center text-white/80 transition-colors hover:bg-white/5 hover:text-secondary"
            >
              <Icon className="size-3.5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
