# Components Structure

This directory contains all React components organized by their purpose and functionality.

## 📁 Directory Organization

### `/layout/` - Core Layout Components
Components that define the overall structure and navigation of the application.

- **`Navbar.tsx`** - Main navigation bar with responsive menu
- **`Footer.tsx`** - Site footer with links and information

### `/sections/` - Page Section Components
Components that represent different sections of the main page.

- **`Hero.tsx`** - Hero section with main call-to-action
- **`AboutSection.tsx`** - Company information section
- **`BuySection.tsx`** - Vehicle buying information
- **`SellSection.tsx`** - Vehicle selling information
- **`ContactSection.tsx`** - Contact information section (homepage)

### `/contact/` - Contact Page Components
Components specific to the dedicated contact page (`/kontakt`).

- **`ContactPageContent.tsx`** - Main contact page content
- **`ContactHeader.tsx`** - Contact page header with CTAs
- **`ContactForm.tsx`** - Interactive contact form with validation
- **`ContactInfo.tsx`** - Business contact information
- **`GoogleMaps.tsx`** - Google Maps integration
- **`ContactStructuredData.tsx`** - SEO structured data

### Root Level
- **`ContactPage.tsx`** - Main contact page component (entry point)
- **`index.ts`** - Main export file for clean imports

## 🔗 Import Usage

### Clean Imports from Root
```typescript
import { Navbar, Footer, Hero, ContactPage } from '@/components';
```

### Specific Folder Imports
```typescript
import { Navbar, Footer } from '@/components/layout';
import { Hero, AboutSection } from '@/components/sections';
import { ContactForm, ContactInfo } from '@/components/contact';
```

### Individual Component Imports
```typescript
import ContactPage from '@/components/ContactPage';
```

## 🎯 Benefits of This Structure

1. **Logical Organization** - Components are grouped by their purpose
2. **Clean Imports** - Single import statements for related components
3. **Maintainability** - Easy to find and modify specific types of components
4. **Scalability** - New components can be added to appropriate folders
5. **Team Collaboration** - Clear structure for multiple developers

## 📝 Adding New Components

When adding new components:

1. **Layout Components** → `/layout/`
2. **Page Sections** → `/sections/`
3. **Contact Features** → `/contact/`
4. **Update index files** to export new components
5. **Use clean imports** in your code

## 🚀 Best Practices

- Always export components through index files
- Use descriptive component names
- Keep components focused on single responsibilities
- Follow the established naming conventions
- Update this README when adding new component types
