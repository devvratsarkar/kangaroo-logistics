import { getServiceDetailPageRoute } from '../routes/routes'

export const serviceNavItems = [
  { label: 'Reefer Freight', slug: 'reefer-freight' },
  { label: 'Drayage', slug: 'drayage' },
  { label: 'Warehouse', slug: 'warehouse' },
  { label: 'Multimodal Transport', slug: 'multimodal-transport' },
  { label: 'Ocean Freight', slug: 'ocean-freight' },
  { label: 'Road Freight', slug: 'road-freight' },
].map((item) => ({
  ...item,
  to: getServiceDetailPageRoute(item.slug),
}))
