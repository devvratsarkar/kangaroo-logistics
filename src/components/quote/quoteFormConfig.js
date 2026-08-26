import * as Yup from 'yup'
import { serviceNavItems } from '../../data/services.js'

export const quoteServiceOptions = serviceNavItems.map((service) => ({
  value: service.slug,
  label: service.label,
}))

export const quoteInitialValues = {
  fullName: '',
  email: '',
  serviceType: '',
  phone: '',
  message: '',
}

export const quoteValidationSchema = Yup.object({
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

export function createQuoteInitialValues(lockedServiceSlug = '') {
  return {
    ...quoteInitialValues,
    serviceType: lockedServiceSlug || '',
  }
}

export function getQuoteSelectStyles(hasError, isDisabled = false) {
  return {
    control: (base, state) => ({
      ...base,
      minHeight: '48px',
      borderRadius: '12px',
      borderColor: hasError
        ? 'var(--color-danger)'
        : state.isFocused
          ? 'var(--color-secondary)'
          : 'rgba(13, 27, 61, 0.15)',
      boxShadow:
        hasError && state.isFocused
          ? '0 0 0 2px rgba(248, 113, 113, 0.2)'
          : state.isFocused
            ? '0 0 0 2px rgba(242, 176, 30, 0.2)'
            : 'none',
      backgroundColor: isDisabled ? 'var(--color-surface)' : 'var(--color-white)',
      fontSize: '15px',
      cursor: isDisabled ? 'not-allowed' : 'pointer',
      transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
      opacity: isDisabled ? 0.9 : 1,
      '&:hover': {
        borderColor: hasError
          ? 'var(--color-danger)'
          : state.isFocused
            ? 'var(--color-secondary)'
            : 'rgba(13, 27, 61, 0.15)',
      },
    }),
    valueContainer: (base) => ({
      ...base,
      padding: '0 16px',
    }),
    placeholder: (base) => ({
      ...base,
      color: 'rgba(105, 114, 135, 0.7)',
    }),
    singleValue: (base) => ({
      ...base,
      color: 'var(--color-primary)',
    }),
    menu: (base) => ({
      ...base,
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 12px 36px rgba(13, 27, 61, 0.12)',
      zIndex: 80,
    }),
    menuPortal: (base) => ({
      ...base,
      zIndex: 80,
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
        ? 'var(--color-primary)'
        : state.isFocused
          ? 'rgba(242, 176, 30, 0.15)'
          : 'var(--color-white)',
      color: state.isSelected ? 'var(--color-white)' : 'var(--color-primary)',
      ':active': {
        backgroundColor: state.isSelected ? 'var(--color-primary)' : 'rgba(242, 176, 30, 0.25)',
      },
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    dropdownIndicator: (base, state) => ({
      ...base,
      color: state.isFocused ? 'var(--color-primary)' : 'var(--color-muted)',
      paddingRight: '12px',
      display: isDisabled ? 'none' : base.display,
      '&:hover': {
        color: 'var(--color-primary)',
      },
    }),
  }
}
