import type { EnquiryTypeId } from "./enquiry";

export type CapabilitySection = {
  id: string;
  title: string;
  intro?: string[];
  listTitle?: string;
  items?: string[];
  definitions?: { term: string; body: string }[];
  notes?: string[];
  callout?: { label: string; body: string };
};

export type ProcessStep = { title: string; body: string };

export type Service = {
  id: "training" | "it" | "hr" | "study";
  number: string;
  href: string;
  navLabel: string;
  title: string;
  summary: string;
  tags: string[];
  pageTitle: string;
  headline: string;
  intro: string[];
  capabilitiesHeading: string;
  sections: CapabilitySection[];
  process?: { title: string; steps: ProcessStep[] };
  why?: { title: string; items: string[] };
  statement?: { label?: string; body: string };
  ctas: { label: string; href: string }[];
  enquiry: { title: string; types: EnquiryTypeId[] };
  seo: { title: string; description: string; keywords: string[] };
};

const training: Service = {
  id: "training",
  number: "01",
  href: "/training",
  navLabel: "Training & Education",
  title: "Corporate Training & Professional Development",
  summary:
    "Industry-oriented SAP, IT, AI, civil, mechanical, and business skills training for individuals, working professionals, and corporate teams.",
  tags: ["SAP ERP", "Artificial Intelligence", "Technical Training", "Corporate Upskilling"],
  pageTitle: "Corporate Training, Technical Education & Workforce Upskilling",
  headline: "Develop Skills. Strengthen Teams. Build Industry Readiness.",
  intro: [
    "Palmgate International provides professional training and technical development solutions designed to help individuals, working professionals, fresh graduates, and organizations build the skills required in today's competitive business environment.",
    "Our training portfolio spans enterprise resource planning (ERP), SAP technologies, information technology, artificial intelligence, engineering disciplines, and industry-relevant professional courses.",
    "We focus on practical learning, structured training programs, industry-oriented case studies, and real-world applications wherever applicable. For corporate clients, we develop training programs based on organizational requirements, employee skill gaps, technology adoption, and operational objectives.",
  ],
  capabilitiesHeading: "Our training portfolio",
  sections: [
    {
      id: "sap-erp",
      title: "SAP & Enterprise Resource Planning Training",
      intro: [
        "We provide SAP-focused training designed to help learners understand enterprise business processes and develop practical knowledge of SAP systems used by organizations worldwide.",
      ],
      listTitle: "SAP training modules include",
      items: [
        "SAP S/4HANA Materials Management (MM)",
        "SAP Sales and Distribution (SD)",
        "SAP Financial Accounting and Controlling (FICO)",
        "SAP ABAP Development",
        "SAP BASIS and system administration",
        "SAP Production Planning (PP)",
        "SAP Plant Maintenance (PM)",
        "SAP Quality Management (QM)",
        "SAP Extended Warehouse Management (EWM)",
        "SAP Human Capital Management (HCM)",
        "SAP SuccessFactors",
        "SAP Ariba and procurement solutions",
        "SAP Supply Chain Management",
        "SAP Business Technology Platform (BTP)",
        "SAP S/4HANA migration and transformation fundamentals",
      ],
      notes: [
        "Training may cover business processes, system navigation, configuration concepts, master data, transaction processing, reporting, integration, and project-based learning according to the selected course.",
      ],
      callout: {
        label: "Corporate SAP training",
        body: "We can structure customized programs for procurement, inventory, warehouse management, finance, sales, production, maintenance, quality, and HR teams.",
      },
    },
    {
      id: "it-courses",
      title: "Information Technology Courses",
      intro: [
        "Our IT training portfolio helps learners build technical foundations and develop practical capabilities for IT careers and digital business environments.",
      ],
      listTitle: "Course categories include",
      items: [
        "Programming fundamentals and software development",
        "Python programming",
        "Java programming",
        "Web development",
        "Front-end and back-end development",
        "Database management and SQL",
        "Data analytics and business intelligence",
        "Software testing and quality assurance",
        "Cloud computing fundamentals",
        "Cybersecurity fundamentals",
        "Networking and IT infrastructure",
        "DevOps and automation fundamentals",
        "UI/UX design",
        "Graphic design and multimedia",
        "Project management and IT business analysis",
      ],
      notes: [
        "Course availability and depth can be customized according to learner level, business demand, and the selected training pathway.",
      ],
    },
    {
      id: "ai",
      title: "Artificial Intelligence & Emerging Technologies",
      intro: [
        "Palmgate supports AI skill development through training programs that introduce learners and professionals to modern AI tools, data technologies, automation, and practical business applications.",
      ],
      listTitle: "AI and data courses include",
      items: [
        "Artificial Intelligence fundamentals",
        "Generative AI and large language models",
        "Prompt engineering and AI productivity tools",
        "Machine learning fundamentals",
        "Deep learning fundamentals",
        "Data science and predictive analytics",
        "Python for AI and data analysis",
        "Natural language processing fundamentals",
        "Computer vision fundamentals",
        "AI-powered business process automation",
        "AI applications in HR, marketing, finance, logistics, and operations",
        "Business intelligence and data visualization",
        "Responsible AI and data governance fundamentals",
      ],
      notes: [
        "We aim to help organizations identify practical AI use cases, improve employee productivity, and explore responsible ways to integrate AI into their workflows.",
      ],
    },
    {
      id: "civil",
      title: "Civil Engineering Courses",
      intro: [
        "We provide civil engineering training designed to strengthen technical knowledge, improve software proficiency, and support industry readiness for construction and infrastructure-related roles.",
      ],
      listTitle: "Relevant courses include",
      items: [
        "AutoCAD for Civil Engineering",
        "Revit Architecture and BIM fundamentals",
        "Structural design fundamentals",
        "STAAD.Pro",
        "ETABS",
        "Primavera P6",
        "MS Project for construction planning",
        "Quantity surveying and estimation",
        "Billing and cost estimation",
        "Building Information Modelling (BIM)",
        "Construction project planning and management",
        "Civil site engineering fundamentals",
        "Quality control and quality assurance in construction",
        "Surveying and construction documentation",
      ],
      notes: [
        "Programs can be designed for civil engineering students, graduates, site engineers, planning engineers, quantity surveyors, and construction professionals.",
      ],
    },
    {
      id: "mechanical",
      title: "Mechanical Engineering Courses",
      intro: [
        "Our mechanical training programs focus on design tools, manufacturing processes, engineering documentation, and industry-relevant technical competencies.",
      ],
      listTitle: "Relevant courses include",
      items: [
        "AutoCAD Mechanical",
        "SolidWorks",
        "CATIA",
        "PTC Creo",
        "Siemens NX",
        "Mechanical CAD and product design",
        "Computer-Aided Manufacturing (CAM) fundamentals",
        "Computer-Aided Engineering (CAE) fundamentals",
        "ANSYS simulation fundamentals",
        "HVAC design fundamentals",
        "Mechanical estimation and drafting",
        "Manufacturing and production fundamentals",
        "Quality inspection and measurement",
        "Industrial engineering fundamentals",
        "Maintenance and reliability fundamentals",
        "Supply chain and production planning",
      ],
      notes: [
        "Training pathways can be aligned with entry-level engineering roles and the development needs of existing technical teams.",
      ],
    },
    {
      id: "business",
      title: "Business, Logistics & Supply Chain Courses",
      intro: [
        "We offer professional learning pathways for individuals and teams involved in procurement, inventory, warehousing, logistics, operations, and business management.",
      ],
      listTitle: "Course categories include",
      items: [
        "Logistics and Supply Chain Management",
        "Procurement and Strategic Sourcing",
        "Inventory and Warehouse Management",
        "Demand Planning and Forecasting",
        "Materials Management",
        "Transportation and Distribution Management",
        "International Trade and Shipping Documentation",
        "Import and Export Operations",
        "Operations Management",
        "Excel for Business Reporting",
        "Advanced Excel and Power BI",
        "Business Process Management",
        "Project Management Fundamentals",
        "HR Operations and Recruitment",
        "Digital Marketing and Business Development",
      ],
    },
    {
      id: "corporate",
      title: "Corporate Training & Customized Learning",
      intro: ["We work with companies to identify training requirements and develop programs suited to their business objectives."],
      listTitle: "Our corporate training services include",
      items: [
        "Employee skill-gap assessment",
        "Customized course design",
        "Technical and functional training",
        "SAP and ERP end-user training",
        "New employee onboarding programs",
        "Upskilling and reskilling initiatives",
        "Department-specific training",
        "Management and professional development",
        "On-site, online, and blended training options, subject to program availability",
        "Learning progress assessment and feedback",
      ],
    },
  ],
  statement: {
    label: "Our objective",
    body: "Help businesses develop capable teams, improve process knowledge, and build a culture of continuous learning.",
  },
  ctas: [
    { label: "Explore Our Courses", href: "#capabilities" },
    { label: "Request Corporate Training", href: "#enquiry" },
    { label: "Discuss Your Training Requirements", href: "#enquiry" },
  ],
  enquiry: { title: "Discuss your training requirements", types: ["course", "corporate-training"] },
  seo: {
    title: "SAP, IT & AI Training in UAE | Palmgate",
    description:
      "Industry-oriented SAP, IT, AI, civil, mechanical and business training in the UAE for individuals, working professionals and corporate teams, with customized corporate programs.",
    keywords: ["SAP training UAE", "corporate training UAE", "AI courses"],
  },
};

const it: Service = {
  id: "it",
  number: "02",
  href: "/it-solutions",
  navLabel: "IT Solutions & Outsourcing",
  title: "IT Solutions & Business Process Outsourcing",
  summary:
    "Technology implementation, enterprise software projects, web development, digital marketing, medical coding, logistics, supply chain, and outsourced business operations.",
  tags: ["ERP", "SAP", "Software Development", "BPO", "Supply Chain"],
  pageTitle: "IT Solutions, Enterprise Technology & Outsourcing Services",
  headline: "Technology-Driven Solutions for Modern Businesses",
  intro: [
    "Palmgate International helps businesses access technology expertise, implement enterprise solutions, develop digital platforms, and outsource selected operational functions.",
    "We support organizations seeking flexible project execution, specialist technical resources, and process-oriented services without having to build every capability internally.",
    "Our services can be structured as project-based engagements, dedicated resource arrangements, managed services, or ongoing outsourcing support, depending on project scope and client requirements.",
  ],
  capabilitiesHeading: "Our technology & outsourcing services",
  sections: [
    {
      id: "erp",
      title: "ERP Implementation & Enterprise Solutions",
      intro: ["We support ERP-related initiatives designed to improve business visibility, standardize operations, and connect key organizational functions."],
      listTitle: "Our ERP services may include",
      items: [
        "ERP requirement gathering and business process analysis",
        "Business process mapping and documentation",
        "ERP implementation support",
        "Functional consulting and configuration support",
        "Master data preparation and migration support",
        "System testing and user acceptance testing",
        "Integration and reporting support",
        "User training and change management",
        "Post-implementation support and maintenance",
        "ERP process improvement and optimization",
        "Legacy system transformation support",
      ],
      notes: ["We help clients evaluate their business requirements and coordinate appropriate technical and functional expertise for ERP initiatives."],
    },
    {
      id: "sap-projects",
      title: "SAP Project Services",
      intro: [
        "Palmgate supports SAP-related project requirements through functional, technical, and business process expertise, subject to project scope and resource availability.",
      ],
      listTitle: "Our SAP project capabilities include",
      items: [
        "SAP S/4HANA implementation support",
        "SAP MM, SD, FICO, PP, PM, QM, and related module support",
        "SAP ABAP development and enhancement support",
        "SAP BASIS and system administration support",
        "SAP data migration and validation",
        "SAP testing and defect management",
        "SAP integration and reporting",
        "SAP master data management",
        "SAP procurement and supply chain process support",
        "SAP end-user training and documentation",
        "SAP application maintenance and support",
        "SAP upgrade and transformation project support",
      ],
      notes: ["We can work with clients, implementation partners, and consulting teams to provide project resources or support agreed work packages."],
    },
    {
      id: "web",
      title: "Web Development & Digital Solutions",
      intro: ["We develop digital solutions that help businesses establish an online presence, streamline operations, and deliver better customer experiences."],
      listTitle: "Web and application services include",
      items: [
        "Corporate website design and development",
        "Responsive website development",
        "E-commerce website development",
        "Custom web applications",
        "Customer portals and business dashboards",
        "Website redesign and performance optimization",
        "Content management system implementation",
        "Landing pages and lead-generation websites",
        "Website maintenance and technical support",
        "API integration and third-party integrations",
        "Database-driven applications",
        "Website analytics and conversion tracking",
      ],
      notes: ["Our approach emphasizes usability, mobile responsiveness, business objectives, and maintainability."],
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing & Online Growth",
      intro: [
        "We provide digital marketing support to help businesses improve visibility, generate qualified leads, engage customers, and strengthen their online brand.",
      ],
      listTitle: "Our digital marketing services include",
      items: [
        "Search Engine Optimization (SEO)",
        "Local SEO and Google Business Profile optimization",
        "Search engine marketing and paid advertising",
        "Meta advertising across Facebook and Instagram",
        "Social media management",
        "Content strategy and content creation",
        "Corporate branding and graphic design",
        "Video and promotional content coordination",
        "Lead-generation campaign management",
        "Landing page optimization",
        "Marketing analytics and reporting",
        "Email marketing and customer engagement",
        "Conversion tracking and campaign performance analysis",
      ],
      notes: ["Marketing strategies can be customized according to the client's industry, target market, budget, and growth objectives."],
    },
    {
      id: "medical-coding",
      title: "Medical Coding & Healthcare Process Outsourcing",
      intro: [
        "Palmgate can support healthcare organizations and authorized service providers with medical coding and selected healthcare administrative processes, subject to client requirements, personnel qualifications, applicable standards, and data-protection obligations.",
      ],
      listTitle: "Potential service areas include",
      items: [
        "Medical coding support",
        "Medical record abstraction",
        "Clinical documentation review support",
        "Medical billing process support",
        "Claims documentation and processing support",
        "Healthcare data entry and records administration",
        "Revenue cycle management support",
        "Quality checks and documentation validation",
        "Healthcare back-office support",
      ],
      notes: [
        "Services are scoped according to applicable coding standards, client protocols, confidentiality requirements, and relevant UAE and international regulations.",
      ],
    },
    {
      id: "supply-chain",
      title: "Logistics & Supply Chain Outsourcing",
      intro: [
        "We help businesses streamline supply chain activities through operational support, process documentation, data management, and outsourced specialist resources.",
      ],
      listTitle: "Our service areas include",
      items: [
        "Procurement operations support",
        "Purchase order processing",
        "Supplier and vendor coordination",
        "Sourcing and procurement administration",
        "Inventory data management",
        "Warehouse administration support",
        "Logistics coordination",
        "Shipment documentation support",
        "Order management",
        "Supply chain reporting and analytics",
        "Demand and replenishment planning support",
        "Master data management",
        "Invoice and documentation processing",
        "Supply chain process mapping and improvement",
        "ERP-enabled procurement and inventory processes",
      ],
      notes: [
        "Our goal is to help businesses improve process consistency, strengthen operational visibility, and allocate internal resources more effectively.",
      ],
    },
    {
      id: "bpo",
      title: "Business Process Outsourcing (BPO)",
      intro: ["Palmgate supports businesses that want to outsource defined business activities while retaining control of their core operations."],
      listTitle: "Outsourcing capabilities may include",
      items: [
        "Data entry and data processing",
        "Document management",
        "Back-office administration",
        "Customer service support",
        "Recruitment process support",
        "Sales coordination and CRM administration",
        "Finance and accounting process support",
        "Procurement and sourcing administration",
        "Reporting and business analytics",
        "E-commerce operations support",
        "Research and data validation",
        "Workflow and process documentation",
        "Shared service support",
        "Remote specialist and dedicated resource models",
      ],
      notes: [
        "Each engagement can be structured around agreed deliverables, turnaround times, quality standards, reporting requirements, and service-level expectations.",
      ],
    },
    {
      id: "dedicated-teams",
      title: "Dedicated IT Resources & Project Teams",
      intro: [
        "For businesses requiring additional technical capacity, we can help source suitable professionals and coordinate project-based or dedicated resource arrangements.",
      ],
      listTitle: "Potential resource categories include",
      items: [
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
      notes: [
        "Engagements can be designed around defined project requirements, subject to resource availability, contractual arrangements, and applicable employment and outsourcing regulations.",
      ],
    },
  ],
  why: {
    title: "Why partner with Palmgate?",
    items: [
      "Multiple technology and outsourcing capabilities under one business partner",
      "Flexible project and resource engagement models",
      "Business-process-oriented delivery",
      "Access to specialized technical talent",
      "Scalable support based on project requirements",
      "Focus on documentation, communication, and agreed quality standards",
    ],
  },
  ctas: [
    { label: "Discuss an IT Project", href: "#enquiry" },
    { label: "Outsource a Business Process", href: "#enquiry" },
    { label: "Request Technical Resources", href: "#enquiry" },
  ],
  enquiry: { title: "Tell us about your project or process", types: ["project", "outsourcing", "resources"] },
  seo: {
    title: "SAP, ERP & IT Outsourcing Services UAE",
    description:
      "ERP implementation, SAP project services, web development, digital marketing, medical coding, logistics and business process outsourcing for businesses in the UAE.",
    keywords: ["SAP projects UAE", "ERP consulting", "IT outsourcing"],
  },
};

const hr: Service = {
  id: "hr",
  number: "03",
  href: "/hr-staffing",
  navLabel: "HR & Staffing",
  title: "Human Resources & Complete Staffing Solutions",
  summary:
    "End-to-end workforce support, including UAE-based recruitment, overseas talent sourcing, manpower planning, permanent recruitment, contract staffing, and workforce deployment.",
  tags: ["UAE Recruitment", "International Sourcing", "Staffing", "HR Consultancy"],
  pageTitle: "Human Resource Consultancy & End-to-End Staffing Solutions",
  headline: "The Right People. The Right Skills. The Right Opportunities.",
  intro: [
    "Palmgate International provides recruitment, workforce sourcing, HR consultancy, and staffing support to businesses across the UAE.",
    "We understand that finding the right people is essential for business continuity, productivity, and growth. Our approach focuses on understanding the client's workforce requirements, identifying suitable candidates, coordinating recruitment activities, and supporting the staffing process from requirement definition to onboarding coordination.",
    "Whether an organization needs a single specialist, a team of professionals, or a larger workforce for an expanding operation, Palmgate aims to provide a structured and flexible recruitment solution.",
    "We support companies looking for talent within the UAE, from India, and from other international markets, subject to applicable recruitment, immigration, licensing, and employment requirements.",
  ],
  capabilitiesHeading: "Our recruitment & staffing services",
  sections: [
    {
      id: "uae-recruitment",
      title: "UAE-Based Recruitment",
      intro: ["We help employers identify candidates already residing in the UAE and suitable for their vacancies."],
      listTitle: "Our UAE recruitment services include",
      items: [
        "Local candidate sourcing",
        "CV screening and shortlisting",
        "Candidate pre-screening and initial interviews",
        "Skills and experience matching",
        "Interview scheduling and coordination",
        "Candidate and client communication",
        "Offer and joining coordination",
        "Documentation follow-up",
        "Recruitment pipeline management",
        "Support with onboarding coordination",
      ],
      notes: ["We can assist with recruitment across industries and professional levels, according to the employer's requirements."],
    },
    {
      id: "international-recruitment",
      title: "International Recruitment & Overseas Talent Sourcing",
      intro: [
        "When suitable talent is not readily available locally, businesses may need to consider candidates from international markets.",
        "Palmgate supports international talent sourcing, including recruitment from India and other countries, based on the client's job requirements and applicable regulations.",
      ],
      listTitle: "Our international recruitment support includes",
      items: [
        "International candidate sourcing",
        "Talent database development",
        "Job advertising and candidate outreach",
        "Resume screening and preliminary assessment",
        "Technical and functional interview coordination",
        "Candidate shortlisting and presentation",
        "Interview scheduling with UAE employers",
        "Recruitment documentation coordination",
        "Offer acceptance and joining follow-up",
        "Coordination with authorized partners for relevant immigration and deployment procedures",
      ],
      notes: [
        "International sourcing can be considered for specialist positions, technical roles, professional services, and other workforce requirements where cross-border recruitment is appropriate.",
      ],
    },
    {
      id: "staffing",
      title: "Complete Staffing Solutions",
      intro: [
        "Palmgate aims to act as a comprehensive staffing partner for businesses that need a flexible approach to workforce planning.",
        "Depending on the applicable licensing and engagement model, staffing support can include:",
      ],
      definitions: [
        { term: "Permanent recruitment", body: "Identifying and recruiting employees for long-term positions within the client's organization." },
        { term: "Contract staffing", body: "Supporting time-bound workforce requirements through legally appropriate contractual arrangements." },
        { term: "Temporary staffing", body: "Helping employers address short-term operational demands through authorized staffing arrangements." },
        { term: "Project-based staffing", body: "Sourcing professionals and coordinating workforce requirements for specific projects or delivery milestones." },
        { term: "Bulk recruitment", body: "Coordinating large-volume recruitment campaigns for planned expansion, new operations, or seasonal requirements." },
        { term: "Executive and specialist recruitment", body: "Identifying candidates for managerial, leadership, and hard-to-fill professional positions." },
        { term: "Technical staffing", body: "Sourcing SAP consultants, software developers, engineers, IT specialists, and other technical professionals." },
        { term: "Workforce ramp-up", body: "Supporting organizations that need to increase staffing levels within a defined timeframe." },
      ],
    },
    {
      id: "industries",
      title: "Industry-Specific Recruitment",
      listTitle: "We can support recruitment requirements across a range of industries, including",
      items: [
        "Information Technology and software services",
        "SAP, ERP, and enterprise consulting",
        "Engineering and technical services",
        "Civil construction and infrastructure",
        "Mechanical and manufacturing",
        "Logistics, transportation, and supply chain",
        "Warehousing and distribution",
        "Retail and e-commerce",
        "Hospitality and hotel operations",
        "Healthcare and healthcare administration",
        "Finance and accounting",
        "Sales, marketing, and customer service",
        "Administration and office support",
        "Oil and gas, where relevant roles and approvals permit",
        "Procurement, sourcing, and business operations",
      ],
      notes: ["Actual recruitment coverage will depend on the vacancy, candidate availability, client requirements, and the relevant legal permissions."],
    },
    {
      id: "hr-consultancy",
      title: "HR Consultancy & Recruitment Process Support",
      intro: ["Beyond candidate sourcing, Palmgate can support companies in improving recruitment coordination and selected HR processes."],
      listTitle: "Our services may include",
      items: [
        "Workforce planning support",
        "Job description development",
        "Recruitment strategy and process design",
        "Candidate database management",
        "Applicant tracking and recruitment reporting",
        "Interview process coordination",
        "HR documentation support",
        "Employee onboarding coordination",
        "HR operations documentation",
        "Recruitment KPI and performance reporting",
        "Employee records administration",
        "HR process improvement",
        "Recruitment outsourcing and recruitment process outsourcing (RPO) support",
      ],
      notes: ["The exact scope can be customized according to the client's HR structure and internal capabilities."],
    },
  ],
  process: {
    title: "Our Recruitment Process",
    steps: [
      { title: "Understand", body: "We discuss the client's vacancies, job descriptions, experience requirements, salary ranges, location, and hiring timeline." },
      { title: "Source", body: "We identify suitable candidates through relevant sourcing channels and recruitment networks." },
      { title: "Screen", body: "We assess profiles against the agreed requirements and coordinate preliminary screening." },
      { title: "Shortlist", body: "We submit relevant candidate profiles for the client's consideration." },
      { title: "Coordinate", body: "We organize interviews, gather feedback, and maintain communication between the employer and candidates." },
      { title: "Offer & Joining", body: "We coordinate offer-related communication, documentation follow-up, and joining arrangements within the agreed scope." },
      { title: "Follow Up", body: "We maintain communication after joining according to the agreed recruitment or staffing service terms." },
    ],
  },
  why: {
    title: "Why Choose Palmgate as Your Staffing Partner?",
    items: [
      "Access to local and international talent sourcing",
      "Recruitment support across multiple industries",
      "Flexible hiring solutions for different workforce sizes",
      "Technical and professional recruitment capabilities",
      "Structured candidate screening and coordination",
      "A single point of contact for defined recruitment requirements",
      "Potential integration with training and skill-development services",
    ],
  },
  statement: {
    label: "Our commitment",
    body: "To help businesses find suitable talent through a professional, transparent, and requirement-driven recruitment process.",
  },
  ctas: [
    { label: "Submit Your Hiring Requirements", href: "#enquiry" },
    { label: "Request Staffing Support", href: "#enquiry" },
    { label: "Partner With Our Recruitment Team", href: "#enquiry" },
  ],
  enquiry: { title: "Share your hiring requirements", types: ["hiring", "staffing"] },
  seo: {
    title: "Recruitment & Staffing Solutions UAE | Palmgate",
    description:
      "UAE-based recruitment, international talent sourcing, permanent, contract and project staffing, and HR consultancy for businesses across the UAE.",
    keywords: ["Recruitment agency UAE", "staffing solutions UAE", "HR consultancy"],
  },
};

const study: Service = {
  id: "study",
  number: "04",
  href: "/study-abroad",
  navLabel: "Study Abroad",
  title: "International Education & Study Abroad",
  summary:
    "Guidance for UAE residents and international applicants seeking overseas education, including course selection, university applications, admissions documentation, and pre-departure preparation.",
  tags: ["University Admissions", "International Applications", "Education Guidance"],
  pageTitle: "International Education & Study Abroad Support",
  headline: "Connecting Students to Global Education Opportunities",
  intro: [
    "Palmgate International supports students and eligible applicants from the UAE and other countries who wish to pursue higher education overseas.",
    "We help applicants understand their study options, identify suitable institutions, prepare application documents, and navigate the admissions process. Our goal is to make international education planning more organized, informed, and accessible.",
    "We recognize that every applicant has different academic qualifications, career ambitions, financial considerations, and destination preferences. Our approach therefore focuses on identifying appropriate study pathways based on individual circumstances and the admission requirements of the selected institutions.",
  ],
  capabilitiesHeading: "How we support your education journey",
  sections: [
    {
      id: "destinations",
      title: "Study Destinations",
      listTitle: "We can assist applicants exploring international education opportunities in destinations such as",
      items: [
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
        "Other destinations, subject to available institutional partnerships and current admission opportunities",
      ],
      notes: ["Destination and institution availability will depend on the applicant's profile, program choice, and current admission requirements."],
    },
    {
      id: "course-selection",
      title: "University & Course Selection",
      intro: ["Choosing the right university and course is an important step toward building a successful international career."],
      listTitle: "Our support may include",
      items: [
        "Understanding the student's academic background",
        "Identifying suitable study destinations",
        "Exploring undergraduate and postgraduate programs",
        "Shortlisting universities and institutions",
        "Reviewing academic entry requirements",
        "Assessing English-language proficiency requirements",
        "Comparing course structures and durations",
        "Understanding tuition fees and estimated living expenses",
        "Exploring scholarships and eligible funding options",
        "Reviewing potential career pathways after graduation",
      ],
      notes: ["We aim to help students make informed decisions rather than select a course based only on destination or popularity."],
    },
    {
      id: "applications",
      title: "University Application & Admission Support",
      intro: ["We assist applicants with the administrative and documentation requirements involved in applying to overseas institutions."],
      listTitle: "Our services may include",
      items: [
        "University and course application support",
        "Application form preparation",
        "Academic document checklist and review",
        "CV preparation guidance where required",
        "Statement of Purpose (SOP) and personal statement guidance",
        "Letter of Motivation (LOM) guidance",
        "Recommendation letter coordination",
        "English-language test requirement guidance",
        "Application status follow-up",
        "Offer letter and admission communication support",
        "Acceptance and enrollment documentation guidance",
      ],
      notes: ["Admission decisions remain with the respective educational institutions."],
    },
    {
      id: "visa",
      title: "Student Visa Application Support",
      intro: ["We provide administrative guidance to help students understand the visa application process associated with their selected destination."],
      listTitle: "Support may include",
      items: [
        "Destination-specific student visa document checklists",
        "Explanation of application procedures",
        "Guidance on financial evidence requirements",
        "Review of supporting documents for completeness",
        "Application form assistance",
        "Interview preparation guidance, where applicable",
        "Institution-related documentation coordination",
        "Visa application appointment guidance",
        "Pre-departure preparation",
      ],
      notes: [
        "Visa requirements differ by destination and may change. Final eligibility and decisions rest with the relevant immigration authorities. We do not guarantee visa approvals.",
      ],
    },
    {
      id: "funding",
      title: "Scholarships, Funding & Financial Planning",
      intro: ["We help students explore available options for managing the cost of international education."],
      listTitle: "Our guidance may cover",
      items: [
        "University scholarships",
        "Merit-based scholarship opportunities",
        "Institution-specific tuition discounts",
        "Eligible education loan options",
        "Tuition fee planning",
        "Estimated living expenses",
        "Budget preparation for international study",
        "Financial document preparation guidance",
      ],
      notes: ["Scholarships, loans, and other financial assistance are subject to the respective provider's eligibility criteria, approval, and availability."],
    },
    {
      id: "pre-departure",
      title: "Pre-Departure & Student Preparation",
      intro: [
        "Preparing to study overseas involves more than obtaining an admission offer. Students must also understand the practical requirements of living and studying in another country.",
      ],
      listTitle: "Our pre-departure support may include",
      items: [
        "Travel preparation guidance",
        "Accommodation search guidance",
        "Understanding local transport options",
        "Essential document checklists",
        "Orientation on university expectations",
        "General information about local culture and student life",
        "Budgeting and living expense preparation",
        "Guidance on student responsibilities and applicable rules",
        "Post-arrival support information, where available",
      ],
    },
    {
      id: "pathways",
      title: "Education Pathways for UAE Residents & International Applicants",
      intro: [
        "Palmgate welcomes education enquiries from eligible applicants residing in the UAE, including expatriate communities and other nationalities.",
        "We can help applicants explore study options based on their qualifications, career goals, preferred destination, budget, and language proficiency.",
        "Our process is designed to help applicants understand their options before proceeding with university applications.",
      ],
    },
  ],
  process: {
    title: "Our Study Abroad Process",
    steps: [
      { title: "Initial Consultation", body: "Understand academic background, career objectives, preferred destinations, and budget." },
      { title: "Profile Assessment", body: "Review academic qualifications and identify possible study pathways." },
      { title: "Course & University Shortlisting", body: "Explore institutions and programs matching the applicant's profile." },
      { title: "Application Preparation", body: "Organize documents and support submission of university applications." },
      { title: "Admission Follow-Up", body: "Coordinate application updates and offer-related documentation." },
      { title: "Visa Documentation Guidance", body: "Help organize the documents and steps relevant to the destination's visa process." },
      { title: "Pre-Departure Preparation", body: "Provide practical guidance for preparing to travel and commence studies." },
    ],
  },
  why: {
    title: "Why Choose Palmgate for Study Abroad Support?",
    items: [
      "Guidance based on individual academic profiles",
      "Support across multiple international destinations",
      "Structured application and documentation assistance",
      "Course and career pathway discussions",
      "Guidance on scholarships and funding options",
      "Support throughout key stages of the application journey",
    ],
  },
  statement: { body: "Your global education journey starts with the right guidance." },
  ctas: [
    { label: "Book an Education Consultation", href: "#enquiry" },
    { label: "Explore Study Destinations", href: "#destinations" },
    { label: "Begin Your Application", href: "#enquiry" },
  ],
  enquiry: { title: "Begin your study abroad journey", types: ["study"] },
  seo: {
    title: "Study Abroad Consultancy UAE | Palmgate",
    description:
      "Study abroad guidance for UAE residents and international applicants: course and university selection, applications, student visa documentation guidance and pre-departure support.",
    keywords: ["Study abroad UAE", "overseas education", "university applications"],
  },
};

export const services = [training, it, hr, study];

export function getService(id: Service["id"]) {
  return services.find((s) => s.id === id)!;
}

export const trainingCourseCount = training.sections
  .filter((s) => s.id !== "corporate")
  .reduce((total, s) => total + (s.items?.length ?? 0), 0);
