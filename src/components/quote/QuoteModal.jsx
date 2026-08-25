import { useEffect, useId, useRef } from 'react'
import { CloseIcon } from '../ui/AllSVG.jsx'
import QuoteRequestForm from './QuoteRequestForm.jsx'

export default function QuoteModal({
  isOpen,
  onClose,
  lockedServiceSlug = '',
  serviceLabel = '',
}) {
  const titleId = useId()
  const closeRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    function onKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="quote-modal fixed inset-0 z-70 flex items-end justify-center p-0 sm:items-center sm:p-6">
      <button
        type="button"
        className="absolute inset-0 bg-primary/60 backdrop-blur-[3px]"
        aria-label="Close quote form"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="quote-modal-panel relative z-1 flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl bg-white shadow-[0_28px_90px_rgba(12,32,54,0.32)] sm:rounded-3xl"
      >
        <div className="relative shrink-0 border-b border-primary/10 px-5 pt-5 pb-5 sm:px-7 sm:pt-6 sm:pb-6">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 pr-2">
              <p className="font-display text-[12px] tracking-[0.16em] text-secondary uppercase">
                Request a quote
              </p>
              <h2
                id={titleId}
                className="mt-1.5 font-display text-[24px] leading-tight font-bold text-primary sm:text-[28px]"
              >
                {serviceLabel ? `Quote for ${serviceLabel}` : 'Get a free estimate'}
              </h2>
              <p className="mt-2 max-w-md text-[14px] leading-6 text-muted sm:text-[15px]">
                Share your shipment details and we&apos;ll respond within 24 hours.
              </p>
            </div>

            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="flex size-10 shrink-0 items-center justify-center rounded-full border border-primary/10 text-primary transition-colors hover:border-primary hover:bg-primary/5"
              aria-label="Close"
            >
              <CloseIcon className="size-5" />
            </button>
          </div>
        </div>

        <QuoteRequestForm
          key={lockedServiceSlug || 'quote-modal'}
          lockedServiceSlug={lockedServiceSlug}
          idPrefix="quote-modal"
          submitLabel="Submit quote request"
          stickySubmit
          className="min-h-0 flex-1"
        />
      </div>
    </div>
  )
}
