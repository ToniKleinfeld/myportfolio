import { Component } from '@angular/core';
import { BigPicGreetComponent } from './big-pic-greet/big-pic-greet.component';
import { WhymeComponent } from './whyme/whyme.component';
import { SkillsetComponent } from './skillset/skillset.component';
import { MyworkComponent } from './mywork/mywork.component';
import { ReferencesComponent } from './references/references.component';
import { ContactmeComponent } from './contactme/contactme.component';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ContactmeComponent,ReferencesComponent,MyworkComponent,SkillsetComponent,WhymeComponent,BigPicGreetComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
