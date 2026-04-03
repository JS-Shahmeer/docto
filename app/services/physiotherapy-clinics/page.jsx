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
  { q: 'How fast can we launch a physiotherapy clinic website?', a: 'Standard builds can go live in 4–6 weeks with health-focused UX, mobile-first performance, and core SEO implemented from day 1.' },
  { q: 'Can you integrate our physiotherapy practice management system?', a: 'Yes. We can integrate major providers and custom APIs so you keep appointments in one dashboard without double data entry.' },
  { q: 'Do these pages run fast on mobile?', a: 'Absolutely. Tailwind-based responsive rendering and image optimizations minimize load time and deliver high Core Web Vitals scores.' },
  { q: 'Will the design work for multiple service pages?', a: 'Yes — the layout uses reusable sections; you can swap titles, text, icons, and CTAs for each physiotherapy specialty.' },
  { q: 'Is there a support/maintenance option?', a: 'We provide monthly support plans for content updates, performance monitoring, A/B tests, and security patches.' },
  { q: 'Can we update the page content from admin?', a: 'We can add a content CMS integration (e.g., Sanity, Contentful, Strapi) if required for non-technical editing.' },
];

export default function PhysiotherapyClinicsServicePage() {
  return (
    <ServiceLandingLayout
      hero={{
        subtitle: 'Physiotherapy Clinic',
        title: 'Welcome To Our',
        highlight: 'Movement & Rehabilitation Center',
        description: 'Expert physiotherapy and rehabilitation services that restore movement and reduce pain. Our digital platform connects you with patients seeking recovery and wellness solutions.',
        primaryAction: { label: 'Our Service', href: '/services' },
        secondaryAction: { label: 'See Pricing', href: '/pricing' },
        emergencyPhone: '+62 123 456 789',
        imageSrc: '/assets/img/services-page/physiotherapy-clinics/hero-placeholder.png',
        imageAlt: 'Physiotherapy clinic hero',
      }}
      aboutBlock={{
        smallTitle: 'About Us',
        title: "We Help Physiotherapy Clinics Attract More Recovery-Focused Patients",
        description: 'Specialized digital solutions for physiotherapy practices. From sports injuries to post-operative rehabilitation, we help you reach and educate patients seeking evidence-based recovery.',
        attributes: [
          { title: 'Physiotherapy SEO', text: 'Rank for searches like "physiotherapist near me" and specific conditions' },
          { title: 'Patient Education', text: 'Build trust with detailed exercise guides and recovery pathway visualization' },
        ],
        imageSrc: '/assets/img/services-page/physiotherapy-clinics/about-image.jpg',
        imageAlt: 'Physiotherapy about image',
      }}
      featureBlock={{
        heading: 'What We Do for Physiotherapy Clinics',
        description: 'Strategic rehabilitation marketing for movement excellence.',
        features: [
          { icon: <ShieldCheck size={32} className="text-[#ef2f6b]" />, title: 'Medical Compliance', text: 'HIPAA-compliant design, secure patient health data, and medical-grade security.' },
          { icon: <CalendarCheck size={32} className="text-[#ef2f6b]" />, title: 'Recovery Booking Funnel', text: 'Streamlined appointment booking for initial assessments and follow-up rehabilitation sessions.' },
          { icon: <Users size={32} className="text-[#ef2f6b]" />, title: 'Local Physiotherapy Growth', text: 'SEO, local listings, and targeted campaigns to attract patients seeking rehabilitation services.' },
          { icon: <Award size={32} className="text-[#ef2f6b]" />, title: 'Treatment Transparency', text: 'Showcase your credentials, specialties, and treatment methodologies to build patient confidence.' },
          { icon: <Check size={32} className="text-[#ef2f6b]" />, title: 'Condition-Based Pages', text: 'Dedicated pages for sports injuries, post-operative rehab, chronic pain, and mobility restoration.' },
          { icon: <MessageCircle size={32} className="text-[#ef2f6b]" />, title: 'Patient Progress Tracking', text: 'SMS/email workflows for appointment reminders, exercise guidance, and progress celebration.' },
        ],
      }}
      statsBlock={{
        heading: 'Results Our Physiotherapy Clinics Achieve',
        description: 'Proven metrics from rehabilitation practices we support.',
        stats: [
          { value: '40%+', label: 'Increase in initial consultation bookings' },
          { value: '45%+', label: 'Improvement in recovery-focused leads' },
          { value: '1.9x', label: 'Higher conversion rate from traffic' },
          { value: '38%+', label: 'Boost in repeat/follow-up bookings' },
        ],
      }}
      processBlock={{
        sectionSubtitle: 'Our Partnership',
        sectionTitle: 'We Help You Build A Digital-First Physiotherapy Practice',
        sectionDescription: 'From initial injury assessment to recovery milestones and wellness maintenance, our platform attracts committed patients. We specialize in explaining recovery pathways, building trust, and driving patient adherence.',
        mainImageSrc: '/assets/img/services-page/physiotherapy-clinics/process-main.jpg',
        mainImageAlt: 'Physiotherapy assessment',
        rightDescription: 'Every element supports the recovery journey. Clear condition explanations, treatment timelines, exercise libraries, and progress tracking create a complete digital rehabilitation ecosystem.',
        cardTitle: 'Recovery Excellence',
        cardText: 'Complete digital ecosystem for patient acquisition, education, and retention in physiotherapy.',
        cardImageSrc: '/assets/img/services-page/physiotherapy-clinics/process-side.jpg',
        cardImageAlt: 'Recovery treatment',
      }}
      infoBlock={{
        topTitle: 'REHABILITATION EXPERTISE',
        heading: 'We Understand The Needs Of Physiotherapy Practices',
        leftTitle: 'Our Approach',
        leftText: 'Physiotherapy patients are motivated by specific recovery goals. Whether recovering from injury, surgery, or chronic pain, they need reassurance about the recovery pathway and confidence in your expertise. Our platform delivers evidence-based communication, progress visualization, and outcome-focused messaging.',
        centerImageSrc: '/assets/img/services-page/physiotherapy-clinics/info-center.jpg',
        centerImageAlt: 'Our rehabilitation approach',
        quote: 'Partner with us to build a digital presence that inspires patient confidence and drives recovery-focused appointments.',
        features: ['HIPAA Compliance', 'Recovery Pathways', 'Progress Tracking'],
      }}
      faqBlock={{
        heading: 'Frequently Asked Questions',
        description: 'Common questions from physiotherapy clinics considering our platform.',
        faqs: faqData,
      }}
    />
  );
}
