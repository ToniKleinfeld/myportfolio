import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {
  referenceArray = [
    {
      name: "Ryan friend",
      comment : "references.firstcomment",
      project : "Join" 
    },
    {
      name: "Kamila Kipa",
      comment : 'references.firstcomment',
      project : "KitchenWorld" 
    },
    {
      name: "Hugo Müller",
      comment :'references.firstcomment',
      project : "Code Buddy" 
    }
  ];
}
 