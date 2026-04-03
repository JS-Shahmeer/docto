'use client';

import ServiceLandingLayout from '@/app/components/ServiceLandingLayout';
import {
  ShieldCheck,
  CalendarCheck,
  Users,
  Award,
  Check,
  MessageCircle,
} from 'lucide-react';

const faqData = [
  { q: 'How fast can we launch a dermatology website?', a: 'Standard builds can go live in 4–6 weeks with polished medical UX, mobile-first performance, and core SEO implemented from day 1.' },
  { q: 'Can you integrate our dermatology practice management system?', a: 'Yes. We can integrate major providers and custom APIs so you keep appointments in one dashboard without double data entry.' },
  { q: 'Do these pages run fast on mobile?', a: 'Absolutely. Tailwind-based responsive rendering and image optimizations minimize load time and deliver high Core Web Vitals scores.' },
  { q: 'Will the design work for multiple service pages?', a: 'Yes — the layout uses reusable sections; you can swap titles, text, icons, and CTAs for each skin condition or treatment.' },
  { q: 'Is there a support/maintenance option?', a: 'We provide monthly support plans for content updates, performance monitoring, A/B tests, and security patches.' },
  { q: 'Can we update the page content from admin?', a: 'We can add a content CMS integration (e.g., Sanity, Contentful, Strapi) if required for non-technical editing.' },
];

export default function SkinClinicsServicePage() {
  return (
    <ServiceLandingLayout
      hero={{
        subtitle: 'Dermatology Clinic',
        title: 'Welcome To Our',
        highlight: 'Skin Health Center',
        description: 'Expert dermatological care for all skin conditions and concerns. Our digital platform connects you with patients seeking medical-grade skin solutions and personalized treatment.',
        primaryAction: { label: 'Our Service', href: '/services' },
        secondaryAction: { label: 'See Pricing', href: '/pricing' },
        emergencyPhone: '+62 123 456 789',
        imageSrc: '/assets/img/services-page/skin-clinics/hero-placeholder.png',
        imageAlt: 'Dermatology clinic hero',
      }}
      aboutBlock={{
        smallTitle: 'About Us',
        title: "We Help Dermatology Clinics Attract More Conscious Skin Care Patients",
        description: 'Specialized digital solutions for dermatology practices. From acne treatment to aging skin, we help you reach and educate patients seeking professional skin health solutions.',
        attributes: [
          { title: 'Dermatology SEO', text: 'Rank for searches like "dermatologist near me" and specific skin conditions' },
          { title: 'Medical Education', text: 'Build patient trust with detailed condition explainers and treatment options' },
        ],
        imageSrc: '/assets/img/services-page/skin-clinics/about-image.jpg',
        imageAlt: 'Dermatology clinic about image',
      }}
      featureBlock={{
        heading: 'What We Do for Skin Clinics',
        description: 'Strategic healthcare marketing for dermatological excellence.',
        features: [
          { icon: <ShieldCheck size={32} className="text-[#ef2f6b]" />, title: 'Medical Compliance', text: 'HIPAA-compliant design, secure patient data, and medical-grade security throughout.' },
          { icon: <CalendarCheck size={32} className="text-[#ef2f6b]" />, title: 'Smart Dermatology Booking', text: 'Streamlined appointment funnels for consultations and follow-ups across all skin concerns.' },
          { icon: <Users size={32} className="text-[#ef2f6b]" />, title: 'Local Dermatology Growth', text: 'SEO, local listings, and targeted campaigns to capture patients seeking skin care solutions.' },
          { icon: <Award size={32} className="text-[#ef2f6b]" />, title: 'Patient Education Hub', text: 'In-depth content on acne, rosacea, psoriasis, eczema, and advanced skin treatments.' },
          { icon: <Check size={32} className="text-[#ef2f6b]" />, title: 'Condition-Specific Pages', text: 'Dedicated landing pages for acne, anti-aging, medical dermatology, and cosmetic dermatology.' },
          { icon: <MessageCircle size={32} className="text-[#ef2f6b]" />, title: 'Patient Care Workflows', text: 'SMS reminders, follow-up care instructions, and retention campaigns for long-term skin health.' },
        ],
      }}
      statsBlock={{
        heading: 'Results Our Dermatology Clinics Achieve',
        description: 'Measurable outcomes from practices we support.',
        stats: [
          { value: '42%+', label: 'Increase in dermatology consultation requests' },
          { value: '48%+', label: 'Improvement in new patient leads' },
          { value: '2.0x', label: 'Higher conversion rate from traffic' },
          { value: '32%+', label: 'Boost in follow-up appointment bookings' },
        ],
      }}
      processBlock={{
        sectionSubtitle: 'Our Partnership',
        sectionTitle: 'We Help You Build A Digital-First Dermatology Practice',
        sectionDescription: 'From patient education to treatment consultation and follow-up, our platform attracts informed patients. We specialize in explaining complex skin conditions, showcasing treatment options, and building patient loyalty.',
        mainImageSrc: '/assets/img/services-page/skin-clinics/process-main.jpg',
        mainImageAlt: 'Dermatology team',
        rightDescription: 'Every element is designed for patient education and trust-building. Clear condition explanations, treatment comparisons, and personalized care pathways make patients feel informed and confident.',
        cardTitle: 'Skin Solutions',
        cardText: 'Complete digital ecosystem for patient acquisition, education, and retention in dermatology.',
        cardImageSrc: '/assets/img/services-page/skin-clinics/process-side.jpg',
        cardImageAlt: 'Skin care treatment',
      }}
      infoBlock={{
        topTitle: 'DERMATOLOGY EXPERTISE',
        heading: 'We Understand The Unique Needs Of Skin Care Practices',
        leftTitle: 'Our Approach',
        leftText: 'Dermatology patients need education and reassurance. Whether seeking treatment for a condition or cosmetic skin enhancement, they need clear information about options and outcomes. Our platform provides exactly that — expert education, compassionate communication, and conversion-focused design.',
        centerImageSrc: '/assets/img/services-page/skin-clinics/info-center.jpg',
        centerImageAlt: 'Our dermatology approach',
        quote: 'Partner with us to build a digital presence that educates patients and drives consistent dermatology appointments.',
        features: ['HIPAA Compliance', 'Condition Education', 'Multi-Treatment Options'],
      }}
      faqBlock={{
        heading: 'Frequently Asked Questions',
        description: 'Common questions from dermatology clinics considering our platform.',
        faqs: faqData,
      }}
    />
  );
}
