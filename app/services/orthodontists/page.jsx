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
  { q: 'How fast can we launch an orthodontic practice website?', a: 'Standard builds can go live in 4–6 weeks with polished UX, mobile-first performance, and core SEO implemented from day 1.' },
  { q: 'Can you integrate our orthodontic appointment system?', a: 'Yes. We can integrate major providers and custom APIs so you keep appointments in one dashboard without double data entry.' },
  { q: 'Do these pages run fast on mobile?', a: 'Absolutely. Tailwind-based responsive rendering and image optimizations minimize load time and deliver high Core Web Vitals scores.' },
  { q: 'Will the design work for multiple service pages?', a: 'Yes — the layout uses reusable sections; you can swap titles, text, icons, and CTAs for each service page.' },
  { q: 'Is there a support/maintenance option?', a: 'We provide monthly support plans for content updates, performance monitoring, A/B tests, and security patches.' },
  { q: 'Can we update the page content from admin?', a: 'We can add a content CMS integration (e.g., Sanity, Contentful, Strapi) if required for non-technical editing.' },
];

export default function OrthodontistsServicePage() {
  return (
    <ServiceLandingLayout
      hero={{
        subtitle: 'Orthodontic Practice',
        title: 'Welcome To Our',
        highlight: 'Orthodontic Excellence',
        description: 'Transform smiles with precision orthodontic care. Our digital-first platform connects you with patients seeking expert alignment and bite correction services.',
        primaryAction: { label: 'Our Service', href: '/services' },
        secondaryAction: { label: 'See Pricing', href: '/pricing' },
        emergencyPhone: '+62 123 456 789',
        imageSrc: '/assets/img/services-page/orthodontists/hero-placeholder.png',
        imageAlt: 'Orthodontic service hero',
      }}
      aboutBlock={{
        smallTitle: 'About Us',
        title: "We Help Orthodontic Practices Attract More Smile-Ready Patients",
        description: 'Expert digital solutions designed specifically for orthodontists. From clear aligner patients to traditional braces, we help you reach and convert the right audience.',
        attributes: [
          { title: 'Orthodontic SEO', text: 'Rank for searches like "braces near me" and "clear aligners"' },
          { title: 'Patient Education', text: 'Build trust with detailed treatment explainers and timeline visuals' },
        ],
        imageSrc: '/assets/img/services-page/orthodontists/about-image.jpg',
        imageAlt: 'Orthodontic about image',
      }}
      featureBlock={{
        heading: 'What We Do for Orthodontists',
        description: 'Strategic digital marketing built for alignment excellence.',
        features: [
          { icon: <ShieldCheck size={32} className="text-[#ef2f6b]" />, title: 'HIPAA-Compliant Design', text: 'Secure patient data, encrypted communications, and compliance at every touchpoint.' },
          { icon: <CalendarCheck size={32} className="text-[#ef2f6b]" />, title: 'Smart Consultation Booking', text: 'Streamlined free consultation funnels to convert interested patients into appointments.' },
          { icon: <Users size={32} className="text-[#ef2f6b]" />, title: 'Local Market Domination', text: 'SEO, local listings, and paid campaigns to capture nearby families and orthodontic seekers.' },
          { icon: <Award size={32} className="text-[#ef2f6b]" />, title: 'Social Proof & Before/After', text: 'Showcase smile transformations with HIPAA-safe galleries and patient testimonials.' },
          { icon: <Check size={32} className="text-[#ef2f6b]" />, title: 'Treatment-Specific Pages', text: 'Dedicated landing pages for traditional braces, clear aligners, and interceptive care.' },
          { icon: <MessageCircle size={32} className="text-[#ef2f6b]" />, title: 'Patient Retention Workflows', text: 'SMS/email reminders, progress updates, and retention campaigns to keep patients engaged.' },
        ],
      }}
      statsBlock={{
        heading: 'Results Our Orthodontists Achieve',
        description: 'Measurable outcomes from practices we support.',
        stats: [
          { value: '45%+', label: 'Increase in free consultation requests' },
          { value: '50%+', label: 'Improvement in new patient leads' },
          { value: '2.1x', label: 'Higher conversion rate from traffic' },
          { value: '35%+', label: 'Boost in online treatment inquiries' },
        ],
      }}
      processBlock={{
        sectionSubtitle: 'Our Commitment',
        sectionTitle: 'We Partner With You To Build A Digital-First Orthodontic Practice',
        sectionDescription: 'From initial consultation to treatment completion, our platform helps you attract, convert, and retain smile-conscious patients. We specialize in showcasing your expertise, building trust, and driving consistent growth.',
        mainImageSrc: '/assets/img/services-page/orthodontists/process-main.jpg',
        mainImageAlt: 'Orthodontic team in action',
        rightDescription: 'Every element is designed for the orthodontic journey — clear aligner education, braces explainers, and treatment timeline visualization. We make complex information simple, so patients choose you.',
        cardTitle: 'Smile Solutions',
        cardText: 'Complete digital ecosystem for patient acquisition, education, and retention in orthodontics.',
        cardImageSrc: '/assets/img/services-page/orthodontists/process-side.jpg',
        cardImageAlt: 'Smile transformation',
      }}
      infoBlock={{
        topTitle: 'PROVEN EXPERTISE',
        heading: 'We Understand The Unique Needs Of Orthodontic Practices',
        leftTitle: 'Our Approach',
        leftText: 'Orthodontics requires education and trust-building. Families need to understand treatment options, timelines, and costs before committing. Our digital-first strategy showcases your expertise, educates patients, and converts inquisitive visitors into appointments.',
        centerImageSrc: '/assets/img/services-page/orthodontists/info-center.jpg',
        centerImageAlt: 'Our approach',
        quote: 'Partner with us to build a digital presence that attracts smile-ready patients and keeps them engaged throughout treatment.',
        features: ['HIPAA Compliance', 'Treatment Explainers', 'Multi-Channel Campaigns'],
      }}
      faqBlock={{
        heading: 'Frequently Asked Questions',
        description: 'Common questions from orthodontists considering our platform.',
        faqs: faqData,
      }}
    />
  );
}
