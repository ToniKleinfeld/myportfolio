import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollAnimationDirective } from '../../../directives/scroll-animation.directive';

@Component({
  selector: 'app-mywork',
  standalone: true,
  imports: [CommonModule, TranslateModule, ScrollAnimationDirective],
  templateUrl: './mywork.component.html',
  styleUrls: ['./mywork.component.scss', './mywork.mobile.component.scss'],
})
export class MyworkComponent {
  projectsArray = [
    {
      name: 'Join',
      skills: 'JavaScript, Firebase, CSS, HTML, Scrum',
      key: 'Join',
      toggle: false,
      href: "https://toni-kleinfeld.de/join/index.html",
      hrefGit:"https://github.com/ToniKleinfeld/Join"
    },
    {
      name: 'Little Sharky',
      skills: 'JavaScript, CSS, HTML',
      key: 'Sharky',
      toggle: false,
      href: "https://toni-kleinfeld.de/sharky/index.html",
      hrefGit:"https://github.com/ToniKleinfeld/Little-Sharky"
    },
    // {
    //   name: 'Ring of Fire',
    //   skills: 'Angular, TypeScript, Firebase, SCSS, HTML',
    //   key: 'Ringoffire',
    //   toggle: false,
    //   href: "https://toni-kleinfeld.com/",
    //   hrefGit:"https://github.com/ToniKleinfeld/ring-of-fire"
    // },
    {
      name: 'Pokedex',
      skills: 'JavaScript, Rest-Api, CSS, HTML',
      key: 'Pokedex',
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
