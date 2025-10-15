# Design Guidelines: Coelrodan Import and Export PLC Landing Page

## Design Approach
**Reference-Based Approach** - Drawing inspiration from premium e-commerce sites (Shopify premium stores, specialty coffee brands like Blue Bottle, Trade Coffee) and clean B2B corporate sites. The design balances professional credibility with warmth and heritage, reflecting Ethiopian coffee culture and sustainable trade values.

## Core Design Elements

### A. Color Palette

**Primary Colors (from logo):**
- Navy Blue: 220 45% 25% - Primary brand color, headers, CTAs
- Charcoal Gray: 220 10% 30% - Text, secondary elements

**Accent & Supporting Colors:**
- Warm Earth: 30 60% 45% - Coffee warmth, Ethiopian heritage accents
- Soft Cream: 40 40% 92% - Backgrounds, breathing room
- Deep Brown: 25 35% 25% - Coffee product highlights
- Fresh Green: 140 45% 40% - Sustainability messaging, subtle accents
- Pure White: 0 0% 100% - Clean sections, card backgrounds

**Dark Mode:** Not required for this B2B landing page

### B. Typography

**Font Stack:**
- Headings: Inter (Google Fonts) - weights 600, 700 for authority and clarity
- Body Text: Inter regular (400) and medium (500)
- Accent/Quotes: Merriweather (serif) - weight 400 for warmth in testimonials or heritage sections

**Hierarchy:**
- Hero Headline: text-5xl to text-7xl, font-bold
- Section Headers: text-3xl to text-4xl, font-semibold
- Subsections: text-xl to text-2xl, font-medium
- Body: text-base to text-lg, leading-relaxed
- Small details: text-sm

### C. Layout System

**Spacing Primitives:**
Primary units: 4, 8, 12, 16, 20, 24 (p-4, m-8, gap-12, py-16, etc.)

**Container Strategy:**
- Max width: max-w-7xl for full sections
- Content max: max-w-4xl for text-heavy areas
- Responsive padding: px-4 md:px-8 lg:px-12

**Grid System:**
- Feature cards: grid-cols-1 md:grid-cols-2 for dual business areas
- Coffee varieties/stats: grid-cols-2 md:grid-cols-4
- Single column for about/mission sections with max-w-3xl

### D. Component Library

**Navigation:**
- Sticky header with logo left, navigation links right
- Navy background with white text, subtle shadow on scroll
- Mobile: Hamburger menu with slide-out drawer

**Hero Section:**
- Full-width with large hero image (Ethiopian coffee farm or landscape)
- Centered content overlay with semi-transparent navy backdrop
- Company logo prominent (h-16 to h-20)
- Headline emphasizing "Quality. Heritage. Sustainability."
- Dual CTA buttons: Primary "Explore Our Coffee" + Secondary "Contact Us"
- Subtle scroll indicator

**Business Showcase Cards:**
- Two large cards side-by-side (stack on mobile)
- Left: Apparel Import (icon, title, description, "Learn More" link)
- Right: Coffee Export (icon, title, description, "View Products" link)
- White backgrounds with subtle shadow, hover lift effect
- Icons in warm earth tones

**Ethiopian Coffee Feature Section:**
- Rich brown or warm earth background
- Grid of 3 coffee highlights: Specialty Grade, Direct Sourcing, Ethiopian Heritage
- Each with icon, heading, and brief description
- Optional: Single large image of coffee beans or farmer

**Values Section:**
- Clean white background
- 4-column grid on desktop (2 on tablet, 1 on mobile)
- Icons for: Quality, Integrity, Sustainability, Partnership
- Minimal text, maximum impact

**Contact Section:**
- Two-column layout: Left (contact form), Right (company details)
- Navy background with white/cream text
- Managing Director info prominently displayed
- Map or location graphic optional
- Phone, email with icons
- "Addis Ababa, Ethiopia" with subtle Ethiopian flag colors accent

**Footer:**
- Navy background, cream text
- Company name, year established (2023), tagline
- Quick links, social media icons (if applicable)
- Copyright and legal info

### E. Images

**Hero Image:**
- Large, high-quality photograph of Ethiopian coffee landscape or farmer at work
- Warm, golden-hour lighting preferred
- Overlay: semi-transparent navy (opacity 60%) for text readability

**Coffee Section:**
- Close-up of Ethiopian Arabica coffee beans (rich browns, texture visible)
- Optional: Farmers in coffee fields, traditional coffee ceremony

**Apparel Section:**
- Clean product photography or lifestyle shots
- Avoid stock photos; use authentic imagery if possible

**About Section:**
- Family/team photo or Ethiopian cultural imagery (subtle)
- Professional, warm, authentic

### F. Animations

**Minimal, purposeful only:**
- Hero CTA buttons: Subtle scale on hover (scale-105)
- Section cards: Gentle lift on hover (translate-y-1, shadow increase)
- Scroll-triggered fade-ins for sections (opacity transition only)
- NO complex animations, carousels, or parallax

## Key Design Principles

1. **Professional Trust:** Navy and gray establish B2B credibility
2. **Ethiopian Heritage:** Earth tones and imagery celebrate origin
3. **Dual Identity:** Equal visual weight to apparel and coffee businesses
4. **Sustainability Story:** Green accents and farmer-focused imagery
5. **Clear CTAs:** Direct paths to contact and product information
6. **Breathing Room:** Generous whitespace (py-20 to py-32 between sections)
7. **Mobile-First:** Stack columns, reduce image sizes, maintain hierarchy

## Section Flow

1. Hero with striking image
2. Company Introduction (single column, centered)
3. Dual Business Showcase (two-column cards)
4. Ethiopian Coffee Deep Dive (dedicated section with imagery)
5. Values & Mission (four pillars)
6. Partnership Call-to-Action
7. Contact Information
8. Footer

This creates a comprehensive, 6-8 section landing page that tells Coelrodan's complete story while maintaining visual interest and professional credibility.