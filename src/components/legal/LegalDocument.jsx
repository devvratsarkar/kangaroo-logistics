import { Link } from 'react-router-dom'
import { ArrowRightLongIcon, MailIcon, PhoneIcon } from '../ui/AllSVG.jsx'
import { legalContactCta } from '../../data/legalPages.js'

function SectionBody({ section }) {
  return (
    <section id={section.id} className="legal-section">
      <h2>{section.title}</h2>
      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph.slice(0, 72)}>{paragraph}</p>
      ))}
      {section.items?.length ? (
        <ul>
          {section.items.map((item) => {
            if (typeof item === 'string') {
              return <li key={item}>{item}</li>
            }

            return (
              <li key={item.title}>
                <strong>{item.title}.</strong> {item.text}
              </li>
            )
          })}
        </ul>
      ) : null}
    </section>
  )
}

export default function LegalDocument({ page }) {
  return (
    <section className="bg-surface py-12 sm:py-14 lg:py-16">
      <div className="custom_container">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_300px] xl:grid-cols-[minmax(0,1fr)_320px] xl:gap-10">
          <article className="legal-document rounded-[24px] border border-primary/10 bg-white px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
            {page.sections.map((section) => (
              <SectionBody key={section.id} section={section} />
            ))}
          </article>

          <aside className="space-y-6 lg:sticky lg:top-32">
            <div className="rounded-[22px] border border-primary/10 bg-white px-5 py-6 shadow-[0_12px_36px_rgba(13,27,61,0.05)] sm:px-6">
              <h2 className="font-display text-[20px] font-bold text-primary sm:text-[22px]">
                On this page
              </h2>
              <nav aria-label={`${page.title} sections`} className="mt-4">
                <ul className="space-y-1">
                  {page.sections.map((section) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`} className="legal-toc-link">
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {page.related ? (
              <div className="rounded-[22px] border border-primary/10 bg-white px-5 py-6 shadow-[0_12px_36px_rgba(13,27,61,0.05)] sm:px-6">
                <p className="font-display text-[13px] font-medium tracking-[0.08em] text-secondary-ink uppercase">
                  {page.related.label}
                </p>
                <h2 className="mt-2 font-display text-[20px] font-bold text-primary">
                  {page.related.title}
                </h2>
                <p className="mt-2 text-[14px] leading-6 text-muted">
                  {page.related.description}
                </p>
                <Link
                  to={page.related.to}
                  className="group mt-4 inline-flex items-center gap-2 font-display text-[14px] font-medium text-primary"
                >
                  Read {page.related.title}
                  <ArrowRightLongIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </div>
            ) : null}

            <div className="rounded-[22px] border border-primary/10 bg-primary px-5 py-6 text-white sm:px-6">
              <h2 className="font-display text-[20px] font-bold">
                {legalContactCta.title}
              </h2>
              <p className="mt-2 text-[14px] leading-6 text-white/70">
                {legalContactCta.description}
              </p>
              <div className="mt-5 space-y-3">
                <a
                  href={legalContactCta.phone.href}
                  className="flex items-center gap-2 text-[14px] text-white/85 transition-colors hover:text-secondary"
                >
                  <PhoneIcon className="size-4" strokeWidth={1.6} />
                  {legalContactCta.phone.label}
                </a>
                <a
                  href={legalContactCta.email.href}
                  className="flex items-center gap-2 text-[14px] text-white/85 transition-colors hover:text-secondary"
                >
                  <MailIcon className="size-4" strokeWidth={1.6} />
                  {legalContactCta.email.label}
                </a>
              </div>
              <Link
                to={legalContactCta.contactTo}
                className="group mt-5 inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2.5 font-display text-[14px] font-medium text-primary transition-colors hover:bg-secondary/90"
              >
                Contact dispatch
                <ArrowRightLongIcon className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
