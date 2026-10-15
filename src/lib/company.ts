import type { Service } from "./services";

export const homeIntro = {
  title: "Your Partner in Talent, Technology, Training and Global Opportunities",
  tagline: "Empowering Businesses. Developing Talent. Connecting Global Opportunities.",
  lead: "Palmgate International FZC LLC is a UAE-based business solutions company delivering integrated services across corporate training, IT solutions, business process outsourcing, human resource consultancy, workforce staffing, and international education support.",
  body: [
    "We work with businesses across multiple industries to help them access skilled professionals, strengthen operational capabilities, implement technology-driven solutions, and manage business processes efficiently. Through our training and development services, we also help individuals and corporate teams acquire relevant industry skills aligned with evolving business requirements.",
    "From SAP and enterprise technology training to outsourced IT projects, from local and international talent sourcing to overseas education guidance, Palmgate brings diverse services together under one trusted business partner.",
    "Our approach combines industry knowledge, practical expertise, flexible engagement models, and a commitment to delivering solutions that support long-term growth.",
  ],
  motto: "Palmgate International — One Partner. Multiple Solutions. Global Reach.",
};

export const about = {
  title: "About Palmgate International FZC LLC",
  headline: "Building Connections Between Business, Technology and Talent",
  body: [
    "Palmgate International FZC LLC is a UAE-based business solutions company committed to helping organizations grow through technology, skilled talent, professional development, and operational support.",
    "We bring together multiple service capabilities to address the evolving needs of businesses operating in a competitive and interconnected global economy.",
    "Our services span corporate and technical training, enterprise technology and IT solutions, business process outsourcing, recruitment and staffing, and international education support.",
    "We believe businesses perform better when they have access to the right people, the right skills, and the right operational capabilities. By understanding our clients' objectives and developing solutions around their requirements, we aim to become a long-term partner in their growth.",
  ],
  mission:
    "To empower businesses and individuals through accessible professional training, technology-driven solutions, reliable talent sourcing, and global education opportunities.",
  vision:
    "To become a trusted international business solutions partner connecting companies, skilled professionals, technology, and learning opportunities across the UAE and global markets.",
};

export const coreValues = [
  { title: "Integrity", body: "We believe in transparent communication, responsible service delivery, and professional relationships." },
  { title: "Customer Focus", body: "We listen to our clients, understand their requirements, and tailor our services to their objectives." },
  { title: "Quality", body: "We emphasize professional standards, clear processes, and continuous improvement." },
  { title: "Innovation", body: "We embrace technology and modern working practices to help clients adapt and grow." },
  { title: "Collaboration", body: "We work with clients, professionals, institutions, and relevant partners to deliver coordinated solutions." },
  { title: "Global Perspective", body: "We connect local business requirements with international talent, technology, and educational opportunities." },
];

export const whyChoose = [
  {
    title: "Multiple Services Under One Roof",
    body: "Training, IT solutions, outsourcing, staffing, and education support through a single business partner.",
  },
  {
    title: "UAE & International Reach",
    body: "Support for UAE-based companies, local talent sourcing, and international recruitment requirements.",
  },
  {
    title: "Business-Focused Solutions",
    body: "Services designed around operational needs, project requirements, workforce demands, and business objectives.",
  },
  {
    title: "Flexible Resource Models",
    body: "Support for individual hires, specialist resources, project teams, and selected outsourced processes.",
  },
  {
    title: "Skills & Career Development",
    body: "Professional learning pathways and education guidance that help individuals prepare for future opportunities.",
  },
];

export const industries: { id: string; name: string; body: string; services: Service["id"][] }[] = [
  { id: "technology", name: "IT & Technology", body: "ERP, SAP, software development, AI and technical staffing.", services: ["it", "hr", "training"] },
  {
    id: "manufacturing",
    name: "Manufacturing & Engineering",
    body: "Mechanical, civil, production and technical workforce support.",
    services: ["training", "hr"],
  },
  {
    id: "logistics",
    name: "Logistics & Supply Chain",
    body: "Procurement, inventory, warehouse and operational outsourcing.",
    services: ["it", "training", "hr"],
  },
  { id: "healthcare", name: "Healthcare", body: "Medical coding and selected healthcare administration processes.", services: ["it", "hr"] },
  {
    id: "construction",
    name: "Construction & Infrastructure",
    body: "Engineering training, project support and technical recruitment.",
    services: ["training", "hr"],
  },
  {
    id: "retail",
    name: "Retail & Hospitality",
    body: "Workforce sourcing, staffing coordination and business process support.",
    services: ["hr", "it"],
  },
];

export const industriesNote = "Specific services depend on the requirements, scope and terms of each engagement.";

export const contactCopy = {
  title: "Let's Discuss Your Business Requirements",
  body: [
    "Whether you are looking for skilled professionals, technical project support, corporate training, outsourced business services, or international education guidance, Palmgate International is ready to understand your requirements.",
    "Tell us what you need, and our team will help identify the appropriate service and next steps.",
  ],
  audiences: [
    { title: "For businesses", body: "Share your recruitment requirements, project scope, training needs, or outsourcing objectives." },
    { title: "For individuals", body: "Enquire about technical training, professional development, and overseas education opportunities." },
  ],
  closing: "Contact us today to explore how we can support your next stage of growth.",
};
