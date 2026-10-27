import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'games-component',
  styleUrl: './games.component.scss',
  templateUrl: './games.component.html',
})
export class GamesComponent {
  gameRotation = [
    {
      id: 1,
      title: 'Cyberpunk 2077',
      badge: 'Action',
      genre: 'RPG',
      platform: 'PC',
      image: '/assets/images/cyberpunk.jpg',
    },
    {
      id: 2,
      title: 'The Witcher 3',
      badge: 'Action',
      genre: 'RPG',
      platform: 'PS5',
      image: '/assets/images/witcher-3.jpg',
    },
    {
      id: 3,
      title: 'GTA V',
      badge: 'Action',
      genre: 'RPG',
      platform: 'PC',
      image: '/assets/images/gta-5.jpg',
    },
    {
      id: 4,
      title: 'Palia',
      badge: 'Cozy',
      genre: 'Simulation',
      platform: 'PC',
      image: '/assets/images/palia.jpg',
    },
    {
      id: 5,
      title: 'Minecraft',
      badge: 'Cozy',
      genre: 'Simulation',
      platform: 'PC',
      image: '/assets/images/minecraft.jpg',
    },
  ];
}
