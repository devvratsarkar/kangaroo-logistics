const mapQuery = '460 Gavi Lane, Manteca, California 95337'

export const companyPhones = [
  { label: '+1 (209) 313-1119', href: 'tel:+12093131119' },
  { label: '+1 (510) 449-7783', href: 'tel:+15104497783' },
]

export const companyEmails = [
  { label: 'info@kangaroologistics.us', href: 'mailto:info@kangaroologistics.us' },
  { label: 'mandeepsingh@kangaroologistics.us', href: 'mailto:mandeepsingh@kangaroologistics.us' },
]

export const primaryPhone = companyPhones[0]
export const primaryEmail = companyEmails[0]

export const companyAddress = {
  label: 'Our Address',
  lines: ['460 Gavi Lane', 'Manteca, California 95337', 'United States'],
  formatted: '460 Gavi Lane, Manteca, California 95337, United States',
  short: 'Manteca, CA',
  officeTitle: 'Our Manteca office',
  mapTitle: 'Kangaroo Logistics Manteca office location',
  mapUrl: `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`,
  directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapQuery)}`,
}

export const companyHours = {
  label: 'Mon–Fri, 8:00 AM – 6:00 PM PST',
  short: 'Mon–Fri, 8AM – 6PM PST',
  note: 'Open Now during business hours',
}
