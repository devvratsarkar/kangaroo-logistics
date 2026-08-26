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
        className="quote-modal-panel relative z-1 flex h-[100dvh] max-h-[100dvh] w-full max-w-2xl flex-col overflow-hidden rounded-t-[20px] bg-white shadow-[0_28px_90px_rgba(12,32,54,0.32)] sm:h-auto sm:max-h-[92vh] sm:rounded-3xl"
      >
        <div className="quote-modal-header relative shrink-0 border-b border-primary/10">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0 pr-1">
              <p className="font-display text-[11px] tracking-[0.16em] text-secondary uppercase sm:text-[12px]">
                Request a quote
              </p>
              <h2
                id={titleId}
                className="mt-1 font-display text-[20px] leading-tight font-bold text-primary sm:mt-1.5 sm:text-[28px]"
              >
                {serviceLabel ? `Quote for ${serviceLabel}` : 'Get a free estimate'}
              </h2>
              <p className="mt-1.5 max-w-md text-[13px] leading-5 text-muted sm:mt-2 sm:text-[15px] sm:leading-6">
                Share your shipment details and we&apos;ll respond within 24 hours.
              </p>
            </div>

            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="flex size-9 shrink-0 items-center justify-center rounded-full border border-primary/10 text-primary transition-colors hover:border-primary hover:bg-primary/5 sm:size-10"
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
          compact
          className="min-h-0 flex-1"
        />
      </div>
    </div>
  )
}
