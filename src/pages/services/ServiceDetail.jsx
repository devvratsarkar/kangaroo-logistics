import { useParams } from 'react-router-dom'
import { serviceNavItems } from '../../data/services.js'

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const service = serviceNavItems.find((item) => item.slug === slug)
  const title = service?.label || 'Service'

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="font-display text-4xl font-semibold tracking-tight text-primary">
        {title}
      </h1>
      <p className="mt-3 text-muted">
        Details for {title.toLowerCase()} from Kangaroo Logistics.
      </p>
    </section>
  )
}
