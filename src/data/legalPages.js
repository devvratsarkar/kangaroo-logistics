import { companyAddress, primaryEmail, primaryPhone } from './companyContact.js'
import { getContactPageRoute, getPrivacyPageRoute, getTermsPageRoute } from '../routes/routes.js'

export const legalLastUpdated = 'September 19, 2026'
export const legalCompanyName = 'Kangaroo Logistics LLC'

export const privacyPolicyPage = {
  slug: 'privacy-policy',
  path: getPrivacyPageRoute(),
  badge: 'Legal',
  icon: 'shield',
  crumb: 'Privacy Policy',
  tagline: 'How the Manteca desk handles the details you send us.',
  title: 'Privacy Policy',
  intro:
    'This page explains what Kangaroo Logistics collects when you use our website, request a quote, leave a comment, or contact dispatch — and how we use that information to move freight and reply to you.',
  lastUpdated: legalLastUpdated,
  image: '/banners/specialized-freight.webp',
  related: {
    label: 'Also review',
    title: 'Terms & Conditions',
    to: getTermsPageRoute(),
    description: 'Website use, quotes, and how freight work is booked.',
  },
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      paragraphs: [
        `${legalCompanyName} (“Kangaroo Logistics,” “we,” “us,” or “our”) operates kangaroologistics.us and the related pages used to describe our freight services, request quotes, and reach our team. We are a freight brokerage based at ${companyAddress.formatted}.`,
        'This Privacy Policy applies to information we collect through the website and the forms on it. It does not replace the rate confirmation, bill of lading, or other shipping documents that govern an actual load.',
      ],
    },
    {
      id: 'information-we-collect',
      title: 'Information we collect',
      paragraphs: [
        'We collect information you choose to send us and limited technical data that helps the site work.',
      ],
      items: [
        {
          title: 'Quote and contact forms',
          text: 'Name, email, phone number, city, service type, shipment notes, and any origin, destination, commodity, or timing details you include.',
        },
        {
          title: 'Blog comments',
          text: 'Name, email, and the comment you submit on an article. Comments are sent to our team and are not published automatically.',
        },
        {
          title: 'Email and phone',
          text: 'Messages you send to our published addresses or numbers, including attachments or load files you choose to share.',
        },
        {
          title: 'Technical data',
          text: 'Browser type, device, referring page, and the page URL at the time you submit a form. We use this to troubleshoot submissions and understand which page a request came from.',
        },
      ],
    },
    {
      id: 'how-we-use-information',
      title: 'How we use information',
      paragraphs: ['We use the information we collect to:'],
      items: [
        'Respond to quote requests, tracking questions, and general inquiries',
        'Prepare rates, check capacity, and coordinate pickups or deliveries',
        'Share load details with carriers, warehouses, or other vendors only as needed to cover a shipment',
        'Follow up on a request you started on the website or by phone',
        'Improve the site, forms, and the way our desk handles incoming work',
        'Meet legal, insurance, accounting, or safety recordkeeping requirements',
      ],
    },
    {
      id: 'how-we-share-information',
      title: 'How we share information',
      paragraphs: [
        'We do not sell personal information. We share it only when it is needed to run the business or when the law requires it.',
      ],
      items: [
        {
          title: 'Service providers',
          text: 'Email delivery and hosting vendors that process form submissions so our team can receive and reply to them.',
        },
        {
          title: 'Carriers and logistics partners',
          text: 'Pickup, delivery, commodity, appointment, and contact details needed to quote, book, or move a load.',
        },
        {
          title: 'Professional advisors',
          text: 'Insurance, legal, or accounting firms when a claim, audit, or contract requires it.',
        },
        {
          title: 'Legal requests',
          text: 'Regulators, courts, or law enforcement when we are required to disclose information.',
        },
      ],
    },
    {
      id: 'cookies',
      title: 'Cookies and similar technologies',
      paragraphs: [
        'The website is built to work without advertising or social-media tracking pixels. Your browser may still store essential data needed for navigation and form use.',
        'If we add analytics or other optional cookies later, we will update this page and describe the choice available to you.',
      ],
    },
    {
      id: 'storage-and-security',
      title: 'How we store and protect information',
      paragraphs: [
        'Form submissions are delivered to our operations team and stored with the vendors we use to send and receive email. Access is limited to people who need the information to quote, dispatch, or support a shipment.',
        'No website or email system is completely secure. Please do not send payment card numbers or unnecessary personal identifiers through a public form. If a load file contains sensitive details, ask dispatch for a preferred channel first.',
      ],
    },
    {
      id: 'retention',
      title: 'How long we keep information',
      paragraphs: [
        'We keep quote and contact records for as long as they are useful for follow-up, shipment history, claims, or legal retention. Blog comments and one-off questions are kept long enough to respond and, if needed, to maintain a record of the conversation.',
        'When information is no longer needed, we delete or de-identify it in the ordinary course of business.',
      ],
    },
    {
      id: 'your-rights',
      title: 'Your privacy choices',
      paragraphs: [
        'You can ask us what personal information we hold about you, request a correction, or ask us to delete information that we do not need to keep for a shipment, claim, or legal reason.',
        'California residents may have additional rights under applicable state law. To make a request, email us from the address you used on the form or call the Manteca desk. We may need to confirm it is you before we change or delete a record.',
        'You can also unsubscribe from follow-up emails that are not required to complete a quote or active shipment by replying to the message or contacting us directly.',
      ],
    },
    {
      id: 'children',
      title: 'Children',
      paragraphs: [
        'This website is intended for business customers and carriers. We do not knowingly collect personal information from children under 16. If you believe a child has submitted information through the site, contact us and we will delete it.',
      ],
    },
    {
      id: 'third-party-links',
      title: 'Links to other sites',
      paragraphs: [
        'The site may link to maps, social profiles, carrier tools, or other third-party pages. Their privacy practices are their own. Review those policies before you submit information there.',
      ],
    },
    {
      id: 'changes',
      title: 'Changes to this policy',
      paragraphs: [
        `We may update this Privacy Policy when our site, vendors, or legal requirements change. The “Last updated” date at the top of the page will change when we do. Continued use of the website after an update means you accept the revised policy.`,
      ],
    },
    {
      id: 'contact',
      title: 'Contact us about privacy',
      paragraphs: [
        `Questions about this policy or a personal-information request can be sent to ${primaryEmail.label} or ${primaryPhone.label}. Mail can be sent to ${legalCompanyName}, ${companyAddress.formatted}.`,
      ],
    },
  ],
}

export const termsAndConditionsPage = {
  slug: 'terms-and-conditions',
  path: getTermsPageRoute(),
  badge: 'Legal',
  icon: 'file',
  crumb: 'Terms & Conditions',
  tagline: 'The rules for using this site and requesting freight coverage.',
  title: 'Terms & Conditions',
  intro:
    'These terms cover use of the Kangaroo Logistics website, quote forms, and published content. Booked freight is also governed by the rate confirmation, bill of lading, and any written agreement issued for that shipment.',
  lastUpdated: legalLastUpdated,
  image: '/banners/road-transport.webp',
  related: {
    label: 'Also review',
    title: 'Privacy Policy',
    to: getPrivacyPageRoute(),
    description: 'What we collect on forms and how we use it.',
  },
  sections: [
    {
      id: 'agreement',
      title: 'Agreement to these terms',
      paragraphs: [
        `By using this website, requesting a quote, or submitting a form, you agree to these Terms & Conditions and to our Privacy Policy. If you do not agree, do not use the site.`,
        `These terms are between you and ${legalCompanyName}, a freight brokerage with its office at ${companyAddress.formatted}.`,
      ],
    },
    {
      id: 'about-the-site',
      title: 'About this website',
      paragraphs: [
        'The website describes our services, publishes articles, and lets you contact the Manteca desk. Content is provided for general information. Transit times, equipment availability, rates, and lane coverage can change and are confirmed only when we issue a written quote or rate confirmation.',
        'We may update, pause, or remove pages, forms, or features without notice.',
      ],
    },
    {
      id: 'quotes-and-booking',
      title: 'Quotes and booking',
      paragraphs: [
        'A website or email quote is an estimate based on the details you provide. It is not a booking until both sides confirm the load in writing — typically a rate confirmation from Kangaroo Logistics and your acceptance of that confirmation.',
        'Rates can change if the commodity, weight, dimensions, accessorials, pickup window, appointments, or equipment type differ from what was quoted. Detention, layover, liftgate, lumper, and similar charges are billed as they occur unless the confirmation says otherwise.',
      ],
      items: [
        'Provide accurate origin, destination, commodity, weight, and timing',
        'Tell us about temperature, hazmat, high value, or special handling before we cover the load',
        'A quote can expire if capacity or market conditions change before you book',
      ],
    },
    {
      id: 'brokerage-relationship',
      title: 'Freight brokerage relationship',
      paragraphs: [
        'Kangaroo Logistics is a freight broker. We arrange transportation with motor carriers and other service providers. We do not operate as the motor carrier unless a document for that shipment says otherwise.',
        'The carrier that hauls the freight is responsible for the physical movement of the goods, subject to the bill of lading and applicable law. We coordinate the file, communicate status, and stay on exceptions, but we are not the shipper or the delivering carrier.',
      ],
    },
    {
      id: 'shipper-responsibilities',
      title: 'Shipper responsibilities',
      paragraphs: [
        'If you tender freight through us, you are responsible for:',
      ],
      items: [
        'Accurate descriptions of the goods, weight, value, and any temperature or handling requirements',
        'Proper packaging, labeling, and loading unless we have agreed in writing to arrange those services',
        'Providing contacts, appointments, and access at origin and destination',
        'Complying with export, import, customs, and product regulations that apply to the cargo',
        'Paying invoices on the terms stated on the rate confirmation or invoice',
      ],
    },
    {
      id: 'carriers-and-vendors',
      title: 'Carriers and other vendors',
      paragraphs: [
        'Carriers, warehouses, drayage providers, and ocean partners we use are independent contractors. Their drivers, equipment, and facilities are not ours. We select partners we believe can cover the work, but each provider is responsible for its own operations, insurance, and legal compliance.',
      ],
    },
    {
      id: 'claims-and-liability',
      title: 'Claims, delays, and liability',
      paragraphs: [
        'Freight claims are handled under the bill of lading, the carrier’s rules, and applicable transportation law. Notify us as soon as you know about shortage, damage, or a missed appointment so we can open the file with the carrier.',
        'We are not liable for delay caused by weather, terminals, customs, highway closures, shipper or consignee dock issues, or other events outside our reasonable control.',
        'To the fullest extent allowed by law, Kangaroo Logistics is not liable for indirect, incidental, special, or consequential damages, including lost profits, lost sales, or production downtime, arising from use of this website or from a shipment arranged through us. Our total liability related to website use is limited to one hundred U.S. dollars. Liability for a booked shipment, if any, is limited as stated in the rate confirmation and governing shipping documents.',
      ],
    },
    {
      id: 'website-use',
      title: 'Acceptable use of the website',
      paragraphs: [
        'You may use the site for lawful business inquiries. You may not:',
      ],
      items: [
        'Submit false shipment details or impersonate another person or company',
        'Attempt to break, scrape, overload, or interfere with the site or its forms',
        'Post or send unlawful, defamatory, or infringing content',
        'Use our content, marks, or quotes to misrepresent a relationship with Kangaroo Logistics',
      ],
    },
    {
      id: 'user-submissions',
      title: 'Forms and comments',
      paragraphs: [
        'When you submit a quote request, contact form, or blog comment, you grant us permission to use that content to respond, operate the business, and keep a record of the request. Do not submit confidential information you are not authorized to share.',
        'We may refuse or delete a comment or message that is off-topic, abusive, or appears to be spam.',
      ],
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual property',
      paragraphs: [
        'The Kangaroo Logistics name, logo, website design, and original written content are owned by us or used with permission. You may share a page link. You may not copy the site, scrape its content for a competing service, or use our marks without written consent.',
      ],
    },
    {
      id: 'disclaimer',
      title: 'Disclaimer',
      paragraphs: [
        'The website is provided “as is.” We do not warrant that pages will always be available, error-free, or current. Service descriptions, blog articles, and industry notes are educational and operational context — they are not legal, customs, or insurance advice.',
      ],
    },
    {
      id: 'indemnity',
      title: 'Indemnification',
      paragraphs: [
        'You agree to indemnify and hold Kangaroo Logistics and its team harmless from claims, damages, and expenses (including reasonable attorneys’ fees) that arise from your misuse of the website, inaccurate information you submit, or freight you tender in violation of law or these terms.',
      ],
    },
    {
      id: 'governing-law',
      title: 'Governing law',
      paragraphs: [
        'These terms are governed by the laws of the State of California, without regard to conflict-of-law rules. Courts located in San Joaquin County, California, have exclusive jurisdiction over disputes that arise from website use, unless a rate confirmation or other signed agreement specifies a different forum for a particular shipment.',
      ],
    },
    {
      id: 'changes',
      title: 'Changes to these terms',
      paragraphs: [
        'We may revise these Terms & Conditions from time to time. The “Last updated” date will change when we publish a revision. If you continue to use the site after an update, the new terms apply.',
      ],
    },
    {
      id: 'contact',
      title: 'Contact us about these terms',
      paragraphs: [
        `Questions about these terms can be sent to ${primaryEmail.label} or ${primaryPhone.label}. Our mailing address is ${legalCompanyName}, ${companyAddress.formatted}. For a new shipment, use the quote page or call dispatch.`,
      ],
    },
  ],
}

export const legalContactCta = {
  title: 'Need a coordinator, not a policy page?',
  description:
    'Send the lane or call the Manteca desk. Privacy and contract questions can use the same contacts.',
  contactTo: getContactPageRoute(),
  email: primaryEmail,
  phone: primaryPhone,
}
