import { Component, signal, computed } from '@angular/core';

@Component({
  imports: [],
  selector: 'tech-stack-component',
  styleUrl: './tech-stack.component.scss',
  templateUrl: './tech-stack.component.html',
})
export class TechStackComponent {
  TECH_STACK = [
    {
      id: 1,
      name: 'JavaScript',
      category: 'frontend',
      icon: 'fab fa-js',
      colorClass: 'text-amber',
    },
    {
      id: 2,
      name: 'TypeScript',
      category: 'frontend',
      icon: 'fab fa-js',
      colorClass: 'text-sky',
    },

    {
      id: 3,
      name: 'React',
      category: 'frontend',
      icon: 'fab fa-react',
      colorClass: 'text-sky',
    },
    {
      id: 4,
      name: 'Angular',
      category: 'frontend',
      icon: 'fab fa-angular',
      colorClass: 'text-red',
    },
    {
      id: 5,
      name: 'Vue.js',
      category: 'frontend',
      icon: 'fab fa-vuejs',
      colorClass: 'text-emerald',
    },
    {
      id: 6,
      name: 'Pinia',
      category: 'frontend',
      icon: 'fas fa-lemon',
      colorClass: 'text-amber',
    },
    {
      id: 7,
      name: 'NgRx',
      category: 'frontend',
      icon: 'fas fa-cubes',
      colorClass: 'text-purple',
    },
    {
      id: 8,
      name: 'Python',
      category: 'backend',
      icon: 'fab fa-python',
      colorClass: 'text-emerald',
    },
    {
      id: 9,
      name: 'SQL',
      category: 'database',
      icon: 'fas fa-database',
      colorClass: 'text-blue',
    },
    {
      id: 10,
      name: 'HTML5',
      category: 'frontend',
      icon: 'fab fa-html5',
      colorClass: 'text-orange',
    },
    {
      id: 11,
      name: 'CSS',
      category: 'frontend',
      icon: 'fa-brands fa-css',
      colorClass: 'text-sky',
    },
    {
      id: 12,
      name: 'Node.js',
      category: 'backend',
      icon: 'fab fa-node-js',
      colorClass: 'text-emerald',
    },
    {
      id: 13,
      name: 'Express.js',
      category: 'backend',
      icon: 'fas fa-server',
      colorClass: 'text-slate',
    },
    {
      id: 14,
      name: 'FastAPI',
      category: 'backend',
      icon: 'fas fa-bolt',
      colorClass: 'text-teal',
    },
    {
      id: 15,
      name: 'SQLAlchemy',
      category: 'backend',
      icon: 'fas fa-link',
      colorClass: 'text-indigo',
    },
    {
      id: 16,
      name: 'Pydantic',
      category: 'backend',
      icon: 'fas fa-shield-alt',
      colorClass: 'text-rose',
    },
    {
      id: 17,
      name: 'PostgreSQL',
      category: 'database',
      icon: 'fas fa-database',
      colorClass: 'text-cyan',
    },
    {
      id: 18,
      name: 'MongoDB',
      category: 'database',
      icon: 'fas fa-leaf',
      colorClass: 'text-emerald',
    },
    {
      id: 19,
      name: 'Docker',
      category: 'deployment',
      icon: 'fab fa-docker',
      colorClass: 'text-sky',
    },
    {
      id: 20,
      name: 'OpenShift',
      category: 'deployment',
      icon: 'fas fa-cloud',
      colorClass: 'text-red',
    },
  ];

  techFilters = [
    { id: 'all', label: 'All' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'deployment', label: 'Deployment' },
  ];

  filteredTechStack = computed(() => {
    const filter = this.activeTechFilter();
    if (filter === 'all') return this.TECH_STACK;
    return this.TECH_STACK.filter((t) => t.category === filter);
  });

  activeTechFilter = signal<string>('all');
}
