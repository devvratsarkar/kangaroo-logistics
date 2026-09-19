import LegalHero from '../../components/legal/LegalHero.jsx'
import LegalDocument from '../../components/legal/LegalDocument.jsx'
import { termsAndConditionsPage } from '../../data/legalPages.js'

export default function TermsAndConditionsPage() {
  return (
    <>
      <LegalHero page={termsAndConditionsPage} />
      <LegalDocument page={termsAndConditionsPage} />
    </>
  )
}
