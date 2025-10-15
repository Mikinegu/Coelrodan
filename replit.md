# Coelrodan Import & Export PLC Landing Page

## Overview

A professional, modern landing page for Coelrodan Import and Export PLC - a family-owned Ethiopian business established in 2023. The company specializes in two core business areas:
1. **Premium Ethiopian Coffee Exports** - Specialty and commercial grade Arabica coffee beans sourced directly from farmers
2. **Quality Apparel Imports** - High-quality, fashionable, and affordable clothing for the Ethiopian market

The landing page showcases the company's commitment to quality, integrity, and sustainable trade practices, with a strong emphasis on Ethiopian heritage and direct farmer partnerships.

## Recent Changes (October 2025)

### Landing Page Implementation
- Built comprehensive single-page application with 7 distinct sections
- Implemented hero section with Ethiopian coffee farm background image
- Created dual business showcase highlighting both apparel imports and coffee exports
- Added Ethiopian Coffee Excellence section with three key highlights
- Designed Values & Mission section with four pillars (Quality, Integrity, Sustainability, Partnership)
- Implemented Contact section with managing director details and mailto functionality
- Fixed dark mode compatibility by replacing arbitrary colors with semantic tokens
- Added smooth scrolling navigation throughout the page
- Comprehensive e2e testing completed and validated

### Design System
- Navy blue (#1a3a52 / HSL 220 45% 25%) as primary brand color
- Warm earth tones (HSL 30 60% 45%) for coffee-related sections
- Chart colors used for dark mode compatibility
- Inter font for headings and body text
- Merriweather serif for accent typography
- Responsive grid system with mobile-first approach

## User Preferences

- Preferred communication style: Simple, everyday language
- Target audience: B2B partners, international coffee buyers, apparel suppliers
- Brand values: Quality, Heritage, Sustainability, Partnership

## Project Architecture

### Frontend Stack
- **React 18** with TypeScript for type-safe development
- **Vite** as build tool with hot module replacement
- **Wouter** for lightweight client-side routing
- **shadcn/ui** component library built on Radix UI
- **TailwindCSS** for utility-first styling
- **Lucide React** for iconography
- **Framer Motion** available for animations (minimal use per design guidelines)

### Landing Page Sections

1. **Hero Section**
   - Full-width background image of Ethiopian coffee farm
   - Company logo prominently displayed
   - Main tagline: "Quality. Heritage. Sustainability."
   - Two CTAs: "Explore Our Coffee" and "Contact Us"
   - Animated scroll indicator

2. **About Section**
   - Company introduction and history
   - Family-owned business established 2023
   - Location: Addis Ababa, Ethiopia
   - Mission statement

3. **Business Areas (Services)**
   - Quality Apparel Imports card
   - Premium Coffee Exports card
   - Equal visual weight to both business lines

4. **Ethiopian Coffee Excellence**
   - Three highlights: Specialty Grades, Direct Farmer Sourcing, Rich Heritage
   - Brown/coffee colored background with beans texture
   - Premium positioning for international markets

5. **Values & Mission**
   - Four core values with icons:
     - Quality: Excellence in every product
     - Integrity: Transparent and ethical practices
     - Sustainability: Ethical supply chain practices
     - Partnership: Long-lasting business relationships

6. **Contact Section**
   - Managing Director: Eyob Dadi Gawassa
   - Phone: +251 911 237 167
   - Email: zelelacoffee@gmail.com
   - Location: Addis Ababa, Ethiopia
   - Partnership opportunities message
   - Mailto integration for direct email contact

7. **Footer**
   - Company name and tagline
   - Copyright notice
   - Professional navy blue background

### Key Features
- **Smooth Scrolling**: All CTAs use smooth scroll behavior to relevant sections
- **Responsive Design**: Mobile-first approach, fully responsive across all devices
- **Dark Mode Ready**: Semantic color tokens ensure compatibility (toggle not implemented)
- **SEO Optimized**: Comprehensive meta tags for search engines and social media
- **Accessibility**: Proper semantic HTML, ARIA labels, and keyboard navigation
- **Performance**: Optimized images, lazy loading, and efficient component rendering

### Color System

**Light Mode:**
- Primary: Navy Blue (220 45% 25%)
- Foreground: Charcoal Gray (220 10% 30%)
- Background: White (0 0% 100%)
- Card: Soft Cream (40 40% 98%)
- Accent: Warm Beige (40 18% 88%)
- Chart-2: Warm Earth (30 60% 42%) - Coffee accents
- Chart-3: Deep Brown (25 35% 30%) - Coffee section background
- Chart-4: Fresh Green (140 45% 38%) - Sustainability icon

**Dark Mode:**
- All colors automatically adjust via CSS custom properties
- Maintains proper contrast and readability
- Same semantic meaning preserved

### Typography
- **Headings**: Inter font, weights 600-700
- **Body**: Inter regular (400) and medium (500)
- **Accent**: Merriweather serif (400) for warmth
- **Hierarchy**: 7 size levels from text-sm to text-7xl

### External Dependencies

**UI Components:**
- Radix UI primitives for accessible components
- Lucide React icons
- shadcn/ui component library

**Styling:**
- TailwindCSS with custom configuration
- @tailwindcss/typography for rich text
- tailwindcss-animate for animations

**Build Tools:**
- Vite with React plugin
- TypeScript for type safety
- PostCSS with Autoprefixer

**Asset Management:**
- Company logo: `/attached_assets/logoo_1760519255656.jpg`
- Hero image: `/attached_assets/stock_images/ethiopian_coffee_far_3d0fe15b.jpg`
- Coffee beans texture: `/attached_assets/stock_images/premium_arabica_coff_e2c3a97b.jpg`
- Assets imported via `@assets` alias

### Contact Information

**Company Details:**
- Name: Coelrodan Import and Export PLC
- Established: 2023
- Type: Family-owned business
- Location: Addis Ababa, Ethiopia

**Managing Director:**
- Name: Eyob Dadi Gawassa
- Phone: +251 911 237 167
- Email: zelelacoffee@gmail.com

**Business Focus:**
1. Importing quality apparel to Ethiopian market
2. Exporting premium Ethiopian Arabica coffee (specialty and commercial grades)
3. Direct farmer partnerships across Ethiopian regions
4. Ethical and sustainable trade practices

### Development Workflow

**Running the Application:**
```bash
npm run dev
```
- Starts Express server on port 5000
- Vite dev server with HMR enabled
- Access at http://localhost:5000

**Project Structure:**
```
/client
  /src
    /pages
      home.tsx          # Main landing page component
    /components/ui      # shadcn components
    App.tsx             # Router configuration
    index.css           # Global styles & design tokens
  index.html            # SEO meta tags

/attached_assets        # Static assets
  logoo_1760519255656.jpg
  /stock_images         # Hero and texture images

/server
  index.ts              # Express server
  routes.ts             # API routes (minimal for static site)
```

### Testing

**E2E Testing Completed:**
- All 35 test scenarios passed
- Verified logo, hero, and content display
- Confirmed smooth scrolling functionality
- Validated all interactive elements (buttons, links)
- Tested responsive behavior on mobile (375x667)
- Confirmed contact information accuracy
- Verified footer content and copyright

### SEO Configuration

**Meta Tags:**
- Title: "Coelrodan Import & Export PLC - Premium Ethiopian Coffee & Quality Apparel"
- Description: "Addis Ababa's trusted source for premium Ethiopian Arabica coffee exports and quality apparel imports. Family-owned business committed to sustainable trade since 2023."
- Open Graph tags for social media sharing
- Proper semantic HTML structure

### Future Enhancements

**Potential Next Steps:**
- Contact form with backend email integration
- Product gallery for coffee varieties and apparel items
- Testimonials section from partners and clients
- Multi-language support (English and Amharic)
- Blog or news section for company updates
- Partnership inquiry form with lead tracking
- Integration with CRM system

### Deployment

**Production Readiness:**
- ✅ All MVP features implemented and tested
- ✅ Visual design follows brand guidelines
- ✅ Dark mode compatibility ensured
- ✅ Responsive across all devices
- ✅ SEO optimized with proper meta tags
- ✅ E2E tests passing
- ✅ Production build verified
- ✅ Ready for publishing on Replit

**To Deploy:**
Use Replit's built-in publishing feature to make the landing page live with a custom domain or `.replit.app` URL.
