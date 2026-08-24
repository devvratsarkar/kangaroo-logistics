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
  addressLabel: 'Our Address',
  address: '300 Delaware AVE, Suite - 210 # 518 Wilmington, Delaware, 19801, United States',
  emails: [
    { label: 'ops@kangaroologistics.com', href: 'mailto:ops@kangaroologistics.com' },
    { label: 'info@kangaroologistics.com', href: 'mailto:info@kangaroologistics.com' },
  ],
  phones: [
    { label: '+1 (718) 555-0124', href: 'tel:+17185550124' },
    { label: '+1 (718) 555-0198', href: 'tel:+17185550198' },
  ],
}

export const footerSocialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com', icon: 'facebook' },
  { label: 'Instagram', href: 'https://www.instagram.com', icon: 'instagram' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: 'linkedin' },
]

export const footerDescription =
  'Kangaroo Logistics delivers reliable, cost-effective freight and logistics solutions tailored to your business. From road transportation and ocean freight to warehousing and specialized shipping, we keep your supply chain moving with confidence.'
