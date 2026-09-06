import { getBlogDetailPageRoute } from '../routes/routes.js'

export const blogCategories = [
  { slug: 'road-freight', label: 'Over the Road (OTR)' },
  { slug: 'reefer-freight', label: 'Temperature Controlled Freight' },
  { slug: 'drayage', label: 'Drayage' },
  { slug: 'warehouse', label: 'Warehouse' },
  { slug: 'ocean-freight', label: 'Ocean Freight' },
  { slug: 'intermodal', label: 'Multimodal / Intermodal' },
  { slug: 'logistics-insight', label: 'Logistics Insight' },
]

export const popularPosts = [
  {
    slug: 'planning-over-the-road-lanes-from-california',
    title: 'How to Plan Over-the-Road Lanes Out of California Without Burning the Dock',
    category: 'Over the Road (OTR)',
    image: '/blog/the-complete-guide-to-road-freight-transportation.webp',
  },
  {
    slug: 'reefer-setpoint-checklist-for-produce-and-frozen-freight',
    title: 'A Reefer Setpoint Checklist for Produce and Frozen Freight',
    category: 'Temperature Controlled Freight',
    image: '/blog/what-is-a-reefer-truck.webp',
  },
  {
    slug: 'last-free-day-drayage-how-to-keep-containers-moving',
    title: 'Last Free Day Is Not a Suggestion: Keeping Containers Moving Off the Terminal',
    category: 'Drayage',
    image: '/blog/us-port-container-volumes-2026.webp',
  },
  {
    slug: 'ocean-freight-only-works-with-an-inland-plan',
    title: 'Ocean Freight Only Works If the Inland Plan Is Booked Too',
    category: 'Ocean Freight',
    image: '/blog/types-of-cargo-ships.webp',
  },
  {
    slug: 'what-to-send-in-a-freight-quote-request',
    title: 'What to Send in a Freight Quote Request If You Want a Real Rate',
    category: 'Logistics Insight',
    image: '/blog/20-essential-logistics-terms.webp',
  },
].map((post) => ({
  ...post,
  to: getBlogDetailPageRoute(post.slug),
}))
