const WA_NUMBER = "2348163128234";

/**
 * Generates a wa.me deep-link with a pre-filled message encoding user intent.
 * @param message - The pre-filled WhatsApp message text
 */
export function waLink(message: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Pre-built intent messages for each CTA context */
export const WA_MESSAGES = {
  hero: "Hi! I'd like to start my business with FastCAC. Can you help me get started?",
  heroSecondary: "Hi, I'd like to learn more about FastCAC before registering. Can we talk?",
  navbar: "Hi! I want to register my business with FastCAC. How do I get started?",
  mobileMenu: "Hi! I'm interested in registering my business with FastCAC. Please help me get started.",
  pricingStarter: "Hi! I'd like to start with the Starter Package (₦100,000) — Business Name, CAC Registration, Logo, and a 1-page website. How do I proceed?",
  pricingPro: "Hi! I'd like the Business Pro Package (₦200,000) — everything in Starter plus Business Email, a multi-page website, and Social Media setup. How do I proceed?",
  pricingFull: "Hi! I'd like the Full Setup Package (₦400,000) — the complete company incorporation with premium branding and a corporate bank account. How do I proceed?",
  stickyStarter: "Hi! I'm ready to go with the Starter Package (₦100,000). Please help me register my business.",
  stickyPro: "Hi! I'm ready to go with the Business Pro Package (₦200,000). Please help me register my business.",
  stickyFull: "Hi! I'm ready to go with the Full Setup Package (₦400,000). Please help me set up my company.",
  finalCTA: "Hi! I'm ready to own my business. I'd like to get started with FastCAC today.",
  businessName: "Hi! I'd like to get a business name for my company. How do I proceed?",
  consultation: "Hi! I'd like to book a strategy consultation with FastCAC to discuss the right package for my business.",
  whatsapp: "Hi! I found FastCAC online and I have a question about business registration.",
};

/**
 * Generates a WhatsApp message for a specific business name and package.
 * @param name - The chosen business name
 * @param packageType - The selected package
 */
export function getNameMessage(name: string, packageType: string): string {
  const cases: Record<string, string> = {
    starter: `Hi! I'd like to claim the name "${name}" with the Starter Package (₦100,000). How do I proceed?`,
    pro: `Hi! I'd like to claim the name "${name}" with the Business Pro Package (₦200,000). How do I proceed?`,
    full: `Hi! I'd like to claim the name "${name}" with the Full Setup Package (₦400,000). How do I proceed?`,
  };
  return cases[packageType] || `Hi! I'd like to claim the name "${name}". How do I proceed?`;
}
