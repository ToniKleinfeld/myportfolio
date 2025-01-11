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
      name: 'Join',
      about: 'mywork.joinabout',
      skills: 'JavaScript, Firebase, CSS, HTML, Scrum',
      learned: 'mywork.joinlearned',
      img: 'Join',
      toggle: false,
      href: "https://toni-kleinfeld.de/join/index.html",
      hrefGit:"https://github.com/ToniKleinfeld/Join"
    },
    {
      name: 'Little Sharky',
      about: 'mywork.sharkyabout',
      skills: 'JavaScript, CSS, HTML',
      learned: 'mywork.sharkylearned',
      img: 'Sharky',
      toggle: false,
      href: "https://toni-kleinfeld.de/sharky/index.html",
      hrefGit:"https://github.com/ToniKleinfeld/Little-Sharky"
    },
    {
      name: 'Ring of Fire',
      about: 'mywork.fireabout',
      skills: 'Angular, TypeScript, Firebase, SCSS, HTML',
      learned: 'mywork.firelearned',
      img: 'Ringoffire',
      toggle: false,
      href: "https://toni-kleinfeld.com/",
      hrefGit:"https://github.com/ToniKleinfeld/ring-of-fire"
    },    
    {
      name: 'Pokedex',
      about: 'mywork.pokeabout',
      skills: 'JavaScript, Rest-Api, CSS, HTML',
      learned: 'mywork.pokelearned',
      img: 'Pokedex',
      toggle: false,
      href: "https://toni-kleinfeld.de/pokedex/index.html",
      hrefGit:"https://github.com/ToniKleinfeld/Pokedex"
    },
    {
      name: 'Ongoing',
      nextProject: 'mywork.nextWork',
    },
  ];
}
