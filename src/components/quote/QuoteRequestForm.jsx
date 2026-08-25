import { ErrorMessage, Field, Form, Formik } from 'formik'
import Select from 'react-select'
import { ArrowRightLongIcon } from '../ui/AllSVG.jsx'
import { submitConsultation } from '../../utils/submitConsultation.js'
import {
  createQuoteInitialValues,
  getQuoteSelectStyles,
  quoteServiceOptions,
  quoteValidationSchema,
} from './quoteFormConfig.js'

const inputClassName =
  'w-full rounded-xl border border-primary/15 bg-white px-4 py-3 text-[15px] text-primary outline-none transition-colors placeholder:text-muted/70 focus:border-secondary focus:ring-2 focus:ring-secondary/20'

const inputErrorClassName = 'border-red-400 focus:border-red-400 focus:ring-red-200'

function FieldError({ name }) {
  return (
    <ErrorMessage
      name={name}
      component="p"
      className="mt-1.5 text-[13px] leading-5 text-red-500"
    />
  )
}

function QuoteFormFields({
  values,
  errors,
  touched,
  isSubmitting,
  setFieldValue,
  setFieldTouched,
  status,
  lockedServiceSlug,
  idPrefix,
  submitLabel,
  stickySubmit,
}) {
  const serviceLocked = Boolean(lockedServiceSlug)
  const selectedService =
    quoteServiceOptions.find((option) => option.value === values.serviceType) ?? null

  const fieldClass = (name) =>
    [inputClassName, touched[name] && errors[name] ? inputErrorClassName : '']
      .filter(Boolean)
      .join(' ')

  const fieldId = (name) => `${idPrefix}-${name}`

  const fields = (
    <>
      {status?.error ? (
        <div
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[14px] text-red-600"
          role="alert"
        >
          {status.error}
        </div>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={fieldId('fullName')} className="mb-2 block text-[14px] font-medium text-primary">
            Your Full Name<span className="text-secondary">*</span>
          </label>
          <Field
            id={fieldId('fullName')}
            name="fullName"
            type="text"
            autoComplete="name"
            placeholder="John Smith"
            className={fieldClass('fullName')}
          />
          <FieldError name="fullName" />
        </div>

        <div>
          <label htmlFor={fieldId('email')} className="mb-2 block text-[14px] font-medium text-primary">
            Your Email Address<span className="text-secondary">*</span>
          </label>
          <Field
            id={fieldId('email')}
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            className={fieldClass('email')}
          />
          <FieldError name="email" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor={fieldId('serviceType')}
            className="mb-2 block text-[14px] font-medium text-primary"
          >
            Service Type<span className="text-secondary">*</span>
          </label>
          <Select
            inputId={fieldId('serviceType')}
            name="serviceType"
            options={quoteServiceOptions}
            value={selectedService}
            onChange={(option) => {
              if (serviceLocked) return
              setFieldValue('serviceType', option?.value ?? '')
            }}
            onBlur={() => setFieldTouched('serviceType', true)}
            styles={getQuoteSelectStyles(
              Boolean(touched.serviceType && errors.serviceType),
              serviceLocked,
            )}
            placeholder="Select a service"
            isSearchable={!serviceLocked}
            isDisabled={serviceLocked}
            isClearable={!serviceLocked}
            noOptionsMessage={() => 'No service found'}
            menuPlacement="auto"
            menuPortalTarget={typeof document !== 'undefined' ? document.body : null}
            aria-required="true"
          />
          <FieldError name="serviceType" />
        </div>

        <div>
          <label htmlFor={fieldId('phone')} className="mb-2 block text-[14px] font-medium text-primary">
            Phone Number<span className="text-secondary">*</span>
          </label>
          <Field
            id={fieldId('phone')}
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+1 (555) 000-0000"
            className={fieldClass('phone')}
          />
          <FieldError name="phone" />
        </div>
      </div>

      <div>
        <label htmlFor={fieldId('message')} className="mb-2 block text-[14px] font-medium text-primary">
          Your Message<span className="text-secondary">*</span>
        </label>
        <Field
          id={fieldId('message')}
          name="message"
          as="textarea"
          rows={stickySubmit ? 4 : 5}
          placeholder="Tell us about your shipment, timeline, or logistics needs..."
          className={`${fieldClass('message')} ${stickySubmit ? 'min-h-28' : 'min-h-32'} resize-y`}
        />
        <FieldError name="message" />
      </div>
    </>
  )

  const submitButton = (
    <button
      type="submit"
      disabled={isSubmitting}
      className={[
        'group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-display text-[15px] font-medium text-white transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70 sm:text-[16px]',
        stickySubmit ? 'w-full' : 'mt-2 w-full sm:w-auto',
      ].join(' ')}
    >
      {isSubmitting ? 'Sending...' : submitLabel}
      {!isSubmitting ? (
        <ArrowRightLongIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      ) : null}
    </button>
  )

  if (stickySubmit) {
    return (
      <Form className="flex min-h-0 flex-1 flex-col" noValidate>
        <div className="min-h-0 flex-1 space-y-4 overflow-y-auto px-5 py-5 sm:px-7 sm:py-6">
          {fields}
        </div>
        <div className="shrink-0 border-t border-primary/10 bg-white px-5 py-4 sm:px-7 sm:py-5">
          {submitButton}
        </div>
      </Form>
    )
  }

  return (
    <Form className="space-y-4" noValidate>
      {fields}
      {submitButton}
    </Form>
  )
}

export default function QuoteRequestForm({
  lockedServiceSlug = '',
  idPrefix = 'quote',
  submitLabel = 'Request a Quote',
  onSuccess,
  className = '',
  stickySubmit = false,
}) {
  return (
    <div className={[stickySubmit ? 'flex min-h-0 flex-1 flex-col' : '', className].filter(Boolean).join(' ')}>
      <Formik
        enableReinitialize
        initialValues={createQuoteInitialValues(lockedServiceSlug)}
        validationSchema={quoteValidationSchema}
        onSubmit={async (values, { resetForm, setStatus }) => {
          try {
            await submitConsultation(values)
            if (onSuccess) {
              onSuccess(values)
            } else {
              resetForm({ values: createQuoteInitialValues(lockedServiceSlug) })
              setStatus({ success: true })
            }
          } catch {
            setStatus({
              error: 'Something went wrong. Please try again in a moment.',
            })
          }
        }}
      >
        {(formik) =>
          formik.status?.success ? (
            <div
              className={[
                'rounded-2xl border border-secondary/40 bg-secondary/10 px-5 py-6',
                stickySubmit ? 'm-5 sm:m-7' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              role="status"
            >
              <p className="font-display text-[18px] font-semibold text-primary">
                Thank you for your quote request.
              </p>
              <p className="mt-2 text-[15px] leading-7 text-muted">
                Your details have been received. A Kangaroo Logistics representative
                will contact you shortly with an estimate.
              </p>
              <button
                type="button"
                className="mt-5 inline-flex rounded-full border border-primary/15 px-5 py-2.5 font-display text-[14px] font-medium text-primary transition-colors hover:border-primary hover:bg-primary/5"
                onClick={() => {
                  formik.resetForm({ values: createQuoteInitialValues(lockedServiceSlug) })
                  formik.setStatus(undefined)
                }}
              >
                Submit another request
              </button>
            </div>
          ) : (
            <QuoteFormFields
              {...formik}
              lockedServiceSlug={lockedServiceSlug}
              idPrefix={idPrefix}
              submitLabel={submitLabel}
              stickySubmit={stickySubmit}
            />
          )
        }
      </Formik>
    </div>
  )
}
