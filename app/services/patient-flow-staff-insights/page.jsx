import ServicePageLayout from "@/app/components/ServicePageLayout";
import ProcessSectionServicesSix from "@/app/components/ProcessSectionServicesSix";
import {
  BriefcaseBusiness,
  ClipboardList,
  Hospital,
  LayoutList,
  Users,
  Workflow,
} from "lucide-react";

export default function PatientFlowStaffInsightsPage() {
  return (
    <ServicePageLayout
      category="Intelligence Dashboard"
      titleTop="Fix Bottlenecks."
      titleMain="Improve Efficiency."
      titleBottom="Increase Revenue."
      intro="More patients won’t fix a broken system. We give you full visibility into patient flow and team performance — so your clinic runs efficiently as it grows. "
      primaryCtaText=" GET A FREE OPERATIONS AUDIT"
      primaryCtaLink="/contact"
      heroImage="/assets/img/inner-pages/patient-flow-staff-insights/001.webp"
      heroImageAlt="Patient flow and staff insights for clinics"
      sectionTwoTitle="Growth breaks clinics without systems"
      sectionTwoTextOne="Most clinics struggle internally:

Missed calls,
Overloaded reception,
Inefficient scheduling,
Idle chair time

This limits growth — even with strong marketing."
      sectionTwoTextTwo="We install your Operational Insight System — so your clinic can handle growth without breaking."
      sectionTwoImage="/assets/img/inner-pages/patient-flow-staff-insights/002.webp"
      sectionTwoImageAlt="Clinic patient flow and staff reporting"
      featureCards={[
        {
          icon: <Workflow size={28} />,
          title: "Patient Journey Visibility",
          text: "Track movement from enquiry to treatment.",
        },
        {
          icon: <Users size={28} />,
          title: "Staff Performance Clarity",
          text: "Measure response times, productivity, and efficiency.",
        },
        {
          icon: <Hospital size={28} />,
          title: "Workflow Optimisation",
          text: "Identify and fix operational bottlenecks.",
        },
      ]}
      valueTitle="Efficiency is your growth multiplier"
      valueTextOne="When operations improve:

Patients move faster through your system,
Staff perform better,
Revenue per patient increases"
      valueTextTwo="Result:

Better patient experience,
Higher retention,
Increased profitability"
      valueImage="/assets/img/inner-pages/patient-flow-staff-insights/003.webp"
      valueImageAlt="Clinic operations and staff insights"
      consultationText="Is your clinic growing — or just getting busier?"
      buildTitle="What We Help Build"
      buildItems={[
        "Patient flow reporting systems",
        "Operational visibility dashboards",
        "Staff workload insight views",
        "Clinic bottleneck identification",
        "Service delivery reporting",
        "Workflow improvement insights",
        "Efficiency monitoring frameworks",
        "Team and process visibility tools",
      ]}
      buildImage="/assets/img/inner-pages/patient-flow-staff-insights/004.webp"
      buildImageAlt="Patient flow and staff insights system build"
      quoteText="When you understand how your clinic actually flows, it becomes easier to improve both efficiency and patient experience."
      relatedServices={[
        {
          icon: <LayoutList size={26} />,
          title: "Realtime Performance Dashboard",
          text: "Combine operational visibility with live performance monitoring in one place.",
        },
        {
          icon: <ClipboardList size={26} />,
          title: "Lead Tracking & Conversion Insights",
          text: "Connect patient acquisition insights with what happens operationally inside the clinic.",
        },
        {
          icon: <BriefcaseBusiness size={26} />,
          title: "No-Show Reduction Workflows",
          text: "Reduce scheduling friction and improve attendance with stronger patient communication systems.",
        },
      ]}
      faqs={[
        {
          q: "What are patient flow insights?",
          a: "They are insights that help clinics understand how patients move through appointments, processes, and service stages.",
        },
        {
          q: "Why do staff insights matter?",
          a: "They help reveal workload patterns, operational pressure points, and opportunities to improve team efficiency.",
        },
        {
          q: "Can this improve patient experience?",
          a: "Yes, smoother operations and better visibility often lead to a more consistent and less frustrating patient journey.",
        },
        {
          q: "Is this useful even for smaller clinics?",
          a: "Yes, even small clinics can benefit from clearer visibility into flow, workload, and operational bottlenecks.",
        },
      ]}
           finalCtaSubtitle="Run a Clinic That Scales — Not One That Struggles to Keep Up"
      processComponent={<ProcessSectionServicesSix />}
    />
  );
}