# 📚 Component Implementation Guide

## Overview

This guide provides detailed implementation examples for all 9+ premium components included in the BestWay Consulting website upgrade.

---

## 1. PremiumButton

The most versatile component for all call-to-action and interactive elements.

### Basic Usage

```tsx
import { PremiumButton } from '@/components'

export default function Example() {
  return (
    <PremiumButton 
      href="#contact"
      variant="primary"
      size="lg"
      icon="🚀"
    >
      Get Started Today
    </PremiumButton>
  )
}
```

### All Variants

```tsx
// Primary (Conversion)
<PremiumButton variant="primary">Primary Action</PremiumButton>

// Secondary (Alternative)
<PremiumButton variant="secondary">Secondary Action</PremiumButton>

// Outlined (Subtle)
<PremiumButton variant="outlined">View Details</PremiumButton>

// Ghost (Minimal)
<PremiumButton variant="ghost">Skip</PremiumButton>
```

### All Sizes

```tsx
<PremiumButton size="sm">Small</PremiumButton>
<PremiumButton size="md">Medium</PremiumButton>
<PremiumButton size="lg">Large</PremiumButton>
```

### With Icons

```tsx
<PremiumButton icon="📞">Call Us</PremiumButton>
<PremiumButton icon="📧">Send Email</PremiumButton>
<PremiumButton icon="📱">WhatsApp</PremiumButton>
```

### Loading State

```tsx
const [isLoading, setIsLoading] = useState(false)

<PremiumButton isLoading={isLoading}>
  Submit
</PremiumButton>
```

### Disabled State

```tsx
<PremiumButton disabled>Unavailable</PremiumButton>
```

### With Click Handler

```tsx
const handleClick = () => {
  // Handle action
}

<PremiumButton onClick={handleClick}>
  Click Me
</PremiumButton>
```

---

## 2. PremiumCard

Perfect for displaying features, benefits, or services.

### Basic Usage

```tsx
import { PremiumCard } from '@/components'

export default function Example() {
  return (
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
  )
}
```

### Hover Effects

```tsx
// Lift effect (default)
<PremiumCard hover="lift" {...props} />

// Scale effect
<PremiumCard hover="scale" {...props} />

// Glow effect
<PremiumCard hover="glow" {...props} />
```

### Gradient Variations

```tsx
// Education (Blue-Cyan)
<PremiumCard 
  gradient="from-blue-500/10 to-cyan-500/10"
  borderColor="border-blue-200/30"
/>

// Work (Green)
<PremiumCard 
  gradient="from-green-500/10 to-emerald-500/10"
  borderColor="border-green-200/30"
/>

// Business (Orange)
<PremiumCard 
  gradient="from-orange-500/10 to-red-500/10"
  borderColor="border-orange-200/30"
/>
```

### With Footer

```tsx
<PremiumCard
  icon="💼"
  title="Business Solutions"
  description="Corporate immigration packages"
  footer={
    <PremiumButton href="/contact" size="sm">
      Learn More
    </PremiumButton>
  }
/>
```

### With Custom Children

```tsx
<PremiumCard icon="🏆" title="Success Stories">
  <div className="space-y-4">
    <p>5,000+ clients served</p>
    <p>98% approval rate</p>
    <p>20+ years experience</p>
  </div>
</PremiumCard>
```

---

## 3. PremiumSectionHeader

Professional headers for sections with badges and decorative lines.

### Basic Usage

```tsx
import { PremiumSectionHeader } from '@/components'

export default function Example() {
  return (
    <PremiumSectionHeader
      badge="✨ Premium Services"
      title="Our Comprehensive Services"
      subtitle="We offer expert guidance for all immigration needs"
    />
  )
}
```

### Variations

```tsx
// Centered (default)
<PremiumSectionHeader
  title="Large Heading"
  subtitle="Subtitle"
  centered={true}
/>

// Left-aligned
<PremiumSectionHeader
  title="Our Story"
  subtitle="How we started"
  centered={false}
/>
```

### With Description

```tsx
<PremiumSectionHeader
  badge="📋 Services"
  title="Immigration Services"
  subtitle="Expert Guidance"
  description="We provide comprehensive immigration consulting services tailored to your needs"
/>
```

---

## 4. PremiumInput

Professional form inputs with validation and error handling.

### Basic Usage

```tsx
import { PremiumInput } from '@/components'
import { useState } from 'react'

export default function Example() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  return (
    <PremiumInput
      label="Email Address"
      placeholder="your@email.com"
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      error={error}
      required={true}
    />
  )
}
```

### With Icon

```tsx
<PremiumInput
  label="Phone"
  placeholder="+1 (555) 000-0000"
  type="tel"
  icon="📞"
/>
```

### Multiline (Textarea)

```tsx
<PremiumInput
  label="Message"
  placeholder="Tell us about your situation..."
  multiline={true}
  rows={5}
  required={true}
/>
```

### All Input Types

```tsx
<PremiumInput type="text" placeholder="Name" />
<PremiumInput type="email" placeholder="Email" />
<PremiumInput type="tel" placeholder="Phone" />
<PremiumInput type="password" placeholder="Password" />
<PremiumInput type="url" placeholder="Website" />
<PremiumInput type="date" label="Birth Date" />
```

### With Error

```tsx
<PremiumInput
  label="Username"
  value="ab"
  error="Username must be at least 3 characters"
/>
```

---

## 5. TestimonialCard

Showcase client testimonials with ratings.

### Basic Usage

```tsx
import { TestimonialCard } from '@/components'

export default function Example() {
  return (
    <TestimonialCard
      quote="Amazing service and support throughout the entire process!"
      author="John Smith"
      role="Student"
      avatar="👤"
      rating={5}
      company="ABC University"
    />
  )
}
```

### Multiple Testimonials Grid

```tsx
const testimonials = [
  {
    quote: "Best service ever!",
    author: "Alice Johnson",
    role: "Professional",
    rating: 5,
  },
  {
    quote: "Highly recommended!",
    author: "Bob Williams",
    role: "Student",
    rating: 5,
  },
]

export default function Example() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((testimonial, i) => (
        <TestimonialCard key={i} {...testimonial} />
      ))}
    </div>
  )
}
```

---

## 6. StatCard

Display statistics and metrics with animations.

### Basic Usage

```tsx
import { StatCard } from '@/components'

export default function Example() {
  return (
    <StatCard
      number="5000+"
      label="Success Stories"
      icon="🏆"
    />
  )
}
```

### Statistics Grid

```tsx
const stats = [
  { number: "5000+", label: "Success Stories", icon: "🏆" },
  { number: "20+", label: "Years Experience", icon: "📅" },
  { number: "98%", label: "Approval Rate", icon: "✅" },
  { number: "24/7", label: "Support", icon: "📞" },
]

export default function Example() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, i) => (
        <StatCard key={i} {...stat} />
      ))}
    </div>
  )
}
```

---

## 7. ProcessTimeline

Show step-by-step processes with visual timeline.

### Basic Usage

```tsx
import { ProcessTimeline } from '@/components'

export default function Example() {
  const steps = [
    {
      number: 1,
      title: "Initial Consultation",
      description: "We assess your immigration goals and situation",
      icon: "📋",
      details: [
        "Free consultation",
        "Immigration assessment",
        "Document review"
      ]
    },
    {
      number: 2,
      title: "Application Preparation",
      description: "Prepare all necessary documents and applications",
      icon: "📝",
      details: [
        "Document preparation",
        "Application forms",
        "Quality review"
      ]
    },
    {
      number: 3,
      title: "Submission & Tracking",
      description: "Submit and monitor your application status",
      icon: "✈️",
      details: [
        "Application submission",
        "Status tracking",
        "Government communication"
      ]
    },
  ]

  return <ProcessTimeline steps={steps} />
}
```

---

## 8. CTASection

Full-width call-to-action sections to drive conversions.

### Basic Usage

```tsx
import { CTASection } from '@/components'

export default function Example() {
  return (
    <CTASection
      title="Ready to Start Your Journey?"
      subtitle="🚀 Next Steps"
      description="Get expert guidance and begin your immigration process today"
      ctaText="Schedule Free Consultation"
      ctaHref="#contact"
      ctaSecondaryText="Learn More"
      ctaSecondaryHref="#services"
      background="gradient"
    />
  )
}
```

### Background Variations

```tsx
// Dark background
<CTASection background="dark" {...props} />

// Gradient background (default)
<CTASection background="gradient" {...props} />

// Light background
<CTASection background="light" {...props} />
```

---

## 9. ComparisonTable

Show plan comparisons or feature matrices.

### Basic Usage

```tsx
import { ComparisonTable } from '@/components'

export default function Example() {
  const plans = [
    {
      name: "Basic Consultation",
      price: "Free",
      description: "Get started",
      items: [
        { feature: "Initial consultation", included: true },
        { feature: "Immigration assessment", included: true },
        { feature: "Application preparation", included: false },
      ],
      highlight: false,
    },
    {
      name: "Professional Package",
      price: "$1,999",
      description: "Most popular",
      items: [
        { feature: "Initial consultation", included: true },
        { feature: "Immigration assessment", included: true },
        { feature: "Application preparation", included: true },
        { feature: "24/7 support", included: false },
      ],
      highlight: true,
    },
    {
      name: "Premium Package",
      price: "$4,999",
      description: "Full service",
      items: [
        { feature: "Initial consultation", included: true },
        { feature: "Immigration assessment", included: true },
        { feature: "Application preparation", included: true },
        { feature: "24/7 support", included: true },
      ],
      highlight: false,
    },
  ]

  return <ComparisonTable plans={plans} />
}
```

### With Notes

```tsx
const plans = [
  {
    name: "Starter",
    items: [
      {
        feature: "Email support",
        included: true,
        note: "Response within 24 hours",
      },
      {
        feature: "Priority support",
        included: false,
      },
    ],
  },
]
```

---

## Complete Page Example

Here's how to combine multiple components into a complete page:

```tsx
'use client'

import {
  PremiumSectionHeader,
  PremiumButton,
  PremiumCard,
  TestimonialCard,
  StatCard,
  CTASection,
  ProcessTimeline,
} from '@/components'

export default function ServicesPage() {
  return (
    <div>
      {/* Header Section */}
      <section className="py-20 px-6">
        <PremiumSectionHeader
          badge="✨ Our Services"
          title="Comprehensive Immigration Solutions"
          subtitle="Expert guidance for your immigration journey"
        />
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <PremiumCard
              icon="🍁"
              title="Canada Immigration"
              description="Expert guidance for Canadian visas and permanent residence"
              features={["Visa assessment", "Document prep", "Interview coaching"]}
            />
            <PremiumCard
              icon="🦘"
              title="Australia Immigration"
              description="Professional support for Australian immigration programs"
              features={["Skills assessment", "Points calculation", "Application support"]}
            />
            <PremiumCard
              icon="📚"
              title="Education Visas"
              description="Study visa services for universities worldwide"
              features={["University selection", "Application support", "Visa guidance"]}
            />
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 px-6">
        <PremiumSectionHeader title="Our Process" />
        <div className="max-w-6xl mx-auto mt-16">
          <ProcessTimeline steps={processSteps} />
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 px-6 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            <StatCard number="5000+" label="Success Stories" icon="🏆" />
            <StatCard number="20+" label="Years Experience" icon="📅" />
            <StatCard number="98%" label="Approval Rate" icon="✅" />
            <StatCard number="24/7" label="Support" icon="📞" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <PremiumSectionHeader title="Client Testimonials" />
        <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-3 gap-8">
          <TestimonialCard
            quote="Best service ever!"
            author="John Doe"
            role="Student"
            rating={5}
          />
          {/* More testimonials */}
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Start?"
        ctaText="Get Started Today"
        ctaHref="#contact"
      />
    </div>
  )
}
```

---

## Best Practices

### ✅ Do's
- Use components consistently across pages
- Keep animations subtle (don't overdo it)
- Always include proper ARIA labels
- Test on mobile devices
- Use semantic HTML
- Group related components
- Keep props clean and organized

### ❌ Don'ts
- Don't override component styles without reason
- Don't mix gradient systems
- Don't use animations on every element
- Don't ignore accessibility requirements
- Don't hardcode colors (use CSS variables)
- Don't break responsive design
- Don't nest components too deeply

---

## Troubleshooting

### Button not appearing
```tsx
// Check if it's outside the container max-width
// Make sure variant and size props are valid
<PremiumButton variant="primary" size="lg">
  Text should be visible
</PremiumButton>
```

### Form validation not working
```tsx
// Ensure state is being updated
const [value, setValue] = useState('')
const [error, setError] = useState('')

<PremiumInput
  value={value}
  onChange={(e) => setValue(e.target.value)}
  error={error}
/>
```

### Animation not triggering
```tsx
// Use whileInView for scroll animations
// Use whileHover for hover effects
// Check viewport threshold
```

---

## Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [React Docs](https://react.dev/)
- [Next.js Docs](https://nextjs.org/)

---

**Last Updated:** May 2026  
**Version:** 1.0  
**Status:** ✅ Ready for Use
