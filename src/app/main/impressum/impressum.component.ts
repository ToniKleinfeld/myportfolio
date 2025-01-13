import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './impressum.component.html',
  styleUrl: '../../shared/impressum-data.scss'
})
export class ImpressumComponent {

}
