// Copy and fees for the featured SAP programmes.
// Fees and schedules are placeholders: confirm them before going live.

export const sapTracks = [
  {
    id: "fico",
    tab: "FICO",
    title: "SAP S/4HANA Finance (FICO)",
    level: "Beginner to consultant",
    audience: "Commerce graduates, accountants and finance professionals moving into SAP consulting.",
    summary:
      "Configure SAP Financial Accounting and Controlling end to end on S/4HANA, from enterprise structure and the Universal Journal to period-end close and UAE VAT.",
    fees: { aed: 4950 },
    certification: "Prepares you for the SAP Certified Associate exam in S/4HANA Financial Accounting.",
    outcomes: [
      "Configure a company code from scratch",
      "Run AP, AR and automatic payments",
      "Set up UAE VAT and tax reporting",
      "Build cost and profit centre reporting",
      "Handle month-end and year-end close",
      "Deliver a full FICO implementation project",
    ],
    syllabus: [
      {
        title: "SAP & S/4HANA foundations",
        hours: 10,
        topics: ["ERP and SAP landscape overview", "SAP GUI and Fiori launchpad navigation", "Enterprise structure in Finance", "Universal Journal (ACDOCA) explained"],
      },
      {
        title: "General Ledger configuration",
        hours: 18,
        topics: ["Company code, fiscal year and posting periods", "Chart of accounts and G/L master data", "Document types, number ranges and field status", "Ledgers, currencies and tolerance groups"],
      },
      {
        title: "Accounts Payable & Receivable",
        hours: 18,
        topics: ["Suppliers and customers as Business Partners", "Invoices, credit memos and down payments", "Automatic payment program", "Dunning and customer correspondence"],
      },
      {
        title: "Asset Accounting",
        hours: 14,
        topics: ["Chart of depreciation and asset classes", "Acquisitions, transfers and retirements", "Depreciation runs", "Asset year-end closing"],
      },
      {
        title: "Banking & taxes",
        hours: 12,
        topics: ["House banks and electronic bank statements", "UAE VAT configuration and returns", "Corporate tax and withholding tax", "Cash management basics"],
      },
      {
        title: "Controlling (CO)",
        hours: 20,
        topics: ["Cost elements and cost centre accounting", "Profit centre accounting", "Internal orders and settlement", "Assessments, distributions and margin analysis"],
      },
      {
        title: "Integration & period-end close",
        hours: 14,
        topics: ["MM-FI integration (automatic account determination)", "SD-FI integration (revenue account determination)", "Month-end and year-end closing", "Financial statements and reporting"],
      },
      {
        title: "Capstone project & career prep",
        hours: 14,
        topics: ["End-to-end implementation case study", "Blueprint, configuration and testing documents", "Certification mock exams", "Resume review and mock interviews"],
      },
    ],
  },
  {
    id: "mm",
    tab: "MM",
    title: "SAP S/4HANA Sourcing & Procurement (MM)",
    level: "Beginner to consultant",
    audience: "Purchasing, stores and supply chain professionals, and engineering or commerce graduates.",
    summary:
      "Master procurement and inventory in SAP S/4HANA: purchasing, goods movements, valuation, invoice verification and MRP, with the integration points every MM consultant is asked about.",
    fees: { aed: 4450 },
    certification: "Prepares you for the SAP Certified Associate exam in S/4HANA Sourcing and Procurement.",
    outcomes: [
      "Configure the procure-to-pay cycle",
      "Set up release strategies for approvals",
      "Manage inventory and stock transfers",
      "Configure valuation and account determination",
      "Run invoice verification and GR/IR clearing",
      "Plan materials with MRP Live",
    ],
    syllabus: [
      {
        title: "SAP & S/4HANA foundations",
        hours: 8,
        topics: ["ERP and SAP landscape overview", "Fiori launchpad navigation", "Logistics enterprise structure", "Plants, storage locations and purchasing organisations"],
      },
      {
        title: "Master data",
        hours: 12,
        topics: ["Material master views", "Suppliers as Business Partners", "Purchasing info records", "Source lists and quota arrangements"],
      },
      {
        title: "Purchasing",
        hours: 18,
        topics: ["Purchase requisitions, RFQs and quotations", "Purchase orders and document types", "Contracts and scheduling agreements", "Release strategies and approvals"],
      },
      {
        title: "Inventory management",
        hours: 16,
        topics: ["Goods receipts, issues and movement types", "Stock transfers between plants", "Physical inventory", "Special stocks: consignment and subcontracting"],
      },
      {
        title: "Valuation & account determination",
        hours: 12,
        topics: ["Valuation areas and price control", "Split valuation", "Automatic account determination (OBYC)", "Material ledger overview"],
      },
      {
        title: "Logistics invoice verification",
        hours: 10,
        topics: ["Three-way match", "GR/IR clearing", "Tolerances and blocked invoices", "Credit memos and subsequent debits"],
      },
      {
        title: "MRP & integration",
        hours: 12,
        topics: ["Consumption-based planning", "MRP Live on S/4HANA", "Integration with FI, SD and PP", "Procurement analytics in Fiori"],
      },
      {
        title: "Capstone project & career prep",
        hours: 12,
        topics: ["End-to-end procure-to-pay case study", "Configuration and test documents", "Certification mock exams", "Resume review and mock interviews"],
      },
    ],
  },
  {
    id: "sd",
    tab: "SD",
    title: "SAP S/4HANA Sales & Distribution (SD)",
    level: "Beginner to consultant",
    audience: "Sales operations, logistics and customer service professionals, and fresh graduates.",
    summary:
      "Configure the complete order-to-cash cycle on SAP S/4HANA: sales documents, pricing, shipping, billing and the special processes that GCC businesses rely on.",
    fees: { aed: 4450 },
    certification: "Prepares you for the SAP Certified Associate exam in S/4HANA Sales.",
    outcomes: [
      "Configure the order-to-cash cycle",
      "Build pricing procedures with condition technique",
      "Set up shipping, picking and delivery",
      "Configure billing and revenue posting",
      "Handle returns, intercompany and third-party sales",
      "Manage customer credit limits",
    ],
    syllabus: [
      {
        title: "SAP & S/4HANA foundations",
        hours: 8,
        topics: ["ERP and SAP landscape overview", "Fiori launchpad navigation", "Sales organisations, channels and divisions", "Shipping points and plants"],
      },
      {
        title: "Master data",
        hours: 10,
        topics: ["Customers as Business Partners", "Material sales views", "Customer-material info records", "Partner determination"],
      },
      {
        title: "Sales documents",
        hours: 18,
        topics: ["Inquiries, quotations and sales orders", "Document types and item categories", "Schedule lines", "Copy control"],
      },
      {
        title: "Pricing",
        hours: 16,
        topics: ["Condition technique", "Pricing procedures and determination", "Discounts, surcharges and freight", "Output tax: UAE and GCC VAT"],
      },
      {
        title: "Shipping & delivery",
        hours: 12,
        topics: ["Outbound deliveries", "Availability check and transfer of requirements", "Picking, packing and goods issue", "Delivery scheduling"],
      },
      {
        title: "Billing",
        hours: 12,
        topics: ["Billing types and billing plans", "Invoice splits and combinations", "Credit and debit memos", "Revenue account determination"],
      },
      {
        title: "Special business processes",
        hours: 12,
        topics: ["Returns and complaints", "Consignment and third-party sales", "Intercompany sales", "Credit management"],
      },
      {
        title: "Capstone project & career prep",
        hours: 12,
        topics: ["End-to-end order-to-cash case study", "Configuration and test documents", "Certification mock exams", "Resume review and mock interviews"],
      },
    ],
  },
  {
    id: "abap",
    tab: "ABAP",
    title: "SAP ABAP on S/4HANA",
    level: "Programming basics recommended",
    audience: "Developers, computer science graduates and IT professionals moving into SAP development.",
    summary:
      "Learn to build and extend SAP with ABAP, from the Data Dictionary and classic reports to object-oriented ABAP, CDS views, OData services and the RESTful Application Programming model.",
    fees: { aed: 4950 },
    certification: "Prepares you for the SAP Certified Associate exam in Back-End Developer – ABAP Cloud.",
    outcomes: [
      "Design tables and views in the Data Dictionary",
      "Write efficient Open SQL and internal table logic",
      "Build ALV reports and SmartForms",
      "Extend standard SAP with BAdIs",
      "Model data with CDS views",
      "Publish OData services for Fiori apps",
    ],
    syllabus: [
      {
        title: "ABAP foundations",
        hours: 12,
        topics: ["SAP system architecture", "ABAP Workbench and Eclipse ADT", "Data Dictionary: tables, domains and data elements", "Views, search helps and lock objects"],
      },
      {
        title: "Core ABAP programming",
        hours: 18,
        topics: ["Data types and control structures", "Internal tables and work areas", "Open SQL and performance basics", "Modularisation: function modules and methods"],
      },
      {
        title: "Reports",
        hours: 14,
        topics: ["Classical and interactive reports", "Selection screens", "ALV grid reports", "Debugging and runtime analysis"],
      },
      {
        title: "Object-oriented ABAP",
        hours: 14,
        topics: ["Classes, objects and interfaces", "Inheritance and polymorphism", "Exception classes", "Design patterns in ABAP"],
      },
      {
        title: "Forms & interfaces",
        hours: 14,
        topics: ["SmartForms and Adobe Forms", "BAPIs and RFCs", "IDocs and ALE", "Batch data communication (BDC)"],
      },
      {
        title: "Enhancements",
        hours: 10,
        topics: ["User exits and customer exits", "Classic and kernel BAdIs", "Enhancement framework", "Clean core extensibility"],
      },
      {
        title: "ABAP for S/4HANA",
        hours: 18,
        topics: ["Core Data Services (CDS) views", "AMDP and code pushdown", "OData services with SAP Gateway", "RAP and Fiori elements basics"],
      },
      {
        title: "Capstone project & career prep",
        hours: 12,
        topics: ["End-to-end development project", "Technical specification and code review", "Certification mock exams", "Resume review and mock interviews"],
      },
    ],
  },
] as const;

export type SapTrack = (typeof sapTracks)[number];
export type SapTrackId = SapTrack["id"];

export function trackHours(track: SapTrack) {
  return track.syllabus.reduce((total, module) => total + module.hours, 0);
}

export const sapBatches = [
  { id: "weekday", label: "Weekday", schedule: "Mon–Thu · 7–9 pm", hoursPerWeek: 8 },
  { id: "weekend", label: "Weekend", schedule: "Sat & Sun · 10 am–2 pm", hoursPerWeek: 8 },
  { id: "fasttrack", label: "Fast-track", schedule: "Mon–Fri · 4 hrs a day", hoursPerWeek: 20 },
] as const;

export const sapModes = ["Classroom – Ajman", "Live online"] as const;

export const sapFeeIncludes = [
  "Live instructor-led sessions",
  "S/4HANA practice system access during the course",
  "Session recordings & course material",
  "Capstone project & certificate of completion",
  "Interview preparation guidance",
];

export const sapHighlights = [
  { title: "Hands-on practice", body: "Work through real business scenarios on an SAP system, not just slides." },
  { title: "Business-process focus", body: "Understand how each module supports procurement, finance, sales and operations." },
  { title: "Flexible batches", body: "Weekday, weekend and fast-track schedules, in the classroom or live online." },
  { title: "Corporate programmes", body: "Customized SAP end-user and functional training for your teams." },
];

export type SapTrainer = {
  name: string;
  role: string;
  years: number;
  location: string;
  tracks: SapTrackId[];
  bio: string;
  credentials: string[];
};

// Publish only verified trainer profiles with the trainer's permission; the section stays hidden while this is empty.
export const sapTrainers: SapTrainer[] = [];

export function formatAed(amount: number) {
  return `AED ${amount.toLocaleString("en-US")}`;
}