import { getBlogDetailPageRoute } from '../routes/routes.js'

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
].map((post) => ({
  ...post,
  to: getBlogDetailPageRoute(post.slug),
}))

export function getBlogBySlug(slug) {
  return blogs.find((post) => post.slug === slug) ?? null
}
