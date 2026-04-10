import ServicePageLayout from "@/app/components/ServicePageLayout";
import ProcessSectionServicesSix from "@/app/components/ProcessSectionServicesSix";
import {
  Activity,
  Gauge,
  LayoutDashboard,
  MonitorSmartphone,
  TrendingUp,
  Zap,
} from "lucide-react";

export default function RealtimePerformanceDashboardPage() {
  return (
    <ServicePageLayout
      category="Intelligence Dashboard"
      titleTop="Realtime Performance"
      titleMain="Dashboard"
      titleBottom="for Clinics"
      intro="Monitor the metrics that matter most with a real-time dashboard that gives your clinic faster visibility into performance, enquiries, and growth trends."
      primaryCtaText="Book a Consultation"
      primaryCtaLink="/contact"
      heroImage="/assets/img/inner-pages/real-time-performance-dashboard/001.webp"
      heroImageAlt="Realtime performance dashboard for clinics"
      sectionTwoTitle="You can't scale what you can't see"
      sectionTwoTextOne="Most clinics operate on disconnected data.

Ads show clicks,
Reception tracks calls,
Software tracks bookings

But nothing connects."
      sectionTwoTextTwo="This leads to:

Poor decisions,
Wasted spend,
Missed growth opportunities.

We install your Real-Time Growth Dashboard — a single source of truth for your clinic's performance."
      sectionTwoImage="/assets/img/inner-pages/real-time-performance-dashboard/002.webp"
      sectionTwoImageAlt="Clinic realtime dashboard and metrics"
      featureCards={[
        {
          icon: <LayoutDashboard size={28} />,
          title: "Centralised Visibility",
          text: "See important clinic performance data in one clear and accessible dashboard.",
        },
        {
          icon: <Zap size={28} />,
          title: "Faster Decision-Making",
          text: "Respond more quickly to changes in enquiries, traffic, and campaign activity.",
        },
        {
          icon: <Gauge size={28} />,
          title: "Clearer Performance Monitoring",
          text: "Track the signals that help your clinic understand what is working in real time.",
        },
      ]}
      valueTitle="How Realtime Dashboards Support Growth"
      valueTextOne="Realtime dashboards help clinics reduce guesswork by making performance trends easier to monitor as they happen."
      valueTextTwo="They are especially valuable for teams that want quicker reporting, better visibility into growth channels, and a more proactive way to manage performance."
      valueImage="/assets/img/inner-pages/real-time-performance-dashboard/003.webp"
      valueImageAlt="Realtime clinic growth dashboard"
      consultationText="Do you actually know what’s driving your clinic’s growth right now?"
      buildTitle="What We Help Build"
      buildItems={[
        "Realtime performance dashboards",
        "Centralised reporting views",
        "Live enquiry monitoring",
        "Campaign performance visibility",
        "Patient growth tracking views",
        "Operational metric dashboards",
        "Decision-support reporting systems",
        "Performance monitoring foundations",
      ]}
      buildImage="/assets/img/inner-pages/real-time-performance-dashboard/004.webp"
      buildImageAlt="Clinic dashboard system build"
      quoteText="Clarity isn’t optional — it’s your growth advantage."
      relatedServices={[
        {
          icon: <TrendingUp size={26} />,
          title: "Lead Tracking & Conversion Insights",
          text: "Understand how leads are moving through your clinic pipeline over time.",
        },
        {
          icon: <Activity size={26} />,
          title: "ROI Campaign Attribution",
          text: "Connect live campaign activity with real business outcomes more clearly.",
        },
        {
          icon: <MonitorSmartphone size={26} />,
          title: "Patient Flow & Staff Insights",
          text: "Track operational patterns alongside growth and enquiry performance.",
        },
      ]}
      faqs={[
        {
          q: "What is a realtime performance dashboard?",
          a: "It is a dashboard that helps clinics monitor key metrics and performance activity as data updates over time.",
        },
        {
          q: "Why is real-time visibility useful?",
          a: "It helps clinics react faster, identify trends earlier, and make more informed decisions without waiting for delayed reports.",
        },
        {
          q: "Can this help both marketing and operations?",
          a: "Yes, realtime dashboards can support visibility across enquiries, campaigns, and operational performance.",
        },
        {
          q: "Is this only useful for larger clinics?",
          a: "No, clinics of all sizes can benefit from having clearer and faster access to important performance data.",
        },
      ]}
      finalCtaSubtitle="Ready to See — and Scale — What’s Actually Working?"
      finalCtaDescription=" Get full control over your clinic’s performance and make decisions backed by real data"
      processComponent={<ProcessSectionServicesSix />}
    />
  );
}
