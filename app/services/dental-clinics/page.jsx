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
  { q: 'How fast can we launch a patient acquisition page?', a: 'Standard builds can go live in 4–6 weeks with polished UX, mobile-first performance, and core SEO implemented from day 1.' },
  { q: 'Can you connect with our existing booking system?', a: 'Yes. We can integrate major providers and custom APIs so you keep appointments in one dashboard without double data entry.' },
  { q: 'Do these pages run fast on mobile?', a: 'Absolutely. Tailwind-based responsive rendering and image optimizations minimize load time and deliver high Core Web Vitals scores.' },
  { q: 'Will the design work for multiple service pages?', a: 'Yes — the layout uses reusable sections; you can swap titles, text, icons, and CTAs for each service page.' },
  { q: 'Is there a support/maintenance option?', a: 'We provide monthly support plans for content updates, performance monitoring, A/B tests, and security patches.' },
  { q: 'Can we update the page content from admin?', a: 'We can add a content CMS integration (e.g., Sanity, Contentful, Strapi) if required for non-technical editing.' },
];

export default function DentalClinicServicePage() {
  return (
    <ServiceLandingLayout
      hero={{
        subtitle: 'Dental Practice',
        title: 'Welcome To Our',
        highlight: 'Dental Excellence',
        description: 'Transform smiles with expert dental care. Our digital-first platform connects you with patients seeking comprehensive dental services, from preventive care to advanced restorations.',
        primaryAction: { label: 'Our Service', href: '/services' },
        secondaryAction: { label: 'See Pricing', href: '/pricing' },
        emergencyPhone: '+62 123 456 789',
        imageSrc: '/assets/img/services-page/moving/hero-placeholder.png',
        imageAlt: 'Dental service hero',
      }}
      aboutBlock={{
        smallTitle: 'About Us',
        title: "We Help Dental Practices Attract More Quality Patients",
        description: 'Expert digital solutions designed specifically for dental clinics. From routine cleanings to cosmetic dentistry, we help you reach and convert the right patient audience.',
        attributes: [
          { title: 'Dental SEO', text: 'Rank for searches like "dentist near me" and specific dental services' },
          { title: 'Treatment Education', text: 'Build patient trust with detailed procedure explainers and before/after galleries' },
        ],
        imageSrc: '/assets/img/services-page/moving/about-image.jpg',
        imageAlt: 'Dental practice about',
      }}
      featureBlock={{
        heading: 'What We Do for Dental Clinics',
        description: 'A proven structure built for the dental audience: from first impression to appointment confirmation.',
        features: [
          { icon: <ShieldCheck size={32} className="text-[#ef2f6b]" />, title: 'HIPAA-Aware UX', text: 'Secure forms, encrypted data flow, and compliance considerations at every step.' },
          { icon: <CalendarCheck size={32} className="text-[#ef2f6b]" />, title: 'Smart Booking Funnels', text: 'Simplified appointment flow with dynamic prompts, reminders, and conversion checkpoints.' },
          { icon: <Users size={32} className="text-[#ef2f6b]" />, title: 'Local Patient Acquisition', text: 'SEO, local listings, and paid campaigns to capture nearby patients and grow your practice.' },
          { icon: <Award size={32} className="text-[#ef2f6b]" />, title: 'Reputation Management', text: 'Automated review requests and social proof modules to build trust and retention.' },
          { icon: <Check size={32} className="text-[#ef2f6b]" />, title: 'Treatment-Focused Pages', text: 'Personalized landing pages for implants, orthodontics, cleaning, and cosmetic services.' },
          { icon: <MessageCircle size={32} className="text-[#ef2f6b]" />, title: 'Follow-up Automation', text: 'SMS/email workflows for confirmations, reminders, feedback and repeat visits.' },
        ],
      }}
      statsBlock={{
        heading: 'Performance Metrics You Can Expect',
        description: 'Delivered metrics from clinics we support — benchmark your growth with clear digital KPIs.',
        stats: [
          { value: '35%+', label: 'Increase in appointment requests' },
          { value: '40%+', label: 'Improvement in local leads' },
          { value: '1.8x', label: 'Higher conversion rate from traffic' },
          { value: '20%+', label: 'Lower bounce rate on mobile' },
        ],
      }}
      processBlock={{
        sectionSubtitle: 'Great Team Moving',
        sectionTitle: 'Our Team Of Experienced Movers Can Handle Every Aspect Of Your Move',
        sectionDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        mainImageSrc: '/assets/img/services-page/moving/process-main.jpg',
        mainImageAlt: 'Moving crew in action',
        rightDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        cardTitle: 'Best Choicing',
        cardText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        cardImageSrc: '/assets/img/services-page/moving/process-side.jpg',
        cardImageAlt: 'Moving equipment',
      }}
      infoBlock={{
        topTitle: 'WE ARE PROFESSIONALS',
        heading: 'At Our Moving Company, We Understand That Every Move Is Unique',
        leftTitle: 'Our Vision',
        leftText: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.',
        centerImageSrc: '/assets/img/services-page/moving/info-center.jpg',
        centerImageAlt: 'Our mission',
        quote: 'Lorem ipsum dolor sit amet consectetur labore et dolore',
        features: ['Insurance Included', 'Best Moving Transportation', '24 Hours Support'],
      }}
      faqBlock={{
        heading: 'Frequently Asked Questions',
        description: 'Common questions from clinic owners before their first project kickoff.',
        faqs: faqData,
      }}
    />
  );
}
