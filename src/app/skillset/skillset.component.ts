import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skillset',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './skillset.component.html',
  styleUrl: './skillset.component.scss'
})
export class SkillsetComponent {
 iconArray = ['Angular','TypeScript','JavaScript','Rest-Api','Firebase','Git','Scrum','SCSS','Material','HTML','CSS','Challenge']
}