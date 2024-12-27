import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss','./references.mobile.component.scss']
})
export class ReferencesComponent {
  referenceArray = [
    {
      name: "Marcel Menke",
      comment : "references.firstcomment",
      project : "references.buddy",
    },
    {
      name: "Patric K.",
      comment : 'references.secondcomment',
      project : "references.project" 
    },
    {
      name: "Boban Jakov.",
      comment :'references.thirdcomment',
      project : "references.project" 
    }
  ];
}