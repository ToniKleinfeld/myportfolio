import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../../../../../assets/i18n/translation.service';
import { CommonModule } from '@angular/common';
import { IconsComponent } from "./icons/icons.component";
@Component({
  selector: 'app-iconssection',
  standalone: true,
  imports: [TranslateModule, CommonModule, IconsComponent],
  templateUrl: './iconssection.component.html',
  styleUrl: './iconssection.component.scss'
})

export class IconssectionComponent {

  constructor(private translation: TranslationService){
    this.translate = (this.translation.language === 'de') ? false : true;
  }

  translate:boolean = true;

  changeLanguage(){
    if (this.translate == true) {
      this.translate = false;
      this.translation.changeLanguage('de');
      localStorage.setItem('currentLang','de');
    } else {
      this.translate = true;
      this.translation.changeLanguage('en');
      localStorage.setItem('currentLang','en');
    }
  }
}