import { getServiceDetailPageRoute } from '../routes/routes'
import { serviceDetailsBySlug } from './serviceDetails.js'

export const serviceNavItems = [
  {
    label: 'Temperature Controlled Freight',
    slug: 'reefer-freight',
    description: 'Temperature-controlled shipping for sensitive cargo',
    pageDescription: 'Reefer capacity with a confirmed setpoint for produce, frozen, and other temperature-sensitive freight.',
    summary:
      'Book reefer capacity with a confirmed setpoint, produce-friendly handling, and coordinators who stay on the load until it is in spec at delivery.',
    highlights: ['Setpoint confirmed at dispatch', 'Produce and frozen lanes', 'In-transit temperature watch'],
    image: '/services/reefer.jpg',
    stageImage: '/services/reefer.jpg',
    imagePosition: 'center center',
    icon: '/services/icon-reefer.webp',
  },
  {
    label: 'Drayage',
    slug: 'drayage',
    description: 'Efficient container transport from major ports',
    pageDescription: 'Port and ramp container pulls planned around last free day, chassis, and warehouse hours.',
    summary:
      'Pull containers from ports and ramps, line up chassis and warehouse appointments, and keep last-free-day pressure from turning into storage charges.',
    highlights: ['Last-free-day planning', 'Chassis coordination', 'Port-to-warehouse status'],
    image: '/services/drayage.jpg',
    stageImage: '/services/drayage.jpg',
    imagePosition: 'center 70%',
    icon: '/services/icon-drayage.webp',
  },
  {
    label: 'Warehouse Service',
    slug: 'warehouse',
    description: 'Secure storage with inventory management',
    pageDescription: 'Overflow storage, transload, and outbound staging tied to the next truck — not a five-year lease.',
    summary:
      'Overflow storage, transload, and outbound staging so freight has a place to sit and a clean handoff to the next truck.',
    highlights: ['Overflow and transload', 'Inbound counts', 'Outbound staging'],
    image: '/services/warehouse.jpg',
    stageImage: '/services/warehouse.jpg',
    imagePosition: 'center center',
    icon: '/services/icon-warehouse.webp',
  },
  {
    label: 'Multimodal / Intermodal',
    slug: 'multimodal-transport',
    description: 'Integrated rail, ocean, and road freight',
    pageDescription: 'Ocean, rail, and highway legs booked together so each handoff has an owner.',
    summary:
      'Combine ocean, rail, and highway under one coordinator so each handoff is booked before the current leg ends.',
    highlights: ['Rail plus truck', 'Port-to-door plans', 'Handoffs with an owner'],
    image: '/services/multimodal.jpg',
    stageImage: '/services/multimodal.jpg',
    imagePosition: 'center center',
    icon: '/services/icon-multimodal.webp',
  },
  {
    label: 'Ocean Freight',
    slug: 'ocean-freight',
    description: 'Reliable international container shipping solutions',
    pageDescription: 'FCL and LCL bookings with the inland dray or truck already on the plan.',
    summary:
      'Book FCL or LCL, keep documents moving, and arrange the inland dray or truck so the box does not stall at the pier.',
    highlights: ['FCL and LCL booking', 'West Coast gateways', 'Inland follow-through'],
    image: '/services/ocean.webp',
    stageImage: '/services/ocean.webp',
    imagePosition: 'center center',
    icon: '/services/icon-ocean.webp',
  },
  {
    label: 'Over the Road (OTR)',
    slug: 'road-freight',
    description: 'Fast, dependable over-the-road transportation',
    pageDescription: 'FTL and LTL from California origins to destinations nationwide, with a named dispatcher.',
    summary:
      'Cover FTL and LTL from California origins to destinations nationwide, with pickup windows that match the dock and ETAs you can staff against.',
    highlights: ['FTL and LTL coverage', 'California outbound strength', 'Named dispatcher'],
    image: '/services/road.jpg',
    stageImage: '/services/road.jpg',
    imagePosition: 'center center',
    icon: '/services/icon-road.webp',
  },
].map((item) => ({
  ...item,
  to: getServiceDetailPageRoute(item.slug),
}))

export const servicesPageIntro =
  'Kangaroo Logistics books and manages the freight modes California shippers actually use: over-the-road FTL and LTL, temperature-controlled trucking, port and ramp drayage, ocean containers, warehouse staging, and multimodal plans that connect those legs. Based in Manteca, we cover local work and nationwide destinations from the same desk.'

export const servicesPageHighlights = [
  {
    title: 'California origin desk',
    description: 'Central Valley, Bay Area, and West Coast port freight is planned by people who work those lanes weekly.',
  },
  {
    title: 'Coverage through delivery',
    description: 'A named coordinator stays with the load after booking — pickup, exceptions, and POD included.',
  },
  {
    title: 'Mode that matches the cargo',
    description: 'We will tell you when a reefer, a dray, a rail move, or a straight truck is the better call.',
  },
]

export function getServiceBySlug(slug) {
  const base = serviceNavItems.find((item) => item.slug === slug)
  const detail = serviceDetailsBySlug[slug]
  if (!base || !detail) return null
  return { ...base, ...detail }
}
