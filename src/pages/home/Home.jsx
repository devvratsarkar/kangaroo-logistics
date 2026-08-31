import HomeHeroSlider from '../../components/home/HomeHeroSlider.jsx'
import HomeWelcome from '../../components/home/HomeWelcome.jsx'
import HomeSpecialServices from '../../components/home/HomeSpecialServices.jsx'
import HomeWhyChooseUs from '../../components/home/HomeWhyChooseUs.jsx'
import HomeIndustriesWeServe from '../../components/home/HomeIndustriesWeServe.jsx'
import HomeConsultations from '../../components/home/HomeConsultations.jsx'
import HomeCustomerSupport from '../../components/home/HomeCustomerSupport.jsx'
import HomeFeatures from '../../components/home/HomeFeatures.jsx'
import HomeLatestBlog from '../../components/home/HomeLatestBlog.jsx'

export default function HomePage() {
  return (
    <>
      <HomeHeroSlider />
      <HomeWelcome />
      <HomeSpecialServices />
      <HomeWhyChooseUs />
      <HomeIndustriesWeServe />
      <HomeConsultations />
      <HomeCustomerSupport />
      <HomeFeatures />
      <HomeLatestBlog />
    </>
  )
}
