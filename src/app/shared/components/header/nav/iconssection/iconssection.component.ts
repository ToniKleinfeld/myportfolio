import { Component,Injectable, Inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../../../../../assets/i18n/translation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-iconssection',
  standalone: true,
  imports: [TranslateModule,CommonModule],
  templateUrl: './iconssection.component.html',
  styleUrl: './iconssection.component.scss'
})

@Injectable({
  providedIn: 'root',
})

export class IconssectionComponent {

  constructor(private translation: TranslationService){
  }

  translate:boolean = true;

  changeLanguage(){
    if (this.translate == true) {
      this.translate = false;
      this.translation.changeLanguage('de')
    } else {
      this.translate = true;
      this.translation.changeLanguage('en')
    }
  }
}