import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeroComponent } from './components/Hero/hero.component';
import { AboutComponent } from './components/About/about.component';
import { GamesComponent } from './components/Games/games.component';
import { WorkComponent } from './components/Work/work.component';
import { ProjectsComponent } from './components/Projects/projects.component';
import { TechStackComponent } from './components/TechStack/tech-stack.component';
import { FooterComponent } from './components/Footer/footer.component';

@Component({
  imports: [
    RouterOutlet,
    HeroComponent,
    AboutComponent,
    GamesComponent,
    WorkComponent,
    ProjectsComponent,
    TechStackComponent,
    FooterComponent,
  ],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  isDarkMode = signal(false);

  toggleTheme() {
    this.isDarkMode.update((isDark) => !isDark);
  }
}
