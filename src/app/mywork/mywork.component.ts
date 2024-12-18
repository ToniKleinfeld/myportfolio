import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-mywork',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './mywork.component.html',
  styleUrl: './mywork.component.scss',
})
export class MyworkComponent {
  projectsArray = [
    { 
      name: 'Join',
      about: 'mywork.joinabout',
      skills: 'Angular, JavaScript, Firebase, CSS, HTML, Scrum',
      learned: 'mywork.joinlearned',
    }
  ];
}
