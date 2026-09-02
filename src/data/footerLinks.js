import {
  companyAddress,
  companyEmails,
  companyPhones,
} from './companyContact.js'
import {
  getAboutPageRoute,
  getBlogPageRoute,
  getContactPageRoute,
  getHomePageRoute,
  getQuotePageRoute,
  getServicesPageRoute,
} from '../routes/routes.js'

export const footerCompanyLinks = [
  { label: 'Home', to: getHomePageRoute() },
  { label: 'About Us', to: getAboutPageRoute() },
  { label: 'Privacy Policy', to: '#privacy-policy' },
  { label: 'Terms & Condition', to: '#terms-and-conditions' },
]

export const footerUsefulLinks = [
  { label: 'Services', to: getServicesPageRoute() },
  { label: 'Contact Us', to: getContactPageRoute() },
  { label: 'Latest Blogs', to: getBlogPageRoute() },
  { label: 'Get a Quote', to: getQuotePageRoute() },
]

export const footerBottomLinks = [
  { label: 'Privacy and Policy', to: '#privacy-policy' },
  { label: 'Sitemap', to: '#sitemap' },
  { label: "FAQ's", to: '#faq' },
]

export const footerContact = {
  addressLabel: companyAddress.label,
  address: companyAddress.formatted,
  emails: companyEmails,
  phones: companyPhones,
}

export const footerSocialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com', icon: 'instagram' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: 'linkedin' },
]

export const footerDescription =
  'When your business depends on freight arriving safely and on time, you need a logistics partner you can count on. Kangaroo Logistics connects businesses with reliable transportation and logistics solutions backed by responsive communication, competitive pricing, and hands-on shipment management.'
