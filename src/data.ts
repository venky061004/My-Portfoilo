export interface Skill {
  icon: string;
  name: string;
}

export interface Project {
  title: string;
  image: string;
  description?: string;
  metrics?: string[];
}

export interface SkillsData {
  development: Skill[];
  frameworks: Skill[];
  learning: Skill[];
  other: Skill[];
}

export interface WorkExperience {
  company: string;
  role: string;
  type: string;
  period: string;
  location: string;
  description: string;
  metrics: {
    label: string;
    value: string;
  }[];
  details: {
    label: string;
    value: string;
  }[];
}

export const skillsData: SkillsData = {
  development: [
    { icon: 'fab fa-meta', name: 'Meta Ads Manager' },
    { icon: 'fab fa-google', name: 'Google Ads' },
    { icon: 'fas fa-chart-line', name: 'Google Analytics' },
    { icon: 'fas fa-bullseye', name: 'Market Place' }
  ],
  frameworks: [
    { icon: 'fas fa-palette', name: 'Canva' },
    { icon: 'fas fa-file-excel', name: 'Excel' },
    { icon: 'fas fa-chart-bar', name: 'Data Studio' },
    { icon: 'fas fa-funnel-dollar', name: 'Funnel Strategy' }
  ],
  learning: [
    { icon: 'fas fa-book', name: 'SEO' },
    { icon: 'fas fa-bar-chart', name: 'LinkedIn Ads' },
    { icon: 'fas fa-mobile-alt', name: 'App Marketing' }
  ],
  other: [
    { icon: 'fas fa-flask', name: 'A/B Testing' },
    { icon: 'fas fa-users', name: 'Audience Segmentation' },
    { icon: 'fas fa-dollar-sign', name: 'ROI Optimization' },
    { icon: 'fas fa-chart-pie', name: 'Data Analysis' }
  ]
};

export const workExperience: WorkExperience[] = [
  {
    company: 'Earthy Origins',
    role: 'Performance Marketing (Meta & Google)',
    type: 'D2C',
    period: 'Aug 2024 – July 2025',
    location: 'Tamil Nadu, India',
    description: 'Built full-funnel marketing strategy for Meta Ads (TOFU & BOFU) and migrated Google Ads to Performance Max.',
    metrics: [
      { label: 'ROAS', value: '3.10' },
      { label: 'Revenue', value: '₹88L+' },
      { label: 'Purchases', value: '8600+' },
      { label: 'Reach', value: '3.5M+' }
    ],
    details: [
      { label: 'Spend', value: '₹28+L (Meta) + ₹1.5+L (Google)' },
      { label: 'Impressions', value: '12M+' },
      { label: 'CPC', value: '₹17.3 (Meta), ₹1.5 (Google)' },
      { label: 'CPM', value: '₹205' }
    ]
  },
  {
    company: 'Food Innovators',
    role: 'B2B Lead Generation via Google Ads',
    type: 'B2B',
    period: 'Oct 2024 – Sep 2025',
    location: 'Tamil Nadu, India',
    description: 'Helped contract food manufacturing & consulting firm attract B2B leads from startups launching food products.',
    metrics: [
      { label: 'Clicks', value: '6.6K' },
      { label: 'Impressions', value: '96K' },
      { label: 'Total Spend', value: '₹39.5K' },
      { label: 'Qualified Leads', value: '300' }
    ],
    details: [
      { label: 'Focus', value: 'Protein bars, Beverages, Snacks' },
      { label: 'Strategy', value: 'Keyword targeting + Landing pages' },
      { label: 'Results', value: 'Qualified Business and Startup leads' }
    ]
  }
];

export const achievements = [
  {
    icon: 'fas fa-trophy',
    title: '₹88+L Revenue Generated',
    subtitle: 'Meta Ads Success',
    description: 'Scaled Earthy Origins to massive revenue in 10 months via Meta Ads'
  },
  {
    icon: 'fas fa-chart-line',
    title: '3.10 ROAS Delivered',
    subtitle: 'ROI Excellence',
    description: 'Consistent profitability with structured funnel and CPR scaling'
  },
  {
    icon: 'fas fa-mouse-pointer',
    title: '₹1.5 CPC Achieved',
    subtitle: 'Cost Efficiency',
    description: 'Ultra-low cost per click using smart automation in Google Performance Max'
  },
  {
    icon: 'fas fa-shopping-cart',
    title: '8600+ Purchases',
    subtitle: 'Scale Achievement',
    description: 'Generated massive purchase volume with 13.7M+ impressions'
  },
  {
    icon: 'fas fa-handshake',
    title: '300 Qualified Leads',
    subtitle: 'B2B Success',
    description: 'Delivered high-quality startup leads for niche food consulting brand'
  }
];

export const performanceMetrics = {
  meta: {
    revenue: '₹80L+',
    roas: '3.07',
    spend: '₹26L',
    purchases: '7800+',
    impressions: '10.5M+',
    reach: '2.7M+',
    cpc: '₹17.3',
    cpm: '₹205'
  },
  google: {
    revenue: '₹7L',
    spend: '₹1.5K',
    clicks: '99k+',
    impressions: '1.5M+',
    cpc: '₹1.5',
    roas: '4.60'
  }
};

export interface Campaign {
  title: string;
  image: string;
  description: string;
  platform: string;
  tags: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  image: string;
  verified: boolean;
  link?: string;
}

export const campaigns: Campaign[] = [
  {
    title: 'Earthy Origins - TOFU Campaign',
    image: 'https://via.placeholder.com/400x300/1a1a1a/ffffff?text=Campaign+1',
    description: 'Full-funnel awareness campaign targeting cold audiences with category-based segmentation',
    platform: 'Meta Ads',
    tags: ['TOFU', 'Awareness', 'Segmentation']
  },
  {
    title: 'BOFU Retargeting Strategy',
    image: 'https://via.placeholder.com/400x300/1a1a1a/ffffff?text=Campaign+2',
    description: 'High-converting retargeting campaign with exclusive offers and CPR scaling',
    platform: 'Meta Ads',
    tags: ['BOFU', 'Retargeting', 'Conversion']
  },
  {
    title: 'Performance Max Campaign',
    image: 'https://via.placeholder.com/400x300/1a1a1a/ffffff?text=Campaign+3',
    description: 'Google Performance Max campaign achieving ₹1.5 CPC with smart automation',
    platform: 'Google Ads',
    tags: ['Performance Max', 'Automation', 'Low CPC']
  },
  {
    title: 'B2B Lead Generation',
    image: 'https://via.placeholder.com/400x300/1a1a1a/ffffff?text=Campaign+4',
    description: 'Targeted B2B campaign for food consulting firm attracting startup leads',
    platform: 'Google Ads',
    tags: ['B2B', 'Lead Gen', 'Startups']
  },
  {
    title: 'Creative A/B Testing',
    image: 'https://via.placeholder.com/400x300/1a1a1a/ffffff?text=Campaign+5',
    description: 'Multiple creative variations tested to identify winning assets',
    platform: 'Meta Ads',
    tags: ['A/B Testing', 'Creative', 'Optimization']
  },
  {
    title: 'Seasonal Campaign',
    image: 'https://via.placeholder.com/400x300/1a1a1a/ffffff?text=Campaign+6',
    description: 'High-impact seasonal campaign with special offers and urgency messaging',
    platform: 'Meta Ads',
    tags: ['Seasonal', 'Offers', 'Urgency']
  }
];

export const certifications: Certification[] = [
  {
    title: 'AI-Powered Shopping ads Certification',
    issuer: 'Google Skillshop',
    date: '2025',
    image: 'https://via.placeholder.com/300x200/4285F4/ffffff?text=AI+Shopping+Ads',
    verified: true,
    link: 'https://skillshop.credential.net/d1315a4a-4f6b-455a-ba2e-46f4c34a4236#acc.3HCK6xDd'
  },
  {
    title: 'Google Ads Search Certification',
    issuer: 'Google Skillshop',
    date: '2025',
    image: 'https://via.placeholder.com/300x200/34A853/ffffff?text=Google+Ads+Search',
    verified: true,
    link: 'https://skillshop.credential.net/2dbfbd5f-d9cb-458d-a406-78efb44c7b4d#acc.U7wna4Hq'
  }
];

