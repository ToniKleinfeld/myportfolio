import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslationService } from '../../../../../../assets/i18n/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-iconssection',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './iconssection.component.html',
  styleUrl: './iconssection.component.scss'
})
export class IconssectionComponent {

  public activeLanguage:string;

  constructor(private translation: TranslationService){
    this.activeLanguage = this.translation.language;
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