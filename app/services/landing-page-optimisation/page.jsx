import ServicePageLayout from "@/app/components/ServicePageLayout";
import ProcessSectionServicesTwo from "@/app/components/ProcessSectionServicesTwo";
import {
  ArrowRightLeft,
  LayoutPanelTop,
  MousePointerClick,
  ShieldCheck,
  TrendingUp,
  Waypoints,
} from "lucide-react";

export default function LandingPageOptimisationPage() {
  return (
    <ServicePageLayout
      category=" HEALTH CLINIC GROWTH SYSTEM"
      titleTop="Turn Clicks Into Booked Patients"
      titleMain=" — Not Just Website Visitors"
      intro=" Getting traffic is only half the equation.
We design and optimise high-converting landing pages that turn ad clicks into real patient bookings — consistently and predictably.
"
      primaryCtaText="GET A FREE LANDING PAGE AUDIT"
      primaryCtaLink="/contact"
      heroImage="/assets/img/inner-pages/landing-page-optimisation/002.webp"
      heroImageAlt="Landing page optimisation for clinics"
      sectionTwoTitle="Most clinics don’t have a traffic problem — they have a conversion problem."
      sectionTwoTextOne="You’re running ads. You’re getting clicks. But patients aren’t booking. Why? Because they land on generic websites, slow pages, confusing layouts, and too many options — and then they leave."
      sectionTwoTextTwo="Landing page optimisation improves the structure, messaging, and flow of each page so more visitors trust your clinic and take the next step."
      sectionTwoImage="/assets/img/inner-pages/landing-page-optimisation/003.webp"
      sectionTwoImageAlt="Optimised landing page design for clinics"
      featureCards={[
        {
          icon: <LayoutPanelTop size={28} />,
          title: "Conversion-First Design",
          text: "Every element is built to guide the patient toward one action — booking.",
        },
        {
          icon: <MousePointerClick size={28} />,
          title: "Message Match & Clarity",
          text: "Your page aligns perfectly with your ads and search intent.",
        },
        {
          icon: <ShieldCheck size={28} />,
          title: "Trust & Authority Elements",
          text: " Patient testimonials, proof, and credibility signals that drive decisions.",
        },
      ]}
      valueTitle="More conversions — without increasing ad spend"
      valueTextOne="You don’t need more traffic — you need your existing traffic to convert better. We optimise your landing pages using proven conversion principles including clear above-the-fold messaging, strong CTAs, reduced friction, and trust signals."
      valueTextTwo="Visitors decide within seconds whether to stay or leave — and clarity is what drives action. The result is higher conversion rates, lower cost per patient, and more bookings from the same traffic."
      valueImage="/assets/img/inner-pages/landing-page-optimisation/004.webp"
      valueImageAlt="Clinic landing page improvements"
      consultationText="If you doubled your conversion rate — how many more patients would you have?"
      consultationButtonText="BOOK YOUR AUDIT"
      buildTitle="Built for clinics serious about conversion"
      buildItems={[
        "Clinics running ads but not getting bookings",
        "Clinics sending traffic to generic websites",
        "High cost per lead campaigns",
        "Clinics scaling paid ads",
        "Clinics wanting better ROI",
        "Clinics focused on measurable growth",
      ]}
      buildImage="/assets/img/inner-pages/landing-page-optimisation/001.webp"
      buildImageAlt="Optimised clinic landing page build"
      quoteText="More traffic won’t fix a page that doesn’t convert."
      quoteButtonText="GET YOUR FREE AUDIT"
      relatedServices={[
        {
          icon: <TrendingUp size={26} />,
          title: "Patient Acquisition Ads",
          text: "Make ad traffic work harder by sending it to pages built for conversion.",
        },
        {
          icon: <Waypoints size={26} />,
          title: "Conversion Tracking & Analytics",
          text: "Track what patients do on each page and identify where they drop off.",
        },
        {
          icon: <ArrowRightLeft size={26} />,
          title: "AI Lead Response System",
          text: "Follow up faster once landing page visitors turn into new leads.",
        },
      ]}
      faqs={[
        {
          q: "What is landing page optimisation?",
          a: "It is the process of improving page design, messaging, and structure to increase enquiries, bookings, and patient actions.",
        },
        {
          q: "Does this only help paid traffic?",
          a: "No, landing page optimisation helps any traffic source, including ads, SEO, and referral traffic.",
        },
        {
          q: "What usually makes a landing page underperform?",
          a: "Common issues include unclear messaging, weak calls to action, poor mobile layout, and a lack of trust signals.",
        },
        {
          q: "Can optimisation improve results without increasing traffic?",
          a: "Yes, improving your conversion rate often helps you generate more enquiries from the traffic you already have.",
        },
      ]}
  
      processComponent={<ProcessSectionServicesTwo />}

      finalCtaSubtitle="Ready to Turn More Clicks Into Patients?"
      finalCtaDescription="Stop losing high-intent traffic — and start converting it into consistent bookings."
      finalCtaButton1Text="Get Free Landing Page Audit"
      finalCtaButton1Link="/contact"
      finalCtaButton2Text="Book a Strategy Call"
      finalCtaButton2Link="https://calendly.com/digitalparadigm/product-strategy-call"
    />
  );
}
