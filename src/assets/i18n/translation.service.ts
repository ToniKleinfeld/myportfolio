import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  public language:string = 'en';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
   }

   public changeLanguage(changeTo: string) {
    this.language = changeTo;
    this.translate.use(changeTo);
   }
}