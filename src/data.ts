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
    { icon: 'fas fa-bullseye', name: 'Performance Max' }
  ],
  frameworks: [
    { icon: 'fas fa-palette', name: 'Canva' },
    { icon: 'fas fa-file-excel', name: 'Excel' },
    { icon: 'fas fa-chart-bar', name: 'Data Studio' },
    { icon: 'fas fa-funnel-dollar', name: 'Funnel Strategy' }
  ],
  learning: [
    { icon: 'fas fa-robot', name: 'Marketing Automation' },
    { icon: 'fas fa-brain', name: 'AI-Powered Ads' },
    { icon: 'fas fa-video', name: 'Video Marketing' },
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
    location: 'Namakkal, Tamil Nadu',
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
    title: 'B2B Lead Generation',
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
  documentUrl?: string;
}

export interface Creative {
  title: string;
  type: string;
  description: string;
  tags: string[];
  documentUrl?: string;
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
    title: 'Campaign Portfolio',
    image: '',
    description: 'Complete collection of successful campaigns including Meta Ads, Google Ads, Performance Max, and B2B lead generation strategies with detailed performance metrics and insights.',
    platform: 'Meta Ads & Google Ads',
    tags: ['TOFU', 'BOFU', 'Performance Max', 'B2B', 'Lead Generation'],
    documentUrl: 'https://drive.google.com/drive/folders/1HAEdM6QOcB5jn2f1pe8HuT_SEDqJfByY?usp=sharing'
  }
];

export const creatives: Creative[] = [
  {
    title: 'Creative Assets Library',
    type: 'All Creative Work',
    description: 'Comprehensive collection of creative assets including ad copy, visual designs, video content, and landing pages used across successful campaigns.',
    tags: ['Ad Copy', 'Visual Design', 'Video Ads', 'Landing Pages', 'A/B Testing'],
    documentUrl: 'https://drive.google.com/drive/folders/1HAEdM6QOcB5jn2f1pe8HuT_SEDqJfByY?usp=sharing'
  }
];

export const certifications: Certification[] = [
  {
    title: 'AI-Powered Shopping ads Certification',
    issuer: 'Google Skillshop',
    date: '2024',
    image: 'https://via.placeholder.com/300x200/4285F4/ffffff?text=AI+Shopping+Ads',
    verified: true,
    link: 'https://skillshop.credential.net/d1315a4a-4f6b-455a-ba2e-46f4c34a4236#acc.3HCK6xDd'
  },
  {
    title: 'Google Ads Search Certification',
    issuer: 'Google Skillshop',
    date: '2024',
    image: 'https://via.placeholder.com/300x200/34A853/ffffff?text=Google+Ads+Search',
    verified: true,
    link: 'https://skillshop.credential.net/2dbfbd5f-d9cb-458d-a406-78efb44c7b4d#acc.U7wna4Hq'
  }
];
