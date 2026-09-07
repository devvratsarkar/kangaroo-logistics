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
const COMMENT_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_POST_COMMENT_TEMPLATE_ID
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
  const fullName = displayValue(values.fullName || values.name)
  const email = displayValue(values.email)
  const hasEmail = Boolean(values.email?.trim())
  const phone = displayValue(values.phone)
  const city = displayValue(values.city || values.address)
  const articleTitle = displayValue(values.articleTitle || values.postTitle, '')
  const serviceType = articleTitle || resolveServiceLabel(values.serviceType)
  const siteUrl = SITE_URL || (typeof window !== 'undefined' ? window.location.origin : '')
  const pageUrl =
    typeof window !== 'undefined' ? window.location.href : siteUrl || NOT_PROVIDED
  const emailSubject = articleTitle
    ? `${requestType} on “${articleTitle}” from ${fullName}`
    : `${requestType} — ${serviceType} from ${fullName}`

  return {
    full_name: fullName,
    user_name: fullName,
    user_email: email,
    reply_to: hasEmail ? values.email.trim() : primaryEmail.label,
    user_phone: phone,
    user_city: city,
    city,
    service_type: serviceType,
    article_title: articleTitle || NOT_PROVIDED,
    post_title: articleTitle || NOT_PROVIDED,
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
    email_subject: emailSubject,
  }
}

async function sendEmail(values, { formSource, requestType, templateId }) {
  if (!SERVICE_ID || !templateId || !PUBLIC_KEY) {
    throw new Error('EmailJS environment variables are missing')
  }

  try {
    await emailjs.send(
      SERVICE_ID,
      templateId,
      buildTemplateParams(values, { formSource, requestType }),
      { publicKey: PUBLIC_KEY },
    )
  } catch (error) {
    console.error('EmailJS send failed', error)
    throw error
  }

  return { success: true }
}

export async function submitConsultation(
  values,
  { formSource = 'Website form', requestType = 'Quote request' } = {},
) {
  return sendEmail(values, {
    formSource,
    requestType,
    templateId: TEMPLATE_ID,
  })
}

export async function submitBlogComment(
  values,
  { formSource = 'Blog article', requestType = 'Blog comment' } = {},
) {
  return sendEmail(values, {
    formSource,
    requestType,
    templateId: COMMENT_TEMPLATE_ID || TEMPLATE_ID,
  })
}
