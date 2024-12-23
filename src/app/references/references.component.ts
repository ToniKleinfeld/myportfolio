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
      name: "user1",
      comment : "references.firstcomment",
      project : "Join" 
    },
    {
      name: "user2",
      comment : 'references.firstcomment',
      project : "KitchenWorld" 
    },
    {
      name: "user3",
      comment :'references.firstcomment',
      project : "Code Buddy" 
    }
  ];
}
 