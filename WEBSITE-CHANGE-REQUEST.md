# Website Change Request — Kangaroo Logistics

Simple, point-by-point list of the client’s requested updates, mapped to **this** React project (homepage first, then site-wide).

**Status key**

- **Do now** — enough detail to implement immediately
- **Waiting on client** — new text / pictures / contact details still to be provided
- **Site-wide** — same change must be applied on more than one page, not only the homepage

---

## How this site is built (quick context)

The homepage is assembled in `src/pages/home/Home.jsx` in this order:

1. Hero slider (`HomeHeroSlider`)
2. About / Welcome (`HomeWelcome`)
3. Services (`HomeSpecialServices`)
4. Why Choose Us (`HomeWhyChooseUs`)
5. 3 Easy Steps (`HomeWorkingProcess`)
6. Industries We Serve (`HomeIndustriesWeServe`)
7. Consultations / Helpdesk (`HomeConsultations`)
8. Need Immediate Support + counters (`HomeCustomerSupport`)
9. Testimonials (`HomeTestimonials`)
10. Powerful Features / Pillars (`HomeFeatures`)
11. Latest Blog (`HomeLatestBlog`)

Header and footer wrap every page (`PrimaryToolbar`, `PrimaryHeader`, `PrimaryFooter`). Most copy lives in `src/data/`, not hard-coded inside components.

---

## 1. Header (top bar)

**Where:** `src/components/layout/header/PrimaryToolbar.jsx`

### 1.1 Remove “Nationwide Logistics”

The yellow badge on the left of the top bar currently says **Nationwide Logistics**. Remove that badge completely.

### 1.2 Keep only Email, Working Hours, and Address

The top bar currently shows:

| Current | Action |
| --- | --- |
| Phone (`+1 (718) 555-0124`) | Remove from header |
| Email (`ops@kangaroologistics.com`) | **Keep** (replace with new email when provided) |
| Hours (`Mon–Fri, 8AM – 6PM EST`) | **Keep**, but change wording to **Working Hours: 24/7 Availability** |
| Address (`Wilmington, DE`) | **Keep**, but update to the new California-based address when provided |

Also remove the tagline **Reliable. Responsive. Results.** from the right side of the toolbar (it is not in the keep list).

**Status:** Do now (hours text). Address/email wait for new contact info.

---

## 2. Hero slider — “Since 2021” and California

**Where:** `src/data/homeSlides.js` + `src/components/home/HomeHeroSlider.jsx`

Each hero slide currently shows:

- **We're Since 2021**
- **Based In USA**

### 2.1 Remove “Since 2021”

Remove the year line. Do not mention 2021 anywhere in this badge.

### 2.2 Say we are California, USA based

Replace the location line so it clearly says the company is **based in California, USA** (not a generic “Based In USA”).

**Status:** Do now.

---

## 3. Facebook — remove completely (site-wide)

Facebook icon and link must not appear anywhere.

| Location | File |
| --- | --- |
| Header social icons | `src/components/layout/header/PrimaryToolbar.jsx` |
| Footer social icons | `src/data/footerLinks.js` + `src/components/layout/footer/PrimaryFooter.jsx` |
| Facebook SVG (can stay unused or be deleted if unused) | `src/components/ui/AllSVG.jsx` (`FacebookIcon`) |

Keep LinkedIn and Instagram unless told otherwise.

**Status:** Do now. **Site-wide.**

---

## 4. About Us (homepage Welcome + About page)

**Where (homepage):** `src/components/home/HomeWelcome.jsx`  
**Where (About page):** `src/components/about/AboutIntro.jsx` + `src/data/aboutPage.js`

### 4.1 Replace the About Us introduction completely

Current homepage copy starts with “Welcome to our website!” and two paragraphs about ocean/air/road freight.

Current About page copy is `aboutPageContent.introParagraphs` in `src/data/aboutPage.js`.

**Replace all of this with the new About Us text the client will send.**

**Status:** Waiting on client.

### 4.2 Replace the About Us image

Current image: `/home/welcome.jpg` (used on both homepage Welcome and About Intro). Alt text currently implies people (“team coordinating freight”).

**New image rules:**

- Professional logistics photo
- **No human / person visible**
- Use the same (or equivalent) image on homepage and About page so they stay consistent

**Status:** Do now once an image is chosen / supplied. Prefer no people in the photo.

---

## 5. Services — rename + new images

**Where:** `src/data/services.js` (also drives Services page, header menu, mobile menu, quote form dropdown)

Service names and images currently:

| Current name | Slug | Current image |
| --- | --- | --- |
| Reefer Freight | `reefer-freight` | `/services/reefer.webp` |
| Warehouse | `warehouse` | `/services/warehouse.webp` |
| Multimodal Transport | `multimodal-transport` | `/services/multimodal.webp` |
| Road Freight | `road-freight` | `/services/road.webp` |

### Required name + image updates

| Old name | New name | Image requirement |
| --- | --- | --- |
| Multimodal Transport | **Multimodal / Intermodal** | Train / rail freight photo |
| Warehouse | **Warehouse Service** | Professional warehouse photo |
| Road Freight | **Over the Road (OTR)** | Road / truck freight photo that clearly shows OTR |
| Reefer Freight | **Temperature Controlled Freight** | Reefer / cold-chain photo (no generic truck if it doesn’t read as temperature-controlled) |

Each service card must use a picture that **clearly represents that specific service**.

Also update related copy that still says “Road Freight” or “Reefer Freight”:

- `src/data/serviceDetails.js` (service detail pages)
- `src/data/blogs.js` and `src/data/blogSidebar.js` (blog categories)
- Header / off-canvas service labels (they read from `services.js`, so they update automatically)

Drayage and Ocean Freight were not mentioned — leave them unless told otherwise.

**Status:** Do now for names. New images needed for each renamed service.

---

## 6. Why Choose Us

**Where:** `src/components/home/HomeWhyChooseUs.jsx` + `src/data/whyChooseUs.js`

Current items:

1. Reliable Logistics, Every Mile (`/home/why-choose-1.webp`)
2. Customer-First Service You Can Trust (`/home/why-choose-2.webp`)

**Remove all existing text and images.** Replace with the new content and pictures the client will send.

**Status:** Waiting on client.

---

## 7. “We Follow 3 Easy Steps” — remove entire section

**Where:** `src/components/home/HomeWorkingProcess.jsx` + `src/data/workingProcess.js`

This section appears on:

- Homepage (`src/pages/home/Home.jsx`)
- About page (`src/pages/about/AboutUs.jsx`)

**Remove the entire section from both pages.** Do not leave an empty gap or a heading with no content.

**Status:** Do now. **Site-wide** (Home + About).

---

## 8. Industries We Serve — keep, update design

**Where:** `src/components/home/HomeIndustriesWeServe.jsx` + `src/data/industriesWeServe.js`

Keep all 12 industries (Retail & E-commerce, Manufacturing, Food & Beverage, Construction, Automotive, Agriculture, Consumer Goods, Healthcare & Medical, Chemical & Industrial, Energy & Utilities, Paper & Packaging, Furniture & Home Goods).

**Design change:** each industry card should use a **relevant product/commodity photo as the background** (e.g. food for Food & Beverage, vehicles/parts for Automotive), not only an icon on a plain card.

**Status:** Do now (design + images). Industry list stays.

---

## 9. Helpdesk (currently “Consultations”)

**Where:** `src/components/home/HomeConsultations.jsx`  
Also similar block on Contact page: `src/components/contact/ContactFormSection.jsx`

### 9.1 Rename “Consultation(s)” → “Helpdesk”

### 9.2 Change the side image

Replace `/home/contact-thumb.webp` (and the people avatars overlay) with a **logistics / helpdesk** image. Prefer no people if that matches the About Us photo rule; at minimum it should clearly read as support / logistics help, not a generic office portrait.

### 9.3 Simplify the form

Remove these fields:

- Email
- Name
- Phone number
- Service selection
- Any other extra fields

**Keep only a simple message box**, with wording similar to:

> If you need help with any freight solution, simply send us a message. Our team will respond quickly.

**Status:** Do now (copy can be adjusted slightly). Confirm whether Contact page form should match this simplified Helpdesk or stay as a full quote form.

---

## 10. Need Immediate Support

**Where:** `src/components/home/HomeCustomerSupport.jsx`

### 10.1 Remove the “Our Services” button

This section currently has two buttons: **Contact Us** and **Our Services**. Remove **Our Services**. Keep **Contact Us**.

### 10.2 Support wording (also listed separately below)

The badge currently says **24x7 Customer Support**. Change related support labels to **24/7 Support** (not “24/7 Customer Support”). See section 15.

**Status:** Do now.

---

## 11. Statistics / counters — remove all three

**Where:** `src/data/supportStats.js` (rendered under Need Immediate Support)

Remove these columns completely:

- Clients (`Worldwide Clients` / 1500+)
- Staff (`Expert Company Staffs` / 115+)
- Successful Deliveries (`Successful Delivery` / 30k+)

After removal, the stats bar under this section should disappear (do not leave empty boxes).

**Status:** Do now.

---

## 12. Testimonials — remove entire section

**Where:** `src/components/home/HomeTestimonials.jsx` + `src/data/testimonials.js`

This section is used on:

- Homepage
- About page
- Services page

**Remove it from all three pages.**

**Status:** Do now. **Site-wide.**

---

## 13. Pillars of Nationwide Logistics (currently “Powerful Features”)

**Where:** `src/components/home/HomeFeatures.jsx` + `src/data/features.js`

### 13.1 Rename the heading

**From:** Powerful Features of Kangaroo Logistics  
**To:** **Pillars of Nationwide Logistics**

### 13.2 Remove existing feature cards

Current cards:

- Fast Delivery ← **must be removed** (called out specifically)
- Reliable Service
- Experienced Team
- 24/7 Customer Support
- Flexible Freight Solutions
- Safe & Secure Transport
- On-Time Delivery

Remove **all** existing feature/pillar content (not only Fast Delivery). Replace with the new pillars the client will send.

**Status:** Rename + remove Fast Delivery / old cards: do now. **New pillar text and pictures: waiting on client.**

---

## 14. Latest Blog — replace content

**Where:** `src/data/latestBlogs.js` (home uses first 3 posts from `src/data/blogs.js`)  
Full blog list: `src/data/blogs.js` + `src/data/blogBodies.js`

Replace current blog titles, excerpts, categories, and body copy with the new blog content the client will send.

**Status:** Waiting on client.

---

## 15. Support label — “24/7 Support”

Use **24/7 Support**, not **24/7 Customer Support** (and not **24x7 Customer Support**).

Known places:

| Current text | File |
| --- | --- |
| `24x7 Customer Support` | `src/components/home/HomeCustomerSupport.jsx` |
| `24/7 Customer Support` | `src/data/features.js` |
| `24/7 Customer Support` | `src/data/aboutPage.js` (highlights + capabilities) |

Search the whole project after the change so no old wording remains.

**Status:** Do now. **Site-wide.**

---

## 16. Footer CTA — remove “Ready to move freight…”

**Where:** `src/components/layout/footer/PrimaryFooter.jsx`

Remove:

- **Ready to move freight with confidence?**
- **Request a Quote** button next to it

Client will send replacement content and where it should sit (footer vs homepage bottom). Do not invent a replacement yet.

**Status:** Remove now. Replacement: waiting on client.

---

## 17. Contact information — replace everywhere

**Current details to wipe completely:**

| Type | Current value |
| --- | --- |
| Address | 300 Delaware AVE, Suite - 210 # 518, Wilmington, Delaware, 19801 |
| Short address | Wilmington, DE |
| Phone | +1 (718) 555-0124 |
| Phone | +1 (718) 555-0198 |
| Email | ops@kangaroologistics.com |
| Email | info@kangaroologistics.com |
| Map | Google Maps embed/directions for Wilmington, DE |

**Files that currently hold contact data:**

- `src/data/footerLinks.js` (`footerContact`)
- `src/data/contactPage.js`
- `src/components/layout/header/PrimaryToolbar.jsx`
- `src/components/layout/header/OffCanvasMenu.jsx` (mobile menu phone + email)
- `src/pages/quote/GetAQuote.jsx`
- `src/components/contact/ContactMapSection.jsx` (“Our Wilmington office”)

After new details arrive: update **all** of the above, plus any leftover hard-coded strings. Run a project-wide search for `Wilmington`, `718`, `kangaroologistics.com`, and `Delaware` to confirm nothing old remains.

**Status:** Waiting on client. **Site-wide.**

---

## Waiting on client (do not guess)

Implement the structure/removals above, but **do not invent** these until the client sends them:

1. New **About Us** introduction text
2. New **Why Choose Us** text and pictures
3. New **Pillars of Nationwide Logistics** text and pictures
4. New **Latest Blog** posts
5. New **address, phone, and email**
6. Replacement content/placement for the removed footer “Request a Quote” block

---

## Suggested implementation order

1. Removals (Facebook, 3 Easy Steps, Testimonials, counters, Fast Delivery, footer CTA, header badge, Our Services button)
2. Simple copy/label updates (hours, California based, Helpdesk, 24/7 Support, service names)
3. Images (About Us, services, industries backgrounds, Helpdesk)
4. Helpdesk form simplification
5. Pause for client content: About Us, Why Choose Us, Pillars, Blog, contact details, footer replacement
6. Final sweep: old contact details, old service names, Facebook, “Since 2021”, “Customer Support” wording
