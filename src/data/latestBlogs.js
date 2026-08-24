import { getBlogPageRoute } from '../routes/routes.js'

export const latestBlogs = [
  {
    id: 'port-la-record-volume',
    slug: 'port-of-los-angeles-hits-record-container-volume',
    category: 'Logistics Insight',
    title: 'Tariff Uncertainty Pushes Port of Los Angeles to Record-Breaking Container Volume',
    excerpt:
      'The Port of Los Angeles saw record cargo volume in July as shippers rushed imports ahead of U.S. tariffs, highlighting global trade and supply chain shifts.',
    image: '/banners/ocean-freight.webp',
    imageAlt: 'Port of Los Angeles container volume at record levels',
    to: getBlogPageRoute(),
  },
  {
    id: 'full-truckload-benefits',
    slug: '5-key-benefits-of-full-truckload-shipping-for-high-volume-freight',
    category: 'Full Truck Load',
    title: '5 Key Benefits of Full Truckload Shipping for High-Volume Freight',
    excerpt:
      'Discover how full truckload shipping enhances speed, security, and cost savings for high-volume freight. Learn the top 5 benefits and optimize your logistics today!',
    image: '/banners/road-transport.webp',
    imageAlt: 'Full truckload shipping for high-volume freight',
    to: getBlogPageRoute(),
  },
  {
    id: 'truckload-ltl-trends-2026',
    slug: 'strategic-outlook-2026-truckload-ltl-freight-trends-reshaping-global-logistics',
    category: 'Road Freight',
    title: 'Strategic Outlook 2026: Truckload & LTL Freight Trends Reshaping Global Logistics',
    excerpt:
      'Discover the biggest Truckload (TL) and Less-Than-Truckload (LTL) freight trends shaping global logistics in 2026. Learn how AI, automation, sustainability, and digital freight are transforming supply chains.',
    image: '/banners/specialized-freight.webp',
    imageAlt: 'Truckload and LTL freight trends reshaping logistics',
    to: getBlogPageRoute(),
  },
]
