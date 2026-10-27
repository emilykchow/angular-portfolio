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
      colorClass: 'text-amber-400',
    },
    {
      id: 2,
      name: 'TypeScript',
      category: 'frontend',
      icon: 'fab fa-js',
      colorClass: 'text-sky-400',
    },

    {
      id: 3,
      name: 'React',
      category: 'frontend',
      icon: 'fab fa-react',
      colorClass: 'text-sky-400',
    },
    {
      id: 4,
      name: 'Angular',
      category: 'frontend',
      icon: 'fab fa-angular',
      colorClass: 'text-red-400',
    },
    {
      id: 5,
      name: 'Vue.js',
      category: 'frontend',
      icon: 'fab fa-vuejs',
      colorClass: 'text-emerald-400',
    },
    {
      id: 6,
      name: 'Pinia',
      category: 'frontend',
      icon: 'fas fa-lemon',
      colorClass: 'text-amber-300',
    },
    {
      id: 7,
      name: 'NgRx',
      category: 'frontend',
      icon: 'fas fa-cubes',
      colorClass: 'text-purple-400',
    },
    {
      id: 8,
      name: 'Python',
      category: 'backend',
      icon: 'fab fa-python',
      colorClass: 'text-emerald-400',
    },
    {
      id: 9,
      name: 'SQL',
      category: 'database',
      icon: 'fas fa-database',
      colorClass: 'text-blue-400',
    },
    {
      id: 10,
      name: 'HTML5',
      category: 'frontend',
      icon: 'fab fa-html5',
      colorClass: 'text-orange-400',
    },
    {
      id: 11,
      name: 'CSS3',
      category: 'frontend',
      icon: 'fab fa-css3-alt',
      colorClass: 'text-sky-400',
    },
    {
      id: 12,
      name: 'Node.js',
      category: 'backend',
      icon: 'fab fa-node-js',
      colorClass: 'text-emerald-500',
    },
    {
      id: 13,
      name: 'Express.js',
      category: 'backend',
      icon: 'fas fa-server',
      colorClass: 'text-slate-400',
    },
    {
      id: 14,
      name: 'FastAPI',
      category: 'backend',
      icon: 'fas fa-bolt',
      colorClass: 'text-teal-400',
    },
    {
      id: 15,
      name: 'SQLAlchemy',
      category: 'backend',
      icon: 'fas fa-link',
      colorClass: 'text-indigo-400',
    },
    {
      id: 16,
      name: 'Pydantic',
      category: 'backend',
      icon: 'fas fa-shield-alt',
      colorClass: 'text-rose-400',
    },
    {
      id: 17,
      name: 'PostgreSQL',
      category: 'database',
      icon: 'fas fa-database',
      colorClass: 'text-cyan-400',
    },
    {
      id: 18,
      name: 'MongoDB',
      category: 'database',
      icon: 'fas fa-leaf',
      colorClass: 'text-emerald-400',
    },
    {
      id: 19,
      name: 'Docker',
      category: 'deployment',
      icon: 'fab fa-docker',
      colorClass: 'text-sky-400',
    },
    {
      id: 20,
      name: 'OpenShift',
      category: 'deployment',
      icon: 'fas fa-cloud',
      colorClass: 'text-red-400',
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
