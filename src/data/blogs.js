import { getBlogDetailPageRoute } from '../routes/routes.js'

/**
 * Blog posts sourced from Empath Logistics blogs listing
 * (titles, authors, dates, and thumbnail images).
 * https://www.empathlogistics.com/blogs
 */
export const blogs = [
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
    category: 'Road Freight',
    title: 'Strategic Outlook 2026: Truckload & LTL Freight Trends Reshaping Global Logistics',
    excerpt:
      'Discover the biggest Truckload (TL) and Less-Than-Truckload (LTL) freight trends shaping global logistics in 2026.',
    author: 'Admin',
    date: '15 Jul, 2026',
    dateISO: '2026-07-15',
    image: '/blog/strategic-outlook-2026-truckload-ltl-freight-trends-reshaping-global-logistics.webp',
    imageAlt: 'Truckload and LTL freight trends reshaping logistics',
  },
  {
    id: 'types-cargo-ships-guide',
    slug: 'types-of-cargo-ships-a-complete-guide-to-modern-maritime-transportation',
    category: 'Ocean Freight',
    title: 'Types of Cargo Ships: A Complete Guide to Modern Maritime Transportation',
    excerpt:
      'A complete guide to modern cargo ships and how different vessel types support global maritime transportation.',
    author: 'Admin',
    date: '15 Jul, 2026',
    dateISO: '2026-07-15',
    image: '/blog/types-of-cargo-ships-a-complete-guide-to-modern-maritime-transportation.webp',
    imageAlt: 'Types of cargo ships used in maritime transportation',
  },
  {
    id: 'road-freight-guide',
    slug: 'the-complete-guide-to-road-freight-transportation-everything-your-business-needs-to-know',
    category: 'Road Freight',
    title: 'The Complete Guide to Road Freight Transportation: Everything Your Business Needs to Know',
    excerpt:
      'Everything your business needs to know about road freight transportation, from planning to delivery.',
    author: 'Admin',
    date: '08 Jul, 2026',
    dateISO: '2026-07-08',
    image: '/blog/the-complete-guide-to-road-freight-transportation.webp',
    imageAlt: 'Road freight transportation guide for businesses',
  },
  {
    id: 'largest-shipping-companies',
    slug: 'largest-shipping-companies',
    category: 'Ocean Freight',
    title: 'Top 10 Largest Shipping Companies in the World in 2026',
    excerpt:
      'Explore the top 10 largest shipping companies in the world in 2026 and what sets their global networks apart.',
    author: 'Pankaj Mehta',
    date: '20 May, 2026',
    dateISO: '2026-05-20',
    image: '/blog/largest-shipping-companies.webp',
    imageAlt: 'Largest shipping companies in the world',
  },
  {
    id: 'largest-container-ships',
    slug: 'world-largest-container-ships',
    category: 'Ocean Freight',
    title: 'Largest Container Ships in the World: Top 10 by Size, Capacity & TEU',
    excerpt:
      'A look at the largest container ships in the world ranked by size, capacity, and TEU.',
    author: 'Pankaj Mehta',
    date: '27 Apr, 2026',
    dateISO: '2026-04-27',
    image: '/blog/world-largest-container-ships.webp',
    imageAlt: 'Largest container ships by capacity and TEU',
  },
  {
    id: 'types-of-cargo-ships',
    slug: 'types-of-cargo-ships',
    category: 'Ocean Freight',
    title: 'Types of Cargo Ships You Should Know',
    excerpt:
      'Learn the main types of cargo ships and which vessel is best suited for different kinds of freight.',
    author: 'Pankaj Mehta',
    date: '07 Apr, 2026',
    dateISO: '2026-04-07',
    image: '/blog/types-of-cargo-ships.webp',
    imageAlt: 'Different types of cargo ships',
  },
  {
    id: 'metal-tariffs-exemptions',
    slug: 'trump-50-percent-metal-tariffs-exemptions',
    category: 'Logistics Insight',
    title: 'Trump Maintains 50% Metal Tariffs While Introducing Key Exemptions',
    excerpt:
      'An overview of continued 50% metal tariffs and the key exemptions shaping freight and trade planning.',
    author: 'Pankaj Mehta',
    date: '03 Apr, 2026',
    dateISO: '2026-04-03',
    image: '/blog/trump-50-percent-metal-tariffs-exemptions.webp',
    imageAlt: 'Metal tariffs and trade exemptions impacting freight',
  },
  {
    id: 'essential-logistics-terms',
    slug: '20-essential-logistics-terms',
    category: 'Logistics Insight',
    title: '20 Essential Logistics Terms You Should Know',
    excerpt:
      'Twenty essential logistics terms every shipper and freight partner should understand.',
    author: 'Pankaj Mehta',
    date: '24 Mar, 2026',
    dateISO: '2026-03-24',
    image: '/blog/20-essential-logistics-terms.webp',
    imageAlt: 'Essential logistics terms glossary',
  },
  {
    id: 'shipping-containers-guide',
    slug: 'shipping-containers-types-guide',
    category: 'Ocean Freight',
    title: 'Different Types of Shipping Containers: Sizes, Uses & Guide (2026)',
    excerpt:
      'A practical 2026 guide to shipping container types, sizes, and common use cases.',
    author: 'Pankaj Mehta',
    date: '23 Mar, 2026',
    dateISO: '2026-03-23',
    image: '/blog/shipping-containers-types-guide.webp',
    imageAlt: 'Different types of shipping containers',
  },
  {
    id: 'big-warehouse-demand',
    slug: 'big-warehouse-demand-us',
    category: 'Warehouse',
    title: 'Big Warehouse Spaces Are Seeing Strong Demand Again',
    excerpt:
      'Large warehouse spaces are seeing renewed demand across the U.S. as supply chains rebuild capacity.',
    author: 'Pankaj Mehta',
    date: '20 Mar, 2026',
    dateISO: '2026-03-20',
    image: '/blog/big-warehouse-demand-us.webp',
    imageAlt: 'Large warehouse spaces seeing strong demand',
  },
  {
    id: 'us-port-volumes-2026',
    slug: 'us-port-container-volumes-2026',
    category: 'Logistics Insight',
    title: 'U.S. Ports Start 2026 with Softer Container Volumes After Tariff-Driven Surge',
    excerpt:
      'U.S. ports opened 2026 with softer container volumes after a tariff-driven surge in previous months.',
    author: 'Pankaj Mehta',
    date: '05 Mar, 2026',
    dateISO: '2026-03-05',
    image: '/blog/us-port-container-volumes-2026.webp',
    imageAlt: 'U.S. port container volumes in early 2026',
  },
  {
    id: 'cdl-english-tests',
    slug: 'dot-requires-cdl-tests-in-english-for-all-drivers',
    category: 'Road Freight',
    title: 'DOT Requires CDL Tests in English for All Drivers',
    excerpt:
      'The DOT now requires CDL tests in English for all drivers, with important implications for carriers and fleets.',
    author: 'Pankaj Mehta',
    date: '23 Feb, 2026',
    dateISO: '2026-02-23',
    image: '/blog/dot-requires-cdl-tests-in-english-for-all-drivers.webp',
    imageAlt: 'CDL testing requirements for truck drivers',
  },
  {
    id: '3pls-industrial-leasing',
    slug: '3pls-dominate-industrial-leasing-2025',
    category: 'Warehouse',
    title: '3PLs Dominate Industrial Leasing in 2025 as Supply Chain Outsourcing Grows',
    excerpt:
      'Third-party logistics providers dominated industrial leasing in 2025 as more companies outsourced supply chain operations.',
    author: 'Pankaj Mehta',
    date: '27 Jan, 2026',
    dateISO: '2026-01-27',
    image: '/blog/3pls-dominate-industrial-leasing-2025.webp',
    imageAlt: '3PLs leading industrial leasing demand',
  },
  {
    id: 'what-is-a-reefer-truck',
    slug: 'what-is-a-reefer-truck',
    category: 'Reefer Freight',
    title: 'What Is a Reefer Truck? A Complete Guide to Refrigerated Trucking',
    excerpt:
      'Learn what a reefer truck is, how refrigerated trucking works, its benefits, industries served, and cold-chain best practices.',
    author: 'Admin',
    date: '22 Apr, 2025',
    dateISO: '2025-04-22',
    image: '/blog/what-is-a-reefer-truck.webp',
    imageAlt: 'Reefer truck refrigerated transportation guide',
  },
].map((post) => ({
  ...post,
  to: getBlogDetailPageRoute(post.slug),
}))

export function getBlogBySlug(slug) {
  return blogs.find((post) => post.slug === slug) ?? null
}
