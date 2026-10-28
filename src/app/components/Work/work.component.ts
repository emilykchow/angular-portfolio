import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'work-component',
  styleUrl: './work.component.scss',
  templateUrl: './work.component.html',
})
export class WorkComponent {
  WORK_EXPERIENCE = [
    {
      id: 1,
      company: 'Royal Bank of Canada (RBC)',
      role: 'Senior Front-End Developer',
      period: 'Dec 2024 – Oct 2026',
      description:
        'Developed multiple high impact platforms (Commercial Underwriting Assistant integrating six AI agents, LLM Onboarding portal, and AI Meeting web apps) using Angular, React, Vue.js, TypeScript, Python, FastAPI, Pydantic, Express.js, Node.js and PostgreSQL/MongoDB.',
      highlights: [
        'Full-Stack Development',
        'AI-Powered Platforms',
        'System Architecture',
        'DevOps',
      ],
      accentColor: 'bg-sky',
    },
    {
      id: 2,
      company: "Leon's Furniture Limited Group",
      role: 'Web Developer',
      period: 'May 2022 – Nov 2024',
      description:
        'Led a team to build a proprietary CRM system that optimized internal sales processes, and trained thousands of employees on internal web functions.',
      highlights: [
        'Full-Stack Development',
        'Proprietary CRM',
        'POS Checkout System',
        'Employee Training',
      ],
      accentColor: 'bg-indigo',
    },
    {
      id: 3,
      company: 'TK Events',
      role: 'Web Developer',
      period: 'Jan 2021 – Apr 2022',
      description:
        'Delivered 25+ online virtual events annually, driving $2,000,000 in yearly sales through robust, thoroughly tested web solutions.',
      highlights: [
        'Virtual Event Platforms',
        'Interactive Experiences',
        'Revenue Impact',
        'Client Facing',
      ],
      accentColor: 'bg-cyan',
    },
    {
      id: 4,
      company: 'Essnce',
      role: 'Web Developer',
      period: 'Jul 2020 – Nov 2020',
      description:
        'Launched Essnce’s e-commerce platform from scratch using JavaScript, Shopify, Liquid, and CSS, establishing initial revenue streams and building mobile-optimized versions that boosted mobile sales by 32%.',
      highlights: ['E-commerce Development', 'Shopify & Liquid', 'Mobile Optimization'],
      accentColor: 'bg-slate',
    },
  ];
}
