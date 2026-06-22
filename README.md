# Reakon - Landing Page

A modern, high-performance landing page for Reakon, a financial automation platform designed for Indian businesses. Built with Next.js 14, React, Framer Motion, and Tailwind CSS, this site showcases Reakon's capabilities in GST recovery, financial tracking, and vendor management through scroll-triggered animations and immersive interactions.

## 🎯 Overview

Reakon helps Indian businesses automate their financial operations by:
- Recovering GST credits automatically
- Chasing customers who owe money via WhatsApp
- Enabling seamless CA collaboration
- Tracking vendor compliance
- Providing real-time financial clarity

This landing page is designed to convert visitors into trial users through compelling visuals, smooth animations, and clear value propositions.

## ✨ Key Features

### Visual Design
- **Modern Typography**: Inter font for body text, Instrument Serif for display, JetBrains Mono for code
- **Smooth Animations**: Scroll-triggered animations, hover effects, and micro-interactions throughout
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Noise Overlay**: Subtle texture overlay for visual depth
- **Gradient Backgrounds**: Carefully chosen color gradients for visual hierarchy

### Sections

#### 1. **Navigation**
- Fixed header that shrinks and rounds on scroll
- 5 main navigation links (Features, How it works, Why Us, Reviews, FAQ)
- Indian flag indicator with "Made in India" branding
- Amber CTA button (Contact Us now)
- Mobile-responsive hamburger menu

#### 2. **Hero Section**
- Large animated headline with character-by-character animation
- Rotating word animation ("GST money", "Input tax credit", "Tax refunds", etc.)
- Dual CTA buttons (Start free trial + Contact us now)
- MacBook Pro mockup image
- Eyebrow text with animated line separator

#### 3. **Trusted By Section**
- Logo grid of partner companies
- Two-row layout with rotating logos
- Social proof element to build credibility

#### 4. **Intro Video Section**
- Aspect ratio video placeholder
- Three numbered capabilities with descriptions
- Scroll-triggered reveals with staggered animations

#### 5. **Capabilities Showcase** ✨ NEW
- Tile-based layout (2 wide cards on top, 3 equal cards below)
- Six capability cards with hover animations
- Scroll-triggered fade-in with staggered timing
- Arrow icons visible on hover
- Gradient backgrounds and lift effects

#### 6. **What Reakon Does Section**
- Four scroll-triggered animations showcasing core capabilities
- WhatsApp Animation (bill upload flow)
- P&L Animation (dashboard with live numbers)
- Reminders Animation (customer payment tracking)
- Vendor Risk Animation (compliance monitoring)
- Each with custom animation components and micro-interactions

#### 7. **Features Section**
- Grid-based feature showcases
- Cards with descriptions and visual elements
- Hover effects and smooth transitions

#### 8. **How It Works (Trust & Compliance)**
- Black background (#0A0A0A) with amber accents (#F5A623)
- Three trust card sections with micro-animations
- WhatsApp bill upload flow visualization
- Dashboard blur-to-sharp animation
- CA handoff chaos-to-smooth animation
- Five compliance badges (password security, government-licensed, data location, DPDP, permission-based)
- Friction-removal CTA ("See My GST Number — Free")

#### 9. **Infrastructure Section**
- Why Us messaging
- Technology and infrastructure highlights
- Trust and compliance focus

#### 10. **Metrics Section**
- Statistics and key performance indicators
- Animated number counters
- Social proof through metrics

#### 11. **Testimonials/Reviews Section**
- Customer testimonial marquee with smooth scrolling
- Two-direction animations for visual interest
- Customer logos and quotes

#### 12. **Integrations Section**
- 200+ integrations showcase
- Grid of partner logos
- Extensibility messaging

#### 13. **Security Section**
- Security certifications and compliance
- Trust signals for enterprise customers

#### 14. **Developers Section**
- API documentation highlights
- Developer-focused messaging
- Code examples or integration guides

#### 15. **FAQ Section**
- Frequently asked questions accordion
- Expandable Q&A format
- Common user questions and answers

#### 16. **CTA Section**
- Final call-to-action
- "Your money has been draining long enough" messaging
- Primary CTA: "Start your free trial today"
- Secondary CTA: "Talk to sales"
- Mouse-following spotlight effect
- Decorative corner elements

#### 17. **Newsletter Popup** ✨ NEW
- Appears 20 seconds after page load
- "Stay up to date with Reakon's product team" messaging
- Email signup form with "Get updates" button
- Three value propositions with checkmarks
- Responsive design (desktop with preview image, mobile without)
- Close button for dismissal

#### 18. **Footer**
- Company information
- Links and resources
- Legal and social links

## 🛠 Technology Stack

### Core Framework
- **Next.js 14**: React framework with App Router for optimal performance
- **React 18**: Latest React features and hooks
- **TypeScript**: Type-safe development

### Styling & Animation
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Framer Motion**: Production-ready motion library for smooth animations
- **CSS Keyframes**: Custom animations for marquee effects and micro-interactions

### Fonts
- **Inter** (Google Fonts): Primary sans-serif font for body text
- **Instrument Serif** (Google Fonts): Display font for headlines
- **JetBrains Mono** (Google Fonts): Monospace font for code

### Development Tools
- **ESLint**: Code quality and style consistency
- **TypeScript**: Static type checking

### UI Components
- Custom button component with variants
- Icon components (Lucide React)
- Accessible form elements

## 📁 Project Structure

```
reakon_website/
├── app/
│   ├── layout.tsx              # Root layout with font configuration
│   ├── page.tsx                # Main landing page with all sections
│   └── globals.css             # Global styles and CSS variables
├── components/
│   ├── landing/
│   │   ├── navigation.tsx              # Header with responsive nav
│   │   ├── hero-section.tsx            # Hero with animated text
│   │   ├── trusted-by-section.tsx      # Logo grid section
│   │   ├── intro-video-section.tsx     # Video intro with 3 features
│   │   ├── capabilities-showcase.tsx   # 2-3 tile layout cards
│   │   ├── what-reakon-does-section.tsx # 4 animated capabilities
│   │   ├── features-section.tsx        # Feature cards grid
│   │   ├── how-it-works-section.tsx    # Trust & Compliance section
│   │   ├── infrastructure-section.tsx  # Why Us / infrastructure
│   │   ├── metrics-section.tsx         # Statistics display
│   │   ├── testimonials-marquee-section.tsx # Scrolling testimonials
│   │   ├── integrations-section.tsx    # Partner integrations
│   │   ├── security-section.tsx        # Security certifications
│   │   ├── developers-section.tsx      # Developer messaging
│   │   ├── faq-section.tsx             # FAQ accordion
│   │   ├── cta-section.tsx             # Final call-to-action
│   │   ├── newsletter-popup.tsx        # Email signup popup
│   │   └── footer-section.tsx          # Footer
│   └── ui/
│       └── button.tsx           # Reusable button component
├── public/
│   ├── reakon logo.png         # Reakon logo
│   └── [other assets]          # Images and static files
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── next.config.js              # Next.js configuration
├── package.json                # Project dependencies
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/pnpm/yarn
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/aaditisinghal/reakon-website.git
   cd reakon_website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory (if needed for future features):
   ```
   # Add any environment variables here
   ```

4. **Run development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   # or
   yarn dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:3000` to see the site

## 📝 Component Documentation

### Navigation Component
**File**: `components/landing/navigation.tsx`

**Features**:
- Fixed header that transforms on scroll
- Responsive menu with hamburger on mobile
- Smooth transitions between states
- India flag with "Made in India" branding
- CTA button in amber color

**Props**: None (internal state management)

**Key States**:
- `isScrolled`: Boolean tracking scroll position
- `isMobileMenuOpen`: Boolean for mobile menu state

### Hero Section
**File**: `components/landing/hero-section.tsx`

**Features**:
- Animated headline with staggered character animation
- Rotating word display (6-word cycle every 2.5 seconds)
- Two CTA buttons with different styles
- MacBook Pro mockup image
- Entry animations with opacity and translate effects

**Animation Details**:
- Character animation: 0.5s cubic-bezier
- Word rotation: 2500ms interval
- Hero elements fade in on mount: 700ms duration with staggered delays

### Capabilities Showcase
**File**: `components/landing/capabilities-showcase.tsx`

**Features**:
- 2-3 tile layout (2 wide cards, 3 equal cards)
- Scroll-triggered animations
- Hover effects with lift and shadow
- Arrow icons visible on hover
- Staggered animation timing (100ms between cards)

**Card Types**:
- Wide cards: `lg:col-span-2` (GST Recovery, Customer Chasing)
- Regular cards: `lg:col-span-1` (CA Collaboration, Vendor Tracking, Financial Clarity)

### What Reakon Does Section
**File**: `components/landing/what-reakon-does-section.tsx`

**Features**:
- Four animated capabilities with icons
- Custom animation components for each feature
- Scroll-triggered reveals
- Numbered sections (01, 02, 03, 04)

**Capabilities**:
1. **WhatsApp Animation**: Bill upload flow visualization
2. **P&L Animation**: Live profit & loss display
3. **Reminders Animation**: Customer payment tracking
4. **Vendor Risk Animation**: Vendor compliance monitoring

**Animation Timing**: 
- Slow easing: 400-700ms
- Staggered reveals with 100-150ms delays
- No bounce easing for sophisticated feel

### How It Works / Trust & Compliance Section
**File**: `components/landing/how-it-works-section.tsx`

**Features**:
- Black background (#0A0A0A) with amber accents
- Three interactive trust cards
- Micro-animations on cards
- Compliance badge display (5 badges)
- CTA section with friction-removal messaging

**Trust Cards**:
1. **WhatsApp Card Animation**: Bill submission flow
2. **Dashboard Card Animation**: Data blur to sharp
3. **CA Handoff Card Animation**: Chaos to smooth

**Compliance Badges**:
- Password security
- Government-licensed channel
- Data in India
- DPDP compliance
- Permission-based access

### Newsletter Popup
**File**: `components/landing/newsletter-popup.tsx`

**Features**:
- Appears 20 seconds after page load
- Email input with validation
- Desktop preview image, mobile optimized
- Close button functionality
- Backdrop blur effect

**Email Form**:
- Text input for work email
- "Get updates" submit button
- Real-time email state management
- Form submission handling

## 🎨 Customization Guide

### Changing Colors

**Primary Colors**:
Edit `app/globals.css` and update the CSS variables:
```css
:root {
  --foreground: oklch(0.12 0.01 60);  /* Text color */
  --background: oklch(0.985 0.002 90); /* Background */
}
```

**Accent Color (Amber)**:
Search and replace `amber-400` / `amber-500` throughout components for different accent colors.

### Modifying Fonts

**Update font imports** in `app/layout.tsx`:
```typescript
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
```

**Update CSS variable** in `app/globals.css`:
```css
--font-sans: var(--font-inter), 'Inter', system-ui, sans-serif;
```

### Animation Timing

**Scroll-triggered animations** use IntersectionObserver:
```typescript
const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) setIsVisible(true);
  },
  { threshold: 0.1 } // Adjust threshold (0-1)
);
```

**Staggered animations** use `transitionDelay`:
```typescript
style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
```

### Navigation Links

**Update nav links** in `components/landing/navigation.tsx`:
```typescript
const navLinks = [
  { name: "Features", href: "#what-reakon-does" },
  { name: "How it works", href: "#how-it-works" },
  // Add or modify links here
];
```

**Ensure corresponding section IDs** are added to sections:
```tsx
<section id="how-it-works">
  {/* Section content */}
</section>
```

### Section Content

Each section component can be customized by editing its respective file. Most sections:
1. Import necessary dependencies (React, Framer Motion hooks)
2. Define content data (arrays of objects)
3. Manage animation state with `useState` and `useRef`
4. Use IntersectionObserver for scroll detection
5. Render components with animation classes

## 📊 Performance Optimizations

- **Image Optimization**: Next.js Image component for automatic optimization
- **Code Splitting**: Automatic route-based code splitting
- **CSS**: Tailwind CSS with PurgeCSS for minimal bundle
- **Fonts**: Google Fonts with font-display swap
- **Animations**: GPU-accelerated CSS transforms
- **Lazy Loading**: Scroll-triggered animations prevent unnecessary processing

## 🔄 Git Workflow

This project follows a clean commit workflow:

```bash
# Create features locally
git checkout -b feature/new-feature

# Commit with descriptive messages
git add .
git commit -m "Add feature description"

# Push to remote
git push origin feature/new-feature

# Create PR for review
# After approval, merge to master
git checkout master
git merge feature/new-feature
git push origin master
```

**Recent Commits**:
- Added newsletter popup with 20-second delay
- Updated button colors to amber throughout
- Created Capabilities Showcase with tile layout
- Added What Reakon Does section with 4 animations
- Rebuilt How It Works as Trust & Compliance section
- Changed all fonts to Inter

## 🌐 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git push origin master
   ```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your repository
   - Vercel auto-detects Next.js and configures build settings

3. **Deploy**
   - Automatic deployment on push to master
   - Preview deployments for PRs

### Manual Deployment

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Color contrast compliance
- Focus indicators on interactive elements

## 🔐 Security

- No hardcoded secrets or API keys
- Sanitized form inputs
- HTTPS-only in production
- CSP headers configured in Next.js

## 📄 License

This project is proprietary and confidential. All rights reserved to Reakon.

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

**Development Guidelines**:
- Use TypeScript for type safety
- Follow the existing code structure
- Add comments for complex animations
- Test on multiple devices before submitting PR
- Update README if adding new sections

## 📚 Learn More

### Next.js Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [App Router Guide](https://nextjs.org/docs/app)
- [Optimizations](https://nextjs.org/docs/app/building-your-application/optimizing)

### Animation Libraries
- [Framer Motion](https://www.framer.com/motion/)
- [CSS Animations MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)

### Design System
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Inter Font](https://rsms.me/inter/)
- [Instrument Serif Font](https://www.figma.com/blog/introducing-instrument/)

### Performance
- [Web Vitals](https://web.dev/vitals/)
- [Next.js Performance Tips](https://nextjs.org/docs/app/building-your-application/optimizing/images)

## 🐛 Known Issues & Roadmap

### Current Status
- ✅ All major sections implemented
- ✅ Full responsive design
- ✅ Scroll-triggered animations
- ✅ Newsletter popup
- ✅ Mobile navigation

### Future Enhancements
- [ ] CMS integration for easy content updates
- [ ] A/B testing framework
- [ ] Analytics integration
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Video integration for demo
- [ ] Live chat support widget
- [ ] Advanced form validation

## 🎉 Acknowledgments

- Design inspired by modern SaaS landing pages
- Animation patterns from Framer Motion examples
- Color scheme based on financial tech industry standards
- Built with ❤️ for Indian businesses

---

**Last Updated**: June 22, 2026

**Maintainer**: Aaditi singhal ([@aaditisinghal](https://github.com/aaditisinghal))
