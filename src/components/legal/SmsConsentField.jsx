import { Field } from 'formik'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import { primaryPhone } from '../../data/companyContact.js'
import { getPrivacyPageRoute, getTermsPageRoute } from '../../routes/routes.js'

export const smsConsentInitialValue = false

export const smsConsentSchema = Yup.boolean()

export default function SmsConsentField({ id, compact = false }) {
  return (
    <div>
      <div className={['flex items-start', compact ? 'gap-2.5' : 'gap-3'].join(' ')}>
        <Field name="smsConsent">
          {({ field, form }) => (
            <input
              id={id}
              type="checkbox"
              name={field.name}
              checked={field.value === true}
              className="legal-consent-checkbox"
              aria-describedby={`${id}-copy`}
              onBlur={field.onBlur}
              onChange={() => {
                form.setFieldValue('smsConsent', field.value !== true)
                form.setFieldTouched('smsConsent', true, false)
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
            By checking this checkbox, I agree to receive SMS messages about text
            message from Kangaroo Logistics at the phone number provided above. The
            SMS frequency may vary. Data rates may apply. Text HELP to {primaryPhone.label}{' '}
            for assistance. Reply STOP to opt out of receiving SMS messages. Please
            review our{' '}
          </label>
          <Link to={getPrivacyPageRoute()} className="legal-consent-link">
            Privacy Policy
          </Link>
          {' and '}
          <Link to={getTermsPageRoute()} className="legal-consent-link">
            Terms of service
          </Link>
        </p>
      </div>
    </div>
  )
}
