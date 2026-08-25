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
        ? '#f87171'
        : state.isFocused
          ? '#d8c89b'
          : 'rgba(12, 32, 54, 0.15)',
      boxShadow:
        hasError && state.isFocused
          ? '0 0 0 2px rgba(248, 113, 113, 0.2)'
          : state.isFocused
            ? '0 0 0 2px rgba(216, 200, 155, 0.2)'
            : 'none',
      backgroundColor: isDisabled ? '#f3f5f6' : '#ffffff',
      fontSize: '15px',
      cursor: isDisabled ? 'not-allowed' : 'pointer',
      transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
      opacity: isDisabled ? 0.9 : 1,
      '&:hover': {
        borderColor: hasError
          ? '#f87171'
          : state.isFocused
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
      display: isDisabled ? 'none' : base.display,
      '&:hover': {
        color: '#0c2036',
      },
    }),
  }
}
