# 🎨 BestWay Consulting - Premium Design System

## Color Palette

### Primary Colors
- **Blue Gradient:** `from-blue-600 to-cyan-600`
- **Amber Gradient:** `from-amber-400 to-orange-500`
- **Slate Base:** `slate-900` (dark) → `slate-50` (light)

### Secondary Colors
- **Gold Suite:** `gold-50` through `gold-900`
- **Dark Mode:** Slate with amber accents
- **Light Mode:** White with blue accents

### Accent Combinations
```css
from-amber-500 to-cyan-500     /* Primary accent */
from-amber-400 to-cyan-400     /* Secondary accent */
from-blue-600 to-cyan-600      /* Information */
from-emerald-500 to-cyan-500   /* Success */
from-red-500 to-rose-500       /* Error */
```

---

## Typography System

### Font Families
| Type | Font | Usage |
|------|------|-------|
| **Display** | Playfair Display | Headings (H1-H4) |
| **Body** | Inter | Paragraphs, labels |
| **Mono** | Fira Code | Code blocks |

### Font Sizes (Responsive)
```css
h1:  clamp(2.5rem, 5vw, 4.5rem)
h2:  clamp(2rem, 4vw, 3.5rem)
h3:  clamp(1.5rem, 3vw, 2.5rem)
h4:  clamp(1.25rem, 2.5vw, 1.875rem)
p:   1rem (16px)
small: 0.875rem (14px)
```

### Font Weights
- **Bold:** 700+ (headings)
- **Semibold:** 600 (labels, emphasis)
- **Medium:** 500 (form labels)
- **Regular:** 400 (body text)
- **Light:** 300 (descriptions)

### Line Heights
- **Headings:** 1.2
- **Body:** 1.6-1.7
- **Form inputs:** 1.5

---

## Spacing Scale

```css
--spacing-xs:   0.25rem (4px)
--spacing-sm:   0.5rem  (8px)
--spacing-md:   1rem    (16px)
--spacing-lg:   1.5rem  (24px)
--spacing-xl:   2rem    (32px)
--spacing-2xl:  3rem    (48px)
--spacing-3xl:  4rem    (64px)
```

### Common Patterns
- **Section padding:** `py-20 md:py-32` to `py-32 md:py-48`
- **Container padding:** `px-6` (mobile) → `px-8 md:px-16` (desktop)
- **Gap between items:** `gap-6` to `gap-12`

---

## Shadow System

### Semantic Shadows
```css
--shadow-sm:      0 1px 2px rgba(0, 0, 0, 0.05)
--shadow-md:      0 4px 6px rgba(0, 0, 0, 0.07)
--shadow-lg:      0 10px 15px rgba(0, 0, 0, 0.1)
--shadow-xl:      0 20px 25px rgba(0, 0, 0, 0.15)
--shadow-2xl:     0 25px 50px rgba(0, 0, 0, 0.2)
```

### Glow Effects
```css
shadow-glow-blue:   0 0 15px rgba(59, 130, 246, 0.5)
shadow-glow-amber:  0 0 15px rgba(217, 119, 6, 0.5)
shadow-glow-cyan:   0 0 15px rgba(34, 211, 238, 0.5)
```

---

## Animation System

### Timing
- **Fast:** 200-300ms (micro-interactions)
- **Medium:** 400-600ms (entrance animations)
- **Slow:** 800-1000ms (large motions)

### Easing
- **Interactive:** `ease-out` (responsive feel)
- **Entrance:** `easeOut` (quick feel)
- **Loop:** `linear` (continuous)
- **Attention:** `spring` (elastic)

### Common Animations

| Animation | Duration | Easing | Use Case |
|-----------|----------|--------|----------|
| fadeIn | 500ms | ease-in-out | Content entrance |
| slideIn | 600ms | ease-out | Slide from edge |
| slideUp | 600ms | ease-out | Slide from bottom |
| glow | 2000ms | ease-in-out | Pulsing effect |
| shimmer | 2000ms | ease-in-out | Loading state |
| float | 3000ms | ease-in-out | Floating motion |
| spin-slow | 8000ms | linear | Continuous rotation |

---

## Button Styles

### Primary Button (Conversion)
```tsx
<PremiumButton 
  variant="primary" 
  size="lg" 
  icon="🚀"
>
  Get Started
</PremiumButton>
```
**Style:** Amber gradient with gold shadow
**Animation:** Lift on hover + shine effect

### Secondary Button (Information)
```tsx
<PremiumButton 
  variant="secondary" 
  size="lg" 
  icon="📖"
>
  Learn More
</PremiumButton>
```
**Style:** Blue-cyan gradient
**Animation:** Lift on hover

### Outlined Button (Alternative)
```tsx
<PremiumButton 
  variant="outlined" 
  size="lg"
>
  View Details
</PremiumButton>
```
**Style:** White border, transparent bg
**Animation:** Background fill on hover

### Ghost Button (Subtle)
```tsx
<PremiumButton 
  variant="ghost"
>
  Skip
</PremiumButton>
```
**Style:** Transparent with text only
**Animation:** Text color change

---

## Card Components

### Feature Card
```tsx
<PremiumCard
  icon="🎓"
  title="Education Visa"
  description="Expert guidance for student visas to Canada and Australia"
  features={[
    'Profile evaluation',
    'Document preparation',
    'University selection'
  ]}
/>
```

### Testimonial Card
```tsx
<TestimonialCard
  quote="Amazing service and support throughout the process!"
  author="John Smith"
  role="Student"
  avatar="👤"
  rating={5}
  company="ABC University"
/>
```

### Stat Card
```tsx
<StatCard
  number="5000+"
  label="Success Stories"
  icon="🏆"
/>
```

---

## Form Elements

### Input Field
```tsx
<PremiumInput
  label="Email Address"
  placeholder="your@email.com"
  type="email"
  icon="📧"
  required={true}
  error={error}
/>
```

**States:**
- Default: Slate border
- Focus: Amber border + glow
- Error: Red border + error message
- Disabled: Reduced opacity

### Features:
- ✅ Icon support
- ✅ Error handling
- ✅ Multiline support
- ✅ Smooth focus animation
- ✅ Validation feedback

---

## Layout Patterns

### Hero Section
```tsx
// Large heading + subheading + CTA
max-w-3xl content area
80vw typography scale
Animated background elements
Dual CTA buttons
```

### Feature Grid
```tsx
// 3 columns (desktop)
// 2 columns (tablet)
// 1 column (mobile)
gap-8 spacing
Hover lift animations
```

### Timeline
```tsx
// Desktop: Vertical with connecting line
// Mobile: Side dot indicators
Step numbers/icons
Alternating layout
Responsive design
```

### CTA Section
```tsx
// Max width 4xl container
// Large centered heading
// Description text
// Dual CTAs
// Trust badge
```

---

## Responsive Design

### Breakpoints
```css
sm: 640px    (tablets)
md: 768px    (small desktops)
lg: 1024px   (desktops)
xl: 1280px   (large desktops)
2xl: 1536px  (ultra-wide)
```

### Mobile-First Approach
```tsx
// Base (mobile)
<div className="text-sm px-4 py-2">

// Tablet
<div className="sm:text-base sm:px-6">

// Desktop
<div className="md:text-lg md:px-8">

// Large desktop
<div className="lg:text-xl lg:px-12">
```

---

## Accessibility Guidelines

### Color Contrast
- ✅ 4.5:1 for normal text
- ✅ 3:1 for large text
- ✅ All interactive elements distinguishable

### Keyboard Navigation
- ✅ All interactive elements focusable
- ✅ Focus visible outline
- ✅ Logical tab order
- ✅ Escape key support

### ARIA Labels
- ✅ Buttons have labels
- ✅ Form inputs labeled
- ✅ Icons have aria-label
- ✅ Sections have role attributes

### Semantic HTML
- ✅ Proper heading hierarchy
- ✅ `<button>` for actions
- ✅ `<a>` for navigation
- ✅ `<form>` for inputs
- ✅ `<article>` for content

---

## Dark Mode

### CSS Variables (Dark Mode)
```css
--text: #0f172a        /* Light mode */
--bg: #ffffff          /* Light mode */

/* Dark mode overrides */
--text: #ffffff        /* Dark mode */
--bg: #0f172a          /* Dark mode */
```

### Component Classes
```tsx
// Light mode default
<div className="bg-white text-slate-900">

// Dark mode support
<div className="dark:bg-slate-900 dark:text-white">
```

---

## Performance Optimization

### Image Optimization
```tsx
<Image
  src="/image.png"
  alt="Description"
  sizes="100vw"      // Responsive sizes
  quality={85}       // Compression
  priority           // LCP image
/>
```

### Animation Performance
- ✅ Use `transform` and `opacity` only
- ✅ Avoid expensive properties
- ✅ Use `will-change` sparingly
- ✅ Test on low-end devices

### Bundle Size
- ✅ Tree-shake unused styles
- ✅ Dynamic imports for heavy components
- ✅ Lazy load images
- ✅ Code splitting on routes

---

## Implementation Checklist

- [ ] Use Google Fonts (Inter, Playfair Display)
- [ ] Apply color gradients consistently
- [ ] Add animations with proper timing
- [ ] Use PremiumButton for all CTAs
- [ ] Use PremiumCard for features
- [ ] Add section headers with badges
- [ ] Implement responsive design
- [ ] Test accessibility (WCAG 2.1 AA)
- [ ] Optimize images
- [ ] Test on mobile devices
- [ ] Performance budget: < 3MB

---

## Resources

- **Tailwind CSS:** https://tailwindcss.com/
- **Framer Motion:** https://www.framer.com/motion/
- **Next.js:** https://nextjs.org/
- **Google Fonts:** https://fonts.google.com/
- **WCAG 2.1:** https://www.w3.org/WAI/WCAG21/quickref/

---

**Last Updated:** May 2026  
**Version:** 1.0  
**Status:** ✅ Ready for Implementation
