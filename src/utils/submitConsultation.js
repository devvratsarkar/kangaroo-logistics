import emailjs from '@emailjs/browser'
import {
  companyAddress,
  companyHours,
  primaryEmail,
  primaryPhone,
} from '../data/companyContact.js'
import { serviceNavItems } from '../data/services.js'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const SITE_URL = String(import.meta.env.VITE_SITE_URL || '').replace(/\/$/, '')

const NOT_PROVIDED = 'Not provided'

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function displayValue(value, fallback = NOT_PROVIDED) {
  const trimmed = typeof value === 'string' ? value.trim() : ''
  return trimmed || fallback
}

function formatMessageHtml(value) {
  return escapeHtml(displayValue(value, '')).replace(/\r\n|\r|\n/g, '<br />')
}

function resolveServiceLabel(serviceType) {
  const match = serviceNavItems.find((service) => service.slug === serviceType)
  return match?.label || displayValue(serviceType, 'General inquiry')
}

function formatSubmittedAt() {
  return `${new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'America/Los_Angeles',
  }).format(new Date())} PT`
}

function buildTemplateParams(values, { formSource, requestType }) {
  const fullName = displayValue(values.fullName)
  const email = displayValue(values.email)
  const hasEmail = Boolean(values.email?.trim())
  const phone = displayValue(values.phone)
  const serviceType = resolveServiceLabel(values.serviceType)
  const siteUrl = SITE_URL || (typeof window !== 'undefined' ? window.location.origin : '')
  const pageUrl =
    typeof window !== 'undefined' ? window.location.href : siteUrl || NOT_PROVIDED

  return {
    full_name: fullName,
    user_name: fullName,
    user_email: email,
    reply_to: hasEmail ? values.email.trim() : primaryEmail.label,
    user_phone: phone,
    service_type: serviceType,
    message: displayValue(values.message, ''),
    message_html: formatMessageHtml(values.message),
    form_source: formSource,
    request_type: requestType,
    submitted_at: formatSubmittedAt(),
    page_url: pageUrl,
    logo_url: siteUrl ? `${siteUrl}/favicon-512.png` : '',
    site_url: siteUrl,
    company_name: 'Kangaroo Logistics LLC',
    company_phone: primaryPhone.label,
    company_email: primaryEmail.label,
    company_address: companyAddress.formatted,
    company_hours: companyHours.label,
    email_subject: `${requestType} — ${serviceType} from ${fullName}`,
  }
}

export async function submitConsultation(
  values,
  { formSource = 'Website form', requestType = 'Quote request' } = {},
) {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error('EmailJS environment variables are missing')
  }

  await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    buildTemplateParams(values, { formSource, requestType }),
    { publicKey: PUBLIC_KEY },
  )

  return { success: true }
}
