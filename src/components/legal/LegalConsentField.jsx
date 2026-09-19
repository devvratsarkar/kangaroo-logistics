import { ErrorMessage, Field } from 'formik'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import { getPrivacyPageRoute, getTermsPageRoute } from '../../routes/routes.js'

export const legalConsentInitialValue = false

export const legalConsentSchema = Yup.boolean()
  .oneOf([true], 'Please accept the Privacy Policy and Terms & Conditions')
  .required('Please accept the Privacy Policy and Terms & Conditions')

export default function LegalConsentField({ id, compact = false }) {
  return (
    <div>
      <div className={['flex items-start', compact ? 'gap-2.5' : 'gap-3'].join(' ')}>
        <Field name="acceptedLegal">
          {({ field, form }) => (
            <input
              id={id}
              type="checkbox"
              name={field.name}
              checked={field.value === true}
              className="legal-consent-checkbox"
              aria-label="I agree to the Privacy Policy and Terms & Conditions"
              aria-describedby={`${id}-copy`}
              onBlur={field.onBlur}
              onChange={() => {
                form.setFieldValue('acceptedLegal', field.value !== true)
                form.setFieldTouched('acceptedLegal', true, false)
              }}
            />
          )}
        </Field>
        <p
          id={`${id}-copy`}
          className={[
            'leading-6 text-muted',
            compact ? 'text-[13px] sm:text-[14px]' : 'text-[14px] sm:text-[15px]',
          ].join(' ')}
        >
          <label htmlFor={id} className="cursor-pointer">
            I agree to the{' '}
          </label>
          <Link to={getPrivacyPageRoute()} className="legal-consent-link">
            Privacy Policy
          </Link>
          {' and '}
          <Link to={getTermsPageRoute()} className="legal-consent-link">
            Terms & Conditions
          </Link>
          {'.'}
        </p>
      </div>
      <ErrorMessage
        name="acceptedLegal"
        component="p"
        className="mt-1.5 text-[13px] leading-5 text-red-500"
      />
    </div>
  )
}
