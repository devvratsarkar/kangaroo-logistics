import { getContactPageRoute } from '../routes/routes'

export const homeSlides = [
  {
    id: 'road-transport',
    eyebrow: 'Reliable Freight Solutions',
    lines: [
      'ROAD TRANSPORT',
      'Flexible Nationwide Logistics',
      'Delivered Safely',
    ],
    image: '/home/hero-road.jpg',
    imageAlt: 'Road transport freight truck on the highway',
    cta: { label: 'Get In Touch', to: getContactPageRoute() },
    locationLabel: 'Based in California, USA',
  },
  {
    id: 'specialized-freight',
    eyebrow: 'Smart Freight Solutions',
    lines: [
      'SPECIALIZED FREIGHT',
      'Temperature-Controlled Shipping',
      'Heavy Hauling',
    ],
    image: '/banners/specialized-freight.webp',
    imageAlt: 'Specialized temperature-controlled freight',
    cta: { label: 'Get In Touch', to: getContactPageRoute() },
    locationLabel: 'Based in California, USA',
  },
  {
    id: 'ocean-freight',
    eyebrow: 'Global Ocean Freight',
    lines: [
      'OCEAN FREIGHT',
      'Reliable Container Shipping',
      'Global Delivery',
    ],
    image: '/banners/ocean-freight.webp',
    imageAlt: 'Ocean freight container shipping',
    cta: { label: 'Get In Touch', to: getContactPageRoute() },
    locationLabel: 'Based in California, USA',
  },
]
