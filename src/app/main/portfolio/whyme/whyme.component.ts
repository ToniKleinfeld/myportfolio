import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { WhymeiconsComponent } from "./whymeicons/whymeicons.component";
import { ScrollAnimationDirective } from '../../../directives/scroll-animation.directive';

@Component({
  selector: 'app-whyme',
  standalone: true,
  imports: [TranslateModule, WhymeiconsComponent,ScrollAnimationDirective],
  templateUrl: './whyme.component.html',
  styleUrl: './whyme.component.scss'
})
export class WhymeComponent {

}
