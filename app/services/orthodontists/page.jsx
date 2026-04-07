"use client";

import ServiceLandingLayout from "@/app/components/ServiceLandingLayout";
import {
  CalendarCheck,
  Users,
  Repeat,
} from 'lucide-react';

const faqData = [
  {
    q: "How fast can we launch an orthodontic practice website?",
    a: "Standard builds can go live in 4–6 weeks with polished UX, mobile-first performance, and core SEO implemented from day 1.",
  },
  {
    q: "Can you integrate our orthodontic appointment system?",
    a: "Yes. We can integrate major providers and custom APIs so you keep appointments in one dashboard without double data entry.",
  },
  {
    q: "Do these pages run fast on mobile?",
    a: "Absolutely. Tailwind-based responsive rendering and image optimizations minimize load time and deliver high Core Web Vitals scores.",
  },
  {
    q: "Will the design work for multiple service pages?",
    a: "Yes — the layout uses reusable sections; you can swap titles, text, icons, and CTAs for each service page.",
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

export default function OrthodontistsServicePage() {
  return (
    <ServiceLandingLayout
      hero={{
        subtitle: "Orthodontists",
        title: "Consistently attract high-value orthodontic cases",
        highlight: "not just enquiries.",
        description:
          "We help orthodontic practices build growth systems that generate qualified consultations and convert them into long-term treatment plans.",
        primaryAction: { label: "Our Service", href: "/services" },
        secondaryAction: { label: "See Pricing", href: "/pricing" },
        emergencyPhone: "+62 123 456 789",
        imageSrc:
          "/assets/img/services-page/orthodontists/hero-placeholder.png",
        imageAlt: "Orthodontic service hero",
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
        sectionSubtitle: "Our Commitment",
        sectionTitle:
          "We Partner With You To Build A Digital-First Orthodontic Practice",
        sectionDescription:
          "From initial consultation to treatment completion, our platform helps you attract, convert, and retain smile-conscious patients. We specialize in showcasing your expertise, building trust, and driving consistent growth.",
        mainImageSrc:
          "/assets/img/services-page/orthodontists/process-main.jpg",
        mainImageAlt: "Orthodontic team in action",
        rightDescription:
          "Every element is designed for the orthodontic journey — clear aligner education, braces explainers, and treatment timeline visualization. We make complex information simple, so patients choose you.",
        cardTitle: "Smile Solutions",
        cardText:
          "Complete digital ecosystem for patient acquisition, education, and retention in orthodontics.",
        cardImageSrc:
          "/assets/img/services-page/orthodontists/process-side.jpg",
        cardImageAlt: "Smile transformation",
      }}
      infoBlock={{
        topTitle: "PROVEN EXPERTISE",
        heading: "We Understand The Unique Needs Of Orthodontic Practices",
        leftTitle: "Our Approach",
        leftText:
          "Orthodontics requires education and trust-building. Families need to understand treatment options, timelines, and costs before committing. Our digital-first strategy showcases your expertise, educates patients, and converts inquisitive visitors into appointments.",
        centerImageSrc:
          "/assets/img/services-page/orthodontists/info-center.jpg",
        centerImageAlt: "Our approach",
        quote:
          "Partner with us to build a digital presence that attracts smile-ready patients and keeps them engaged throughout treatment.",
        features: [
          "HIPAA Compliance",
          "Treatment Explainers",
          "Multi-Channel Campaigns",
        ],
      }}
      faqBlock={{
        heading: "Frequently Asked Questions",
        description:
          "Common questions from orthodontists considering our platform.",
        faqs: faqData,
      }}
    />
  );
}
