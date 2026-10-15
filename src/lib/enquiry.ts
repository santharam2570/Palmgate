import { site } from "./site";

// When the backend is live, set NEXT_PUBLIC_CONTACT_ENDPOINT to its URL; it receives each form as JSON.
// Until then, submissions open the user's mail app.
const ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

export async function sendEnquiry(subject: string, data: Record<string, string>) {
  if (!ENDPOINT) {
    const body = Object.entries(data)
      .filter(([, v]) => v)
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    return;
  }

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ subject, ...data }),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
}

export type EnquiryField = {
  name: string;
  label: string;
  kind: "text" | "number" | "select";
  options?: readonly string[];
  required?: boolean;
  placeholder?: string;
};

export type EnquiryAudience = "business" | "individual";

export type EnquiryType = {
  id: string;
  label: string;
  audience: EnquiryAudience;
  subject: string;
  fields: readonly EnquiryField[];
  messageLabel: string;
  messagePlaceholder: string;
};

const trainingAreas = [
  "SAP & ERP",
  "Information Technology",
  "Artificial Intelligence & emerging technologies",
  "Civil engineering",
  "Mechanical engineering",
  "Business, logistics & supply chain",
];

export const studyDestinationOptions = [
  "United Kingdom",
  "United States of America",
  "Canada",
  "Australia",
  "New Zealand",
  "Germany",
  "France",
  "Other European countries",
  "Singapore",
  "Malta",
  "Poland",
  "Not sure yet",
];

export const enquiryTypes = [
  {
    id: "hiring",
    label: "Submit hiring requirements",
    audience: "business",
    subject: "Hiring requirements",
    fields: [
      { name: "roles", label: "Roles you are hiring for", kind: "text", required: true, placeholder: "e.g. SAP MM consultant, site engineers" },
      { name: "positions", label: "Number of positions", kind: "number", placeholder: "e.g. 5" },
      {
        name: "sourcing",
        label: "Preferred talent source",
        kind: "select",
        options: ["Candidates within the UAE", "International sourcing (incl. India)", "Open to both"],
      },
    ],
    messageLabel: "Job requirements",
    messagePlaceholder: "Experience, salary range, location and hiring timeline",
  },
  {
    id: "staffing",
    label: "Request staffing support",
    audience: "business",
    subject: "Staffing support request",
    fields: [
      {
        name: "model",
        label: "Staffing model",
        kind: "select",
        required: true,
        options: [
          "Permanent recruitment",
          "Contract staffing",
          "Temporary staffing",
          "Project-based staffing",
          "Bulk recruitment",
          "Executive & specialist recruitment",
          "Technical staffing",
          "Workforce ramp-up",
          "Not sure yet",
        ],
      },
      { name: "headcount", label: "Headcount required", kind: "number", placeholder: "e.g. 20" },
    ],
    messageLabel: "Workforce requirements",
    messagePlaceholder: "Roles, duration, location and when you need people to start",
  },
  {
    id: "project",
    label: "Discuss an IT project",
    audience: "business",
    subject: "IT project enquiry",
    fields: [
      {
        name: "area",
        label: "Service area",
        kind: "select",
        required: true,
        options: [
          "ERP implementation & enterprise solutions",
          "SAP project services",
          "Web development & digital solutions",
          "Digital marketing & online growth",
          "Other",
        ],
      },
    ],
    messageLabel: "Project scope",
    messagePlaceholder: "Tell us about the project, current systems and timeline",
  },
  {
    id: "outsourcing",
    label: "Outsource a business process",
    audience: "business",
    subject: "Business process outsourcing enquiry",
    fields: [
      {
        name: "process",
        label: "Process to outsource",
        kind: "select",
        required: true,
        options: [
          "Medical coding & healthcare processes",
          "Logistics & supply chain",
          "Data entry & back-office administration",
          "Customer service support",
          "Finance & accounting processes",
          "Recruitment process support",
          "Other",
        ],
      },
    ],
    messageLabel: "Process details",
    messagePlaceholder: "Volumes, turnaround times and quality or reporting expectations",
  },
  {
    id: "resources",
    label: "Request technical resources",
    audience: "business",
    subject: "Technical resources request",
    fields: [
      {
        name: "resource",
        label: "Resource type",
        kind: "select",
        required: true,
        options: [
          "SAP consultants",
          "Software developers",
          "Web developers",
          "Data analysts",
          "AI specialists",
          "Testers",
          "Business analysts",
          "IT support professionals",
          "Project coordinators",
        ],
      },
      { name: "engagement", label: "Engagement model", kind: "select", options: ["Project-based", "Dedicated resource", "Not sure yet"] },
    ],
    messageLabel: "Resource requirements",
    messagePlaceholder: "Skills, number of resources, duration and start date",
  },
  {
    id: "corporate-training",
    label: "Request corporate training",
    audience: "business",
    subject: "Corporate training request",
    fields: [
      { name: "area", label: "Training area", kind: "select", required: true, options: [...trainingAreas, "Onboarding or professional development"] },
      { name: "participants", label: "Number of participants", kind: "number", placeholder: "e.g. 12" },
      { name: "delivery", label: "Preferred delivery", kind: "select", options: ["On-site", "Online", "Blended", "Not sure yet"] },
    ],
    messageLabel: "Training requirements",
    messagePlaceholder: "Teams involved, skill gaps and objectives",
  },
  {
    id: "course",
    label: "Course enquiry",
    audience: "individual",
    subject: "Course enquiry",
    fields: [
      { name: "area", label: "Course area", kind: "select", required: true, options: trainingAreas },
      {
        name: "background",
        label: "Your background",
        kind: "select",
        options: ["Student / fresh graduate", "Working professional", "Changing careers", "Other"],
      },
    ],
    messageLabel: "Your question",
    messagePlaceholder: "Which course interests you? Ask about eligibility, schedules or fees",
  },
  {
    id: "study",
    label: "Book an education consultation",
    audience: "individual",
    subject: "Study abroad consultation",
    fields: [
      { name: "destination", label: "Preferred destination", kind: "select", required: true, options: studyDestinationOptions },
      { name: "level", label: "Study level", kind: "select", options: ["Undergraduate", "Postgraduate", "Other"] },
      { name: "qualification", label: "Highest qualification", kind: "text", placeholder: "e.g. Grade 12, Bachelor of Commerce" },
    ],
    messageLabel: "Your goals",
    messagePlaceholder: "Preferred course, intake, budget and anything else we should know",
  },
  {
    id: "general",
    label: "General enquiry",
    audience: "business",
    subject: "General enquiry",
    fields: [],
    messageLabel: "How can we help?",
    messagePlaceholder: "Tell us what you need and we will identify the right service",
  },
] as const satisfies readonly EnquiryType[];

export type EnquiryTypeId = (typeof enquiryTypes)[number]["id"];
