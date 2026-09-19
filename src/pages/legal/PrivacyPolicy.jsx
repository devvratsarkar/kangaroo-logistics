import LegalHero from '../../components/legal/LegalHero.jsx'
import LegalDocument from '../../components/legal/LegalDocument.jsx'
import { privacyPolicyPage } from '../../data/legalPages.js'

export default function PrivacyPolicyPage() {
  return (
    <>
      <LegalHero page={privacyPolicyPage} />
      <LegalDocument page={privacyPolicyPage} />
    </>
  )
}
