import LegalHero from '../../components/legal/LegalHero.jsx'
import LegalDocument from '../../components/legal/LegalDocument.jsx'
import { smsTermsPage } from '../../data/legalPages.js'

export default function SmsTermsPage() {
  return (
    <>
      <LegalHero page={smsTermsPage} />
      <LegalDocument page={smsTermsPage} />
    </>
  )
}
