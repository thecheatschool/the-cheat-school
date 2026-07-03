# The Cheat School

## 📁 Project Structure

```
the-cheat-school/
├── src/
│   ├── components/
│   │   └── global/
│   │       ├── AiChatBot.jsx              # AI-powered chatbot component for user interactions
│   │       ├── Footer.jsx                 # Footer component with links and contact info
│   │       ├── Navbar.jsx                 # Navigation bar with responsive menu
│   │       ├── ThemeToggle.jsx            # Dark/Light theme switcher
│   │       ├── Loader.jsx                 # Custom animated loader spinner component
│   │       └── ErrorDisplay.jsx           # Reusable error display component with styling
│   │
│   ├── pages/
│   │   ├── AboutUsPage.jsx                # About Us page content and layout
│   │   ├── BlogDetailPage.jsx             # Individual blog post detail view (uses useGetBlogBySlug hook)
│   │   ├── BlogsPage.jsx                  # Blog listing page (uses useGetAllBlogs hook)
│   │   ├── ContactUsPage.jsx              # Contact form with React Hook Form + useSubmitContact mutation
│   │   ├── EventsPage.jsx                 # Events listing with compact card UI (uses useGetAllEvents hook)
│   │   ├── GalleryPage.jsx                # Gallery/portfolio showcase page
│   │   ├── LandingPage.jsx                # Home/landing page with hero section
│   │   └── not-found.jsx                  # 404 error page
│   │
│   ├── services/                          # API and data fetching logic
│   │   ├── api.js                         # Sanity client setup, image URL builder, backend configuration
│   │   ├── useEventsQueries.js            # React Query hooks for event data (getAllEvents, getEventBySlug)
│   │   ├── useBlogsQueries.js             # React Query hooks for blog data (getAllBlogs, getBlogBySlug)
│   │   ├── useContactMutations.js         # React Query mutation hook for contact form submission (submitContact)
│   │        
│   │
│   ├── stores/
│   │   └── useTheme.jsx                   # Zustand store for theme management (dark/light mode)
│   │
│   ├── utils/
│   │   └── google-form-redirect.jsx       # Utility for Google Forms redirection
│   │
│   ├── lib/
│   │   └── utils.js                       # General utility functions and helpers
│   │
│   ├── App.jsx                            # Main app component and routing
│   ├── Layout.jsx                         # Layout wrapper with Navbar, Footer, theme provider
│   ├── main.jsx                           # React entry point
│   ├── App.css                            # Global styles, Tailwind CSS, font definitions
│   └── index.html                         # HTML template
│
├── thecheatschool/                        # Sanity CMS project folder
│   ├── sanity.config.js                   # Sanity studio configuration
│   ├── sanity.cli.js                      # Sanity CLI settings
│   ├── schemaTypes/                       # Sanity content schemas
│   │   ├── index.js                       # Schema exports
│   │   ├── post.js                        # Blog post schema definition
│   │   ├── author.js                      # Author schema for blogs
│   │   ├── category.js                    # Category schema for organization
│   │   ├── event.js                       # Event schema for events listing
│   │   ├── blockContent.js                # Portable Text block content schema
│   └── static/                            # Static assets for Sanity studio
│
├── DEV_GUIDE/                             # Development documentation
│   ├── SANITY_SETUP.md                    # Step-by-step guide to configure and deploy Sanity CMS
│         
│
├── public/                                # Public static assets
│   └── [images and media files]
│
├── components.json                        # Component library configuration (shadcn/ui)
├── eslint.config.js                       # ESLint configuration for code quality
├── jsconfig.json                          # JavaScript configuration for path aliases
├── vite.config.js                         # Vite bundler configuration
├── vercel.json                            # Vercel deployment configuration
├── package.json                           # Project dependencies and scripts
└── README.md                              # This file
```

---

## 🛠️ Tech Stack

### **Frontend Framework & Build Tools**
- **React** (v18+) — UI library for building interactive components
- **Vite** — Fast, modern build tool and dev server for bundling
- **React Router** — Client-side routing and navigation

### **Styling & UI**
- **Tailwind CSS** — Utility-first CSS framework for rapid UI development
- **shadcn/ui** — Pre-built, accessible component library based on Tailwind CSS
- **tw-animate-css** — Tailwind CSS animation utilities

### **State Management & Data Fetching**
- **@tanstack/react-query** (v5+) — Data fetching, caching, and synchronization library with hooks (useQuery, useMutation)
- **Zustand** — Lightweight state management for global state (theme management)

### **CMS & Backend**
- **Sanity CMS** — Headless CMS for content management with studio UI
- **@sanity/client** — JavaScript client for Sanity API queries
- **@sanity/image-url** — Image URL builder for Sanity image assets
- **Portable Text / react-portable-text** — Rich text content rendering engine

### **Form Handling & Validation**
- **React Hook Form** — Performant, flexible form management with minimal re-renders
- **@hookform/resolvers** — Validation adapters for multiple schema libraries
- **Zod** — TypeScript-first schema validation library

### **HTTP Client**
- **Axios** — Promise-based HTTP client for API requests

### **UI Notifications**
- **react-hot-toast** — Toast notifications library for success, error, and info messages

### **Icons**
- **lucide-react** — Modern, consistent icon library (User, Calendar, Clock, Monitor, Users, etc.)

### **Fonts & Typography**
- **Google Fonts** — Antonio (primary), Inter (secondary), Oswald (tertiary) fonts

### **Code Quality & Linting**
- **ESLint** — JavaScript linting tool to maintain code quality
- **Prettier** (optional) — Code formatter for consistent formatting

### **Development & Build**
- **Node.js** — JavaScript runtime environment
- **npm** or **yarn** — Package manager for dependencies
- **Vite Dev Server** — Hot Module Replacement (HMR) for fast development

### **Deployment**
- **Vercel** — Cloud platform for frontend deployment with serverless functions support

### **Environment Management**
- **import.meta.env** — Vite's environment variables API

---

## 📋 Features Implemented

### **Data Fetching**
- ✅ Real-time event listing with React Query
- ✅ Blog posts with detailed views and pagination
- ✅ Contact form with validation and submission via mutation

### **Error Handling & UX**
- ✅ Custom Loader spinner component for async operations
- ✅ Reusable ErrorDisplay component for consistent error messaging
- ✅ Toast notifications for form submissions and errors

### **State Management**
- ✅ Dark/Light theme toggle with Zustand store persistence
- ✅ React Query caching with configurable stale times and retry logic

### **Form Handling**
- ✅ React Hook Form with Zod validation on ContactUs page
- ✅ Real-time validation feedback and error messages

### **Content Management**
- ✅ Sanity CMS integration for blogs, events, and authors
- ✅ Image optimization via Sanity image URL builder
- ✅ Portable Text rendering for rich blog content

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn
- Sanity account (for CMS access)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd the-cheat-school
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory:
   ```
   VITE_USE_BACKEND=sanity
   VITE_BACKEND_API=http://localhost:8080
   ```
   
  **📄 For complete credentials:**
Contact the developer for the project handoff document.

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   Navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

Output files will be in the `dist/` directory, ready for deployment.


## 🔧 Scripts

- `npm run dev` — Start development server with HMR
- `npm run build` — Build for production
- `npm run preview` — **Preview** production build locally
- `npm run lint` — Run ESLint checks



---

**Last Updated:** November 26, 2025