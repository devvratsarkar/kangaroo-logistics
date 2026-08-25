import { getServiceDetailPageRoute } from '../routes/routes'
import { serviceDetailsBySlug } from './serviceDetails.js'

export const serviceNavItems = [
  {
    label: 'Reefer Freight',
    slug: 'reefer-freight',
    description: 'Temperature-controlled shipping for sensitive cargo',
    summary:
      'Keep perishables, pharma, and temperature-sensitive freight in spec from pickup to delivery with monitored reefer capacity.',
    highlights: ['Continuous temp monitoring', 'Cold-chain handling', 'Nationwide lanes'],
    image: '/services/reefer.webp',
    stageImage: '/banners/specialized-freight.webp',
    imagePosition: 'center center',
    icon: '/services/icon-reefer.webp',
  },
  {
    label: 'Drayage',
    slug: 'drayage',
    description: 'Efficient container transport from major ports',
    summary:
      'Move containers between ports, rail ramps, and warehouses with reliable scheduling and clear status updates.',
    highlights: ['Port & ramp coverage', 'Chassis coordination', 'Quick turnaround'],
    image: '/services/drayage.webp',
    stageImage: '/banners/road-transport.webp',
    imagePosition: 'center center',
    icon: '/services/icon-drayage.webp',
  },
  {
    label: 'Warehouse',
    slug: 'warehouse',
    description: 'Secure storage with inventory management',
    summary:
      'Store, stage, and ship with secure facilities and inventory visibility that keep your supply chain moving.',
    highlights: ['Secure storage', 'Inventory visibility', 'Order staging'],
    image: '/services/warehouse.webp',
    stageImage: '/services/warehouse-hd.webp',
    imagePosition: 'center center',
    icon: '/services/icon-warehouse.webp',
  },
  {
    label: 'Multimodal Transport',
    slug: 'multimodal-transport',
    description: 'Integrated logistics across transport modes',
    summary:
      'Connect ocean, rail, and road into one coordinated plan so freight keeps moving without handoff gaps.',
    highlights: ['Mode optimization', 'Single point of contact', 'End-to-end visibility'],
    image: '/services/multimodal.webp',
    stageImage: '/banners/ocean-freight.webp',
    imagePosition: 'center center',
    icon: '/services/icon-multimodal.webp',
  },
  {
    label: 'Ocean Freight',
    slug: 'ocean-freight',
    description: 'Reliable international container shipping solutions',
    summary:
      'Move FCL and LCL shipments across major trade lanes with dependable booking, documentation, and tracking support.',
    highlights: ['FCL & LCL options', 'Global trade lanes', 'Docs & customs support'],
    image: '/services/ocean.webp',
    stageImage: '/banners/ocean-freight.webp',
    imagePosition: 'center center',
    icon: '/services/icon-ocean.webp',
  },
  {
    label: 'Road Freight',
    slug: 'road-freight',
    description: 'Fast, dependable over-the-road transportation',
    summary:
      'Cover regional and long-haul trucking with flexible capacity, clear ETAs, and careful freight handling.',
    highlights: ['FTL & LTL capacity', 'Regional & long-haul', 'Live shipment updates'],
    image: '/services/road.webp',
    stageImage: '/banners/road-transport.webp',
    imagePosition: 'center center',
    icon: '/services/icon-road.webp',
  },
].map((item) => ({
  ...item,
  to: getServiceDetailPageRoute(item.slug),
}))

export const servicesPageIntro =
  'At Kangaroo Logistics, we provide comprehensive freight and logistics solutions designed to keep your business moving efficiently. From road transportation and ocean freight to warehousing, drayage, multimodal transport, and temperature-controlled shipping, our experienced team delivers reliable, cost-effective services tailored to your unique shipping requirements.'

export const servicesPageHighlights = [
  {
    title: 'Nationwide coverage',
    description: 'Port, ramp, and highway networks that keep freight moving across the U.S.',
  },
  {
    title: 'Responsive coordination',
    description: 'A dedicated team that answers quickly and stays ahead of exceptions.',
  },
  {
    title: 'Clear communication',
    description: 'Status updates and timelines you can share with your customers and partners.',
  },
]

export function getServiceBySlug(slug) {
  const base = serviceNavItems.find((item) => item.slug === slug)
  const detail = serviceDetailsBySlug[slug]
  if (!base || !detail) return null
  return { ...base, ...detail }
}
