import { ErrorMessage, Field, Form, Formik } from 'formik'
import Select from 'react-select'
import * as Yup from 'yup'
import SectionBadge from '../common/SectionBadge.jsx'
import { ArrowRightLongIcon, ChatBubbleIcon } from '../ui/AllSVG.jsx'
import { serviceNavItems } from '../../data/services.js'
import { submitConsultation } from '../../utils/submitConsultation.js'

const initialValues = {
  fullName: '',
  email: '',
  serviceType: '',
  phone: '',
  message: '',
}

const inputClassName =
  'w-full rounded-xl border border-primary/15 bg-white px-4 py-3 text-[15px] text-primary outline-none transition-colors placeholder:text-muted/70 focus:border-secondary focus:ring-2 focus:ring-secondary/20'

const inputErrorClassName =
  'border-red-400 focus:border-red-400 focus:ring-red-200'

const serviceOptions = [
  { value: 'general', label: 'General Logistics' },
  ...serviceNavItems.map((service) => ({
    value: service.slug,
    label: service.label,
  })),
]

const consultationSchema = Yup.object({
  fullName: Yup.string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(80, 'Name must be 80 characters or less')
    .required('Full name is required'),
  email: Yup.string()
    .trim()
    .email('Enter a valid email address')
    .required('Email is required'),
  serviceType: Yup.string().required('Please select a service type'),
  phone: Yup.string()
    .trim()
    .matches(/^[+]?[\d\s().-]{7,20}$/, 'Enter a valid phone number')
    .required('Phone number is required'),
  message: Yup.string()
    .trim()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be 1000 characters or less')
    .required('Message is required'),
})

function getSelectStyles(hasError, isFocused) {
  return {
    control: (base, state) => ({
      ...base,
      minHeight: '48px',
      borderRadius: '12px',
      borderColor: hasError
        ? '#f87171'
        : state.isFocused || isFocused
          ? '#d8c89b'
          : 'rgba(12, 32, 54, 0.15)',
      boxShadow:
        hasError && (state.isFocused || isFocused)
          ? '0 0 0 2px rgba(248, 113, 113, 0.2)'
          : state.isFocused || isFocused
            ? '0 0 0 2px rgba(216, 200, 155, 0.2)'
            : 'none',
      backgroundColor: '#ffffff',
      fontSize: '15px',
      cursor: 'pointer',
      transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
      '&:hover': {
        borderColor: hasError
          ? '#f87171'
          : state.isFocused || isFocused
            ? '#d8c89b'
            : 'rgba(12, 32, 54, 0.15)',
      },
    }),
    valueContainer: (base) => ({
      ...base,
      padding: '0 16px',
    }),
    placeholder: (base) => ({
      ...base,
      color: 'rgba(120, 132, 143, 0.7)',
    }),
    singleValue: (base) => ({
      ...base,
      color: '#0c2036',
    }),
    menu: (base) => ({
      ...base,
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 12px 36px rgba(12, 32, 54, 0.12)',
      zIndex: 30,
    }),
    menuList: (base) => ({
      ...base,
      padding: '6px',
    }),
    option: (base, state) => ({
      ...base,
      fontSize: '15px',
      borderRadius: '8px',
      cursor: 'pointer',
      backgroundColor: state.isSelected
        ? '#0c2036'
        : state.isFocused
          ? 'rgba(216, 200, 155, 0.15)'
          : '#ffffff',
      color: state.isSelected ? '#ffffff' : '#0c2036',
      ':active': {
        backgroundColor: state.isSelected ? '#0c2036' : 'rgba(216, 200, 155, 0.25)',
      },
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    dropdownIndicator: (base, state) => ({
      ...base,
      color: state.isFocused ? '#0c2036' : '#78848f',
      paddingRight: '12px',
      '&:hover': {
        color: '#0c2036',
      },
    }),
  }
}

function FieldError({ name }) {
  return (
    <ErrorMessage
      name={name}
      component="p"
      className="mt-1.5 text-[13px] leading-5 text-red-500"
    />
  )
}

function ConsultationFormContent({
  values,
  errors,
  touched,
  isSubmitting,
  setFieldValue,
  setFieldTouched,
  status,
}) {
  const selectedService =
    serviceOptions.find((option) => option.value === values.serviceType) ?? null

  const fieldClass = (name) =>
    [inputClassName, touched[name] && errors[name] ? inputErrorClassName : '']
      .filter(Boolean)
      .join(' ')

  return (
    <Form className="mt-8 space-y-4" noValidate>
      {status?.error ? (
        <div
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[14px] text-red-600"
          role="alert"
        >
          {status.error}
        </div>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="fullName" className="mb-2 block text-[14px] font-medium text-primary">
            Your Full Name<span className="text-secondary">*</span>
          </label>
          <Field
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            placeholder="John Smith"
            className={fieldClass('fullName')}
          />
          <FieldError name="fullName" />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="email" className="mb-2 block text-[14px] font-medium text-primary">
            Your Email Address<span className="text-secondary">*</span>
          </label>
          <Field
            id="email"
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
        <div className="sm:col-span-1">
          <label htmlFor="serviceType" className="mb-2 block text-[14px] font-medium text-primary">
            Service Type<span className="text-secondary">*</span>
          </label>
          <Select
            inputId="serviceType"
            name="serviceType"
            options={serviceOptions}
            value={selectedService}
            onChange={(option) => {
              setFieldValue('serviceType', option?.value ?? '')
            }}
            onBlur={() => setFieldTouched('serviceType', true)}
            styles={getSelectStyles(Boolean(touched.serviceType && errors.serviceType), false)}
            placeholder="Select a service"
            isSearchable
            noOptionsMessage={() => 'No service found'}
            menuPlacement="auto"
            aria-required="true"
          />
          <FieldError name="serviceType" />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="phone" className="mb-2 block text-[14px] font-medium text-primary">
            Phone Number<span className="text-secondary">*</span>
          </label>
          <Field
            id="phone"
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
        <label htmlFor="message" className="mb-2 block text-[14px] font-medium text-primary">
          Your Message<span className="text-secondary">*</span>
        </label>
        <Field
          id="message"
          name="message"
          as="textarea"
          rows={5}
          placeholder="Tell us about your shipment, timeline, or logistics needs..."
          className={`${fieldClass('message')} min-h-35 resize-y`}
        />
        <FieldError name="message" />
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

export default function HomeConsultations() {
  return (
    <section className="overflow-hidden bg-white">
      <div className="grid lg:grid-cols-2">
        <div className="contact-consultation-thumb relative min-h-90 sm:min-h-110 lg:min-h-173.75">
          <img
            src="/home/contact-thumb.webp"
            alt="Kangaroo Logistics consultation support team"
            className="h-full w-full object-cover"
            width={960}
            height={695}
            loading="lazy"
            decoding="async"
          />

          <div className="contact-consultation-badge absolute right-6 bottom-10 z-2 w-55 rounded-[30px] bg-white/20 px-4 py-10 text-center backdrop-blur-md sm:right-10 sm:bottom-15">
            <div className="ml-4 flex justify-center">
              <img
                src="/home/contact-autor1.webp"
                alt=""
                aria-hidden="true"
                className="-ml-4 size-14 rounded-full border-2 border-white object-cover"
                width={56}
                height={56}
              />
              <img
                src="/home/contact-autor2.webp"
                alt=""
                aria-hidden="true"
                className="-ml-4 size-14 rounded-full border-2 border-white object-cover"
                width={56}
                height={56}
              />
              <span className="-ml-4 flex size-14 items-center justify-center rounded-full bg-primary font-display text-[18px] font-medium text-white">
                1.5k+
              </span>
            </div>
            <p className="mt-7 font-display text-[24px] leading-8 font-medium text-white">
              Trusted Happy Customers
            </p>
          </div>
        </div>

        <div className="flex items-center bg-white px-5 py-10 sm:px-8 sm:py-12 lg:px-14 lg:py-16 xl:px-20">
          <div className="w-full">
            <SectionBadge icon={ChatBubbleIcon} tone="soft">
              Consultations
            </SectionBadge>

            <h2 className="mt-5 font-display text-[28px] leading-[1.15] font-bold text-primary sm:mt-6 sm:text-[36px] lg:text-[42px]">
              Need Help? We&apos;re Here
            </h2>

            <p className="mt-3 text-[15px] leading-7 text-muted sm:text-[16px]">
              Share your freight details and our team will get back to you with a
              tailored logistics solution.
            </p>

            <Formik
              initialValues={initialValues}
              validationSchema={consultationSchema}
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
              {(formik) =>
                formik.status?.success ? (
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
                  <ConsultationFormContent {...formik} />
                )
              }
            </Formik>
          </div>
        </div>
      </div>
    </section>
  )
}
