import MainLayout from '../components/layout/MainLayout.jsx'
import HomePage from '../pages/home/Home'
import AboutUsPage from '../pages/about/AboutUs'
import ServicesPage from '../pages/services/Services'
import ServiceDetailPage from '../pages/services/ServiceDetail'
import ContactUsPage from '../pages/contact/ContactUs'
import GetAQuotePage from '../pages/quote/GetAQuote'
import BlogPage from '../pages/blog/Blog'
import BlogDetailPage from '../pages/blog/BlogDetail'
import PrivacyPolicyPage from '../pages/legal/PrivacyPolicy'
import TermsAndConditionsPage from '../pages/legal/TermsAndConditions'
import {
  getAboutPageRoute,
  getBlogDetailPageRoute,
  getBlogPageRoute,
  getContactPageRoute,
  getHomePageRoute,
  getPrivacyPageRoute,
  getQuotePageRoute,
  getServiceDetailPageRoute,
  getServicesPageRoute,
  getTermsPageRoute,
} from './routes'

export const RouterData = [
  {
    element: <MainLayout />,
    children: [
      {
        path: getHomePageRoute(),
        element: <HomePage />,
      },
      {
        path: getAboutPageRoute(),
        element: <AboutUsPage />,
      },
      {
        path: getServicesPageRoute(),
        element: <ServicesPage />,
      },
      {
        path: getServiceDetailPageRoute(),
        element: <ServiceDetailPage />,
      },
      {
        path: getContactPageRoute(),
        element: <ContactUsPage />,
      },
      {
        path: getQuotePageRoute(),
        element: <GetAQuotePage />,
      },
      {
        path: getBlogPageRoute(),
        element: <BlogPage />,
      },
      {
        path: getBlogDetailPageRoute(),
        element: <BlogDetailPage />,
      },
      {
        path: getPrivacyPageRoute(),
        element: <PrivacyPolicyPage />,
      },
      {
        path: getTermsPageRoute(),
        element: <TermsAndConditionsPage />,
      },
    ],
  },
]
