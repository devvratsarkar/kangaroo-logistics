import { getBlogDetailPageRoute } from '../routes/routes.js'
import { latestBlogs } from './latestBlogs.js'

export const blogs = [
  {
    id: 'ca-otr-lane-planning',
    slug: 'planning-over-the-road-lanes-from-california',
    category: 'Over the Road (OTR)',
    title: 'How to Plan Over-the-Road Lanes Out of California Without Burning the Dock',
    excerpt:
      'Pickup hours, equipment type, and a realistic transit clock matter more than a cheap linehaul when freight leaves California.',
    author: 'Kangaroo Logistics',
    date: '02 Sep, 2026',
    dateISO: '2026-09-02',
    image: '/blog/the-complete-guide-to-road-freight-transportation.webp',
    imageAlt: 'Over-the-road trucking lanes leaving California',
  },
  {
    id: 'reefer-setpoint-checklist',
    slug: 'reefer-setpoint-checklist-for-produce-and-frozen-freight',
    category: 'Temperature Controlled Freight',
    title: 'A Reefer Setpoint Checklist for Produce and Frozen Freight',
    excerpt:
      'Most cold-chain failures start before the truck leaves. Confirm range, pre-cool, and receiver rules in the tender.',
    author: 'Kangaroo Logistics',
    date: '26 Aug, 2026',
    dateISO: '2026-08-26',
    image: '/blog/what-is-a-reefer-truck.webp',
    imageAlt: 'Refrigerated trailer prepared for a produce load',
  },
  {
    id: 'drayage-last-free-day',
    slug: 'last-free-day-drayage-how-to-keep-containers-moving',
    category: 'Drayage',
    title: 'Last Free Day Is Not a Suggestion: Keeping Containers Moving Off the Terminal',
    excerpt:
      'Storage and detention stack fast. The fix is earlier box details, chassis planning, and a warehouse that can actually receive.',
    author: 'Kangaroo Logistics',
    date: '18 Aug, 2026',
    dateISO: '2026-08-18',
    image: '/blog/us-port-container-volumes-2026.webp',
    imageAlt: 'Shipping containers staged at a West Coast port',
  },
  {
    id: 'warehouse-vs-transload',
    slug: 'when-to-store-and-when-to-transload',
    category: 'Warehouse',
    title: 'When to Store a Shipment and When to Transload It the Same Day',
    excerpt:
      'Overflow space and a same-day strip-and-reload are different tools. Use the one that matches dwell, SKU mix, and the next truck.',
    author: 'Kangaroo Logistics',
    date: '08 Aug, 2026',
    dateISO: '2026-08-08',
    image: '/blog/big-warehouse-demand-us.webp',
    imageAlt: 'Palletized freight staged in a warehouse aisle',
  },
  {
    id: 'ftl-vs-ltl-decision',
    slug: 'ftl-vs-ltl-a-practical-decision-for-growing-shippers',
    category: 'Over the Road (OTR)',
    title: 'FTL vs LTL: A Practical Decision Guide for Growing Shippers',
    excerpt:
      'Pallet count is only the start. Handling, transit, and how often the freight can be touched should decide the mode.',
    author: 'Kangaroo Logistics',
    date: '29 Jul, 2026',
    dateISO: '2026-07-29',
    image: '/blog/5-key-benefits-of-full-truckload-shipping-for-high-volume-freight.webp',
    imageAlt: 'Full truckload trailer being loaded at a dock',
  },
  {
    id: 'ocean-inland-follow-through',
    slug: 'ocean-freight-only-works-with-an-inland-plan',
    category: 'Ocean Freight',
    title: 'Ocean Freight Only Works If the Inland Plan Is Booked Too',
    excerpt:
      'A sailing date is not a delivery date. Pair FCL or LCL with drayage, rail, or OTR before the vessel arrives.',
    author: 'Kangaroo Logistics',
    date: '21 Jul, 2026',
    dateISO: '2026-07-21',
    image: '/blog/types-of-cargo-ships.webp',
    imageAlt: 'Container ship at berth with cranes unloading cargo',
  },
  {
    id: 'intermodal-when-rail-wins',
    slug: 'when-intermodal-beats-a-straight-truck',
    category: 'Multimodal / Intermodal',
    title: 'When Intermodal Beats a Straight Truck — and When It Does Not',
    excerpt:
      'Rail saves money on some long inland hauls. Tight appointments and short clocks still belong on the highway.',
    author: 'Kangaroo Logistics',
    date: '11 Jul, 2026',
    dateISO: '2026-07-11',
    image: '/blog/shipping-containers-types-guide.webp',
    imageAlt: 'Intermodal containers moving between rail and truck',
  },
  {
    id: 'freight-quote-checklist',
    slug: 'what-to-send-in-a-freight-quote-request',
    category: 'Logistics Insight',
    title: 'What to Send in a Freight Quote Request If You Want a Real Rate',
    excerpt:
      'Origin, destination, and “ASAP” is not a tender. The missing details are usually why quotes come back late or wrong.',
    author: 'Kangaroo Logistics',
    date: '30 Jun, 2026',
    dateISO: '2026-06-30',
    image: '/blog/20-essential-logistics-terms.webp',
    imageAlt: 'Freight coordinator reviewing a shipment quote request',
  },
  {
    id: 'drop-trailer-vs-live',
    slug: 'drop-trailer-vs-live-unload-what-your-dock-can-support',
    category: 'Over the Road (OTR)',
    title: 'Drop Trailer vs Live Unload: What Your Dock Can Actually Support',
    excerpt:
      'Drop-and-hook looks cheaper until the yard is full. Match the appointment type to space, labor, and carrier dwell.',
    author: 'Kangaroo Logistics',
    date: '16 Jun, 2026',
    dateISO: '2026-06-16',
    image: '/blog/the-complete-guide-to-road-freight-transportation.webp',
    imageAlt: 'Trailers spotted at a shipping dock',
  },
].map((post) => ({
  ...post,
  to: getBlogDetailPageRoute(post.slug),
}))

export function getBlogBySlug(slug) {
  return blogs.find((post) => post.slug === slug) ?? latestBlogs.find((post) => post.slug === slug) ?? null
}
