export interface BusinessName {
  name: string;
  domain: string;
  category: string;
  tagline: string;
  isPremium?: boolean;
}

export const BUSINESS_NAMES_DATA: BusinessName[] = [
  { name: "Paylio", domain: "paylio.com", category: "Fintech", tagline: "Fast, modern payments for Africa", isPremium: true },
  { name: "Zestly", domain: "zestly.ng", category: "E-commerce", tagline: "Fresh brand for your online store", isPremium: true },
  { name: "KudaSoft", domain: "kudasoft.com", category: "SaaS", tagline: "Next-gen enterprise solutions", isPremium: true },
  { name: "FarmBrim", domain: "farmbrim.com", category: "AgriTech", tagline: "Digitizing agricultural value chains", isPremium: true },
  { name: "HealthQ", domain: "healthq.ng", category: "HealthTech", tagline: "Smart healthcare management", isPremium: true },
  { name: "EduSpark", domain: "eduspark.com", category: "EdTech", tagline: "Igniting the future of learning", isPremium: true },
  { name: "SwiftKash", domain: "swiftkash.com", category: "Fintech", tagline: "Seamless micro-lending platform" },
  { name: "GlowMart", domain: "glowmart.ng", category: "Retail", tagline: "Your neighborhood digital superstore" },
  { name: "TechNova", domain: "technova.com", category: "IT Services", tagline: "Scalable cloud infrastructure for all" },
  { name: "PureAqua", domain: "pureaqua.ng", category: "Manufacturing", tagline: "Premium bottled water production" },
  { name: "BioGenix", domain: "biogenix.com", category: "Health", tagline: "Advanced diagnostics and lab services" },
  { name: "SolarBeam", domain: "solarbeam.ng", category: "Energy", tagline: "Accessible solar power for homes" },
  { name: "Ventra", domain: "ventra.ng", category: "Logistics", tagline: "Last-mile delivery for everyone" },
  { name: "CredoLink", domain: "credolink.com", category: "Fintech", tagline: "Unified credit scoring systems" },
  { name: "StyleFlow", domain: "styleflow.ng", category: "Fashion", tagline: "Trendy apparel for the modern era" },
];

export const CATEGORIES = [
  "All",
  "Fintech",
  "SaaS",
  "E-commerce",
  "AgriTech",
  "HealthTech",
  "EdTech",
  "Retail",
  "Logistics",
  "Energy",
];
