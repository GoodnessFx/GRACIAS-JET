# Gracias Jet Sales — Landing Page Build Prompt

## Who This Is For

You are building the official landing page for Gracias Jet Sales, a global private jet sales and acquisition firm. They connect buyers and sellers of private aircraft worldwide. Their positioning is modern luxury, precision, and personalized service — not old-money stiffness. Their Instagram handle is @graciasjetsales. Their contact number is +234 7081910000. The website domain is graciasjetsales.com.

This is a landing page only. There is no backend, no authentication, no listing database. Features beyond what is described here are not built — they are teased as Coming Soon where relevant. The goal of this page is to establish authority in a competitive global market and generate inbound inquiries. Every section exists to make a high-net-worth prospect pick up the phone or fill out a contact form.

---

## Visual Identity

The palette is dark, refined, and aerospace-influenced. These are the only colors used across the entire page.

Background: `#080808` — a warm near-black, not cold gray.
Surface: `#111111` — cards, nav backgrounds, form fields.
Surface raised: `#1A1A1A` — hover states, elevated panels.
Border: `#242424` — dividers, card borders, input outlines.
Gold primary: `#C9A84C` — the Gracias accent. Used on CTA buttons, section accents, hover underlines, icon fills, and number callouts. Never overused.
Gold muted: `#8A6E30` — secondary gold for decorative elements.
White: `#F5F4F0` — all body text, headings. Slightly warm, not pure white.
Muted: `#7A7A72` — captions, labels, secondary text.
Red alert: `#C0392B` — used only for form validation errors.

Typography uses two typefaces loaded from Google Fonts.

Display and headings use Cormorant Garamond at weights 400 and 600. This is a high-serif face used by luxury fashion houses. It communicates heritage and precision without feeling corporate. All hero headings, section headlines, and testimonial quotes use this face.

Body copy, labels, navigation links, button text, and all UI copy use Inter at weights 400, 500, and 600. Inter at 14–16px reads cleanly at every screen size and keeps the utility layer of the UI grounded and modern.

There are no other typefaces. There are no system fonts in visible UI. There are no emoji anywhere on the page.

All icons are SVG path icons, sourced from the Heroicons or Lucide icon sets, rendered inline. No icon fonts. No PNG icons. No emoji substitutes for icons.

---

## Layout Philosophy

The page is a single scrolling document. Navigation is sticky. Each section occupies the full viewport width. Section backgrounds alternate between `#080808` and `#111111` to create rhythm without borders.

No section has a visible outer border or card wrapping around it. The page breathes. Padding inside sections is generous — 100px top and bottom on desktop, 64px on mobile.

The maximum content width for text-heavy sections is 1100px, centered. Full-bleed sections (hero, image sections, video backgrounds) stretch edge to edge.

Horizontal rules between sections are a single 1px line at `#242424`, never decorative flourishes.

There is no animation library. Motion is handled with pure CSS: `transition`, `transform`, `opacity`. No GSAP. No Framer Motion. No scroll-triggered fireworks. Motion is restrained — elements fade in on scroll using an IntersectionObserver with a simple `opacity 0.6s ease` and `translateY(16px) → translateY(0)` entrance. That is the entire motion system.

---

## Full Page Sections, In Order

---

### Section 1 — Navigation

The navigation bar sits at the top of the viewport and becomes sticky immediately on scroll. Height 68px desktop, 56px mobile. Background `#080808` with a 1px bottom border `#242424` that appears only after the user scrolls past 40px (add via JavaScript classList toggle).

Left side: the Gracias Jet Sales wordmark. Render it as two lines of text stacked:

```
GRACIAS
JET SALES
```

"GRACIAS" in Cormorant Garamond 600, 18px, letter-spacing 0.2em, color `#F5F4F0`. "JET SALES" in Inter 400, 10px, letter-spacing 0.4em, color `#C9A84C`. This two-line treatment is the logo until a proper SVG wordmark is provided.

Right side navigation links in Inter 500, 13px, letter-spacing 0.08em, color `#7A7A72`. On hover, color transitions to `#F5F4F0` with a 200ms ease. Links: About, Services, Aircraft, Testimonials, Contact.

At the far right after the links: a CTA button "Enquire Now" — gold border `1px solid #C9A84C`, gold text `#C9A84C`, transparent background, Inter 600 12px, letter-spacing 0.1em, uppercase, 10px 24px padding. On hover: background fills to `#C9A84C`, text becomes `#080808`. Transition 200ms.

Mobile: the nav links collapse into a hamburger icon (three horizontal lines, SVG). Clicking opens a full-height overlay drawer from the right. The drawer background is `#111111`. Links stack vertically, 32px apart, Cormorant Garamond 400 20px. The Enquire Now button appears at the bottom of the drawer.

---

### Section 2 — Hero

Full viewport height, 100vh. Background `#080808`. The hero does not use a carousel or auto-playing slides. It is a single, still composition.

Background treatment: A high-quality Unsplash photograph of a private jet on a runway at dusk or dawn. Source it from:

```
https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1800&q=90&auto=format&fit=crop
```

This image sits as an absolute-positioned background with `object-fit: cover`. Over the image, apply a CSS gradient overlay:

```css
background: linear-gradient(
  to right,
  rgba(8,8,8,0.92) 0%,
  rgba(8,8,8,0.70) 50%,
  rgba(8,8,8,0.30) 100%
);
```

This keeps the left side readable for text while letting the aircraft photograph show through on the right.

Content is left-aligned, vertically centered, maximum 580px wide.

Above the main headline: an eyebrow label in Inter 500 11px, letter-spacing 0.3em, uppercase, color `#C9A84C`. Text: "GLOBAL PRIVATE JET SALES AND ACQUISITION"

Main headline: Cormorant Garamond 600, 72px desktop / 44px mobile, color `#F5F4F0`, line-height 1.1, letter-spacing -0.01em. Text:

```
The Sky Is Not
The Limit.
It Is The Beginning.
```

Below the headline: a single sentence in Inter 400, 17px, color `#7A7A72`, line-height 1.7. Text: "Gracias Jet Sales connects discerning buyers and sellers to the world's finest private aircraft — with precision, discretion, and a standard of service that matches the aircraft we represent."

Below the body: two buttons side by side with 16px gap.

Primary button: background `#C9A84C`, text `#080808`, Inter 700 13px uppercase letter-spacing 0.1em, padding 16px 36px, border-radius 2px. Text: "Start Your Acquisition". On hover: background `#B8973E`, 200ms.

Secondary button: transparent background, `1px solid #F5F4F0` border, text `#F5F4F0`, Inter 500 13px uppercase letter-spacing 0.1em, same sizing. Text: "List Your Aircraft". On hover: border-color `#C9A84C`, text `#C9A84C`.

Both buttons scroll to the Contact section on click using `scrollIntoView({ behavior: 'smooth' })`.

Below the two buttons: a thin `1px solid #242424` horizontal line, 280px wide, left-aligned. Below the line: three stat callouts in a row with 40px gap.

Each callout:
Number in Cormorant Garamond 600 36px `#C9A84C`. Label in Inter 400 12px `#7A7A72` uppercase letter-spacing 0.12em.

The three stats:
"$2B+" and "Aircraft Placed Globally"
"50+" and "Jet Models Represented"
"100%" and "Client Discretion Guaranteed"

---

### Section 3 — Marquee Trust Bar

A full-width scrolling text marquee. Background `#111111`. Height 52px. The marquee loops continuously, left to right, at a comfortable reading speed.

Marquee content, repeated twice for seamless loop:

```
GULFSTREAM G700  ·  BOMBARDIER GLOBAL 7500  ·  DASSAULT FALCON 10X  ·  CESSNA CITATION  ·  EMBRAER PRAETOR 600  ·  PILATUS PC-24  ·  HAWKER 4000  ·  AIRBUS ACJ TwoTwenty  ·
```

Text in Inter 500, 12px, letter-spacing 0.25em, uppercase, color `#C9A84C`. The separator dots are also gold. No border on top or bottom of the marquee — the background color change from `#080808` to `#111111` is the only visual break.

Implement the marquee with CSS animation `@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }` on a flex row containing the duplicated text. No JavaScript scrolling libraries.

---

### Section 4 — About

Background `#080808`.

Section label: Inter 500, 10px, letter-spacing 0.3em, uppercase, `#C9A84C`. Text: "WHO WE ARE"

Headline: Cormorant Garamond 600, 52px desktop / 36px mobile, `#F5F4F0`. Text: "A Fresh Standard in Private Aviation."

Layout is two columns on desktop, stacked on mobile. Left column (55% width) holds the text. Right column (45% width) holds a photograph.

Left column body copy in Inter 400, 16px, `#7A7A72`, line-height 1.8. Two paragraphs:

Paragraph 1: "Gracias Jet Sales is a global private jet sales and acquisition firm built on the belief that the experience of buying or selling an aircraft should be as refined as the aircraft itself. We are a modern, dynamic team — precise in our process, personal in our approach, and relentless in delivering outcomes that match your ambitions."

Paragraph 2: "We understand that no two clients are the same. Whether you are entering private aviation for the first time, expanding a fleet, or seeking a confidential sale, we design every engagement around your goals — handling every detail from initial consultation to final agreement with the same discretion and care that the transaction demands."

Below the paragraphs, a text link in Inter 600 13px, `#C9A84C`, uppercase letter-spacing 0.1em, with an inline right-arrow SVG icon. Text: "Learn More About Our Approach →" — this links to the Contact section.

Right column: Unsplash photograph of a business jet interior, the cabin. Source:
```
https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=900&q=85&auto=format&fit=crop
```
Image styled with `width: 100%`, `height: 480px`, `object-fit: cover`, `border-radius: 2px`. On desktop the image has a thin `1px solid #242424` border.

---

### Section 5 — Services

Background `#111111`.

Section label: "WHAT WE DO"
Headline: "Every Dimension of Private Jet Ownership."

Four service cards in a 2x2 grid on desktop, stacked on mobile. Each card: background `#1A1A1A`, padding 36px, border-radius 2px, `1px solid #242424` border. On hover: border-color transitions to `#C9A84C`.

Each card has: an SVG icon (24px, stroke `#C9A84C`), a title in Cormorant Garamond 600 24px `#F5F4F0`, and a body in Inter 400 15px `#7A7A72`.

Card 1 — Aircraft Acquisition:
Icon: plane-takeoff (Lucide)
Title: "Aircraft Acquisition"
Body: "We source, evaluate, and secure the right aircraft for your mission profile, travel patterns, and ownership ambitions. From light jets to ultra-long-range cabins, we navigate the global market on your behalf."

Card 2 — Aircraft Sales and Brokerage:
Icon: handshake (Lucide)
Title: "Aircraft Sales and Brokerage"
Body: "Selling a private jet demands the right buyer, the right price, and the right timing. We combine modern marketing, a curated buyer network, and proven negotiation to close transactions quickly and confidentially."

Card 3 — Acquisition Consulting:
Icon: clipboard-list (Lucide)
Title: "Acquisition Consulting"
Body: "Not sure which aircraft fits your life? We provide independent advisory — analysing aircraft categories, cost of ownership, range requirements, and resale value — so your decision is informed by data, not guesswork."

Card 4 — Post-Sale Services:
Icon: settings (Lucide)
Title: "Post-Sale Services"
Body: "The transaction is only the beginning. We coordinate delivery logistics, documentation, registration, and introduce you to our network of maintenance, management, and charter partners globally."

Below the 4-card grid, a full-width banner inside this same section. Background `#242424`, padding 32px 48px, border-radius 2px. Left: text in Inter 400 15px `#7A7A72` — "Private jet marketplace, listing search, and live valuations." Right: a Coming Soon badge — Inter 600 11px uppercase letter-spacing 0.1em, `#C9A84C` text, `1px solid #C9A84C` border, padding 6px 16px. Between them: a thin vertical `1px solid #C9A84C` divider. On mobile this stacks vertically.

---

### Section 6 — Aircraft Showcase

Background `#080808`.

Section label: "IN FOCUS"
Headline: "Aircraft We Represent."

Body in Inter 400 16px `#7A7A72`: "Our portfolio spans every category of private aviation. The full marketplace is launching soon — explore a selection of the aircraft categories we work with."

Three cards in a row on desktop, stacked on mobile. Each card is a tall image card (aspect ratio approximately 3:4) with a gradient overlay at the bottom.

Image sources and content:

Card 1:
Image: `https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=700&q=85&auto=format&fit=crop`
Category label (top-left, Inter 500 10px uppercase letter-spacing 0.2em `#C9A84C`): "ULTRA LONG RANGE"
Aircraft name (bottom, Cormorant Garamond 600 26px `#F5F4F0`): "Gulfstream G700"
Sub (Inter 400 13px `#7A7A72`): "Range 7,500 nm · 19 Passengers"

Card 2:
Image: `https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=700&q=85&auto=format&fit=crop`
Category label: "LARGE CABIN"
Aircraft name: "Bombardier Global 7500"
Sub: "Range 7,700 nm · 19 Passengers"

Card 3:
Image: `https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=700&q=85&auto=format&fit=crop`
Category label: "SUPER MIDSIZE"
Aircraft name: "Cessna Citation Longitude"
Sub: "Range 3,500 nm · 12 Passengers"

Each card: position relative. Image fills the card with object-fit cover. Gradient overlay from transparent at top to `rgba(8,8,8,0.90)` at bottom, bottom 60% of the card. Text sits inside the overlay at the card bottom, padding 24px. On hover: image scales 1.04x inside overflow hidden container.

Below the three cards, a centered Coming Soon row: Inter 400 15px `#7A7A72` text — "Full aircraft listings, search, and valuations" — with a Coming Soon badge beside it (same style as Section 5).

---

### Section 7 — Process

Background `#111111`.

Section label: "HOW IT WORKS"
Headline: "From First Conversation to Final Agreement."

Four steps in a horizontal row on desktop (scroll-snapping optional), stacked on mobile with a vertical connecting line between them.

Each step: a number in Cormorant Garamond 600 64px `#C9A84C` (opacity 0.25) positioned behind, a step title in Cormorant Garamond 600 22px `#F5F4F0`, and a body in Inter 400 14px `#7A7A72`.

Step 1 — Consultation:
"We start by listening. A private call or meeting to understand your goals, travel patterns, budget, and timeline — without pressure and without assumptions."

Step 2 — Discovery and Sourcing:
"We search the global market for aircraft that precisely match your requirements, presenting only vetted, pre-qualified options backed by our technical assessment."

Step 3 — Negotiation and Acquisition:
"We manage every aspect of the transaction — from offer to pre-purchase inspection to negotiation to final agreement — protecting your interests at every stage."

Step 4 — Delivery and Beyond:
"We coordinate delivery, documentation, and registration, and remain available as your private aviation advisors long after the keys change hands."

Between each step on desktop, a thin horizontal connector line at `#242424`. On mobile, a vertical connector at `#242424`.

---

### Section 8 — Social Proof

Background `#080808`.

Section label: "CLIENT WORDS"
Headline: "Those Who Fly With Us."

Three testimonial cards in a row on desktop, stacked on mobile. Each card: background `#111111`, `1px solid #242424` border, padding 36px, border-radius 2px.

Each card has: a large opening quotation mark in Cormorant Garamond 600 72px `#C9A84C` opacity 0.2, positioned top-left. The quote text in Cormorant Garamond 400 italic 20px `#F5F4F0` line-height 1.6. Below the quote: a thin `1px solid #242424` line. Below that: client name in Inter 600 13px `#F5F4F0` and description in Inter 400 12px `#7A7A72`.

Testimonial 1:
"Working with Gracias Jet Sales was unlike any transaction I have experienced in aviation. They found a Gulfstream G650 that matched every requirement within three weeks, and the discretion throughout was absolute."
Name: A.O., Lagos
Description: Business Executive and Fleet Owner

Testimonial 2:
"I needed to sell my Challenger 604 quickly and confidentially. Gracias handled everything — the right buyer, the right price, and zero stress from my side. That is the standard."
Name: F.A., Dubai
Description: Private Aircraft Owner

Testimonial 3:
"As a first-time buyer, I was navigating unfamiliar territory. Their team guided me through every decision with patience and expertise. I walked away with the right aircraft and the confidence to know it."
Name: M.K., London
Description: Entrepreneur and First-Time Buyer

These are plausible testimonials representative of the clients Gracias Jet Sales serves. Replace with real testimonials when available.

---

### Section 9 — Why Gracias

Background `#111111`.

Section label: "WHY US"
Headline: "The Difference That Matters."

Three columns on desktop, stacked on mobile. Each column has a thin gold top border (`3px solid #C9A84C` on the top edge only), padding 36px 24px, background `#1A1A1A`.

Column 1:
Title (Cormorant Garamond 600 22px): "Bespoke, Not Template"
Body (Inter 400 15px `#7A7A72`): "Every engagement is designed around the individual. We do not have a standard playbook because no two clients, no two aircraft, and no two transactions are the same."

Column 2:
Title: "Discretion as Standard"
Body: "Confidentiality is not a feature we offer on request. It is the operating condition of every conversation, every negotiation, and every document we handle."

Column 3:
Title: "Modern Thinking"
Body: "We bring contemporary strategy, global market intelligence, and digital reach to an industry that has operated on relationships alone for too long. That combination is our edge."

---

### Section 10 — Contact

Background `#080808`.

Section label: "GET IN TOUCH"
Headline: "Tell Us What You Need."

Sub: Inter 400 16px `#7A7A72` — "Whether you are buying, selling, or simply exploring your options, a conversation costs nothing. We respond within 24 hours."

Layout: two columns on desktop. Left column (45%) holds the contact details and Instagram link. Right column (55%) holds the enquiry form.

Left column contact block:

Title (Cormorant Garamond 600 22px `#F5F4F0`): "Reach Us Directly"

Each contact row has an inline SVG icon (20px, stroke `#C9A84C`) and the contact detail beside it in Inter 400 16px `#F5F4F0`.

Phone: +234 7081910000 (linked as `tel:+2347081910000`)
Email: hello@graciasjetsales.com (linked as `mailto:hello@graciasjetsales.com`) — use this placeholder; update when real email is confirmed
Instagram: @graciasjetsales (linked to `https://www.instagram.com/graciasjetsales`)
Website: graciasjetsales.com

Below the contact rows: Inter 400 13px `#7A7A72` — "We operate globally and maintain complete confidentiality on all enquiries."

Right column form:

All form fields: background `#111111`, border `1px solid #242424`, color `#F5F4F0`, padding 14px 16px, border-radius 2px, Inter 400 15px. On focus: border-color `#C9A84C`, outline none. Placeholder text in `#7A7A72`.

Fields in order:

Full Name — single line input, placeholder "Your Full Name"

Email Address — single line input type email, placeholder "your@email.com"

Phone Number — single line input type tel, placeholder "+1 234 567 8900"

I am looking to — select dropdown. Options: "Select one", "Buy a Private Jet", "Sell My Aircraft", "Consult on Acquisition", "Other"

Message — textarea, 5 rows, placeholder "Tell us what you are looking for. Any detail helps us serve you better."

Submit button — full width, background `#C9A84C`, text `#080808`, Inter 700 13px uppercase letter-spacing 0.1em, padding 16px, border-radius 2px. Text: "Send Enquiry". On hover: background `#B8973E`. On submit: button shows a spinner SVG and text changes to "Sending..." — then on completion shows a success state: the form hides and a success message appears in Cormorant Garamond 400 italic 22px `#F5F4F0`: "Your enquiry has been received. We will be in touch within 24 hours."

Form submission: use `fetch` to `POST` to `https://formspree.io/f/YOUR_FORM_ID` with `Content-Type: application/json` and `Accept: application/json`. Replace `YOUR_FORM_ID` with the actual Formspree endpoint when the client sets one up. Until then the form collects and displays the success state after a 1.2 second simulated delay.

---

### Section 11 — Footer

Background `#080808`. Top border `1px solid #242424`. Padding 64px 0 40px.

Three column layout on desktop, stacked on mobile.

Column 1:
The wordmark (same treatment as nav). Below it: Inter 400 13px `#7A7A72` — "Global private jet sales and acquisition. Precision. Discretion. Excellence."

Column 2 — Quick Links:
Title: Inter 600 11px uppercase letter-spacing 0.2em `#C9A84C`. Text: "NAVIGATION"
Links (Inter 400 14px `#7A7A72`, hover `#F5F4F0`): About, Services, Aircraft, Process, Testimonials, Contact

Column 3 — Contact:
Title: Same label style. Text: "CONTACT"
Phone: +234 7081910000
Email: hello@graciasjetsales.com
Instagram: @graciasjetsales

Bottom bar (below a `1px solid #242424` divider):
Left: Inter 400 12px `#7A7A72` — "© 2025 Gracias Jet Sales. All rights reserved."
Right: Inter 400 12px `#7A7A72` — "Confidentiality guaranteed on all enquiries."

---

## Competitive Edge Features

These are built into the landing page itself, not future features.

The page loads fast. Total page weight must stay under 900KB. All Unsplash images use the `w=` parameter to limit their size. Inter and Cormorant Garamond are loaded with a single Google Fonts request using `display=swap`. There is no animation library, no UI component framework, no bloat.

The mobile experience matches the desktop experience in intent. The hierarchy is identical. The CTA is always within thumb reach. The phone number is a tappable `tel:` link on mobile.

The meta tags in the `<head>` are complete:

```html
<title>Gracias Jet Sales — Global Private Jet Sales and Acquisition</title>
<meta name="description" content="Gracias Jet Sales connects discerning buyers and sellers to the world's finest private aircraft. Bespoke acquisition, sales, and consulting — globally.">
<meta property="og:title" content="Gracias Jet Sales">
<meta property="og:description" content="Global private jet sales and acquisition. Precision. Discretion. Excellence.">
<meta property="og:image" content="https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1200&q=85&auto=format&fit=crop">
<meta property="og:url" content="https://graciasjetsales.com">
<meta name="twitter:card" content="summary_large_image">
<link rel="canonical" href="https://graciasjetsales.com">
```

The favicon is a gold "G" rendered as an SVG data URI in the `<link rel="icon">` tag.

---

## What Makes This Beat the Competitors

The global private jet brokerage space — AvJet, Jetcraft, Global Jet Capital, and their Nigerian market counterparts — relies on outdated WordPress installs, stock photo heavy pages, and generic luxury language. Gracias Jet Sales wins with four things this page delivers that competitors do not.

The typography is the first thing. Cormorant Garamond at 72px carrying a three-line hero headline reads with the same authority as a Loro Piana campaign. No competitor in this space is using editorial serif typography. They are all using Montserrat and Poppins at various weights, which reads as generic fintech.

The restraint is the second thing. The gold is used four times above the fold: the eyebrow label, the three stat numbers, the primary CTA, and the marquee text. That restraint is what makes the gold feel expensive. When everything is gold, nothing is.

The messaging is the third thing. "The sky is not the limit. It is the beginning." is a positioning statement, not a tagline. It reframes the entire product category. It says Gracias Jet Sales is not selling transport — they are selling a new tier of life. Competitors say "seamless transactions" and "bespoke solutions." Gracias Jet Sales says something that sticks.

The contact architecture is the fourth thing. Two pathways to enquiry (form and direct phone), visible at all times in the nav CTA, and anchored again at the bottom of the page. There is no dead end on this page. Every section resolves into a call to action. A high-net-worth prospect who lands on this page and scrolls to the bottom will have seen five distinct prompts to make contact.

---

## Tech Stack

This is a single HTML file with a `<style>` block and a `<script>` block. No framework. No build step. No npm. The client can open the file in a browser and it works. The client can upload it to any static host — Vercel, Netlify, GitHub Pages, Namecheap File Manager — and it is live.

All icons are inline SVG paths. All fonts come from one Google Fonts `<link>` in the `<head>`. All images come from Unsplash with explicit dimensions. JavaScript handles: the sticky nav border, the mobile hamburger drawer, the smooth scroll on CTA click, the IntersectionObserver fade-in, the marquee animation fallback, and the form submission with success state.

Total JavaScript: under 80 lines. Total CSS: under 300 lines. The page renders above the fold in under 1 second on a standard Nigerian mobile connection.

---

## Sections Not Building Now — Coming Soon

Aircraft listings database, buyer/seller registration, document upload portal, valuation calculator, live chat, newsletter subscription, and blog. Each of these is either referenced with a "Coming Soon" badge where relevant or simply absent. No placeholder sections for unbuilt features — only the Coming Soon badges in Sections 5 and 6 where it adds credibility rather than suggesting incompleteness.

---

## Final Instruction

Build the entire page in one file. Name it `index.html`. Every section described above is built — no section is skipped or stubbed. The form submits correctly. The nav is sticky and functional. The mobile drawer opens and closes. The smooth scroll works on all CTA clicks. The fade-in entrance works on every section. The marquee loops without a gap. The images load from Unsplash. The page validates as clean HTML5 with no inline event handlers — all events attached via JavaScript in the `<script>` block.

This is the Gracias Jet Sales website in waiting. Build it to last.