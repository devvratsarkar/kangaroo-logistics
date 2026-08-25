import ServicesHero from '../../components/services/ServicesHero.jsx'
import ServicesHighlights from '../../components/services/ServicesHighlights.jsx'
import ServicesGrid from '../../components/services/ServicesGrid.jsx'
import ServicesCta from '../../components/services/ServicesCta.jsx'
import HomeTestimonials from '../../components/home/HomeTestimonials.jsx'
import HomeLatestBlog from '../../components/home/HomeLatestBlog.jsx'

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesHighlights />
      <ServicesGrid />
      <HomeTestimonials />
      <HomeLatestBlog />
      <ServicesCta />
    </>
  )
}
