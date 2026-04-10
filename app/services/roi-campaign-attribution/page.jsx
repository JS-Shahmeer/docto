import ServicePageLayout from "@/app/components/ServicePageLayout";
import ProcessSectionServicesSix from "@/app/components/ProcessSectionServicesSix";
import {
  BadgeDollarSign,
  ChartPie,
  LineChart,
  MousePointerClick,
  ScanLine,
  Target,
} from "lucide-react";

export default function RoiCampaignAttributionPage() {
  return (
    <ServicePageLayout
      category="Intelligence Dashboard"
      titleTop="Know Exactly"
      titleMain="What’s Driving "
      titleBottom="Your Revenue"
      intro="Stop guessing which campaigns work. We connect every booking and patient back to the source that generated it — so you can scale profitably."
      primaryCtaText=" GET A FREE ROI AUDIT"
      primaryCtaLink="/contact"
      heroImage="/assets/img/inner-pages/roi-campaign-attribution/001.webp"
      heroImageAlt="ROI campaign attribution for clinics"
      sectionTwoTitle="You’re investing in marketing — but flying blind on ROI"
      sectionTwoTextOne="Most clinics don’t know:

Which campaigns generate revenue,
Which channels waste budget,
Where to scale safely

This leads to poor allocation and stalled growth."
      sectionTwoTextTwo="We install your Revenue Attribution System — linking every dollar spent to real outcomes."
      sectionTwoImage="/assets/img/inner-pages/roi-campaign-attribution/002.webp"
      sectionTwoImageAlt="Clinic marketing ROI attribution"
      featureCards={[
        {
          icon: <BadgeDollarSign size={28} />,
          title: "Revenue-Level Attribution",
          text: "Track bookings and treatments back to campaigns.",
        },
        {
          icon: <ScanLine size={28} />,
          title: "True ROI Clarity",
          text: "Measure profit — not just leads.",
        },
        {
          icon: <Target size={28} />,
          title: "Cross-Channel Intelligence ",
          text: "See performance across all platforms in one view.",
        },
      ]}
      valueTitle="Turn marketing into a predictable investment — not a risk"
      valueTextOne="When you know what drives revenue:

You scale winning campaigns,
You eliminate wasted spend,
You grow with confidence"
      valueTextTwo="Result:

Higher ROI,
Smarter budget allocation,
Predictable growth"
      valueImage="/assets/img/inner-pages/roi-campaign-attribution/003.webp"
      valueImageAlt="Clinic campaign ROI tracking"
      consultationText="Do you know which campaign is actually making you money? "
      buildTitle="What We Help Build"
      buildItems={[
        "Campaign attribution systems",
        "ROI visibility frameworks",
        "Lead-to-channel tracking",
        "Marketing outcome reporting",
        "Budget decision support insights",
        "Conversion source analysis",
        "Performance-based campaign measurement",
        "Return-focused reporting foundations",
      ]}
      buildImage="/assets/img/inner-pages/roi-campaign-attribution/004.webp"
      buildImageAlt="ROI attribution system build"
      quoteText="The more clearly you can attribute results, the more confidently you can scale your growth."
      relatedServices={[
        {
          icon: <LineChart size={26} />,
          title: "Lead Tracking & Conversion Insights",
          text: "Understand how lead quality and pipeline movement connect back to campaign sources.",
        },
        {
          icon: <ChartPie size={26} />,
          title: "Conversion Tracking & Analytics",
          text: "Track the actions that help campaign attribution become more accurate and useful.",
        },
        {
          icon: <MousePointerClick size={26} />,
          title: "Realtime Performance Dashboard",
          text: "Monitor attribution and performance signals in one clear reporting environment.",
        },
      ]}
      faqs={[
        {
          q: "What is ROI campaign attribution?",
          a: "It is the process of connecting marketing efforts to the enquiries, bookings, and outcomes they help generate.",
        },
        {
          q: "Why is attribution important for clinics?",
          a: "It helps clinics understand which channels are producing real returns so marketing spend can be used more effectively.",
        },
        {
          q: "Does this only apply to paid ads?",
          a: "No, attribution can help across multiple channels including ads, SEO, referrals, and other lead sources.",
        },
        {
          q: "Can attribution improve marketing decisions?",
          a: "Yes, clearer attribution helps clinics reduce wasted spend and focus on what is actually working.",
        },
      ]}
     finalCtaSubtitle="Scale What Works. Cut What Doesn’t."
      processComponent={<ProcessSectionServicesSix />}
    />
  );
}