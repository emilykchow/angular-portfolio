// import { Component, signal } from '@angular/core';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { WorkExperience, TechStack } from './model/work';
import { Project } from './model/project';
import { Game } from './model/personal';
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
  isDarkMode = signal(true);

  toggleTheme() {
    this.isDarkMode.update((isDark) => !isDark);
  }

  downloadResume() {
    // this.triggerToast('Emily_Chow_Resume.pdf download initiated!');
    // Virtual download trigger
    // const blob = new Blob(
    //   [
    //     `EMILY CHOW - Senior Full-Stack Developer\n\nExperience:\n- RBC (Senior Front-End Developer)\n- Leon's Furniture Limited Group (Web Developer)\n- TK Events (Web Developer)\n- Esance (Web Developer)`,
    //   ],
    //   { type: 'text/plain' },
    // );
    // const url = window.URL.createObjectURL(blob);
    // const a = document.createElement('a');
    // a.href = url;
    // a.download = 'Emily_Chow_Resume.txt';
    // a.click();
    // window.URL.revokeObjectURL(url);
    console.log('download resume');
  }

  // triggerToast(msg: string) {
  //   this.toastMessage.set(msg);
  //   setTimeout(() => {
  //     this.toastMessage.set(null);
  //   }, 3500);
  // }
}
