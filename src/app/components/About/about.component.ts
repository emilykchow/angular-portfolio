import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'about-component',
  styleUrl: './about.component.scss',
  templateUrl: './about.component.html',
})
export class AboutComponent {
  today = new Date();

  YEARS_OF_EXPERIENCE = this.today.getFullYear() - 2020;
}
