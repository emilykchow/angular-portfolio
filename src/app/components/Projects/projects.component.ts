import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'projects-component',
  styleUrl: './projects.component.scss',
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  PROJECTS = [
    {
      id: '1',
      title: "Leon's Stores Listing",
      description:
        'Developed a responsive store locator featuring 91 store listings with dedicated detail pages for each location.',
      icon: 'fa-brands fa-shopify',
      iconBg: 'bg-amber-500/10',
      iconColor: 'text-amber-400',
      url: 'https://www.leons.ca/pages/store-listings/',
      tags: ['Shopify', 'Liquid', 'SCSS'],
      image: '/assets/images/leons-store-details.jpg',
    },
    {
      id: '2',
      title: 'React Portfolio Site',
      description:
        'Designed and developed a personal portfolio from scratch using React, with a responsive layout.',
      icon: 'fa-brands fa-codepen',
      iconBg: 'bg-sky-500/10',
      iconColor: 'text-sky-400',
      url: 'https://emilykchow-react-portfolio.vercel.app',
      tags: ['React.js', 'HTML', 'SCSS'],
      image: '/assets/images/portfolio-react.jpg',
    },
    {
      id: '3',
      title: 'Concert Landing Page',
      description:
        'Developed a clean, minimalist concert landing page with a modern layout and engaging visual presentation.',
      icon: 'fa-brands fa-codepen',
      iconBg: 'bg-indigo-500/10',
      iconColor: 'text-indigo-400',
      url: 'https://emilykchow.github.io/concert-landing-page/',
      tags: ['React', 'HTML', 'CSS'],
      image: '/assets/images/concert-landing-page.jpg',
    },
    {
      id: '4',
      title: 'News Articles Web App',
      description:
        'Created a news article web app featuring article search, detailed article views, and deletion functionality.',
      icon: 'fa-brands fa-codepen',
      iconBg: 'bg-cyan-500/10',
      iconColor: 'text-cyan-400',
      url: 'https://emilykchow.github.io/blackjack/',
      tags: ['React', 'HTML', 'CSS'],
      image: '/assets/images/news-app.jpg',
    },
    {
      id: '5',
      title: 'Black Jack Game',
      description:
        'Developed an interactive Blackjack game where players can place bets, hit, or stand to play against the dealer.',
      icon: 'fa-brands fa-codepen',
      iconBg: 'bg-cyan-500/10',
      iconColor: 'text-cyan-400',
      url: 'https://emilykchow.github.io/blackjack/',
      tags: ['JavaScript', 'CSS'],
      image: '/assets/images/black-jack.jpg',
    },
    {
      id: '6',
      title: 'Quiz Web App',
      description:
        'Developed an interactive quiz app that provides instant feedback on answer accuracy and features a toggle between dark and light themes.',
      icon: 'fa-brands fa-codepen',
      iconBg: 'bg-cyan-500/10',
      iconColor: 'text-cyan-400',
      url: 'https://emilykchow.github.io/react-quiz/',
      tags: ['React', 'HTML', 'CSS'],
      image: '/assets/images/quiz-app.jpg',
    },
  ];

  selectedCategory = signal<string>('all');
}
