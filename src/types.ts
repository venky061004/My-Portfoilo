export type Skill = {
  icon: string;
  name: string;
};

export type Project = {
  title: string;
  image: string;
  description?: string;
};

export type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type SkillsData = {
  development: Skill[];
  frameworks: Skill[];
  learning: Skill[];
  other: Skill[];
};

export type Campaign = {
  title: string;
  image: string;
  description: string;
  platform: string;
  tags: string[];
};

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  image: string;
  verified: boolean;
  link?: string;
};
