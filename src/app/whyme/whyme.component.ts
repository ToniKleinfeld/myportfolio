import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { WhymeiconsComponent } from "./whymeicons/whymeicons.component";

@Component({
  selector: 'app-whyme',
  standalone: true,
  imports: [TranslateModule, WhymeiconsComponent],
  templateUrl: './whyme.component.html',
  styleUrl: './whyme.component.scss'
})
export class WhymeComponent {

}
