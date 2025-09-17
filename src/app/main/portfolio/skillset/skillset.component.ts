import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollAnimationDirective } from '../../../directives/scroll-animation.directive';
import { AddSpacePipe } from '../../../shared/pipes/add-space.pipe';

@Component({
  selector: 'app-skillset',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    ScrollAnimationDirective,
    AddSpacePipe,
  ],
  templateUrl: './skillset.component.html',
  styleUrl: './skillset.component.scss',
})
export class SkillsetComponent {
  frontendSkills: boolean = false;

  iconArray = {
    frontend: [
      'Angular',
      'TypeScript',
      'JavaScript',
      'Firebase',
      'Rest-Api',
      'Git',
      'Scrum',
      'SCSS',
      'CSS',
      'HTML',
      'Material_Design',
      'Bootstrap',
      'Challenge_me',
    ],
    backend: [
      'Django',
      'Django_RF',
      'Python',
      'PostgreSQL',
      'Redis',
      'Linux',
      'SQLite',
      'Google_cloud',
      'Github_Action',
      'Challenge_me',
    ],
  };

  setSkillSet() {
    return this.frontendSkills
      ? this.iconArray.frontend
      : this.iconArray.backend;
  }
}
