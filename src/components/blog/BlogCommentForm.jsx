import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import { ArrowRightLongIcon } from '../ui/AllSVG.jsx'

const commentSchema = Yup.object({
  name: Yup.string().trim().min(3, 'Name must be at least 3 characters').required('Name is required'),
  email: Yup.string().trim().email('Enter a valid email').required('Email is required'),
  phone: Yup.string()
    .trim()
    .matches(/^[+]?[\d\s().-]{7,20}$/, 'Enter a valid phone number')
    .required('Phone is required'),
  address: Yup.string().trim().min(2, 'City is required').required('City is required'),
  message: Yup.string()
    .trim()
    .min(3, 'Message must be at least 3 characters')
    .required('Message is required'),
})

const inputClassName =
  'w-full rounded-xl border border-primary/15 bg-white px-4 py-3 text-[15px] text-primary outline-none transition-colors placeholder:text-muted/70 focus:border-secondary focus:ring-2 focus:ring-secondary/20'

function FieldError({ name }) {
  return (
    <ErrorMessage
      name={name}
      component="p"
      className="mt-1.5 text-[13px] leading-5 text-red-500"
    />
  )
}

export default function BlogCommentForm({ postTitle }) {
  return (
    <div className="blog-comment-box mt-10 rounded-[24px] border border-primary/10 bg-surface p-5 sm:p-7">
      <p className="font-display text-[13px] tracking-[0.14em] text-secondary-ink uppercase">
        0 Comments
      </p>
      <h2 className="mt-2 font-display text-[26px] font-bold text-primary sm:text-[30px]">
        Leave A Comment
      </h2>
      <p className="mt-2 text-[14px] leading-6 text-muted">
        Share your thoughts on {postTitle}.
      </p>

      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          address: '',
          message: '',
        }}
        validationSchema={commentSchema}
        onSubmit={async (values, { resetForm, setStatus, setSubmitting }) => {
          try {
            await new Promise((resolve) => setTimeout(resolve, 700))
            console.info('Blog comment submitted:', values)
            resetForm()
            setStatus({ success: true })
          } catch {
            setStatus({ error: 'Unable to post comment right now. Please try again.' })
          } finally {
            setSubmitting(false)
          }
        }}
      >
        {({ isSubmitting, status, errors, touched }) =>
          status?.success ? (
            <div
              className="mt-6 rounded-2xl border border-secondary/40 bg-secondary/10 px-5 py-5"
              role="status"
            >
              <p className="font-display text-[17px] font-semibold text-primary">
                Thank you for your comment.
              </p>
              <p className="mt-1 text-[14px] text-muted">
                Your comment has been received and will appear once reviewed.
              </p>
            </div>
          ) : (
            <Form className="mt-6 space-y-4" noValidate>
              {status?.error ? (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[14px] text-red-600">
                  {status.error}
                </div>
              ) : null}

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Field
                    name="name"
                    type="text"
                    placeholder="Name"
                    className={[
                      inputClassName,
                      touched.name && errors.name ? 'border-red-400' : '',
                    ].join(' ')}
                  />
                  <FieldError name="name" />
                </div>
                <div>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email"
                    className={[
                      inputClassName,
                      touched.email && errors.email ? 'border-red-400' : '',
                    ].join(' ')}
                  />
                  <FieldError name="email" />
                </div>
                <div>
                  <Field
                    name="phone"
                    type="tel"
                    placeholder="Phone"
                    className={[
                      inputClassName,
                      touched.phone && errors.phone ? 'border-red-400' : '',
                    ].join(' ')}
                  />
                  <FieldError name="phone" />
                </div>
                <div>
                  <Field
                    name="address"
                    type="text"
                    placeholder="City"
                    className={[
                      inputClassName,
                      touched.address && errors.address ? 'border-red-400' : '',
                    ].join(' ')}
                  />
                  <FieldError name="address" />
                </div>
              </div>

              <div>
                <Field
                  name="message"
                  as="textarea"
                  rows={5}
                  placeholder="Message"
                  className={[
                    inputClassName,
                    'min-h-32 resize-y',
                    touched.message && errors.message ? 'border-red-400' : '',
                  ].join(' ')}
                />
                <FieldError name="message" />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-display text-[15px] font-medium text-white transition-colors hover:bg-primary/90 disabled:opacity-70"
              >
                {isSubmitting ? 'Posting...' : 'Post Comments'}
                {!isSubmitting ? (
                  <ArrowRightLongIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                ) : null}
              </button>
            </Form>
          )
        }
      </Formik>
    </div>
  )
}
