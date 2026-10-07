// Single source of truth for site copy and contact details.
// Replace the placeholder phone numbers, emails and addresses before going live.

export const site = {
  name: "PalmGate",
  legalName: "PalmGate International FZC LLC",
  tagline: "ERP, CRM & Python engineering from Dubai",
  description:
    "PalmGate International builds ERP and CRM platforms, SharePoint solutions, Python backends and full-stack web products for growing businesses across the UAE and GCC.",
  url: "https://www.palmgateinternational.ae",
  email: "info@palmgateinternational.ae",
  social: {
    facebook: "https://www.facebook.com/palmgateinternational/",
    instagram: "https://www.instagram.com/palmgate_international/",
    linkedin: "https://www.linkedin.com/company/palmgate-international/",
  },
};

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "SAP Training", href: "#sap-training" },
  { label: "Why PalmGate", href: "#why" },
  { label: "Process", href: "#process" },
  { label: "Offices", href: "#offices" },
];

export type Office = {
  id: "dubai";
  label: string;
  city: string;
  country: string;
  role: string;
  address?: string[];
  mapUrl?: string;
  mapQuery?: string;
  phone: string;
  email: string;
  timeZone: string;
  utc: string;
};

export const offices: Office[] = [
  {
    id: "dubai",
    label: "Headquarters",
    city: "Dubai",
    country: "United Arab Emirates",
    role: "Client success, consulting & GCC delivery",
    address: ["PalmGate International FZC LLC", "Business Centre, Dubai", "United Arab Emirates"],
    mapUrl: "https://share.google/rd4QHNsUnSXfNBBhV",
    mapQuery: "PalmGate International FZC LLC, Dubai, United Arab Emirates",
    phone: "+971 55 884 5766",
    email: "info@palmgateinternational.ae",
    timeZone: "Asia/Dubai",
    utc: "GMT+4",
  },
];

export const gccMarkets = ["United Arab Emirates", "Saudi Arabia", "Qatar", "Oman", "Bahrain", "Kuwait"];

export const stats = [
  { value: "Dubai", label: "Headquarters", detail: "United Arab Emirates" },
  { value: String(gccMarkets.length), label: "GCC markets", detail: "Served from Dubai" },
  { value: "24/7", label: "Support coverage", detail: "SLA-backed" },
  { value: "100%", label: "Code ownership", detail: "Your IP, always" },
];

export const techStack = [
  "Python",
  "Django",
  "FastAPI",
  "Next.js",
  "React",
  "Tailwind CSS",
  "TypeScript",
  "PostgreSQL",
  "Odoo",
  "ERPNext",
  "SharePoint",
  "Microsoft 365",
  "Power Automate",
  "AWS",
  "Azure",
  "Docker",
  "Redis",
  "OpenAI",
];

export const services = [
  {
    id: "erp",
    title: "ERP Software",
    summary:
      "Finance, inventory, procurement, HR and payroll in one system. We implement, customise and migrate ERP for trading, retail and manufacturing businesses.",
    points: ["UAE VAT (FTA) ready", "Multi-company, multi-currency", "Odoo, ERPNext or custom-built"],
  },
  {
    id: "crm",
    title: "CRM Software",
    summary:
      "Capture every lead, automate follow-ups and give your sales team one live pipeline, connected to WhatsApp, email and your website.",
    points: ["Lead scoring & pipelines", "WhatsApp & email automation", "Sales dashboards & forecasting"],
  },
  {
    id: "sharepoint",
    title: "SharePoint & Microsoft 365",
    summary:
      "Modern intranets, document management and approval workflows on SharePoint, Teams and Power Automate, secured for enterprise use.",
    points: ["Intranet & document portals", "Power Automate workflows", "Migration from file servers"],
  },
  {
    id: "python",
    title: "Python Development",
    summary:
      "Robust backends, REST APIs, integrations and data pipelines built with Django and FastAPI, designed to scale with your business.",
    points: ["Django & FastAPI backends", "Third-party integrations", "Data pipelines & reporting"],
  },
  {
    id: "fullstack",
    title: "Full-Stack Development",
    summary:
      "Fast, beautiful web apps and SaaS products with Next.js, React and Tailwind CSS on the front, Python on the back, deployed to the cloud.",
    points: ["Next.js & Tailwind front-ends", "SaaS & customer portals", "Cloud deployment & DevOps"],
  },
  {
    id: "ai",
    title: "AI & Automation",
    summary:
      "Put AI to work: chatbots that know your business, document extraction, and automations that remove repetitive work from your team.",
    points: ["AI assistants & chatbots", "Invoice & document AI", "Process automation (RPA)"],
  },
] as const;

export type ServiceId = (typeof services)[number]["id"];

export const solutions = [
  {
    id: "erp",
    tab: "ERP",
    title: "One ERP that runs your entire operation",
    body: "Replace disconnected spreadsheets and legacy tools with an ERP shaped around how you actually work, from the warehouse floor to the boardroom.",
    features: [
      "Accounting with UAE VAT (FTA) returns",
      "Inventory, warehousing & barcode scanning",
      "Purchase, sales & multi-branch POS",
      "HR, attendance & WPS-compliant payroll",
      "Manufacturing, BOM & job costing",
      "Real-time management dashboards",
    ],
  },
  {
    id: "crm",
    tab: "CRM",
    title: "A CRM your sales team will actually use",
    body: "Every enquiry from your website, WhatsApp, calls and walk-ins lands in one pipeline, with automated reminders, quotations and performance reports.",
    features: [
      "Omnichannel lead capture",
      "Drag-and-drop deal pipelines",
      "Quotations & invoice generation",
      "WhatsApp Business & email integration",
      "Team targets, commissions & leaderboards",
      "Customer portals & support tickets",
    ],
  },
  {
    id: "python",
    tab: "Python",
    title: "Python backends engineered for scale",
    body: "We build secure, well-tested APIs and services in Python that power your apps, connect your systems and turn your data into decisions.",
    features: [
      "REST & GraphQL APIs with FastAPI / Django",
      "Payment gateway & banking integrations",
      "ETL pipelines & scheduled jobs",
      "AI / LLM features with your own data",
      "Automated testing & CI/CD",
      "Cloud-native on AWS & Azure",
    ],
  },
  {
    id: "fullstack",
    tab: "Full-Stack",
    title: "Web products that feel fast and look premium",
    body: "From marketing sites to complex SaaS dashboards, we design and ship pixel-perfect interfaces with Next.js and Tailwind CSS, backed by solid engineering.",
    features: [
      "Next.js, React & TypeScript",
      "Tailwind CSS design systems",
      "Arabic / English with RTL support",
      "SEO, performance & accessibility",
      "Admin panels & customer portals",
      "Ongoing support & feature releases",
    ],
  },
] as const;

export type SolutionId = (typeof solutions)[number]["id"];

export const processSteps = [
  {
    title: "Discover",
    body: "Workshops with your team to map processes, pain points and goals. You get a clear scope, timeline and fixed quote.",
  },
  {
    title: "Design",
    body: "Solution architecture, data model and clickable UI prototypes, reviewed and approved before any code is written.",
  },
  {
    title: "Build",
    body: "Two-week agile sprints with live demos. Your consultants and engineers work as one team.",
  },
  {
    title: "Launch",
    body: "Data migration, user training and a smooth go-live with on-site or remote hyper-care support.",
  },
  {
    title: "Support & Scale",
    body: "SLA-backed support, monitoring and continuous improvements as your business grows.",
  },
];

export const industries = [
  "Trading & Distribution",
  "Retail & E-commerce",
  "Manufacturing",
  "Real Estate",
  "Healthcare",
  "Logistics & Freight",
  "Education",
  "Hospitality",
];
