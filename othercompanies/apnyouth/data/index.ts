import type { TeamMember, BlogPost, FAQItem, StatItem } from "@/types";

// ─── Navigation ──────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home",         href: "/" },
  { label: "About",        href: "/about" },
  { label: "Summit",       href: "/#summit" },
  { label: "Team",         href: "/team" },
  { label: "Blog",         href: "/blog" },
  { label: "Contact",      href: "/contact" },
];

export const REGISTRATION_LINKS = [
  { label: "Delegate Registration",  href: "/registration/delegate" },
  { label: "Corporate Registration", href: "/registration/corporate" },
];

// ─── Stats ────────────────────────────────────────────────────────────────────
export const STATS: StatItem[] = [
  { value: "54",   label: "African Nations",       suffix: "+" },
  { value: "500",  label: "Expected Delegates",    suffix: "+" },
  { value: "2.5",  label: "Billion USD in Deals",  prefix: "$", suffix: "B+" },
  { value: "120",  label: "Corporate Partners",    suffix: "+" },
  { value: "30",   label: "Keynote Speakers",      suffix: "+" },
  { value: "15",   label: "Industry Sectors",      suffix: "+" },
];

// ─── Team ─────────────────────────────────────────────────────────────────────
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "1",
    name: "Dr. Emmanuel Kwame Asante",
    role: "Chairman & Founder",
    bio: "A seasoned investment strategist with over 25 years bridging African capital markets with global institutional investors. Former IMF Advisor and World Bank consultant, Dr. Asante has facilitated over $4.2B in cross-border transactions.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    linkedin: "#",
  },
  {
    id: "2",
    name: "Amara Diallo",
    role: "Chief Executive Officer",
    bio: "Ms. Diallo brings 18 years of executive leadership in Pan-African development finance, infrastructure investment, and public-private partnership structuring across West and Central Africa.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    linkedin: "#",
  },
  {
    id: "3",
    name: "Prof. Chidi Okonkwo",
    role: "Director, Strategic Partnerships",
    bio: "Former Deputy Governor of the Central Bank of Nigeria and Professor of International Finance at Lagos Business School. Prof. Okonkwo advises sovereign wealth funds across the continent.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    linkedin: "#",
  },
  {
    id: "4",
    name: "Fatima Al-Hassan",
    role: "Director, North Africa Operations",
    bio: "Dr. Al-Hassan specializes in sovereign debt instruments, Islamic finance, and MENA–Africa investment corridors. She holds dual doctorates from Cairo University and the London School of Economics.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    linkedin: "#",
  },
  {
    id: "5",
    name: "David Osei-Mensah",
    role: "Head of Technology & Innovation",
    bio: "A tech entrepreneur and fintech pioneer who has built and exited three successful ventures in East Africa. David leads AGIF's digital transformation and AI-driven investment intelligence initiatives.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    linkedin: "#",
  },
  {
    id: "6",
    name: "Dr. Naledi Dlamini",
    role: "Director, Southern Africa Hub",
    bio: "Former Minister of Investment Promotion for the Kingdom of Eswatini, Dr. Dlamini has brokered landmark bilateral investment treaties between SADC nations and international investors.",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&q=80",
    linkedin: "#",
  },
];

// ─── FAQ ─────────────────────────────────────────────────────────────────────
export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What is the Africa Globalized Investment Forum (AGIF)?",
    answer: "AGIF is a premier international investment summit dedicated to unlocking Africa's vast economic potential. We convene heads of state, institutional investors, multilateral development banks, and private sector leaders to forge actionable investment partnerships across the continent.",
  },
  {
    question: "Who should attend the AGIF Summit?",
    answer: "The Forum is designed for institutional investors, private equity firms, sovereign wealth funds, development finance institutions, government ministers, corporate executives, entrepreneurs, and multilateral organization representatives who are serious about African market opportunities.",
  },
  {
    question: "What sectors does AGIF focus on?",
    answer: "AGIF covers 15+ strategic sectors including infrastructure (energy, transport, digital), agribusiness, fintech, real estate, natural resources, manufacturing, healthcare, education, and the blue economy. Our PPP pipeline spans both greenfield and brownfield opportunities.",
  },
  {
    question: "How do I register for the summit?",
    answer: "Registration is available through our online portal. Individual delegates can use our Delegate Registration form, while organizations wishing to sponsor or exhibit should complete the Corporate Registration. Early-bird rates and group packages are available.",
  },
  {
    question: "What are the Public-Private Partnership (PPP) opportunities?",
    answer: "AGIF maintains a curated pipeline of bankable PPP projects vetted by our technical committee. Projects range from $10M to $2B+ and span sectors including energy, transport infrastructure, affordable housing, irrigation, and smart city development.",
  },
  {
    question: "Are investment guarantees available?",
    answer: "Yes. AGIF works in partnership with multilateral guarantee agencies, export credit agencies, and political risk insurance providers to structure risk mitigation instruments. Our legal and financial advisory team can facilitate first-loss guarantees, credit enhancements, and blended finance structures.",
  },
  {
    question: "Can startups and SMEs participate?",
    answer: "Absolutely. AGIF hosts a dedicated Innovation Pavilion for African tech startups and SMEs. We also facilitate connections with venture capital funds and impact investors specifically looking for high-growth African enterprises.",
  },
];

// ─── Blog Posts ───────────────────────────────────────────────────────────────
export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "africa-investment-outlook-2025",
    title: "Africa's Investment Outlook: $100 Billion Opportunity in 2025",
    excerpt: "A comprehensive analysis of Africa's booming investment landscape, emerging sectors, and the catalysts driving unprecedented capital flows to the continent.",
    content: "Africa is experiencing a fundamental shift in its investment narrative...",
    image: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=800&q=80",
    category: "Investment Insights",
    author: "Dr. Emmanuel Kwame Asante",
    authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80",
    date: "2024-11-15",
    readTime: "8 min read",
    featured: true,
    tags: ["Investment", "Africa", "Finance", "2025 Outlook"],
  },
  {
    id: "2",
    slug: "infrastructure-financing-gap",
    title: "Closing Africa's $100B Annual Infrastructure Financing Gap",
    excerpt: "Innovative financing mechanisms — from green bonds to blended finance — are reshaping how critical infrastructure gets funded across African nations.",
    content: "The infrastructure deficit remains Africa's most significant development challenge...",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    category: "Infrastructure",
    author: "Amara Diallo",
    authorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80",
    date: "2024-10-28",
    readTime: "6 min read",
    featured: false,
    tags: ["Infrastructure", "PPP", "Blended Finance"],
  },
  {
    id: "3",
    slug: "afcfta-opportunities-guide",
    title: "AfCFTA: The Game-Changer for Intra-African Investment",
    excerpt: "The African Continental Free Trade Area is creating the world's largest single market. Here's how investors can position themselves for the opportunities ahead.",
    content: "With 54 signatory nations and a combined GDP of $3.4 trillion...",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
    category: "Trade & Policy",
    author: "Prof. Chidi Okonkwo",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    date: "2024-10-10",
    readTime: "5 min read",
    featured: false,
    tags: ["AfCFTA", "Trade", "Policy"],
  },
  {
    id: "4",
    slug: "fintech-revolution-africa",
    title: "Africa's Fintech Revolution: The New Frontier for Investors",
    excerpt: "From mobile money to embedded finance, Africa's fintech sector is attracting global capital at record rates. Discover the key opportunities and risks.",
    content: "Africa's fintech ecosystem has evolved from basic mobile money transfer...",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
    category: "Technology",
    author: "David Osei-Mensah",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    date: "2024-09-22",
    readTime: "7 min read",
    featured: false,
    tags: ["Fintech", "Technology", "Mobile Money"],
  },
  {
    id: "5",
    slug: "green-energy-investment-africa",
    title: "Green Energy: Africa's $250B Renewable Investment Wave",
    excerpt: "Africa holds 60% of the world's best solar irradiation. The continent is on the cusp of a renewable energy revolution that will define global clean energy markets.",
    content: "The numbers are staggering: Africa has the solar and wind potential...",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80",
    category: "Energy",
    author: "Dr. Naledi Dlamini",
    authorImage: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=100&q=80",
    date: "2024-09-08",
    readTime: "9 min read",
    featured: false,
    tags: ["Energy", "Renewables", "Climate"],
  },
  {
    id: "6",
    slug: "agribusiness-transformation",
    title: "Agribusiness: Feeding Africa and the World",
    excerpt: "With 65% of the world's uncultivated arable land, Africa's agricultural transformation represents one of the most compelling investment theses of our time.",
    content: "Africa's agricultural sector stands at an inflection point...",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
    category: "Agriculture",
    author: "Fatima Al-Hassan",
    authorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80",
    date: "2024-08-20",
    readTime: "6 min read",
    featured: false,
    tags: ["Agribusiness", "Food Security", "Agriculture"],
  },
];

// ─── Countries ────────────────────────────────────────────────────────────────
export const AFRICAN_COUNTRIES = [
  "Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cabo Verde",
  "Cameroon", "Central African Republic", "Chad", "Comoros", "Congo (Brazzaville)",
  "DRC", "Djibouti", "Egypt", "Equatorial Guinea", "Eritrea", "Eswatini", "Ethiopia",
  "Gabon", "Gambia", "Ghana", "Guinea", "Guinea-Bissau", "Ivory Coast", "Kenya",
  "Lesotho", "Liberia", "Libya", "Madagascar", "Malawi", "Mali", "Mauritania",
  "Mauritius", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria", "Rwanda",
  "São Tomé & Príncipe", "Senegal", "Seychelles", "Sierra Leone", "Somalia",
  "South Africa", "South Sudan", "Sudan", "Tanzania", "Togo", "Tunisia", "Uganda",
  "Zambia", "Zimbabwe",
];

export const GLOBAL_REGIONS = [
  "Europe", "North America", "South America", "Middle East", "South Asia",
  "East Asia", "Southeast Asia", "Oceania", "Caribbean", "Central Asia",
];

// ─── Sectors ─────────────────────────────────────────────────────────────────
export const SECTORS = [
  "Infrastructure & Transport",
  "Energy & Renewables",
  "Financial Services & Fintech",
  "Agriculture & Agribusiness",
  "Technology & ICT",
  "Real Estate & Housing",
  "Healthcare & Pharmaceuticals",
  "Education & Human Capital",
  "Mining & Natural Resources",
  "Manufacturing & Industry",
  "Tourism & Hospitality",
  "Trade & Logistics",
  "Blue Economy & Fisheries",
  "Defence & Security",
  "Creative Economy",
];

// ─── Summit Agenda ────────────────────────────────────────────────────────────
export const SUMMIT_AGENDA = [
  { day: "Day 1", date: "March 12, 2025", title: "Arrivals & Welcome Gala", desc: "VIP welcome reception, networking dinner, cultural showcase" },
  { day: "Day 2", date: "March 13, 2025", title: "Plenary Sessions & Keynotes", desc: "Heads of state addresses, keynote speakers, ministerial roundtables" },
  { day: "Day 3", date: "March 14, 2025", title: "Deal Rooms & Sector Forums", desc: "B2B matchmaking, sector investment forums, PPP deal clinics" },
  { day: "Day 4", date: "March 15, 2025", title: "Closing & Declarations", desc: "Communiqué signing, award ceremony, gala dinner & networking" },
];
