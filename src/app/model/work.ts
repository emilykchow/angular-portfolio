export interface WorkExperience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  accentColor: string;
}

export interface TechStack {
  id: number;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'infra';
  icon: string;
  colorClass: string;
}
