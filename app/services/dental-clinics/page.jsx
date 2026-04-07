'use client';

import ServiceLandingLayout from '@/app/components/ServiceLandingLayout';
import {
  CalendarCheck,
  Users,
  Repeat,
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
        subtitle: 'Dental Clinics',
        title: 'Fill your chairs with',
        highlight: 'a predictable flow of high-quality patients.',
        description: 'We partner with dental clinics to build scalable patient acquisition systems that increase bookings, reduce no-shows, and drive consistent monthly revenue.',
        primaryAction: { label: 'Our Service', href: '/services' },
        secondaryAction: { label: 'See Pricing', href: '/pricing' },
        emergencyPhone: '+62 123 456 789',
        imageSrc: '/assets/img/services-page/moving/hero-placeholder.png',
        imageAlt: 'Dental service hero',
      }}
      aboutBlock={{
        smallTitle: 'About Us',
        title: "CORE POSITIONING",
        description: 'Healthcare businesses don’t struggle because of a lack of marketing—they struggle because they lack a connected growth system. We operate as a long-term growth partner, designing and implementing end-to-end systems that manage your entire patient journey—from first search to confirmed booking and beyond. Our focus is simple: consistent patient acquisition and measurable revenue growth.',
        imageSrc: '/assets/img/services-page/moving/about-image.jpg',
        imageAlt: 'Dental practice about',
      }}
      featureBlock={{
        heading: 'Our Approach',
        description: 'We build and optimise three core growth engines inside your practice:',
        features: [
          {
            icon: <Users size={32} className="text-[#ef2f6b]" />,
            title: 'Patient Acquisition',
            text: 'We position your clinic where high-intent patients are already searching through: Google search optimisation, Paid advertising campaigns, Local visibility strategies.',
          },
          {
            icon: <CalendarCheck size={32} className="text-[#ef2f6b]" />,
            title: 'Conversion Systems',
            text: 'We turn enquiries into booked appointments by improving: website and landing page performance, call handling and enquiry response, automated follow-ups and reminders.',
          },
          {
            icon: <Repeat size={32} className="text-[#ef2f6b]" />,
            title: 'Retention & Reactivation',
            text: 'We help you maximise patient lifetime value through: recall systems, reactivation campaigns, ongoing engagement strategies.',
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
