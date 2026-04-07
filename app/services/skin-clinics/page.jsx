"use client";

import ServiceLandingLayout from "@/app/components/ServiceLandingLayout";
import {
  CalendarCheck,
  Users,
  Repeat,
} from 'lucide-react';

const faqData = [
  {
    q: "How fast can we launch a dermatology website?",
    a: "Standard builds can go live in 4–6 weeks with polished medical UX, mobile-first performance, and core SEO implemented from day 1.",
  },
  {
    q: "Can you integrate our dermatology practice management system?",
    a: "Yes. We can integrate major providers and custom APIs so you keep appointments in one dashboard without double data entry.",
  },
  {
    q: "Do these pages run fast on mobile?",
    a: "Absolutely. Tailwind-based responsive rendering and image optimizations minimize load time and deliver high Core Web Vitals scores.",
  },
  {
    q: "Will the design work for multiple service pages?",
    a: "Yes — the layout uses reusable sections; you can swap titles, text, icons, and CTAs for each skin condition or treatment.",
  },
  {
    q: "Is there a support/maintenance option?",
    a: "We provide monthly support plans for content updates, performance monitoring, A/B tests, and security patches.",
  },
  {
    q: "Can we update the page content from admin?",
    a: "We can add a content CMS integration (e.g., Sanity, Contentful, Strapi) if required for non-technical editing.",
  },
];

export default function SkinClinicsServicePage() {
  return (
    <ServiceLandingLayout
      hero={{
        subtitle: "Skin Clinics",
        title: "Become the go-to skin clinic in your area",
        highlight: " with consistent client bookings.",
        description:
          "We help skin clinics attract the right clients, increase repeat visits, and build predictable revenue systems.",
        primaryAction: { label: "Our Service", href: "/services" },
        secondaryAction: { label: "See Pricing", href: "/pricing" },
        emergencyPhone: "+62 123 456 789",
        imageSrc: "/assets/img/services-page/skin-clinics/hero-placeholder.png",
        imageAlt: "Dermatology clinic hero",
      }}
      aboutBlock={{
        smallTitle: "About Us",
        title: "CORE POSITIONING",
        description:
          "Healthcare businesses don’t struggle because of a lack of marketing—they struggle because they lack a connected growth system. We operate as a long-term growth partner, designing and implementing end-to-end systems that manage your entire patient journey—from first search to confirmed booking and beyond. Our focus is simple: consistent patient acquisition and measurable revenue growth.",
        imageSrc: "/assets/img/services-page/moving/about-image.jpg",
        imageAlt: "Dental practice about",
      }}
      featureBlock={{
        heading: "Our Approach",
        description:
          "We build and optimise three core growth engines inside your practice:",
        features: [
          {
            icon: <Users size={32} className="text-[#ef2f6b]" />,
            title: "Patient Acquisition",
            text: "We position your clinic where high-intent patients are already searching through: Google search optimisation, Paid advertising campaigns, Local visibility strategies.",
          },
          {
            icon: <CalendarCheck size={32} className="text-[#ef2f6b]" />,
            title: "Conversion Systems",
            text: "We turn enquiries into booked appointments by improving: website and landing page performance, call handling and enquiry response, automated follow-ups and reminders.",
          },
          {
            icon: <Repeat size={32} className="text-[#ef2f6b]" />,
            title: "Retention & Reactivation",
            text: "We help you maximise patient lifetime value through: recall systems, reactivation campaigns, ongoing engagement strategies.",
          },
        ],
      }}
      statsBlock={{
        heading: 'OUTCOMES',
        description: 'Our systems are designed to help you:',
        stats: [
          { value: 'Steady flow', label: 'of qualified enquiries' },
          { value: 'Higher conversion', label: 'from enquiry to booking' },
          { value: 'Fewer missed', label: 'opportunities and no-shows' },
          { value: 'Predictable growth', label: 'and a scalable revenue pipeline' },
        ],
      }}
      processBlock={{
        sectionSubtitle: "Our Partnership",
        sectionTitle: "We Help You Build A Digital-First Dermatology Practice",
        sectionDescription:
          "From patient education to treatment consultation and follow-up, our platform attracts informed patients. We specialize in explaining complex skin conditions, showcasing treatment options, and building patient loyalty.",
        mainImageSrc: "/assets/img/services-page/skin-clinics/process-main.jpg",
        mainImageAlt: "Dermatology team",
        rightDescription:
          "Every element is designed for patient education and trust-building. Clear condition explanations, treatment comparisons, and personalized care pathways make patients feel informed and confident.",
        cardTitle: "Skin Solutions",
        cardText:
          "Complete digital ecosystem for patient acquisition, education, and retention in dermatology.",
        cardImageSrc: "/assets/img/services-page/skin-clinics/process-side.jpg",
        cardImageAlt: "Skin care treatment",
      }}
      infoBlock={{
        topTitle: "DERMATOLOGY EXPERTISE",
        heading: "We Understand The Unique Needs Of Skin Care Practices",
        leftTitle: "Our Approach",
        leftText:
          "Dermatology patients need education and reassurance. Whether seeking treatment for a condition or cosmetic skin enhancement, they need clear information about options and outcomes. Our platform provides exactly that — expert education, compassionate communication, and conversion-focused design.",
        centerImageSrc:
          "/assets/img/services-page/skin-clinics/info-center.jpg",
        centerImageAlt: "Our dermatology approach",
        quote:
          "Partner with us to build a digital presence that educates patients and drives consistent dermatology appointments.",
        features: [
          "HIPAA Compliance",
          "Condition Education",
          "Multi-Treatment Options",
        ],
      }}
      faqBlock={{
        heading: "Frequently Asked Questions",
        description:
          "Common questions from dermatology clinics considering our platform.",
        faqs: faqData,
      }}
    />
  );
}
