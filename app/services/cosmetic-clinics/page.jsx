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
  { q: 'How fast can we launch a cosmetic clinic website?', a: 'Standard builds can go live in 4–6 weeks with stunning UX, mobile-first performance, and core SEO implemented from day 1.' },
  { q: 'Can you integrate our cosmetic booking system?', a: 'Yes. We can integrate major providers and custom APIs so you keep consultations in one dashboard without double data entry.' },
  { q: 'Do these pages run fast on mobile?', a: 'Absolutely. Tailwind-based responsive rendering and image optimizations minimize load time and deliver high Core Web Vitals scores.' },
  { q: 'Will the design work for multiple service pages?', a: 'Yes — the layout uses reusable sections; you can swap titles, text, icons, and CTAs for each cosmetic service.' },
  { q: 'Is there a support/maintenance option?', a: 'We provide monthly support plans for content updates, performance monitoring, A/B tests, and security patches.' },
  { q: 'Can we update the page content from admin?', a: 'We can add a content CMS integration (e.g., Sanity, Contentful, Strapi) if required for non-technical editing.' },
];

export default function CosmeticClinicsServicePage() {
  return (
    <ServiceLandingLayout
      hero={{
        subtitle: 'Cosmetic Clinic',
        title: 'Welcome To Your',
        highlight: 'Beauty Transformation',
        description: 'Showcase your cosmetic expertise to patients seeking aesthetic enhancement. Our luxury-focused digital platform elevates your practice and drives high-value consultations.',
        primaryAction: { label: 'Our Service', href: '/services' },
        secondaryAction: { label: 'See Pricing', href: '/pricing' },
        emergencyPhone: '+62 123 456 789',
        imageSrc: '/assets/img/services-page/cosmetic-clinics/hero-placeholder.png',
        imageAlt: 'Cosmetic clinic hero',
      }}
      aboutBlock={{
        smallTitle: 'About Us',
        title: "We Help Cosmetic Clinics Attract Premium Aesthetic Patients",
        description: 'Luxury digital solutions designed for high-end cosmetic practices. From injectables to surgical procedures, we help you reach affluent, beauty-conscious clients.',
        attributes: [
          { title: 'Aesthetic SEO', text: 'Rank for searches like "Botox near me" and premium cosmetic treatments' },
          { title: 'Before & After Gallery', text: 'Showcase transformations with HIPAA-safe, high-impact visual storytelling' },
        ],
        imageSrc: '/assets/img/services-page/cosmetic-clinics/about-image.jpg',
        imageAlt: 'Cosmetic clinic about image',
      }}
      featureBlock={{
        heading: 'What We Do for Cosmetic Clinics',
        description: 'Premium digital marketing for aesthetic excellence.',
        features: [
          { icon: <ShieldCheck size={32} className="text-[#ef2f6b]" />, title: 'Privacy-First Design', text: 'Secure patient data, confidential consultations, and HIPAA compliance throughout.' },
          { icon: <CalendarCheck size={32} className="text-[#ef2f6b]" />, title: 'Luxury Consultation Funnel', text: 'High-touch booking experience that attracts and converts premium aesthetic patients.' },
          { icon: <Users size={32} className="text-[#ef2f6b]" />, title: 'Premium Patient Acquisition', text: 'Targeted campaigns to reach high-value demographics seeking cosmetic services.' },
          { icon: <Award size={32} className="text-[#ef2f6b]" />, title: 'Transformation Gallery', text: 'Showcase stunning before/after visuals with patient consent and full HIPAA compliance.' },
          { icon: <Check size={32} className="text-[#ef2f6b]" />, title: 'Treatment-Focused Pages', text: 'Dedicated pages for Botox, fillers, lasers, surgical procedures, and combination treatments.' },
          { icon: <MessageCircle size={32} className="text-[#ef2f6b]" />, title: 'VIP Patient Follow-Up', text: 'Personalized SMS/email workflows for consultations, results tracking, and repeat services.' },
        ],
      }}
      statsBlock={{
        heading: 'Results Our Cosmetic Clinics Achieve',
        description: 'Proven metrics from premium aesthetic practices.',
        stats: [
          { value: '52%+', label: 'Increase in cosmetic consultation bookings' },
          { value: '58%+', label: 'Improvement in high-value leads' },
          { value: '2.3x', label: 'Higher conversion rate from traffic' },
          { value: '40%+', label: 'Boost in repeat service inquiries' },
        ],
      }}
      processBlock={{
        sectionSubtitle: 'Our Commitment',
        sectionTitle: 'We Partner With You To Build A Luxury Digital Cosmetic Presence',
        sectionDescription: 'From initial inquiry to follow-up consultations, our platform helps you attract discerning patients. We specialize in showcasing your expertise, building trust, and driving premium consultation bookings.',
        mainImageSrc: '/assets/img/services-page/cosmetic-clinics/process-main.jpg',
        mainImageAlt: 'Cosmetic clinic process',
        rightDescription: 'Every element exudes luxury and professionalism. Crystal-clear treatment information, stunning visual galleries, and personalized communication create an upscale experience that converts.',
        cardTitle: 'Beauty Excellence',
        cardText: 'Complete digital ecosystem for premium patient acquisition, education, and retention in cosmetics.',
        cardImageSrc: '/assets/img/services-page/cosmetic-clinics/process-side.jpg',
        cardImageAlt: 'Cosmetic results',
      }}
      infoBlock={{
        topTitle: 'LUXURY EXPERTISE',
        heading: 'We Understand The Aesthetic & Premium Market',
        leftTitle: 'Our Approach',
        leftText: 'Cosmetic patients seek excellence, expertise, and discretion. They research extensively, compare providers, and expect a luxury experience from first click to final result. Our platform delivers all of that — professional, sophisticated, results-driven.',
        centerImageSrc: '/assets/img/services-page/cosmetic-clinics/info-center.jpg',
        centerImageAlt: 'Our approach',
        quote: 'Partner with us to showcase your cosmetic expertise and attract the premium patients your clinic deserves.',
        features: ['Luxury Design Aesthetic', 'Before/After Gallery', 'VIP Communication'],
      }}
      faqBlock={{
        heading: 'Frequently Asked Questions',
        description: 'Common questions from cosmetic clinics considering our platform.',
        faqs: faqData,
      }}
    />
  );
}
