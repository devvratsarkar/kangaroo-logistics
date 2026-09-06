import ServicesHero from '../../components/services/ServicesHero.jsx'
import ServicesHighlights from '../../components/services/ServicesHighlights.jsx'
import ServicesGrid from '../../components/services/ServicesGrid.jsx'
import ServicesCta from '../../components/services/ServicesCta.jsx'
import HomeLatestBlog from '../../components/home/HomeLatestBlog.jsx'
import { blogs } from '../../data/blogs.js'

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesHighlights />
      <ServicesGrid />
      <HomeLatestBlog
        posts={blogs.slice(0, 3)}
        badge="From the desk"
        title="Recent notes on lanes we run"
      />
      <ServicesCta />
    </>
  )
}
