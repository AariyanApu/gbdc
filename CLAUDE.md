# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is GBDC (Give Blood, Save Life), a Next.js web application for a blood donation organization. It's a PWA (Progressive Web App) built with TypeScript, MongoDB/Prisma, and NextAuth for authentication.

## Development Commands

```bash
# Development server
pnpm dev  # or npm run dev

# Database operations
prisma generate    # Generate Prisma client
prisma db push     # Push schema changes to database

# Build and deployment
pnpm build         # Build application (includes prisma generate)
pnpm start         # Start production server
pnpm lint          # Run ESLint
```

## Architecture

### Database Layer
- **MongoDB** with **Prisma ORM** for data persistence
- Key models: Post, Event, Activity, Achievement, Notice, Donor, User (with NextAuth integration)
- Database generation happens automatically on `postinstall` and `build`

### Authentication
- **NextAuth.js** with custom providers configured in `src/app/api/auth/[...nextauth]/`
- Admin authentication system with `isAdmin` user field
- Session management through `AuthProvider` wrapper

### Frontend Architecture
- **Next.js 14** with App Router (not Pages Router)
- **Tailwind CSS** with **DaisyUI** components using custom theme (`mytheme`)
- **SWR** for client-side data fetching
- **Framer Motion** for animations
- **PWA** enabled via next-pwa

### Key Directories Structure
```
src/
├── app/                    # App Router pages and API routes
│   ├── api/               # REST API endpoints
│   └── [pages]/           # File-based routing
├── components/            # Reusable React components
│   └── dashboard/         # Admin dashboard components  
├── sections/              # Page sections (About, Footer, etc.)
├── hooks/                 # Custom React hooks and data fetching
├── libs/                  # Utility functions and configs
└── types/                 # TypeScript type definitions
```

### Data Fetching Patterns
- `getData()`: Default fetch with caching
- `getDataNoStore()`: Fetch without cache for production API
- `getDataNoStoreLocal()`: Local development API calls
- Production API base: `https://www.gbdcbd.org/api/`
- Local API base: `http://localhost:3000/api/`

### Content Management
- Rich text editing with **TinyMCE**
- Image handling via **Next Cloudinary**
- Form validation using **Formik** and **Yup**
- Toast notifications with **react-hot-toast**

### Styling System
- Custom DaisyUI theme with blood donation color scheme (primary: #780606)
- Responsive design patterns throughout
- Custom Tailwind animations for enhanced UX

## Important Notes

- Always run database operations through Prisma CLI
- Use `pnpm` as the package manager (pnpm-workspace.yaml configured)
- Component patterns follow the existing structure in `/components`
- API routes use Next.js App Router convention in `/app/api`
- Environment-specific data fetching functions available in `hooks/fetchData.ts`