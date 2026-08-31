import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import SectionBadge from '../common/SectionBadge.jsx'
import { ArrowRightLongIcon, ChatBubbleIcon } from '../ui/AllSVG.jsx'
import { submitConsultation } from '../../utils/submitConsultation.js'

const initialValues = {
  message: '',
}

const helpdeskSchema = Yup.object({
  message: Yup.string()
    .trim()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be 1000 characters or less')
    .required('Please enter a message'),
})

const inputClassName =
  'w-full rounded-xl border border-primary/15 bg-white px-4 py-3 text-[15px] text-primary outline-none transition-colors placeholder:text-muted/70 focus:border-secondary focus:ring-2 focus:ring-secondary/20'

export default function HomeConsultations() {
  return (
    <section className="overflow-hidden bg-white">
      <div className="grid lg:grid-cols-2">
        <div className="contact-consultation-thumb relative min-h-90 sm:min-h-110 lg:min-h-173.75">
          <img
            src="/home/contact-thumb.jpg"
            alt="Logistics helpdesk with freight tracking and shipment support"
            className="h-full w-full object-cover"
            width={1600}
            height={900}
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="flex items-center bg-white px-5 py-10 sm:px-8 sm:py-12 lg:px-14 lg:py-16 xl:px-20">
          <div className="w-full">
            <SectionBadge icon={ChatBubbleIcon} tone="soft">
              Helpdesk
            </SectionBadge>

            <h2 className="mt-5 font-display text-[28px] leading-[1.15] font-bold text-primary sm:mt-6 sm:text-[36px] lg:text-[42px]">
              Need Help? We&apos;re Here
            </h2>

            <p className="mt-3 text-[15px] leading-7 text-muted sm:text-[16px]">
              If you need help with any freight solution, simply send us a message.
              Our team will respond quickly.
            </p>

            <Formik
              initialValues={initialValues}
              validationSchema={helpdeskSchema}
              onSubmit={async (values, { resetForm, setStatus }) => {
                try {
                  await submitConsultation(values)
                  resetForm()
                  setStatus({ success: true })
                } catch {
                  setStatus({
                    error: 'Something went wrong. Please try again in a moment.',
                  })
                }
              }}
            >
              {({ isSubmitting, status, errors, touched }) =>
                status?.success ? (
                  <div
                    className="mt-8 rounded-2xl border border-secondary/40 bg-secondary/10 px-5 py-6"
                    role="status"
                  >
                    <p className="font-display text-[18px] font-semibold text-primary">
                      Thank you for reaching out.
                    </p>
                    <p className="mt-2 text-[15px] leading-7 text-muted">
                      Your message has been received. A Kangaroo Logistics representative
                      will contact you shortly.
                    </p>
                  </div>
                ) : (
                  <Form className="mt-8 space-y-4" noValidate>
                    {status?.error ? (
                      <div
                        className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[14px] text-red-600"
                        role="alert"
                      >
                        {status.error}
                      </div>
                    ) : null}

                    <div>
                      <label htmlFor="helpdesk-message" className="sr-only">
                        Your message
                      </label>
                      <Field
                        id="helpdesk-message"
                        name="message"
                        as="textarea"
                        rows={7}
                        placeholder="If you need help with any freight solution, simply send us a message. Our team will respond quickly."
                        className={[
                          inputClassName,
                          'min-h-40 resize-y',
                          touched.message && errors.message ? 'border-red-400 focus:border-red-400 focus:ring-red-200' : '',
                        ]
                          .filter(Boolean)
                          .join(' ')}
                      />
                      <ErrorMessage
                        name="message"
                        component="p"
                        className="mt-1.5 text-[13px] leading-5 text-red-500"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-display text-[15px] font-medium text-white transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:text-[16px]"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      {!isSubmitting ? (
                        <ArrowRightLongIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      ) : null}
                    </button>
                  </Form>
                )
              }
            </Formik>
          </div>
        </div>
      </div>
    </section>
  )
}
