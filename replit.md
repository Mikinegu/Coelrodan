# Coelrodan Import & Export PLC Landing Page

## Overview

Coelrodan Import and Export PLC is a B2B landing page for a family-owned Ethiopian business specializing in premium Arabica coffee exports and quality apparel imports. The application is a modern, responsive single-page website built with React, TypeScript, and TailwindCSS, designed to showcase the company's dual business offerings with an emphasis on quality, heritage, and sustainability.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, configured for React with hot module replacement (HMR)
- **Wouter** for client-side routing (lightweight alternative to React Router)
- **TanStack Query v5** for server state management and data fetching

**UI Component System**
- **shadcn/ui** component library based on Radix UI primitives
- Components follow the "New York" style variant
- Fully customized with design tokens matching brand guidelines

**Styling Approach**
- **TailwindCSS** for utility-first styling with custom configuration
- Custom color palette defined in CSS variables (HSL format) supporting both light and dark modes
- Brand colors derived from Ethiopian coffee heritage: Navy Blue (primary), Warm Earth (accents), Soft Cream (backgrounds)
- Typography using Inter (sans-serif) for headers/body and Merriweather (serif) for accent text
- Responsive design with mobile-first breakpoints

**Design System**
- Custom spacing primitives (4, 8, 12, 16, 20, 24px units)
- Maximum container width of 1280px (max-w-7xl) for full sections
- Content-focused areas limited to 896px (max-w-4xl)
- Hover and active state elevation system using CSS custom properties

### Backend Architecture

**Server Framework**
- **Express.js** running on Node.js with TypeScript
- ESM module system throughout the application
- Development mode with tsx for hot reloading
- Production build using esbuild for bundling

**API Structure**
- RESTful API endpoints prefixed with `/api`
- Request/response logging middleware for debugging
- Centralized error handling middleware
- JSON body parsing enabled

**Development Setup**
- Vite middleware integration in development mode
- Separate static file serving in production
- Custom logging system with timestamps
- Replit-specific development plugins (cartographer, dev banner, runtime error overlay)

### Data Storage

**Database Configuration**
- **Drizzle ORM** configured for PostgreSQL
- Schema-first approach with TypeScript type inference
- Database credentials managed via environment variables (`DATABASE_URL`)
- Migrations stored in `/migrations` directory

**Current Schema**
- Users table with UUID primary keys, username (unique), and password fields
- Zod validation schemas generated from Drizzle schema using drizzle-zod

**Storage Abstraction**
- `IStorage` interface defining CRUD operations
- `MemStorage` implementation for in-memory data (development/testing)
- Designed to be swappable with database-backed implementations

### External Dependencies

**UI Component Libraries**
- **Radix UI** primitives for accessible, unstyled components (dialogs, dropdowns, tooltips, etc.)
- **Lucide React** for consistent icon set
- **class-variance-authority** for variant-based component styling
- **embla-carousel-react** for carousel/slider functionality
- **cmdk** for command palette components
- **react-day-picker** for calendar/date selection
- **recharts** for data visualization

**Database & Session Management**
- **@neondatabase/serverless** for PostgreSQL connections (serverless-compatible)
- **connect-pg-simple** for PostgreSQL-backed session storage
- **drizzle-orm** and **drizzle-zod** for ORM and validation

**Form Handling**
- **react-hook-form** for form state management
- **@hookform/resolvers** for validation integration
- **zod** for runtime type validation

**Utility Libraries**
- **date-fns** for date manipulation
- **clsx** and **tailwind-merge** for conditional className handling
- **nanoid** for unique ID generation

**Build & Development Tools**
- **@vitejs/plugin-react** for React Fast Refresh
- **Replit plugins** for enhanced development experience (vite-plugin-runtime-error-modal, vite-plugin-cartographer, vite-plugin-dev-banner)
- **PostCSS** with Autoprefixer for CSS processing

**Asset Management**
- Static assets stored in `/attached_assets` directory
- Vite alias configured as `@assets` for easy imports
- Image assets for logo, hero sections, and product showcases