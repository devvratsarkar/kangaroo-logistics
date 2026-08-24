import { useState } from 'react'
import { Link } from 'react-router-dom'
import PrimaryToolbar from './PrimaryToolbar.jsx'
import PrimaryMenu from './PrimaryMenu.jsx'
import OffCanvasMenu from './OffCanvasMenu.jsx'
import { CloseIcon, MenuIcon } from '../../ui/AllSVG.jsx'
import {
  getHomePageRoute,
  getQuotePageRoute,
} from '../../../routes/routes.js'

export default function PrimaryHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <PrimaryToolbar />

      <header className="sticky top-0 z-40 bg-white">
        <div className="border-b border-secondary bg-white">
          <div className="custom_container lg:w-[85%]! flex h-19 items-center justify-between gap-6 lg:h-21">
            <Link
              to={getHomePageRoute()}
              className="relative z-10 flex shrink-0 items-center"
              aria-label="Kangaroo Logistics home"
            >
              <img
                src="/logo.png"
                alt="Kangaroo Logistics LLC"
                className="h-11 w-auto sm:h-12 lg:h-13"
                width={260}
                height={74}
              />
            </Link>

            <PrimaryMenu />

            <div className="flex items-center gap-3">
              <Link
                to={getQuotePageRoute()}
                className="hidden items-center border border-secondary bg-secondary px-5 py-2.5 text-[11px] font-bold tracking-[0.16em] text-primary uppercase transition-colors hover:border-primary hover:bg-primary hover:text-white sm:inline-flex"
              >
                Get a Quote
              </Link>

              <button
                type="button"
                className="inline-flex size-11 items-center justify-center text-primary transition-colors hover:text-secondary lg:hidden"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((open) => !open)}
              >
                {mobileOpen ? (
                  <CloseIcon className="size-7" />
                ) : (
                  <MenuIcon className="size-7" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <OffCanvasMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  )
}
