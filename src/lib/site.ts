// Single source of truth for company identity and contact details.
// Confirm the official email, phone/WhatsApp number, website URL and licence details before going live.

export const site = {
  name: "Palmgate",
  legalName: "Palmgate International FZC LLC",
  tagline: "One Partner. Multiple Solutions. Global Reach.",
  description:
    "Palmgate International FZC LLC is a UAE-based business solutions company delivering corporate training, IT solutions, business process outsourcing, HR consultancy, workforce staffing and international education support.",
  url: "https://www.palmgateinternational.ae",
  email: "info@palmgateinternational.ae",
  phone: "+971 55 884 5766",
  city: "Ajman",
  country: "United Arab Emirates",
  social: {
    facebook: "https://www.facebook.com/palmgateinternational/",
    instagram: "https://www.instagram.com/palmgate_international/",
    linkedin: "https://www.linkedin.com/company/palmgate-international/",
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/#services", menu: true },
  { label: "Industries", href: "/industries" },
  { label: "Contact Us", href: "/contact" },
] as const;

export type Office = {
  id: string;
  label: string;
  city: string;
  country: string;
  role: string;
  address: string[];
  mapUrl?: string;
  mapQuery: string;
  phone: string;
  email: string;
  timeZone: string;
  utc: string;
};

export const offices: Office[] = [
  {
    id: "ajman",
    label: "Head office",
    city: site.city,
    country: site.country,
    role: "Corporate solutions, training, staffing and education enquiries",
    address: [site.legalName, "Ajman", "United Arab Emirates"],
    mapQuery: "Palmgate International FZC LLC, Ajman, United Arab Emirates",
    phone: site.phone,
    email: site.email,
    timeZone: "Asia/Dubai",
    utc: "GMT+4",
  },
];

export function telHref(phone: string) {
  return `tel:${phone.replace(/\s/g, "")}`;
}

export function whatsappHref(phone: string) {
  return `https://wa.me/${phone.replace(/\D/g, "")}`;
}
