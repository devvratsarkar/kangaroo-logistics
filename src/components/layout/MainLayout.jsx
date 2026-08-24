import { Outlet } from 'react-router-dom'
import PrimaryFooter from './footer/PrimaryFooter.jsx'
import PrimaryHeader from './header/PrimaryHeader.jsx'

export default function MainLayout() {
  return (
    <div className="min-h-svh bg-white text-primary">
      <PrimaryHeader />
      <main>
        <Outlet />
      </main>
      <PrimaryFooter />
    </div>
  )
}
