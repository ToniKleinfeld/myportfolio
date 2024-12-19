import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-mywork',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './mywork.component.html',
  styleUrls: ['./mywork.component.scss', './mywork.mobile.component.scss'],
})
export class MyworkComponent {
  projectsArray = [
    {
      name: 'Ring of Fire',
      about: 'mywork.fireabout',
      skills: 'Angular, TypeScript, Firebase, SCSS, HTML',
      learned: 'mywork.firelearned',
      img: 'Ringoffire',
    },
    {
      name: 'Join',
      about: 'mywork.joinabout',
      skills: 'JavaScript, Firebase, CSS, HTML, Scrum',
      learned: 'mywork.joinlearned',
      img: 'Join',
    },
    {
      name: 'Little Sharky',
      about: 'mywork.sharkyabout',
      skills: 'JavaScript, CSS, HTML',
      learned: 'mywork.sharkylearned',
      img: 'Sharky',
    },
    {
      name: 'Pokedex',
      about: 'mywork.pokeabout',
      skills: 'JavaScript, Rest-Api, CSS, HTML',
      learned: 'mywork.pokelearned',
      img: 'Pokedex',
    },
    {
      name: 'Ongoing',
      nextProject: 'mywork.nextWork',
    },
  ];
}
