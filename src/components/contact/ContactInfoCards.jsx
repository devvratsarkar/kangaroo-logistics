import {
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from '../ui/AllSVG.jsx'
import { contactPageInfo } from '../../data/contactPage.js'

const cards = [
  {
    id: 'email',
    icon: MailIcon,
    label: 'Email us',
    content: contactPageInfo.emails.map((item) => (
      <a key={item.href} href={item.href} className="contact-info-link">
        {item.label}
      </a>
    )),
  },
  {
    id: 'address',
    icon: MapPinIcon,
    label: contactPageInfo.address.label,
    content: (
      <>
        {contactPageInfo.address.lines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
        <a
          href={contactPageInfo.address.directionsUrl}
          target="_blank"
          rel="noreferrer"
          className="contact-info-link mt-2 inline-flex"
        >
          Get Directions
        </a>
      </>
    ),
  },
  {
    id: 'phone',
    icon: PhoneIcon,
    label: 'Call us',
    content: contactPageInfo.phones.map((item) => (
      <a key={item.href} href={item.href} className="contact-info-link">
        {item.label}
      </a>
    )),
  },
  {
    id: 'hours',
    icon: ClockIcon,
    label: 'Working hours',
    content: (
      <>
        <span className="block">{contactPageInfo.hours}</span>
        <span className="mt-2 inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/15 px-3 py-1 font-display text-[12px] font-medium text-primary">
          <span className="size-1.5 rounded-full bg-secondary" aria-hidden="true" />
          {contactPageInfo.hoursNote}
        </span>
      </>
    ),
  },
]

export default function ContactInfoCards() {
  return (
    <section className="relative z-1 -mt-8 sm:-mt-10">
      <div className="custom_container">
        <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <li
                key={card.id}
                className="contact-info-card rounded-[22px] border border-primary/10 bg-white p-5 shadow-[0_16px_48px_rgba(13,27,61,0.08)] sm:p-6"
              >
                <span className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <Icon className="size-5" strokeWidth={1.6} />
                </span>
                <h2 className="mt-4 font-display text-[13px] tracking-[0.12em] text-muted uppercase">
                  {card.label}
                </h2>
                <div className="mt-2 space-y-1 text-[15px] leading-6 text-primary sm:text-[16px]">
                  {card.content}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
