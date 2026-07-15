# The Wax Box by MC — Implementation Plan

**Date:** 2026-07-15  
**Status:** Ready for execution  
**Architecture:** Static HTML/CSS/JS (no build tools, no frameworks)

---

## Project Summary

Build a 9-page static website for The Wax Box by MC using pure HTML, CSS, and JavaScript. The site uses JS-injected navigation and footer components (Approach B) to maintain consistency across pages without a build system.

**Key Constraints:**
- No brow lamination anywhere (removed from all content)
- Esthetician name: Mayela
- Pure static site (no Node.js, no build process, no frameworks)
- Component injection via vanilla JS
- All content from BRIEF.md with Nicole's SEO framework
- Visual design matches provided brand graphics

---

## Phase 1: Foundation & Architecture Setup

### Task 1.1: Project Structure & Base Files
**Agent:** architect  
**Description:** Create the core directory structure and base HTML template  
**Deliverables:**
- Directory structure: `css/`, `js/`, `images/` (already exists)
- Base HTML template with common structure (doctype, meta tags, charset, viewport)
- CSS custom properties scaffold in `css/base.css`
- Empty shell files for all 9 HTML pages

**Acceptance Criteria:**
- All directories exist and are properly organized
- Base template includes semantic HTML5 structure
- All 9 HTML files created with proper `<head>` sections (unique titles, meta descriptions)
- CSS custom properties match design spec color palette

**Dependencies:** None

---

### Task 1.2: CSS Design System Implementation
**Agent:** designer  
**Description:** Implement the visual design system in CSS  
**Deliverables:**
- `css/base.css` — CSS reset, custom properties (colors, typography), base typography styles
- `css/layout.css` — Grid system, nav layout, footer layout, page wrapper
- `css/components.css` — Button styles, card styles, accordion styles, section blocks

**Acceptance Criteria:**
- All design tokens from spec are defined as CSS custom properties
- Typography uses Google Fonts: Playfair Display (headings), Great Vibes (script), Lato (body)
- Button styles match spec (primary: gold-light bg, secondary: warm-white bg with gold border)
- Responsive breakpoints defined (mobile: <768px, tablet: 768px-1024px, desktop: >1024px)
- Visual fidelity matches logo.png and brand graphics

**Dependencies:** Task 1.1

---

### Task 1.3: Component Injection System
**Agent:** architect  
**Description:** Build the navigation and footer injection system  
**Deliverables:**
- `js/components.js` — Nav HTML string, footer HTML string, injection logic
- Navigation with logo, links, dropdown for Aftercare, "Book Now" button
- Footer with three columns (Contact, Quick Links, Social) and copyright bar
- Active page detection and styling

**Acceptance Criteria:**
- Components inject into `<div id="nav-placeholder">` and `<div id="footer-placeholder">`
- Active page link has gold underline styling
- Aftercare dropdown contains two links (waxing, lash)
- All links point to correct pages
- Mobile-ready structure (responsive toggle handled in Task 1.4)

**Dependencies:** Task 1.2

---

### Task 1.4: Interactive Features
**Agent:** executor  
**Description:** Implement mobile menu and FAQ accordion  
**Deliverables:**
- `js/main.js` — Mobile menu toggle, FAQ accordion expand/collapse
- Hamburger icon behavior (show/hide nav links)
- Aftercare dropdown expand on mobile
- FAQ accordion click handlers

**Acceptance Criteria:**
- Mobile menu toggles nav links on hamburger click
- Only one FAQ answer visible at a time (accordion behavior)
- Smooth transitions for all interactive elements
- No JavaScript errors in console

**Dependencies:** Task 1.3

---

## Phase 2: Content Population & Page Development

### Task 2.1: Homepage (index.html)
**Agent:** executor  
**Description:** Build the homepage with hero, services snapshot, and CTAs  
**Deliverables:**
- Hero section with logo, Mayela's welcome copy, "Book Now" button
- Services snapshot (3 cards: Body & Facial Waxing, Brow Services, Lash Tinting)
- Why Choose Us section (5 points from spec)
- Gold CTA banner at bottom

**Acceptance Criteria:**
- Content sourced from BRIEF.md section "🧡 HOME PAGE"
- No mention of brow lamination (removed from Nicole's draft)
- Esthetician name is Mayela throughout
- Hero uses Great Vibes font for script accent
- All "Book Now" buttons link to Fresha URL
- SEO: unique `<title>` and `<meta description>` with local keywords

**Dependencies:** Task 1.4

---

### Task 2.2: About Page (about.html)
**Agent:** executor  
**Description:** Build the About page with Mayela's bio and philosophy  
**Deliverables:**
- Headline: "Meet Mayela — Your Esthetician in Etobicoke"
- Bio sections: My Philosophy, My Experience, My Studio, Why I Love What I Do
- Content from BRIEF.md "🌿 ABOUT ME" with `[Her Name]` replaced by Mayela

**Acceptance Criteria:**
- Content accurately reflects 23+ years of experience
- No brow lamination references
- Warm, personal tone maintained
- Studio location mentioned (170 North Queen St., Etobicoke)
- SEO: optimized title and meta description

**Dependencies:** Task 1.4

---

### Task 2.3: Services Page (services.html)
**Agent:** executor  
**Description:** Build the Services page with all service categories  
**Deliverables:**
- Intro paragraph
- Body Waxing section (9 services listed)
- Facial Waxing section (4 services listed)
- Brow Services section (Eyebrow Tinting, Eyebrow Shaping only — NO brow lamination)
- Lash Services section (Eyelash Tinting)
- "Book Now" CTA at bottom

**Acceptance Criteria:**
- All services from BRIEF.md "✨ SERVICES PAGE" included
- Brow lamination completely removed
- Service cards or list items styled consistently
- Clear visual hierarchy (categories → services)
- SEO: optimized for "waxing Etobicoke", "brow services", etc.

**Dependencies:** Task 1.4

---

### Task 2.4: Pricing Page (pricing.html)
**Agent:** executor  
**Description:** Create placeholder pricing page  
**Deliverables:**
- Headline: "Pricing"
- Placeholder banner: "Pricing coming soon — contact us to inquire"
- Email link (the.wax.box@outlook.com)
- "Book Now" button linking to Fresha

**Acceptance Criteria:**
- Clean, professional placeholder design
- Clear call-to-action for booking or inquiry
- Maintains visual consistency with other pages
- SEO: basic title and description

**Dependencies:** Task 1.4

---

### Task 2.5: Location Page (location.html)
**Agent:** executor  
**Description:** Build the Location page with map and area details  
**Deliverables:**
- Address block with landmarks (Dollarama, Sherway Gardens, IKEA, etc.)
- Google Maps iframe embed (170 North Queen St., Etobicoke, ON M9C 1B1)
- Free Parking & Easy Access section
- Transit-Friendly section
- Serving communities list (Etobicoke, Alderwood, Long Branch, Mimico, Mississauga, etc.)

**Acceptance Criteria:**
- Google Maps embed works without API key (static iframe)
- All landmark references from BRIEF.md included
- Content emphasizes convenience and accessibility
- SEO: heavy location keyword density

**Dependencies:** Task 1.4

---

### Task 2.6: FAQ Page (faq.html)
**Agent:** executor  
**Description:** Build the FAQ page with accordion-style Q&A  
**Deliverables:**
- 12 FAQ items from BRIEF.md "❓ FAQ PAGE"
- Accordion structure (click to expand/collapse)
- All brow lamination references removed from answers

**Acceptance Criteria:**
- Questions cover: waxing pain, duration, prep, brow/lash services, booking, location
- Accordion behavior works (only one answer open at a time)
- Content is informative and builds trust
- SEO: answers written in full sentences for featured snippet potential

**Dependencies:** Task 1.4

---

### Task 2.7: Aftercare Pages
**Agent:** executor  
**Description:** Build two aftercare pages (waxing and lash)  
**Deliverables:**
- `aftercare-waxing.html` — Waxing aftercare (What to Expect, First 24 Hours, How to Care, 48 Hours After, Ingrown Prevention, Next Appointment)
- `aftercare-lash.html` — Lash tinting aftercare (First 24 Hours, After 24 Hours, How Long It Lasts, Next Appointment)
- Content from BRIEF.md aftercare sections
- NO brow lamination aftercare page (removed per spec)
- NO cross-references to brow lamination in either page

**Acceptance Criteria:**
- All instructions clear and actionable
- Visual design uses icons or styled lists
- Content helps clients maintain results
- SEO: targets "waxing aftercare", "lash tinting aftercare"

**Dependencies:** Task 1.4

---

### Task 2.8: Policies Page (policies.html)
**Agent:** executor  
**Description:** Build the Policies page styled like the client policies poster  
**Deliverables:**
- Late Policy
- Late Cancellations & No Shows
- Cancellations & Rescheduling
- Our Commitment
- Styling: gold icons, cream background, rose-blush accents (matching `client policies.png`)

**Acceptance Criteria:**
- Policies are clear, professional, and firm but friendly
- Visual design mirrors the brand poster
- Content builds trust and sets expectations
- SEO: basic optimization

**Dependencies:** Task 1.4

---

## Phase 3: Quality Assurance & Refinement

### Task 3.1: Cross-Page Consistency Review
**Agent:** verifier  
**Description:** Verify consistency across all 9 pages  
**Deliverables:**
- Checklist report: nav injection, footer injection, active link styling, button links, color usage
- Verification that "Mayela" is used consistently (not `[Her Name]`)
- Verification that brow lamination is absent from all pages
- Verification that all "Book Now" buttons link to Fresha URL

**Acceptance Criteria:**
- All pages use the same nav and footer (via components.js)
- Active page styling works on all pages
- No placeholder text (`[Business Name]`, `[Her Name]`) remains
- No brow lamination references found
- All CTAs link correctly

**Dependencies:** Task 2.8

---

### Task 3.2: Code Quality Review
**Agent:** code-reviewer  
**Description:** Review HTML, CSS, and JS for correctness and best practices  
**Deliverables:**
- HTML validation report (semantic structure, accessibility, heading hierarchy)
- CSS review (no unused rules, proper cascading, mobile-first approach)
- JS review (no errors, proper event handling, no memory leaks)

**Acceptance Criteria:**
- All HTML passes W3C validation (or known issues documented)
- CSS is organized and maintainable
- JavaScript is clean, with no console errors
- Code comments added where helpful

**Dependencies:** Task 3.1

---

### Task 3.3: Style & Visual Fidelity Review
**Agent:** style-reviewer  
**Description:** Verify visual design matches brand graphics and spec  
**Deliverables:**
- Visual comparison against logo.png and brand graphics
- Color palette verification (all colors match spec)
- Typography verification (fonts load correctly, hierarchy is clear)
- Button styling verification (primary vs. secondary)

**Acceptance Criteria:**
- Site visually matches the brand (warm, elegant, professional)
- Colors extracted from logo are used correctly
- Typography is readable and on-brand
- Buttons are visually distinct and accessible

**Dependencies:** Task 3.2

---

### Task 3.4: Security Review
**Agent:** security-reviewer  
**Description:** Ensure the site is secure and safe  
**Deliverables:**
- No inline scripts (all JS in external files)
- Google Maps embed is safe (no API key leakage)
- External links (Fresha, Instagram) open safely
- No user input fields (static site, no forms)

**Acceptance Criteria:**
- No inline event handlers (all JS in external files)
- External links use appropriate `rel` attributes
- HTTPS recommended for deployment
- No security vulnerabilities found

**Dependencies:** Task 3.3

---

### Task 3.5: Performance Review
**Agent:** perf-reviewer  
**Description:** Optimize for fast load times  
**Deliverables:**
- Image optimization report (file sizes, formats, compression)
- Font loading strategy (Google Fonts with `display=swap`)
- CSS/JS minification recommendations (optional for static site)
- No render-blocking resources

**Acceptance Criteria:**
- Images are optimized (existing files: logo.png, client policies.png, etc. should be under 500KB if possible)
- Fonts load without blocking page render
- Page load time under 3 seconds on 3G
- Lighthouse score 90+ for Performance (if tested)

**Dependencies:** Task 3.4

---

### Task 3.6: Quality & Completeness Review
**Agent:** quality-reviewer  
**Description:** Final quality check across all dimensions  
**Deliverables:**
- Content completeness report (all 9 pages have full content)
- SEO checklist (unique titles, meta descriptions, semantic HTML)
- Accessibility review (WCAG 2.1 Level AA basics: color contrast, alt text, keyboard navigation)
- Mobile responsiveness check (all pages work on mobile, tablet, desktop)

**Acceptance Criteria:**
- All pages have unique, descriptive titles and meta descriptions
- Color contrast meets WCAG standards (gold on cream, chocolate on warm-white)
- All images have descriptive alt text
- Site is fully responsive (mobile menu works, layouts adapt)
- No broken links or missing assets

**Dependencies:** Task 3.5

---

## Phase 4: Final Verification & Handoff

### Task 4.1: End-to-End Verification
**Agent:** verifier  
**Description:** Perform final end-to-end verification of the entire site  
**Deliverables:**
- Test all navigation links (9 pages + dropdown)
- Test all "Book Now" buttons (should link to Fresha)
- Test FAQ accordion behavior
- Test mobile menu toggle
- Verify Google Maps embed displays correctly

**Acceptance Criteria:**
- All navigation works (no 404s)
- All interactive features work (accordion, mobile menu)
- All external links open correctly
- Google Maps shows correct location
- Site ready for deployment

**Dependencies:** Task 3.6

---

### Task 4.2: Deployment Preparation
**Agent:** executor  
**Description:** Prepare the site for deployment to a static host  
**Deliverables:**
- README.md with deployment instructions (Netlify, GitHub Pages, or shared hosting)
- Verification that all file paths are relative (no absolute paths)
- Optional: .gitignore (if deploying via Git)
- Optional: robots.txt and sitemap.xml for SEO

**Acceptance Criteria:**
- All file paths are relative (`./css/base.css`, `./js/main.js`, etc.)
- Site can be deployed by dragging folder to Netlify or similar
- README includes clear deployment steps
- Optional SEO files created

**Dependencies:** Task 4.1

---

## Task Assignment Summary

| Phase | Task | Agent | Type |
|---|---|---|---|
| 1 | 1.1 Project Structure | architect | Setup |
| 1 | 1.2 CSS Design System | designer | Visual |
| 1 | 1.3 Component Injection | architect | Technical |
| 1 | 1.4 Interactive Features | executor | Technical |
| 2 | 2.1 Homepage | executor | Content |
| 2 | 2.2 About Page | executor | Content |
| 2 | 2.3 Services Page | executor | Content |
| 2 | 2.4 Pricing Page | executor | Content |
| 2 | 2.5 Location Page | executor | Content |
| 2 | 2.6 FAQ Page | executor | Content |
| 2 | 2.7 Aftercare Pages | executor | Content |
| 2 | 2.8 Policies Page | executor | Content |
| 3 | 3.1 Consistency Review | verifier | QA |
| 3 | 3.2 Code Review | code-reviewer | QA |
| 3 | 3.3 Style Review | style-reviewer | QA |
| 3 | 3.4 Security Review | security-reviewer | QA |
| 3 | 3.5 Performance Review | perf-reviewer | QA |
| 3 | 3.6 Quality Review | quality-reviewer | QA |
| 4 | 4.1 End-to-End Verification | verifier | Final Check |
| 4 | 4.2 Deployment Prep | executor | Final Prep |

---

## Critical Path

1. **Foundation (Phase 1):** Sequential execution (1.1 → 1.2 → 1.3 → 1.4)
2. **Content (Phase 2):** Parallel execution possible for all page tasks (2.1-2.8) after Phase 1 complete
3. **QA (Phase 3):** Sequential execution recommended (3.1 → 3.2 → 3.3 → 3.4 → 3.5 → 3.6)
4. **Finalization (Phase 4):** Sequential (4.1 → 4.2)

**Estimated Timeline:**
- Phase 1: 2-3 hours
- Phase 2: 4-6 hours (if parallelized)
- Phase 3: 2-3 hours
- Phase 4: 1 hour

**Total:** 9-13 hours of agent work

---

## Success Criteria

- ✅ All 9 pages functional and styled
- ✅ Navigation and footer consistent via JS injection
- ✅ No brow lamination references anywhere
- ✅ Esthetician name is "Mayela" throughout
- ✅ Visual design matches brand graphics (logo.png, client policies.png)
- ✅ All "Book Now" buttons link to Fresha
- ✅ Google Maps embed works
- ✅ FAQ accordion works
- ✅ Mobile menu works
- ✅ Site is responsive (mobile, tablet, desktop)
- ✅ SEO optimized (unique titles, meta descriptions, semantic HTML)
- ✅ Accessible (color contrast, alt text, keyboard navigation)
- ✅ Performant (fast load, optimized images, no render blocking)
- ✅ Secure (no inline scripts, safe external links)
- ✅ Ready for deployment to static host

---

## Open Questions

**None.** All requirements are clear from the design spec and BRIEF. The plan is ready for execution.

---

## Next Steps

1. Review this plan with the user
2. Get explicit approval to proceed
3. Begin Phase 1 (Foundation & Architecture Setup) with the architect agent
4. Execute phases sequentially with appropriate parallelization in Phase 2

---

**Plan Status:** ✅ Ready for approval  
**Date Created:** 2026-07-15  
**Author:** Planner Agent
