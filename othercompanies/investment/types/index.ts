// ─── Shared types ─────────────────────────────────────────────────────────────

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  email?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  authorImage: string;
  date: string;
  readTime: string;
  featured?: boolean;
  tags: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Opportunity {
  id: string;
  title: string;
  description: string;
  icon: string;
  sectors: string[];
  value?: string;
}

export interface StatItem {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

export interface SponsorTier {
  name: string;
  amount: string;
  benefits: string[];
  highlight?: boolean;
}

export interface DelegateRegistration {
  delegateName: string;
  email: string;
  phone: string;
  organization: string;
  country: string;
  sector: string;
  address: string;
  exhibition: "yes" | "no";
  message?: string;
}

export interface CorporateRegistration {
  companyName: string;
  contactName: string;
  designation: string;
  email: string;
  phone: string;
  country: string;
  sector: string;
  address: string;
  website?: string;
  exhibition: "yes" | "no";
  sponsorship?: string;
  message?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}
