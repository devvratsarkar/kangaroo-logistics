import { getBlogDetailPageRoute } from '../routes/routes.js'

/**
 * Homepage blog cards only. Kept as a frozen snapshot so catalog updates
 * on inner pages do not change the home page.
 */
export const latestBlogs = [
  {
    id: 'port-la-record-volume',
    slug: 'port-of-los-angeles-hits-record-container-volume',
    category: 'Logistics Insight',
    title: 'Tariff Uncertainty Pushes Port of Los Angeles to Record-Breaking Container Volume',
    excerpt:
      'The Port of Los Angeles saw record cargo volume in July as shippers rushed imports ahead of U.S. tariffs, highlighting global trade and supply chain shifts.',
    author: 'Pankaj Mehta',
    date: '14 Aug, 2026',
    dateISO: '2026-08-14',
    image: '/blog/port-of-los-angeles-hits-record-container-volume.webp',
    imageAlt: 'Port of Los Angeles container volume at record levels',
  },
  {
    id: 'full-truckload-benefits',
    slug: '5-key-benefits-of-full-truckload-shipping-for-high-volume-freight',
    category: 'Full Truck Load',
    title: '5 Key Benefits of Full Truckload Shipping for High-Volume Freight',
    excerpt:
      'Discover how full truckload shipping enhances speed, security, and cost savings for high-volume freight.',
    author: 'Pankaj Mehta',
    date: '10 Aug, 2026',
    dateISO: '2026-08-10',
    image: '/blog/5-key-benefits-of-full-truckload-shipping-for-high-volume-freight.webp',
    imageAlt: 'Full truckload shipping for high-volume freight',
  },
  {
    id: 'truckload-ltl-trends-2026',
    slug: 'strategic-outlook-2026-truckload-ltl-freight-trends-reshaping-global-logistics',
    category: 'Over the Road (OTR)',
    title: 'Strategic Outlook 2026: Truckload & LTL Freight Trends Reshaping Global Logistics',
    excerpt:
      'Discover the biggest Truckload (TL) and Less-Than-Truckload (LTL) freight trends shaping global logistics in 2026.',
    author: 'Admin',
    date: '15 Jul, 2026',
    dateISO: '2026-07-15',
    image: '/blog/strategic-outlook-2026-truckload-ltl-freight-trends-reshaping-global-logistics.webp',
    imageAlt: 'Truckload and LTL freight trends reshaping logistics',
  },
].map((post) => ({
  ...post,
  to: getBlogDetailPageRoute(post.slug),
}))
