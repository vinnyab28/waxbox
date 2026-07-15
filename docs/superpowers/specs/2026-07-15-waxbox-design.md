# The Wax Box by MC — Website Design Spec

**Date:** 2026-07-15  
**Status:** Approved

---

## 1. Project Overview

Static website for The Wax Box by MC, a private waxing studio in Etobicoke, Ontario. The site must visually match the existing brand graphics (logo, client policies poster, prep care & aftercare poster) and serve as a local SEO asset driving bookings via Fresha.

**Business:** The Wax Box by MC — Wax Specialist  
**Esthetician:** Mayela (23+ years experience)  
**Location:** Salons by JC, 170 North Queen St., Unit K Suite #50, Etobicoke, ON M9C 1B1  
**Booking:** https://www.fresha.com/book-now/the-wax-room-ndhjrqek/all-offer?share=true&pId=2995913  
**Instagram:** https://www.instagram.com/thewaxboxbymc  
**Email:** the.wax.box@outlook.com

---

## 2. Key Decisions

- **No brow lamination anywhere** — completely removed from all pages, including aftercare
- **Esthetician name:** Mayela
- **Pricing page:** Placeholder only — content to be added later
- **Booking:** No dedicated booking page; "Book Now" buttons throughout link to Fresha
- **Map:** Google Maps embed (no API key required)
- **Architecture:** Approach B — plain HTML/CSS/JS with JS-injected nav and footer

---

## 3. Architecture

**Type:** Static site — no build tools, no framework, no dependencies  
**Deployment:** Any static host (Netlify, GitHub Pages, shared hosting)

### Nav & Footer Injection
`components.js` defines the nav HTML and footer HTML as strings and inserts them into every page at load time via `document.getElementById`. This keeps nav/footer in one place without a build step.

### File Structure

```
waxbox/
├── index.html
├── about.html
├── services.html
├── pricing.html
├── location.html
├── faq.html
├── aftercare-waxing.html
├── aftercare-lash.html
├── policies.html
│
├── css/
│   ├── base.css          # Reset, CSS custom properties, typography
│   ├── layout.css        # Nav, footer, page wrapper, grid system
│   └── components.css    # Buttons, cards, accordions, section blocks
│
├── js/
│   ├── components.js     # Injects nav + footer into every page
│   └── main.js           # Mobile menu toggle, FAQ accordion, scroll effects
│
└── images/
    ├── logo.png
    ├── client policies.png
    ├── prep care and after care.png
    └── instagram_qr.png
```

---

## 4. Visual System

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--cream` | `#FAF0E6` | Page background |
| `--gold` | `#C9930A` | Accent lines, dividers, hover states |
| `--gold-light` | `#E8B84B` | Primary buttons, highlights |
| `--chocolate` | `#2C1A0E` | Primary text, headings |
| `--rose-blush` | `#F2C4C4` | Soft accent, used sparingly |
| `--warm-white` | `#FFFDF8` | Card backgrounds, nav background |

All colors extracted from the logo and brand graphics. No harsh whites or cold greys.

### Typography

| Role | Font | Source |
|---|---|---|
| Headings / display | Playfair Display | Google Fonts |
| Script accents (hero only) | Great Vibes | Google Fonts |
| Body | Lato | Google Fonts |

### Buttons

- **Primary (Book Now):** `--gold-light` background, `--chocolate` text, border-radius 4px, hover darkens to `--gold`
- **Secondary:** `--warm-white` background, `--gold` border, `--chocolate` text

---

## 5. Navigation

**Layout:** Fixed top bar  
**Left:** Logo (`logo.png`)  
**Right:** Home · About · Services · Pricing · Location · FAQ · Aftercare ▾ · Policies · **[Book Now]**  
**Aftercare dropdown:** Two items — "Waxing Aftercare" → `aftercare-waxing.html` and "Lash Aftercare" → `aftercare-lash.html`  
**Active state:** Gold underline on current page link  
**Mobile:** Hamburger icon collapses links into a vertical list; Aftercare expands inline  
**"Book Now":** Gold button, always visible, links to Fresha URL

---

## 6. Footer

Three-column layout:

1. **Contact:** Email, phone (placeholder), address
2. **Quick Links:** All 9 pages
3. **Social:** Instagram link, `instagram_qr.png` image, @THEWAXBOXBYMC handle

Bottom bar: `© 2026 The Wax Box by MC. All rights reserved.`  
Styling: `--cream` background, `--chocolate` text, `--gold` top border line

---

## 7. Pages

### Home (`index.html`)
- **Hero:** Logo large, Mayela's welcome copy (from her provided content), "Book Now" CTA button
- **Services Snapshot:** 3 cards — Body & Facial Waxing · Brow Services · Lash Tinting
- **Why Choose Us:** 23+ years · Gentle techniques · Personalized care · Lycon wax · Free parking
- **Book CTA Banner:** Gold background strip, "Ready to book?" + button

Content source: Mayela's homepage copy (takes priority over Nicole's draft).

### About (`about.html`)
- Headline: "Meet Mayela — Your Esthetician in Etobicoke"
- Bio copy from BRIEF (with `[Her Name]` replaced by Mayela)
- My Philosophy · My Experience · My Studio · Why I Love What I Do

### Services (`services.html`)
- Intro paragraph
- **Body Waxing:** Full Leg, Half Leg, Brazilian, Bikini, Underarm, Full Arm, Half Arm, Back, Chest
- **Facial Waxing:** Brows, Upper Lip, Chin, Sideburns
- **Brow Services:** Eyebrow Tinting, Eyebrow Shaping (no brow lamination)
- **Lash Services:** Eyelash Tinting
- Book CTA at bottom

### Pricing (`pricing.html`)
- Placeholder banner: "Pricing coming soon — contact us to inquire"
- Email link and Book Now button

### Location (`location.html`)
- Address block with landmarks (Dollarama, Sherway Gardens, IKEA, etc.)
- Google Maps `<iframe>` embed for 170 North Queen St., Etobicoke
- Free Parking & Easy Access section
- Transit-Friendly section
- Serving communities list

### FAQ (`faq.html`)
- 12 accordion Q&As (click to expand/collapse via `main.js`)
- Questions from BRIEF, with brow lamination references removed

### Aftercare — Waxing (`aftercare-waxing.html`)
- What to Expect · First 24 Hours · How to Care · 48 Hours After · Ingrown Prevention · Next Appointment

### Aftercare — Lash (`aftercare-lash.html`)
- First 24 Hours · After 24 Hours · How Long It Lasts · Next Appointment
- No brow lamination cross-references

### Policies (`policies.html`)
- Late Policy · Late Cancellations & No Shows · Cancellations & Rescheduling · Our Commitment
- Styled to mirror the client policies poster (gold icons, cream background, rose-blush accents)

---

## 8. SEO Strategy

- Each page has a unique `<title>` and `<meta description>` targeting local keywords
- Consistent location mentions: "170 North Queen St.", "Etobicoke", "Sherway Gardens"
- Semantic HTML throughout (`<main>`, `<section>`, `<article>`, `<h1>`–`<h3>`)
- `lang="en"` on `<html>`, correct heading hierarchy per page

---

## 9. Agents (Implementation Phase)

The following OMC agents will be used during implementation:

| Agent | Role |
|---|---|
| `planner` | Implementation plan |
| `designer` | Visual implementation, CSS |
| `info-architect` | Page content structure |
| `architect` | JS component injection pattern |
| `executor` | File creation and content placement |
| `verifier` | Cross-page consistency checks |
| `code-reviewer` | HTML/JS correctness |
| `style-reviewer` | CSS quality and brand fidelity |
| `quality-reviewer` | Overall site quality |
| `security-reviewer` | No inline scripts, safe embeds |
| `perf-reviewer` | Image sizes, font loading, no render blocking |
