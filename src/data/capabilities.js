import heroImage from '../assets/hero1.jpg';
import heroMobileImage from '../assets/hero1mobile.jpg';
import lifeImage from '../assets/life2.jpg';

const groupMeta = {
  'risk-transfer': {
    title: 'Risk Transfer',
    description: 'Durable capacity and portfolio resilience.',
  },
  'claims-consultancy': {
    title: 'Claims Consultancy',
    description: 'Strategic support for complex recoveries.',
  },
};

export const capabilityItems = [
  {
    slug: 'treaty',
    group: 'risk-transfer',
    title: 'Treaty Reinsurance Solutions',
    menuSubtext: 'Portfolio protection & capital efficiency',
    mobileLabel: 'Treaty Solutions',
    description: 'Comprehensive risk transfer programmes for balanced, resilient portfolios.',
    image: heroImage,
    accent: 'from-primary/90 via-primary/55 to-transparent',
    showOnHome: true,
    heroTitle: 'Treaty Reinsurance Solutions',
    heroSummary: 'We structure comprehensive risk transfer programs designed to optimize capital allocation, manage portfolio volatility, and protect your overarching balance sheet against frequency and severity shocks.',
    modules: [
      {
        title: 'Quota Share',
        text: 'Proportional premium and loss sharing from the first dollar, providing immediate surplus relief and capacity expansion.',
      },
      {
        title: 'Surplus Treaties',
        text: 'Dynamic proportional capacity that allows you to retain preferred risk levels while automatically ceding larger exposures.',
      },
      {
        title: 'Excess of Loss',
        text: 'Non-proportional layered protection designed to absorb severe individual risk losses or catastrophic multi-risk events.',
      },
      {
        title: 'Stop Loss',
        text: 'Ultimate balance sheet protection that caps your overarching loss ratio across an entire portfolio over a specified period.',
      },
    ],
    cta: {
      title: 'Evaluate Your Treaty Portfolio',
      text: 'Connect with our placement team to model and optimize your current proportional and non-proportional structures.',
      button: 'Speak To Our Specialists',
    },
  },
  {
    slug: 'facultative',
    group: 'risk-transfer',
    title: 'Specialized Facultative Reinsurance',
    menuSubtext: 'Capacity for complex individual risks',
    mobileLabel: 'Facultative',
    description: 'Specialist global capacity for high-value and unusual individual exposures.',
    image: lifeImage,
    accent: 'from-primary/85 via-secondary/35 to-transparent',
    showOnHome: true,
    heroTitle: 'Specialized Facultative Reinsurance',
    heroSummary: 'Facultative Reinsurance provides protection for individual risks that exceed an insurer\'s treaty capacity or require specialized underwriting expertise. The Company negotiates bespoke placements with reputable reinsurers to ensure optimal coverage and competitive terms.',
    modules: [
      {
        title: 'Large and Complex Risks',
        text: 'Placement of high-value commercial and industrial risks requiring specialized reinsurance support.',
      },
      {
        title: 'Engineering & Construction Risks',
        text: 'Protection for infrastructure projects, industrial plants, machinery, contractors\' works, commercial buildings and civil engineering projects.',
      },
      {
        title: 'Energy & Marine Risks',
        text: 'Reinsurance solutions for power generation, renewable energy projects, oil and gas installations, as well as specialized protection for cargo, hull, marine liabilities, ports and logistics operations.',
      },
      {
        title: 'Specialty Lines',
        text: 'Innovative solutions for emerging risks, including cyber risk, political violence, parametric insurance, agricultural risks, and trade credit.',
      },
    ],
    cta: {
      title: 'Secure Facultative Capacity',
      text: 'Engage our placement brokers to find immediate, competitive capacity for your complex individual risks.',
      button: 'Submit Risk Details',
    },
  },
  {
    slug: 'claims',
    group: 'claims-consultancy',
    title: 'Expert Claims Consultancy',
    menuSubtext: 'Advocacy & recovery strategy',
    mobileLabel: 'Claims Consultancy',
    description: 'Expert advocacy to protect recoveries on complex and catastrophic losses.',
    image: heroMobileImage,
    accent: 'from-primary/90 via-primary/45 to-transparent',
    showOnHome: true,
    heroTitle: 'Expert Claims Consultancy',
    heroSummary: 'Our commitment extends beyond placing reinsurance programmes. We provide comprehensive claims advisory services to ensure clients receive timely and equitable recoveries.',
    modules: [
      {
        title: 'Claims Recovery',
        text: 'We coordinate the recovery of reinsurance claims from reinsurers efficiently and professionally.',
      },
      {
        title: 'Claims Negotiation',
        text: 'We represent our clients during discussions with reinsurers to secure fair and commercially appropriate outcomes.',
      },
      {
        title: 'Claims Settlement',
        text: 'We facilitate prompt settlement by coordinating documentation, technical reviews and communication among all parties.',
      },
      {
        title: 'Dispute Resolution',
        text: 'Where disputes arise, we provide strategic guidance and technical support to achieve practical and timely resolutions.',
      },
    ],
    cta: {
      title: 'Accelerate Your Recoveries',
      text: 'Connect with our claims specialists to resolve outstanding balances and navigate complex loss scenarios.',
      button: 'Speak To A Claims Expert',
    },
  },
];

export const capabilityBySlug = Object.fromEntries(
  capabilityItems.map((item) => [item.slug, item]),
);

export const capabilityGroups = Object.entries(groupMeta).map(([key, meta]) => ({
  key,
  title: meta.title,
  description: meta.description,
  items: capabilityItems
    .filter((item) => item.group === key)
    .map((item) => ({
      slug: item.slug,
      label: item.title,
      mobileLabel: item.mobileLabel,
      subtext: item.menuSubtext,
      href: `/capabilities/${item.slug}`,
    })),
}));

export const homeCapabilityCards = capabilityItems.map((item, index) => ({
  id: item.slug,
  slug: item.slug,
  role: ['The Portfolio', 'The Specialist', 'The Advocate'][index],
  title: item.title,
  description: item.description,
  image: item.image,
  accent: item.accent,
}));
