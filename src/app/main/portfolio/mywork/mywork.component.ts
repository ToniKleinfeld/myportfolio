import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollAnimationDirective } from '../../../directives/scroll-animation.directive';
import { ScrolltoService } from '../../../service/scrollto.service';

@Component({
  selector: 'app-mywork',
  standalone: true,
  imports: [CommonModule, TranslateModule, ScrollAnimationDirective],
  templateUrl: './mywork.component.html',
  styleUrls: ['./mywork.component.scss', './mywork.mobile.component.scss'],
})
export class MyworkComponent {
  constructor(private scrollService: ScrolltoService) {}
  navigateToSection(sectionId: string): void {
    this.scrollService.scrollToElement(sectionId);
  }

  isDesktop(): boolean {
    return window.innerWidth > 1025;
  }

  navigateToSectionResponsive(mobileSectionId: string) {
    const sectionId = this.isDesktop()
      ? mobileSectionId + '1'
      : mobileSectionId;
    this.navigateToSection(sectionId);
  }

  frontendProjects: boolean = true;

  projectsArray = {
    frontend: [
      {
        name: 'Join',
        skills: 'JavaScript, Firebase, CSS, HTML, Scrum',
        key: 'Join',
        toggle: false,
        href: 'https://toni-kleinfeld.com/join/index.html',
        hrefGit: 'https://github.com/ToniKleinfeld/Join',
      },
      {
        name: 'Little Sharky',
        skills: 'JavaScript, CSS, HTML',
        key: 'Sharky',
        toggle: false,
        href: 'https://toni-kleinfeld.com/sharky/index.html',
        hrefGit: 'https://github.com/ToniKleinfeld/Little-Sharky',
      },
      {
        name: 'Pokedex',
        skills: 'JavaScript, Rest-Api, CSS, HTML',
        key: 'Pokedex',
        toggle: false,
        href: 'https://toni-kleinfeld.com/pokedex/index.html',
        hrefGit: 'https://github.com/ToniKleinfeld/Pokedex',
      },
      {
        name: 'Ongoing',
        nextProject: 'mywork.nextWork',
      },
    ],
    backend: [
      {
        name: 'Videoflix',
        skills: 'Django, Redis, PostgreSQL, Django Rest Framework',
        key: 'Pokedex',
        toggle: false,
        href: 'https://toni-kleinfeld.com/videoflix',
        hrefGit: 'https://github.com/ToniKleinfeld/Videoflix',
      },
      {
        name: 'Join',
        skills: 'Angular, Django, Django Rest Framework, SQLite , SCSS, HTML',
        key: 'Join',
        toggle: false,
        href: 'https://toni-kleinfeld.com/angular-join',
        hrefGit: 'https://github.com/ToniKleinfeld/Backend-Join',
      },
      {
        name: 'Coderr',
        skills: 'Django, Django Rest Framework, SQLite',
        key: 'Sharky',
        toggle: false,
        href: 'https://toni-kleinfeld.com/coderr',
        hrefGit: 'https://github.com/ToniKleinfeld/backend.Coderr',
      },
      {
        name: 'Ongoing',
        nextProject: 'mywork.nextWork',
      },
    ],
  };

  setProjectsSet() {
    return this.frontendProjects
      ? this.projectsArray.frontend
      : this.projectsArray.backend;
  }

  scrollToElement(event: Event, elementId: string) {
    event.preventDefault();

    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        inline: 'start',
        block: 'nearest',
      });
    }
  }
}
