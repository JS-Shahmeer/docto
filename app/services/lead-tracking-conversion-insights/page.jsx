import ServicePageLayout from "@/app/components/ServicePageLayout";
import {
  ArrowRightLeft,
  ChartColumnIncreasing,
  Filter,
  SearchCheck,
  UsersRound,
  Waypoints,
} from "lucide-react";

export default function LeadTrackingConversionInsightsPage() {
  return (
    <ServicePageLayout
      category="Intelligence Dashboard"
      titleTop="Understand Why"
      titleMain="Patients Book — Not Just"
      titleBottom="Where They Come From"
      intro="Leads don’t grow your clinic. 
Conversions do. We track and analyse the entire patient journey — so you can increase bookings, not just enquiries. "
      primaryCtaText="GET A FREE INSIGHTS AUDIT"
      primaryCtaLink="/contact"
      heroImage="/assets/img/inner-pages/lead-tracking-conversion-insights/001.webp"
      heroImageAlt="Lead tracking and conversion insights for clinics"
      sectionTwoTitle="Leads are coming in… but revenue isn't scaling"
      sectionTwoTextOne="Most clinics track leads — but not what happens after.

Which leads convert?,
Which ones drop off?,
Why does one patient book and another doesn't?

Without these answers, growth stays inconsistent."
      sectionTwoTextTwo="We install your Conversion Insight System — so every decision is backed by real patient behaviour."
      sectionTwoImage="/assets/img/inner-pages/lead-tracking-conversion-insights/002.webp"
      sectionTwoImageAlt="Clinic lead tracking and conversions"
      featureCards={[
        {
          icon: <UsersRound size={28} />,
          title: "End-to-End Patient Journey Tracking ",
          text: "From first click to confirmed booking.",
        },
        {
          icon: <ArrowRightLeft size={28} />,
          title: "Conversion Behaviour Analysis",
          text: "Understand what drives patients to take action.",
        },
        {
          icon: <SearchCheck size={28} />,
          title: "Channel Quality Insights",
          text: "Identify which sources bring real patients — not just leads.",
        },
      ]}
      valueTitle="Increase conversions without increasing spend"
      valueTextOne="Most growth is lost between enquiry and booking.

We identify:

Where leads drop off,
What slows conversion,
What increases trust"
      valueTextTwo="Result:

Higher booking rates,
Better lead quality,
More revenue from existing traffic."
      valueImage="/assets/img/inner-pages/lead-tracking-conversion-insights/003.webp"
      valueImageAlt="Lead conversion tracking for clinics"
      consultationText="Do you know why your best leads convert?"
      buildTitle="What We Help Build"
      buildItems={[
        "Lead tracking systems",
        "Conversion journey mapping",
        "Patient enquiry stage visibility",
        "Lead source monitoring",
        "Drop-off point identification",
        "Conversion reporting improvements",
        "Pipeline insight dashboards",
        "Optimisation-focused lead analytics",
      ]}
      buildImage="/assets/img/inner-pages/lead-tracking-conversion-insights/004.webp"
      buildImageAlt="Lead tracking system build"
      quoteText="When you can see how leads move, it becomes much easier to improve how they convert."
      relatedServices={[
        {
          icon: <ChartColumnIncreasing size={26} />,
          title: "Conversion Tracking & Analytics",
          text: "Measure key patient actions and connect them to stronger growth decisions.",
        },
        {
          icon: <Waypoints size={26} />,
          title: "ROI Campaign Attribution",
          text: "Understand which channels are generating leads that actually convert.",
        },
        {
          icon: <Filter size={26} />,
          title: "Realtime Performance Dashboard",
          text: "Bring lead activity and conversion signals into one clear reporting view.",
        },
      ]}
      faqs={[
        {
          q: "What is lead tracking for clinics?",
          a: "It is the process of monitoring how patient enquiries enter your system and move toward booking or conversion.",
        },
        {
          q: "Why are conversion insights important?",
          a: "They help reveal where leads are progressing well and where your clinic may be losing opportunities.",
        },
        {
          q: "Can this improve marketing performance?",
          a: "Yes, better lead tracking helps you see which channels and workflows are driving stronger patient outcomes.",
        },
        {
          q: "Does this only help paid campaigns?",
          a: "No, it can support insights across ads, SEO, referrals, and other enquiry sources.",
        },
      ]}
      finalCtaSubtitle="Turn Every Lead Into a Measurable Opportunity"
    />
  );
}
