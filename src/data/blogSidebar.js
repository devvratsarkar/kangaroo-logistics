import { getBlogDetailPageRoute } from '../routes/routes.js'

/** Sidebar categories from Empath Logistics blog detail pages. */
export const blogCategories = [
  { slug: 'road-freight', label: 'Over the Road (OTR)' },
  { slug: 'reefer-freight', label: 'Temperature Controlled Freight' },
  { slug: 'ocean-freight', label: 'Ocean Freight' },
  { slug: 'logistics-insight', label: 'Logistics Insight' },
  { slug: 'less-than-truckload', label: 'Less Than Truckload' },
  { slug: 'full-truck-load', label: 'Full Truck Load' },
  { slug: 'cargo', label: 'Cargo' },
  { slug: 'drayage', label: 'Drayage' },
  { slug: 'power-only-trucking', label: 'Power only Trucking' },
  { slug: 'flatbed-trucking', label: 'Flatbed Trucking' },
  { slug: 'intermodal', label: 'Intermodal' },
  { slug: 'cross-border', label: 'Cross Border' },
  { slug: '3pl', label: '3PL' },
  { slug: 'supply-chain', label: 'Supply Chain' },
]

/**
 * Popular posts from Empath blog sidebar.
 * https://www.empathlogistics.com/blog/...
 */
export const popularPosts = [
  {
    slug: 'strategic-outlook-2026-truckload-ltl-freight-trends-reshaping-global-logistics',
    title: 'Strategic Outlook 2026: Truckload & LTL Freight Trends Reshaping Global Logistics',
    category: 'Over the Road (OTR)',
    image: '/blog/strategic-outlook-2026-truckload-ltl-freight-trends-reshaping-global-logistics.webp',
  },
  {
    slug: 'types-of-cargo-ships-a-complete-guide-to-modern-maritime-transportation',
    title: 'Types of Cargo Ships: A Complete Guide to Modern Maritime Transportation',
    category: 'Ocean Freight',
    image: '/blog/types-of-cargo-ships-a-complete-guide-to-modern-maritime-transportation.webp',
  },
  {
    slug: '5-key-benefits-of-full-truckload-shipping-for-high-volume-freight',
    title: '5 Key Benefits of Full Truckload Shipping for High-Volume Freight',
    category: 'Full Truck Load',
    image: '/blog/5-key-benefits-of-full-truckload-shipping-for-high-volume-freight.webp',
  },
  {
    slug: 'what-is-a-reefer-truck',
    title: 'What Is a Reefer Truck? A Complete Guide to Refrigerated Trucking',
    category: 'Temperature Controlled Freight',
    image: '/blog/what-is-a-reefer-truck.webp',
  },
  {
    slug: 'the-complete-guide-to-road-freight-transportation-everything-your-business-needs-to-know',
    title: 'The Complete Guide to Road Freight Transportation: Everything Your Business Needs to Know',
    category: 'Over the Road (OTR)',
    image: '/blog/the-complete-guide-to-road-freight-transportation.webp',
  },
].map((post) => ({
  ...post,
  to: getBlogDetailPageRoute(post.slug),
}))
